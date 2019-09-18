const page = path => () => import(`~/pages/${path}`).then(m => m.default || m)

export default [
  ...applyRules(['guest'], [{
    path: '/',
    component: require('$comp/auth/AuthWrapper').default,
    redirect: {
      name: 'Login'
    },
    children: [
      {
        path: 'analytic',
        name: 'Analytic',
        component: page('GoogleAnalytics.vue')
      },

      {
        path: '/login',
        name: 'Login',
        component: require('$comp/auth/login/Login').default
      },
      {
        path: '/register',
        name: 'Register',
        component: require('$comp/auth/register/Register').default
      },
      {
        path: '/password',
        component: require('$comp/auth/password/PasswordWrapper').default,
        children: [{
            path: '',
            name: 'forgot',
            component: require('$comp/auth/password/password-forgot/PasswordForgot').default
          },
          {
            path: 'reset/:token',
            name: 'reset',
            component: require('$comp/auth/password/password-reset/PasswordReset').default
          }
        ]
      },
    ]
  }, ]),
  ...applyRules(['auth'], [{
    path: '/',
    name: 'Admin',
    component: require('$comp/admin/AdminWrapper').default,
    redirect: { name: 'profile' },
    meta: { breadcrumb: 'Admin' },
    children: [{
        path: 'profile',
        name: 'profile',
        redirect: {
          name: 'profile.view'
        },
        component: require('$comp/admin/profile/ProfileWrapper').default,
        meta: {
          breadcrumb: 'Profile'
        },
        children: [{
            path: '',
            name: 'profile.view',
            component: require('$comp/admin/profile/Profile').default,
            meta: {
              breadcrumb: 'View'
            },
          },
          {
            path: 'edit',
            name: 'profile.edit',
            component: require('$comp/admin/profile/edit/ProfileEdit').default,
            meta: {
              breadcrumb: 'Edit'
            },
          }
        ]
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: page('Dashboard.vue'),
        meta: {
          breadcrumb: 'Dashboard'
        },
      },
      {
        path: '/mailbox',
        name: 'Mailbox',
        component: page('Mailbox.vue'),
        meta: {
          breadcrumb: 'Mailbox'
        }
      },
      {
        path: '/snackbar',
        name: 'Snackbar',
        component: page('Snackbar.vue'),
        meta: {
          breadcrumb: 'Snackbar'
        }
      },
      {
        path: '/calendar',
        name: 'Calendar',
        component: page('Calendar.vue'),
        meta: {
          breadcrumb: 'Calendar'
        }
      },
      {
        path: '/social',
        name: 'Social',
        component: page('Social.vue'),
        meta: {
          breadcrumb: 'Social'
        }
      },
      {
        path: '/media',
        name: 'Media',
        component: page('Media.vue'),
        meta: {
          breadcrumb: 'Media'
        }
      },
      {
        path: '/chart',
        name: 'Chart',
        component: page('Chart.vue'),
        meta: {
          breadcrumb: 'Chart'
        }
      },
      {
        path: '/tabs',
        name: 'Tabs',
        redirect: {
          name: 'Tabs.1'
        },
        component: page('tabs/index.vue'),
        meta: {
          breadcrumb: 'Tabs'
        },
        children: [{
            path: 'tab-1',
            name: 'Tabs.1',
            component: page('tabs/Tab-1.vue'),
            meta: {
              breadcrumb: 1
            }
          },
          {
            path: 'tab-2',
            name: 'Tabs.2',
            component: page('tabs/Tab-2.vue'),
            meta: {
              breadcrumb: 2
            }
          }
        ]
      },

      {
        path: '/excel',
        name: 'excel',
        component: require('$comp/excel/index').default,
        children: [{
            path: 'van-don-dang-theo-doi',
            name: 'excel.VanDonDangTheoDoi',
            component: require('$comp/excel/VanDonDangTheoDoi.vue').default
          },
          {
            path: 'bao-cao-ban-hangs',
            name: 'excel.BaoCaoBanHangs',
            redirect: {
              name: 'excel.BaoCaoBanHangs.XuLy'
            },
            component: require('$comp/excel/BaoCaoBanHangs').default,
            children: [{
                path: 'xu-ly',
                name: 'excel.BaoCaoBanHangs.XuLy',
                component: require('$comp/excel/BaoCaoBanHangs/XuLy').default
              },
              {
                path: 'hien-thi',
                name: 'excel.BaoCaoBanHangs.HienThi',
                component: require('$comp/excel/BaoCaoBanHangs/HienThi').default
              },
              {
                path: 'xuat-file',
                name: 'excel.BaoCaoBanHangs.XuatFile',
                component: require('$comp/excel/BaoCaoBanHangs/XuatFile').default
              }
            ]
          },
          {
            path: 'thong-ke-kho-hang-1',
            name: 'excel.ThongKeKhoHang_1',
            component: require('$comp/excel/ThongKeKhoHang_1').default
          },
          {
            path: 'thong-ke-kho-hang-2',
            name: 'excel.ThongKeKhoHang_2',
            component: require('$comp/excel/ThongKeKhoHang_2').default
          },
          {
            path: 'tong-thong-ke-kho-hang',
            name: 'excel.TongThongKeKhoHang',
            component: require('$comp/excel/TongThongKeKhoHang').default
          },
          {
            path: 'thong-ke-san-pham-moi',
            name: 'excel.ThongKeSanPhamMoi',
            component: require('$comp/excel/ThongKeSanPhamMoi').default
          },
          {
            path: 'backup-thong-ke',
            name: 'excel.BackupThongKe',
            component: require('$comp/excel/BackupThongKe').default
          },
          {
            path: 'bang-nhap-hangs',
            name: 'excel.BangNhapHangs',
            component: require('$comp/excel/BangNhapHangs').default
          },
          // Bảng dữ liệu mẫu
          {
            path: 'bang-d-l-mau',
            name: 'excel.BangDLMau',
            component: require('$comp/excel/BangDLMau/index').default,
            redirect: {
              name: 'excel.DLmau'
            },
            children: [{
                path: 'd-l-mau',
                name: 'excel.DLmau',
                component: require('$comp/excel/BangDLMau/DLmau').default
              },
              {
                path: 'bang-thu-gon-d-l-mau',
                name: 'excel.BangThuGonDLMau',
                component: require('$comp/excel/BangDLMau/BangThuGonDLMau').default
              },
              {
                path: 'bang-luu-d-l-mau',
                name: 'excel.BangLuuDLMau',
                component: require('$comp/excel/BangDLMau/BangLuuDLMau').default
              },
            ]
          },


          // Bảng dữ liệu mẫu
        ]
      },
    ]
  }, ]),
  // other
  {
    path: '/element',
    component: page('ElementUI.vue')
  },
  {
    path: '*',
    redirect: '/404',
  },
  {
    path: '/404',
    component: page('core/Error404.vue'),
  }
]

function applyRules(rules, routes) {
  for (let i in routes) {
    routes[i].meta = routes[i].meta || {}

    if (!routes[i].meta.rules) {
      routes[i].meta.rules = []
    }
    routes[i].meta.rules.unshift(...rules)

    if (routes[i].children) {
      routes[i].children = applyRules(rules, routes[i].children)
    }
  }

  return routes
}