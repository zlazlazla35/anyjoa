import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark, faPlay, faPlus, faLight, faL  } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AniDetail from "../component/AniDetail";


function Tag({aniAll}){
    const [popUp, setPopUp] = useState(false);
    const [clickAniInfo, setClickAniInfo] = useState({});
    const [tag, setTag] = useState(['이세계','배틀', '학교', '스포츠', '개그', '공포', '로맨스'])
    const [tagSelect, setTagSelect] = useState([]);

    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
    const arr2 = [5, 6, 7, 8, 9, 10];

    // let test = arr1.filter((i) => {
    //     console.log(i)
    //     return arr2.includes(i);	// arr1에 요소를 arr2에 포함되는지 비교 해서 true 즉 있는것만 만 리턴
    //   })



    // console.log(test)
    return(
        <div className="byTypeWrap">
            <AniDetail></AniDetail>
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
                    <h4 className="seachResult">총 <span>10</span>개의 작품이 검색되었습니다 :)</h4>
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
                                        <div className='userView' key={i}>
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