import Section from '../styles/section.module.css'
import Elec from '../media/elec-sec.jpg'
import Jew from '../media/jewelery-sec.jpg'
import Men from '../media/sec-men.jpg'
import Women from '../media/women-sec.jpg'
import { Link } from 'react-router-dom'
export default function SectionforFeature() {
    return(
    <div className={Section.outerdiv}>
        <div className={Section.innerdiv}>
            <div className={Section.Electronics}>
                <img src={Elec} alt="" />
                <h3 className={Section.title}>Elctronics Collection</h3>
                <p className={Section.text}>Explore cutting-edge technology and innovation in our Electronics section,
                 where you'll find a curated selection of the latest gadgets, devices, and smart solutions</p>
                 <Link to='/electronics' style={{textDecoration:'none'}}> <button className={Section.btn}>Shop Now</button></Link>
            </div>
            <div className={Section.jewelery}>
                <img src={Jew} alt="" />
                <h3 className={Section.title}>Jewelery Collection</h3>
                <p className={Section.text}>Dazzle in elegance with our exquisite Jewelry collection,
                     where timeless craftsmanship meets contemporary design.</p>
                <Link to='/jewelery' style={{textDecoration:'none'}}><button className={Section.btn}>Shop Now</button></Link>
            </div>
            <div className={Section.men}>
                <img src={Men} alt="" />
                <h3 className={Section.title}>Mens Collection</h3>
                <p className={Section.text}>Elevate your style with our Men's Collection,
                     a fusion of classic and contemporary fashion</p>
                <Link to='/mens' style={{textDecoration:'none'}}><button className={Section.btn}>Shop Now</button></Link>
            </div>
            <div className={Section.women}>
                <img src={Women} alt="" />
                <h3 className={Section.title}>Womens Collection</h3>
                <p className={Section.text}>Elevate your style with our Women's Fashion section,
                     a curated blend of trendsetting apparel and accessories.</p>
                <Link to='/womens' style={{textDecoration:'none'}}><button className={Section.btn}>Shop Now</button></Link>
            </div>
        </div>
    </div>
        
    );
};
