import React, { Component } from 'react';
import UploadForm from './uploadform';


class Manage extends Component {
    render() {
        return (
            <div style={{}}>
                <div style={{ margin: '20px', marginTop: '20px' }}>
                    <h1>Website Management Console</h1>
                    <h5>Your Photos</h5>
                    <p>The photos will be located here. Working on integrating Google Firebase now.</p>
                    <UploadForm/>
                </div>
                
            </div>
            
        )
    }
};
export default Manage;