const { request } = require('express');
const express = require('express');
const cors = require("cors")
const app = express();
app.use(cors())
const port = 8000;

const categories = [
    {
        id: 1,
        name: 'Menu',
    },
    {
        id: 2,
        name: 'Happy hour',
    },
    {
        id: 6,
        name: 'Combo',
    },
]

const articles = [
    {
        id: 1,
        name: 'Menu',
        imageUrl: "https://www.justonecookbook.com/wp-content/uploads/2022/12/California-Roll-6147-II.jpg",
        categoryId : 1
    },
    {
        id: 2,
        name: 'Menu',
        imageUrl: "https://www.justonecookbook.com/wp-content/uploads/2022/12/California-Roll-6147-II.jpg",
        categoryId : 1,
        text : 'zagasni tuhai huehd'
    },
    {
        id: 3,
        name: 'Menu',
        imageUrl: "https://www.justonecookbook.com/wp-content/uploads/2022/12/California-Roll-6147-II.jpg",
        categoryId : 1
    },
    {
        id: 4,
        name: 'Menu',
        imageUrl: "https://www.justonecookbook.com/wp-content/uploads/2022/12/California-Roll-6147-II.jpg",
        categoryId : 1
    },
    {
        id: 5,
        name: 'Menu',
        imageUrl: "https://www.justonecookbook.com/wp-content/uploads/2022/12/California-Roll-6147-II.jpg",
        categoryId : 2
    },
    {
        id: 6,
        name: 'Menu',
        imageUrl: "https://www.justonecookbook.com/wp-content/uploads/2022/12/California-Roll-6147-II.jpg",
        categoryId : 2
    },
    {
        id: 7,
        name: 'Menu',
        imageUrl: "https://www.justonecookbook.com/wp-content/uploads/2022/12/California-Roll-6147-II.jpg",
        categoryId : 2
    },
    {
        id: 8,
        name: 'Zagas ii huhed',
        imageUrl: "https://www.justonecookbook.com/wp-content/uploads/2022/12/California-Roll-6147-II.jpg",
        categoryId : 1
    },
    
]

app.get('/categories', (request, response) => {
    response.status(200);
    response.json(categories);
});

app.get('/categories/:id', (request, response) => {
    const { id } = request.params;

    const filteredArr = articles.filter(e => {
        return e.categoryId === Number(id) });
    console.log(filteredArr)
    response.json(filteredArr);
});

app.get('/articles', (request, response) => {
    response.status(200);
    response.json(articles);
});

app.listen(port, () => {
    console.log('http://localhost:' + port)
});

