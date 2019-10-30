# Documentation: dohyo-dreams
A RESTful API for Japanese Sumo Wrestling.

![Sumo wrestler](https://upload.wikimedia.org/wikipedia/commons/b/b8/Sumo_Wrestling.jpg "Sumo wrestler")<br>

## Contents 
[Goals](#user-contents-goals)<br/>
[EndPoints](#user-contents-endpoints)<br/>
* [Tournaments](#user-content-tournaments)<br/>
* [Wrestlers](#user-content-wrestlers)<br/>
* [Rankings Chart](#user-content-rankings-chart)<br/>

### GOALS
__The First Japanese Sumo API__<br>
Sumo fans can find contain vast amounts of sumo data at http://sumodb.sumogames.de, to my knowledge, there is no API for sumo.<br>
__Free and Easy to Use__<br>
No login or authentication required for GET requests.<br>
__Community Resource__<br>
My hope is that applications, and sumo fantasy leagues can begin to utilize and contribute to this API.<br>
__Mobile-Friendly, English Website__<br>
The API will also have a UI to display some of the statistics. The Japanese Sumo Association website, http://www.sumo.or.jp/EnHonbashoBanzuke/index/ , has a functioning english mobile-friendly design, but the rankings chart doesn't work well on smaller-sized screens. Sumodb, http://sumodb.sumogames.de, is not mobile-friendly at all.

### ENDPOINTS

Each path will be proceeded by the protocol and path, but these are not determined at this time. 
`<protocol>/<domain>/tournaments` may become, for example `https://sumo-api.com/tournaments`

Responses will be given in JSON format.

#### TOURNAMENTS

Wrestlers, or 'basho' in Japanese, take place every two months starting with January, thus there will be 6 rankings charts released by the Japanese Sumo Association in a year. 

GET `<protocol>/<domain>/tournaments`<br>
`{`<br>
`  "id": 1,`<br>
`  "name": "September 2019",`<br>
`  "dateStart": "2019-09-08",`<br>
`  "dateEnd": "2019-09-22",`<br>
`  "cancelled": false,`<br>
`  "location": "Tokyo"`<br>
`}`


#### WRESTLERS

Wrestlers, or 'rikishi' in Japanese, must fight every tournament to keep and improve their rankings, except for the the top two ranks. Wrestlers typically are Japanese and have been wrestling since high school age. The mawashi is the belt worn during the match, and each wrestler may choose his own color.

GET `<protocol>/<domain>/wrestlers`<br>
`{`<br>
`  "id": 1,`<br>
`  "familyName": "Sato",`<br>
`  "givenName": "Takanobu",`<br>
`  "ringName": "Sato Takakeisho",`<br>
`  "birthDate": "1996-08-05",`<br>
`  "birthPlace": "Hyogo, Japan",`<br>
`  "height": 175,`<br>
`  "weight": 169,`<br>
`  "retired": false,`<br>
`  "mawashi": "800080"`<br>
`}`

#### RANKINGS CHART

The Rankings chart, or 'banzuke' in Japanese, is released prior to each tournament. Only the top 2 divisions (70 or so wrestlers) get salaries are served, while the hundreds of others serve those top wrestlers.

GET `<protocol>/<domain>/rankings-chart`<br>
`{`<br>
`  "id": 1,`<br>
`  "familyName": "Sato",`<br>
`  "givenName": "Takanobu",`<br>
`  "ringName": "Sato Takakeisho",`<br>
`  "birthDate": "1996-08-05",`<br>
`  "birthPlace": "Hyogo, Japan",`<br>
`  "height": 175,`<br>
`  "weight": 169,`<br>
`  "retired": false,`<br>
`  "mawashi": "800080"`<br>
`}`