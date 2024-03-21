import React from 'react';

interface PopupProps {
  onClose: (e: React.MouseEvent<HTMLDivElement>) => void | React.MouseEventHandler<HTMLDivElement>;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className=" inset-0 flex items-center justify-center  z-50 bg-black bg-opacity-50" onClick={onClose}>
      <div className="absolute inset-0"></div>
      <div className="relative flex flex-col items-center  max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
        <div className="absolute top-2 right-2" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="flex-shrink-0 w-6 h-6">
            <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
          </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 fill-current shrink-0 dark:text-violet-400">
          {/* SVG Paths */}
        </svg>
        <h2 className="text-2xl font-semibold leading-tight tracking-tight">Quis vel eros donec ac odio tempor.</h2>
        <p className="flex-1 text-center dark:text-gray-400">Tempora ipsa quod magnam non, dolores nemo optio. Praesentium soluta maiores non itaque aliquam sint.</p>
        <button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-violet-400 dark:text-gray-900">Start recycling</button>
      </div>
    </div>
  );
};

export default Popup;
