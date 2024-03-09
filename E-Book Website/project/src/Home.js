// Home.js

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from './Navbar';
import Carousel from './Carousel';
import ClickableImage from './ClickableImage';  
import './Home.css';

const Home = () => {
  const featuredItems = [
    { id: 1, title: 'Ürün 1', description: <ClickableImage />, imageUrl:'https://www.edademirciart.com/wp-content/uploads/2021/05/Kubizm-Akrilik-Boya-Calismasi-1-768x1024.jpg'  },
    { id: 2, title: 'Ürün 2', description: <ClickableImage />, imageUrl: 'https://i.ytimg.com/vi/vxUMYdj8SIE/maxresdefault.jpg' },
    { id: 3, title: 'Ürün 3', description: <ClickableImage />, imageUrl: 'https://static-cse.canva.com/blob/1275297/tools-feature_crop-image_hero_mobile_2x.jpg' },
    { id: 4, title: 'Ürün 4', description: <ClickableImage />, imageUrl: 'https://img-s3.onedio.com/id-541084251e19448517acb112/rev-0/w-600/h-581/f-jpg/s-db0521f5d4f7462dd40583a1093183a0e29ae780.jpg' },
    { id: 5, title: 'Ürün 5', description: <ClickableImage />, imageUrl: 'https://cdn.dsmcdn.com/ty5/product/media/images/20200629/10/3604149/75500577/1/1_org_zoom.jpg' },
    { id: 6, title: 'Ürün 6', description: <ClickableImage />, imageUrl: 'https://enstitu.ibb.istanbul/files/ismekOrg/Image/img_brans/brans_yenisitegaleri/temel-resim-eritimi/3.jpg' },
    { id: 7, title: 'Ürün 7', description: <ClickableImage />, imageUrl: 'https://www.tabloshop.com/image/cache/data/urun/ataturk-tablolari/ATA-25__model_3-1000x1000.jpg' },
  ];

  useEffect(() => {
    fetchBooks();

    async function fetchBooks() {
      try {
        const response = await fetch("http://localhost:5000/get_books");
        const data = await response.json();
    
        console.log(data); 
    
        if (data.success) {
          const books = data.books.slice(0, 20);
          displayBooks(books);
        } else {
          console.error("Failed to fetch books:", data.message);
        }
      } catch (error) {
        console.error("Error fetching books:", error.message);
      }
    }

// Kitapları göstermek için kullanılan fonksiyon
function displayBooks(books) {
  const bookListElement = document.getElementById("bookList");

  bookListElement.innerHTML = "";

  books.forEach((book) => {
    const bookItem = document.createElement("div");

    const imageElement = document.createElement("img");
    if (book.coverImage) {
      imageElement.src = `data:image/jpeg;base64, ${book.coverImage}`;
      imageElement.alt = "Book Cover";
      imageElement.style.width = "100px"; 
    } else {
      imageElement.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU";
      imageElement.alt = "No Image Available";
      imageElement.style.width = "100px"; 
      imageElement.classList.add("no-image");
    }

    const titleElement = document.createElement("strong");
    titleElement.innerHTML = `Title: ${book.title}, `;

    const authorElement = document.createElement("strong");
    authorElement.innerHTML = `Author: ${book.author}`;

    bookItem.appendChild(imageElement);
    bookItem.appendChild(titleElement);
    bookItem.appendChild(authorElement);

    bookListElement.appendChild(bookItem);
  });
}

// Sayfa yüklendiğinde kitapları göster
document.addEventListener("DOMContentLoaded", () => {
  displayBooks();
});

  
  }, []);

  const apiUrl = 'http://localhost:5000/add_books';  
console.log("Hellooooo")
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <h2 className="h2style">Highlights</h2>
        <Carousel items={featuredItems} />
        <h2 className="h22style">Categories</h2>

        <div className="category-container">
          <div className="category">
            
            <h3>Python</h3>
            <div className="category-images">    
                    <div className="home-container">
           
                    <div id="bookList"></div> 
            </div>
            </div>

            <div className="category-images">
            <ClickableImage />
            <ClickableImage />
            <ClickableImage />
            </div>


          </div>

          <div className="category">
            <h3>Oyun</h3>
            
            <div className="category-images">
            <div id="bookList"></div> 

            </div>

            <div className="category-images">
            <ClickableImage />
            <ClickableImage />
            <ClickableImage />
            </div>
   

          </div>

          <div className="category">
            <h3>Eğlence</h3>
            <div className="category-images">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
            </div>

            <div className="category-images">
            <ClickableImage />
            <ClickableImage />
            <ClickableImage />
            </div>


          </div>

          
        </div>

        <Link to="/kategory" className="more-categories-link">
          Please click for more category options
        </Link>

        
      </div>

      
      <div>
    </div>

    </div>
  );
};

export default Home;
