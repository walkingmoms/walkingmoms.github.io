const gears = {
    // "Bob-Strollers":
    // {
    //     "name": "Bob strollers",
    //     "description": "high quality strollers built for jogging ",
    //     "image": "images/strollerclipart.png",
    //     "key": "Bob-Strollers"
    // },
    // "Fitbit": {
    //     "name": "Fitbit",
    //     "description": "these watches track your pace, heartrate, and mileage",
    //     "image": "images/watchclipart.png",
    //     "key": "Fitbit"
    // }
};


const url = window.location.href;
const queryString = url.split('?')[1];

const params = new URLSearchParams(queryString);

const gear = params.get('gear');

if (gear !== null && gear !== undefined) {
    const recommendationsTemplate = document.getElementById('recommendations-template');
    const reviewsClone = recommendationsTemplate.content.cloneNode(true);
    const template2 = reviewsClone.getElementById('recommendations-article').innerHTML;
    const render = Handlebars.compile(template2);
    document.getElementsByClassName('gearrecommendations')[0].innerHTML = render(gears[gear]);
}
else {
    const gearNames = Object.keys(gears);
    gearArr = gearNames.map(g => gears[g]);
    const gearTemplate = document.getElementById('gear-template');
    const gearClone = gearTemplate.content.cloneNode(true);
    const template2= gearClone.getElementById('gears').innerHTML;
    const render = Handlebars.compile(template2);
    document.getElementById('gear-section').innerHTML = render({gearNames: gearArr});
}