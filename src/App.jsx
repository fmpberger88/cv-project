import { useEffect, useState } from 'react';
import './App.css';
import AddressComponent from "./components/AddressComponent/AddressComponent.jsx";
import CvRender from "./components/CvRender/CvRender.jsx";
import { InputContainers, MainCointainer, PreviewContainer } from "./styles.jsx";
import ImageLoader from "./components/ImageLoader/ImageLoader.jsx";
import EducationComponent from "./components/EducationComponent/EducationComponent.jsx";
import ExperienceComponent from "./components/ExperienceComponent/ExperienceComponent.jsx";

function App() {
    const [address, setAddress] = useState(() => {
        const savedAddress = localStorage.getItem('address');
        return savedAddress ? JSON.parse(savedAddress) : {
            firstName: '',
            lastName: '',
            street: '',
            city: '',
            zipcode: '',
            country: '',
            birthdate: '',
            email: '',
            phone: ''
        };
    });

    const [educations, setEducations] = useState(() => {
        try {
            const savedEducations = localStorage.getItem('educations');
            return savedEducations ? JSON.parse(savedEducations) : [];
        } catch (error) {
            console.error("Fehler beim Parsen der Bildungsdaten:", error);
            return [];
        }
    });

    const [experiences, setExperiences] = useState(() => {
        try {
            const savedExperiences = localStorage.getItem('experiences');
            return savedExperiences ? JSON.parse(savedExperiences) : [];
        } catch (error) {
            console.error("Fehler beim Parsen der Erfahrungen:", error);
            return [];
        }
    });

    const [image, setImage] = useState(null);

    useEffect(() => {
        localStorage.setItem('address', JSON.stringify(address));
    }, [address]);

    useEffect(() => {
        localStorage.setItem('educations', JSON.stringify(educations));
    }, [educations]);

    useEffect(() => {
        localStorage.setItem('experiences', JSON.stringify(experiences));
    }, [experiences]);

    return (
        <>
            <h1 className="mainTitle">CV Generator</h1>
            <MainCointainer>
                <InputContainers>
                    <ImageLoader onImageChange={setImage} />
                    <AddressComponent address={address} onAddressChange={setAddress} />
                    <ExperienceComponent experiences={experiences} setExperiences={setExperiences} />
                    <EducationComponent educations={educations} setEducations={setEducations} />
                </InputContainers>
                <PreviewContainer>
                    <CvRender address={address} imageSrc={image} educations={educations} experiences={experiences} />
                </PreviewContainer>
            </MainCointainer>
            <footer>
                <p>footer</p>
            </footer>
        </>
    );
}

export default App;
