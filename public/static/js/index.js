import Home from "./page/Home.js";
import About from "./page/About.js"


const navigate = url => {
    history.pushState(null, null, url);
    router();
}


const router = async () => {
    
    const routes = [
        {path: "/",                    page: Home },
    //  {path: "/fromLatintoCyrillic", page: () => console.log("Page: From Cyrillic to Latin")},
    //  {path: "/fromCyrillictoLatin", page: () => console.log("Page: From Latin to Cyrillic")},
        {path: "/about",               page: About},
      /*  {path: "/contact",             page: () => console.log('Page: Contact')  }*/
    ];

    const selectRoute = routes.map(route => {
        return {
            route: route,
            isSelected: location.pathname === route.path
        };
    });

    let match = selectRoute.find(selectRoute => selectRoute.isSelected)

    if(!match){
        match = {
            route: routes[0],
            isSelected: true
        }
    }
    //console.log(match.route)

    const page = new match.route.page()

    document.querySelector("#app").innerHTML = await page.getHtml();
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