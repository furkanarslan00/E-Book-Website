// Bu örnek, uygulamanın çalıştığı bilgisayarın IP adresini ve portunu kullanıyor.
// Eğer uygulamanız farklı bir IP veya port üzerinde çalışıyorsa, uygun şekilde değiştirmelisiniz.

const apiUrl = 'http://localhost:3000/add_books';  // Flask uygulamanızın adresi
console.log("Hellooooo")
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
