// const mountain = document.getElementsByClassName('mountain')
// const fields = document.getElementsByClassName('fields')

// fields.addEventListener('mouseover', () => {
//   fields.style.backgroundImage = `url('img/nature/carl-schlabach-ogBbjnD_caQ-unsplash.jpeg')`
// })

function changeBg() {
  const images = ["url('img/nature/ben-vaughn-Rfuu81QPuhM-unsplash.jpeg')", "url('img/nature/carl-schlabach-ogBbjnD_caQ-unsplash.jpeg')", "url('img/nature/cinthia-aguilar-bwLTlE9aZIw-unsplash.jpeg')", "url('img/nature/elijah-hiett-I_UU4aSPDlg-unsplash.jpeg')", "url('img/nature/jamie-fenn-G5olxxSuHcs-unsplash.jpeg')", "url('img/nature/joshua-sortino-71vAb1FXB6g-unsplash.jpeg')", "url('img/nature/mohamed-nohassi-odxB5oIG_iA-unsplash.jpeg')", "url('img/nature/srinivasan-venkataraman-9NmYCjfBGp0-unsplash.jpeg')", "url('img/nature/tom-gainor-ZqLeQDjY6fY-unsplash.jpeg')"]

  const section = document.querySelector('section')
  const bg = images[Math.floor(Math.random() * images.length)]

  console.log(bg)
  section.style.backgroundImage = bg
}

setInterval(changeBg, 25000)

function showContent() {
  var temp = document.getElementsByTagName('template')[0]
  var clon = temp.content.cloneNode(true)
  document.body.appendChild(clon)
}
