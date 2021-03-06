import Home from "./page/Home.js";
import About from "./page/About.js"
import Contact from "./page/Contact.js"
import Fctl from "./page/Fctl.js"
import Fltc from "./page/Fltc.js"

var textarea;


const navigate = url => {
    history.pushState(null, null, url);
    router();
}


const router = async () => {
    
    const routes = [
        {path: "/",         page: Home },
        {path: "/about",    page: About},
        {path: "/contact",  page: Contact},
        {path: "/fctl",     page: Fctl},
        {path: "/fltc",     page: Fltc},

    ];

    const selectRoute = routes.map(route => {
        return {
            route: route,
            isSelected: location.pathname === route.path
        };
    });

    let match = selectRoute.find(selectRoute => selectRoute.isSelected)

    if(!match){
        alert("this page does not exist")
        match = {
            route: routes[0],
            isSelected: true
        }
    }
    console.log(match.route)

    const page = new match.route.page()

    console.log(match.route.path)
    document.querySelector("#app").innerHTML = await page.getHtml();
    if(match.route.path == '/fltc') document.querySelector("#fltc").innerHTML = await page.convert();
    if(match.route.path == '/fctl') document.querySelector("#fctl").innerHTML = await page.convert();
    textarea = document.querySelector("#fltc");
    
}


window.addEventListener("popstate",router)


document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigate(e.target.href)
        };
    });
    router()
})



