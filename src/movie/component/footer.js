import { Layout} from 'antd';
import React from 'react';

const { Footer } = Layout;

const FooterMovie = () => {
    return(
        <Footer style={{ textAlign: 'center'}}>App</Footer>
    )
}
export default React.memo(FooterMovie);