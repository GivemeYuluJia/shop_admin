import React, { useState, useEffect, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { PlusOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Tag, Space, Image, Typography, Modal, message } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import type { ProFormInstance } from '@ant-design/pro-form';
import { getGoodList, updateGoodInfo, deleteGood, fetchFormType } from '@/services/goodsetting/goodlist'
import { goodItemType, formType } from './const';
import AddModel from '@/mycomponents/addModel';
const columns: ProColumns[] = [
    {
        title: '商品图',
        dataIndex: 'cover_url',
        editable: false,
        hideInSearch: true,
        width: 68,
        render: (val, record): any => (
            <Image
                width={46}
                src={record.cover_url}
                placeholder={
                    <Image
                        preview={false}
                        src={record.cover_url}
                        width={200}
                    />
                }
            />
        )
    },
    {
        title: '标题',
        dataIndex: 'title',
        copyable: true,
        editable: false,
        ellipsis: true,
        formItemProps: {
            rules: [
                {
                required: true,
                message: '此项为必填项',
                },
            ],
        },
    },
    {
        title: '价格',
        hideInSearch: true,
        dataIndex: 'price'
    },
    {
        title: '库存',
        hideInSearch: true,
        dataIndex: 'stock'
    },
    {
        title: '销量',
        hideInSearch: true,
        dataIndex: 'sales'
    },
    {
        title: '是否上架',
        dataIndex: 'is_on',
        filters: true,
        onFilter: true,
        valueType: 'select',
        hideInSearch: true,
        valueEnum: {
            0: { text: '未上架'},
            1: { text: '已上架'},
        },
        render: (val, record): any => (
            record.is_on === '1' ? (
                <Tag color="success">已上架</Tag>
            ) 
            : (
                <Tag color="error">未上架</Tag>
            )
        )
    },
    {
        title: '是否推荐',
        dataIndex: 'is_recommend',
        filters: true,
        onFilter: true,
        valueType: 'select',
        hideInSearch: true,
        valueEnum: {
            0: { text: '未推荐'},
            1: { text: '已推荐'},
        },
        render: (val, record): any => (
            record.is_recommend === '1' ? (
                <Tag color="success">已推荐</Tag>
            ) 
            : (
                <Tag color="error">未推荐</Tag>
            )
        )
    },
    {
        title: '创建时间',
        hideInSearch: true,
        dataIndex: 'createtime',
        editable: false,
    },
    {
        title: '操作',
        hideInSearch: true,
        valueType: 'option',
        render: (text, record, _, action): any => (
            <Space>
                <Typography.Link 
                    key="editable"
                    onClick={() => {
                        // console.log(action?.startEditable?.(record.id),'33')
                        action?.startEditable?.(record.id);
                    }}
                >
                    编辑
                </Typography.Link>
            </Space> 
        )
    }
]
const GoodList = () => {
    const [modelVisible, setModelVisible] = useState<boolean>(false)
    const [formItemType, setFormItemType] = useState<Array<formType>>([])
    const actionRef = useRef<ActionType>();
    const formRef = useRef<ProFormInstance>();

    useEffect(() => {
        fetchFormType().then(res => {
            console.log(res)
            setFormItemType([...res.data])
        })
    },[])
    const getData = async() => {
        const data = await getGoodList()
        return {
            data: data.data,
            success: true
        }
    }
    const update = async(params: {key: number, data: goodItemType}) => {
        const res = await updateGoodInfo(params)
        return {
            data: res.data,
            success: true
        }
    }
    const deleteGoodItem = async(params:{key:number,row:goodItemType}) => {
        await deleteGood(params)
    }
    
    return (
        <PageContainer>
            <ProTable
                columns={columns}
                actionRef={actionRef}
                request={async (params = {}, sort, filter) => {
                    console.log(sort, filter)
                    return getData()
                }}
                editable={{
                    type: 'multiple',
                    onSave: async (rowKey, data, row) => {
                        console.log(rowKey, data, row);
                        update({key: Number(rowKey), data})
                    },
                    onDelete: async (key, row) => {
                        deleteGoodItem({key:Number(key),row})
                        console.log(key, row);
                    },
                }}
                rowKey="id"
                search={{
                    labelWidth: 'auto',
                }}
                pagination={{
                    pageSize: 10,
                }}
                dateFormatter="string"
                headerTitle="商品列表"
                toolBarRender={() => [
                    <Button 
                        key="button" 
                        icon={<PlusOutlined />}
                        type="primary"
                        onClick={() => setModelVisible(true)}
                    >
                        新建
                    </Button>,
                ]}
            />
            <AddModel 
                title="新增商品"
                visible={modelVisible}
                setModelVisible={setModelVisible}
                formItemType={formItemType}
                formRef={formRef}
                actionRef={actionRef}
            />
        </PageContainer>
    )
}
export default GoodList