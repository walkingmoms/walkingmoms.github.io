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
        "description": "The park is located in South Austin. The trail is crushed gravel. There are restrooms. The playground is very shaded by trees. There are two different playgrounds and 'musical instruments' to play with. There is a pit full of rocks that has sand equipment in it. There are also soccer fields",
        "image": "images/circlec.jpg",
        "key": "Circle-C"
    },
    "Pfluger-Park" : {
        "name": "Pfluger Park",
        "description" : "This mulch playground is located in downtown Pflugerville. There are multiple playscapes with swings and slides It has picnic tables, a pavilion, and a gazebo. They also have restrooms. There is a volleyball and a basketball court. This park has a paved walking trail that have access to a few other Pflugerville parks and Gilleland creek pool..",
        "image": "images/pflugerpark.jpg",
        "key": "Pfluger-Park"
    },
    "Walnut-Creek-Metropolitan" : {
        "name": "Walnut Creek Metropolitan",
        "description" : "This mulch playground is located in downtown Pflugerville. There are multiple playscapes with swings and slides It has picnic tables, a pavilion, and a gazebo. They also have restrooms. There is a volleyball and a basketball court. This park has a paved walking trail that have access to a few other Pflugerville parks and Gilleland creek pool..",
        "image": "images/walnutcreekmetroplayground.jpg",
        "key": "Walnut-Creek Metropolitan"
    },
    "Dick-Nichols" : {
        "name": "Dick Nichols",
        "description" : "This mulch playground is located in downtown Pflugerville. There are multiple playscapes with swings and slides It has picnic tables, a pavilion, and a gazebo. They also have restrooms. There is a volleyball and a basketball court. This park has a paved walking trail that have access to a few other Pflugerville parks and Gilleland creek pool..",
        "image": "images/dicknichols.jpg",
        "key": "Dick-Nichols"
    },
    "Zilker" : {
        "name": "Zilker",
        "description" : "This mulch playground is located in downtown Pflugerville. There are multiple playscapes with swings and slides It has picnic tables, a pavilion, and a gazebo. They also have restrooms. There is a volleyball and a basketball court. This park has a paved walking trail that have access to a few other Pflugerville parks and Gilleland creek pool..",
        "image": "images/zilkerpark.jpg",
        "key": "Zilker"
    },
    "Children-Alliance-Garden" : {
        "name": "Children's Alliance Garden",
        "description" : "This mulch playground is located in downtown Pflugerville. There are multiple playscapes with swings and slides It has picnic tables, a pavilion, and a gazebo. They also have restrooms. There is a volleyball and a basketball court. This park has a paved walking trail that have access to a few other Pflugerville parks and Gilleland creek pool..",
        "image": "images/childrensalliance.jpg",
        "key": "Children-Alliance-Garden"
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

