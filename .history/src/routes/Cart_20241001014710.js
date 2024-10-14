import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck  } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import AniDetail from "../component/AniDetail";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";






function Cart({cartCheck, setCartCheck}){
    const [popUp, setPopUp] = useState(false);
    const [clickAniInfo, setClickAniInfo] = useState({});

    let store = useSelector((state)=>{ return state });
    const [useCart, setUseCart] = useState(JSON.parse(store.cart));
    
    let [cartList, setCartList] = useState([])

    useEffect(()=>{
        let cart = localStorage.getItem('cart');
        cart = JSON.parse(cart)

        console.log(cart)
    },[])

    return(
        <div className="byTypeWrap">
            {
                popUp ? <AniDetail setPopUp= {setPopUp} clickAniInfo={clickAniInfo} cartCheck={cartCheck} setCartCheck ={setCartCheck}/> : null
            }
            <div className="byTypeInner">
                <div className="titleBox cart">
                    <h2>찜한 콘텐츠</h2>
                </div>
                <div className="contentsBox">
                    <h4 className="seachResult">총 <span>{useCart.length}</span>개의 작품이 담겨져 있습니다. :)</h4>
                    {
                    useCart.length <= 0
                    ? <div className="noCart">앗! 찜한 콘텐츠가 없습니다.</div>
                    :<div className='viewedContent byTypePage'>
                        <div className='viewSlide'>
                            {
                                useCart.map((a, i)=>{
                                    return(
                                        <div className='userView' key={ i } onClick={(()=>{ 
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
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart