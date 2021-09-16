/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
<<<<<<< HEAD
    canJunge: currentUser && currentUser.access !== 'visitor',
=======
>>>>>>> 223b9a9473b60b7f598598f40e4c843d9aa3ae39
  };
}
