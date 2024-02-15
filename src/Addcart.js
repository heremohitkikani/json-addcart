import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import logo from './image/logo.png';
import { increment, decrement, removecart } from "./counterslice.js/slice";
import { useDispatch } from 'react-redux';

import { FaCartArrowDown, FaStar } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { MdCategory } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { IoMdPricetag } from "react-icons/io";






function Addcart() {
    // let [data, setdata] = useState([])
    // let [data2, setdata2] = useState([])
    let [price, setprice] = useState([])
    // let [search, setsearch] = useState([])
    const cart = useSelector((state) => state.counter.data)
    const totalprice = useSelector((state) => state.counter.totalprice)
    const nettotal = useSelector((state) => state.counter.nettotal)
    const incre = useSelector((state) => state.counter.incre)
    const allprice = useSelector((state) => state.counter.allprice)
    const netprice = useSelector((state) => state.counter.netprice)
    // let data3 = []
    // console.log(cart);
    console.log(incre);
    const dispatch = useDispatch()

    // const cartid=[...id]
    // console.log(id);
    // useEffect(() => {
    //     axios.get('https://dummyjson.com/products')
    //         .then(function (response) {

    //             console.log(response.data.products);
    //             console.log(response);
    //             setdata(response.data.products)
    //             // setall(response.data.products)
    //             // setall(response.data.results)

    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    // }, [])
    // for (let i = 1; i <= data.length; i++) {
    //     for(let j=0;j<id.length;j++){
    //         if(i==id[j]){
    //             data2[i-1]=data[i-1]
    //             // console.log('iiiii'+i);
    //             // console.log('dataiiii'+id[j]);
    //             // alert()
    //         }

    //     }

    // }
    // // setdata2(data3)

    // const searchdata = (e) => {
    //     var serarr = [], j = 0, k;
    //     // setdata(all);
    //     // alert(data)
    //     console.log(data)

    //     for (var i = 0; i < data.length; i++) {
    //         if (((data2[i].title).toLowerCase().includes(search)) || ((data2[i].description).toLowerCase().includes(search))) {
    //             serarr[j] = data2[i];
    //             j++;
    //         }
    //     // alert(data)

    //     }
    //     console.log(serarr)
    //     setdata2(serarr)
    //     // k = 1;
    //     setsearch('')

    //     // if(data.title)
    //     // const regex = /(^.*\son$)|(^on\s.*)|(^on$)|(^.*\son\s.*$)/i;
    // }
    //  const alldata = () => {

    // }
    const removedata = (i, price, ind) => {
        console.log(i);
        dispatch(removecart({ ind: ind, id: i, price: price }))
    }
    const increm = (ind,price,disc) => {
        dispatch(increment({ ind: ind, price: price,disc:disc }))
    }
    const decrem = (ind,price,disc) => {
        dispatch(decrement({ ind: ind, price: price,disc:disc }))
    }
    return (
        <>
            {/* <div className='header'>
                <Container>
                    <Row className='justify-content-md-between align-items-center py-3'>
                        <Col sm={12} md='auto'>
                            <div className='text-center text-md-start'>
                                <img src={logo} style={{ width: '70px', height: '60px' }} ></img>
                            </div>
                        </Col>
                        <Col sm={12} md='auto' className='text-center'>
                            <Link to='/'><button>HOME</button></Link>

                            <Link to='/'><button onClick={alldata}>ALL</button></Link>
                            <input type='text' value={search} placeholder='SEARCH HERE...' onChange={(e) => setsearch(e.target.value)}></input>
                            <button onClick={searchdata}>SEARCH</button>
                        </Col>
                        <Col sm={12} md='auto' className='text-center text-md-end'>
                            <Link to='/Addcart'><a href=''><FaCartArrowDown></FaCartArrowDown></a></Link>
                        </Col>
                    </Row>

                </Container>
            </div> */}
            <div className='header'>
                <Container>
                    <Row className='justify-content-between align-items-center py-3 '>
                        <Col sm='auto'>
                            <div>
                                <img src={logo} style={{ width: '70px', height: '60px' }} ></img>
                            </div>
                        </Col>
                        <Col sm='auto' className='text-center '>
                            {/* <button onClick={alldata}>ALL</button> */}
                            <div className="d-flex align-items-center">
                            <Link to='/'><button>HOME</button></Link>
                            <h4 style={{padding:'0 20px',fontFamily:'forte'}}>TOTAL = {totalprice} ₹ ||  NETT = {nettotal.toFixed(2)} ₹</h4>
                            </div>


                            {/* <input type='text' placeholder='SEARCH HERE...'></input>
                            <button>SEARCH</button> */}
                        </Col>
                        <Col sm='auto' className='text-end'>
                            <a href=''><FaCartArrowDown></FaCartArrowDown></a>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='content'>
                <Container>
                    <Row >
                        <h2 className="text-center" style={{ fontFamily: 'forte' }}>MY CART..</h2>
                        {
                            cart.map((ele, ind) => {
                                return (


                                    <Col sm={6}  className='text-sm-center text-lg-start '>
                                        {/* {
                                            ele.map((ele, ind) => {
                                                return ( */}

                                                    <>

                                                        {/* <Link to={`${ele.id}`} style={{ color: 'transparent' }} > */}
                                                        <div style={{ padding: '10px' }} className='mt-4 boxes' >
                                                            <Row className=' '>
                                                                <Col lg={6}>
                                                                    <div><img src={ele.thumbnail} className='w-100' style={{ borderRadius: '20px', height: '300px', objectFit: 'cover' }}></img></div>
                                                                </Col>
                                                                <Col lg={6} style={{ color: 'black' }}>
                                                                    <h5 style={{ fontFamily: 'forte', color: 'black', textDecorationLine: 'none' }} className='mt-sm-5 mt-lg-0 mb-4'> {ele.title} : -</h5>
                                                                    <p style={{ fontFamily: 'Comic Sans MS', lineHeight: '35px' }}><font style={{ borderBottom: '2px solid black', paddingBottom: '5px', fontFamily: 'forte' }}>About product : </font>"{ele.description}"</p>
                                                                    <h6 className='my-3'>Price : {ele.price} ₹ ||  Des : {ele.discountPercentage} % <i style={{ color: '#F14B17' }} className='ms-2'><IoMdPricetag  ></IoMdPricetag  > </i></h6>

                                                                    <Link to={`${ele.id}`} style={{ color: 'transparent' }}>


                                                                        <h6 style={{ borderBottom: '2px solid black', width: '145px', paddingBottom: '5px', color: 'black' }}>Click on for more..</h6>      </Link>

                                                                </Col>
                                                            </Row>
                                                        </div>
                                                        {/* </Link> */}

                                                    </>
                                                {/* )
                                            })
                                        } */}
                                        {/* <button onClick={() => cartdata1(ele.id)}>ADD TO CART</button> */}
                                        <div className="ms-1">
                                            <button onClick={() => removedata(ele, ele.price, ind)}>remove from cart</button>
                                            <button onClick={() => increm(ind, ele.price,ele.discountPercentage)}>+</button>
                                            <input className="inputnumber" type="text" value={incre[ind]} style={{ width: '40px' }}></input>
                                            <button onClick={() => decrem(ind, ele.price,ele.discountPercentage)}>-</button>
                                            <font style={{fontWeight:'bold'}} className='netprice ms-3' >TOTAL = {allprice[ind]} ₹ | | NETT = {netprice[ind].toFixed(2)} ₹ </font>
                                        </div>
                                        {/* <h1>{ele}</h1> */}
                                    </Col>
                                )

                            })
                        }
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Addcart;