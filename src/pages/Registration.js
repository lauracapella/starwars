import {useState} from 'react'
import Login from './Login'


function Registration() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [flag, setFlag] = useState(false)
    const [login, setLogin] = useState(true)

    function handleSubmit(e){
       e.preventDefault();
        if(!name || !email || !password){
            setFlag(true)
            console.log('handlesubmit')
        }else{
            setFlag(false)
            console.log('saved in localstorage')
            localStorage.setItem('Name', JSON.stringify(name));
            localStorage.setItem('Email', JSON.stringify(email));
            localStorage.setItem('Password', JSON.stringify(password));

            console.log('saved in localstorage')

            setLogin(!login)
        }
    }

    function handleClick(){
        setLogin(!login)
    }


    return ( 
        <>

        {login ? (
        
        <form >
            <h1>Registrer</h1>
            <div>
                <label>Name:</label>
                <input
                type='text'
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                /> 
                <br/>

                 <label>Email:</label>
                <input
                type='text'
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)}
                />
                <br/>

                <label>Password:</label>
                <input
                type='text'
                placeholder="Enter your password"
                onChange={e => setPassword(e.target.value)}
                />
                
            </div>
            <button type='submit' onClick={handleSubmit}>Register</button>
            <p onClick={handleClick}>Already registered {''} Login?</p>

             {flag && (
                <p>Please fill in every field</p>
            )} 

        </form>
    ) : (
        <Login/>
        )}
        </>
    )
}

export default Registration;