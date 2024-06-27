const switchClock = () => {
  // get clock elements
  const digitalMode = document.querySelector(".digitalclock")
  const analogueMode = document.querySelector(".analogueclock")
  const switchbtn = document.getElementById("switchclocks")

  //   let isDigital = true

  const changeClock = () => {
    digitalMode.classList.toggle("hide")
    analogueMode.classList.toggle("hide")
  }

  switchbtn.addEventListener("click", changeClock)
}
export default switchClock
