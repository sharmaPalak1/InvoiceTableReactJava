import React from "react";
import ReactDOM from "react-dom";
//import Correspondence from "./correspondence";
import Delete from "./delete";

export const searching=(number) =>{
    return{
        type :"SEARCHING",
        payload:number
    }
}
export const selectrow=(number) =>{
    return{
        type :"SELECTROW",
        payload:number
    }
}
