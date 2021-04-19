import { Menu, Dropdown, Button, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import MovieContex from '../context/index';
import {useContext} from 'react';
import {helper} from '../helper/commom';

const MenuLanguage = (props) => {
  return (
    <Menu onClick={(e) => props.change(e.key)}>
      <Menu.Item key="en-US" >
        English
      </Menu.Item>
      <Menu.Item key="vi">
        Vietnamese
      </Menu.Item>
    </Menu>
  )
}

const SwitchLanguage = (props) => {
  const infoUser = useContext(MovieContex);
  //console.log(infoUser);
  return (
    <Row style={{ margin: '30px 0px' }}>
      <Col span={4}>
        <Dropdown overlay={<MenuLanguage change={props.change} />}>
          <Button>
            Choose language <DownOutlined />
          </Button>
        </Dropdown>
      </Col>
      <Col span={20}>
        {!helper.isEmptyObject(infoUser) && <p>Hi:{infoUser.user}</p>}
      </Col>
    </Row>
  )
}
export default SwitchLanguage;
