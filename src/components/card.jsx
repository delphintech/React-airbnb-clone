function Card({img, openSpots, rating, reviewCount, country, title, price}) {
  let badge
  if (openSpots === 0) {
    badge = "SOLD OUT"
  } else if (country === "Online") {
    badge = "ONLINE"
  }

  return (
    <div className="card">
      <img src={`src/assets/${img}`} alt="card photo" className="card-img" />
      {badge && <span className="status">{badge}</span>}
      <div className="card-text">
        <span>
          <img src="src/assets/star.png" alt="star" className="star" />
          {rating} <span className="grey">({reviewCount}) · {country}</span>
        </span>
        <span>{title}</span>
        <span><strong>From {price}$</strong> / person</span>
      </div>
    </div>
  )
}

export default Card
