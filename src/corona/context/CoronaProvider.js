import React from 'react';
import {apiCovid} from '../services/api';
import ContextCorona from './MyContext';

class CoronaProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : false,
            virus : []
        }
    }
    async componentDidMount() {
        this.setState({loading : true});
        const data = await apiCovid.getDataFromApi();
        if(data){
            this.setState({virus : data});
        }
        this.setState({loading : false});
    }


    render() {
        return (
            <>
                <ContextCorona.Provider value={this.state}>
                    {this.props.children}
                </ContextCorona.Provider>
            </>
        )
    }
}
export default CoronaProvider;