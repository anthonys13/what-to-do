const { Card, List } = require('../models/index');

const cardController = {
    getAllCardsFromList: async (request, response) => {
        try {
            const listId = request.params.id;

            const list = await List.findByPk(listId);

            if(!list) {
                return response.status(404).json(
                    {
                        code: "wrong_id",
                        message: `La liste avec l'id ${listId} n'existe pas`
                    }
                );
            }

            const cardsList = await Card.findAll(
                {
                    where: {
                        list_id: listId
                    },
                    include: {
                        association: 'tagsList',
                        },
                    order: [
                        ['position', 'ASC']
                    ]
                });

                    // Ici ce n'est pas un problème de renvoyer un tableau vide si aucune carte
                    // n'existe pour une liste, car côté front on peut boucler sans soucis sur le tableau
                    //  qu'il soit vide ou non
                    response.json(cardsList);
                

        } catch (error) {
            console.trace(error);

            response.status(500).json(error.toString());
        }
    },

    getOneCard: async (request, response) => {
        try {
            
            const cardId = request.params.id;

            const card = await Card.findByPk(cardId, {
                include: {
                    association: 'tagsList',
                    },
                order: [
                    ['position', 'ASC'],
                ]
            })

            if(card) {
                response.json(card);

            } else {
                response.status(404).json(
                    {
                        code: "wrong_id",
                        message: `La carte avec l'id ${cardId} n'existe pas`
                    }
                );
            }

        } catch(error) {
            console.trace(error);

            response.status(500).json(error.toString());
        }
    },

    createCard: async (request, response) => {
        try {
            const { description, position, color, list_id } = request.body;

            if(!description) {
                return response.status(400).json(
                    {
                        code: "missing_description",
                        message: "Le champ 'description' ne peut pas être vide"
                    }
                );
            }

            if(!list_id) {
                return response.status(400).json(
                    {
                        code: "missing_list_id",
                        message: "Le champ 'list_id' ne peut pas être vide"
                    }
                );
            }

            const createdCard = await Card.create({ description, position, color, list_id });

            response.json(createdCard);

        } catch (error) {
            console.trace(error);

            response.status(500).json(error.toString());
        }
    },

    modifyCard: async (request, response) => {
        try {
            
            const cardId = request.params.id;

            const card = await Card.findByPk(cardId);

            if(card) {

                const { description, position, color, list_id } = request.body;

                if(description) {
                    card.description = description;
                };

                if(position) {
                    card.position = position;
                };

                if(color) {
                    card.color = color;
                };

                if(list_id) {
                    card.list_id = list_id;
                };

                await card.save();

                response.json(card);
            }

        } catch (error) {
            console.trace(error);

            response.status(500).json(error.toString());
        }
    },

    deleteCard: async (request, response) => {
        try {
            
            const cardId = request.params.id;

            const card = await Card.findByPk(cardId);

            if(card) {

                await card.destroy();

                response.json(`La carte avec l'id ${cardId} a bien été supprimée`);

            } else {
                response.status(404).json(
                    {
                        code: "wrong_id",
                        message: `La carte avec l'id ${cardId} n'existe pas`
                    }
                );
            }

        } catch(error) {
            console.trace(error);

            response.status(500).json(error.toString());
        }
    },
};

module.exports = cardController;