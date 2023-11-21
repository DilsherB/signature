import Title from "../components/Title"

const RandomColor = () => {
  
  const randomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + color;
  }

  const getRandomColor = (e) => {
    const color = randomColor();
    document.body.style.backgroundColor = color;
    document.body.style.color = color+1;
    e.target.style.backgroundColor = randomColor()
  }
  return (
    <div>
      <Title text={"Randome Color Generation"} classes={"title"}/>
      <div style={{display: "flex", justifyContent: "center", gap: "5rem"}}>
        <button className="btnStyle" onClick={getRandomColor}>RANDOM COLOR</button>
      </div>
    </div>
  )
}

export default RandomColor