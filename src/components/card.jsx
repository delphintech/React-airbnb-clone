function Card(props) {
  const details = props.details
  console.log(details)
  let badge
  if (details.openSpots === 0) {
    badge = "SOLD OUT"
  } else if (details.location === "Online") {
    badge = "ONLINE"
  }

  return (
    <div className="card">
      <img src={`src/assets/${details.coverImg}`} alt="card photo" className="card-img" />
      {badge && <span className="status">{badge}</span>}
      <div className="card-text">
        <span>
          <img src="src/assets/star.png" alt="star" className="star" />
          {details.stats.rating} <span className="grey">({details.stats.reviewCount}) · {details.location}</span>
        </span>
        <span>{details.title}</span>
        <span><strong>From {details.price}$</strong> / person</span>
      </div>
    </div>
  )
}

export default Card
// img, openSpots, rating, reviewCount, country, title, price
