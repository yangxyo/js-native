import imagesName from "../data/imagesName.js"
import "./imgs.css"

const createImg = function () {
  const img = document.createElement("img")
  img.className = "img"
  img.src = require(`../images/${imagesName[0]}`)
  img.onclick = function () {
    img.src = require(`../images/${
      imagesName[Math.floor(Math.random() * imagesName.length)]
    }`)
  }
  return img
}

document.body.appendChild(createImg())
