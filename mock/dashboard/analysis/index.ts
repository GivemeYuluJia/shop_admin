import { Request, Response } from 'express';
let analysisList = {
    user_count: 80,
    goods_count: 156,
    order_count: 33
}

export default {
    'GET /api/analysis': (req: Request, res: Response) => {
        res.send({
            status: 'ok',
            data: analysisList 
        })
    }
}