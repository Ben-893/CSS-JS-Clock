function setDate() {
  const now = new Date(); //grabs the current from the browser
  const seconds = now.getSeconds(); //extracts the seconds from the date
}

setInterval(setDate, 1000);