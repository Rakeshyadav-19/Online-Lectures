function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  // Finish this function

  //   Views calculation
  // if(views.length == 4){
  //     views = views.
  // }

  if (views > 999 && views < 1000000) {
    views = views / 1000 + "K"; // convert to K for viewsber from > 1000 < 1 million
  } else if (views >= 1000000) {
    views = views / 1000000 + "M"; // convert to M for viewsber from > 1 million
  } else if (views < 900) {
    views = views; // if value < 1000, nothing to do
  }
  //   card areation
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `   
      <div class="banner">
        <img
          src="${thumbnail}"
          alt=""
        />
        <p>${duration}</p>
      </div>
      <div class="info">
        <div class="title">
            <h2>
                ${title}
            </h2> 
        </div>
        <div class="values">
            <ul>
                <li style="list-style: none;">${cName}</li>
                <li>${views} views</li>
                <li>${monthsOld} months</li>
            </ul>
        </div>
      </div>
    `;

  document.body.querySelector(".container").append(card);

  //   write whole html code the do this.
  //   document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + card
}

createCard(
  "Introduction to Backend | Sigma Web Dev video #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
