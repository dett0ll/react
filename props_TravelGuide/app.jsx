//where we render our code. here we will define values
import Header from "./header.jsx"; //It will import the Header function in Header. For convienece we kept import name same as function
import Blog from "./blog.jsx";
export default function App() {
  return (
    <>
      <Header />
      <Blog country="JAPAN" place = 'Mount Fuji' details = 'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign' date = '12th dec - 21st dec'/>
    </>
  ); //it will output what the header function retunr in header.jsx
}
