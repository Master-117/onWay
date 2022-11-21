const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
}

const routes = {
    "/": "./home.html",
    "/buscar": "./buscar.html",
    "/rota": "./sala323-portaria.html",
    "/sala-323": ".sala-323.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path];
    const html = await fetch(route).then((data) => data.text());
    document.querySelector('#main').innerHTML = html; 
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();