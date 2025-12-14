import React, { useState } from 'react';
import DynamicForm from '../component/Form';
import { useAuth } from '../context/user.context';

import { useNavigate, Link ,useSearchParams} from 'react-router-dom';

const SignUp = () => {
    const { dispatch, Register } = useAuth();
    const [searchParams ,setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [error, setError] = useState(searchParams.get('error')|| null);
    const [loading, setLoading] = useState(false);

    const initialvalues = {
        email: '',
        password:'',
        name:''
    }
    const signInFields = [
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            placeholder: '',
            required: true,
              validation: { pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Indirizzo mail non valido' } }
            
        },
         {
            name: 'password',
            label: 'Password',
            type: 'password',
            placeholder: '',
            required: true,
            
        }, 
         {
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: '',
            required: true,
            
        }, 
    ];



    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-4">
            <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-200 transform transition-all duration-300 hover:scale-105">
                <button
                    onClick={() => navigate('/')}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                >
                    &times;
                </button>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-2">Benvenuto</h2>
                <p className="text-center text-gray-600 mb-8">Crea un account.</p>
                
                {error && <p className="text-red-600 bg-red-100 border border-red-200 p-3 rounded-md text-center mb-4">{error}</p>}

                {/* Admin toggle */}
             

                <DynamicForm
                    schema={signInFields}
                    onSubmit={async (formData) => {
        setLoading(true);
        setError(null);
        const res =   Register(formData);
        if (res.error) {
            setError(res.error);
            dispatch({ type: "ERROR", payload: res.error });
        } else {
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate('/dashboard');
        }
        setLoading(false);
    }}
                    submitLabel={loading ? 'Signing up...' : 'Sign Up'}
                    initialValues={initialvalues}
                />
                <p className="mt-6 text-center text-gray-600">
                    Ho un account? <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">Login</Link>
                </p>
              
            </div>
        </div>
    );
};

export default SignUp;