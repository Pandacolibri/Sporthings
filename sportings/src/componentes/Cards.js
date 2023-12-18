import React from "react";
import Tarjetas from "./Tarjetas";
import tennis1 from "../img/tennis1.png"
const cards = [
    {
        id: 1,
        title: 'Pontiac',
        image: tennis1
    }
]
export default function Cards(){

    return(
    <div key={cards.id}>
        <Tarjetas title={cards.title} imgSource={cards.image}/>
    </div>
 )
}