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
chartCardOnly("rahul");