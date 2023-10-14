import {Swiper , SwiperSlide} from 'swiper/react';
import "swiper/css";
import 'swiper/css/navigation';
import  { Navigation  }  from "swiper/modules";
import { useNavigate , createSearchParams, Navigate} from 'react-router-dom';

const CarouselCategory = () => {


    const navigate = useNavigate();
    const  searchCategory =(category)=>{
        
        navigate({
            pathname:"search",
            search: `${
              createSearchParams({
                category:`${category}`,
                searchTerm:``
              })
            }`
          })
    }
  return (
    <div className='bg-white m-3'>
        <div className=' text-2xl font-semibold
        p-3'> Shop By Category </div>
        <Swiper className=' hover:cursor-pointer ease-in-out transition-all duration-200'
             slidesPerView={5}
             spaceBetween={10}
             navigation={true}
             modules={[Navigation]}
        >
            <SwiperSlide onClick={()=>{searchCategory("Deals")}}>
                <img src={"../images/category_0.jpg"}/>
            </SwiperSlide>
            <SwiperSlide onClick={()=>{searchCategory("Amazon")}}>
                <img src={"../images/category_1.jpg"}/>
            </SwiperSlide>
            <SwiperSlide onClick={()=>{searchCategory("Fashion")}}>
                <img src={"../images/category_2.jpg"}/>
            </SwiperSlide>
            <SwiperSlide onClick={()=>{searchCategory("Computers")}}>
                <img src={"../images/category_3.jpg"}/>
            </SwiperSlide>
            <SwiperSlide onClick={()=>{searchCategory("Home")}}>
                <img src={"../images/category_4.jpg"}/>
            </SwiperSlide>
            <SwiperSlide onClick={()=>{searchCategory("Mobiles")            }}>
                <img src={"../images/category_5.jpg"}/>
            </SwiperSlide>


        </Swiper>
    </div>
  )
}

export default CarouselCategory;