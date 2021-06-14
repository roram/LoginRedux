import axios from 'axios';

//Siempre que es una llamada a ua web service es "_ _ _ _WS"
const LoginWS = (endpoint) =>{
    try{
        const response = axios.post(endpoint)
    }catch(err){
        if(err.response.status === 401){
            console.log('ERROR!!!')
        }
    }
}

export default LoginWS;