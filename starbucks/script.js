var currImage = 0;
var images = ["url('img/banner_195590685_desktop.jpg')", "url('img/banner_1238876046_desktop.jpg')", "url('img/banner_4000358532_desktop.jpg')"];

function startTimer(duration) {
    var timer = duration;
    
    setInterval(function () {
        if (--timer < 0) {   
            timer = duration;
            
            if(currImage < 2){
                currImage++;   
            } else {
                currImage = 0;
            }

            document.querySelector(".slide").style.backgroundImage = images[currImage];
        }
    }, 1000);
}
  
var secondsCountdown = 2.5;
startTimer(secondsCountdown);