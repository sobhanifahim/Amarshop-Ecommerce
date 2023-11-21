import axios from 'axios';
import Navbar from './navbar';
import { useState,useEffect } from 'react';
import Jewel from '../styles/jewelery.module.css';

export default function Electronics() {
    const [data,setData]=useState(null)
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products//category/jewelery')
        .then((response)=>{
            setData(response.data)
        })
        .catch((error)=>{
            console.log('Error Fetching Data',error)
        })
    },[])
    console.log(data)
    return (
        <>
        <Navbar/>
        
        <div className={Jewel.naming}>
            <h1 className={Jewel.headertext}>Jewelery</h1>
        </div>
        </>
    );
};
