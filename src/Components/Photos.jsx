/*

Problem: Fetching Photos from API

Use the endpoint https://jsonplaceholder.typicode.com/photos to fetch a list of photos.
Display the list of photos in your React component.
Implement error handling for the API request.
Feel free to use either the fetch API or a library like Axios for making the API request. 
Utilize the useEffect hook for fetching data when the component mounts.

Ensure that you handle loading states appropriately and display an error message if the API
request fails.

*/

import { useEffect, useState } from "react";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [apiRequestFailError, setApiRequestFailError] = useState("");

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        setApiRequestFailError("Something went wrong. Please try again later.");
        console.error("Failed to fetch data.", error);
      }
    };
    fetchPhotos();
  }, []);

  return (
    <div>
      {apiRequestFailError.length > 0 ? (
        <h1>{apiRequestFailError}</h1>
      ) : photos.length > 0 ? (
        photos.map((photo) => {
          return (
            <ul key={photo.id}>
              <li>
                <img src={photo.url} alt={photo.title} />
              </li>
            </ul>
          );
        })
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Photos;
