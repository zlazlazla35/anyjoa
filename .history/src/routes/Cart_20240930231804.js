import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark, faPlay, faPlus, faLight, faL  } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import AniDetail from "../component/AniDetail";
import { useDispatch, useSelector } from "react-redux";






function Cart({aniAll}, props){
    const [popUp, setPopUp] = useState(false);
    const [clickAniInfo, setClickAniInfo] = useState({});

    let store = useSelector((state)=>{ return state });
    let [useCart, setUseCart] = useState(JSON.parse(store.cart));

    console.log(props)

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
                    <h4 className="seachResult">총 <span>{useCart.length}</span>개의 작품이 담겨져 있습니다. :)</h4>
                    <div className='viewedContent byTypePage'>
                        <div className='viewSlide'>
                            {
                                useCart.map((a, i)=>{
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart