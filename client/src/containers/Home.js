import React, { useEffect, useState} from 'react'
import Header from '../components/Header';
import Card from '../components/Card';
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'

const Home = () => {

    const [cardData, setCardData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/').then(val => val.json()).then(data => {
            setCardData(data)
        })
    }, [])

    return (
        <div> 
            <Header/>
            <Carousel />
            <div className='container mt-3'>
                <div className='row'>
                    {cardData.map((v) => {
                        return (
                            <div className='col-3 mt-3'>
                                <Card img={v.img} name={v.prodname} price={v.unitprice} desc={v.prodDesc}/>
                            </div>
                        )

                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;


// import React from 'react'
// import Header from '../components/Header';
// import Card from '../components/Card';
// import { useSelector, useDispatch } from 'react-redux'
// import { useParams } from 'react-router-dom';
// import { getUser} from '../store/action'
// import {useEffect} from 'react';
// import './style.css';

// const Home = () => {
//     let state = useSelector(state => state)
//     const { id } = useParams()
//     const user = useSelector(state => state.user)
//     const dispatch = useDispatch()
//     console.log(user)

//     useEffect(() => {
//         dispatch(getUser(id))
//     }, [])

//     return (
//         <>
//             <h2>{user.username}</h2>
//             <h2>{user.email}</h2>
//             <Header />
//             <div className='container mt-3'>
//                 <div className='row'>
//                     {state.hotelData.map((v) => {
//                         return (
//                             <div className='col-3 mt-2'>
//                                 <Card title={v.title} img={v.img} rooms={v.rooms} price={v.price} />
//                             </div>
//                         )

//                     })}
//                 </div>
//             </div>
//         </>
//     )
// }

//  export default Home;

// import { useSelector, useDispatch } from 'react-redux'
// import { useParams } from 'react-router-dom';
// import { getUser, getAllUsers} from '../store/action'
// import { useEffect, useState } from 'react';
// import './style.css';

// function Home() {
//     const { id } = useParams()
//     const user = useSelector(state => state.user)
//     const allUsers = useSelector(state => state.allUsers)
//     const dispatch = useDispatch()

//     console.log(user)

//     useEffect(() => {
//         dispatch(getUser(id))
//         dispatch(getAllUsers())
//     }, [])

//     return (
//         <div>
//             <h1>Home</h1>
//             <h2>{user.username}</h2>
//             <h2>{user.email}</h2>
//             <hr />
//             <div classNameName="d-flex">
//                 <div classNameName="card users_card">
//                     <h3>All Users</h3>
//                     <ul>
//                         {allUsers.map((v, i) => {
//                             return v.email !== user.email && <li key={i}>
//                                 <div>
//                                     <h4> {v.username}</h4>
//                                     <span>{v.email}</span>
//                                 </div>
//                             </li>
//                         })}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Home;

