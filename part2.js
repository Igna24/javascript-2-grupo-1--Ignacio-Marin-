import Bookstore from './modules/Bookstore.js';
import Book from './modules/Book.js';
import Comic from './modules/Comic.js';

(function () {
  const bookstore1 = new Bookstore('Libreria', 'SJ');
  const sidebar = document.getElementById('sidebar');
  const menu = ['Show books', 'Show comics', 'Add book', 'Add comic'];

  const initialize = () => {
    printBookstoreName();
    displayMenu();
    menuFunctionality();
  }

  const printBookstoreName = () => {
    sidebar.insertAdjacentHTML(
      'afterbegin',
      `<h2 class="title">
      ${bookstore1.getName}
      </h2>`
    )
  }

  const createMenu = () => {
    let menuHtml = '';
    menu.forEach((elem, index) => {
      menuHtml += `<li class="menu-option"> 
        <a href="#" id="${index}">${elem}</a>
      </li>`
    });
    return menuHtml;
  }

  const displayMenu = () => {
    sidebar.insertAdjacentHTML(
      'beforeend',
      `<ul class="menu">${createMenu()}</ul>`
    );
  }

  const menuFunctionality = () => {
    const items = document.querySelectorAll('.menu-option');
    items.forEach((item) => {
      item.addEventListener('click', (event) => {

        event.preventDefault();

        const { id } = event.target

        switch (id) {
          case '0':
            showBooks();
            break;
          case '1':
            showComics();
            break;
          case '2':
            addBooks();
            break;
          case '3':
            addComics();
            break;
          default:
            console.log('Esta opcion no existe');
            break;
        }
      });
    });
  }

  const addBooks = () => {
    const title = prompt('Title');
    const autor = prompt('Autor');
    const price = prompt('Price');
    const stock = prompt('Stock');
    const year = prompt('Year');

    if (title && autor && !isNaN(price) && !isNaN(stock) && !isNaN(year)) {
      const book = new Book(title, autor, price, stock, year);

      const sameBook = bookstore1.getBooks.find(b => b.title === title);
      if (sameBook) {
        alert('El libro ya existe');
        return;
      }
      bookstore1.setBooks = book.getInfo();
    } else {
      alert('Introduzca valores validos');
    }
  }
  const showBooks = () => {
    const books = bookstore1.getBooks;
    const bookElements = viewBook(books);
    const mainContent = document.getElementById('Content');
    mainContent.innerHTML = '';
    mainContent.insertAdjacentHTML('beforeend', bookElements);
  }
  const viewBook = (books) => {
    let bookHtml = '';
    books.forEach((book) => {
      bookHtml += `
      <div class="book">
      <p>title: ${book.title}</p>
      <p>autor: ${book.autor}</p>
      <p>price:${book.price}</p>
      <p>stock: ${book.stock}</p>
      <p>year: ${book.year}</p>
      </div>
    `;
    });
    return bookHtml;
  }
  const addComics = () => {
    console.log('add comics');

    const title = prompt('title')
    const autor = prompt('autor')
    const price = prompt('price')
    const stock = prompt('stock')
    const year = prompt('year')
    const illustrator = prompt('illustrator')
    const publisher = prompt('publisher')
    const volume = prompt('volume')

    if (title && autor && !isNaN(price) && !isNaN(stock) && !isNaN(year) && illustrator && publisher && !isNaN(volume)) {
      const comic = new Comic(title, autor, price, stock, year, illustrator, publisher, volume);

      const sameComic = bookstore1.getComics.find(c => c.title === title);
      if (sameComic) {
        alert('El libro ya existe');
        return;
      }
      bookstore1.setComics = comic.getInfo();
    } else {
      alert('introduzca valores validos');
    }
  }
  const showComics = () => {
    const comics = bookstore1.getComics;
    const comicElements = viewComic(comics);
    const mainContent = document.getElementById('Content');
    mainContent.innerHTML = '';
    mainContent.insertAdjacentHTML('beforeend', comicElements);
  }
  const viewComic = (comics) => {
    let comicHtml = '';
    comics.forEach((comic) => {
      comicHtml += `
        <div class="comic">
          <p>Title: ${comic.title}</p>
          <p>Autor: ${comic.autor}</p>
          <p>Price: ${comic.price}</p>
          <p>Stock: ${comic.stock}</p>
          <p>Year: ${comic.year}</p>
          <p>Illustrator: ${comic.illustrator}</p>
          <p>Publisher: ${comic.publisher}</p>
          <p>Volume: ${comic.volume}</p>
        </div>
      `;
    });
    return comicHtml;
  }

  initialize();
})();