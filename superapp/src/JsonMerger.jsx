import React, { useState } from 'react';

export default function JsonMerger() {
    const [jsonFiles, setJsonFiles] = useState([]);
    const [mergedJson, setMergedJson] = useState(null);

    // Handle file input change
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setJsonFiles(files);
    };

    // Merge JSON files
    const mergeJsonFiles = () => {
        const mergedData = [];
        let filesProcessed = 0; 
    
        jsonFiles.forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const jsonData = JSON.parse(e.target.result);
                    
                    
                    if (Array.isArray(jsonData)) {
                        mergedData.push(...jsonData);
                    } else {
                        mergedData.push(jsonData);
                    }
    
                    filesProcessed++;
                    
                    
                    if (filesProcessed === jsonFiles.length) {
                        setMergedJson(mergedData);
                    }
                } catch (error) {
                    console.error('Error parsing JSON file:', error);
                    alert('Error parsing JSON file: ' + file.name);
                }
            };
            reader.readAsText(file);
        });
    };
    // Download merged JSON
    const downloadMergedJson = () => {
        const blob = new Blob([JSON.stringify(mergedJson, null, 2)], {
            type: 'application/json',
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'merged.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className='min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-6'>
    <h1 className='text-4xl font-bold mb-6 text-black text-shadow-md'>JSON Merger</h1>
    <input
        type='file'
        accept='.json'
        multiple
        onChange={handleFileChange}
        className='mb-6 border border-white rounded-lg p-3 bg-white bg-opacity-80 shadow-md hover:shadow-lg transition duration-300'
    />
    <button
        onClick={mergeJsonFiles}
        className='bg-blue-700 text-white px-6 py-3 rounded-lg mb-4 shadow-md hover:bg-blue-800 transition duration-300 transform hover:scale-105'
    >
        Merge JSON
    </button>
    {mergedJson && (
        <button
            onClick={downloadMergedJson}
            className='bg-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition duration-300 transform hover:scale-105'
        >
            Download Merged JSON
        </button>
    )}
    {!mergedJson && jsonFiles.length > 0 && (
        <p className='text-white mt-4 text-lg'>No JSON files merged yet. Click "Merge JSON" to proceed.</p>
    )}
</div>

    );
}
