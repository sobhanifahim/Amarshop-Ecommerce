import axios from 'axios';
import Navbar from './navbar';
import { useState,useEffect } from 'react';
import Elec from '../styles/electronics.module.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
    const [priceRange, setPriceRange] = useState([200, 800]);

    const handlePriceChange = (value) => {
      setPriceRange(value);
    };
    return (
        <>
        <Navbar/>
        
        <div className={Elec.naming}>
            <h1 className={Elec.headertext}>Electronics</h1>
        </div>
        <div className={Elec.priceProduct}>
            <div className={Elec.price}>
                 <label htmlFor="priceRange">PRICE RANGE:</label>
                    <Slider
                        range
                        min={0}
                        max={1000}
                        step={10}
                        value={priceRange}
                        onChange={handlePriceChange}
                    />
                    <div>
                        <span>Min: {priceRange[0]}</span>
                        <span style={{ marginLeft: '10px' }}>Max: {priceRange[1]}</span>
                    </div>
            </div>
            <div className={Elec.divider}></div>
            <div className={Elec.productlist}>
            {data && data.map((product, index) => (
                <div key={index}>
                <img src={product.image} alt="" />
                <p>{product.title}</p>
                </div>
            ))}
            </div>
        </div>
        </>
    );
};
