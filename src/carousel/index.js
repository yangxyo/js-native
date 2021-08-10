import imagesName from "../data/imagesName.js"
import "./carousel.css"

const container = function (nodes) {
  const containerNode = document.createElement("div")
  containerNode.className = "container"
  containerNode.append(...nodes)
  return containerNode
}

const img = function (src) {
  const imgNode = document.createElement("img")
  imgNode.className = "c-img"
  imgNode.src = require(`../images/${src}`)
  imgNode.alt = "图片"
  return imgNode
}

const button = function (direction) {
  const buttonNode = document.createElement("button")
  if (direction === "left") {
    buttonNode.append("<")
    buttonNode.className = "c-button left-button"
  } else {
    buttonNode.append(">")
    buttonNode.className = "c-button right-button"
  }
  return buttonNode
}

const carousel = function () {
  const imageNodes = new Array(imagesName.length)
    .fill("")
    .map((_, index) => img(imagesName[index]))
  const carouselNode = container([
    button("left"),
    button("right"),
    ...imageNodes
  ])
  return carouselNode
}

function enter(index) {
  const imageNode = document.querySelectorAll(".c-img")[index]
  imageNode.style.transition = "8s linear"
  imageNode.style.transform = "translateX(100vw)"
}

function exit(index) {
  const imageNode = document.querySelectorAll(".c-img")[index]
  imageNode.style.transition = "8s linear"
  imageNode.style.transform = "translateX(200vw)"
}

function recover(index) {
  const imageNode = document.querySelectorAll(".c-img")[index]
  imageNode.style.transition = "0s"
  imageNode.style.transform = "translateX(-102vw)"
}

function action() {
  const len = imagesName.length
  let index = 0
  let nextIndex = 1
  let preIndex = len - 1
  function actionOnce() {
    enter(nextIndex)
    exit(index)
    recover(preIndex)
    nextIndex = nextIndex === len - 1 ? 0 : nextIndex + 1
    index = index === len - 1 ? 0 : index + 1
    preIndex = preIndex === len - 1 ? 0 : preIndex + 1
  }
  actionOnce()
  setInterval(() => {
    actionOnce()
  }, 4000)
}

document.body.appendChild(carousel())

setTimeout(() => {
  action()
}, 1000)
