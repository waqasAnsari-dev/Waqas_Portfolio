import React from "react";
const PrivateAlert = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn" onClick={onClose}>
            </div>
            {/* Modal content */}
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-96 transform animate-scaleIn">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">🔒 Private Client Project </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">This project was developed for a client. The source code cannot be
                    shared publicly.</p>
                <button
                    onClick={onClose}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200"
                >
                    Got it
                </button>
            </div>

        </div>
    )

}
export default PrivateAlert;