import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="card shadow" style={{ width: "18rem;" }}>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text fs-6">Description: {props.desc}</p>
                <p className="card-text">Price: {props.price}</p>
                <div className='text-end'>
                    <Link to='/signinup' style={{ color: 'white', textDecoration: 'none' }}><button type="button" class="btn btn-primary">Add To Cart</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Card;