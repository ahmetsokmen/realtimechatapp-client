import React, { useState, useEffect } from "react";
import moment from "moment";
import { REST_URL, WS_URL } from "../../config";
import { getCookie } from "../../services/cookie.service";
import {groupBy} from "../../helpers"
import { fetchAsync } from "../../services/rest.service";
var users = await  fetchAsync("users")
var currentUser = getCookie("loggedin")


//comp
export const ChatLeftComponent =  () => {
  const [lastGroupMsg, setLastMsg] = useState("");
  const [lastPMS, setLastPMS] = useState([]);

  console.log(currentUser)

  //hook1 works
  useEffect(() => {
 
    const ws = new WebSocket(WS_URL);

    ws.onopen = function (str) {
      var roomMsg = { path: "roomchat" };
      ws.send(JSON.stringify(roomMsg));
      var pmMsg = {path : "privatechat", sender : getCookie("loggedin"), receiver:""}
      ws.send(JSON.stringify(pmMsg))
    };

    ws.onmessage = function (str) {
      var date = moment(new Date()).format("HH:mm:ss");
      // console.log("Updated lastGroupMsg: ", date);
      var data = JSON.parse(str.data);
      setLastMsg(data[data.length-1])
    };

    return () => {
      ws.close();
   };

  }, [lastGroupMsg]);



  //hook2 should think about how to manage and group the data 
  useEffect(() => {
    const ws = new WebSocket(WS_URL);

    ws.onopen = function (str) {
      var pmMsg = {path : "privatechat", sender : getCookie("loggedin"), receiver:""}
      ws.send(JSON.stringify(pmMsg))
    };

    ws.onmessage = function (str) {
      var date = moment(new Date()).format("HH:mm:ss");
      // console.log("Updated lastPMS: ", date);
      var allPMSOfCurrentUser = JSON.parse(str.data);//this is not the correct way, i know, performance issue, i should filter last pms at the server side.
      setLastPMS(allPMSOfCurrentUser)
    };

    return () => {
      ws.close();
   };

  }, [lastPMS]);



  return (
    <div id="leftComponent" class="left">
      <div class="top">
        <input type="text" placeholder="Search" />
        <a href="javascript:;" class="search"></a>
      </div>
      <ul class="people">
        <li class="person active" data-chat="person1">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg"
            alt=""
          />
          <span class="name">Group Chat</span>
          <span class="time">{moment(lastGroupMsg?.date).format("MMM Do, h:mm A")}</span>
          <span class="preview">
            {lastGroupMsg?.content?.length > 20? lastGroupMsg?.content?.slice(0, 19) + "…": lastGroupMsg?.content}
          </span>
          <span style={{ float: "right", fontSize:"10px", position:"relative", bottom:"15px" }} >{lastGroupMsg?.sender}</span>
        </li>
    
          {
            users.map(function(item, i){
              if(item.username != currentUser){
                var fullName = item.name + " " + item.surname;
                return (
                  <li class="person" >
                 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg"alt="" />
                 <span class="name"> {fullName} </span>
                 {/* <span class="time">{moment(lastGroupMsg?.date).format("MMM Do, h:mm A")}</span>
                 <span class="preview">
                   {lastGroupMsg?.content?.length > 20? lastGroupMsg?.content?.slice(0, 19) + "…": lastGroupMsg?.content}
                    </span> */}
                </li>
                )
              }
             
            })

          }


        <li class="person d-none" data-chat="person2">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/dog.png"
            alt=""
          />
          <span class="name">Dog Woofson</span>
          <span class="time">1:44 PM</span>
          <span class="preview">I've forgotten how it felt before</span>
        </li>
        <li class="person d-none" data-chat="person3">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/louis-ck.jpeg"
            alt=""
          />
          <span class="name">Louis CK</span>
          <span class="time">2:09 PM</span>
          <span class="preview">
            But we’re probably gonna need a new carpet.
          </span>
        </li>
        <li class="person d-none" data-chat="person4">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/bo-jackson.jpg"
            alt=""
          />
          <span class="name">Bo Jackson</span>
          <span class="time">2:09 PM</span>
          <span class="preview">It’s not that bad...</span>
        </li>
        <li class="person d-none" data-chat="person5">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/michael-jordan.jpg"
            alt=""
          />
          <span class="name">Michael Jordan</span>
          <span class="time">2:09 PM</span>
          <span class="preview">
            Wasup for the third time like is you blind bitch
          </span>
        </li>
        <li class="person d-none" data-chat="person6">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/drake.jpg"
            alt=""
          />
          <span class="name">Drake</span>
          <span class="time">2:09 PM</span>
          <span class="preview">howdoyoudoaspace</span>
        </li>
      </ul>
    </div>
  );
};
