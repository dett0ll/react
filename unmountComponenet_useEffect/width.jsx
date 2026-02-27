import React from "react";
export default function Width() {
  let [windowidth, setwindowwidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    function watchWindowsWidth() {
      console.log("resize");
      setwindowwidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWindowsWidth);
    return function () {
      window.removeEventListener("resize", watchWindowsWidth);
    };
  },[]);
  return (
    <>
      <>Window Width :{windowidth}</>
    </>
  );
}
