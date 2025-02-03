import React from "react";


export default function Card(props){

    return(

        <div className="flex flex-col p-6 items-center justify-between w-56 h-56 rounded-3xl bg-gray-900 border-4 border-gray-500 text-gray-500 font-roboto text-xl font-bold">
            <p>{props.content}</p>
            <img className="w-32" src={props.logo}/>
        </div>

    )
}