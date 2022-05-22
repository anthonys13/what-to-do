const List = require('./list');
const Card = require('./card');
const Tag = require('./tag');

// Associations

// 1 List peut avoir plusieurs Card
List.hasMany(Card, {
    // On définit avec 'as' un alias pour la clé
    // dans laquelle on récupérera les cards associées à chaque liste 
    // On utilisera cet alias lorsqu'on souhaitera demander des associations (quand on appelle la méthode
    // "findAll" par exemple)
    as: 'cardsList',
    foreignKey: 'list_id'
});

//  1 Card appartient à une seule List
Card.belongsTo(List, {
    as: 'list',
    foreignKey: 'list_id'
});

//  1 Card peut avoir plusieurs Tag
Card.belongsToMany(Tag, {
    as: 'tagsList',
    // On donne le nom de la table de liaison correspondante dans notre DB
    through: 'card_has_tag',
    //  la foreign key ici correspond à la clé étrangère de l'élément qu'on est en
    // train de configurer (ici Card)
    foreignKey: 'card_id',
    // la other_key correspond à "l'autre" élément qu'on est en train d'associer (ici Tag)
    otherKey: 'tag_id'
});

//  1 Tag peut appartenir à plusieurs Card
Tag.belongsToMany(Card, {
    as: 'cardsList',
    // On donne le nom de la table de liaison correspondante dans notre DB
    through: 'card_has_tag',
    foreignKey: 'tag_id',
    otherKey: 'card_id'
});

module.exports = { List, Card, Tag };
