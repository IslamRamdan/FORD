let right = document.querySelector(".arrow .right");
let left = document.querySelector(".arrow .left");
let listUl = document.querySelector(".processes .list");
let lis = document.querySelectorAll(".processes .list li");

right.onclick = function () {
  listUl.scrollBy(-2 * listUl.lastElementChild.offsetWidth, 0);
  if (listUl.scrollLeft != 0) {
    right.classList.remove("active");
  }
};

left.onclick = function () {
  listUl.scrollBy(2 * listUl.lastElementChild.offsetWidth, 0);
  if (listUl.scrollLeft != 0) {
    right.classList.remove("active");
  }
};

setInterval((_) => {
  if (listUl.scrollLeft === 0) {
    right.classList.add("active");
  } else {
    right.classList.remove("active");
  }
}, 1);

setInterval((_) => {
  if (listUl.scrollLeft == 375.20001220703125) {
    left.classList.add("active");
  } else {
    left.classList.remove("active");
  }

  if (listUl.scrollWidth - 5 >= listUl.scrollLeft + listUl.clientWidth) {
    left.classList.remove("active");
  } else {
    left.classList.add("active");
  }
}, 1);

// width hr
let hr = document.querySelector(".list hr");
hr.style.width = `${lis.length * 204 + (lis.length * 2 - 1)}px`;

// testimonials content
let contents = document.querySelectorAll(".testimonials .content");
let imgs = document.querySelectorAll(".imgs img");
let conAct = document.querySelector(".testimonials div.active");
let imAct;

imgs.forEach(function (img) {
  img.addEventListener("click", function () {
    imgs.forEach(function (i) {
      if (i.classList.contains("active")) {
        imAct = i;
      }
      i.classList.remove("active");
    });

    contents.forEach(function (con) {
      if (+imAct.dataset.num > +img.dataset.num) {
        con.style.animation = "left 0.5s ease";
      } else {
        con.style.animation = "right 0.5s ease";
      }

      con.classList.remove("active");
    });

    contents[img.dataset.num - 1].classList.add("active");
    img.classList.add("active");
  });
});

let Act;
setInterval(() => {
  imgs.forEach(function (img) {
    if (img.classList.contains("active")) {
      Act = img;
    }
    img.classList.remove("active");
  });

  contents.forEach(function (con) {
    con.classList.remove("active");
  });

  if (+Act.dataset.num == imgs.length) {
    imgs[0].classList.add("active");
    contents[0].classList.add("active");
    contents[0].style.animation = "right 0.5s ease";
  } else {
    imgs[+Act.dataset.num].classList.add("active");
    contents[+Act.dataset.num].classList.add("active");
    contents[+Act.dataset.num].style.animation = "right 0.5s ease";
  }
}, 5000);

//  icon list

let iconList = document.querySelector(".header .container-icon i");
let listLi = document.querySelector(".header .links-icon");
// console.log(listLi);

iconList.onclick = function () {
  listLi.classList.toggle("show");
};
