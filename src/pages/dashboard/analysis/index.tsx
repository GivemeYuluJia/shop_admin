import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Row, Col, Statistic, Card } from 'antd'
import { analysisListType  } from './const';
import { getAnalysisList } from '@/services/dashboard/analysis';

const Analysis = () => {
    const [ list, setList ] = useState<analysisListType>({})
    
    useEffect(() => {
        getAnalysisList().then(res => {
            setList(res.data)
        })   
    },[])

    return (
        <PageContainer>
            <Row gutter={16}>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="用户数"
                            value={list.user_count}
                            precision={0}
                            valueStyle={{ color: '#3f8600' }}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="商品数"
                            value={list.goods_count}
                            precision={0}
                            valueStyle={{ color: '#cf1322' }}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="交易笔数"
                            value={list.order_count}
                            precision={0}
                            valueStyle={{ color: '#cf1322' }}
                        />
                    </Card>
                </Col>
            </Row>
        </PageContainer>
    )
}
export default Analysis