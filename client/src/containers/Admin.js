import './style.css';
import { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
// import Dashboard from './Dashboard';

const Admin = () => {
    const [adminEmail, setAdminEmail] = useState('')
    const [adminPass, setAdminPass] = useState('')
    const history = useHistory();

    function login() {
        Axios.post("http://localhost:5000/adminLogin", {
            adminEmail: adminEmail,
            adminPass: adminPass
        }).then((res) => {
            // console.log(res.data.message)
            if (res.data.message === undefined) {
                history.push("/dashboard")
            } else {
                alert(res.data.message)
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
                            <h1>Admin</h1>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email:</label>
                                <input type="email"
                                    onChange={(e) => {
                                        setAdminEmail(e.target.value)
                                    }} className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Password</label>
                                <input type="password"
                                    onChange={(e) => {
                                        setAdminPass(e.target.value)
                                    }} className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div class="d-grid gap-2">
                                <button onClick={login} class="btn btn-primary" type="button">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Admin;