import React, { useState } from "react";
import { certificatesData } from "../data/certifcatesData.js";
import CertificateModal from "./CertificateModal.js";

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section
            id="certificates"
            className="py-24 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
            <div className="max-w-6xl mx-auto px-4">

                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                    Certifications
                </h2>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {certificatesData.map((cert) => (
                        <div
                            key={cert.id}
                            onClick={() => setSelectedCert(cert)}
                            className="group relative cursor-pointer rounded-2xl 
              bg-white/40 dark:bg-white/5 
              backdrop-blur-xl border border-white/20 
              shadow-lg overflow-hidden 
              transition-all duration-500 
              hover:-translate-y-3 hover:shadow-2xl"
                        >
                            {/* Image Container */}
                            <div className="h-52 overflow-hidden bg-gray-100 dark:bg-gray-800">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 bg-white dark:bg-gray-900">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                                    {cert.title}
                                </h3>

                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    {cert.issuer}
                                </p>

                                <p className="mt-1 text-sm font-medium text-blue-600">
                                    {cert.date}
                                </p>

                                {/* Animated Bottom Line */}
                                <div className="mt-4 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 w-0 group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <CertificateModal
                isOpen={!!selectedCert}
                certificate={selectedCert}
                onClose={() => setSelectedCert(null)}
            />
        </section>
    );
};

export default Certificates;
