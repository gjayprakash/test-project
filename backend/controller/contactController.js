const repo = require('../repository/contactRepository');

function GetContacts(req, res) {
    repo.GetContacts().then(data => {
        res.send(data);
    });
}

function AddContact(req, res) {
    repo.AddContact(req.body).then(data => {
        res.send(data);
    });
}

function GetContact(req, res) {
    repo.GetContact(req.params.id).then(data => {
        res.send(data);
    });
}

function DeleteContact(req, res) {
    repo.DeleteContact(req.params.id).then(data => {
        res.send(data);
    });
}

function UpdateContact(req, res) {
    repo.UpdateContact(req.params.id, req.body).then(data => {
        res.send(data);
    });
}

module.exports = { GetContacts, AddContact, GetContact, DeleteContact, UpdateContact }