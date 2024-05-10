
import React , {useState, useEffect} from "react";


export default function App(){
  const url = import.meta.env.VITE_API;
  const [users, setUsers] = useState([])
  useEffect(() =>{
    fetch(url)
      .then(res => res.json())
      .then(result =>{
        setUsers(result);
        console.log(result);
      })
  },[])
  return(
    <div className="test">
      <h2 className="txt">
          Data_user
      </h2>
      {users.map(user =>(
        <p>{user.id_account} {user.username_account} {user.email_account}</p>
      ))}
    </div>
  )
}