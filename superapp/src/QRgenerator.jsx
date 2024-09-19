import React, { useRef, useState } from 'react';
import QRCode from 'react-qr-code';
import { toJpeg } from 'html-to-image';

export default function QRgenerator() {
    const [inputText, setInputText] = useState('');
    const [error, setError] = useState('');
    const MAX_LENGTH = 2000;
    const exportRef = useRef(null);

    const handleInputChange = (e) => {
        const text = e.target.value;
        if (text.length > MAX_LENGTH) {
            setError('Length Exceeded');
        } else {
            setError('');
            setInputText(text);
        }
    };

    const handleExport = () => {
        if (exportRef.current === null) {
            return;
        }

        const node = exportRef.current;

        // Options to increase quality
        const scale = 3; // Increase this value for higher resolution
        const width = node.scrollWidth * scale;
        const height = node.scrollHeight * scale;

        toJpeg(node, {
            quality: 1, // Quality
            width: width,
            height: height,
            style: {
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
                width: `${node.scrollWidth}px`,
                height: `${node.scrollHeight}px`,
                overflow: 'hidden',
            },
        })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'qr-code.jpg';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.error('Failed to export image', err);
            });
    };

    return (
        <div className="w-screen h-screen flex items-center mo:items-start justify-center bg-gray-100">
            <div className="p-6 mo:mt-8 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Text to QR Code Generator</h2>
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Enter text to generate QR Code"
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                />
                {error ? (
                    <p className="text-center text-red-500 mb-4">{error}</p>
                ) : (
                    <div ref={exportRef} className="flex justify-center mb-4">
                        <QRCode value={inputText || ' '} size={256} />
                    </div>
                )}
                {!inputText && !error && <p className="text-center text-gray-500">Enter text to see the QR Code</p>}
                {inputText && !error && (
                    <div className="flex justify-center mt-2">
                        <button onClick={handleExport} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Download
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
