import { createContext , useContext ,useReducer , useEffect } from "react";

const AuthContext = createContext();
const authInitialState = 
{
    user:null,
    isAuthenticated:false,
    loading:false,
    error:null,
}
const authReducer = (state,action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            return{
                ...state,
                user:action.payload,
                isAuthenticated:true,
            }
        case "LOGOUT":
            return{
                ...authInitialState
            }
        case "AUTH_CHECK":
            //console.log('Auth Check User:', action.payload.user);
            return{
                user:action.payload.user,
                isAuthenticated:action.payload.check,
                loading:false,
                error:null
            }
        case "ERROR":
            return{
                ...state,
                error:action.payload,
                loading:false
            }
        case "LOADING":
            return{
                ...state,
                loading:true
            }
        case "USER_UPDATE":
            return{
                ...state,
                user:action.payload
            }

        default:
            return state;
    };
}
export const AuthProvider = ({children})=>{
    const [state,dispatch] = useReducer(authReducer,authInitialState);
    useEffect(()=>{
        authCheck();
    },[]);
    const authCheck = async ()=>{
        dispatch({type:"LOADING"});
        const res = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null;
        if(!res){
            dispatch({type:"ERROR",payload:"No user logged in"});
        }else{
            ///console.log('Auth Check User:', res.data);
            dispatch({type:"AUTH_CHECK",payload:{user:res,check:true}});
        }
        
    }
    const Login =  (formData) => {
        const res = localStorage.getItem(formData.name) ? JSON.parse(localStorage.getItem(formData.name)) : null;
    if(!res){
        return { error: "User not found. Please sign up." };
    };
    if(res.password !== formData.password){
        return { error: "Invalid credentials. Please try again." };
    }
    return { data: res };
}
    const Register = (formData) => {
                
        const res = localStorage.getItem(formData.name) ? JSON.parse(localStorage.getItem(formData.name)) : null;
        if(!res){
            return { error: "User already exists. Please sign in." };
        }
        localStorage.setItem(formData.name, JSON.stringify(formData));
        return { data: formData };
    }
    return(
        <AuthContext.Provider value={{state,dispatch , Register , Login}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = ()=> useContext(AuthContext);