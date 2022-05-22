const { List, Card, Tag } = require('./models/index');


const run = async () => {
    try {
        let card = await Card.findByPk(1);

        console.log(card.tagsList);

        const tag = await Tag.findByPk(1);

        await card.addTagsList(tag);

        card = await Card.findByPk(1, {
            include: {
                association: "tagsList"
            }
        });

        console.log(card.tagsList);


        // const lists = await List.findAll({
        //     include: [
        //         {
        //             association: 'cardsList',
        //             include: [{
        //                 association: 'tagsList'
        //             }]
        //         }
        //     ]
        // });

        // // On peut tester d'accéder aux différents niveaux d'associations
        // //  qu'on a demandé dans la requête
        // console.log(lists[0].cardsList[0].tagsList);

    } catch(error) {
        console.trace(error);
    }
}

run();
