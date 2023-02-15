const root = document.querySelector(':root')
const cycle = 120
const seed = (new Date().getTime() / 1000) % cycle

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
  if (! rainbowGet()) {
    root.classList.add('no-rainbow')
  } else {
    root.classList.remove('no-rainbow')
  }
  root.style.setProperty('--seed', `-${seed}s`)
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
