<?php

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::group(['prefix' => 'excel'], function () {
    $table = 'excel_table';
    Route::post('data', function (Request $request) use ($table) {
        if (!$request['id']) {
            return [null];
        }
        $id = $request['id'];
        $json = $request['json'];
        $checkUpdate = $request['check_update'] ? $request['check_update'] : false;
        if ($checkUpdate) {
            DB::table($table)
                ->updateOrInsert(
                    [
                        'id' => $id,
                    ],
                    [
                        'json' => $json,
                    ]
                );
        }
        $getData = DB::table($table)->where('id', $id)->first();
        if ($getData) {
            return response()->json($getData);
        }
        return response()->json([null], 404);
    });
    Route::post('delete', function (Request $request) use ($table) {
        $id = $request['id'];
        if (!$id) {
            return [null];
        }
        DB::table($table)->where('id', $id)->delete();
        return response()->json(['status' => true], 200);
    });
});

Route::group(['prefix' => 'excel'], function () {
    Route::group(['prefix' => 'bao-cao-ban-hangs'], function () {
        $table = 'bao_cao_ban_hangs';
        Route::post('data', function () use ($table) {
            $getData = DB::table($table)->get(['id', 'name', 'updated_at']);
            if ($getData) {
                return response()->json($getData);
            }
            return response()->json(['status' => null], 404);
        });
        Route::post('total', function () use ($table) {
            $getCount = DB::table($table)->count();
            return response()->json($getCount, 200);
        });
        Route::post('data-detail', function (Request $request) use ($table) {
            $id = $request['id'];
            $getData = DB::table($table)->where('id', $id)->first(['json']);
            if ($getData) {
                return response()->json($getData);
            }
            return response()->json(['status' => null], 404);
        });
        Route::post('new-data-detail', function (Request $request) use ($table) {
            $getData = DB::table($table)->orderByDesc('updated_at')->first(['json']);
            if ($getData) {
                return response()->json($getData);
            }
            return response()->json(['status' => null], 404);
        });
        Route::post('create', function (Request $request) use ($table) {
            $name = $request['name'] ? $request['name'] : '';
            $json = $request['json'];
            DB::table($table)->insert([
                'name' => $name,
                'json' => $json,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
            return response()->json(['status', true]);
        });
        Route::post('update', function (Request $request) use ($table) {
            $id = $request['id'];
            if (!$id) {
                return;
            }
            $name = DB::table($table)->where('id', $id)->select(['name']);
            $name = $request['name'] ? $request['name'] : $name;
            $json = $request['json'];
            DB::table($table)->where('id', $id)->update([
                'name' => $name,
                'json' => $json,
                'updated_at' => Carbon::now(),
            ]);
            return response()->json(['status', true]);
        });
        Route::post('delete', function (Request $request) use ($table) {
            $id = $request['id'];
            if (!$id) {
                return response()->json([null], 404);
            }
            $hasDelete = DB::table($table)->where('id', $id)->delete();
            if ($hasDelete) {
                return response()->json(['status' => true]);
            }
            return response()->json(['status' => false]);
        });
        Route::post('data-count', function (Request $request) use ($table) {
            $countQuery = DB::table($table)->count();
            $count = $request['count'] >= $countQuery ? $countQuery : $request['count'];
            $getData = DB::table($table)->orderByDesc('updated_at')->limit($count)->get(['json']);
            return response()->json($getData);
        });
    });
});

Route::group(['prefix' => 'backup-excel'], function () {
    $table = 'backup_excel';
    Route::post('create', function (Request $request) use ($table) {
        $title = $request['title'];
        $json = $request['json'];
        $time = Carbon::now();
        DB::table($table)
            ->insert(
                [
                    'title' => $title,
                    'json' => $json,
                    'created_at' => $time->toDateTimeString(),
                ]
            );
        return response()->json(['status' => true], 200);
    });
    Route::post('update', function (Request $request) use ($table) {
        $id = $request['id'];
        if (!$id) {
            return [null];
        }
        $json = $request['json'];
        DB::table($table)->where('id', $id)
            ->update(
                [
                    'json' => $json,
                ]
            );
        $getData = DB::table($table)->where('id', $id)->first();
        return response()->json($getData);
    });
    Route::post('data', function (Request $request) use ($table) {
        $id = $request['id'];
        if (!$id) {
            return [null];
        }
        $getData = DB::table($table)->where('id', $id)->first();
        return response()->json($getData);
    });
    Route::post('listdata', function (Request $request) use ($table) {
        $getData = DB::table($table)->get(['id', 'title', 'created_at']);
        if (!$getData) {
            return response()->json(null, 404);
        }
        return response()->json($getData, 200);
    });
    Route::post('delete', function (Request $request) use ($table) {
        $id = $request['id'];
        if (!$id) {
            return [null];
        }
        DB::table($table)->where('id', $id)->delete();
        return response()->json(['status' => true], 200);
    });
    Route::post('restore', function (Request $request) use ($table) {
        $id = $request['id'];
        $restoreJson = DB::table($table)->where('id', $id)->first(['json']);
        $json = $restoreJson->json;
        $restore = DB::table('excel_table')->updateOrInsert(
            ['id' => 20],
            [
                'json' => $json,
            ]
        );
        if ($restore) {
            return response()->json(['status' => true]);
        }
        return response()->json(['status' => false]);
    });
});

Route::group(['prefix' => 'filter-excel'], function () {
    $table = 'filter_dl_mau';

    Route::post('data', function (Request $request) use ($table) {
        $id = $request['id'];
        if (!$id) {
            return [null];
        }
        $getData = DB::table($table)->where('id', $id)->first();
        return response()->json($getData);
    });

    Route::post('listdata', function (Request $request) use ($table) {
        $getData = DB::table($table)->get(['id', 'title', 'json', 'created_at']);
        if (!$getData) {
            return response()->json(null, 404);
        }
        return response()->json($getData, 200);
    });

    Route::post('create', function (Request $request) use ($table) {
        $title = $request['title'];
        $json = $request['json'];
        $time = Carbon::now();
        DB::table($table)
            ->insert([
                'title' => $title,
                'json' => $json,
                'created_at' => $time->toDateTimeString(),
            ]);
        return response()->json(['status' => true], 200);
    });
    Route::post('update', function (Request $request) use ($table) {
        $id = $request['id'];
        if (!$id) {
            return [null];
        }
        $json = $request['json'];
        DB::table($table)->where('id', $id)
            ->update([
                'json' => $json,
            ]);
        $getData = DB::table($table)->where('id', $id)->first();
        return response()->json($getData);
    });

    Route::post('delete', function (Request $request) use ($table) {
        $id = $request['id'];
        if (!$id) {
            return [null];
        }
        DB::table($table)->where('id', $id)->delete();
        return response()->json(['status' => true], 200);
    });
});

Route::group(['middleware' => ['guest:api', 'cors']], function () {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('login/refresh', 'Auth\LoginController@refresh');

    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');

    Route::post('register', 'Auth\RegisterController@register');
});

Route::group(['middleware' => ['jwt', 'cors']], function () {
    Route::post('logout', 'Auth\LoginController@logout');

    Route::get('me', 'Auth\LoginController@me');
    Route::put('profile', 'ProfileController@update');
});
