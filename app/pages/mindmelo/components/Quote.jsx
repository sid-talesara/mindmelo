"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import loading from "../../../../public/loading-light.gif";

const Quote = () => {
  const [quoteData, setQuoteData] = useState([{}]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const url = "https://api.quotable.io/random";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuoteData(data);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoader(false);
        setQuoteData({
          content:
            "The people who are crazy enough to think they can change the world are the ones who do.",
          author: "Steve Jobs",
        });
      });
  }, []);

  return (
    <>
      {loader ? (
        <Image
          src={loading}
          alt="weather-icon"
          width={30}
          height={30}
          quality={100}
          className="quote-loader"
        />
      ) : (
        <div className="quote-wrapper">
          <p className="quote">{quoteData.content}</p>
          <p className="quote-author">~ {quoteData && quoteData.author}</p>
        </div>
      )}
    </>
  );
};

export default Quote;
