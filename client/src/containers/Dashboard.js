import './style.css';
import { useState } from 'react';
import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
const Dashboard = () => {

    const [prodID, setProdID] = useState("")
    const [prodName, setProdName] = useState("")
    const [prodDesc, setProdDesc] = useState("")
    const [discount, setDiscount] = useState("")
    const [unitWeight, setUnitWeight] = useState("")
    const [unitPrice, setUnitPrice] = useState("")
    const [imgUrl, setImgUrl] = useState("")



    const [dProdName , setdProdName] =useState("")

    const addProduct = () => {
        Axios.post("http://localhost:5000/adddProduct", {
            pID: prodID,
            pName: prodName,
            pDesc: prodDesc,
            pDiscount: discount,
            pUnitWeight: unitWeight,
            pUnitPrice: unitPrice,
            pImgUrl: imgUrl
        }).then((res) => {
            // alert("Successfully Added the Product to the Database")
            if (res.data.err === null) {
                alert('product added successfully')
            }
            else {
                alert(res.data.err.sqlMessage)
            }
        })
    }


    const DeleteProduct=(dProdName)=>{
        console.log(dProdName)
        Axios.delete(`http://localhost:5000/delProduct/${dProdName}`).then((res) => {
            alert("Product Deleted Successfully")
            }
            )
        
    }
            // console.log(res.data.message)



            // if (res.data.message===undefined) {

            //     // } else {
            //         alert("Error")
            //         // }
            //     }else{

            //         alert("Product Deleted Successfully")
            //     }
            

    return (
        <>

            <div 
            
            className="container-fluid text-center bg-dark p-2 text-light">
                <h1>Admin's Dashboard </h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <div className="card login_card">
                        <h1>Adding Product</h1>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Product ID</label>
                                <input type="text" name="prodID"
                                    onChange={(e) => {
                                        setProdID(e.target.value)
                                    }} className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Product Name</label>
                                <input type="text" name="prodName"
                                    onChange={(e) => {
                                        setProdName(e.target.value)
                                    }} className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Product Description</label>
                                <input type="text" name="prodDesc"
                                    onChange={(e) => {
                                        setProdDesc(e.target.value)
                                    }} className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Discount</label>
                                <input type="text" name="discount"
                                    onChange={(e) => {
                                        setDiscount(e.target.value)
                                    }} className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Unit Weight</label>
                                <input type="text" name="unitWeight"
                                    onChange={(e) => {
                                        setUnitWeight(e.target.value)
                                    }} className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Unit Price</label>
                                <input type="text" name="unitPrice"
                                    onChange={(e) => {
                                        setUnitPrice(e.target.value)
                                    }} className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Product's Image URL*</label>
                                <input type="text" name="imgUrl"
                                    onChange={(e) => {
                                        setImgUrl(e.target.value)
                                    }} className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div class="d-grid gap-2">
                                <button onClick={addProduct} class="btn btn-primary" type="button">Add Product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <div className="card login_card">
                        <h1>Deleting Product</h1>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Product Name</label>
                                <input type="text" name="prodName"
                                    onChange={(e) => {
                                        setdProdName(e.target.value)
                                    }} className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div class="d-grid gap-2">

                                <button onClick={()=>{DeleteProduct(dProdName)}} class="btn btn-primary" type="button">Delete Product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;