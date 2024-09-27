import React from "react";
import "./chat.scss";
import { loadChat } from "./chat.script";
import { ChatLeftComponent } from "../chatleft/chatleft.component";
import { ChatRightComponent } from "../chatright/chatright.component";


export const ChatComponent = () => {
  React.useEffect(() => {loadChat()});
  return (
    <div class="wrapper">
      <div class="container">
        <ChatLeftComponent />
        <ChatRightComponent />
      </div>
    </div>
  );
};
