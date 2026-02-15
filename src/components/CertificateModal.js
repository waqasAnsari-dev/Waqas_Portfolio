import React from "react";

const CertificateModal = ({ isOpen, onClose, certificate }) => {
    if (!isOpen || !certificate) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-md animate-fadeIn"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl p-6 max-w-4xl w-full transform animate-[scaleIn_.4s_ease]">

                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {certificate.title}
                </h3>

                <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full rounded-2xl shadow-lg"
                />

                <div className="flex justify-between items-center mt-6">
                    <p className="text-gray-600 dark:text-gray-300">
                        {certificate.issuer} • {certificate.date}
                    </p>

                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:scale-105 transition-all duration-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CertificateModal;
