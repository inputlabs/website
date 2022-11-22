const root = document.querySelector(':root')
const cycle = 120
const cycleFixed = 10000
const seed = (new Date().getTime() / 1000) % cycle
const seedFixed = 5000

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
  root.style.setProperty('--seed', `-${rainbowGet() ? seed : seedFixed}s`)
  root.style.setProperty('--cycle', `${rainbowGet() ? cycle : cycleFixed}s`)
}

rainbowUpdate()


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
