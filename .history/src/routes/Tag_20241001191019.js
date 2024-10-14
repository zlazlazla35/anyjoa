import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark, faPlay, faPlus, faLight, faCheck  } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AniDetail from "../component/AniDetail";


function Tag({aniAll, setCartCheck, cartCheck}){
    const [tag, setTag] = useState(['이세계','배틀', '학교', '스포츠', '개그', '공포', '로맨스'])
    const [tagSelect, setTagSelect] = useState([]);
    const [popUp, setPopUp] = useState(false);
    const [clickAniInfo, setClickAniInfo] = useState({});
    const [resultNum, setResultNum] = useState(aniAll.length);
    const [ctgoryResult, setCtgoryResult] = useState(aniAll);

    let [tagView, setTagView] = useState(indexView);




  // 팝업 활성화시 뒤에 스크롤 막기
    if(popUp){
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "unset";
    }


    // useEffect(()=>{
    //     aniAll.map((a, i)=>{
    //         a.category.filter((el)=>{
    //             tagSelect.some((text)=>{
    //                 if(tagSelect !== ''){
    //                     if(el.includes(text) == true){
    //                         console.log(a)
    //                     }
    //                 }
    //             })
    //         })
    //     })
    // }, [tagSelect])


    // 처음 로컬스토리지 가져와서 담아져 있는 데이터와 여기서 클릭한 데이터가 중복되는지 체크 > 중복이 안되면 바로 로컬스토리에 추가
    function indexView(){
        const indexUserView = localStorage.getItem('useView');
        return indexUserView ? JSON.parse(indexUserView) : []
    }

    // useEffect(()=>{
    //     console.log(tagView)
    // }, [])





    return(
        <div className="byTypeWrap">
            {
                popUp ? <AniDetail setPopUp= {setPopUp} clickAniInfo={clickAniInfo} cartCheck={cartCheck} setCartCheck ={setCartCheck}/> : null
            }
            <div className="byTypeInner">
                <div className="titleBox">
                    <h2>태그 검색</h2>
                </div>
                <div className="contentsBox">
                    <ul className="typeLise">
                        {
                            tag.map((a, i)=>{
                                return(
                                    <li key={i} onClick={((e)=>{
                                        let copy = [...tagSelect]
                                        copy.push(e.target.innerHTML);
                                        copy = new Set(copy);
                                        copy = Array.from(copy);
                                        setTagSelect(copy)
                                    })}>{a}</li>
                                )
                            })
                        }
                    </ul>
                    <h4 className="seachResult">총 <span>{resultNum}</span>개의 작품이 검색되었습니다 :)</h4>
                    <div className="userSelectBox">
                        <span>선택된 필터 : </span>
                        <ul className="userSelect">
                            {
                                tagSelect.map((a, i)=>{
                                    return(
                                        <li key={i}  onClick={(()=>{ 
                                            let copy = [...tagSelect];
                                            copy.splice(i, 1);
                                            setTagSelect(copy);
                                            })}>
                                            {a} <button><FontAwesomeIcon icon={faXmark}  /></button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='viewedContent byTypePage'>
                        <div className='viewSlide'>
                            {
                                aniAll.map((a ,i)=>{
                                    return(
                                        <div className='userView' key={i} onClick={(()=>{ 
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

                                            let useviewList = localStorage.getItem('useView');
                                            useviewList = JSON.parse(useviewList);
                                            
                                            let dataCheck = useviewList.some((data)=> data.id === a.id);

                                            if(dataCheck){
                                                return
                                            }if(!dataCheck){
                                                let copy = [...tagView];
                                                copy.unshift(a);
                                                setTagView(copy);
                                                console.log(tagView)
                                            }

                                            })}>
                                            <div className='imgBox'>
                                            <img src={process.env.PUBLIC_URL + `/image/${a.image}`} />
                                            </div>
                                            <h2 className='aniName'>{a.title}</h2>
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

export default Tag;