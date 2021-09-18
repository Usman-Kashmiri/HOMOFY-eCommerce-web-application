import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Card from '../components/Card';
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import { Link, useHistory } from 'react-router-dom';

const UserPanel = () => {

    const [cardData, setCardData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/').then(val => val.json()).then(data => {
            setCardData(data)
        })
    }, [])

    return (
        <div>
            {/* <Header/> */}


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Homofy</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="#" style={{ textDecoration: 'none', color: 'white' }}><a className="nav-link" aria-current="page" href="#">Home</a></Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/cart' style={{ textDecoration: 'none', color: 'white' }}><a className="nav-link" href="#">Cart</a></Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/signin' style={{ textDecoration: 'none', color: 'white' }}><a className="nav-link" href="#">Log-out</a></Link>
                            </li>
                            <h1>User's Panel</h1>
                        </ul>
                    </div>
                </div>
            </nav>







            <Carousel />
            <div className='container mt-3'>
                <div className='row'>
                    {cardData.map((v) => {
                        return (
                            <div className='col-3 mt-3'>
                                <Card img={v.img} name={v.prodname} price={v.unitprice} desc={v.prodDesc} />
                            </div>
                        )

                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserPanel;