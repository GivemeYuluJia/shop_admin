import React, { useState, useEffect, useRef } from 'react';
import { Modal, message } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { addUserInfo } from '@/services/usersetting/userlist';
import { addModelProps } from '../const';
import moment from 'moment';
const AddModel = (props:addModelProps) => {
    const { visible, setModelVisible, formRef, actionRef } = props
    const add = async(params:{username: string, userpassword: string, useremail: string}) => {
        const res = await addUserInfo(params)
        if(res.status === 'ok'){
            message.success('提交成功');
            // table刷新
            actionRef.current?.reload();
            setModelVisible(false);
            formRef?.current?.setFieldsValue({
                username: '',
                userpassword: '',
                useremail: ''
            });
        }
    }
    return (
        <Modal
            title="新增用户"
            visible={visible}
            footer={null}
            destroyOnClose={true}
            onCancel={() => setModelVisible(false)}
        >   
            <ProForm
                formRef={formRef}
                onFinish={async (values) => {
                    add(Object(values))
                    // form?.resetFields()
                    console.log(values,moment(new Date()),moment(new Date()).format('YYYY-MM-DD HH:mm:ss')); 
                }}
                params={{}}
                >
                <ProFormText
                    width="md"
                    name="username"
                    label="用户名"
                    placeholder="请输入用户名"
                    rules={[{ required: true, message: '请输入用户名' }]}
                />
                <ProFormText.Password 
                    width="md" 
                    name="userpassword" 
                    label="密码" 
                    placeholder="请输入密码" 
                    rules={[
                        {required: true,message: '请输入密码！',},
                        {min: 6, message: '密码最少6位！',},
                    ]}
                />
                <ProFormText
                    name="useremail"
                    width="md"
                    label="邮箱"
                    placeholder="请输入邮箱"
                    rules={[
                        {
                            required: true,
                            message: '请输入邮箱！',
                        },
                        {
                            type:'email',
                            message: '邮箱格式错误！',
                        },
                    ]}
                />
            </ProForm>
        </Modal>
    )
}
export default AddModel