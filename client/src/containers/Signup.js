import './style.css'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import Header from '../components/Header';

const Signup = () => {
    const [custID, setCustID] = useState('')
    const [custFirst, setCustFirst] = useState('')
    const [custLast, setCustLast] = useState('')
    const [custEmail, setCustEmail] = useState('')
    const [custPass, setCustPass] = useState('')
    const [custPhone, setCustPhone] = useState('')
    const [custAddress, setCustAddress] = useState('')
    const [custCity, setCustCity] = useState('')
    const [custCountry, setCustCountry] = useState('')
    const [custPostal, setCustPostal] = useState('')


    const history = useHistory();

    const signup = () => {
        Axios.post("http://localhost:5000/userSignin", {
            cID: custID,
            cFirst: custFirst,
            cLast: custLast,
            cEmail: custEmail,
            cPass: custPass,
            cPhone: custPhone,
            cAddress: custAddress,
            cCity: custCity,
            cCountry: custCountry,
            cPostal: custPostal
        }).then((res) => {
            if (res.data.err === null) {
                alert("Account created Sucessfully")
                history.push("/signin")
            } else {
                alert(res.data.err.sqlMessage)
            }
        })
    }





    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <div className="card login_card">
                            <h1>Signup</h1>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">CustomerID*</label>
                                <input type="text" name="custID"
                                    onChange={(e) => {
                                        setCustID(e.target.value)
                                    }} className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                <input type="text" name="custFirst"
                                    onChange={(e) => {
                                        setCustFirst(e.target.value)
                                    }} className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                <input onChange={(e) => {
                                    setCustLast(e.target.value)
                                }} type="text" name="custLast" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" name="custEmail"
                                    onChange={(e) => {
                                        setCustEmail(e.target.value)
                                    }}
                                    className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Password</label>
                                <input type="password" name="custPass"
                                    onChange={(e) => {
                                        setCustPass(e.target.value)
                                    }} className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                <input onChange={(e) => {
                                    setCustPhone(e.target.value)
                                }} type="text" name="custPhone" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Address</label>
                                <input onChange={(e) => {
                                    setCustAddress(e.target.value)
                                }} type="text" name="custAddress" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">City</label>
                                <input onChange={(e) => {
                                    setCustCity(e.target.value)
                                }} type="text" name="custCity" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Country</label>
                                <input onChange={(e) => {
                                    setCustCountry(e.target.value)
                                }} type="text" name="custCountry" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Postal Code</label>
                                <input onChange={(e) => {
                                    setCustPostal(e.target.value)
                                }} type="text" name="custPostal" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div class="d-grid gap-2">
                                <button onClick={signup} class="btn btn-primary" type="button">Signup</button>
                            </div>
                            <div>
                                <Link to="/signin">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;