document.getElementById('year').textContent = new Date().getFullYear()

const topNav = document.getElementById('topNav')
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) topNav.classList.add('scrolled')
  else topNav.classList.remove('scrolled')
})

const slides = Array.from(document.querySelectorAll('.slide'))
const dotsWrap = document.getElementById('dots')
const prev = document.getElementById('prevSlide')
const next = document.getElementById('nextSlide')
let idx = 0

function renderDots() {
  dotsWrap.innerHTML = slides
    .map((_, i) => `<button class="dot ${i === idx ? 'active' : ''}" data-i="${i}" aria-label="Go to slide ${i + 1}"></button>`)
    .join('')
  dotsWrap.querySelectorAll('.dot').forEach((dot) => {
    dot.addEventListener('click', () => {
      idx = Number(dot.dataset.i)
      show()
    })
  })
}

function show() {
  slides.forEach((s, i) => s.classList.toggle('active', i === idx))
  renderDots()
}

prev.addEventListener('click', () => {
  idx = (idx - 1 + slides.length) % slides.length
  show()
})

next.addEventListener('click', () => {
  idx = (idx + 1) % slides.length
  show()
})

setInterval(() => {
  idx = (idx + 1) % slides.length
  show()
}, 5000)

show()

const leadForm = document.getElementById('leadForm')
const formSuccess = document.getElementById('formSuccess')
leadForm.addEventListener('submit', (e) => {
  e.preventDefault()
  formSuccess.classList.add('show')
  leadForm.reset()
  setTimeout(() => formSuccess.classList.remove('show'), 4000)
})
