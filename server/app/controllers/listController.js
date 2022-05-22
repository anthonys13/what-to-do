const { List } = require('../models/index');

const listController = {
    getAllLists: async (request, response) => {
        try {
            const lists = await List.findAll({
                include: {
                    association: 'cardsList',
                    include: 'tagsList'
                    },
                order: [
                    ['position', 'ASC'],
                    ['cardsList', 'position', 'ASC']
                ]
            });
    
            // Une API peut renvoyer du json avec la méthode .json() dédiée fournie
            // par express
            response.json(lists);
    
        } catch(error) {
            console.trace(error);

            // Pour bien gérer nos erreurs en cas de problème, on a le droit de renvoyer 
            // une erreur 500 avec du json qui contient le message de notre erreur
            response.status(500).json(error.toString());
        }
    },

    createList: async (request, response) => {
        try {
            const { name, position } = request.body;

            // On pourrait si on le souhaite gérer une erreur spécifique
            // lorsque côté client aucun "name" n'est transmis avec le POST
            //  Ici on utilisera le statuts 400 (BAD REQUEST) qui correspond
            //  à un contenu invalide envoyé par le client: https://developer.mozilla.org/fr/docs/Web/HTTP/Status/400
            if(!name) {
                response.status(400).json(
                    {
                        code: "missing_name",
                        message: "Le champ name ne peut pas être vide"
                    }
                );
            }

            const createdList = await List.create({ name, position });

            // En général on aime sur une route en POST renvoyer en json
            // l'élément qu'on vient de créer
            response.json(createdList);
    
        } catch(error) {
            console.trace(error);

            response.status(500).json(error.toString());
        }
    },

    getOneList: async (request, response) => {
        try {
            
            const listId = request.params.id;

            const list = await List.findByPk(listId, {
                include: {
                    association: 'cardsList',
                    include: 'tagsList'
                    },
                order: [
                    ['position', 'ASC'],
                    ['cardsList', 'position', 'ASC']
                ]
            })

            // On va contrôler si sequelize a bien trouvé une liste avec l'id correspondant
            if(list) {
                //  Si oui, on renvoie notre liste en json
                response.json(list);

            } else {
                //  Si non, on renvoie une réponse 404 (ressource non trouvée) avec un petit
                // message qui reprend l'id qui pose problème
                response.status(404).json(
                    {
                        code: "wrong_id",
                        message: `La liste avec l'id ${listId} n'existe pas`
                    }
                );
            }

        } catch(error) {
            console.trace(error);

            response.status(500).json(error.toString());
        }
    },

    modifyList: async (request, response) => {
        try {
            
            const listId = request.params.id;

            //  On récupère la liste qu'on souhaite modifier
            const list = await List.findByPk(listId);

            // On va contrôler si sequelize a bien trouvé une liste avec l'id correspondant
            if(list) {
                //  Si oui, on peut alors extraire nos infos du body

                const { name, position } = request.body;

                //  On met à jour sur notre liste récupérée les infos avec les nouvelles
                //  valeurs (uniquement si elles ont été fournies)
                if(name) {
                    list.name = name;
                };

                if(position) {
                    list.position = position;
                };

                await list.save();

                response.json(list);

            } else {
                //  Si non, on renvoie une réponse 404 (ressource non trouvée) avec un petit
                // message qui reprend l'id qui pose problème
                response.status(404).json(
                    {
                        code: "wrong_id",
                        message: `La liste avec l'id ${listId} n'existe pas`
                    }
                );
            }

        } catch(error) {
            console.trace(error);

            response.status(500).json(error.toString());
        }
    },

    deleteList: async (request, response) => {
        try {
            
            const listId = request.params.id;

            //  On récupère la liste qu'on souhaite modifier
            const list = await List.findByPk(listId);

            // On va contrôler si sequelize a bien trouvé une liste avec l'id correspondant
            if(list) {

                await list.destroy();

                response.json(`La liste avec l'id ${listId} a bien été supprimée`);

            } else {
                //  Si non, on renvoie une réponse 404 (ressource non trouvée) avec un petit
                // message qui reprend l'id qui pose problème
                response.status(404).json(
                    {
                        code: "wrong_id",
                        message: `La liste avec l'id ${listId} n'existe pas`
                    }
                );
            }

        } catch(error) {
            console.trace(error);

            response.status(500).json(error.toString());
        }
    }
};

module.exports = listController;
