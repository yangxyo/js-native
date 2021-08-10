import "./card.css"

const card = function (text, color, border) {
  const cardDiv = document.createElement("div")
  cardDiv.className = "card"
  cardDiv.append(text)
  cardDiv.style.backgroundColor = color
  cardDiv.style.border = border
  return cardDiv
}

const cards = function () {
  const cards = document.createElement("div")
  const CARDS_DATA = [
    { text: "我是绿色的块块", color: "green", border: "1px solid black" },
    { text: "我是蓝色的块块", color: "blue", border: "1px solid black" },
    { text: "我是红色的块块", color: "red", border: "1px solid black" }
  ]
  CARDS_DATA.forEach(item => {
    cards.appendChild(card(item.text, item.color, item.border))
  })
  return cards
}

document.body.appendChild(cards())
