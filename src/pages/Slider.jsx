
import React, { useState } from "react";
import Slider from "react-slick";
import './Slider.css'

export default function App() {
const [currentSlide, setCurrentSlide] =useState(0);
  
  const images=[
    {
      id:1,
      src:'./images/cat1.jpg',
      alt:'Image 1'
    },
    {
      id:2,
      src:'./images/cat2.jpg',
      alt:'Image 2'
    },
    {
      id:3,
      src:'./images/cat3.jpg',
      alt:'Image 3'
    },
  ];

const settings = {
    fade:true,
    dots: true,  //pager
    infinite: true,  //무한반복
    speed: 500,  //속도
    slidesToShow: 1,  //한 번에 보여줄 이미지갯수
    slidesToScroll: 1,  //한 장씩 넘김
    autoplay: true,  //자동 넘김
    autoplaySpeed: 3000,  //자동 넘김 간격(3초)
    beforeChange: (current, next) => setCurrentSlide(next),  //상태업데이트
    // 다음 슬라이드 인덱스를 setCurrentSlide(next) 업데이트
    arrows: false, //좌우 화살표
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return(

      <div className='container mt-2'>
        <div className="row justify-content-center">
          <div className="col-md-12">
            {/* <h2 className="text-center mb-4">이미지 슬라이더</h2> */}
            <div className="slider-wrapper">
              <Slider {...settings}>
                {/* Slide 컴포넌트 안에 image.map(돌려 이미지 생성) */}
                {images.map((image)=>(
                  <div key={image.id} className="slide-item">
                    <div>
                      <img src={image.src} alt={image.alt} className='img-fluid w-100'
                      style={{width:'1200px', height:'400px',objectFit:'cover'}} />
                      {/* <div className="slide-caption mt-2">
                        <h6>{image.alt}</h6>
                      </div> */}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* <div className="text-center mt-3">
              <p className="text-muted">
                현재 이미지: {currentSlide + 1} / {images.length}
              </p>
            </div> */}
          </div>
        </div>
      </div>

  );


}