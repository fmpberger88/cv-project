import {useState, useEffect, useCallback, useMemo} from 'react';
import { PDFDownloadLink, PDFViewer as ReactPDFViewer } from '@react-pdf/renderer';
import MyDocument from '../MyDocument/MyDocument.jsx';
import debounce from 'lodash/debounce';

function CvRender({ address, imageSrc, educations = [], experiences = []}) {
    const [image, setImage] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const [debouncedAddress, setDebouncedAddress] = useState(address);
    const [debouncedEducations, setDebouncedEducations] = useState(educations);
    const [debouncedExperiences, setDebouncedExperiences] = useState(experiences);

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
                setIsReady(false);
            };
            img.src = imageSrc;
        } else {
            setImage('#808080');
            setIsReady(true);
        }
    }, [imageSrc]);

    // Debounced function to update state
    const updateDebounceState = useCallback(
        debounce((newAdress, newEduction, newExperience) => {
            setDebouncedAddress(newAdress);
            setDebouncedEducations(newEduction);
            setDebouncedExperiences(newExperience);
        }, 6000)
    )

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


    if (!isReady) {
        return <div>Loading document...</div>;
    }

    console.log(experiences);


    return (
        <div>
            <ReactPDFViewer style={{ width: '100%', height: '1000px' }}>
                {memoizedDocument}
            </ReactPDFViewer>
            <PDFDownloadLink document={memoizedDocument} fileName="address-details.pdf">
                {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
        </div>
    );
}

export default CvRender;
