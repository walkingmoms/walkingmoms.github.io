// const description = ["silly", "expensive", "daddy loves"]
// const name = ["Saab", "Volvo", "BMW"];
// compile the template


const parks = {
    "Roy-G-Guerrero":
    {
        "name": "Roy G. Guerrero",
        "description": "This park is located near Ladybird Lake. One really big positive is that it’s gated. It has mulch and multiple playscapes with swings. There are restrooms and water fountains. You can also find picnic tables and a pavilion there. In terms of sports, there is a disc golf course and baseball fields. There is a crushed gravel trail near the baseball fields and there is a small trail that is paved right next to the playground. ",
        "image": "images/roygguerrero.jpg",
        "key": "Roy-G-Guerrero"
    },
    "Circle-C": {
        "name": "Circle C",
        "description": "The trail is crushed gravel. There are restrooms there. The playground is very shaded by trees. There are two different playgrounds and 'musical instruments' to play with. There is a pit full of rocks that has sand equipment in it. There are also soccer fields",
        "image": "images/circlec.jpg",
        "key": "Circle-C"
    }
};


const url = window.location.href;
const queryString = url.split('?')[1];

const params = new URLSearchParams(queryString);

const park = params.get('park');

if (park !== null && park !== undefined) {
    const reviewsTemplate = document.getElementById('reviews-template');
    const reviewsClone = reviewsTemplate.content.cloneNode(true);
    const template = reviewsClone.getElementById('individualreviews-article').innerHTML;
    const render = Handlebars.compile(template);
    // render(parks[park]);
    document.getElementsByClassName('parkreviews')[0].innerHTML = render(parks[park]);
}
else {
    const parkNames = Object.keys(parks);
    parksArr = parkNames.map(p => parks[p]);
    const parksTemplate = document.getElementById('parks-template');
    const parksClone = parksTemplate.content.cloneNode(true);
    const template = parksClone.getElementById('parks').innerHTML;
    const render = Handlebars.compile(template);
    // render(parks[park]);
    document.getElementById('parks-section').innerHTML = render({parks: parksArr});
}