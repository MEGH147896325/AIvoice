var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
  document.getElementById("caught").innerHTML = "";
  recognition.start();
}

recognition.onresult = function run (event) {
  
  var content = event.results[0][0].transcript;
  console.log(content);
   var newcontent =  content.toLowerCase();
   console.log(newcontent);
  if (newcontent == "open youtube"||newcontent == "start youtube"){
    window.open("https://www.youtube.com", "_blank");
    }else if(newcontent == "open gmail" || newcontent == "start gmail"){
        window.open("https://mail.google.com", "_blank");
    }else if (newcontent == "start classes"||newcontent == "join classes"){
        window.open("https://meet.google.com/yaf-wyxw-wrr", "_blank");
    }
  
  document.getElementById("caught").innerHTML = content;

  
  }
  
