import axios from 'axios';
import Navbar from './navbar';
import { useState,useEffect } from 'react';
import Elec from '../styles/electronics.module.css';

export default function Electronics() {
    const [data,setData]=useState(null)
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products//category/electronics')
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
        
        <div className={Elec.naming}>
            <h1 className={Elec.headertext}>Electronics</h1>
        </div>
        </>
    );
};
