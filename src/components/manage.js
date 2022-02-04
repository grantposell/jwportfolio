import React, { useState, useEffect } from 'react';
import ImageGrid from './imagegrid';
import Modal from './modal';
import { auth } from 'firebase';
import UploadForm from './uploadform';
import { useNavigate } from 'react-router-dom';


const Manage = () => {

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) history.push('/auth');
        })
    })
    const history = useNavigate();

    const logOut = () => {
        auth.signOut().then(res => {
            history.push('/auth');
            //do something else with res
        }).catch(err => {
            //do something else with err
        })
    }

    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div style={{}}>
            <div style={{ margin: '20px', marginTop: '20px' }}>
                <h1>Website Management Console</h1>
                <h5>Your Photos</h5>
                <p>The photos will be located here. Working on integrating Google Firebase now.
                    What is going on here!
                </p>
                <button onClick={logOut}>Log out</button>
                <UploadForm />
                <ImageGrid setSelectedImg={setSelectedImg} />
                {selectedImg &&
                    <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
            </div>

        </div>
    )
};
export default Manage;