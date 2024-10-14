import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark, faPlay, faPlus, faLight, faCheck, faRotateRight  } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AniDetail from "../component/AniDetail";


function Tag({aniAll, setCartCheck, cartCheck}){
    const [tag, setTag] = useState(['이세계','배틀', '학교', '스포츠', '개그', '공포', '로맨스', '우정','액션'])
    const [tagSelect, setTagSelect] = useState([]);
    const [popUp, setPopUp] = useState(false);
    const [clickAniInfo, setClickAniInfo] = useState({});
    const [ctgoryResult, setCtgoryResult] = useState(aniAll);

    let [tagView, setTagView] = useState(indexView);
    const [useTag , setUseTag] = useState([]);




    // 팝업 활성화시 뒤에 스크롤 막기
    useEffect(()=>{
        if(!popUp){
            document.body.style.overflow = "unset";
        }
    }, [popUp]);

    // 로컬스토리지 초기값 설정
    function indexView(){
        const indexUserView = localStorage.getItem('useView');
        return indexUserView ? JSON.parse(indexUserView) : []
    }

    // 기존 로컬스토리에 새로운 데이터 넣기
    useEffect(()=>{
        if(tagView.length == 7){
            tagView.pop();
            localStorage.setItem('useView', JSON.stringify(tagView));
        }else{
            localStorage.setItem('useView', JSON.stringify(tagView));
        }
    }, [tagView])




    return(
        <div className="byTypeWrap">
            <AniDetail popUp={popUp} setPopUp= {setPopUp} clickAniInfo={clickAniInfo} cartCheck={cartCheck} setCartCheck ={setCartCheck}/>      
            <div className="byTypeInner">
                <div className="titleBox">
                    <h2>애니메이션 검색</h2>
                </div>
                <div className="contentsBox">
                    <h4 className="seachResult">총 <span>100</span>개의 작품이 검색되었습니다 :)</h4>
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
                        {
                            useTag == ''
                            ? <div className="noResult">
                                    <h2>검색결과가 없습니다.</h2>
                                    <h2>태그를 다시 설정해주세요 :)</h2>
                                </div>
                            : <div className='viewSlide'>
                                {  
                                    useTag.map((a ,i)=>{
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
                                                    
                                                }

                                                })}>
                                                <div className='imgBox'>
                                                <img src={process.env.PUBLIC_URL + `/image/${a.image}`} />
                                                </div>
                                                <h2 className='aniName'>{a.title}</h2>
                                                <h4 className='series'>{a.series}</h4>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tag;