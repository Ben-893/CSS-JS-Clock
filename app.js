function setDate() {
  const secondHand = document.querySelector('.second-hand');
  const now = new Date(); // grabs the current date from the browser
  const seconds = now.getSeconds(); // extracts the seconds from the date
  const secondsDegrees = ((seconds / 60) * 360) + 90; // calculates degrees by doing some math
  
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // rotates the seccond hand depending on the value of 'secondsDegrees'
}

setInterval(setDate, 1000);