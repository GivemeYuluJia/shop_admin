import React from "react"
import type { ProFormInstance } from '@ant-design/pro-form';
import type { ActionType } from '@ant-design/pro-table';
export type userItemType = {
    id: number,
    username: string,
    avater_url: string,
    useremail: string,
    status: string,
    createtime: string,
}
export type addModelProps = {
    visible: boolean,
    setModelVisible: React.Dispatch<React.SetStateAction<boolean>>,
    formRef: React.MutableRefObject<ProFormInstance<Record<string, any>> | undefined>, 
    actionRef: React.MutableRefObject<ActionType | undefined>
}