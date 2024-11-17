function chartCardFunc(name,array){
      if ("content" in document.createElement("template")) {

    //   chatBody templating
      const tbody = document.querySelector(".section .row .col-md-6");
      const template = document.querySelector("#chartCard");
      const clone = template.content.cloneNode(true);
      clone.querySelector(".card .card-header .name h6").innerText=name;

    //   chatMessage templating
      array.forEach(element => {
        const ChatBody = clone.querySelector(".card .card-body .chat-content");
        const chartMessage = document.querySelector("#chartMessage");
        const cc = chartMessage.content.cloneNode(true);
        cc.querySelector(".chat .chat-body .chat-message").innerText=element.message;
        if(element.left){
            cc.querySelector(".chat").classList.add("chat-left");
        }
        ChatBody.appendChild(cc);
      });


      tbody.appendChild(clone);
    
      } else {
      }
    };
   
function chartCardOnly(name){
        if ("content" in document.createElement("template")) {
  
      //   chatBody templating
        const tbody = document.querySelector(".section .row .col-md-6");
        const template = document.querySelector("#chartCard");
        const clone = template.content.cloneNode(true);
        clone.querySelector(".card .card-header .name h6").innerText=name;
  
  
        tbody.appendChild(clone);
      
        } else {
            
        }
      }



array = [
    {message:"Hi Alfy, how can i help you?",left:false},
    {message:"I'm looking for the best admin dashboard template",left:true},
    {message:"With bootstrap certainly",left:true},
    {message:"I recommend you to use Mazer Dashboard",left:false},
    {message:"That's great! I like it so much :)",left:true},

]
// chartCardFunc("rohit",array);
// chartCardOnly("rahul");

'use strict';
  class ChatCard extends HTMLElement {
    constructor() {
      super();


      const title = "rahul";
      const array = [
        {message:"Hi Alfy, how can i help you?",left:false},
        {message:"I'm looking for the best admin dashboard template",left:true},
        {message:"With bootstrap certainly",left:true},
        {message:"I recommend you to use Mazer Dashboard",left:false},
        {message:"That's great! I like it so much :)",left:true},
      ]

      this.innerHTML = `
        <div class="card-header">
                <div class="media d-flex align-items-center">
                    <div class="avatar me-3">
                        <img src="./assets/compiled/jpg/1.jpg" alt="" srcset="">
                        <span class="avatar-status bg-success"></span>
                    </div>
                    <div class="name flex-grow-1">
                        <h6 class="mb-0">${title}</h6>
                        <span class="text-xs">Online</span>
                    </div>
                    <button class="btn btn-sm">
                        <i data-feather="x"></i>
                    </button>
                </div>
            </div>
            <div class="card-body pt-4 bg-grey">
              <div class="chat-content">
                    ${array.map(item=>{
                      if(item.left){
                        return `
                          <div class="chat chat-left">
                            <div class="chat-body">
                              <div class="chat-message">
                                ${item.message}
                              </div>
                            </div>
                          </div>
                        `
                      }
                      else{
                        return `
                          <div class="chat">
                            <div class="chat-body">
                              <div class="chat-message">
                                ${item.message}
                              </div>
                            </div>
                          </div>
                        `
                      }
                    }).join("")}
              </div>
            </div>
            <div class="card-footer">
                <div class="message-form d-flex flex-direction-column align-items-center">
                    <a href="http://" class="black"><i data-feather="smile"></i></a>
                    <div class="d-flex flex-grow-1 ms-4">
                        <input type="text" class="form-control" placeholder="Type your message..">
                    </div>
                </div>
            </div>
      `;
    }
  }

  // let the browser know about the custom element
customElements.define('chat-card', ChatCard);