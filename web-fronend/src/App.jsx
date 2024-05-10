
import React , {useState, useEffect} from "react";


export default function App(){
  const [users, setUsers] = useState([])
  useEffect(() =>{
    fetch("http:localhost:5000")
  })
  return(
    <div className="test">
      <h2 className="txt">
        Hello World!
      </h2>
    </div>
  )
}