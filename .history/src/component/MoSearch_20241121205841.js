import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft  } from "@fortawesome/free-solid-svg-icons";


function MoSearch(){
    return(
        <div className="mo_search_box">
            <div className="mo_search_box_inner">
                <div className="searchTop">
                <FontAwesomeIcon icon={faAngleLeft} />
                </div>
            </div>
        </div>
    )
}