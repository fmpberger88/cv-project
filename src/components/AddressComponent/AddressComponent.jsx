import {AdressForm} from "../../styles.jsx";


function AddressComponent({ address, onAddressChange }) {
    // Handle input field changes
    const handleChange = (event) => {
        const { name, value} = event.target;
        onAddressChange({
            ...address,
            [name]: value
        });
    };

    return (
        <AdressForm>
            <input
                type="text"
                name="firstName"
                value={address.firstName || ''}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input
                type="text"
                name="lastName"
                value={address.lastName || ''}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <input
                type="text"
                name="street"
                value={address.street}
                onChange={handleChange}
                placeholder="Street Name"
            />
            <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
                placeholder="City"
            />
            <input
                type="text"
                name="zipcode"
                value={address.zipcode}
                onChange={handleChange}
                placeholder="Zipcode"
            />
            <input
                type="text"
                name="country"
                value={address.country}
                onChange={handleChange}
                placeholder="Country"
            />
            <input
                type="date"
                name="birthdate"
                value={address.birthdate}
                onChange={handleChange}
                placeholder="Birthdate"
            />
        </AdressForm>
    )
}

export default AddressComponent;