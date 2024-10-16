import React from 'react'

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-t-4 border-purple-700 border-t-transparent rounded-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 opacity-30"></div>
        </div>
        <div className="absolute h-10 w-10 rounded-full bg-purple-700 opacity-60"></div>
      </div>
    </div>
  )
}