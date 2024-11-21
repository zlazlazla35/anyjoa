import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass, faCircleXmark } from "@fortawesome/free-solid-svg-icons";


function MoNav() {
    return (
        <div className="mo_search_box">
            <div className="mo_search_box_inner">
                <div className="searchTop">
                    <button className="closeBtn">
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MoNav