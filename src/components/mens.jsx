import axios from 'axios';
import Navbar from './navbar';
import { useState,useEffect } from 'react';
import Men from '../styles/mens.module.css';

export default function Electronics() {
    const [data,setData]=useState(null)
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products//category/men\'s clothing')
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
        
        <div className={Men.naming}>
            <h1 className={Men.headertext}>Men</h1>
        </div>
        </>
    );
};
