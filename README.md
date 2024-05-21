# Animals Web API

This is a simple web API that allows you to manage a list of animals. You can add, update, delete and list animals.

## Public endpoints

API endpoints can be accessed at: 
https://animals.juanfrausto.com/api/animals

## Setup

To run this project, you need to have the following tools installed:

- Node.js

Add a `.env` file in the root of the project with the following content:

``` text
DB_CONNECTION_STRING=mongodb://localhost:27017/animals
```

Then, run the following commands:

``` bash
npm install
node index.js
```


## Endpoints

### GET api/animals

This endpoint returns a list of all animals.

Response example:

``` json
    [
        {
                "_id": "6626d1c9b1b0af469a2acf21",
                "name": "Nutria",
                "image": "https://i.redd.it/04rwloagnx551.jpg",
                "description": "La nutria asian small clawed otter (Amblonyx cinereus) es una especie de la familia Mustelidae y es la más pequeña de todas las especies de nutrias. Se distingue por sus garras cortas y su capacidad para utilizarlas hábilmente.",
                "imageGallery": [
                    "https://www.sadanduseless.com/wp-content/uploads/2022/02/cute-otters.png",
                    "https://i.ytimg.com/vi/VcF8U1FAjoc/maxresdefault.jpg",
                    "https://i.ytimg.com/vi/BgkVsTNTebM/sddefault.jpg",
                    "https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2021/11/12200255/Otter-buffet-body-image-2.png"
                ],
                "environmentId": "662d2505a9cc4064e6be3353",
                "facts": [
                    "Las nutrias asian small clawed otter son conocidas por su comportamiento social y a menudo forman grupos familiares.",
                    "Utilizan sus garras cortas para capturar presas y manipular objetos en su entorno acuático.",
                    "Son muy ágiles en el agua y pueden nadar rápidamente para cazar peces y otros animales acuáticos."
                ],
                "__v": 0
            },
            {
                "_id": "66289d12e3fe82d7484ea0d2",
                "name": "Leon 2",
                "image": "https://cdn0.bioenciclopedia.com/es/posts/2/3/0/leon_32_600_square.jpg",
                "description": "El león (Panthera leo) es una especie de la familia Felidae y miembro del género Panthera. Se reconoce sobre todo por su cuerpo musculoso y de pecho profundo, su cabeza corta y redondeada, y su mechón peludo al final de la cola.",
                "imageGallery": [
                    "https://static.nationalgeographic.es/files/styles/image_3200/public/01-lion-populations-nationalgeographic_1777804.jpg?w=1600&h=900",
                    "https://www.ngenespanol.com/wp-content/uploads/2023/02/leon-como-es-el-rey-de-la-selva-y-cuales-son-sus-caracteristicas.jpg"
                ],
                "environmentId": "662d2505a9cc4064e6be3353",
                "facts": [
                    "Las leonas crían a los cachorros y también son las principales cazadoras"
                ],
                "__v": 0
            },
        ]
```

### GET api/animals/{id}

This endpoint returns the animal with the specified id.

Response example:

``` json
    {
            "_id": "66289d12e3fe82d7484ea0d2",
            "name": "Leon",
            "image": "https://cdn0.bioenciclopedia.com/es/posts/2/3/0/leon_32_600_squarjpg",
            "description": "El león (Panthera leo) es una especie de la familia Feliday miembro del género Panthera. Se reconoce sobre todo por su cuerpmusculoso y de pecho profundo, su cabeza corta y redondeada, y su mechópeludo al final de la cola.",
            "imageGallery": [
                "https://static.nationalgeographic.es/files/styles/image_3200/publi01-lion-populations-nationalgeographic_1777804.jpg?w=1600&h=900",
                "https://www.ngenespanol.com/wp-content/uploads/2023/0leon-como-es-el-rey-de-la-selva-y-cuales-son-sus-caracteristicas.jpg"
            ],
            "environmentId": "662d2505a9cc4064e6be3353",
            "facts": [
                "Las leonas crían a los cachorros y también son las principalecazadoras"
            ],
            "__v": 0
    }
```

### GET api/enviroment

This endpoint returns the enviroments where animals live.

``` json
    [
        {
            "_id": "662d24aaa9cc4064e6be3350",
            "name": "Tundra",
            "image": "https://images.pexels.com/photos/8836210/pexels-photo-8836210.jpeg",
            "description": "La tundra es un vasto bioma frío, caracterizado por su terreno llano, cubierto principalmente por musgos, líquenes y arbustos de baja altura. Este ambiente se encuentra en las regiones más septentrionales del planeta, como en Siberia, Alaska y el norte de Canadá.",
            "__v": 0
        },
        {
            "_id": "662d2505a9cc4064e6be3353",
            "name": "Selva Tropical",
            "image": "https://images.pexels.com/photos/19678111/pexels-photo-19678111/free-photo-of-paisaje-bosque-naturaleza-selva.jpeg",
            "description": "La selva tropical es un ecosistema exuberante y biodiverso, caracterizado por su densa vegetación, altas temperaturas y alta humedad. Este ambiente se encuentra principalmente en las regiones ecuatoriales, como la cuenca del Amazonas, el sudeste asiático y algunas partes de África.",
            "__v": 0
        },
        {
            "_id": "662d25aca9cc4064e6be3355",
            "name": "Desierto",
            "image": "https://images.pexels.com/photos/19254306/pexels-photo-19254306/free-photo-of-paisaje-arena-desierto-estados-unidos.jpeg",
            "description": "Los desiertos son vastas extensiones de tierra árida y seca, con escasa vegetación y variaciones extremas de temperatura entre el día y la noche. Este ambiente se encuentra en regiones como el Sahara, el desierto de Atacama y el desierto de Mojave.",
            "__v": 0
        },
    ]
```

### GET api/enviroment/{id}

This endpoint returns the enviroment with the specified id.

``` json
    {
        "_id": "662d25aca9cc4064e6be3355",
        "name": "Desierto",
        "image": "https://images.pexels.com/photos/19254306/pexels-photo-19254306free-photo-of-paisaje-arena-desierto-estados-unidos.jpeg",
        "description": "Los desiertos son vastas extensiones de tierra árida y seca, conescasa vegetación y variaciones extremas de temperatura entre el día y la noche.Este ambiente se encuentra en regiones como el Sahara, el desierto de Atacama yel desierto de Mojave.",
        "__v": 0
    }
```
