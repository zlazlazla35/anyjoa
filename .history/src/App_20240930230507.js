import { Reset } from 'styled-reset';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark, faPlay, faPlus, faCheck} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import {data, contents, aniDb} from './data.js'
import React, {useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay   } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import Tag from './routes/Tag.js';
import AniDetail from './component/AniDetail.js';
import Cart from './routes/Cart.js';



function App() {

  const [mainSlide, setmainSlide] = useState(data);
  const [aniPost, setAniPost] = useState(contents);
  const [popUp, setPopUp] = useState(false);
  const [scroll, setScroll] = useState('bgno');
  const [aniAll, setAniAll] = useState(aniDb);
  const [clickAniInfo, setClickAniInfo] = useState({});
  const [carlCheck, setCartCheck] = useState(faPlus)


  let [useAniList, setUseAniList] = useState(useViewData);
  let [viewList, setViewList] = useState([])
  let location =  useLocation();



  // 팝업 활성화시 뒤에 스크롤 막기
    if(popUp){
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "unset";
    }

    // 메인경우만 헤더 색상 다르게
    useEffect(()=>{
      if(location.pathname !== '/'){
        document.querySelector('.headerWrap').style.background = '#161a23'
        return(()=>{ 
          document.querySelector('.headerWrap').style.background = 'none'
        })
      }
    }, [location]);



    useEffect(()=>{
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll); 
      };
    })
  
    // 스크롤 50 미만 일때 헤더 백그라운드 보이게
    const handleScroll = () => {
        if(window.scrollY >= 50){
          setScroll('bgAdd');
        }else{
          setScroll('bgno');
        }
      };
      



      // 클릭하면 클릭한 애니 정보 로컬스토리지에 어레이로 담기
      useEffect(()=>{
        useAniList = new Set(useAniList);
        useAniList = Array.from(useAniList);

        if(useAniList.length > 6){
          useAniList.length = 6
        }
        localStorage.setItem('useView', JSON.stringify(useAniList));

        let tackOut = localStorage.getItem('useView');
        tackOut = JSON.parse(tackOut)
        let copy = [...tackOut]
        setViewList(copy);

      }, [useAniList])

      // 로컬스토리지에 데이터가 있으면 초기값으로 설정
      function useViewData(){
        const storage = localStorage.getItem('useView');
        return storage ? JSON.parse(storage) : [];
      }



      // 찜한 콘텐츠
      useEffect(()=>{
        if(!window.localStorage.getItem('cart')){
          window.localStorage.setItem('cart', JSON.stringify([]));
        }
      }, [])








  return (
    <div className="App">
      <Reset />
        <div className={`headerWrap ${scroll}`} >
              <div className='navLeft'>
                <NavLink to={'/'}>로고</NavLink>
                <NavLink to={'/tag'}>태그검색</NavLink>
                <NavLink to={'/cart'} onClick={(()=>{ window.location.reload('');})}>찜한 콘텐츠</NavLink>
              </div>
              <div className='navRight'>
                <FontAwesomeIcon className='searchIcon' icon={faMagnifyingGlass} />
                <NavLink to={'/'}>로그인/회원가입</NavLink>
              </div>
          </div>
      <Routes>
        <Route path='/' element={
          <div className='main'>
            {
              popUp ? <AniDetail  setPopUp= {setPopUp} clickAniInfo={clickAniInfo} carlCheck={carlCheck} setCartCheck ={setCartCheck}/> : null
            }
            <div className='slideBox'>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="mySwiper"
              >
                {
                  mainSlide.map((data, i)=>{
                    return(
                        <SwiperSlide key={i} style={ {backgroundImage: `linear-gradient(90deg, rgba(18, 18, 18, 0.5) 0%, 
                        rgba(18, 18, 18, 0) 50%), 
                        linear-gradient(rgba(18, 18, 18, 0.5) 0%, 
                        rgba(18, 18, 18, 0) 21.11%), 
                        linear-gradient(rgba(18, 18, 18, 0) 50%, 
                        rgba(18, 18, 18, 0.5) 100%), 
                        url(/image/main_slide${i + 1}.jpg)` , 
                        backgroundPosition: 'center', 
                        backgroundSize : 'cover'} }>
                          <MainTitle data ={ data } ></MainTitle>
                      </SwiperSlide>
                    )
                  })
                }
            </Swiper>
            </div>
            <div className='mainContent'>
              <div className='viewedContent'>
                {
                  viewList.length == 0
                  ? null
                  : <>
                      <h4 className='contentTitle'>최근본 작품</h4>
                      <div className='viewSlide'>
                        {
                          viewList.map((a, i)=>{
                            return(
                              <div className='userView' key={ i } onClick={(()=>{ 
                                setPopUp(true);
                                setPopUp(true);
                                setClickAniInfo(a);
                                })}>
                                <div className='imgBox'>
                                  <img src={process.env.PUBLIC_URL + `/image/${a.image}`} />
                                </div>
                                <h2 className='aniName'>{a.title}, {a.series}</h2>
                              </div>
                            )
                          })
                        }
                      </div>
                    </>
                }
              </div>
              <div className='viewedContent2'>
                <h4 className='contentTitle'>추천! 시즌있는 애니!!</h4>
                <div className='slideBox2'>
                    <Swiper
                      navigation={true}
                      slidesPerView={6}
                      spaceBetween={10}
                      centeredSlides={false}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Navigation]}
                      loop={true}
                      className="mySwiper"
                    >
                      {
                        aniAll.map((a, i)=>{
                          if(a.series !== ''){
                            return(
                              <SwiperSlide key={i}>
                                <div className='userView' onClick={(()=>{ 
                                  setPopUp(true);
                                  setClickAniInfo(a);
                                  let copy = [...useAniList];
                                  copy.unshift(a);
                                  setUseAniList(copy);

                                  let cart = localStorage.getItem('cart');
                                  cart = JSON.parse(cart)

                                  let isExisting = cart.some((data)=>{return data.id === a.id })

                                  if(isExisting){
                                    setCartCheck(faCheck)
                                    console.log(carlCheck.iconName)
                                  }if(!isExisting){
                                    setCartCheck(faPlus)
                                    console.log(carlCheck.iconName)
                                  }

                                  })}>
                                    <div className='imgBox'>
                                      <img src={process.env.PUBLIC_URL + `/image/ani_poster${i + 1}.jpg`} />
                                    </div>
                                    <h2 className='aniName'>{a.title} {a.series}</h2>
                                  </div>
                              </SwiperSlide>
                            )
                          }
                        })
                      }
                    </Swiper>
                </div>
              </div>
              <div className='viewedContent2'>
                <h4 className='contentTitle'>화려한 액션을!!</h4>
                <div className='slideBox2'>
                    <Swiper
                      navigation={true}
                      slidesPerView={6}
                      spaceBetween={10}
                      centeredSlides={false}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Navigation]}
                      loop={true}
                      className="mySwiper"
                    >
                      {
                        aniAll.map((a, i)=>{
                          if([...a.category].indexOf('액션') !== -1){
                            return(
                              <SwiperSlide key={i}>
                                <div className='userView' onClick={(()=>{ 
                                  setPopUp(true);
                                  setClickAniInfo(a);
                                  let copy = [...useAniList];
                                  copy.unshift(a);
                                  setUseAniList(copy);

                                  let cart = localStorage.getItem('cart');
                                  cart = JSON.parse(cart)

                                  let isExisting = cart.some((data)=>{return data.id === a.id })

                                  if(isExisting){
                                    setCartCheck(faCheck)
                                    console.log(carlCheck.iconName)
                                  }if(!isExisting){
                                    setCartCheck(faPlus)
                                    console.log(carlCheck.iconName)
                                  }

                                  })}>
                                    <div className='imgBox'>
                                      <img src={process.env.PUBLIC_URL + `/image/ani_poster${i + 1}.jpg`} />
                                    </div>
                                    <h2 className='aniName'>{a.title} {a.series}</h2>
                                  </div>
                              </SwiperSlide>
                            )
                          }
                        })
                      }
                    </Swiper>
                </div>
              </div>
            </div>
          </div>
        }/>
        <Route path='/tag' element={<Tag aniAll={aniAll} popUp={popUp} setPopUp={setPopUp}></Tag>}></Route>
        <Route path='/cart' element={<Cart aniAll={aniAll} popUp={popUp} setPopUp={setPopUp}></Cart>}></Route>
      </Routes>
    </div>
  );
}


function MainTitle({data}){
  return(
    <div className='mainTitl'>
      <h3 className='title'>{data.title}</h3>
      <h4 className='subTitle'>{data.content}</h4>
    </div>
  )
}


export default App;
