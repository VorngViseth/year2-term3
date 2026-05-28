import { categories } from '../models/data.js';

export function getAll(req, res) {
    return res.send(categories);
}

export function getById(req, res) {
    const id = Number(req.params.id);

    const categoryIndex = categories.findIndex(c => c.id == id);  

    if (Number.isNaN(id))
        return res.status(400).send({ error: 'Invalid category id' });

    if(categoryIndex == -1) 
        return res.status(404).send({error: "category not found"});

    res.send(categories[categoryIndex]);
}

export function createNewCategory(req, res) {
    const body = req.body;

    if (!body.name)
        return res.status(400).send({error: 'name is required'});

    const newId = categories[categories.length - 1].id + 1;
    const newCategory = { id: newId, name: body.name };

    categories.push(newCategory);
    res.status(201).send(newCategory);
}

export function updateCategoryById(req, res) {
    const id = Number(req.params.id);
    const body = req.body;

    if (Number.isNaN(id))
        return res.status(400).send({ error: 'Invalid category id' });

    if (!body.name)
        return res.status(400).send({error: 'name is required'});

    const categoryIndex = categories.findIndex(c => c.id == id);
    if(categoryIndex == -1)
        return res.status(404).send({error: "category not found"});

    categories[categoryIndex] = {
        ...categories[categoryIndex],
        ...body
    };

    res.send(categories[categoryIndex]);
}

export function deleteCategoryById(req, res) {
    const id = Number(req.params.id);

    if (Number.isNaN(id))
        return res.status(400).send({ error: 'Invalid category id' });

    const categoryIndex = categories.findIndex(c => c.id == id);
    if(categoryIndex == -1)
        return res.status(404).send({error: "category not found"});

    const deleteCategory = categories.splice(categoryIndex, 1);
    res.status(204).send();
}