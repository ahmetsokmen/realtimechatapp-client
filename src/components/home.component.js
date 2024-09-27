import React, { setState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { eraseCookie } from "../services/cookie.service";
import { ChatComponent } from "./chat/chat.component";
import useWebSocket, { ReadyState } from "react-use-websocket"
import { logOut } from "../services/identity.service";



//comp
export const HomeComponent = () => {
  const navigate = useNavigate()

  async function handleClick() {
    await logOut()
    navigate("/login")
  }

  return (
    <div id="homeComponent">
      <div className="float-end m-3">
        <button onClick={handleClick} className="btn btn-danger">
          {/* <FontAwesomeIcon icon={faStroopwafel} />    */}
          <FontAwesomeIcon icon="coffee" size="xs" />
          <span className="ms-2">Logout</span>
        </button>

      </div>
      <ChatComponent />
    </div>
  );
};
