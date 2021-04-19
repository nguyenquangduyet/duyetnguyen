import React from 'react';

import Countries from './component/countries';
import GlobalCorona from './component/Global';
import {Row, Col} from 'antd';
import CoronaProvider from './context/CoronaProvider'

class CoronaApp extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {
            loading: false,
            virus: []
        }
    }

    async componentDidMount(){
        this.setState({loading: true});
        const dataVirus = await apiCovid.getDataFromApi();
        if(dataVirus){
            this.setState({virus: dataVirus})
        }
        this.setState({loading : false});
    }*/

    render() {
        //console.log(this.state.virus);
        return (
            <>
                <Row>
                    <Col span={20} offset={2}>
                        <CoronaProvider>
                            <GlobalCorona/>
                            <Countries/>
                        </CoronaProvider>
                    </Col>
                </Row>
            </>
        )
    }
}
export default CoronaApp;