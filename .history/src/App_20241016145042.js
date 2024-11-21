import { Reset } from 'styled-reset';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark, faPlay, faPlus, faCheck, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import {data, contents, aniDb, dayByAni} from './data.js'
import React, {useEffect, useRef } from 'react'
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
import { Nav } from 'react-bootstrap';
import Search from './routes/Search.js';


function App() {

  const [mainSlide, setmainSlide] = useState(data);
  const [aniPost, setAniPost] = useState(contents);
  const [popUp, setPopUp] = useState(false);
  const [scroll, setScroll] = useState('bgno');
  const [aniAll, setAniAll] = useState(aniDb);
  const [clickAniInfo, setClickAniInfo] = useState({});
  const [cartCheck, setCartCheck] = useState(faPlus)

  let location =  useLocation();
  let [useClickAni, setUseClickAni] = useState(useviewDeta)
  
  const date = new Date;
  const dayLabel  = date.getDay();
  const [byDay, setByday] = useState(dayLabel);

  const [dayAniDb, setDayAniDb] = useState(dayByAni);
  const [opacity, setOpacity] = useState('opacityMotion')

  const [searchInput, setSearchInput] = useState(false)
  const userSearchOn = useRef();
  const userSearchOn2 = useRef();
  const userSearchOn3 = useRef();
  const [userSearchText, setUserSearchText] = useState('')

  const navigate  = useNavigate();





    // 팝업 활성화시 뒤에 스크롤 막기
    useEffect(()=>{
      if(!popUp){
        document.body.style.overflow = "unset";
      }
      
  }, [popUp]);


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
      


      //유저가 클릭해서 본 리스트
      useEffect(()=>{
        localStorage.setItem('useView', JSON.stringify(useClickAni));
      }, [useClickAni]);

      // 유저가 클릭해서 본 리스트 데이터가 있는경우 리셋 없이 초기값 설정
      function useviewDeta(){
        const data = localStorage.getItem('useView');
        return data ? JSON.parse(data) : []
      }


      // 찜한 콘텐츠
      useEffect(()=>{
        if(!window.localStorage.getItem('cart')){
          window.localStorage.setItem('cart', JSON.stringify([]));
        }
      }, []);

      // ref 설정 제외 영역 클릭시 헤더 검색 input박스 닫아지기
      useEffect(() => {
        window.addEventListener("click", closeMember);
        return () => {
            window.removeEventListener("click", closeMember);
        };
    });
    
      const closeMember = (e) => {
        if (
          searchInput &&
            !userSearchOn.current.contains(e.target) &&
            !userSearchOn2.current.contains(e.target) &&
            !userSearchOn3.current.contains(e.target) 
        )
        setSearchInput(false); 
    };



    // 페이지 처음 로드시 유저가 머물어있더 페이지 저장 후 그 화면 보여주기
    useEffect(()=>{
      let nowLocal = location.pathname;
      navigate(nowLocal)
    },[])


    // 검색 인풋에 텍스트가 있으면 search 페이지로 이동 아니면 그 전 페이지로 이동
    useEffect(()=>{
      if(userSearchText.length  >= 1){
        navigate('/search');
      }else{
        navigate(-1);
      }
  }, [userSearchText])




  return (
    <div className="App">
      <Reset />
        <div className={`headerWrap ${scroll}`} >
              <div className='navLeft'>
                <NavLink to={'/'}>
                  <img src={process.env.PUBLIC_URL + '/image/logo.png'} />
                </NavLink>
                <NavLink to={'/tag'}>태그검색</NavLink>
                <NavLink to={'/cart'} onClick={(()=>{ window.location.replace('/cart') })}>찜한 콘텐츠</NavLink>
              </div>
              <div className='navRight'>
                <button className={searchInput ? 'searchIconBox off' : 'searchIconBox'} ref={userSearchOn} onClick={(()=>{ setSearchInput(true) })}>
                  <FontAwesomeIcon className='searchIcon' icon={faMagnifyingGlass} />
                </button>
                <div className= {searchInput ? 'searchInputBox on' : 'searchInputBox'} >
                  <FontAwesomeIcon className='searchIcon' icon={faMagnifyingGlass}/>
                  <input className='userSearch' ref={userSearchOn2} placeholder='제목 검색' onInput={((e)=>{
                    let userSearch = e.target.value;
                    setUserSearchText(userSearch);
                  })}/>
                  {
                    userSearchText == ''
                    ? null
                    : <FontAwesomeIcon ref={userSearchOn3} icon={faCircleXmark} className='textRemove' onClick={(()=>{ console.log(userSearchOn2) })} />
                  }
                </div>
              </div>
          </div>
        <Routes>
          <Route path='/' element={
            <div className='main'>
              {/* {
                popUp ? <AniDetail popUp={popUp} setPopUp= {setPopUp} clickAniInfo={clickAniInfo} cartCheck={cartCheck} setCartCheck ={setCartCheck}/> : null
              } */}
              <AniDetail popUp={popUp} setPopUp= {setPopUp} clickAniInfo={clickAniInfo} cartCheck={cartCheck} setCartCheck ={setCartCheck}/>
              <div className='slideBox'>
              <Swiper
                  
                  cssMode={true}
                  navigation={true}
                  pagination={{clickable: true}}
                  mousewheel={false}
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
                    useClickAni.length == 0
                    ? null
                    : <>
                        <h4 className='contentTitle'>최근본 작품</h4>
                        <div className='viewSlide'>
                          {
                            useClickAni.map((a ,i)=>{
                                if(useClickAni.length == 7){
                                      useClickAni.pop();
                                    }
                                      return(
                                          <div className='userView' key={i} onClick={(()=>{ 
                                            setPopUp(true);
                                            setPopUp(true);
                                            setClickAniInfo(a);

                                            let cart = localStorage.getItem('cart');
                                            cart = JSON.parse(cart)
                                            let isExisting = cart.some((data)=>{return data.id === a.id })

                                            if(isExisting){
                                              setCartCheck(faCheck)
                                            }if(!isExisting){
                                              setCartCheck(faPlus)
                                            }
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
                  <h4 className='contentTitle'>요일별 추천 애니</h4>
                      <Nav className="byDay" variant="tabs" defaultActiveKey={`day-${byDay}`}>
                        <Nav.Link className='day' eventKey="day-1" onClick={(()=>{ setByday(1) })}>월</Nav.Link>
                        <Nav.Link className='day' eventKey="day-2" onClick={(()=>{ setByday(2) })}>화</Nav.Link>
                        <Nav.Link className='day' eventKey="day-3" onClick={(()=>{ setByday(3) })}>수</Nav.Link>
                        <Nav.Link className='day' eventKey="day-4" onClick={(()=>{ setByday(4) })}>목</Nav.Link>
                        <Nav.Link className='day' eventKey="day-5" onClick={(()=>{ setByday(5) })}>금</Nav.Link>
                        <Nav.Link className='day' eventKey="day-6" onClick={(()=>{ setByday(6) })}>토</Nav.Link>
                        <Nav.Link className='day' eventKey="day-0" onClick={(()=>{ setByday(0) })}>일</Nav.Link>
                      </Nav>
                      <DayByAni byDay={byDay} dayAniDb={dayAniDb} setPopUp={setPopUp} setClickAniInfo={setClickAniInfo} setCartCheck={setCartCheck}  useClickAni={useClickAni} setUseClickAni={setUseClickAni}></DayByAni>
                </div>
                <div className='viewedContent2'>
                  <h4 className='contentTitle'>달달한 러브스토리♡</h4>
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
                        breakpoints={{
                          1400:{
                            slidesPerView:6
                          },
                          800:{
                            slidesPerView:4
                          },
                          500:{
                            slidesPerView:3
                          },
                          0:{
                            slidesPerView:2
                          }
                        }}
                        className="mySwiper"
                      >
                        {
                          aniAll.map((a, i)=>{
                            if([...a.category].indexOf('로맨스') !== -1){
                              return(
                                <SwiperSlide key={i}>
                                  <div className='userView' onClick={(()=>{ 
                                    setPopUp(true);
                                    setClickAniInfo(a);

                                    let cart = localStorage.getItem('cart');
                                    cart = JSON.parse(cart)
                                    let isExisting = cart.some((data)=>{return data.id === a.id })

                                    if(isExisting){
                                      setCartCheck(faCheck)
                                    }if(!isExisting){
                                      setCartCheck(faPlus)
                                    }
                                    
                                    let copy = [...useClickAni];
                                    let isExisting2 = copy.some((data)=>data.id === a.id);

                                    if(isExisting2){
                                      return
                                    }if(!isExisting2){
                                      copy.unshift(a);
                                    }
                                    setUseClickAni(copy);

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
                  <h4 className='contentTitle'>화려한 액션!!</h4>
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
                        breakpoints={{
                          1400:{
                            slidesPerView:6
                          },
                          800:{
                            slidesPerView:4
                          },
                          500:{
                            slidesPerView:3
                          },
                          0:{
                            slidesPerView:2
                          }
                        }}
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


                                    let cart = localStorage.getItem('cart');
                                    cart = JSON.parse(cart)

                                    let isExisting = cart.some((data)=>{return data.id === a.id })

                                    if(isExisting){
                                      setCartCheck(faCheck)
                                    }if(!isExisting){
                                      setCartCheck(faPlus)
                                    }
                                    
                                    let copy = [...useClickAni];
                                    let isExisting2 = copy.some((data)=>data.id === a.id);

                                    if(isExisting2){
                                      return
                                    }if(!isExisting2){
                                      copy.unshift(a);
                                    }
                                    setUseClickAni(copy);
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
                  <h4 className='contentTitle'>무서운게 딱 좋아</h4>
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
                        breakpoints={{
                          1400:{
                            slidesPerView:6
                          },
                          800:{
                            slidesPerView:4
                          },
                          500:{
                            slidesPerView:3
                          },
                          0:{
                            slidesPerView:2
                          }
                        }}
                        className="mySwiper"
                      >
                        {
                          aniAll.map((a, i)=>{
                            if([...a.category].indexOf('공포') !== -1){
                              return(
                                <SwiperSlide key={i}>
                                  <div className='userView' onClick={(()=>{ 
                                    setPopUp(true);
                                    setClickAniInfo(a);


                                    let cart = localStorage.getItem('cart');
                                    cart = JSON.parse(cart)

                                    let isExisting = cart.some((data)=>{return data.id === a.id })

                                    if(isExisting){
                                      setCartCheck(faCheck)
                                    }if(!isExisting){
                                      setCartCheck(faPlus)
                                    }
                                    
                                    let copy = [...useClickAni];
                                    let isExisting2 = copy.some((data)=>data.id === a.id);

                                    if(isExisting2){
                                      return
                                    }if(!isExisting2){
                                      copy.unshift(a);
                                    }
                                    setUseClickAni(copy);
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
                  <h4 className='contentTitle'>가슴이 뜨거워지는 스포츠</h4>
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
                        breakpoints={{
                          1400:{
                            slidesPerView:6
                          },
                          800:{
                            slidesPerView:4
                          },
                          500:{
                            slidesPerView:3
                          },
                          0:{
                            slidesPerView:2
                          }
                        }}
                        className="mySwiper"
                      >
                        {
                          aniAll.map((a, i)=>{
                            if([...a.category].indexOf('스포츠') !== -1){
                              return(
                                <SwiperSlide key={i}>
                                  <div className='userView' onClick={(()=>{ 
                                    setPopUp(true);
                                    setClickAniInfo(a);


                                    let cart = localStorage.getItem('cart');
                                    cart = JSON.parse(cart)

                                    let isExisting = cart.some((data)=>{return data.id === a.id })

                                    if(isExisting){
                                      setCartCheck(faCheck)
                                    }if(!isExisting){
                                      setCartCheck(faPlus)
                                    }
                                    
                                    let copy = [...useClickAni];
                                    let isExisting2 = copy.some((data)=>data.id === a.id);

                                    if(isExisting2){
                                      return
                                    }if(!isExisting2){
                                      copy.unshift(a);
                                    }
                                    setUseClickAni(copy);
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
          <Route path='/tag' element={<Tag aniAll={aniAll} setPopUp={setPopUp} setCartCheck={setCartCheck} cartCheck={cartCheck}></Tag>}></Route>
          <Route path='/cart' element={<Cart setPopUp={setPopUp} setCartCheck={setCartCheck} cartCheck={cartCheck}></Cart>}></Route>
          <Route path='/search' element={<Search aniAll={aniAll} setPopUp={setPopUp} setCartCheck={setCartCheck} cartCheck={cartCheck} userSearchText={userSearchText}></Search>}></Route>
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

function DayByAni({byDay, dayAniDb, setPopUp, setClickAniInfo, setCartCheck, useClickAni, setUseClickAni}){
  return(
  <div>
          <div>
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
                    breakpoints={{
                      1400:{
                        slidesPerView:6
                      },
                      800:{
                        slidesPerView:4
                      },
                      500:{
                        slidesPerView:3
                      },
                      0:{
                        slidesPerView:2
                      }
                    }}
                    className="mySwiper"
                  >
                    {
                      dayAniDb.map((a, i)=>{
                        if(byDay == 1 && a.dayAni == '월'){
                          
                          return(
                            <SwiperSlide key={i}>
                              <div className='userView' onClick={(()=>{ 
                                setPopUp(true);
                                setClickAniInfo(a);

                                let cart = localStorage.getItem('cart');
                                cart = JSON.parse(cart);

                                let isExisting = cart.some((data)=>{return data.id === a.id })

                                if(isExisting){
                                  setCartCheck(faCheck)
                                }if(!isExisting){
                                  setCartCheck(faPlus)
                                }
                                
                                let copy = [...useClickAni];
                                let isExisting2 = copy.some((data)=>data.id === a.id);

                                if(isExisting2){
                                  return
                                }if(!isExisting2){
                                  copy.unshift(a);
                                }
                                setUseClickAni(copy);
                                })}>
                                  <div className='imgBox'>
                                    <img src={process.env.PUBLIC_URL + `/image/${a.image}`} />
                                  </div>
                                  <h2 className='aniName'>{a.title} {a.series}</h2>
                                </div>
                            </SwiperSlide>
                          )
                        }
                        if(byDay == 2 && a.dayAni == '화'){
                          return(
                            <SwiperSlide key={i}>
                              <div className='userView' onClick={(()=>{ 
                                setPopUp(true);
                                setClickAniInfo(a);

                                let cart = localStorage.getItem('cart');
                                cart = JSON.parse(cart);

                                let isExisting = cart.some((data)=>{return data.id === a.id })

                                if(isExisting){
                                  setCartCheck(faCheck)
                                }if(!isExisting){
                                  setCartCheck(faPlus)
                                }
                                
                                let copy = [...useClickAni];
                                let isExisting2 = copy.some((data)=>data.id === a.id);

                                if(isExisting2){
                                  return
                                }if(!isExisting2){
                                  copy.unshift(a);
                                }
                                setUseClickAni(copy);
                                })}>
                                  <div className='imgBox'>
                                    <img src={process.env.PUBLIC_URL + `/image/${a.image}`} />
                                  </div>
                                  <h2 className='aniName'>{a.title} {a.series}</h2>
                                </div>
                            </SwiperSlide>
                          )
                        }
                        if(byDay == 3 && a.dayAni == '수'){
                          return(
                            <SwiperSlide key={i}>
                              <div className='userView' onClick={(()=>{ 
                                setPopUp(true);
                                setClickAniInfo(a);

                                let cart = localStorage.getItem('cart');
                                cart = JSON.parse(cart);

                                let isExisting = cart.some((data)=>{return data.id === a.id })

                                if(isExisting){
                                  setCartCheck(faCheck)
                                }if(!isExisting){
                                  setCartCheck(faPlus)
                                }
                                
                                let copy = [...useClickAni];
                                let isExisting2 = copy.some((data)=>data.id === a.id);

                                if(isExisting2){
                                  return
                                }if(!isExisting2){
                                  copy.unshift(a);
                                }
                                setUseClickAni(copy);
                                })}>
                                  <div className='imgBox'>
                                    <img src={process.env.PUBLIC_URL + `/image/${a.image}`} />
                                  </div>
                                  <h2 className='aniName'>{a.title} {a.series}</h2>
                                </div>
                            </SwiperSlide>
                          )
                        }
                        if(byDay == 4 && a.dayAni == '목'){
                          return(
                            <SwiperSlide key={i}>
                              <div className='userView' onClick={(()=>{ 
                                setPopUp(true);
                                setClickAniInfo(a);

                                let cart = localStorage.getItem('cart');
                                cart = JSON.parse(cart);

                                let isExisting = cart.some((data)=>{return data.id === a.id })

                                if(isExisting){
                                  setCartCheck(faCheck)
                                }if(!isExisting){
                                  setCartCheck(faPlus)
                                }
                                
                                let copy = [...useClickAni];
                                let isExisting2 = copy.some((data)=>data.id === a.id);

                                if(isExisting2){
                                  return
                                }if(!isExisting2){
                                  copy.unshift(a);
                                }
                                setUseClickAni(copy);
                                })}>
                                  <div className='imgBox'>
                                    <img src={process.env.PUBLIC_URL + `/image/${a.image}`} />
                                  </div>
                                  <h2 className='aniName'>{a.title} {a.series}</h2>
                                </div>
                            </SwiperSlide>
                          )
                        }
                        if(byDay == 5 && a.dayAni == '금'){
                          return(
                            <SwiperSlide key={i}>
                              <div className='userView' onClick={(()=>{ 
                                setPopUp(true);
                                setClickAniInfo(a);

                                let cart = localStorage.getItem('cart');
                                cart = JSON.parse(cart);

                                let isExisting = cart.some((data)=>{return data.id === a.id })

                                if(isExisting){
                                  setCartCheck(faCheck)
                                }if(!isExisting){
                                  setCartCheck(faPlus)
                                }
                                
                                let copy = [...useClickAni];
                                let isExisting2 = copy.some((data)=>data.id === a.id);

                                if(isExisting2){
                                  return
                                }if(!isExisting2){
                                  copy.unshift(a);
                                }
                                setUseClickAni(copy);
                                })}>
                                  <div className='imgBox'>
                                    <img src={process.env.PUBLIC_URL + `/image/${a.image}`} />
                                  </div>
                                  <h2 className='aniName'>{a.title} {a.series}</h2>
                                </div>
                            </SwiperSlide>
                          )
                        }
                        if(byDay == 6 && a.dayAni == '토'){
                          return(
                            <SwiperSlide key={i}>
                              <div className='userView' onClick={(()=>{ 
                                setPopUp(true);
                                setClickAniInfo(a);

                                let cart = localStorage.getItem('cart');
                                cart = JSON.parse(cart);

                                let isExisting = cart.some((data)=>{return data.id === a.id })

                                if(isExisting){
                                  setCartCheck(faCheck)
                                }if(!isExisting){
                                  setCartCheck(faPlus)
                                }
                                
                                let copy = [...useClickAni];
                                let isExisting2 = copy.some((data)=>data.id === a.id);

                                if(isExisting2){
                                  return
                                }if(!isExisting2){
                                  copy.unshift(a);
                                }
                                setUseClickAni(copy);
                                })}>
                                  <div className='imgBox'>
                                    <img src={process.env.PUBLIC_URL + `/image/${a.image}`} />
                                  </div>
                                  <h2 className='aniName'>{a.title} {a.series}</h2>
                                </div>
                            </SwiperSlide>
                          )
                        }
                        if(byDay == 0 && a.dayAni == '일'){
                          return(
                            <SwiperSlide key={i}>
                              <div className='userView' onClick={(()=>{ 
                                setPopUp(true);
                                setClickAniInfo(a);

                                let cart = localStorage.getItem('cart');
                                cart = JSON.parse(cart);

                                let isExisting = cart.some((data)=>{return data.id === a.id })

                                if(isExisting){
                                  setCartCheck(faCheck)
                                }if(!isExisting){
                                  setCartCheck(faPlus)
                                }
                                
                                let copy = [...useClickAni];
                                let isExisting2 = copy.some((data)=>data.id === a.id);

                                if(isExisting2){
                                  return
                                }if(!isExisting2){
                                  copy.unshift(a);
                                }
                                setUseClickAni(copy);
                                })}>
                                  <div className='imgBox'>
                                    <img src={process.env.PUBLIC_URL + `/image/${a.image}`} />
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
    )

}


export default App;
