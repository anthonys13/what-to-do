const express = require('express');
const cardController = require('./controllers/cardController');

const router = express.Router();

const listController = require('./controllers/listController');
const tagController = require('./controllers/tagController');

/* router.get('/', (request, response) => {
    response.send('Ping');
}); */

// List
router.get('/lists', listController.getAllLists);
router.post('/lists', listController.createList);

router.get('/lists/:id', listController.getOneList);
router.patch('/lists/:id', listController.modifyList);
router.delete('/lists/:id', listController.deleteList);

// Card
router.get('/lists/:id/cards', cardController.getAllCardsFromList);

router.get('/cards/:id', cardController.getOneCard);
router.patch('/cards/:id', cardController.modifyCard);
router.delete('/cards/:id', cardController.deleteCard);

router.post('/cards', cardController.createCard);

// Tag
router.get('/tags', tagController.getAllTags);
router.post('/tags', tagController.createTag);

router.patch('/tags/:id', tagController.modifyTag);
router.delete('/tags/:id', tagController.deleteTag);

router.post('/cards/:id/tag', tagController.addTagToCard);

router.delete('/cards/:card_id/tag/:tag_id', tagController.removeTagFromCard);

module.exports = router;
