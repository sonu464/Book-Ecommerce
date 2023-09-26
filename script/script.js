const items = document.getElementById("box");
const cartValue = document.getElementById("cartValue");
const hemburger = document.getElementById("hemburger");
const backdrop = document.getElementById("backdrop");
const cross = document.getElementById("cross");
const cartDisplay = document.getElementById("cartBtn");
const backdropCart = document.getElementById("backdropCart");
const cartBox = document.getElementById("cart-box");
const cartExit = document.getElementById("cart-exit");
const searchBtn = document.getElementById("search-btn");
const searchIconBtn = document.getElementById("search-icon-btn");
const search = document.getElementById("search");
const bookStore = document.getElementById("bookStore");
const noCart = document.getElementById("no-cart");
const comicBox = document.getElementById("comic-items");
const programmingBox = document.getElementById("programming-items");
const trandingBox = document.getElementById("tranding-items");
const searchContainer = document.getElementById("search-container");

let cartData = [];
let cartAddedData = 1;

// ______________________ Search Container _____________________

// *************************** search function
const searchBook = (event) => {
  bookStore.innerHTML = "";
  const search = document.getElementById("search").value;
  console.log(search);
  let apiUrl = "https://www.googleapis.com/books/v1/volumes?q=" + search;

  // ------------------ Heading of book store

  const bookHeading = document.createElement("h1");
  bookHeading.innerHTML = `Books related to ${search}`;
  bookStore.appendChild(bookHeading);

  document.getElementById("search").value = "";

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      let store = [];

      store = data.items.map((item) => {
        let image = item.volumeInfo.imageLinks
          ? item.volumeInfo.imageLinks.thumbnail
          : " ";

        let averageRating = item.volumeInfo.averageRating
          ? item.volumeInfo.averageRating
          : " ";

        let description = item.volumeInfo.description
          ? item.volumeInfo.description
          : " ";

        let newBookArray = {
          name: item.volumeInfo.title,
          author: item.volumeInfo.authors,
          img: image,
          description: description,
          rating: averageRating,
          // price:price,
        };

        return newBookArray;
      });

      const addToCart = (item) => {
        const alreadyExistingCart = cartData.find(
          (cartItem) => cartItem.name === item.name
        );
        if (alreadyExistingCart) {
          cartAddedData++;
          const cartNo = document.getElementById("cartAddedData");
          cartNo.innerText = `x ${cartAddedData}`;
        } else {
          if (!alreadyExistingCart) {
            cartAddedData = 0;
          }
          noCart.innerHTML = "";
          cartData.push(item);
          const cartItem = document.createElement("li");

          cartItem.innerHTML = `
          <div class="cart-info">
            <h2>${item.name}</h2>
            <p>Rating - ${item.rating}</p>
            <span id="cartAddedData">x ${cartAddedData}</span>
            <!-- <button id="remove-item">Remove Item</button> -->
          </div>
  
              `;
          cartBox.appendChild(cartItem);

          // Remove item from cart
          // const removeItem = document.getElementById("remove-item");
          // removeItem.addEventListener("click", () => {
          //   cartItem.innerHTML = "";
          //   noCart.innerHTML = `
          //   <div id="no-cart" class="no-cart">
          //   <img src="images/cart.png" alt="" />
          //   <p>No cart available</p>
          // </div>

          //   `;
          // });
        }
      };

      // addToCart();

      const createItemElement = (item, index) => {
        const box = document.createElement("div");
        box.classList.add("storeItem");
        box.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="cartInfo" >
        <h2>${item.name}</h2>
       <span>Author -  <strong>${item.author}</strong></span>
       <!-- <p>${item.description}</p> -->
        <button class="cartBtn btn" data-index="${index}">Add to cart</button>
        </div>
    `;
        return box;
      };

      store.forEach((item, index) => {
        const itemElement = createItemElement(item, index);
        items.appendChild(itemElement);
      });

      items.addEventListener("click", (event) => {
        if (event.target.classList.contains("cartBtn")) {
          const itemIndex = parseInt(event.target.getAttribute("data-index"));
          const selectedItem = store[itemIndex];
          addToCart(selectedItem);
        }
      });
    });

  items.innerHTML = "";
};

// __________________________________________________________

const allBookHomePage = (apiUrl) => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      let comicStore = [];

      comicStore = data.items.map((item) => {
        let image = item.volumeInfo.imageLinks
          ? item.volumeInfo.imageLinks.thumbnail
          : " ";

        let averageRating = item.volumeInfo.averageRating
          ? item.volumeInfo.averageRating
          : " ";

        let description = item.volumeInfo.description
          ? item.volumeInfo.description
          : " ";

        let comicBookArray = {
          name: item.volumeInfo.title,
          author: item.volumeInfo.authors,
          img: image,
          description: description,
          rating: averageRating,
          // price:price,
        };

        return comicBookArray;
      });

      if (apiUrl === "https://www.googleapis.com/books/v1/volumes?q=comics") {
        comicStore.map((item) => {
          const comicItem = document.createElement("li");
          comicItem.innerHTML = `
          <img src=${item.img} />
          <div class="comic-name"><h2>${item.name}</h2></div>
      `;

          comicBox.appendChild(comicItem);
        });
      }

      if (
        apiUrl === "https://www.googleapis.com/books/v1/volumes?q=programming"
      ) {
        comicStore.map((item) => {
          const programmingItem = document.createElement("li");
          programmingItem.innerHTML = `
            <img src=${item.img} />
            <div class="comic-name"><h2>${item.name}</h2></div>
        `;

          programmingBox.appendChild(programmingItem);
        });
      }

      if (
        apiUrl ===
        "https://www.googleapis.com/books/v1/volumes?q=tranding+books"
      ) {
        comicStore.map((item) => {
          const trandingItem = document.createElement("li");
          trandingItem.innerHTML = `
          <img src=${item.img} />
          <div class="comic-name"><h2>${item.name}</h2></div>
      `;

          trandingBox.appendChild(trandingItem);
        });
      }
    });
};

// --------------- comic funtion
function comic() {
  const url = "https://www.googleapis.com/books/v1/volumes?q=comics";
  allBookHomePage(url);
}
comic();

// --------------- Bhagvad Gita funtion
function programming() {
  const url = "https://www.googleapis.com/books/v1/volumes?q=programming";
  allBookHomePage(url);
}
programming();

// --------------- Tranding funtion
function tranding() {
  const url = "https://www.googleapis.com/books/v1/volumes?q=tranding+books";
  allBookHomePage(url);
}
tranding();

// *********************** showCartDisplay
const showCartDisplay = () => {
  backdropCart.classList.add("showCart");
};

// *********************** showMenu
const showMenu = () => {
  backdrop.classList.add("show");
};

// *********************** hideMenu
const hideMenu = () => {
  backdrop.classList.remove("show");
};

//---------------------- henburger event listener
hemburger.addEventListener("click", showMenu);

//---------------------- cross event listener
cross.addEventListener("click", hideMenu);

// --------------------- cart Display Event listener
cartDisplay.addEventListener("click", showCartDisplay);

// --------------------- cart exit event listener
cartExit.addEventListener("click", () => {
  backdropCart.classList.remove("showCart");
});

// ---------------------- search bar event listener
// searchBtn.addEventListener("click", searchBook);

// --------------------- input event lsitener
// document.getElementById('search').addEventListener('submit',searchBook)

// ---------------------- search bar btn icon event listener
searchIconBtn.addEventListener("click", () => {
  search.focus();
  searchContainer.classList.toggle("show");
});

// -------------------- search
search.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchBook();
  }
});

// ---------------------- search exit
const searchExit = document.getElementById("search-exit");
searchExit.addEventListener("click", () => {
  searchContainer.classList.remove("show");
});
