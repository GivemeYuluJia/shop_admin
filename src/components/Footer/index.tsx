import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '蚂蚁集团体验技术部出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
<<<<<<< HEAD
          title: '颜哥永远的神',
=======
<<<<<<< HEAD
          title: '颜哥永远的神',
=======
          title: 'Ant Design Pro',
>>>>>>> 223b9a9473b60b7f598598f40e4c843d9aa3ae39
>>>>>>> 204ccfabc26d02852c0770d03433a5ef9658b04b
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
<<<<<<< HEAD
          title: '颜哥牛逼',
=======
<<<<<<< HEAD
          title: '颜哥牛逼',
=======
          title: 'Ant Design',
>>>>>>> 223b9a9473b60b7f598598f40e4c843d9aa3ae39
>>>>>>> 204ccfabc26d02852c0770d03433a5ef9658b04b
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
