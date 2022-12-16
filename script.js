const line = document.querySelectorAll('.inner')
const block = document.querySelectorAll('.inner__block')

// // const square
window.addEventListener('keydown', (e) => {
  if (e.keyCode === 37) {
    const left = document.querySelector('.square')
    if (left.style.left === '0px') {
      left.style.left = '0px';
    } else {
      let leftCount = window.getComputedStyle(left).left
      left.style.left = `${parseInt(leftCount) - 26}px`
      console.log(left.style.right);
      console.log(left.style.left);
    }
  }
  if (e.keyCode === 39) {
    const left = document.querySelector('.square')
    if (left.style.left === '208px') {
      left.style.left = '208px';
    } else {
      let leftCount = window.getComputedStyle(left).left
      left.style.left = `${parseInt(leftCount) + 26}px`
      console.log(left.style.right);
      console.log(left.style.left);
    }
  }
})

// const tetris = () => {
//   const left = document.querySelector('.square')
//   let topCount = window.getComputedStyle(left).top
//   left.style.top = `${parseInt(topCount) + 26}px`
// }
// setInterval(() => {
//   // tetris()
// }, 700);

let i = 4
let j = 1
window.addEventListener('keydown', (e) => {
  if (e.keyCode === 37) {
    if (i < 1) {
      i = 0
    } else {
      i--
      console.log(i);
      block.forEach(item => {
        item.style.backgroundColor = 'blue'
      })
      block[10*(j-1)+i].style.backgroundColor = 'red'
      block[10*(j-1)+i +1].style.backgroundColor = 'red'
      block[10 * j + i].style.backgroundColor = 'red'
      block[10 * j + i + 1].style.backgroundColor = 'red'
    }
  }
  if (e.keyCode === 39) {
    if (i > 7) {
      i = 8
    } else {
      i++
      console.log(i);
      block.forEach(item => {
        item.style.backgroundColor = 'blue'
      })
      block[10*(j-1)+i].style.backgroundColor = 'red'
      block[10*(j-1)+i +1].style.backgroundColor = 'red'
      block[10 * j + i].style.backgroundColor = 'red'
      block[10 * j + i + 1].style.backgroundColor = 'red'
    }
  }
})
const square = () => {
  if (block[i] === null && block[i] === undefined) {
    console.log('gsdgfs');
  } else {
    block.forEach(item => {
      item.style.backgroundColor = 'blue'
    })
    block[10*(j-1)+i].style.backgroundColor = 'red'
    block[10*(j-1)+i +1].style.backgroundColor = 'red'
    block[10 * j + i].style.backgroundColor = 'red'
    block[10 * j + i + 1].style.backgroundColor = 'red'
    j++
    console.log(i);
  }
}
square()

let timerId = setTimeout(function tick() {
  square()
  timerId = setTimeout(tick, 800)
}, 800);