import './index.css'

const btn = document.querySelectorAll(".weather-btn")
const volumeControl = document.getElementById("volume")
const audio = document.getElementById("audio")
const bg = document.querySelector(".bg")

btn.forEach((el) =>
  el.addEventListener("click", (e) => {
    e.stopPropagation()

    if (e.currentTarget.id === "summer") {
      playSound("summer")
      toggleIcon(e.currentTarget)
      bg.style.background = "url(assets/summer-bg.jpg)"
    }

    if (e.currentTarget.id === "rain") {
      playSound("rain")
      toggleIcon(e.currentTarget)
      bg.style.background = "url(assets/rainy-bg.jpg)"
    }

    if (e.currentTarget.id === "winter") {
      playSound("winter")
      toggleIcon(e.currentTarget)
      bg.style.background = "url(assets/winter-bg.jpg)"
    }
  })
)

function playSound(soundName) {
  if (audio.getAttribute("src") != `assets/sounds/${soundName}.mp3`) {
    audio.setAttribute("src", `assets/sounds/${soundName}.mp3`)
  }
  audio.paused ? audio.play() : audio.pause()
  audio.volume = 0.5
}

function toggleIcon(ct) {
  btn.forEach((el) => {
    el !== ct ? el.classList.remove("pause") : null
  })
  ct.classList.toggle("pause")
}

volumeControl.addEventListener("input", (e) => {
  audio.volume = Number(e.target.value)
})
