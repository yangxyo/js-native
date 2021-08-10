import "./win.css"

const win = function () {
  const winNode = document.createElement("div")
  winNode.className = "win"
  return winNode
}

document.body.appendChild(win())
