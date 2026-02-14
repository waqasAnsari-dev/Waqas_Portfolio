import React, { useEffect } from "react";
const VideoModal = ({ isOpen, onClose, videoSrc }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose])
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50  flex items-center justify-center" >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70  bacdroup-blur-sm animate-fadeIn" onClick={onClose}>
            </div>
            {/*{ Modal }*/}
            <div className="relative bg-black rounded-2xl shadow-2xl p-4 w-[90%] max-w-3xl animate-scaleIn">
            
            <video src={videoSrc} controls autoPlay className="w-full rounded-lg" />
            <button onClick={onClose} className="absolute top-3 right-3 text-white text-xl "> ✕</button>
            </div>

        </div>
    )
}
export default VideoModal;
        