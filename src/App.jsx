import {useEffect, useState} from 'react'
import './App.css'
import AddressComponent from "./components/AddressComponent/AddressComponent.jsx";

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
    const [showDefaults, setShowDefaults] = useState(true);

    // useEffect for save address to localStorage
    useEffect(() => {
        localStorage.setItem('address', JSON.stringify(address));
    }, [address]);

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
        <main>
            <div>
                <AddressComponent address={address} onAddressChange={setAddress}/>
                {showDefaults && (
                    <button onClick={hideDefaults}>Hide Defaults</button>
                )}
            </div>
            <div>
                {/* Preview */}
            </div>
        </main>
        <footer>
            <p>footer</p>
        </footer>
    </>
  )
}

export default App
