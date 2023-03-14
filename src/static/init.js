const root = document.querySelector(':root')
const cycle = 90
const seed = (new Date().getTime() / 1000) % cycle
const start = new Date().getTime()
const seedStatic = 45
let logo_ext = 'apng'

const rainbowGet = () => {
  const value = localStorage.getItem('rainbow')
  if (value === 'false') return false;
  return true  // true or undefined.
}

const rainbowSet = (value) => {
  localStorage.setItem('rainbow', value)
}

const rainbowToggle = () => {
  rainbowSet(!rainbowGet())
  rainbowUpdate()
}

const rainbowUpdate = () => {
  const animations = document.getAnimations()
  const logo = document.querySelector('header div.logo img')
  const apng = '/static/img/logo.apng'
  const png = '/static/img/logo.png'
  if (rainbowGet()) {
    root.style.setProperty('--anim-state', 'running')
    root.style.setProperty('--seed', `-${seed}s`)
    if (logo_ext != 'apng') {
      logo.setAttribute('src', apng)
      logo_ext = 'apng'
    }
    // for (const animation of animations) {
    //   animation.currentTime = start
    // }
  } else {
    root.style.setProperty('--anim-state', 'paused')
    root.style.setProperty('--seed', `-${seedStatic}s`)
    if (logo_ext != 'png') {
      logo.setAttribute('src', png)
      logo_ext = 'ang'
    }
    for (const animation of animations) {
      animation.currentTime = 0
    }
  }
}

rainbowUpdate()

// Bind events
window.addEventListener('DOMContentLoaded', () => {
  let toggleBtns = document.querySelectorAll('[data-toggleanimations]')
  for  (let toggleBtn of toggleBtns) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault()
      rainbowToggle()
    })
  }
});

// Latex formulas.
MathJax = {
  options: {
    enableMenu: false,
  },
  tex: {
    inlineMath: [['$', '$']],
    displayMath: [['$$', '$$']],
    processRefs: false,
  },
  svg: {
    fontCache: 'global'
  }
}
