import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
 const Recipe =(props)=>{
 let{id}=useParams()
 console.log(id)    
    return(
        <div>Recipe name</div>
    )
}

export default Recipe