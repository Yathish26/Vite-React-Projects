import React, { useState } from 'react';
import axios from 'axios';

export default function Bgremove() {
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null); 
    const [processedImage, setProcessedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handle Image Upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);

        // Create a preview URL for the uploaded image
        const imageUrl = URL.createObjectURL(file);
        setImagePreview(imageUrl);
    };

    // Process Image for Background Removal
    const handleBgRemove = async () => {
        if (!image) return;
        setLoading(true);

        const formData = new FormData();
        formData.append('image_file', image);

        try {
            const response = await axios.post(
                'https://api.remove.bg/v1.0/removebg',
                formData,
                {
                    headers: {
                        'X-Api-Key': 'QiKrcYTUuZd8eCTuF11Z4bwi',
                    },
                    responseType: 'blob',
                }
            );
            const resultImageUrl = URL.createObjectURL(response.data);
            setProcessedImage(resultImageUrl);
        } catch (error) {
            console.error('Error removing background:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8">
            <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg"> Image Background Remover</h1>
            <div className='flex items-center mo:flex-col gap-8'>

                {/* Custom File Upload */}
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg mb-8">
                    <label className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full cursor-pointer transition duration-300 ease-in-out shadow-lg">
                        Choose File
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                    </label>

                    {/* Image Preview */}
                    {imagePreview && (
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="mt-4 max-w-xs rounded-lg shadow-lg"
                        />
                    )}

                    {image && (
                        <p className="mt-4 text-gray-700 text-sm">
                            {image.name} {/* Display the name of the uploaded file */}
                        </p>
                    )}

                    {/* Button to Trigger Background Removal */}
                    {image && <button
                        onClick={handleBgRemove}
                        className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg transition duration-300 ease-in-out shadow-lg"
                        disabled={!image || loading}
                    >
                        {loading ? (
                            <span className="flex items-center space-x-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l5-5-5-5v4a8 8 0 010 16v4l-5-5 5-5v4a8 8 0 01-8-8z"></path>
                                </svg>
                                <span>Processing...</span>
                            </span>
                        ) : (
                            'Remove Background'
                        )}
                    </button>}
                </div>

                {/* Display Processed Image */}
                {processedImage && (
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                        <img
                            src={processedImage}
                            alt="Processed"
                            className="max-w-xs rounded-lg mb-6 shadow-lg"
                        />

                        {/* Download Button */}
                        <a
                            href={processedImage}
                            download="background_removed.png"
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg"
                        >
                            Download Image
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
