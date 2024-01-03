import Nav from "../componets/nav"
import Foother from "../componets/foother"
import Card from "../componets/cards";
import '../assets/row.css'
import axios from "axios";
import React, { useEffect,useState } from "react";
export default function Fech(){
    const [data,stData] = useState([])
    useEffect(()=>{
       async function fecthdata(){
        axios.get('https://freenurapi.pythonanywhere.com/')
            .then(res => stData(res.data))
            .catch(err => console.log(err))
       }
       fecthdata(); 
    },[])
    return (
        <>
            <Nav/>
                <center>
                    <h1>fech page</h1>
                    <div className="row">
                        {
                            data.map((data)=>{
                                return <Card name={data.name} tel={data.tel} age={data.age} />
                            })
                        }
                    </div>
                    <div className="row">
                        <form action="https://freenurapi.pythonanywhere.com/" method="post">
                            <input type="text" name="name" />
                            <input type="text" name="tel" />
                            <input type="text" name="age" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </center>
            <Foother/>
        </>
    )
}