import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark, faPlay, faPlus, faLight, faL  } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import AniDetail from "../component/AniDetail";
import { useSelector } from "react-redux";






function Cart({aniAll}){
    const [popUp, setPopUp] = useState(false);
    const [clickAniInfo, setClickAniInfo] = useState({});
    const [resultNum, setResultNum] = useState(aniAll.length)

    let a = useSelector((state)=>{ return state })

    console.log(a.cart)

    return(
        <div className="byTypeWrap">
            {
                popUp ? <AniDetail setPopUp={ setPopUp } aniAll={ aniAll } clickAniInfo={clickAniInfo}/> : null
            }
            <div className="byTypeInner">
                <div className="titleBox cart">
                    <h2>찜한 콘텐츠</h2>
                </div>
                <div className="contentsBox">
                    <h4 className="seachResult">총 <span>{resultNum}</span>개의 작품이 검색되었습니다 :)</h4>
                    <div className='viewedContent byTypePage'>
                        <div className='viewSlide'>
                            <div className='userView' onClick={(()=>{ 
                                // setPopUp(true);
                                // setClickAniInfo(a);
                                })}>
                                <div className='imgBox'>
                                <img src={process.env.PUBLIC_URL + `/image/ani_poster5.jpg`} />
                                </div>
                                <h2 className='aniName'>제목</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart