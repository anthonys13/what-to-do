const { Tag, Card } = require('../models/index');

const tagController = {
    getAllTags: async (request, response) => {
        try {
            const tagsList = await Tag.findAll();

            response.json(tagsList);
        } catch (error) {
            console.trace(error);

            response.status(500).json(error.toString());
        }
    },

    createTag: async (request, response) => {
        try {
            const { name, color } = request.body;

            if (!name) {
                response.status(400).json(
                    {
                        code: "missing_name",
                        message: "Le champ name ne peut pas être vide"
                    }
                );
            }

            const createdTag = await Tag.create({ name, color });

            response.json(createdTag);

        } catch (error) {
            console.trace(error);

            response.status(500).json(error.toString());
        }
    },

    modifyTag: async (request, response) => {
        try {

            const tagId = request.params.id;

            const tag = await Tag.findByPk(tagId);

            if (tag) {

                const { name, color } = request.body;

                if (name) {
                    tag.name = name;
                };

                if (color) {
                    tag.color = color;
                };

                await tag.save();

                response.json(tag);
            }

        } catch (error) {
            console.trace(error);

            response.status(500).json(error.toString());
        }
    },

    deleteTag: async (request, response) => {
        try {

            const tagId = request.params.id;

            const tag = await Tag.findByPk(tagId);

            if (tag) {

                await tag.destroy();

                response.json(`Le tag avec l'id ${tagId} a bien été supprimée`);

            } else {
                response.status(404).json(
                    {
                        code: "wrong_id",
                        message: `Le tag avec l'id ${tagId} n'existe pas`
                    }
                );
            }

        } catch (error) {
            console.trace(error);

            response.status(500).json(error.toString());
        }
    },

    addTagToCard: async (request, response) => {

        try {
            // On doit récupérer l'id de notre card dans l'url
            const cardId = request.params.id;
            // On doit récupérer l'id du tag dans notre body
            const tagId = request.body.tagId;

            //  On récupère la carte sur laquelle on veut ajouter le tag
            let card = await Card.findByPk(cardId, {
                include: {
                    association: "tagsList"
                }
            });

            // On contrôle qu'on a bien trouvé une carte
            // ATTENTION: si on ne met pas de "else", il faut bien penser
            // à utiliser return pour stopper l'exécution du code qui suit
            if (!card) {
                return response.status(404).json({
                    code: "wrong_card_id",
                    message: `La carte avec l'id ${cardId} n'existe pas`
                })
            }

            // Même chose pour le tag
            const tag = await Tag.findByPk(tagId);

            if (!tag) {
                return response.status(404).json({
                    code: "wrong_tag_id",
                    message: `Le tag avec l'id ${tagId} n'existe pas`
                })
            }

            // Sequelize nous met à disposition une méthode qui permet
            //  d'ajouter directement un tag à une carte
            // le nom de cette méthode est générée ainsi: add<Alias>
            // ATTENTION: si votre alias commence par une minuscule, celle-ci
            // est transformée en majuscule
            await card.addTagsList(tag);

            // Attention, pour pouvoir renvoyer la card à jour, on est obligé
            // de rappeler la méthode findByPk pour mettre à jour notre liste de tag dans 
            //  l'instance de notre variable (pour qu'elle soit en accord avec sa véritable version
            //  modifiée en DB):
            card = await Card.findByPk(cardId, {
                include: {
                    association: "tagsList"
                }
            });

            response.json(card);

            // Version .then
            // card.addTagsLists(tag).then(() => {
            //     Card.findByPk(cardId, {
            //         include: 'tagsLists'
            //     }).then((foundedCard) => {
            //         card = foundedCard;
            //         response.json(card);
            // });
            // });

        } catch (error) {
            console.trace(error);

            response.status(500).json(error.toString());
        }

    },

    removeTagFromCard: async (request, response) => {
        try {
            // On doit récupérer l'id de notre card dans l'url
            // ATTENTION à bien renommer les clés comme leur nom dans l'URL
            const cardId = request.params.card_id;
            // Cette fois on récupère l'id de tag depuis l'url
            const tagId = request.params.tag_id;

            //  On récupère la carte sur laquelle on veut ajouter le tag
            let card = await Card.findByPk(cardId, {
                include: {
                    association: "tagsList"
                }
            });

            // On contrôle qu'on a bien trouvé une carte
            // ATTENTION: si on ne met pas de "else", il faut bien penser
            // à utiliser return pour stopper l'exécution du code qui suit
            if (!card) {
                return response.status(404).json({
                    code: "wrong_card_id",
                    message: `La carte avec l'id ${cardId} n'existe pas`
                })
            }

            // Même chose pour le tag
            const tag = await Tag.findByPk(tagId);

            if (!tag) {
                return response.status(404).json({
                    code: "wrong_tag_id",
                    message: `Le tag avec l'id ${tagId} n'existe pas`
                })
            }

            // De la même manière que pour ajouter un tag, Sequelize met à disposition
            //  une autre méthode pour supprimer un tag (basée sur le nom de l'alias).
            await card.removeTagsList(tag);

            // Attention, pour pouvoir renvoyer la card à jour, on est obligé
            // de rappeler la méthode findByPk pour mettre à jour notre liste de tag dans 
            //  l'instance de notre variable (pour qu'elle soit en accord avec sa véritable version
            //  modifiée en DB):
            card = await Card.findByPk(cardId, {
                include: {
                    association: "tagsList"
                }
            });

            response.json(card);

            // Version .then
            // card.addTagsLists(tag).then(() => {
            //     Card.findByPk(cardId, {
            //         include: 'tagsLists'
            //     }).then((foundedCard) => {
            //         card = foundedCard;
            //         response.json(card);
            // });
            // });

        } catch (error) {
            console.trace(error);

            response.status(500).json(error.toString());
        }
    }
};

module.exports = tagController;