const router = require('express').Router();
const { GetContacts, AddContact, GetContact, DeleteContact, UpdateContact } = require('../controller/contactController');

router.get('/contacts', GetContacts);
router.post('/contacts', AddContact);
router.get('/contacts/:id', GetContact);
router.delete('/contacts/:id', DeleteContact);
router.put('/contacts/:id', UpdateContact);

module.exports = router;