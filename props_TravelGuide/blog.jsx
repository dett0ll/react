//here we will define props. because it is difficul to write html for all. values we will define in apps.jsx and here we will use props
// props will take values defined in app.jsx and place it here
export default function Blog(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img
          className="main-image"
          src="https://scrimba.com/links/travel-journal-japan-image-url"
          alt="Mount Fuji"
        />
      </div>
      <div className="info-container">
        <img src="/marker.png" alt="marker" />
        <span>{props.country}</span>
        <a href="https://www.google.com">View on Google Maps</a>
        <h2>{props.place}</h2>
        <p>{props.date}</p>
        <p>{props.details}</p>
      </div>
    </article>
  );
}
