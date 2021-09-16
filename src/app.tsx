import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import type { RunTimeLayoutConfig } from 'umi';
import { history, Link } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';
import { BookOutlined, LinkOutlined } from '@ant-design/icons';
<<<<<<< HEAD
import { RequestConfig } from 'umi';
import { notification } from 'antd'

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/login';
=======

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';
>>>>>>> 223b9a9473b60b7f598598f40e4c843d9aa3ae39

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
<<<<<<< HEAD
      let info = JSON.parse(localStorage.getItem('currentUser')!) 
      if(!info){
        const msg = await queryCurrentUser();
        localStorage.setItem('currentUser', JSON.stringify(msg.data))
        return msg.data;
      }
      return info
=======
      const msg = await queryCurrentUser();
      return msg.data;
>>>>>>> 223b9a9473b60b7f598598f40e4c843d9aa3ae39
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
<<<<<<< HEAD
  
=======
>>>>>>> 223b9a9473b60b7f598598f40e4c843d9aa3ae39
  // 如果是登录页面，不执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: {},
    };
  }
  return {
    fetchUserInfo,
    settings: {},
  };
}
<<<<<<< HEAD
// 请求拦截器 在请求之前 添加header头
const authHeaderInterceptor = (url: string, options: RequestOptionsInit) => {
  const token = localStorage.getItem('access_token') || ''
  const authHeader = { Authorization: `Bearer ${token}` };
  return {
    url: `${url}`,
    options: { ...options, interceptors: true, headers: authHeader },
  };
};
export const request: RequestConfig = {
  errorHandler: (error: ResponseError) => {
    // const { messages } = getIntl(getLocale());
    const { response } = error;
    const { status, url } = response;
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: `网络异常 ${status}: ${url}`,
    });
    throw error;
  },
  // 新增自动添加AccessToken的请求前拦截器
  requestInterceptors: [authHeaderInterceptor],
};


// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  console.log(initialState,'initialState')
=======

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
>>>>>>> 223b9a9473b60b7f598598f40e4c843d9aa3ae39
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    links: isDev
      ? [
          <Link to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
          <Link to="/~docs">
            <BookOutlined />
            <span>业务组件文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
  };
};
