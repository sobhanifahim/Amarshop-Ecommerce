import axios from 'axios';
import Navbar from './navbar';
import { useState,useEffect } from 'react';
import Women from '../styles/women.module.css';

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
        
        <div className={Women.naming}>
            <h1 className={Women.headertext}>Women</h1>
        </div>
        </>
    );
};
