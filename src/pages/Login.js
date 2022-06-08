 import {useRef, useState, useEffect} from "react"; 
 import Wellcome from "./Wellcome";
 import Spaceshiplist from "./Spaceshiplist";

const Login = () =>{

    const [emailLog, setEmailLog] = useState('');
    const [passwordLog, setPasswordLog] = useState('');
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);

    function handleLogin(e){
        e.preventDefault();
        let mail = localStorage.getItem("Email").replace(/"/g, "");
        let pass = localStorage.getItem("Password").replace(/"/g, "");

        if(!emailLog || !passwordLog){
            setFlag(true)
            console.log('empty')
        } else if (passwordLog !== pass || emailLog !== mail){
            setFlag(true)

        }else{
            setHome(!home)
            setFlag(false)
        }
    }
    
    return(
        <div className="login_wrap m-auto mt-5">

        { home ? (
         
         <form className='form-group' onSubmit={ handleLogin }>
             <h1>Login</h1>
                <label>Email:</label>
                <input
                type='text'
                placeholder="Enter your email"
                onChange={e => setEmailLog(e.target.value)}
                className="form-control"
                />
                <br/>

                <label>Password:</label>
                <input
                type='text'
                placeholder="Enter your password"
                onChange={e => setPasswordLog(e.target.value)}
                className="form-control"
                />
                <div className='float-end'>
                    <button className='btn btn-light mt-2 ' type='submit'>LOG IN</button>
                </div>
           
             {flag && (
                <p>Please fill in every field</p>
            )} 
         </form>
         ) : (
             <Wellcome />
         ) }
        </div>
      
        
        )}

export default Login;