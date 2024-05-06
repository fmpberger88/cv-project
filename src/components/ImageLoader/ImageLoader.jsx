const ImageLoader = ({ onImageChange }) => {
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                console.log("Setting image in parent component");
                onImageChange(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleImageChange} />
        </div>
    );
};


export default ImageLoader;