import { createContext , useContext ,useReducer , useEffect } from "react";
import generale from "../service/auth";
const AuthContext = createContext();
const authInitialState = 
{
    user:null,
    isAuthenticated:false,
    loading:true,
    error:null,
}
const authReducer = (state,action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            return{
                ...state,
                user:action.payload,
                isAuthenticated:true,
                loading: false,
            }
        case "LOGOUT":
            return{
                ...authInitialState,
                loading: false,
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
            ///console.log('Auth Check User:', res);
            dispatch({type:"AUTH_CHECK",payload:{user:res,check:true}});
        }
        
    }
    const Login =  (formData) => {
        const res = localStorage.getItem(formData.email) ? JSON.parse(localStorage.getItem(formData.email)) : null;
        if(formData.email === generale.email && formData.password === generale.password){
            dispatch({type:"LOGIN_SUCCESS",payload:generale});
            localStorage.setItem('userData', JSON.stringify(generale));
            localStorage.setItem(formData.email, JSON.stringify(formData));
            return { data: generale };
        }
        if(!res){
            return { error: "Utente non trovato. Per favore registrati." };
        };
        if(res.password !== formData.password){
            return { error: "I credenziali non validi  ." };
        }
       dispatch({type:"LOGIN_SUCCESS",payload:res});
       localStorage.setItem('userData', JSON.stringify(res));
       return { data: res };
    }
    const Register = (formData) => {
                
        const res = localStorage.getItem(formData.email) ? JSON.parse(localStorage.getItem(formData.email)) : null;
        if(res){
            return { error: "Utente esistente. Login." };
        }
        localStorage.setItem(formData.email, JSON.stringify(formData));
        localStorage.setItem('userData', JSON.stringify(formData));
        dispatch({type:"LOGIN_SUCCESS",payload:formData});
        return { data: formData };
    }
    return(
        <AuthContext.Provider value={{state,dispatch , Register , Login}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = ()=> useContext(AuthContext);