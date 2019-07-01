export default [
  { path: '/excel', name: 'excel', component: require('$comp/excel/index').default, children: 
    [
      { path:'van-don-dang-theo-doi', name: 'excel.VanDonDangTheoDoi', component: require('$comp/excel/VanDonDangTheoDoi.vue').default },
      { path:'bao-cao-ban-hangs', name: 'excel.BaoCaoBanHangs', redirect: { name: 'excel.BaoCaoBanHangs.XuLy' } ,
      component: require('$comp/excel/BaoCaoBanHangs').default, children: [
        { path: 'xu-ly', name: 'excel.BaoCaoBanHangs.XuLy' ,component: require('$comp/excel/BaoCaoBanHangs/XuLy').default },
        { path: 'hien-thi', name: 'excel.BaoCaoBanHangs.HienThi' ,component: require('$comp/excel/BaoCaoBanHangs/HienThi').default },
        { path: 'xuat-file', name: 'excel.BaoCaoBanHangs.XuatFile' ,component: require('$comp/excel/BaoCaoBanHangs/XuatFile').default }
      ] },
      { path:'thong-ke-kho-hang-1', name: 'excel.ThongKeKhoHang_1', component: require('$comp/excel/ThongKeKhoHang_1').default },
      { path:'thong-ke-kho-hang-2', name: 'excel.ThongKeKhoHang_2', component: require('$comp/excel/ThongKeKhoHang_2').default },
      { path:'tong-thong-ke-kho-hang', name: 'excel.TongThongKeKhoHang', component: require('$comp/excel/TongThongKeKhoHang').default },
      { path:'thong-ke-san-pham-moi', name: 'excel.ThongKeSanPhamMoi', component: require('$comp/excel/ThongKeSanPhamMoi').default },
      { path:'backup-thong-ke', name: 'excel.BackupThongKe', component: require('$comp/excel/BackupThongKe').default },
      { path:'bang-nhap-hangs', name: 'excel.BangNhapHangs', component: require('$comp/excel/BangNhapHangs').default},
      { path:'d-l-mau', name: 'excel.DLmau', component: require('$comp/excel/DLmau').default},
    ]
  },
  ...applyRules(['guest'], [
    { path: '', component: require('$comp/auth/AuthWrapper').default, redirect: { name: 'excel' }, children:
      [
        { path: '/login', name: 'login', component: require('$comp/auth/login/Login').default },
        { path: '/register', name: 'register', component: require('$comp/auth/register/Register').default },
        { path: '/password', component: require('$comp/auth/password/PasswordWrapper').default, children:
          [
            { path: '', name: 'forgot', component: require('$comp/auth/password/password-forgot/PasswordForgot').default },
            { path: 'reset/:token', name: 'reset', component: require('$comp/auth/password/password-reset/PasswordReset').default }
          ]
        },
      ]
    },
  ]),
  ...applyRules(['auth'], [
    { path: '', component: require('$comp/admin/AdminWrapper').default, redirect: { name: 'excel' }, children:
      [
        { path: '', name: 'index', redirect: { name: 'profile' } },
        { path: 'profile', component: require('$comp/admin/profile/ProfileWrapper').default, children:
          [
            { path: '', name: 'profile', component: require('$comp/admin/profile/Profile').default },
            { path: 'edit', name: 'profile-edit', component: require('$comp/admin/profile/edit/ProfileEdit').default }
          ]
        }
      ]
    },
  ]),
  { path: '*', redirect: { name: 'index' } }
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
