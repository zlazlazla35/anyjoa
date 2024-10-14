import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark, faPlay, faPlus} from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from 'react-player/lazy'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';

function AniDetail(){
    const [popUp, setPopUp] = useState(false);
    const [clickAniInfo, setClickAniInfo] = useState({});

    return(
        <div className='aineMorePopupBg'>
            <div className='aineMorePopup'>
            <div className='videoBg' style={ {
                backgroundImage: `linear-gradient(90deg, rgba(18, 18, 18, 0.5) 0%, 
                rgba(18, 18, 18, 0) 50%),
                linear-gradient(rgba(18, 18, 18, 0.5) 0%, rgba(18, 18, 18, 0) 21.11%), 
                linear-gradient(rgba(18, 18, 18, 0) 50%, rgba(18, 18, 18, 0.5) 100%), 
                url(/image/ani_poster17.jpg)` , 
                backgroundPosition: 'center', 
                backgroundSize : 'cover'} }>
                <ReactPlayer  url='https://www.youtube.com/embed/1tk1pqwrOys?si=CCMeKWQ8HZX6214e' loop={true} playing={true} muted={true} controls={false} className="video" />
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
                        <li>장르</li>
                    </ul>
                    <span className='age'>19</span>
                    </div>
                    <h2 className='title'>
                    애니이름
                    </h2>
                    <h4 className='seriesName'>
                    애니시리즈
                    </h4>
                    <button className='play'>
                    <Link to={'https://www.youtube.com/embed/1tk1pqwrOys?si=CCMeKWQ8HZX6214e'} target='_blank'>
                        예고편 보러가기 <FontAwesomeIcon icon={faPlay} />
                    </Link>
                    </button>
                    <button className='add'>
                    <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className='aniPost'>
                    <div className='postImage'>
                    <img src={process.env.PUBLIC_URL + `/image/ani_poster17.jpg`} />
                    </div>
                </div>
                </div>
                <div className='plotBox'>
                <div className='plot'>줄거리</div>
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