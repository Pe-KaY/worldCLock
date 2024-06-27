const closeAlarm = () => {
  const closeBtn = document.getElementById("closealarm")
  const alarmMenu = document.querySelector(".alarmwrapper")

  closeBtn.addEventListener("click", () => {
    alarmMenu.classList.toggle("hide")
  })
}

export default closeAlarm
