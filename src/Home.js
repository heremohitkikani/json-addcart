import logo from './image/logo.png';
import axios from 'axios';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import './App.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";


import { FaCartArrowDown, FaStar, FaSearch } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { MdOutlineManageSearch } from "react-icons/md";
import Getsingle from './Getsingle';
import Categories from './Categories';
import { cartdata } from './counterslice.js/slice';
import { useDispatch, useSelector } from 'react-redux';


function Home() {
    let param = useParams();
    let data3=useSelector((state)=>state.counter.data3)
    
    console.log(param);
    let [data, setdata] = useState([])
    let [search, setsearch] = useState([])
    let [all, setall] = useState([])
    let [allcat, setallcat] = useState([])
    let [cat, setcat] = useState([])
    const dispatch = useDispatch()



    useEffect(() => {

        axios.get('https://dummyjson.com/products')
            .then(function (response) {

                console.log(response.data.products);
                console.log(response);
                setdata(response.data.products)
                setall(response.data.products)
                data3=response.data.products;
                console.log(data3);
                setallcat(response.data.products)
                // setall(response.data.results)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        axios.get('https://dummyjson.com/products/categories')
            .then(function (response) {

                console.log(response.data.products);
                console.log(response);
                setcat(response.data)
                // setall(response.data)
                // setall(response.data.results)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [])
    const searchdata = (e) => {
        var serarr = [], j = 0, k;
        // setdata(all);
        // alert(data)
        console.log(data)

        for (var i = 0; i < data.length; i++) {
            if (((data[i].title).toLowerCase().includes(search)) || ((data[i].description).toLowerCase().includes(search))) {
                serarr[j] = data[i];
                j++;
            }
            // alert(data)

        }
        console.log(serarr)
        setdata(serarr)
        // k = 1;
        setsearch('')

        // if(data.title)
        // const regex = /(^.*\son$)|(^on\s.*)|(^on$)|(^.*\son\s.*$)/i;
    }
    const alldata = () => {
        setdata(allcat);
    }
    //  {
    //     // alert();
    //     let data1 = all.filter((ele) => {
    //         return ele.category == param.id
    //     })
    //     data = data1;
    // }
    // setdata(data)
    const cartdata1 = (element, price,disc) => {
        // console.log(i);
        dispatch(cartdata({ element:element, price: price,disc:disc }))
    }
    return (
        <>
            <div className='header'>
                <Container>
                    <Row className='justify-content-md-between align-items-center py-3'>
                        <Col sm={12} md='auto'>
                            <div className='text-center text-md-start'>
                                <img src={logo} style={{ width: '70px', height: '60px' }} ></img>
                            </div>
                        </Col>
                        <Col sm={12} md='auto' className='text-center'>
                            <Link to='/'> <button >HOME</button></Link>

                            <button onClick={alldata}>ALL</button>
                            <input type='text' value={search} placeholder='SEARCH HERE...' onChange={(e) => setsearch(e.target.value)}></input>
                            <button onClick={searchdata} >. . <FaSearch ></FaSearch > . .</button>
                        </Col>
                        <Col sm={12} md='auto' className='text-center text-md-end'>
                            <Link to='/Addcart'><a href=''><FaCartArrowDown></FaCartArrowDown></a></Link>
                        </Col>
                    </Row>

                </Container>
            </div>
            <div className='content'>
                <Container>
                    <Row >
                        <Col className=''>

                            <div>
                                <Categories setallcat={setallcat} cat={cat} setdata={setdata} alldata={all}></Categories>
                            </div>
                        </Col>
                        <Col xs={12} lg={10} className='text-end'>
                            <Row>
                                {
                                    data.map((ele, ind) => {
                                        return (
                                            <Col sm={12} xl={6} className='text-sm-center text-lg-start '>

                                                <div style={{ padding: '10px' }} className='mt-4 boxes' >
                                                    <Row className=' '>
                                                        <Col lg={6}>
                                                            <div><img src={ele.thumbnail} className='w-100' style={{ borderRadius: '20px', height: '300px', objectFit: 'cover' }}></img></div>
                                                        </Col>
                                                        <Col lg={6} style={{ color: 'black' }}>
                                                            <h5 style={{ fontFamily: 'forte', color: 'black', textDecorationLine: 'none' }} className='mt-sm-5 mt-lg-0 mb-4'> {ele.title} : -</h5>
                                                            <p style={{ fontFamily: 'Comic Sans MS', lineHeight: '35px' }}><font style={{ borderBottom: '2px solid black', paddingBottom: '5px', fontFamily: 'forte' }}>About product : </font>"{ele.description}"</p>
                                                            <Link to={`${ele.id}`} style={{ color: 'transparent' }}>

                                                                <h6 style={{ borderBottom: '2px solid black', width: '145px', paddingBottom: '5px', color: 'black' }}>Click on for more..</h6>      </Link>

                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className='ms-5'>
                                                    <button onClick={() => cartdata1(ele, ele.price,ele.discountPercentage)}>ADD TO CART</button>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    )
}

export default Home;