export default {
  'POST /api/user/login': (req, res) => {
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
};