import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";


function MoSearch() {
    return (
        <div className="mo_search_box">
            <div className="mo_search_box_inner">
                <div className="searchTop">
                    <button className="backBtn">
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <div className="user_search">
                        <input placeholder="애니 제목을 입려해주세요"/>
                        <FontAwesomeIcon className="glassIgon" icon={faMagnifyingGlass} />
                        <button className="textRemove">
                        <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}