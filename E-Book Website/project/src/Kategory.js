// Kategory.js

import React from 'react';
import Navbar from './Navbar';
import './Kategory.css';
import ClickableImage from './ClickableImage';  


const Kategory = () => {
  const scrollToCategory = (categoryName) => {
    const element = document.getElementById(categoryName);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="kkategory-container">
        <h2 className="kkategory-title">Categories</h2>
        <div className="ccategory-container">
          <div className="sidebar">
            <ul>
              <li onClick={() => scrollToCategory('Roman, Hikaye ve Edebiyat')}>Roman, Hikaye ve Edebiyat</li>
              <li onClick={() => scrollToCategory('Eğitim Kitabı')}>Eğitim Kitabı</li>
              <li onClick={() => scrollToCategory('Kişisel Gelişim & Psikoloji')}>Kişisel Gelişim & Psikoloji</li>
              <li onClick={() => scrollToCategory('Çocuk ve Ebeveyn Kitapları')}>Çocuk ve Ebeveyn Kitapları</li>
              <li onClick={() => scrollToCategory('Hobi, Sanat ve Akademik')}>Hobi, Sanat ve Akademik</li>
              <li onClick={() => scrollToCategory('Tarih')}>Tarih</li>
              <li onClick={() => scrollToCategory('Çizgi Roman, Dergi ve Gazete')}>Çizgi Roman, Dergi ve Gazete</li>
            </ul>
          </div>
          <div className="content">
            <div id="Roman, Hikaye ve Edebiyat" className="ccategory">
              <h3>Roman, Hikaye ve Edebiyat</h3>
              <div className="ccategory-images">
                <div className="image-row">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                </div>
                
              </div>

            <div className="ccategory-images">
            <ClickableImage />
            <ClickableImage />
            <ClickableImage />
            </div>

              <div className="ccategory-images">
                <div className="image-row">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                </div>         
              </div> 
             
              <div className="ccategory-images">
            <ClickableImage />
            <ClickableImage />
            <ClickableImage />
            </div>
            </div>

           



            <div id="Eğitim Kitabı" className="ccategory">
              <h3>Eğitim Kitabı</h3>
              <div className="ccategory-images">
                <div className="image-row">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                </div>
                
              </div>
 
              <div className="ccategory-images">
            <ClickableImage />
            <ClickableImage />
            <ClickableImage />
            </div>


              <div className="ccategory-images">
                <div className="image-row">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                </div>         
              </div> 
              <div className="ccategory-images">
            <ClickableImage />
            <ClickableImage />
            <ClickableImage />
            </div>

            </div>

          




            <div id="Kişisel Gelişim & Psikoloji" className="ccategory">
              <h3>Kişisel Gelişim & Psikoloji</h3>
              <div className="ccategory-images">
                <div className="image-row">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                </div>
              </div>
              <div className="ccategory-images">
            <ClickableImage />
            <ClickableImage />
            <ClickableImage />
            </div>

           
              <div className="ccategory-images">
                <div className="image-row">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                </div>         
              </div> 
              <div className="ccategory-images">
            <ClickableImage />
            <ClickableImage />
            <ClickableImage />
            </div>

            </div>


            <div id="Çocuk ve Ebeveyn Kitapları" className="ccategory">
              <h3>Çocuk ve Ebeveyn Kitapları</h3>
              <div className="ccategory-images">
                <div className="image-row">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                </div>
              </div>
              <div className="ccategory-images">
            <ClickableImage />
            <ClickableImage />
            <ClickableImage />
            </div>


              <div className="ccategory-images">
                <div className="image-row">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                </div>         
              </div> 
              <div className="ccategory-images">
            <ClickableImage />
            <ClickableImage />
            <ClickableImage />
            </div>

            </div>




            <div id="Hobi, Sanat ve Akademik" className="ccategory">
              <h3>Hobi, Sanat ve Akademik</h3>
              <div className="ccategory-images">
                <div className="image-row">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                </div>
              </div>
              <div className="ccategory-images">
            <ClickableImage />
            <ClickableImage />
            <ClickableImage />
            </div>


              <div className="ccategory-images">
                <div className="image-row">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                </div>         
              </div> 
              <div className="ccategory-images">
            <ClickableImage />
            <ClickableImage />
            <ClickableImage />
            </div>

            </div>



            <div id="Tarih" className="ccategory">
              <h3>Tarih</h3>
              <div className="ccategory-images">
                <div className="image-row">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                </div>
              </div>
              <div className="ccategory-images">
            <ClickableImage />
            <ClickableImage />
            <ClickableImage />
            </div>

              
              <div className="ccategory-images">
                <div className="image-row">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                </div>         
              </div> 
              <div className="ccategory-images">
            <ClickableImage />
            <ClickableImage />
            <ClickableImage />
            </div>


            </div>





            <div id="Çizgi Roman, Dergi ve Gazete" className="ccategory">
              <h3>Çizgi Roman, Dergi ve Gazete</h3>
              <div className="ccategory-images">
                <div className="image-row">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                </div>
              </div>
              <div className="ccategory-images">
            <ClickableImage />
            <ClickableImage />
            <ClickableImage />
            </div>

              <div className="ccategory-images">
                <div className="image-row">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DIl07aUAFrYFHT43ZKlEMjbuG3TAwDkarwOft1IzXelaXG4OPJ5s2lf8ZzxcacfFT9U&usqp=CAU" alt="Game 1" />
                </div>         
              </div> 
              <div className="ccategory-images">
            <ClickableImage />
            <ClickableImage />
            <ClickableImage />
            </div>

            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Kategory;
