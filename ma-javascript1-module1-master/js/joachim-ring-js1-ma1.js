const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Answer 1
const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

// Answer 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Answer 3:
heading.style.fontSize = "2em";

// Answer 4:
heading.classList.add("subheading");

// Answer 5:
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Answer 6:
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Answer 7:
function createList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}
createList(cats);

// Answe 8:
const catContainer = document.querySelector(".cat-container");

function createCats(cats) {
  let html = "";

  for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);

    const catName = cats[i].name;
    let catAge = "Age unknown";
    if (cats[i].age) {
      catAge = cats[i].age;
    }
    html += `<div>
    <h5>Name: ${catName}</h5>
    <p>Age: ${catAge}</p>
    </div>`;
  }
  catContainer.innerHTML = html;
}

createCats(cats);
