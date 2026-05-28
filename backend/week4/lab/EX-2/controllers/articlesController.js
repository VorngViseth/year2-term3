import { articles } from "../models/data.js";

export function getAll(req, res) {
    return res.send(articles);
}

export function getById(req, res) {
    const id = Number(req.params.id);

    const articleIndex = articles.findIndex(a => a.id == id);  

    if (Number.isNaN(id))
        return res.status(400).send({ error: 'Invalid article id' });

    if(articleIndex == -1) 
        return res.status(404).send({error: "article not found"});

    res.send(articles[articleIndex]);
}

export function createNewArticle(req, res) {
    const body = req.body;

    if(!body.title || !body.content || !body.journalistId || !body.categoryId)
        return res.status(400).send({error: 'title, content, journalistId, categoryId is needed'});

    const newId = articles[articles.length - 1].id + 1;
    const newArticle = {id: newId, title: body.title, content: body.content, journalistId: body.journalistId, categoryId: body.categoryId};

    articles.push(newArticle);

    res.status(201).send(newArticle);
}

export function updateArticleById(req, res) {
    const id = Number(req.params.id);
    const body = req.body;

    if (Number.isNaN(id))
        return res.status(400).send({ error: 'Invalid article id' });

    if(!body.title && !body.content && !body.journalistId && !body.categoryId)
        return res.status(400).send({error: 'At least one field (title, content, journalistId, categoryId) is required for update'});

    const articleIndex = articles.findIndex(a => a.id == id);
    if(articleIndex == -1)
        return res.status(404).send({error: "article not found"});

    articles[articleIndex] = {
        ...articles[articleIndex],
        ...body
    };

    res.send(articles[articleIndex]);
}

export function deleteArticleById(req, res) {
    const id = Number(req.params.id);

    if (Number.isNaN(id))
        return res.status(400).send({ error: 'Invalid article id' });

    const articleIndex = articles.findIndex(a => a.id == id);
    if(articleIndex == -1)
        return res.status(404).send({error: "article not found"});

    const deletedArticle = articles.splice(articleIndex, 1);
    res.status(204).send();
}