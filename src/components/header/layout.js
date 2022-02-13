import React, { useEffect, useState } from "react";

import Header from "./Header";

function Layout() {
  const [whiteHeader, setWhiteHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setWhiteHeader(true);
      } else {
        setWhiteHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <Header white={whiteHeader} />
  ) 
}

export default Layout;
