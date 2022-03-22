import React from "react";
import Img from "../Images/Rocket-Man.svg";
import Common from "./Common";


export default function Home(){
    return (
        <>
            <Common 
                name="Create Your Ideas with" 
                imgsrc={Img} 
                visit="/service" 
                btnName="Get Started" 
            />
        </>
    )
}