const { request } = require('express');
const express = require('express');
const cors = require("cors")
const app = express();
app.use(cors())
const port = 8000;

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();

let categories = [
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

let nextCatId = categories.length

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

// app.get('/categories/:id', (request, response) => {
//     const { id } = request.params;

//     const filteredArr = articles.filter(e => {
//         return e.categoryId === Number(id) });
//     console.log(filteredArr)
//     response.json(filteredArr);
// });

app.get('/categories/:id', (request, response) => {
    const { id } = request.params;
    let category = null;

    for (const cat of categories) {
        if (id == cat.id) {
            category = cat;
            break;
        }
    }
    response.json(category);
});

app.delete('/categories/:id', (req, res) => {
    const {id} = req.params;
    categories = categories.filter((row) => row.id !==id);
    res.json(id);
});

app.post('/categories', jsonParser, (req, res) => {
    const { name } = req.body;
    const newCategory = {id: nextCatId++, name};
    // categories.push(newCategory);
    res.send(newCategory)
});

app.put('/categories/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    
    let updatedCat;
    categories = categories.map((row) => {
        console.log('aaa');
        if(row.id === Number(id)) {
            updatedCat = {id: Number(id), name};
            return updatedCatl
        }
        return row;
    });
    res.json(updatedCat);
    // const index = categories.findIndex((item) => item.id === Number(id));
    // if (index === -2) {
    //     res.status(400).json('Bad request');
    // } else {
    //     const updatedCategory = categories[index];
    //     updatedCategory.name = name;
    //     categories[index] = updatedCategory;
    //     res.json(updatedCategory);
    // }
});

app.get('/articles', (request, response) => {
    response.status(200);
    response.json(articles);
});

app.listen(port, () => {
    console.log('http://localhost:' + port)
});

