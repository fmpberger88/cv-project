import {useEffect, useState} from 'react'
import './App.css'
import AddressComponent from "./components/AddressComponent/AddressComponent.jsx";
import CvRender from "./components/CvRender/CvRender.jsx";
import {MainCointainer} from "./styles.jsx";
import ImageLoader from "./components/ImageLoader/ImageLoader.jsx";
import EducationComponent from "./components/EducationComponent/EducationComponent.jsx";

function App() {
    // Default Address
    const defaultAddress = {
        firstName: 'Fabian Marc Pascal',
        lastName: 'Berger',
        street: 'Oerlifallstieg 5',
        city: 'Schaffhausen',
        zipcode: '8200',
        country: 'Switzerland',
        birthdate: '1988-08-19'
    };

    // Default Address or from LocalStorage
    const [address, setAddress] = useState(() => {
        const savedAddress = localStorage.getItem('address');
        return savedAddress ? JSON.parse(savedAddress) : defaultAddress;
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


    const [showDefaults, setShowDefaults] = useState(true);
    const [image, setImage] = useState(null);

    // useEffect for save address to localStorage
    useEffect(() => {
        localStorage.setItem('address', JSON.stringify(address));
    }, [address]);

    // useEffects for saving education to localStorage
    useEffect(() => {
        localStorage.setItem('educations', JSON.stringify(educations));
    }, [educations])

    // Functions
    const hideDefaults = () => {
        setAddress({
            firstName: '',
            lastName: '',
            street: '',
            city: '',
            zipcode: '',
            country: '',
            birthdate: ''
        });
        setShowDefaults(false);
    }

  return (
    <>
        <MainCointainer>
            <div>
                <ImageLoader onImageChange={setImage}/>
                <AddressComponent address={address} onAddressChange={setAddress}/>
                {showDefaults && (
                    <button onClick={hideDefaults}>Hide Defaults</button>
                )}
                <EducationComponent educations={educations} setEducations={setEducations} />
            </div>
            <div>
                <CvRender address={address} imageSrc={image} educations={educations} />
            </div>
        </MainCointainer>
        <footer>
            <p>footer</p>
        </footer>
    </>
  )
}

export default App
