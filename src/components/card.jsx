function Card() {

  return (
    <div className="card">
      <img src="src/assets/image 12.png" alt="card photo" className="card-img" />
      <span className="status">SOLD OUT</span>
      <div className="card-text">
        <span>
          <img src="src/assets/star.png" alt="star" className="star" />
          5.0 <span className="grey">(6) · USA</span>
        </span>
        <span>Life lessons with Katie Zaferes</span>
        <span><strong>From $136</strong> / person</span>
      </div>
    </div>
  )
}

export default Card
