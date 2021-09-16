import { request  } from "umi";
import { goodItemType } from '@/pages/goodsetting/goodlist/const'
export async function getGoodList() {
    return request('/api/goodList',{
        method: 'GET',
    })
}
export async function updateGoodInfo(params: {key: number, data: goodItemType}) {
    return request('/api/goodInfo',{
        method: 'POST',
        params
    })
}
export async function addGoodInfo(params:any) {
    return request('/api/addgood',{
        method: 'POST',
        params
    })
}
export async function deleteGood(params:any) {
    return request('/api/deleteGood',{
        method: 'POST',
        params
    })
}
export async function fetchFormType() {
    return request('/api/goodFormType',{
        method: 'POST',
    })
}