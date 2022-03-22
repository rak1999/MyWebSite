import React, { useState } from "react";

export default function Contact(){
    const [data  , setData] = useState({
        fullname:"",
        phone:"",
        email:""
    })

    const InputEle = (event) =>{
        const {name , value} = event.target;
        setData((prev)=>{
             return {
                 ...prev,
                 [name] : value,
             }
        })
    }

    const OnSubmit = (e)=>{
        e.preventDefault();
        alert(`My Name is ${data.fullname}. My mobile number is ${data.phone}. My Email is ${data.email}. `)
        setData("")
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">
                    Contact US
                </h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={OnSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full Name :</label>
                                <input
                                 type="text"
                                 className="form-control"
                                 id="exampleFormControlInput1"
                                 name="fullname"
                                 value={data.fullname}
                                 onChange={InputEle}
                                 placeholder="Enter Your Name"
                                 required
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Contact Number :</label>
                                <input
                                 type="number"
                                 className="form-control"
                                 id="exampleFormControlInput1"
                                 name="phone"
                                 value={data.phone}
                                 onChange={InputEle}
                                 placeholder="Phone Number"
                                 required
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input
                                 type="email"
                                 className="form-control"
                                 id="exampleFormControlInput1"
                                 name="email"
                                 value={data.email}
                                 onChange={InputEle}
                                 placeholder="name@example.com"
                                 required
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div classNAme="col-4">
                                <button className="btn btn-outline-primary rounded-pill " type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}