import { Link } from "@reach/router";
import React from "react"; 
export default function Pet({ name, animal, breed, media, location, id }) {
    let picture = "http://placecorgi.com/300/300";
    if(media.length){
        picture = media[0].small;
    }

    return(
        <Link to={`/details/${id}`} className="pet">
            <div className="image-container">
                <img src={picture} alt={name} />
            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed}`}</h2>
                <h3>{location}</h3>
            </div>
        </Link>
    );
};
