import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { loginAction} from './../../ReactAction/loginAction';
import { useHistory } from "react-router-dom";

const Login = () => {
    const [email,setEmail]=useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    const dispatch = useDispatch();
    const submitForm = () =>{
        dispatch(loginAction(email,password));
    }
    const userDetails = useSelector((state) =>state.loginReducer);
    useEffect(()=>{
        if(userDetails.isLogin)
            history.push("/profile")

    },[userDetails.isLogin])
    return <div>
        <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="pasword" onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={submitForm}>Submit</button>
    </div>
}

export default Login;