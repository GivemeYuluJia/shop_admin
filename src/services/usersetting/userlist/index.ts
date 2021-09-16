import { request  } from "umi";
import { userItemType } from "@/pages/usersetting/userlist/const";
export async function getUserList(params:any) {
    return request('/api/userList',{
        method: 'GET',
        params
    })
}
export async function updateUserInfo(params: {key: number, data: userItemType}) {
    return request('/api/userInfo',{
        method: 'POST',
        params
    })
<<<<<<< HEAD
=======
}
export async function addUserInfo(params:any) {
    return request('/api/addUser',{
        method: 'POST',
        params
    })
}
export async function deleteUser(params:any) {
    return request('/api/deleteUser',{
        method: 'POST',
        params
    })
>>>>>>> 204ccfabc26d02852c0770d03433a5ef9658b04b
}