const openAlarm = () => {
  const openalarmBtn = document.querySelector(".fa-bell")
  const alarmMenu = document.querySelector(".alarmwrapper")

  openalarmBtn.addEventListener("click", () => {
    alarmMenu.classList.toggle("hide")
  })
}

export default openAlarm
