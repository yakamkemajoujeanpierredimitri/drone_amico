import React from 'react';

const LiveStream = () => {
    return (
        <div className="min-h-screen bg-secondary text-primary flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-8">Live Stream</h1>
            <div className="w-full max-w-4xl aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                    <p className="text-2xl">📺</p>
                    <p className="mt-2">Live stream will appear here</p>
                    <p className="text-sm text-primary/60">🔊 Audio is active</p>
                </div>
            </div>
        </div>
    );
};

export default LiveStream;