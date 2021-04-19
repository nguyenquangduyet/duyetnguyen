import { Layout, Menu} from 'antd';
import React from 'react';
import styled from 'styled-components';
import {Link, useLocation, useHistory} from 'react-router-dom';
import {helper} from '../helper/commom';

const DivLogoHeader = styled.div`
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
`;

const { Header } = Layout;

const HeaderMovie = () => {
    const history = useHistory();
    const {pathname} = useLocation();
    const info = helper.dercyptTokenLocalStorage();
    const username = info !== null ? info.username :null;

    const logoutUser = () => {
        //xoa token
        helper.removeToken();
        //quay ve trang login
        history.push('/');
    }

    return(
        <Header>
            <DivLogoHeader />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
                <Menu.Item key="/search-movie">
                    <Link to="/">Search Movie</Link>
                </Menu.Item>
                <Menu.Item key="/popular-movie">
                    <Link to="/popular-movie">Popular Movie</Link>
                </Menu.Item>
                <Menu.Item key="/Upcoming-movie">
                    <Link to="/coming-movie">Upcoming Movie</Link>
                </Menu.Item>
                {
                    info === null
                    &&
                    <Menu.Item key="/">
                        <Link to="/">Login</Link>
                    </Menu.Item>
                }
                <Menu.Item>
                    <span>Hi:{username}</span>
                </Menu.Item>
                {
                    info !== null
                    &&
                    <Menu.Item onClick={() => logoutUser()}>
                        <span>Logout</span>
                    </Menu.Item>
                }
                
            </Menu>
        </Header>
    )
}
export default React.memo(HeaderMovie);