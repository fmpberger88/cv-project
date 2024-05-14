import { useState, useEffect, useCallback, useMemo } from 'react';
import { PDFDownloadLink, PDFViewer as ReactPDFViewer } from '@react-pdf/renderer';
import MyDocument from '../MyDocument/MyDocument.jsx';
import debounce from 'lodash/debounce';
import {UpdateButton} from "../../styles.jsx";

function CvRender({ address, imageSrc, educations = [], experiences = [] }) {
    const [image, setImage] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const [debouncedAddress, setDebouncedAddress] = useState(address);
    const [debouncedEducations, setDebouncedEducations] = useState(educations);
    const [debouncedExperiences, setDebouncedExperiences] = useState(experiences);
    const [renderedDocument, setRenderedDocument] = useState(null);

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
                setImage('#808080');
                setIsReady(true);
            };
            img.src = imageSrc;
        } else {
            setImage('#808080');
            setIsReady(true);
        }
    }, [imageSrc]);

    // Debounced function to update state
    const updateDebounceState = useCallback(
        debounce((newAddress, newEducations, newExperiences) => {
            setDebouncedAddress(newAddress);
            setDebouncedEducations(newEducations);
            setDebouncedExperiences(newExperiences);
        }, 500),
        []
    );

    useEffect(() => {
        updateDebounceState(address, educations, experiences);
    }, [address, educations, experiences, updateDebounceState]);

    const memoizedDocument = useMemo(() => (
        <MyDocument
            address={debouncedAddress}
            image={image}
            educations={debouncedEducations}
            experiences={debouncedExperiences}
        />
    ), [debouncedAddress, image, debouncedEducations, debouncedExperiences]);

    const handleRender = useCallback(() => {
        setRenderedDocument(memoizedDocument);
    }, [memoizedDocument]);

    // Initial render when the component mounts
    useEffect(() => {
        const initialRender = () => {
            handleRender();
        };
        initialRender();
    }, []); // Empty dependency array to ensure this effect runs only once

    if (!isReady) {
        return <div>Loading document...</div>;
    }

    return (
        <div>
            <UpdateButton onClick={handleRender}>Update PDF</UpdateButton>
            {renderedDocument && (
                <>
                    <ReactPDFViewer style={{ width: '100%', height: '1000px' }}>
                        {renderedDocument}
                    </ReactPDFViewer>
                    <PDFDownloadLink document={renderedDocument} fileName="cv.pdf">
                        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
                    </PDFDownloadLink>
                </>
            )}
        </div>
    );
}

export default CvRender;
