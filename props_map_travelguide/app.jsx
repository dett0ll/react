import Blog from "./blog.jsx";
import Data from "./data.jsx";
export default function Final() {
  const TravelElem = Data.map((data) => {
    return (
      <Blog
        img={data.img}
        title={data.title}
        country={data.country}
        maps={data.maps}
        dates={data.dates}
        text={data.text}
      />
    );
  });
  return <>{TravelElem}</>;
}
