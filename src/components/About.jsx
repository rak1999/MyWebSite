import React from "react";
import Img from "../Images/undraw_dev_productivity_re_fylf.svg";
import Common from "./Common";


export default function About(){
    return (
        <>
            <Common 
                name="Welcome to About Page" 
                imgsrc={Img} visit="/contact" 
                btnName="Contact Now" 
            />
        </>
    )
}