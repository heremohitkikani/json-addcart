import logo from './image/logo.png';
import axios from 'axios';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import './App.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { cartsingle } from './counterslice.js/slice';





import { FaCartArrowDown, FaStar } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { MdCategory } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { IoMdPricetag } from "react-icons/io";
import { TbShoppingBagSearch } from "react-icons/tb";

function Getsingle() {
    
    const dispatch = useDispatch()

    // alert(props.data);
    const a = useParams();
    console.log(a)
    // const url = window.location.href;
    // console.log(url);
    // let [data, setdata] = useState({})
  let [ele,setele]=useState({});
    let [img, setimg] = useState(null)
    let [imgmain, setimgmain] = useState(null)
    // let img=[];
    let data1 = [];

    // let [arr, setarr] = useState([])
    // let [id, setid] = useState('')
    // let arr = url.split("/");
    // console.log(arr);
    // let a = arr.pop();
    // console.log(a);
    // let id=;
    // console.log(arr[a]);


    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${a.id}`)
            .then(function (response) {
                console.log(response.data);
               setele(response.data);
            //    console.log(ele);
            setimgmain(response.data.thumbnail)
                setimg(response.data.images);
                console.log(response.data.images)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [])

    const dataimage = (e) => {
        // // setimg(e)
        // console.log(e);
        setimgmain(e)
        // console.log(img);
        // ele.thumbnail=img[ind];
        // let img2 =ele
        // img2.thumbnail=e;
        // // img2.price=1000000;
        // // setele(img2)
        // // ele.thumbnail = e;
        // setele(img2);
        // // console.log(ele)
        // console.log(img2)
    }
    const cartdata1 = (i,price,disc) => {
        console.log(i);
        dispatch(cartsingle({ data: ele, id: i,price:price,disc:disc }))
    }


    return (
        <>
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
                            <Link to='/'><button>HOME</button></Link>

                            {/* <input type='text' placeholder='SEARCH HERE...'></input>
                            <button>SEARCH</button> */}
                        </Col>
                        <Col sm={12} md='auto' className='text-center text-md-end'>
                            <Link to='/Addcart'><a href=''><FaCartArrowDown></FaCartArrowDown></a></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            
                <Row className='content'>
                <Container>
                            {/* <h1>{setdata.id}</h1>
                            <h1>{setdata.title}</h1> */}

                  
                                    <Col lg={12} >
                                    <div style={{ padding: '10px' }} className='mt-0 boxes' >
                                        <Row className=''>
                                            <Col xs={12} lg={6} className='text-center'>
                                                <div className='mb-3 getimg' >
                                                    <img src={imgmain} className='me-4' style={{ borderRadius: '20px', width: '60%', objectFit: 'cover' }}></img>
                                                </div>
                                                <button className='mt-0' onClick={() => cartdata1(ele.id,ele.price,ele.discountPercentage)}>ADD TO CART</button>
                                            </Col>
                                            <Col lg={6}>
                                                <h5 className='mt-3' style={{ fontFamily: 'forte' }}> {ele.title} : -</h5>
                                                <p className='mt-3' style={{ lineHeight: '30px' }}><font style={{ borderBottom: '2px solid black', paddingBottom: '5px', fontFamily: 'forte' }}>About product : </font>"{ele.description}"</p>
                                                <h6 className='mt-3'>Price : {ele.price} ₹ ||  Des : {ele.discountPercentage} % <i style={{ color: '#F14B17' }} className='ms-2'><IoMdPricetag  ></IoMdPricetag  > </i></h6>
                                                <h6 className='mt-3'>Rating : {ele.rating}  <i style={{ color: '#D8B338' }} className='ms-2'><FaStar></FaStar></i></h6>
                                                <h6 className='mt-3'>Stock : {ele.stock} . . . <i style={{ color: '#2B5C85' }} className='ms-2'><AiOutlineStock ></AiOutlineStock > </i></h6>
                                                <h6 className='mt-3'>Brand : {ele.brand}<i style={{ color: '#2B5C85' }} className='ms-2'><SiBrandfolder></SiBrandfolder> </i></h6>
                                                <h6 className='mt-3'>Category : {ele.category} <i style={{ color: '#CB6545' }} className='ms-2'><MdCategory></MdCategory> </i></h6>
                                                <Row>
                                                
                                                    {
                                                      img!=null &&  img.map((ele,ind) => {
                                                            return (
                                                                <Col >
                                                                    <div className='mt-5 getimg-hover' >
                                                                        <img src={ele} className='w-100' style={{ cursor: 'pointer' }} onClick={()=>dataimage(ele)}></img>
                                                                    </div>
                                                                </Col>
                                                            )
                                                        })
                                                    }
                                                </Row>

                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                               
                     </Container>
                </Row>

           
        </>
    )
}

export default Getsingle;