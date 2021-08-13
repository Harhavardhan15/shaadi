import "./styles.css";
import useSearch from "./useSearch";
import { useState, useRef, useCallback } from "react";

export default function Shaadi() {
  // const [searchString, setSearchString] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  // function handleSearch(e) {
  //   // setSearchString(e.target.value);
  //   setPageNumber(e.target.value);
  // }
  const { images, loading, hasMore, error } = useSearch(pageNumber);
  // console.log(pageNumber);
  const observer = useRef();
  const lastElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("Visible");
          setPageNumber((prevPageNumner) => prevPageNumner + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="App">
      <div className="banner">
        <img
          alt="Shaadi logo"
          className="bannerimg"
          src="https://img2.shaadi.com/assests/2020/images/pressure-hatao-banner-v1.jpg"
        />
        <img
          alt="Shaadi logo"
          className="shaadilogo"
          src="https://img2.shaadi.com/assests/2016/images/home-logo.png"
        />

        <div className="bannerheader">Your story is waiting to happen!</div>
      </div>
      <div className="shaadiheader">Time to find your Soulmate !!!</div>
      {/* <input type="text" onChange={(e) => handleSearch(e)} /> */}
      <div className="searchContainer">
        {images.map((item, index) => {
          if (images.length === index + 1) {
            return (
              <div ref={lastElement} key={index} className="card">
                <div className="imgConainer">
                  <img
                    alt="UserImage"
                    className="img"
                    src={item.thumbnailUrl}
                  />
                  <img
                    alt="Shaadi logo"
                    className="shaadi"
                    src="https://img2.shaadi.com/assests/2016/images/home-logo.png"
                  />
                </div>
                <div className="title">
                  <h3>{item.title}</h3>
                  <p>{item.id}</p>
                  <p>Category: {item.albumId}</p>
                  <button className="view">View Profile</button>
                </div>
              </div>
            );
          } else {
            return (
              <div key={index} className="card">
                <div className="imgConainer">
                  <img
                    alt="UserImage"
                    className="img"
                    src={item.thumbnailUrl}
                  />
                  <img
                    alt="Shaadi logo"
                    className="shaadi"
                    src="https://img2.shaadi.com/assests/2016/images/home-logo.png"
                  />
                </div>
                <div className="title">
                  <h3>{item.title}</h3>
                  <p>Id: {item.id}</p>
                  <p>Category: {item.albumId}</p>
                  <button className="view">View Profile</button>
                </div>
              </div>
            );
          }
        })}
      </div>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: "100px",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            width: "100%",
            background: "teal",
            zIndex: "99",
            padding: "10px",
            borderRadius: "10px"
          }}
        >
          Loading...
        </div>
      )}
      {error && <div>Error !!!</div>}
    </div>
  );
}
