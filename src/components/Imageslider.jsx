import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider from '../styles/slider.module.css'
export default function ImageSlider({images}) {
    const settings= {
        dots:true,
        infinite:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,      
        autoplaySpeed: 2000,
    }
    
    return(
        <Slider {...settings} className={slider.sliderdiv}>
            {images.map((image,index)=>(
                <div key={index} className={slider.imagecontainer}>
                     <img src={image} alt={`Slide ${index+1}`} className={slider.image}/>
                </div>
            ))
            }
        </Slider>
    );
};
