export const loginAction=(username,password)=>{
    let usernames=["vikash@gmail.com","rashmi@gmail.com","abc@gamil.com","xyz@gmail.com"]
    if(usernames.indexOf(username)!==-1 && password==="123")
        return {type:"Login",payload:{username:username,isLogin:true}}
    else 
        return {type:"Logout",payload:{isLogin:false}}
}