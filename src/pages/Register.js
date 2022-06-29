import React from "react";
import { useState, useEffect } from "react";

export default function Register() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);

          console.log(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  //   let x = fetch("http://localhost:4000/")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       //   console.log(result);
  //       return result;
  //     });

  return (
    <div>
      <h1>Here's a random cat fact</h1>
      <p>{items.fact}</p>
      <br />
      {/* <p>The above sentence contains {items.length} characters.</p>
      <p>{x.madeby}</p> */}
    </div>
  );
}
