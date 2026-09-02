import React from 'react';
import { IoClose } from "react-icons/io5";

function VideoModal({ videoUrl, isOpen, onClose }) {
  if (!isOpen || !videoUrl) return null;

  const getEmbedUrl = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11) 
      ? `https://www.youtube.com/embed/${match[2]}?autoplay=1` 
      : url;
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-[999] flex justify-center items-center p-4"
      onClick={onClose} 
    >
    
      <div 
        className="bg-black relative rounded-lg overflow-hidden w-full max-w-[850px] h-[500px] shadow-2xl flex items-center justify-center"
        onClick={(e) => e.stopPropagation()} 
      >
        
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-black bg-white hover:bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center transition-colors z-20 shadow-md"
        >
          <IoClose size={20} />
        </button>

      
        <iframe 
          className="w-full h-full object-contain"
          src={getEmbedUrl(videoUrl)} 
          title="Product Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default VideoModal;