import ProForm, { 
    ProFormText, 
    ProFormDigit, 
    ProFormUploadButton,
    ProFormTextArea
} from '@ant-design/pro-form';
import { Form, Cascader } from 'antd'
import { EFormItemType } from './const';

const itemMap = {
    [EFormItemType.name]: (id:string,title:string) => (
        <ProFormText
            key={id}
            name="name"
            label={title}
            placeholder={`请输入${title}`}
            rules={[{ required: true, message: `请输入${title}` }]}
        />
    ), 
    [EFormItemType.category]: (id:string,title:string, option:any) => (
        <Form.Item
            key={id}
            name="category"
            label={title}
            rules={[{ required: true, message: `请输入${title}` }]}
        >
            <Cascader options={option} placeholder="Please select" />
        </Form.Item>
    ),
    [EFormItemType.password]: (id:string,title:string) => (
        <ProFormText.Password
            name="password" 
            key={id}
            label={title}
            placeholder={`请输入${title}`}
            rules={[
                {required: true,message: '请输入密码！'},
                {min: 6, message: '密码最少6位！'},
            ]}
        />
    ),
    [EFormItemType.price]: (id:string,title:string) => (
        <ProFormDigit 
            label={title}
            name="price" 
            key={id} 
            min={0} 
            max={9999} 
            rules={[{ required: true, message: `请输入${title}` }]}
        />
    ),
    [EFormItemType.stock]: (id:string,title:string) => (
        <ProFormDigit 
            label={title}
            name="stock" 
            key={id}
            min={0} 
            max={9999} 
            rules={[{ required: true, message: `请输入${title}` }]}
        />
    ),
    [EFormItemType.upload]: (id:string,title:string) => (
        <ProFormUploadButton
            name="upload"
            label={title}
            key={id}
            max={1}
            fieldProps={{
                name: 'file',
            }}
            action="/upload.do"
            rules={[{ required: true, message: `请上传${title}` }]}
        />
    ),
    [EFormItemType.description]: (id:string,title:string) => (
        <ProFormTextArea
            name="description"
            key={id}
            label={title}
            placeholder="请输入描述"
        />
    ) 
}

const Item = (props:any) => {
    const { id, item } = props
    const { type, title, option } = item
    console.log(item)
    return (
        itemMap[type](id,title,option)
    )
}
export default Item