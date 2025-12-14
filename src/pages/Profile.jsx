import React from 'react';
import { useAuth } from '../context/user.context';

const Profile = () => {
    const { state } = useAuth();

    return (
        <div className="min-h-screen bg-secondary text-primary p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 bg-primary text-secondary flex items-center justify-center rounded-full text-4xl font-bold">
                        {state.user?.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{state.user?.name}</h1>
                        <p className="text-primary/80">{state.user?.email}</p>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-xl font-bold mb-4">Controls</h2>
                    <div className="flex space-x-8">
                        {/* Icons for video, audio, gps */}
                        <div className="flex items-center space-x-2">
                            <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">📹</span>
                            <span>Video</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">🔊</span>
                            <span>Audio</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">🛰️</span>
                            <span>GPS</span>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-xl font-bold mb-4">Trust Circles</h2>
                    <div className="bg-primary/5 p-4 rounded-lg">
                        <p>Your trusted contacts will appear here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
