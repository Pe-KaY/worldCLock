const unlock = () => {
  // get element to variables
  const lockContainer = document.querySelector(".worldclock__lockpage")
  const lockedIcon = document.querySelector(".fa-lock")
  const unlockedIcon = document.querySelector(".fa-unlock")
  const lockText = document.querySelector(".worldclock__lockpage > h1")

  const exitlockscreen = () => {
    lockText.textContent = `Successfully Unlocked`

    // displays the main clock page
    document.querySelector(".worlclock__alarm").classList.toggle("hide")
    document.querySelector(".worldclock__clockwrapper").classList.toggle("hide")
    document.querySelector("footer").classList.toggle("hide")

    // lock icons transformations
    lockedIcon.style.display = "none"
    unlockedIcon.style.display = "block"
    setTimeout(() => {
      lockContainer.classList.toggle("backOutUp")
    }, 1000)
  }

  lockedIcon.addEventListener("click", exitlockscreen)
}

export default unlock
