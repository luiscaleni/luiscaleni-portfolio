import React from "react";
import './ButtonHome.css'
import { Link } from "react-router-dom";

export default function ButtonHome(){
    return (
        <>
            <Link to="/" id="buttonHome">
                <footer></footer>
            </Link>
        </>
    )
}