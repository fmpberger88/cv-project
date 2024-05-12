import React, { useState } from 'react';

const ImageLoader = ({ onImageChange }) => {
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage(event.target.result);
                onImageChange(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div style={{
            width: '150px',
            height: '150px',
            borderRadius: '75px',
            backgroundColor: image ? 'transparent' : '#ccc',
            backgroundImage: image ? `url(${image})` : null,
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px solid #666'
        }}>
            {!image && <span style={{ color: '#666' }}>Kein Bild</span>}
            <input type="file" onChange={handleImageChange} style={{ display: 'none' }} />
            <button onClick={() => document.querySelector('input[type="file"]').click()}>
                Bild hochladen
            </button>
        </div>
    );
}

export default ImageLoader;
