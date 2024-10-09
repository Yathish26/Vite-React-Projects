import React, { useState } from 'react';
import axios from 'axios';

export default function Bgremove() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [bgRemovedImage, setBgRemovedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    // Function to handle file input change
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));  // Show the preview of the image
            removeBackground(file);  // Call the background removal function
        }
    };

    // Function to remove background using the PhotoRoom API
    const removeBackground = async (file) => {
        setLoading(true);
        const formData = new FormData();
        formData.append("image_file", file);

        try {
            const response = await axios.post('https://sdk.photoroom.com/v1/segment', formData, {
                headers: {
                    Authorization: `Bearer f6a35b3f209ecdcd2f693a5c150347384053e580`,  // Bearer token format
                    'Content-Type': 'multipart/form-data',
                },
            });

            setBgRemovedImage(response.data.image_url);  // Update with the returned image URL
        } catch (error) {
            console.error("Error removing background:", error);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-2xl font-semibold mb-6">Background Remover</h1>

            <div className="w-full max-w-md">
                <input
                    type="file"
                    accept="image/*"
                    className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-500 file:text-white
                        hover:file:bg-blue-600"
                    onChange={handleImageUpload}
                />
            </div>

            {loading && <p className="mt-4 text-blue-500">Removing background, please wait...</p>}

            {selectedImage && !loading && (
                <div className="mt-6">
                    <h2 className="text-xl font-medium mb-4">Original Image</h2>
                    <img src={selectedImage} alt="Uploaded" className="w-full max-w-md rounded-md shadow-lg" />
                </div>
            )}

            {bgRemovedImage && !loading && (
                <div className="mt-6">
                    <h2 className="text-xl font-medium mb-4">Image with Background Removed</h2>
                    <img src={bgRemovedImage} alt="Background Removed" className="w-full max-w-md rounded-md shadow-lg" />
                    <a
                        href={bgRemovedImage}
                        download="bg_removed_image.png"
                        className="mt-4 block bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600"
                    >
                        Download Image
                    </a>
                </div>
            )}
        </div>
    );
}
