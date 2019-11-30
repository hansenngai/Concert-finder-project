import React from 'react';
import { Link } from 'react-router-dom';
//import '../App.css';

const VenueCard = (props) => {
    const  venue  = props.venue;

    return(
        <div className="card-container">
            {/* <img src="https://www.thesamohi.com/wp-content/uploads/2014/02/hollywoodbowldusk-600x350.jpg" alt="" /> */}
            <div className="desc">
                <h2>
                    <Link to={`/show-venue/${venue._id}`}>
                        { venue.name }
                    </Link>
                </h2>
                <h3>{venue.description}</h3>
                <p>{venue.address}</p>
            </div>
        </div>
    )
};

export default VenueCard;