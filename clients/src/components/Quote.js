import React, { useState, useEffect } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import Axios from 'axios';
import emailjs from 'emailjs-com'

// const API_URL = 'http://localhost:5000';
const Quote = () => {
    const [list, setList] = useState([]);
    const [type, setType] = useState('');
    const [model, setModel] = useState('');
    const [condition, setCondition] = useState('');
    const [price, setPrice] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [offerMessage, setOfferMessage] = useState('');

    useEffect(() => {
        Axios(`/api/parts/stores`)
            .then((resp) => {
                setList(resp.data)
            })
    }, [])

    useEffect(() => {
        if (type !== '' && model !== '' && condition !== '') {
            setMessage(null);
            Axios.get(`/api/parts/estimate`, {
                params: {
                    model: model,
                    condition: condition
                }
            }).then((resp) => {
                setPrice(resp.data);
            })
        }
        if (type == '' || model == '' || condition == '') {
            setMessage("Please select your device")
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post(`/api/offers/sendOffer`, {
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
            model: model,
            condition: condition,
            price: price
        }).then((resp) => {
            setOfferMessage(resp.data.message);
            if (resp.data.message === "Your quote had been submitted") {
                emailjs.sendForm('service_uqxmhhs', 'template_yipscf3', e.target, 'user_TxkyS5be0zyHQDdghQg1V')
                    .then((result) => {
                        console.log(result.text);
                    }, (error) => {
                        console.log(error.text);
                    });
            }
            e.target.reset()
        })
    }

    return (
        <section id="startnow" className="pt-5" style={{ backgroundImage: `url('img/bg.jpg')` }}>
            <div className="container py-5">
                <h1 className="display-4 text-center">We Buy Your Old Gears</h1>
                <p className="text-center">The process is fast, the service is free. It's time to make money off that old gears, simple and easy.</p>
                <hr className="my-5" />
                <ul className="stepper" data-mdb-stepper="stepper" data-mdb-stepper-type="vertical">
                    <form onSubmit={handleSubmit} className="quote_form">
                        <li className="stepper-step stepper-active">
                            <div className="stepper-head">
                                <span className="stepper-head-icon"> 1 </span>
                                <span className="stepper-head-text"> Get Your Quote </span>
                            </div>
                            <div className="stepper-content py-3">
                                <div className="row input-select-quote">
                                    <div className="col-12 col-md-4 mb-4">
                                        <select className="select" onChange={e => setType(e.target.value)}>
                                            <option value="">Device Type</option>
                                            <option value="graphic">Graphics Cards</option>
                                            <option value="asics">ASICs</option>
                                        </select>
                                        <label className="form-label select-label">Device type</label>
                                    </div>
                                    <div className="col-12 col-md-4 mb-4">
                                        <select className="select input-get-quote" name="model" onChange={e => setModel(e.target.value)}>
                                            <option value="">Model</option>
                                            {list.map((data) => (
                                                <option value={data.model}>{data.model}</option>
                                            ))}
                                        </select>
                                        <label className="form-label select-label">Model</label>
                                    </div>
                                    <div className="col-12 col-md-4 mb-4">
                                        <select className="select input-get-quote" onChange={e => setCondition(e.target.value)}>
                                            <option value="">Condition</option>
                                            <option value="new">New </option>
                                            <option value="used">Used (Normal wear)</option>
                                            <option value="gradeD">Grade D (Rusty, Subpar)</option>
                                            <option value="bNew">Bulk Price (New)</option>
                                            <option value="bUsed">Bulk Price (Used)</option>
                                            <option value="bGrade">Bulk Price (Grade D)</option>
                                        </select>
                                        <label className="form-label select-label">Condition</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="note quote-info mx-2">
                                        {price ? (
                                            <>
                                                <strong name="price">Your Quote:</strong> ${price}
                                            </>
                                        )
                                            : (
                                                <>
                                                    <strong>Your Quote:</strong> Please select your device
                                        </>
                                            )
                                        }

                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="stepper-step">
                            <div className="stepper-head">
                                <span className="stepper-head-icon"> 2 </span>
                                <span className="stepper-head-text"> Your Contact </span>
                            </div>
                            <div className="stepper-content py-3">
                                <div className="row input-select-quote">
                                    <div className="col-12 col-md-6">
                                        {/* <form onSubmit={handleSubmit}> */}
                                        {message ? (
                                            <div class="alert alert-primary" role="alert">
                                                {message}
                                            </div>
                                        ) : null}
                                        {offerMessage ? (
                                            <div class="alert alert-primary" role="alert">
                                                {offerMessage}
                                            </div>
                                        ) : null}
                                        <div className="row mb-4">
                                            <div className="col">
                                                <div className="form-outline">
                                                    <input type="text" name="fname" id="fname" className="form-control" onChange={e => setFname(e.target.value)} required />
                                                    <label className="form-label" for="firstname">First name</label>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="form-outline">
                                                    <input type="text" name="lname" id="lname" className="form-control" onChange={e => setLname(e.target.value)} required />
                                                    <label className="form-label" for="lastname">Last name</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="email" id="email" name="email" className="form-control" onChange={e => setEmail(e.target.value)} required />
                                            <label className="form-label" for="email">Email address</label>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="tel" id="phone" name="phone" className="form-control" onChange={e => setPhone(e.target.value)} required />
                                            <label className="form-label" for="typePhone">Phone number</label>
                                        </div>
                                        {price ? (
                                            <div className="form-outline mb-4">
                                                <input id="price" name="price" value={price} className="form-control" readOnly/>
                                                <label className="form-label" for="typePhone">Price of item</label>
                                            </div>
                                        ) : null}

                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                value=""
                                                id="subscribe"
                                                checked
                                            />
                                            <label className="form-check-label" for="form2Example3">
                                                Subscribe to our newsletter
                                        </label>
                                        </div>
                                        <button type="submit" className="btn btn-dark btn-block mb-4">Submit</button>
                                        {/* </form> */}

                                    </div>
                                    <div className="col-12 col-md-6">
                                        <p>Dignissim diam quis enim lobortis scelerisque fermentum. Duis ultricies lacus sed turpis. Tristique risus nec feugiat in fermentum. Arcu dui vivamus arcu felis bibendum ut tristique et. Dui ut ornare lectus sit amet est placerat in. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Dui accumsan sit amet nulla. Dignissim convallis aenean et tortor at. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Elit sed vulputate mi sit amet mauris commodo quis. A cras semper auctor neque vitae.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </form>
                </ul>
            </div>
        </section>
    )
}

export default Quote;
