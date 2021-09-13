import React, { useState, useEffect, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { PlusOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Tag, Space, Menu, Dropdown, Avatar, Typography } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { getUserList, updateUserInfo } from '@/services/usersetting/userlist'
import { userItemType } from './const';

const columns: ProColumns[] = [
    {
        title: '头像',
        dataIndex: 'avater_url',
        editable: false,
        hideInSearch: true,
        width: 68,
        render: (val, record): any => (
            <Avatar src={record.avater_url} size={32} icon={<UserOutlined />}></Avatar>
        )
    },
    {
        title: '用户名',
        dataIndex: 'username',
        copyable: true,
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
        title: '邮箱',
        dataIndex: 'useremail'
    },
    {
        title: '状态',
        dataIndex: 'status',
        filters: true,
        onFilter: true,
        valueType: 'select',
        hideInSearch: true,
        valueEnum: {
            0: { text: '禁用'},
            1: { text: '启用'},
        },
        render: (val, record): any => (
            record.status === '1' ? (
                <Tag color="success">启用</Tag>
            ) 
            : (
                <Tag color="error">禁用</Tag>
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
                        console.log(action?.startEditable?.(record.id),'33')
                        action?.startEditable?.(record.id);
                    }}
                >
                    编辑
                </Typography.Link>
                <Typography.Link>详情</Typography.Link>
            </Space>
            
        )
    }
]
const UserList = () => {
    const actionRef = useRef<ActionType>();

    const getData = async(params: any) => {
        const data = await getUserList(params)
        return {
            data: data.data,
            success: true
        }
    }
    const update = async(params: {key: number, data: userItemType}) => {
        const res = await updateUserInfo(params)
        return {
            data: res.data,
            success: true
        }
    }

    return (
        <PageContainer>
            <ProTable
                columns={columns}
                actionRef={actionRef}
                request={async (params = {}, sort, filter) => {
                    console.log(sort, filter)
                    return getData(params)
                }}
                editable={{
                    type: 'multiple',
                    onSave: async (rowKey, data, row) => {
                        console.log(rowKey, data, row);
                        update({key: Number(rowKey), data})
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
                headerTitle="客户列表"
                toolBarRender={() => [
                    <Button key="button" icon={<PlusOutlined />} type="primary">
                        新建
                    </Button>,
                ]}
            />
        </PageContainer>
    )
}
export default UserList