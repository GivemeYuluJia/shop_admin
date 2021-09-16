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
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'PieChartOutlined',
    access: 'canJunge',
    routes: [
      {
        path: '/dashboard',
        redirect: '/dashboard/analysis'
      },
      {
        path: '/dashboard/analysis',
        name: 'analysis',
        component: './dashboard/analysis'
      }
    ]
  },
  { 
    path: '/usersetting',
    name: 'usersetting',
    icon: 'UserOutlined',
    access: 'canJunge',
    routes: [
      {
        path: '/usersetting',
        redirect: '/usersetting/userlist'
      },
      {
        path: '/usersetting/userlist',
        name: 'userlist',
        component: './usersetting/userlist'
      }
    ]
  },
  { 
    path: '/goodsetting',
    name: 'goodsetting',
    icon: 'ShoppingOutlined',
    access: 'canJunge',
    routes: [
      {
        path: '/goodsetting',
        redirect: '/goodsetting/goodlist'
      },
      {
        path: '/goodsetting/goodlist',
        name: 'goodlist',
        component: './goodsetting/goodlist'
      }
    ]
  },
  {
    path: '/person',
    name: 'person',
    icon: 'crown',
    component: './person'
  },
  {
    path: '/',
    redirect: '/person',
  },
  {
    component: './404',
  },
];
