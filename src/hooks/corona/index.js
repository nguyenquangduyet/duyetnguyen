import React from 'react';
import CoronaProvider from './context/corona-provider';
import Countries from './component/countries';
import GlobalCorona from './component/Global';
import {Row, Col} from 'antd';

const CoronaApp = () => {
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
export default CoronaApp;