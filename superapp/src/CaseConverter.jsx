import { useState, useCallback } from 'react'

export default function CaseConverter() {
    const [inputText, setInputText] = useState("")
    const [convertedText, setConvertedText] = useState("")
    const [copy, setCopy] = useState('Copy')

    const handleInputChange = (e) => {
        setInputText(e.target.value)
    }

    const convertToUpperCase = () => {
        setConvertedText(inputText.toUpperCase())
    }

    const convertToLowerCase = () => {
        setConvertedText(inputText.toLowerCase())
    }

    const convertToSentenceCase = () => {
        const sentenceCase = inputText.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase())
        setConvertedText(sentenceCase)
    }

    const convertToTitleCase = () => {
        const titleCase = inputText.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())
        setConvertedText(titleCase)
    }

    const convertToMixedCase = () => {
        const mixedCase = inputText.split('').map((char, index) =>
            index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
        ).join('')
        setConvertedText(mixedCase)
    }

    const convertToInverseCase = () => {
        const inverseCase = inputText.split('').map((char) =>
            char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        ).join('')
        setConvertedText(inverseCase)
    }

    const copyToClipboard = useCallback(() => {
        navigator.clipboard.writeText(convertedText).then(() => {
            
            setTimeout(()=>{
                setCopy('Copy')
            },1000)
            setCopy('Copied')
        }).catch(err => {
            console.error('Failed to copy text: ', err)
        })
    }, [convertedText])

    const resetFields = () => {
        setInputText('')
        setConvertedText('')
    }

    return (
        <>
            <div className="w-screen min-h-screen bg-gradient-to-br from-blue-800 to-blue-300 flex items-center justify-center">
                <div className="max-w-2xl mx-auto my-8 p-8 bg-white rounded-lg shadow-lg transform transition-all duration-300">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Enhanced Case Converter</h2>
                    <div className="mb-6">
                        <textarea
                            type="text"
                            placeholder="Enter your text here"
                            value={inputText}
                            onChange={handleInputChange}
                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition duration-200 ease-in-out"
                        />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        <button
                            onClick={convertToUpperCase}
                            className="btn bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 active:bg-gray-900 transition duration-200"
                        >
                            Uppercase
                        </button>
                        <button
                            onClick={convertToLowerCase}
                            className="btn bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 active:bg-gray-900 transition duration-200"
                        >
                            Lowercase
                        </button>
                        <button
                            onClick={convertToSentenceCase}
                            className="btn bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 active:bg-gray-900 transition duration-200"
                        >
                            Sentence Case
                        </button>
                        <button
                            onClick={convertToTitleCase}
                            className="btn bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 active:bg-gray-900 transition duration-200"
                        >
                            Title Case
                        </button>
                        <button
                            onClick={convertToMixedCase}
                            className="btn bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 active:bg-gray-900 transition duration-200"
                        >
                            Mixed Case
                        </button>
                        <button
                            onClick={convertToInverseCase}
                            className="btn bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 active:bg-gray-900 transition duration-200"
                        >
                            Inverse Case
                        </button>
                    </div>
                    {convertedText && (
                        <>
                            <div className="mb-6">
                                <h3 className="font-semibold mb-2 text-gray-700">Converted Text:</h3>
                                <p className="p-4 bg-gray-100 rounded-lg border border-gray-200">{convertedText}</p>
                            </div>

                            <div className="flex justify-between">
                                <button
                                    onClick={copyToClipboard}
                                    className="btn bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 active:bg-blue-800 transition duration-200"
                                    disabled={!convertedText}
                                >
                                {copy}
                                </button>
                                <button
                                    onClick={resetFields}
                                    className="btn bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 active:bg-red-800 transition duration-200"
                                >
                                    <svg className='w-8 h-8' viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.56189 13.5L4.14285 13.9294L4.5724 14.3486L4.99144 13.9189L4.56189 13.5ZM9.92427 15.9243L15.9243 9.92427L15.0757 9.07574L9.07574 15.0757L9.92427 15.9243ZM9.07574 9.92426L15.0757 15.9243L15.9243 15.0757L9.92426 9.07574L9.07574 9.92426ZM19.9 12.5C19.9 16.5869 16.5869 19.9 12.5 19.9V21.1C17.2496 21.1 21.1 17.2496 21.1 12.5H19.9ZM5.1 12.5C5.1 8.41309 8.41309 5.1 12.5 5.1V3.9C7.75035 3.9 3.9 7.75035 3.9 12.5H5.1ZM12.5 5.1C16.5869 5.1 19.9 8.41309 19.9 12.5H21.1C21.1 7.75035 17.2496 3.9 12.5 3.9V5.1ZM5.15728 13.4258C5.1195 13.1227 5.1 12.8138 5.1 12.5H3.9C3.9 12.8635 3.92259 13.2221 3.9665 13.5742L5.15728 13.4258ZM12.5 19.9C9.9571 19.9 7.71347 18.6179 6.38048 16.6621L5.38888 17.3379C6.93584 19.6076 9.54355 21.1 12.5 21.1V19.9ZM4.99144 13.9189L7.42955 11.4189L6.57045 10.5811L4.13235 13.0811L4.99144 13.9189ZM4.98094 13.0706L2.41905 10.5706L1.58095 11.4294L4.14285 13.9294L4.98094 13.0706Z" fill="#ffffff"></path> </g></svg>
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

        </>
    )
}
