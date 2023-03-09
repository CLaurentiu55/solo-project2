import React from "react"
import style from "./style.css"

export default function Body(props) {
    return(
        <div>
            <img src={props.imageUrl} className="img-fix"/>
            <br></br>
            <br></br>
            <div className="container">  
                <div className="div-align">
                    <i className="fa-solid fa-location-dot spacing"></i>
                    <p className="location spacing">{props.location}</p>
                    <a href="{props.googleMapsUrl}" className="link-color">View on Google Maps</a>
                </div>
                <div>
                    <h1>{props.title}</h1>
                </div>
                <div>
                    <p className="date">{props.startDate} - {props.endDate}</p>
                </div>
                <div>
                    <p className="description">{props.description}</p>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}