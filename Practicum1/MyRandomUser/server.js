/**
 * Created by twanv on 18-4-2017.
 */

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var json = {
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "miro",
                "last": "saari"
            },
            "location": {
                "street": "2355 hatanpään valtatie",
                "city": "utsjoki",
                "state": "southern savonia",
                "postcode": 46736
            },
            "email": "miro.saari@example.com",
            "login": {
                "username": "greenbird143",
                "password": "motorola",
                "salt": "gDbO8Iis",
                "md5": "374f0c8286515c3aa92000341c55b8dd",
                "sha1": "dae7c7b3904f31027e9c62a9270a5e8340aa4cf7",
                "sha256": "652228efc91285e71ac4ad8c2b28e24cbfc42d704b2529d5e5c790b6804fa49f"
            },
            "dob": "1956-05-11 03:20:24",
            "registered": "2008-05-31 13:15:49",
            "phone": "05-902-788",
            "cell": "044-344-70-79",
            "id": {
                "name": "HETU",
                "value": "956-827C"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/85.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/85.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/85.jpg"
            },
            "nat": "FI"
        },
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "desidério",
                "last": "gonçalves"
            },
            "location": {
                "street": "2200 rua duque de caxias ",
                "city": "bragança",
                "state": "santa catarina",
                "postcode": 73736
            },
            "email": "desidério.gonçalves@example.com",
            "login": {
                "username": "greenpeacock911",
                "password": "vampires",
                "salt": "VBg6zBON",
                "md5": "21f19846f30cf7aa98894d9503e0713a",
                "sha1": "56a88ea1c7a12ee69255fbb3f4d943f6c8c63a02",
                "sha256": "6a7f4a0ef4973b83b6cf14665e5dd3b9c096c0b0b3a3291202d7e779f9b0eb62"
            },
            "dob": "1993-10-20 04:26:29",
            "registered": "2008-12-08 19:26:22",
            "phone": "(42) 5402-1046",
            "cell": "(71) 0535-6838",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/85.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/85.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/85.jpg"
            },
            "nat": "BR"
        },
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "zachary",
                "last": "hall"
            },
            "location": {
                "street": "4250 anglesea street",
                "city": "new plymouth",
                "state": "hawke's bay",
                "postcode": 37245
            },
            "email": "zachary.hall@example.com",
            "login": {
                "username": "bigmouse247",
                "password": "4444",
                "salt": "dhna0SKn",
                "md5": "34202d403d4d5ebabb2f1556cf59cccf",
                "sha1": "d7ab9e7bddde4f0bfea0fd246e1b994c1e5f1677",
                "sha256": "ddc8d575e6fbf6de2a0d5f7725afd4dad27605004f021a95da8581251fa4aaa9"
            },
            "dob": "1989-06-16 13:56:22",
            "registered": "2006-08-15 10:32:09",
            "phone": "(083)-288-0375",
            "cell": "(014)-866-0288",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/54.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/54.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/54.jpg"
            },
            "nat": "NZ"
        },
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "eelis",
                "last": "anttila"
            },
            "location": {
                "street": "8552 fredrikinkatu",
                "city": "kihniö",
                "state": "satakunta",
                "postcode": 45721
            },
            "email": "eelis.anttila@example.com",
            "login": {
                "username": "bluegoose377",
                "password": "micron",
                "salt": "9h3EEwB0",
                "md5": "b39bf2285d04215d5c454bdf9a4bed10",
                "sha1": "d4ea468759d77d7633f60f4e2d7802f81d84a146",
                "sha256": "447ffad7a320718f22401d18bceca288f09769fbc298c638fdef1edcb78c0230"
            },
            "dob": "1970-03-10 16:25:22",
            "registered": "2012-04-12 23:00:22",
            "phone": "05-913-867",
            "cell": "041-928-06-17",
            "id": {
                "name": "HETU",
                "value": "470-1493"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/15.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/15.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/15.jpg"
            },
            "nat": "FI"
        },
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "xavier",
                "last": "chan"
            },
            "location": {
                "street": "9712 9th st",
                "city": "inverness",
                "state": "newfoundland and labrador",
                "postcode": 55194
            },
            "email": "xavier.chan@example.com",
            "login": {
                "username": "silverpanda347",
                "password": "scamper",
                "salt": "9qtSDVKP",
                "md5": "c6b2c22e2c1fc56298641c5a47693e07",
                "sha1": "0a75ce2a6c9393601ce7b5b2ecf2e025fb11c1fd",
                "sha256": "6ed635143c7b5122ae5e98178e30dab9c0245a1cbbd02ab15300cba4b76491c8"
            },
            "dob": "1993-06-13 05:00:06",
            "registered": "2005-07-23 23:08:55",
            "phone": "823-365-0946",
            "cell": "813-449-1840",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/21.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/21.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/21.jpg"
            },
            "nat": "CA"
        }
    ],
    "info": {
        "seed": "f80db1457bc19952",
        "results": 5,
        "page": 1,
        "version": "1.1"
    }
}


app.get('/', function(request, response) {
    response.send('Hello Avans!');
})

app.get('/about', function(request, response) {
    response.send('Written by Twanvm');
})

app.get('/json', function(request, response) {
    response.json(json.results[1]);
})




app.post('/', function(request, response) {
    response.send('Hello Avans, POST request received!');
})

app.put('/', function(request, response) {
    response.send('Hello Avans, PUT request received!');
})

app.all('*', function(request, response) {
    response.status(404);
    response.send('404 - Not found');
})


app.listen(port, function() {
    console.log('Server app is listening on port ' + port);
})




