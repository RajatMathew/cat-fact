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
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const [lerror, lsetError] = useState(null);
  const [lisLoaded, lsetIsLoaded] = useState(false);
  const [litems, lsetItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then(
        (result) => {
          lsetIsLoaded(true);
          lsetItems(result);
        },

        (error) => {
          lsetIsLoaded(true);
          lsetError(error);
        }
      );
  }, []);

  return (
    <div>
      <h1>Here's a random cat fact</h1>
      <p>{items.fact}</p>
      <br />
      <p>The above sentence contains {items.length} characters.</p>
      <p>{litems.madeby}</p>
    </div>
  );
}
