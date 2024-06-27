import "./style.css"
import "./components/styles/lockpage.css"
import "./components/styles/alarm.css"
import "./components/styles/clock.css"
import "./components/styles/worldclock.css"
import "./components/styles/sunmoon.css"
import "./components/styles/footer.css"

// import functions
import unlock from "./components/js/unlock"
import time from "./components/js/time"
import analogue from "./components/js/analogue"
import switchClock from "./components/js/switchClockmode"
import loading from "./components/js/loading"
import openAlarm from "./components/js/openalarm"
import closeAlarm from "./components/js/closealarm"

// invoke functions
unlock()
time()
analogue()
switchClock()
loading()
openAlarm()
closeAlarm()
