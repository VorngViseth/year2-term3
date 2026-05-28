import { journalists } from '../models/data.js';

export function getAll(req, res) {
    return res.send(journalists);
}

export function getById(req, res) {
    const id = Number(req.params.id);

    const journalistIndex = journalists.findIndex(j => j.id == id);  

    if (Number.isNaN(id))
        return res.status(400).send({ error: 'Invalid journalist id' });

    if(journalistIndex == -1) 
        return res.status(404).send({error: "journalist not found"});

    res.send(journalists[journalistIndex]);
}

export function createNewJournalist(req, res) {
    const body = req.body;

    if (!body.name || !body.email)
        return res.status(400).send({error: 'name and email is required'});

    const newId = journalists[journalists.length - 1].id + 1;
    const newJournalist = { id: newId, name: body.name, email: body.email };

    journalists.push(newJournalist);
    res.status(201).send(newJournalist);
}

export function updateJournalistById(req, res) {
    const id = Number(req.params.id);
    const body = req.body;

    if (Number.isNaN(id))
        return res.status(400).send({ error: 'Invalid journalist id' });

    if (!body.name && !body.email)
        return res.status(400).send({error: 'name or email is required'});

    const journalistIndex = journalists.findIndex(j => j.id == id);
    if(journalistIndex == -1)
        return res.status(404).send({error: "jounalist not found"});

    journalists[journalistIndex] = {
        ...journalists[journalistIndex],
        ...body
    };

    res.send(journalists[journalistIndex]);
}

export function deleteJournalistById(req, res) {
    const id = Number(req.params.id);

    if (Number.isNaN(id))
        return res.status(400).send({ error: 'Invalid journalist id' });

    const journalistIndex = journalists.findIndex(j => j.id == id);
    if(journalistIndex == -1)
        return res.status(404).send({error: "jounalist not found"});

    const deleteJournalist = journalists.splice(journalistIndex, 1);
    res.status(204).send();
}