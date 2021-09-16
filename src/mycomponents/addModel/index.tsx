import React, { useState, useEffect, useRef } from 'react';
import { Modal, message } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { addUserInfo } from '@/services/usersetting/userlist';
import Item from './item';
import moment from 'moment';

import './index.less'

const AddModel = (props:any) => {
    const { title, visible, setModelVisible, formItemType, formRef, actionRef } = props
    // const add = async(params:{username: string, userpassword: string, useremail: string}) => {
    //     const res = await addUserInfo(params)
    //     if(res.status === 'ok'){
    //         message.success('提交成功');
    //         // table刷新
    //         actionRef.current?.reload();
    //         setModelVisible(false);
    //         formRef?.current?.setFieldsValue({
    //             username: '',
    //             userpassword: '',
    //             useremail: ''
    //         });
    //     }
    // }
    return (
        <Modal
            className="my-add-model"
            title={title}
            visible={visible}
            footer={null}
            destroyOnClose={true}
            onCancel={() => setModelVisible(false)}
        >   
            <ProForm
                formRef={formRef}
                onFinish={async (values) => {
                    // add(Object(values))
                    // form?.resetFields()
                    console.log(values,moment(new Date()),moment(new Date()).format('YYYY-MM-DD HH:mm:ss')); 
                }}
                params={{}}
                >
                { formItemType.length !== 0 ? (
                        formItemType.map((item:any) => {
                            return (
                                <Item 
                                    key={item.name}
                                    item={item}
                                    id={item.name} 
                                />
                            )
                        })
                    ) 
                    : 
                    null
                }
            </ProForm>
        </Modal>
    )
}
export default AddModel