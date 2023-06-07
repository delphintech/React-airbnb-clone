
import Navbar from "./components/navbar"
import Text from "./components/text"
import Pics from "./components/pics"
import Card from "./components/card"

function App() {

  return (
    <>
      <Navbar />
      <div className="content">
        <Pics />
        <Text />
        <Card
          img="image_12"
          status="sold out"
          rating={5.0}
          reviewCount={6}
          country="USA"
          title="Life lesson with Katy Zafares"
          price={136}
        />
      </div>
    </>
  )
}

export default App
