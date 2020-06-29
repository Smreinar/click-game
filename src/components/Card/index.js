import React from "react";
import "./card.css";
const Cards = props => (
    <div className="col-md-3">
    <div className="card mx-auto" onClick={()=> props.clickedImage(props.id)}>
        <img className="card-img-top" alt={props.name} src={props.image}/>
        <div className="card-body">
            <div className="card-title">
                {props.name}
            </div>
        </div>
    </div>
    </div>
)

export default Cards;