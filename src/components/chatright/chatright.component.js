import React from 'react'


//comp
export const ChatRightComponent = () => {
  return (
    <div id="rightComponent" class="right">
          <div class="top">
            <span>
              To: <span class="name">Group Chat</span>
            </span>
          </div>
          <div class="chat" data-chat="person1">
            <div class="conversation-start">
              <span>Today, 6:48 AM</span>
            </div>
            <div class="bubble you">Hello,</div>
            <div class="bubble you">it's me.</div>
            <div class="bubble you">I was wondering...</div>
          </div>
          <div class="chat" data-chat="person2">
            <div class="conversation-start">
              <span>Today, 5:38 PM</span>
            </div>
            <div class="bubble you">Hello, can you hear me?</div>
            <div class="bubble you">I'm in California dreaming</div>
            <div class="bubble me">... about who we used to be.</div>
            <div class="bubble me">Are you serious?</div>
            <div class="bubble you">When we were younger and free...</div>
            <div class="bubble you">I've forgotten how it felt before</div>
          </div>
          <div class="chat" data-chat="person3">
            <div class="conversation-start">
              <span>Today, 3:38 AM</span>
            </div>
            <div class="bubble you">Hey human!</div>
            <div class="bubble you">
              Umm... Someone took a shit in the hallway.
            </div>
            <div class="bubble me">... what.</div>
            <div class="bubble me">Are you serious?</div>
            <div class="bubble you">I mean...</div>
            <div class="bubble you">It’s not that bad...</div>
            <div class="bubble you">
              But we’re probably gonna need a new carpet.
            </div>
          </div>
          <div class="chat" data-chat="person4">
            <div class="conversation-start">
              <span>Yesterday, 4:20 PM</span>
            </div>
            <div class="bubble me">Hey human!</div>
            <div class="bubble me">
              Umm... Someone took a shit in the hallway.
            </div>
            <div class="bubble you">... what.</div>
            <div class="bubble you">Are you serious?</div>
            <div class="bubble me">I mean...</div>
            <div class="bubble me">It’s not that bad...</div>
          </div>
          <div class="chat" data-chat="person5">
            <div class="conversation-start">
              <span>Today, 6:28 AM</span>
            </div>
            <div class="bubble you">Wasup</div>
            <div class="bubble you">Wasup</div>
            <div class="bubble you">
              Wasup for the third time like is <br />
              you blind bitch
            </div>
          </div>
          <div class="chat" data-chat="person6">
            <div class="conversation-start">
              <span>Monday, 1:27 PM</span>
            </div>
            <div class="bubble you">So, how's your new phone?</div>
            <div class="bubble you">You finally have a smartphone :D</div>
            <div class="bubble me">Drake?</div>
            <div class="bubble me">Why aren't you answering?</div>
            <div class="bubble you">howdoyoudoaspace</div>
          </div>
          <div class="write">
            <a href="javascript:;" class="write-link attach"></a>
            <input type="text" />
            <a href="javascript:;" class="write-link smiley"></a>
            <a href="javascript:;" class="write-link send"></a>
          </div>
        </div>
  )
}
