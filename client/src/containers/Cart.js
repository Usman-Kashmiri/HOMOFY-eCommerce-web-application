import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import Axios from "axios"

const Cart = () => {
    // const location = useLocation()
    // const [custID, setCustID] = useState('')
    
    // useEffect(() => {
    //     const logInID = location.state.custID
    //     console.log(logInID)
    //     // console.log(logInID.custID)
    //     setCustID(logInID)

    //     Axios.post("http://localhost:5000/cart", {
    //         custID: custID
    //     }).then((res) => {
    //         console.log(res)
    //     })
    // }, [])


    // const [cartData, setCartData] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/cart').then(val => val.json()).then(data => {
    //         setCartData(data)
    //     })
    // }, [])

    // console.log(cartData)
    return (
        <>
            <h1>Cart</h1>
        </>
    )
}

export default Cart;