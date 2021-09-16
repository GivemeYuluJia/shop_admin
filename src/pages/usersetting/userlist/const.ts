<<<<<<< HEAD
=======
import React from "_@types_react@17.0.20@@types/react"
import type { ProFormInstance } from '@ant-design/pro-form';
import type { ActionType } from '@ant-design/pro-table';
>>>>>>> 204ccfabc26d02852c0770d03433a5ef9658b04b
export type userItemType = {
    id: number,
    username: string,
    avater_url: string,
    useremail: string,
    status: string,
    createtime: string,
<<<<<<< HEAD
=======
}
export type addModelProps = {
    visible: boolean,
    setModelVisible: React.Dispatch<React.SetStateAction<boolean>>,
    formRef: React.MutableRefObject<ProFormInstance<Record<string, any>> | undefined>, 
    actionRef: React.MutableRefObject<ActionType | undefined>
>>>>>>> 204ccfabc26d02852c0770d03433a5ef9658b04b
}