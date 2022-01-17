import React, { useState } from "react";
import ImageGrid from './imagegrid';
import Modal from './modal';


const Portfolio = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div style={{}}>
            <div style={{ margin: '20px', marginTop: '20px' }}>
                <h1>Portfolio Page</h1>
                <ImageGrid setSelectedImg={setSelectedImg} />
                { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
            </div>
        </div>
    )
};
export default Portfolio;