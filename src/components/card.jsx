function Card({img, status, rating, reviewCount, country, title, price}) {

  return (
    <div className="card">
      <img src={`src/assets/${img}`} alt="card photo" className="card-img" />
      <span className="status">{status.toUpperCase()}</span>
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
