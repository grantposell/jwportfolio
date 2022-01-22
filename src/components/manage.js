import React, { useState, useEffect} from 'react';
import ImageGrid from './imagegrid';
import Modal from './modal';
import UploadForm from './uploadform';


const Manage = () => {
    
        const [selectedImg, setSelectedImg] = useState(null);

        return (
            <div style={{}}>
                <div style={{ margin: '20px', marginTop: '20px' }}>
                    <h1>Website Management Console</h1>
                    <h5>Your Photos</h5>
                    <p>The photos will be located here. Working on integrating Google Firebase now.
                        What is going on here!
                    </p>
                    <UploadForm/>
                    <ImageGrid setSelectedImg={setSelectedImg} />
                    { selectedImg && 
                    <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
                </div>
                
            </div>
        )
};
export default Manage;