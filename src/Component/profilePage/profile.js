import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const Profile = () => {
    const userDetails = useSelector((state) =>state.loginReducer);
    let history = useHistory();
    useEffect(()=>{
        if(!userDetails.isLogin)
            history.push("/");
            
    },[userDetails.isLogin])
    return <div>
       <h3>Welcome {userDetails.username}</h3>
    </div>
}

export default Profile;