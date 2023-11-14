import { useEffect, useState } from 'react';
import Navbar from './navbar';
import axios from 'axios';
export default function FeatureProduct() {
    const [data,setData]=useState(null)
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            setData(response.data)
        })
        .catch((error)=>{
            console.log('Error Fetching Data',error)
        })
    },[])
    console.log(data)
    return(
        <>
        <Navbar/>
        </>
    );
};
