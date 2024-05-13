import { useState } from 'react';
import { AdressForm } from "../../styles.jsx";

function AddressComponent({ address, onAddressChange }) {
    const [errors, setErrors] = useState({});

    // Handle input field changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        onAddressChange({
            ...address,
            [name]: value
        });
        validateInput(name, value);
    };

    const validateInput = (name, value) => {
        let error = '';
        switch (name) {
            case 'firstName':
            case 'lastName':
                if (!value) {
                    error = 'This field cannot be empty';
                }
                break;
            case 'zipcode':
                if (!/^\d{5}$/.test(value)) {
                    error = 'Zipcode must be a 5-digit number';
                }
                break;
            case 'email':
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = 'Invalid email address';
                }
                break;
            case 'phone':
                if (!/^\+?\d{10,15}$/.test(value)) {
                    error = 'Phone number must be between 10 and 15 digits';
                }
                break;
            case 'birthdate':
                if (new Date(value) > new Date()) {
                    error = 'Birthdate cannot be in the future';
                }
                break;
            default:
                if (!value) {
                    error = 'This field cannot be empty';
                }
                break;
        }
        setErrors({ ...errors, [name]: error });
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
            {errors.firstName && <span>{errors.firstName}</span>}
            <input
                type="text"
                name="lastName"
                value={address.lastName || ''}
                onChange={handleChange}
                placeholder="Last Name"
            />
            {errors.lastName && <span>{errors.lastName}</span>}
            <input
                type="text"
                name="street"
                value={address.street || ''}
                onChange={handleChange}
                placeholder="Street Name"
            />
            {errors.street && <span>{errors.street}</span>}
            <input
                type="text"
                name="city"
                value={address.city || ''}
                onChange={handleChange}
                placeholder="City"
            />
            {errors.city && <span>{errors.city}</span>}
            <input
                type="text"
                name="zipcode"
                value={address.zipcode || ''}
                onChange={handleChange}
                placeholder="Zipcode"
            />
            {errors.zipcode && <span>{errors.zipcode}</span>}
            <input
                type="text"
                name="country"
                value={address.country || ''}
                onChange={handleChange}
                placeholder="Country"
            />
            {errors.country && <span>{errors.country}</span>}
            <input
                type="date"
                name="birthdate"
                value={address.birthdate || ''}
                onChange={handleChange}
                placeholder="Birthdate"
            />
            {errors.birthdate && <span>{errors.birthdate}</span>}
            <input
                type="email"
                name="email"
                value={address.email || ''}
                onChange={handleChange}
                placeholder="Email"
            />
            {errors.email && <span>{errors.email}</span>}
            <input
                type="tel"
                name="phone"
                value={address.phone || ''}
                onChange={handleChange}
                placeholder="Phone"
            />
            {errors.phone && <span>{errors.phone}</span>}
        </AdressForm>
    );
}

export default AddressComponent;
