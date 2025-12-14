import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconVideo, IconMicrophone, IconUsers, IconStop, IconArrowBack, IconLocation } from '../component/Icons';

const LiveStream = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const showStopModal = () => setIsModalOpen(true);
    const closeConfirmModal = () => setIsModalOpen(false);

    const confirmStop = () => {
        closeConfirmModal();
        setIsSuccessModalOpen(true);
    };

    const goToProfile = () => {
        setIsSuccessModalOpen(false);
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200">
            <main className="p-4 md:p-6 lg:p-8 max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Main content: Stream */}
                    <div className="lg:col-span-2">
                        <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden relative flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700">
                           <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 text-gray-400 dark:text-gray-600">
                                    <IconVideo />
                                </div>
                            </div>
                            <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-3 py-1 rounded-full font-mono">DPA-7F3A</div>
                        </div>
                    </div>

                    {/* Sidebar: Controls and Info */}
                    <div className="space-y-6">
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                            <div className="p-3 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 font-semibold text-sm rounded-xl flex items-center justify-center gap-2">
                                <IconMicrophone className="w-4 h-4" />
                                <span>Audio is Active</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <InfoCard label="Altitude" value="45 m" />
                            <InfoCard label="Speed" value="12 km/h" />
                            <InfoCard label="Battery" value="78%" />
                        </div>

                        <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                            <h4 className="font-semibold text-gray-600 dark:text-gray-300 mb-3 flex items-center gap-2 text-sm">
                                <IconUsers className="w-5 h-5" />
                                Live Viewers
                            </h4>
                            <div className="space-y-2">
                                <Viewer name="Mom" />
                                <Viewer name="Sara" />
                                <Viewer name="Paolo" />
                            </div>
                        </div>
                        
                        <button onClick={showStopModal} className="w-50 flex  flex-col items-center justify-center gap-0.5 py-1 px-2 bg-red-500 hover:bg-red-600 active:bg-red-700 transition-all duration-200 rounded-xl font-semibold text-xs text-white shadow-lg hover:shadow-red-500/30 transform active:scale-98">
                            <IconStop className="w-2 h-2" />
                            End Stream
                        </button>
                    </div>
                </div>
            </main>

            {isModalOpen && (
                <Modal title="End Live Stream?" onClose={closeConfirmModal}>
                    <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">This will stop the live stream for all viewers.</p>
                    <div className="flex gap-3">
                        <button onClick={closeConfirmModal} className="flex-1 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm">Cancel</button>
                        <button onClick={confirmStop} className="flex-1 p-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm">Confirm</button>
                    </div>
                </Modal>
            )}

            {isSuccessModalOpen && (
                <Modal title="Stream Ended" onClose={goToProfile}>
                    <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-800/50 text-green-600 dark:text-green-400 flex items-center justify-center rounded-full text-4xl mb-4">✓</div>
                    <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">The stream has ended successfully.</p>
                    <button onClick={goToProfile} className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors text-sm">Done</button>
                </Modal>
            )}
        </div>
    );
};

const InfoCard = ({ label, value }) => (
    <div className="bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
        <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
        <div className="font-bold text-gray-800 dark:text-white text-xl mt-1">{value}</div>
    </div>
);

const Viewer = ({ name }) => (
    <div className="flex items-center justify-between text-sm p-2.5 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
        <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Online</span>
        </div>
    </div>
);

const Modal = ({ children, title, onClose }) => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
            {children}
        </div>
    </div>
);

export default LiveStream;