from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import requests



app = Flask(__name__)
CORS(app)
google_books_api_key = "AIzaSyBbT2r7aeoJ85nvBDq6PGYclrcYj8sod50"
app.config['SQLALCHEMY_DATABASE_URI'] = 'mssql+pyodbc://sa:q@.\SQLEXPRESS/YourDatabase?driver=ODBC+Driver+17+for+SQL+Server'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'Users'
    userID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), nullable=False)

class Author(db.Model):
    __tablename__ = 'Authors'
    authorID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    firstName = db.Column(db.String(50), nullable=False)
    lastName = db.Column(db.String(50), nullable=False)

class Category(db.Model):
    __tablename__ = 'Categories'
    categoryID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    categoryName = db.Column(db.String(50), nullable=False)

class Book(db.Model):
    __tablename__ = 'Books'
    bookID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(100), nullable=False)
    authorID = db.Column(db.Integer, db.ForeignKey('Authors.authorID'))
    categoryID = db.Column(db.Integer, db.ForeignKey('Categories.categoryID'))
    price = db.Column(db.DECIMAL(10, 2), nullable=False)
    coverImage = db.Column(db.String(200)) 
    author = db.relationship('Author', backref='books')
    category = db.relationship('Category', backref='books')


class Cart(db.Model):
    __tablename__ = 'Cart'
    cartID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    userID = db.Column(db.Integer, db.ForeignKey('Users.userID'))
    bookID = db.Column(db.Integer, db.ForeignKey('Books.bookID'))
    quantity = db.Column(db.Integer, nullable=False)
    user = db.relationship('User', backref='cart')
    book = db.relationship('Book', backref='cart')

with app.app_context():
    db.create_all()

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    user = User.query.filter_by(username=username, password=password).first()

    if user:
        return jsonify({"success": True, "message": "Login successful"})
    else:
        return jsonify({"success": False, "message": "Invalid credentials"}), 401


# Kitapları çeken ve veritabanına ekleyen endpoint
@app.route("/add_books", methods=["GET"])
def add_books():
    api_url = f"https://www.googleapis.com/books/v1/volumes?q=fiction&key={google_books_api_key}"

    try:
        response = requests.get(api_url)
        data = response.json()

        for item in data.get("items", []):
            book_title = item.get("volumeInfo", {}).get("title", "")
            book_author = item.get("volumeInfo", {}).get("authors", ["Unknown"])[0]
            book_category = item.get("volumeInfo", {}).get("categories", ["Unknown"])[0]
            book_price = item.get("saleInfo", {}).get("retailPrice", {}).get("amount", 0.0)
            book_image_url = item.get("volumeInfo", {}).get("imageLinks", {}).get("thumbnail", "")

            # Yazarı veritabanına ekleyip ID'sini al
            author = Author.query.filter_by(firstName=book_author).first()
            if not author:
                author = Author(firstName=book_author, lastName="")
                db.session.add(author)
                db.session.commit()

            # Kategori varsa ekleyip ID'sini al, yoksa varsayılan kategori oluştur
            category = Category.query.filter_by(categoryName=book_category).first()
            if not category:
                category = Category(categoryName=book_category)
                db.session.add(category)
                db.session.commit()



            # Kitabı veritabanına ekleyip ID'sini al
            new_book = Book(title=book_title, authorID=author.authorID, categoryID=category.categoryID, price=book_price)
            db.session.add(new_book)
            db.session.commit()

     

        return jsonify({"success": True, "message": "Books added successfully"})
    except Exception as e:
        return jsonify({"success": False, "message": f"Error: {str(e)}"}), 500


@app.route("/get_books", methods=["GET"])
def get_books():
    try:
        #Veritabanındaki tüm kitapları getir
        books = Book.query.all()

        #Kitapları bookliste gönder
        book_list = [{"title": book.title, "author": book.author.firstName + " " + book.author.lastName} for book in books]

        return jsonify({"success": True, "books": book_list})
    except Exception as e:
        return jsonify({"success": False, "message": f"Error: {str(e)}"}), 500

@app.route("/view_books", methods=["GET"])
def view_books():
    return jsonify({"success": True, "message": "Use /get_books endpoint to fetch books"})



if __name__ == "__main__":
    app.run(debug=True)
