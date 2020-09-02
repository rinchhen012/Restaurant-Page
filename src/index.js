import {
    initialLoad,
    navBar,
    header,
    image,
    home,
    about,
    contact
} from '../modules/initialLoad';
import {
    aboutFunc
} from '../modules/about';
import {
    contactFunc
} from '../modules/contact';

navBar();
initialLoad();

home.addEventListener("click", () => {
    header.style.display = "";
    image.style.display = "";
    home.style.color = "#ee6f57";
    about.style.color = "#eeeeee";
    contact.style.color = "#eeeeee";
});

about.addEventListener("click", () => {
    aboutFunc();
    about.style.color = "#ee6f57";
    home.style.color = "#eeeeee";
    contact.style.color = "#eeeeee";
});
    
contact.addEventListener("click", () => {
    contactFunc();
    contact.style.color = "#ee6f57";
    about.style.color = "#eeeeee";
    home.style.color = "#eeeeee";
});