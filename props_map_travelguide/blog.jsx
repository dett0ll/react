export default function Blog(props) {
  return (
    <>
      <article className="info">
        <div className="image-container">
          <img className="image" src={props.img.src} alt={props.img.alt} />
        </div>
        <div className="details">
          <div className="details1">
            <img src="/marker.png" alt="marker" />
            <p>{props.country}</p>
            <p>ViewonGoogleMaps{props.googleMapsLink}</p>
          </div>
          <span className="Title">{props.title}</span>
          <p>{props.dates}</p>
          <p>{props.text}</p>
        </div>
      </article>
    </>
  );
}
