import React from "react";
import { NavLink } from "react-router-dom";

export default function Card(props){
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top rounded" style={{width:"auto" , height:"200px"}} alt={props.title}/>
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <NavLink to='/' className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}