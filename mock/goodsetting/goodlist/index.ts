import { Request, Response } from 'express';
import moment from 'moment';

let goodList = [
    {
        id: 1,
        title: '钢铁侠手办',
        cover_url: '/复仇者联盟-钢铁侠.svg',
        description:'',
        price: '239',
        stock: '100',
        sales: '333',
        is_on: '1',
        is_recommend: '1',
        createtime: '2021-09-16 11:43:27',
    },
    {
        id: 2,
        title: '雷神之锤',
        cover_url: '',
        description:'',
        price: '179',
        stock: '88',
        sales: '266',
        is_on: '1',
        is_recommend: '1',
        createtime: '2021-09-16 11:46:13',
        
    },
    {
        id: 3,
        title: '振金盾牌',
        cover_url: '',
        description:'',
        price: '179',
        stock: '120',
        sales: '300',
        is_on: '0',
        is_recommend: '1',
        createtime: '2021-09-116 11:47:18',
    },
    {
        id: 4,
        title: '蜘蛛侠手办',
        cover_url: '',
        description:'',
        price: '888',
        stock: '400',
        sales: '399',
        is_on: '0',
        is_recommend: '0',
        createtime: '2021-09-116 11:48:01',    
    },
    {
        id: 5,
        title: '万代假面骑士手办',
        cover_url: '',
        description:'',
        price: '339',
        stock: '500',
        sales: '288',
        is_on: '0',
        is_recommend: '0',
        createtime: '2021-09-116 11:49:34',       
    },
    {
        id: 6,
        title: '万代钢铁暴龙兽手办',
        cover_url: '',
        description:'',
        price: '429',
        stock: '411',
        sales: '369',
        is_on: '1',
        is_recommend: '0',
        createtime: '2021-09-116 11:50:47', 
 
    }
]
let formType = [
    {
        id: 1,
        name: 'cascader',
        type: 'Category',
        title: '分类',
        option: [
            {
                value: '漫威',
                label: '漫威',
                children: [
                    {
                        value: '手办',
                        label: '手办',
                    },
                    {
                        value: '周边',
                        label: '周边',
                    }
                ]
            },
            {
                value: '万代',
                label: '万代',
                children: [
                    {
                        value: '数码宝贝系列',
                        label: '数码宝贝系列',
                    },
                    {
                        value: '假面骑士系列',
                        label: '假面骑士系列',
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'input',
        type: 'Name',
        title: '商品名'
    },
    {
        id: 3,
        name: 'textarea',
        type: 'Description',
        title: '商品描述'
    },
    {
        id: 4,
        name: 'inputprice',
        type: 'Price',
        title: '价格'
    },
    {
        id: 5,
        name: 'inputstock',
        type: 'Stock',
        title: '库存'
    },
    {
        id: 6,
        name: 'imgupload',
        type: 'Upload',
        title: '图片上传'
    },
]

export default {
    'GET /api/goodList': (req: Request, res: Response) => {
        res.send({
            status: 'ok',
            data: goodList,
        })
    },
    'POST /api/goodInfo': (req: Request, res: Response) =>{
        const id = req.query.key
        const data = JSON.parse(String(req.query.data))
        goodList.splice(Number(id)-1,1,data)
        res.send({
            status: 'ok',
            data: goodList,
        })
    },
    'POST /api/deleteGood': (req: Request, res: Response) => {
        let { key, row}  = req.query
        let id = Number(key)
        let data = JSON.parse(String(row))
        goodList = goodList.filter(item => item.id !== id)
        res.send({
            status: 'ok',
            goodList
        })
    },
    'POST /api/goodFormType': (req: Request, res: Response) => {
        res.send({
            status: 'ok',
            data:formType
        })
    },
    'POST /api/addgood': (req: Request, res: Response) => {

    }
}
