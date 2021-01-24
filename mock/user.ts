const routes = [
  {
    path: '/',
    children: [
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
export default {
  'POST /api/user/login': (req: any, res: any) => {
    const { username, password } = req.body;
    const usernames = ['admin', 'user'];
    if (!usernames.includes(username) || password !== '123456') {
      res.end(
        JSON.stringify({
          code: 500,
          msg: 'username or password is wrong!',
          data: null,
        }),
      );
    }
    res.end(
      JSON.stringify({
        code: 200,
        msg: 'success',
        data: {
          token: 'token ' + username,
        },
      }),
    );
  },
  'GET /api/user/userInfo': (req: any, res: any) => {
    const { authention } = req.headers;
    const username = authention.split(' ')[1];
    const roles = [];
    if (username === 'admin') {
      roles.push('admin');
    } else {
      roles.push('user');
    }
    res.end(
      JSON.stringify({
        code: 200,
        msg: 'success',
        data: {
          roles,
        },
      }),
    );
  },
  'GET /api/user/routes': (req: any, res: any) => {
    const { authention } = req.headers;
    const username = authention.split(' ')[1];
    let serverRoutes = [];
    if (username === 'admin') {
      serverRoutes = routes;
    } else {
      serverRoutes = routes;
    }
    res.end(
      JSON.stringify({
        code: 200,
        msg: 'success',
        data: {
          serverRoutes,
        },
      }),
    );
  },
};
