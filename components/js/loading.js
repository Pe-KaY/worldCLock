const loading = () => {
  const loadscreen = document.getElementById("loading")

  window.onload = () => {
    setTimeout(() => {
      loadscreen.style.display = "none"
    }, 2000)
  }
}

export default loading
