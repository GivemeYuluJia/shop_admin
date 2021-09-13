import { Request, Response } from 'express';
let userList = [
    {
        id: 1,
        username: '骏哥永远的神',
        avater_url: '/火星小黄鸭鸭.svg',
        useremail: '1095778225@qq.com',
        status: '1',
        createtime: '2021-09-13 14:20:27',

    },
    {
        id: 2,
        username: '马大葱',
        avater_url: '',
        useremail: 'mdc@qq.com',
        status: '0',
        createtime: '2021-09-13 18:22:33',
        
    },
    {
        id: 3,
        username: '孙饼子',
        avater_url: '',
        useremail: 'sbc@qq.com',
        status: '1',
        createtime: '2021-04-13 13:13:33',
        
    },
    {
        id: 4,
        username: '黄小墨',
        avater_url: '',
        useremail: 'hzh@qq.com',
        status: '0',
        createtime: '2021-07-07 15:55:01',
        
    },
    {
        id: 5,
        username: '陈大黄',
        avater_url: '',
        useremail: 'cmh@qq.com',
        status: '0',
        createtime: '2021-06-24 08:42:21',
        
    },
    {
        id: 6,
        username: '马一逼',
        avater_url: '',
        useremail: 'mxm@qq.com',
        status: '1',
        createtime: '2021-01-27 19:11:11',
        
    }
]
export default {
    'GET /api/userlist': (req: Request, res: Response) => {
        if(req.query.status && req.query.username && req.query.useremail){
           const filterList = userList.filter(item => (
               item.username === req.query.username &&
               item.useremail === req.query.useremail &&
               item.status === req.query.status
            ))
            res.send({
                status: 'ok',
                data: filterList ,
                a:123
            })
        } else if(req.query.status && req.query.username) {
            const filterList = userList.filter(item => item.status === req.query.status && item.username === req.query.username)
            res.send({
                status: 'ok',
                data: filterList ,
                a:12
            })
        } else if(req.query.status && req.query.useremail) {
            const filterList = userList.filter(item => item.status === req.query.status && item.useremail === req.query.useremail)
            res.send({
                status: 'ok',
                data: filterList ,
                a:13
            })
        }else if(req.query.username && req.query.useremail) {
            const filterList = userList.filter(item => item.username === req.query.username && item.useremail === req.query.useremail)
            res.send({
                status: 'ok',
                data: filterList ,
                a:23
            })
        } else if(req.query.status || req.query.username || req.query.useremail){
            const filterList = userList.filter(item => (
                item.username === req.query.username ||
                item.useremail === req.query.useremail ||
                item.status === req.query.status
             ))
             res.send({
                 status: 'ok',
                 data: filterList ,
                 a:1
             })
        } else {
            res.send({
                status: 'ok',
                data: userList ,
                a:0
            })
        }  
    },
    'POST /api/userInfo': (req: Request, res: Response) => {
        const id = req.query.key
        const data = JSON.parse(String(req.query.data))
        userList.splice(Number(id)-1,1,data)
        res.send({
            status: 'ok',
            data: userList,
        })
    }
}