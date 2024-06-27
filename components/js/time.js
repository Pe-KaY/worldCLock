import alarmsound from "../../alarm/countdown.mp3"

const time = () => {
  // get element
  const displayTime = document.getElementById("digitalTime")
  const amPm = document.getElementById("ampm")
  const switchBtn = document.getElementById("format")

  const timeFormatName = document.querySelector("#format > p")

  // MOON and SUN images to switch day and night
  const sun = document.getElementById("sun")
  const moon = document.getElementById("moon")

  //  Alarm elements
  const alarmContainer = document.querySelector(".alarmwrapper")
  const alarmHour = document.getElementById("alarmhour")
  const alarmMinute = document.getElementById("alarmminute")
  const alarmSaveBtn = document.getElementById("savealarm")
  const alarmPm = document.getElementById("pm")
  const alarmAm = document.getElementById("am")
  const cancelAlarm = document.querySelector(".fa-xmark")

  const alarmNotification = document.querySelector(".alarmnoti")
  const alarmNotiText = document.getElementById("alarmnotitext")
  // alarm audio
  const alarmBeep = new Audio(alarmsound)

  let alarmtime = ""

  const setAlarm = () => {
    if (!alarmAm.checked && !alarmPm.checked) {
      return
    }
    if (!alarmHour.value || !alarmMinute.value) {
      return
    }

    if (alarmHour.value.length > 2 || alarmMinute.value.length > 2) {
      return
    }
    if (parseInt(alarmHour.value) > 12 || parseInt(alarmMinute.value) > 59) {
      return
    }
    const minute = alarmMinute.value
    let hour = alarmHour.value

    if (alarmPm.checked) {
      hour = parseInt(hour) + 12
      // set to 12 instead of 24
      if (parseInt(alarmHour.value) === 12) {
        hour = 12
      }
    }

    // to set 12 aam to appropriate format 0 for 24 hour
    if (!alarmPm.checked && parseInt(alarmHour.value) == 12) {
      hour = 0
    }

    alarmtime = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}:00`
    alarmContainer.classList.toggle("hide")

    // display alarmnotification
    alarmNotification.classList.toggle("hide")
    alarmNotiText.textContent = `${alarmHour.value.padStart(
      2,
      "0"
    )}:${minute.padStart(2, "0")}${alarmPm.checked ? "pm" : "am"}`
    // sets back values to empty
    alarmHour.value = ""
    alarmMinute.value = ""
  }

  // will be used to toggle between 12 and 24 hour format
  let istwelveHour = true

  //   time formatter function
  const formatTime = (time) => time.toString().padStart(2, "0")

  setInterval(() => {
    //   initialize date objects
    let date = new Date()

    let hours = date.getHours()

    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if (parseInt(hours) === 6) {
      sun.classList.toggle("hide")
      moon.classList.toggle("hide")
      document.querySelector(".greeting").textContent = "Good Day"
    }
    if (parseInt(hours) === 18) {
      sun.classList.toggle("hide")
      moon.classList.toggle("hide")
      document.querySelector(".greeting").textContent = "Good Night"
    }

    // ampm
    const amOrpm = hours >= 12 ? "pm" : "am"

    // check alarm
    let checkalarm = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

    if (checkalarm === alarmtime) {
      alarmBeep.play()
      // removes alarm notification text
      alarmNotification.classList.toggle("hide")
      alarmNotiText.textContent = ""
      // reset alarm time to empty string
      alarmtime = ""
    }

    //   24 hour format function
    const twentyFourHourFormat = () => {
      amPm.style.display = "none"
      displayTime.textContent = `${formatTime(hours)}:${formatTime(
        minutes
      )}:${formatTime(seconds)}`
    }

    // twelve hour time format function
    const twelveHourFormat = () => {
      // format hour for 12 hours
      const hour = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours
      // show am or pm
      amPm.style.display = "inline"
      amPm.textContent = amOrpm
      // display time
      displayTime.textContent = `${formatTime(hour)}:${formatTime(
        minutes
      )}:${formatTime(seconds)}`
    }

    // if istwelveHour is false then display 24hour clock format
    if (!istwelveHour) {
      timeFormatName.textContent = "24Hours Format"
      twentyFourHourFormat()
    } else {
      timeFormatName.textContent = "12Hours Format"
      twelveHourFormat()
    }
  }, 1000)

  // add event to switch format btn
  switchBtn.addEventListener("click", () => {
    istwelveHour = !istwelveHour
    console.log("crickeed")
  })

  // add event to alarm save button
  alarmSaveBtn.addEventListener("click", setAlarm)
  // add event to cancel alarm button
  cancelAlarm.addEventListener("click", () => {
    alarmtime = ""
    alarmNotification.classList.toggle("hide")
  })
}

export default time
