const home = document.createElement("div");
const about = document.createElement("div");
const contact = document.createElement("div");
const header = document.createElement("h1");
const image = document.createElement("div");
const img = document.createElement("img");

// creates top & bottom section (body)
const navBar = function () {
    // body container
    const content = document.getElementById('content');
    content.style.backgroundColor = "black";
    content.style.height = "100vh";
    content.style.display = "flex";
    content.style.flexDirection = "column";

    // 1. Nav Bar(top section)
    const top = document.createElement("div");
    top.style.backgroundColor = "#2d4059";
    top.style.fontSize = "45px";
    top.style.fontWeight = "600";
    top.style.color = "#eeeeee";
    top.style.height = "10vh";
    top.style.display = "flex";
    top.style.alignItems = "center";
    top.style.justifyContent = "space-evenly";

    // - home tab
    home.setAttribute("id", "home");
    home.innerText = "Home";
    home.style.cursor = "pointer";
    home.style.textShadow = "2px 2px 8px black";
    home.style.color = "#ee6f57";

    // - about tab
    about.setAttribute("id", "about");
    about.innerText = "About";
    about.style.cursor = "pointer";
    about.style.textShadow = "2px 2px 8px black";

    // - contact tab
    contact.setAttribute("id", "contact");
    contact.innerText = "Contact";
    contact.style.cursor = "pointer";
    contact.style.textShadow = "2px 2px 8px black";

    content.appendChild(top);
    content.appendChild(bottom);
    top.appendChild(home);
    top.appendChild(about);
    top.appendChild(contact);

};

// 2. bottom section
const bottom = document.createElement("div");
bottom.style.backgroundColor = "#ea5455";
bottom.style.height = "90vh";

const initialLoad = function () {
    // - contents for bottom section
    // - header
    header.innerText = "Best Stew In Town";
    header.style.textAlign = "center";
    header.style.marginTop = "3rem";
    header.style.fontSize = "55px";
    header.style.fontWeight = "800";
    header.style.fontFamily = "monospace";
    header.style.color = "#eeeeee";
    header.style.textShadow = "2px 2px 8px black";

    // - image
    image.appendChild(img);
    img.src = "mark.jpg";
    img.style.height = "30rem";
    img.style.width = "50rem";
    img.style.boxShadow = "2px 2px 8px black";
    img.style.borderRadius = "25px";
    img.style.display = "block";
    img.style.margin = "6rem auto auto auto";

    bottom.appendChild(header);
    bottom.appendChild(image);
};

export {
    initialLoad,
    navBar,
    home,
    about,
    contact,
    header,
    image
};