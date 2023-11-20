import { useEffect, useState } from 'react';
import Navbar from './navbar';
import axios from 'axios';
import ImageSlider from './Imageslider';
import ElectronicsImg from '../media/electronics.jpg';
import JeweleryImg from '../media/jewelery.jpg';
import MensImg from '../media/mens.jpg';
import WomensImg from '../media/womens.jpg';
import SectionforFeature from './SectionforFeature';
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
    const images=[
       ElectronicsImg,
       JeweleryImg,
       MensImg,
       WomensImg
    ]
    return(
        <>
        <Navbar/>
        <div>
        <ImageSlider images={images}/>
        </div>
        <SectionforFeature/>
        </>
    );
};
