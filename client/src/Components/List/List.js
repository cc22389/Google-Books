import React from "react";
import "./List.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}












// import React, { useState, useEffect } from "react";
// import "./List.css";

// function List(props) {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [originalItems, setOriginalItems] = useState([]);

//     useEffect(() => {
//         fetch("https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyCfYJ5d8U-G0ZRTpZxJUlfHDM2Q9tvCgx8")
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     setIsLoaded(true);
//                     setOriginalItems({ books: result.items });
//                 },
//                 (error) => {
//                     setIsLoaded(true);
//                     setError(error);
//                 }
//             )
//     }, []);


//     // Filter by search
//     let itemsToDisplay = originalItems.filter(i => i.volumeInfo.title.includes(props.filterString) || i.volumeInfo.author.includes(props.filterString));

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//         return <div>Loading...</div>;
//     } else {
//         return (
//             <div>
//                 {itemsToDisplay.map((item, index) => {
//                     return (
//                         <div>
//                             <div key={index}>
//                                 <img src={item.volumeInfo.imageLinks.thumbnail} alt="Thumbnail" />
//                             </div>
//                             <li>{item.volumeInfo.title}</li>
//                             <li>{item.volumeInfo.authors}</li>
//                             <li>{item.volumeInfo.description}</li>
//                             <li>{item.selfLink}</li>
//                         </div>
//                     )
//                 })}
//             </div>
//         );

//     }
// }

//     export default List;

//     // export function Col({ size, children }) {
//     //     return (
//     //       <div
//     //         className={size
//     //           .split(" ")
//     //           .map(size => "col-" + size)
//     //           .join(" ")}
//     //       >
//     //         {children}
//     //       </div>