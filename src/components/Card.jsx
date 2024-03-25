import React from "react"
import "./Card.css"
export default function Card(props) {
    let badgeText="Not Available !";
    if (props.openSpots >0) {
        badgeText = "Available now!"
    }
    
    return (
        <div className="card" id={props.id}>
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={props.coverImg} 
                className="card--image" 
            />
            <div className="card--stats">
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / night
            </p>
        </div>
    )
}