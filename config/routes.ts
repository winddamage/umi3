export default [
  // {
  //   path: '/login',
  //   component: 'login/index',
  // },
  {
    path: '/',
    // component: 'index',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        component: 'index',
        menu: {
          name: '欢迎页面',
          icon: 'SmileOutlined',
        },
      },
      {
        path: '/manage',
        component: 'manage/index',
        menu: {
          name: '管理中心',
          icon: 'SettingOutlined',
        },
      },
    ],
  },
];
