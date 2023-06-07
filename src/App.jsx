
import Navbar from "./components/navbar"
import Text from "./components/text"
import Pics from "./components/pics"
import Card from "./components/card"
import data from "./data"

function App() {
  const cards = data.map((lesson) =>
    <Card
      img={lesson.coverImg}
      status="sold out"
      rating={lesson.stats.rating}
      reviewCount={lesson.stats.reviewCount}
      country={lesson.location}
      title={lesson.title}
      price={lesson.price}
    />
  )

  return (
    <>
      <Navbar />
      <div className="content">
        <Pics />
        <Text />
        <div className="cards">{cards}</div>
      </div>
    </>
  )
}

export default App
