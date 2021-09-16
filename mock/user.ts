import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

async function getFakeCaptcha(req: Request, res: Response) {
  await waitTime(2000);
  return res.json('captcha-xxx');
}

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;

/**
 * 当前用户的权限，如果为空代表没登录
 * current user access， if is '', user need login
 * 如果是 pro 的预览，默认是有权限的
 */
let access = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site' ? 'admin' : '';
<<<<<<< HEAD
=======

>>>>>>> 223b9a9473b60b7f598598f40e4c843d9aa3ae39
const getAccess = () => {
  return access;
};

<<<<<<< HEAD
const data = {
  name: '骏哥永远的神',
  avatar: '/火星小黄鸭鸭.svg',
  userid: '00000001',
  email: 'antdesign@alipay.com',
  signature: '海纳百川，有容乃大',
  title: '交互专家',
  group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
  tags: [
    {
      key: '0',
      label: '很有想法的',
    },
    {
      key: '1',
      label: '专注设计',
    },
    {
      key: '2',
      label: '辣~',
    },
    {
      key: '3',
      label: '大长腿',
    },
    {
      key: '4',
      label: '川妹子',
    },
    {
      key: '5',
      label: '海纳百川',
    },
  ],
  notifyCount: 12,
  unreadCount: 11,
  country: 'China',
  access: getAccess(),
  geographic: {
    province: {
      label: '浙江省',
      key: '330000',
    },
    city: {
      label: '杭州市',
      key: '330100',
    },
  },
  address: '西湖区工专路 77 号',
  phone: '0752-268888888',
}

=======
>>>>>>> 223b9a9473b60b7f598598f40e4c843d9aa3ae39
// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': (req: Request, res: Response) => {
    if (!getAccess()) {
<<<<<<< HEAD
      console.log(getAccess())
=======
>>>>>>> 223b9a9473b60b7f598598f40e4c843d9aa3ae39
      res.status(401).send({
        data: {
          isLogin: false,
        },
        errorCode: '401',
        errorMessage: '请先登录！',
        success: true,
      });
      return;
    }
    res.send({
      success: true,
<<<<<<< HEAD
      data
    })
    // res.send({
    //   success: true,
    //   data: {
    //     name: '骏哥永远的神',
    //     avatar: '/火星小黄鸭鸭.svg',
    //     userid: '00000001',
    //     email: 'antdesign@alipay.com',
    //     signature: '海纳百川，有容乃大',
    //     title: '交互专家',
    //     group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    //     tags: [
    //       {
    //         key: '0',
    //         label: '很有想法的',
    //       },
    //       {
    //         key: '1',
    //         label: '专注设计',
    //       },
    //       {
    //         key: '2',
    //         label: '辣~',
    //       },
    //       {
    //         key: '3',
    //         label: '大长腿',
    //       },
    //       {
    //         key: '4',
    //         label: '川妹子',
    //       },
    //       {
    //         key: '5',
    //         label: '海纳百川',
    //       },
    //     ],
    //     notifyCount: 12,
    //     unreadCount: 11,
    //     country: 'China',
    //     access: getAccess(),
    //     geographic: {
    //       province: {
    //         label: '浙江省',
    //         key: '330000',
    //       },
    //       city: {
    //         label: '杭州市',
    //         key: '330100',
    //       },
    //     },
    //     address: '西湖区工专路 77 号',
    //     phone: '0752-268888888',
    //   },
    // });
=======
      data: {
        name: 'Serati Ma',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'antdesign@alipay.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        tags: [
          {
            key: '0',
            label: '很有想法的',
          },
          {
            key: '1',
            label: '专注设计',
          },
          {
            key: '2',
            label: '辣~',
          },
          {
            key: '3',
            label: '大长腿',
          },
          {
            key: '4',
            label: '川妹子',
          },
          {
            key: '5',
            label: '海纳百川',
          },
        ],
        notifyCount: 12,
        unreadCount: 11,
        country: 'China',
        access: getAccess(),
        geographic: {
          province: {
            label: '浙江省',
            key: '330000',
          },
          city: {
            label: '杭州市',
            key: '330100',
          },
        },
        address: '西湖区工专路 77 号',
        phone: '0752-268888888',
      },
    });
>>>>>>> 223b9a9473b60b7f598598f40e4c843d9aa3ae39
  },
  // GET POST 可省略
  'GET /api/users': [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ],
  'POST /api/login/account': async (req: Request, res: Response) => {
    const { password, username, type } = req.body;
    await waitTime(2000);
    if (password === 'ant.design' && username === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
<<<<<<< HEAD
        token: 'Bearer'
      });
      data.name = '管理员';
      data.avatar = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
      data.userid =  '00000002';
      data.email =  'admin@alipay.com';
      data.access = 'admin';
      access = 'admin';
      return;
    }
    if (password === 'ant.design' && username === 'visitor') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'visitor',
        token: 'Bearer'
      });
      data.name = '游客';
      data.avatar = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
      data.userid =  '00000003';
      data.email =  'visitor@alipay.com';
      access = 'visitor';
      data.access = 'visitor';
      return;
    }
    if (password === 'yj123' && username === '骏哥永远的神') {
=======
      });
      access = 'admin';
      return;
    }
    if (password === 'ant.design' && username === 'user') {
>>>>>>> 223b9a9473b60b7f598598f40e4c843d9aa3ae39
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'user',
<<<<<<< HEAD
        token: 'Bearer'
      });
      data.name = '骏哥永远的神',
      data.avatar = '/火星小黄鸭鸭.svg',
      data.userid =  '00000001';
      data.email =  'antdesign@alipay.com';
      access = 'junge';
      data.access = 'junger';
=======
      });
      access = 'user';
>>>>>>> 223b9a9473b60b7f598598f40e4c843d9aa3ae39
      return;
    }
    if (type === 'mobile') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      access = 'admin';
      return;
    }

    res.send({
      status: 'error',
      type,
      currentAuthority: 'guest',
    });
    access = 'guest';
  },
  'POST /api/login/outLogin': (req: Request, res: Response) => {
    access = '';
    res.send({ data: {}, success: true });
  },
  'POST /api/register': (req: Request, res: Response) => {
    res.send({ status: 'ok', currentAuthority: 'user', success: true });
  },
  'GET /api/500': (req: Request, res: Response) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req: Request, res: Response) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req: Request, res: Response) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Forbidden',
      message: 'Forbidden',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req: Request, res: Response) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },

  'GET  /api/login/captcha': getFakeCaptcha,
};
