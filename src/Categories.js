import logo from './image/logo.png';
import axios from 'axios';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import './App.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";



import { FaCartArrowDown, FaStar } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { MdCategory } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { IoMdPricetag } from "react-icons/io";

function Categories(props) {
    let data = props.cat;
    let alldata = props.alldata;
    console.log(alldata);
    const param = useParams()
    console.log(param.id);

    // console.log(alldata);
    // let a = '';

    // const category = (e) => {
    //      a = e;
    //     let cat = alldata.filter((ele) => {
    //         return ele.category == e;
    //     })
    //     props.setdata(cat);
    //     console.log(a);
    // }
    if (param.id === undefined) {
        props.setdata(alldata)
    }
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${param.id}`)
            .then(function (response) {

                console.log(response.data.products);
                console.log(response);
                props.setdata(response.data.products)
                props.setallcat(response.data.products)
                // setall(response.data.products)
                // setall(response.data.results)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [param.id])
    return (
        <>
        <h5 style={{fontFamily:'forte',padding:'5px 0',borderTop:'2px solid rgb(85, 84, 84)',borderBottom:'2px solid rgb(85, 84, 84)'}} className='text-center mb-4'>CATEGORIES</h5>
            {
                data.map((ele, ind) => {
                    return (
                        <ul className='category'>
                            <Link to={`/Categories/${ele}`} style={{ color: 'black', textDecoration: 'none' }}><li style={{ cursor: 'pointer', fontFamily: 'Comic Sans MS' }}>{ele}</li> </Link>
                        </ul>

                    )
                })
            }
        </>
    )
}

export default Categories;