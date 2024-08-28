const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    edit:false,
    img: "https://nutworks.com.au/wp-content/uploads/2024/02/Macadamia-Pancakes_Feb-2024-scaled.jpeg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem in harum fugiat, inventore officia adipisci eligendi sunt reiciendis illo dolorem dolore sit ut illum pariatur unde ducimus deleniti repellendus! Vero.",
  },
  {
    id: 2,
    title: "dinner double",
    category: "lunch",
    price: 13.99,
    edit:false,
    img: "https://www.tastingtable.com/img/gallery/most-luxurious-expensive-airline-meals/image-import.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem in harum fugiat, inventore officia adipisci eligendi sunt reiciendis illo dolorem dolore sit ut illum pariatur unde ducimus deleniti repellendus! Vero.",
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "drink",
    price: 10.99,
    edit:false,
    img: "https://react-project-5-menu.netlify.app/images/item-3.jpeg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem in harum fugiat, inventore officia adipisci eligendi sunt reiciendis illo dolorem dolore sit ut illum pariatur unde ducimus deleniti repellendus! Vero.",
  },
  {
    id: 4,
    title: "godzilla milkshake",
    category: "drink",
    price: 10.99,
    edit:false,
    img: "https://react-project-5-menu.netlify.app/images/item-3.jpeg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem in harum fugiat, inventore officia adipisci eligendi sunt reiciendis illo dolorem dolore sit ut illum pariatur unde ducimus deleniti repellendus! Vero.",
  },
  {
    id: 5,
    title: "idly",
    category: "tiffen",
    price: 5.99,
    edit:false,
    img: "https://react-project-5-menu.netlify.app/images/item-3.jpeg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem in harum fugiat, inventore officia adipisci eligendi sunt reiciendis illo dolorem dolore sit ut illum pariatur unde ducimus deleniti repellendus! Vero.",
  },
];
const app = document.querySelector("#app");

let content = menu.map((item) => `<h1>${item.title}</h1>`);

function card(menuInfo) {
  const article = document.createElement("article");
  const img = document.createElement("img");
  const div = document.createElement("div");
  const header = document.createElement("header");
  const title = document.createElement("h4");
  const price = document.createElement("h4");
  const itemText = document.createElement("P");
  const icon = document.createElement("div");
  const deleteBtn = document.createElement("i");

  article.setAttribute("class", "menu-item");
  article.setAttribute("id", `${menuInfo.id}`);
  img.setAttribute(
    "src",
   `${menuInfo.img}`
  );
  img.setAttribute("class", "photo");
  img.setAttribute("alt", "menu-item");
  img.setAttribute("style", "height: 160px; width: 220px");
  div.setAttribute("class", "item-info");
  header.setAttribute("class", "item-info");
  title.setAttribute("class", "title");
  price.setAttribute("class", "price");
  itemText.setAttribute("class", "item-text");
  icon.setAttribute("class", "icon");
  deleteBtn.setAttribute("class","fa fa-trash");

  title.innerHTML = `${menuInfo.title}`;
  price.innerHTML = `${menuInfo.price}`;

  itemText.innerHTML =`${menuInfo.desc}`;

  article.append(img, div);
  header.append(title, price);
  icon.appendChild(deleteBtn);
  div.append(header, itemText,icon);
  return article;
}

function displayMenu() {
  for (let i = 0; i < menu.length; i++) {
    app.append(card(menu[i]));
    console.log("menu")
  }
}

displayMenu();
