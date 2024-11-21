import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";


function MoNav({setMoNav}) {
    return (
        <div className="mo_search_box">
            <div className="mo_search_box_inner">
                <div className="searchTop">
                    <button className="closeBtn" onClick={()=>{
                        setMoNav(false);
                    }}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="navList">
                    <ul>
                        <li>
                            <NavLink to={'/tag'}>태그검색</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/cart'}>찜한 콘텐츠</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MoNav