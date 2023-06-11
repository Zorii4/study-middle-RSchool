import './index.css'

const btn = document.querySelectorAll(".weather-btn")
const volumeControl = document.getElementById("volume") as HTMLInputElement
const audio = document.getElementById("audio") as HTMLAudioElement
const bg = document.querySelector(".bg") as HTMLElement

enum Weather {
  SUMMER = "summer",
  RAIN = "rain",
  WINTER = "winter",
}

btn.forEach((el) =>
  el.addEventListener("click", (e: Event) => {
    e.stopPropagation()

    const currentTarget = e.currentTarget as HTMLElement

    if (currentTarget.id === Weather.SUMMER) {
      playSound(Weather.SUMMER)
      toggleIcon(currentTarget)
      bg.style.background = "url(assets/summer-bg.jpg)"
    }

    if (currentTarget.id === Weather.RAIN) {
      playSound(Weather.RAIN)
      toggleIcon(currentTarget)
      bg.style.background = "url(assets/rainy-bg.jpg)"
    }

    if (currentTarget.id === Weather.WINTER) {
      playSound(Weather.WINTER)
      toggleIcon(currentTarget)
      bg.style.background = "url(assets/winter-bg.jpg)"
    }
  })
)

function playSound(soundName: string): void {
  if (audio.getAttribute("src") != `assets/sounds/${soundName}.mp3`) {
    audio.setAttribute("src", `assets/sounds/${soundName}.mp3`)
  }
  audio.paused ? audio.play() : audio.pause()
  audio.volume = 0.5
}

function toggleIcon(ct: HTMLElement) {
  btn.forEach((el) => {
    el !== ct ? el.classList.remove("pause") : null
  })
  ct.classList.toggle("pause")
}

volumeControl.addEventListener("input", (e) => {
  audio.volume = Number((e.target as HTMLInputElement).value)
})
