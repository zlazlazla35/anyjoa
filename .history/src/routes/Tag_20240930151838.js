import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark, faPlay, faPlus, faLight, faL  } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AniDetail from "../component/AniDetail";


function Tag({aniAll}){
    const [tag, setTag] = useState(['이세계','배틀', '학교', '스포츠', '개그', '공포', '로맨스'])
    const [tagSelect, setTagSelect] = useState([]);
    const [popUp, setPopUp] = useState(false);
    const [clickAniInfo, setClickAniInfo] = useState({});
    const [resultNum, setResultNum] = useState(aniAll.length)
    const [ctgoryResult, setCtgoryResult] = useState(aniAll)

    if(popUp){
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "unset";
    }


    // useEffect(()=>{
    //     aniAll.forEach((a, i)=>{
    //         a.category.filter((el)=>{
    //             tagSelect.some((text)=>{
    //                 if(el.includes(text) == true){
    //                     let copy = [...ctgoryResult];

    //                 }
    //             })
    //         })
    //     })
    // }, [tagSelect])







    return(
        <div className="byTypeWrap">
            {
                popUp ? <AniDetail setPopUp={ setPopUp } aniAll={ aniAll } clickAniInfo={clickAniInfo}/> : null
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
                                ctgoryResult.map((a ,i)=>{
                                    return(
                                        <div className='userView' key={i} onClick={(()=>{ 
                                            setPopUp(true);
                                            setClickAniInfo(a);
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