import { request } from 'umi';

export async function getAnalysisList() {
    return request('/api/analysis',{
        method: 'GET'
    })
}