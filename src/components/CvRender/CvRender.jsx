import { useState, useEffect } from 'react';
import { PDFDownloadLink, PDFViewer as ReactPDFViewer } from '@react-pdf/renderer';
import MyDocument from '../MyDocument/MyDocument.jsx'; // Assume MyDocument is imported

function CvRender({ address, imageSrc, educations }) {
    const [image, setImage] = useState(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (imageSrc) {
            const img = new Image();
            img.onload = () => {
                console.log("Image loaded successfully");
                setImage(imageSrc);
                setIsReady(true);
            };
            img.onerror = () => {
                console.error("Failed to load the image");
                setIsReady(false);
            };
            img.src = imageSrc;
        }
    }, [imageSrc]);


    if (!isReady) {
        return <div>Loading document...</div>;
    }

    return (
        <div>
            <ReactPDFViewer style={{ width: '100%', height: '1000px' }}>
                <MyDocument address={address} image={image} educations={educations} />
            </ReactPDFViewer>
            <PDFDownloadLink document={<MyDocument address={address} image={image} educations={educations} />} fileName="address-details.pdf">
                {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
        </div>
    );
}

export default CvRender;
