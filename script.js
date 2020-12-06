let currClasses = [];

const changeToPhotos = (classToAdd, title, description) => {
  const theBody = document.getElementById("body");
  const theTitle = document.getElementById("titleHeader");
  const theText = document.getElementById("titleText");
  console.log("something");

  if (currClasses[0]) {
    theBody.classList.remove(currClasses.pop());
  }
  theBody.classList.add(classToAdd);
  theTitle.innerHTML = `${title}`;
  theText.innerHTML = `${description}`;
  currClasses.push(classToAdd);
};

const photos = document.getElementById("photos");
const web = document.getElementById("web");
const home = document.getElementById("home");
const listening = document.getElementById("listening");
const reading = document.getElementById("reading");

photos.addEventListener("click", () =>
  changeToPhotos(
    "photos",
    "Photos",
    "I explore my emotions and histories in photos everywhere I go."
  )
);

home.addEventListener("click", () =>
  changeToPhotos("home", "Home", "Welcome to my personal archive")
);

listening.addEventListener("click", () =>
  changeToPhotos(
    "listening",
    "My music",
    "Songs and albums that I've discovered throughout the years."
  )
);

reading.addEventListener("click", () =>
  changeToPhotos(
    "reading",
    "My books",
    "Books that have taught and helped me everyday."
  )
);
