# Documentation: dohyo-dreams
A RESTful API for Japanese Sumo Wrestling.

## Contents 
[Goals](#user-contents-goals)<br/>
[EndPoints](#user-contents-endpoints)<br/>
⋅⋅* [Tournaments](#user-content-tournaments)<br/>
⋅⋅* [Wrestlers](#user-content-wrestlers)<br/>
⋅⋅* [Rankings Chart](#user-content-rankings-chart)<br/>

### GOALs
__The First Japanese Sumo API__
Sumo fans can find contain vast amounts of sumo data at http://sumodb.sumogames.de, to my knowledge, there is no API for sumo. 
__Free and Easy to Use__
No login or authentication required for GET requests. 
__Community Resource__
My hope is that applications, and sumo fantasy leagues can begin to utilize and contribute to this API.

### ENDPOINTS

Each path will be proceeded by the protocol and path, but these are not determined at this time. 
'<protocol>/<domain>/tournaments'
may become, for example
'https://sumo-api.com/tournaments'

Responses will be given in JSON format.

#### TOURNAMENTS

Wrestlers, or 'basho' in Japanese, take place every two months starting with January, thus there will be 6 rankings charts released by the Japanese Sumo Association in a year. 

GET '<protocol>/<domain>/tournaments'
'[
  "id": 1,
  "name": "September 2019",
  "dateStart": "2019-09-08",
  "dateEnd": "2019-09-22",
  "cancelled": false,
  "location": "Tokyo"
]'


#### WRESTLERS

Wrestlers, or 'rikishi' in Japanese, must fight every tournament to keep and improve their rankings, except for the the top two ranks. Wrestlers typically are Japanese and have been wrestling since high school age. The mawashi is the belt worn during the match, and each wrestler may choose his own color.

GET '<protocol>/<domain>/wrestlers'
'[
  "id": 1,
  "familyName": "Sato",
  "givenName": "Takanobu",
  "ringName": "Sato Takakeisho",
  "birthDate": "1996-08-05",
  "birthPlace": "Hyogo, Japan",
  "height": 175,
  "weight": 169,
  "retired": false,
  "mawashi": "800080"
]'

#### RANKINGS CHART

The Rankings chart, or 'banzuke' in Japanese, is released prior to each tournament. Only the top 2 divisions (70 or so wrestlers) get salaries are served, while the hundreds of others serve those top wrestlers.

GET '<protocol>/<domain>/rankings-chart'
'[
  "id": 1,
  "familyName": "Sato",
  "givenName": "Takanobu",
  "ringName": "Sato Takakeisho",
  "birthDate": "1996-08-05",
  "birthPlace": "Hyogo, Japan",
  "height": 175,
  "weight": 169,
  "retired": false,
  "mawashi": "800080"
]'