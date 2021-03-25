document.addEventListener('DOMContentLoaded', function() {

    const birthdayTime = document.querySelector('#birthdayTime')
    const countdownContainer = document.querySelector('#countdown')
    const daysCountdown = document.querySelector('#days')
    const hoursCountdown = document.querySelector('#hours')
    const minutesCountdown = document.querySelector('#minutes')
    const secondsCountdown = document.querySelector('#seconds')
  
    const currentTime = new Date()
    let yearOfTheEvent = currentTime.getFullYear()
    let eventDate = new Date( yearOfTheEvent, 04, 29 )
    const isItMay29th = currentTime.getMonth() === 04 && currentTime.getDate() === 29
  
    function countdown() {
      const now = new Date()
      
      if (now > eventDate) {
        eventDate = new Date( yearOfTheEvent + 1, 04, 29 )
      } else if ( now.getFullYear() === eventDate.getFullYear() + 1 ) {
        eventDate = new Date( now.getFullYear(), 04, 29 )
      }
      
      const currentTime = now.getTime()
      const eventTime = eventDate.getTime()
      const remainingTime = eventTime - currentTime
  
      let seconds = Math.floor( remainingTime / 1000 )
      let minutes = Math.floor( seconds / 60 )
      let hours =  Math.floor( minutes / 60 )
      let days = Math.floor( hours / 24 )
  
      hours %= 24
      minutes %= 60
      seconds %= 60
  
      if ( isItMay29th ) {
        console.log('Happy birthday, Ryland!')
  
        countdownContainer.style.display = "none"
        birthdayTime.style.display = "block"
  
      } else {
  
        daysCountdown.textContent = days
        hoursCountdown.textContent = hours
        minutesCountdown.textContent = minutes
        secondsCountdown.textContent = seconds
  
        setTimeout(countdown, 1000)
  
      } 
  
    } 
    countdown()
  
  }) 

  var picture = document.querySelector("#picture");
  var video = document.querySelector("#video");
  var game = document.querySelector("#game");

  picture.addEventListener("click", function() {
    console.log("picture test");
  })

  video.addEventListener('click', function () {
    console.log("video click test");
  })

  game.addEventListener('click', function () {
     var gamelist = document.querySelector('#game-list');
    // gamelist.textContent = "Refrigerator Word Game";
    console.log('clicked');
    var aTag = document.createElement('a');
    aTag.setAttribute('href', 'word-game1.html');
    aTag.textContent = 'Refrigerator Word Game';
    gamelist.appendChild(aTag);


    })