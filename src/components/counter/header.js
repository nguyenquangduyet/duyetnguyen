import React from 'react';

class HeaderComponent extends React.PureComponent {
    render() {
    console.log('HeaderComponent da dc render');
        return (
            <>
                <div style={{ width: '100%', minHeight:'50px', backgroundColor:'#ccc'}}>
                    <h1>This is header</h1>
                </div>
            </>
        )
    }
}

export default HeaderComponent;