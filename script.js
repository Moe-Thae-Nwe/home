const { useState } = React;
const { createRoot } = ReactDOM;

const root = createRoot(document.getElementById("root"))

const cardInfo = [
  {
    title: "ZUN Music Generator",
    link: "http://moe-thae-nwe.github.io/ZUN-music-generator"
  },
  {
    title: "Palindrome Checker",
    link: "http://moe-thae-nwe.github.io/Palindrome-checker"
  },
  {
    title: "Roman Numeral Converter",
    link: "http://moe-thae-nwe.github.io/roman-numeral-converter"
  },
  {
    title: "Quote Generator",
    link: "http://moe-thae-nwe.github.io/quote-generator"
  },
  {
    title: "Markdown Previewer",
    link: "http://moe-thae-nwe.github.io/markdown-previewer"
  },
  {
    title: "Calculator",
    link: "http://moe-thae-nwe.github.io/calculator"
  },
  {
    title: "Pomodoro Timer",
    link: "http://moe-thae-nwe.github.io/pomodoro-timer"
  }
]

function App() {
  const cards = cardInfo.map((card) => {
    return (
      <div>
        <a href = {card.link}><p>{card.title}</p></a>
      </div>
    );
  });
  return(
    <>
      {cards}
    </>
  )
}

root.render(<App/>)
