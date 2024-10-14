import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark, faPlay, faPlus} from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from 'react-player/lazy'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';

function AniDetail({setPopUp, aniAll, clickAniInfo}){



        return(
            <div className='aineMorePopupBg'>
                <div className='aineMorePopup'>
                    <div className='videoBg' style={ {
                    backgroundImage: `linear-gradient(90deg, rgba(18, 18, 18, 0.5) 0%, 
                    rgba(18, 18, 18, 0) 50%),
                    linear-gradient(rgba(18, 18, 18, 0.5) 0%, rgba(18, 18, 18, 0) 21.11%), 
                    linear-gradient(rgba(18, 18, 18, 0) 50%, rgba(18, 18, 18, 0.5) 100%), 
                    url(/image/${clickAniInfo.image})` , 
                    backgroundPosition: 'center', 
                    backgroundSize : 'cover'} }>
                    <ReactPlayer  url={clickAniInfo.link} loop={true} playing={true} muted={true} controls={false} className="video" />
                    </div>
                    <div className='aineMoreInner'>
                    <button className='close' onClick={()=>{
                        setPopUp(false)
                    }}>
                        <FontAwesomeIcon icon={faXmark}  />
                    </button>
                    <div className='aniMoreContent'>
                        <div className='ainiInfo_box'>
                        <div className='aniInfo'>
                            <ul>
                            {
                            clickAniInfo.category.map((a, i)=>{
                                return(
                                <li>{a}</li>
                                )
                            })
                            }
                            </ul>
                            <span className='age'>{clickAniInfo.years}</span>
                        </div>
                        <h2 className='title'>
                            {clickAniInfo.title}
                        </h2>
                        <h4 className='seriesName'>
                            {clickAniInfo.series}
                        </h4>
                        <button className='play'>
                            <Link to={clickAniInfo.link} target='_blank'>
                            예고편 보러가기 <FontAwesomeIcon icon={faPlay} />
                            </Link>
                        </button>
                        <button className='add' onClick={(()=>{
                            let userCart = localStorage.getItem('cart');
                            userCart = JSON.parse(userCart);

                            // userCart.push(clickAniInfo)

                            const datacheck =  userCart.findIndex((item)=>{
                                return item.id == clickAniInfo.id
                            })

                            if(datacheck == -1){
                                userCart.push(clickAniInfo);
                            }else{
                                console.log('담겨있음')
                            }

                            console.log(datacheck)

                            localStorage.setItem('cart', JSON.stringify(userCart));



                        })}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        </div>
                        <div className='aniPost'>
                        <div className='postImage'>
                            <img src={process.env.PUBLIC_URL + `/image/${clickAniInfo.image}`} />
                        </div>
                        </div>
                    </div>
                    <div className='plotBox'>
                        <div className='plot'>{clickAniInfo.plot}</div>
                        <button className='ploatView' onClick={((e)=>{
                        e.target.previousSibling.style.display = 'block'
                        e.target.style.display = 'none'
                        })}>더보기</button>
                    </div>
                    </div>
                </div>
            </div>
        )
}
export default AniDetail;


//추가 버튼 클릭시 만약 그 데이터의 id가 있으면 얼럿으로 이미 추가되었다고 알려주기
// 그게 아니면 데이터 push 해주기