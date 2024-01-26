

// funksjon for å skifte tabs

function openTab(tabName) {

  // henter innholdet i fanene og fjerner det
  let tabContent = document.getElementsByClassName("meny-innhold");
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

 // fjerner .active classen fra alle tabsa
  let tabItems = document.getElementsByClassName("meny-fane-valg");
  for (let i = 0; i < tabItems.length; i++) {
    tabItems[i].classList.remove("active-tab");
  }

  // Leiter opp objektene i arrayen i resources.js
  const resource = resources.find((r) => r.category.toLowerCase() === tabName);

  // if test for å skrive HTML for hver kategori og skrive ut til #id som er definert i funksjonen openTab()
  if (resource) {
    const contentHTML = `
    <h2>${resource.category.toUpperCase()}</h2> 
    
    <p>${resource.text}</p>
    
    <ul>
        ${resource.sources
          .map(
            (source) => `
        <li>
        <a href="${source.url}" target="_blank">${source.title}</a></li>`
          )
          .join("")}
    </ul>
    
    `;

    document.getElementById(tabName).innerHTML = contentHTML;

  // viser den clicka tabben og innholdet og adder active klassen tabben som er klikka på
    document.getElementById(tabName).style.display = "block";
  } else {
    console.error("Her ere no plukk");
  }

  // viser den clicka tabben og innholdet og adder active klassen tabben som er klikka på
  event.currentTarget.classList.add("active-tab");
}

// kjører funksjonen openTab for å laste inn første fane

openTab("html");
