import React from 'react';
import { useAuth } from '../context/user.context';
import { Link } from 'react-router-dom';
import { IconDrone, IconVideo, IconMicrophone, IconLocation, IconCheck, IconUsers, IconUserPlus, IconPlay } from '../component/Icons';

const Profile = () => {
    const { state } = useAuth();
    const user = state.user || { name: 'Guest', email: 'guest@example.com' };

    const addPerson = () => {
        const name = prompt('Enter the person\'s name:');
        if (name && name.trim()) {
            const email = prompt(`Enter the email for ${name}:`);
            if (email && email.trim()) {
                alert(`✓ ${name} added to Trusted Circle\n\nEmail: ${email}\nInvitation sent successfully`);
            }
        }
    };

    return (
        <div className="bg-gray-50 dark:bg-slate-900 font-sans text-slate-800 dark:text-white">
            <main className="p-4 lg:p-8 max-w-4xl mx-auto">
                <div className="space-y-8">
                    {/* Profile Header */}
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
                        <div className="w-24 h-24 bg-blue-500 text-white flex items-center justify-center rounded-full text-4xl font-bold flex-shrink-0 mx-auto md:mx-0">
                            {user?.name ? user.name.charAt(0).toUpperCase() : 'G'} 
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">{user?.name || 'Guest'}</h2>
                            <p className="text-slate-500 dark:text-slate-400">{user.email}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Drone Feed Status */}
                        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
                            <h3 className="flex items-center gap-3 font-bold text-slate-700 dark:text-slate-200 mb-4 text-lg">
                                <IconDrone />
                                Drone Feed Status
                            </h3>
                            <div className="space-y-3">
                                <StatusItem icon={<IconVideo />} label="Live Video" />
                                <StatusItem icon={<IconMicrophone />} label="Active Audio" />
                                <StatusItem icon={<IconLocation />} label="Active GPS" />
                            </div>
                        </div>

                        {/* Trusted Circle */}
                        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg flex flex-col">
                            <h3 className="flex items-center gap-3 font-bold text-slate-700 dark:text-slate-200 mb-4 text-lg">
                                <IconUsers />
                                Trusted Circle
                            </h3>
                            <div className="space-y-3 flex-1">
                               <ContactItem name="Mom" email="maria.rossi@example.com" />
                               <ContactItem name="Sara" email="sara.bianchi@example.com" />
                               <ContactItem name="Paolo" email="paolo.verdi@example.com" />
                            </div>
                            <button onClick={addPerson} className="mt-4 w-full flex items-center justify-center gap-2 p-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border-2 border-transparent dark:hover:bg-slate-600 rounded-xl font-semibold hover:bg-slate-200 transition-colors">
                                <IconUserPlus />
                                Add Person
                            </button>
                        </div>
                    </div>
                    
                    {/* Start Streaming Link */}
                    <Link to="/livestream" className="max-w-[200px] max-h-[200px]  flex-col  flex items-center justify-center gap-2 p-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 rounded-2xl font-bold text-lg text-white shadow-xl hover:shadow-blue-500/40 transform active:scale-98 md:w-full">
                        <IconPlay className="w-3 h-3" />
                        Start Streaming
                    </Link>
                </div>
            </main>
        </div>
    );
};

const StatusItem = ({ icon, label }) => (
    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-500/30 text-blue-600 dark:text-blue-300 rounded-full">
                {icon}
            </div>
            <span className="font-medium text-slate-700 dark:text-slate-200">{label}</span>
        </div>
        <div className="w-8 h-8 flex items-center justify-center bg-green-100 dark:bg-green-500/30 text-green-600 dark:text-green-300 rounded-full">
            <IconCheck />
        </div>
    </div>
);

const ContactItem = ({ name, email }) => (
    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
        <div>
            <div className="font-semibold text-slate-800 dark:text-slate-100">{name}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">{email}</div>
        </div>
        <div className="px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-500/30 rounded-full">
            Active
        </div>
    </div>
);

export default Profile;
