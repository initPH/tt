const container = document.getElementById('photo_box')
for (let i = 1;i <= 11; i++) {
  let img = document.createElement('img')
  img.setAttribute('src', `image/${ i }.webp`)
  container.appendChild(img)
}