
import React , {useState, useEffect} from "react";


export default function App(){
  const [users, setUsers] = useState([])
  useEffect(() =>{
    fetch("http://localhost:5000/users")
    // .than(res => {
    //   if (!res.ok) {
    //     throw new Error('Network response was not ok');
    //   }
    //   return res.json();
    // })
    // .than(result =>{
    //   console.log(result);
    // })
  },[])
  return(
    <div className="test">
      <h2 className="txt">
        Hello World!
      </h2>
    </div>
  )
}