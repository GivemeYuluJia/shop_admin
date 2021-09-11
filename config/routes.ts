export default [
  {
    path: '/login',
    layout: false,
    routes: [
      {
        path: '/login',
        routes: [
          {
            name: 'login',
            path: '/login',
            component: './Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      // {
      //   path: '/admin/sub-page',
      //   name: 'sub-page',
      //   icon: 'smile',
      //   component: './Welcome',
      // },
      {
        component: './404',
      },
    ],
  },
  // {
  //   path: '/',
  //   redirect: '/welcome',
  // },
  {
    component: './404',
  },
];
