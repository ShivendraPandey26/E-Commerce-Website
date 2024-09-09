import React from 'react';
import 'animate.css';

function Modal({ isVisible, onClose, children }) {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="w-[90%] md:w-[60%] lg:w-[40%] border-4 bg-[#eaf5f5] rounded-lg shadow-lg p-6 relative animate__animated animate__zoomIn animate__faster">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition-colors duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 32 32"
                        width="32px"
                        height="32px"
                    >
                        <g id="Cancel">
                            <path
                                d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16c8.836,0,16-7.163,16-16C32,7.163,24.836,0,16,0z M16,30 C8.268,30,2,23.732,2,16C2,8.268,8.268,2,16,2s14,6.268,14,14C30,23.732,23.732,30,16,30z"
                                fill="#ff0000"
                            />
                            <path
                                d="M22.729,21.271l-5.268-5.269l5.238-5.195c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.39-1.034-0.39-1.428,0 l-5.231,5.188l-5.309-5.31c-0.394-0.396-1.034-0.396-1.428,0c-0.394,0.395-0.394,1.037,0,1.432l5.301,5.302l-5.331,5.287 c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.429,0l5.324-5.28l5.276,5.276c0.394,0.396,1.034,0.396,1.428,0 C23.123,22.308,23.123,21.667,22.729,21.271z"
                                fill="#ff0000"
                            />
                        </g>
                    </svg>
                </button>

                {/* Modal Content */}
                <div className="mt-5">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;
