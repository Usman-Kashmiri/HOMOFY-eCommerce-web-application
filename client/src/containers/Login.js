import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import Header from '../components/Header';


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    function login() {
        Axios.post("http://localhost:5000/userLogin", {
            userEmail: email,
            userPassword: password
        }).then((res) => {
            // console.log(res.data.message)
            if (res.data.message === undefined) {
                // console.log(res.data[0].custID)
                // history.push({
                //     pathname:'/cart',
                //     state: {custID :res.data[0].custID}
                // }
                // )

                history.push("/userPanel")
            } else {
                alert(res.data.message)
            }
        }
        )

    }


    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <div className="card login_card">
                            <h1>Login</h1>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                    className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Password</label>
                                <input type="password"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    className="form-control" id="exampleFormControlInput1" required/>
                            </div>
                            <div class="d-grid gap-2">
                                <button onClick={login} class="btn btn-primary" type="button">Login</button>
                            </div>
                            <div>
                                <Link to="/signup">Create new account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;