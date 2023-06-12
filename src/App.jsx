
import Navbar from "./components/navbar"
import Text from "./components/text"
import Pics from "./components/pics"
import Card from "./components/card"
import data from "./data"

function App() {
  const cards = data.map((lesson) =>
    <Card
      key={lesson.id}
      details={lesson}
    />
  )

  return (
    <>
      <Navbar />
      <div className="content">
        <Pics />
        <Text />
        <section className="cards">{cards}</section>
      </div>
    </>
  )
}

export default App
