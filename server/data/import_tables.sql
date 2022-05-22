-- On démarre une transaction afin que celle-ci ne s'exécute que si toutes les opérations
-- se déroulent bien

-- list ( id INTEGER, name TEXT, position INTEGER created_at TIMESTAMPTZ, updated_at TIMESTAMPTZ)
-- card ( id INTEGER, description TEXT, position INTEGER, color TEXT, #list(id) INTEGER, created_at TIMESTAMPTZ, updated_at TIMESTAMPTZ)
-- tag ( id INTEGER, name TEXT, color TEXT, created_at TIMESTAMPTZ, updated_at TIMESTAMPTZ)
-- card_has_tag ( #card(id) INTEGER, #tag(id) INTEGER, created_at TIMESTAMPTZ)

BEGIN;

DROP TABLE IF EXISTS "list", 
"card", 
"tag", 
"card_has_tag";

-- Création de notre table list
CREATE TABLE "list" (
    -- Ici on utilise ALWAYS plutôt que BY DEFAULT pour empêcher la possibilité
    -- d'écraser l'id généré automatiquement par un id passé à la main
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "position" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

-- Création de notre table card
CREATE TABLE "card" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "description" TEXT NOT NULL DEFAULT '',
    "position" INTEGER NOT NULL DEFAULT 0,
    "color" TEXT NOT NULL DEFAULT '#FFF',
    -- On utilise ici la contrainte ON DELETE CASCADE pour s'assurer que si l'on supprime
    -- une liste, alors toutes les cartes possédant l'id de cette liste seront supprimées aussi
    "list_id" INTEGER NOT NULL REFERENCES list("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

-- Création de notre table tag
CREATE TABLE "tag" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "color" TEXT NOT NULL DEFAULT '#FFF',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "card_has_tag" (
    "card_id" INTEGER NOT NULL REFERENCES card("id") ON DELETE CASCADE,
    "tag_id" INTEGER NOT NULL REFERENCES tag("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ
);

INSERT INTO "list" ("name", "position") VALUES
('IN PROGRESS', 1),
('TO DO', 10),
('Monday', 3),
('Tuesday', 4),
('Wednesday', 5),
('Thursday', 6),
('Friday', 7),
('Saturday', 8),
('Sunday', 9);


INSERT INTO "card" ("description", "position", "color", "list_id") VALUES 
('Carte 1', 1, '#c89393', 2),
('Carte 2', 1, '#c89393', 2),
('Carte 3', 1, '#c89393', 2),
('Carte 4', 1, '#c89393', 1),
('Carte 5', 1, '#c89393', 1),
('Carte 6', 1, '#c89393', 1),
('Carte 7', 1, '#c89393', 3),
('Carte 8', 1, '#c89393', 3),
('Carte 9', 1, '#c89393', 3),
('Carte 10', 1, '#c89393', 3),
('Carte 11', 1, '#c89393', 4),
('Carte 12', 1, '#c89393', 4),
('Carte 13', 1, '#c89393', 4),
('Carte 14', 1, '#c89393', 4),
('Carte 15', 1, '#c89393', 5),
('Carte 16', 1, '#c89393', 5),
('Carte 17', 1, '#c89393', 5),
('Carte 18', 1, '#c89393', 6),
('Carte 19', 1, '#c89393', 7),
('Carte 20', 1, '#c89393', 8),
('Carte 21', 2, '#c89393', 9);

INSERT INTO "tag" ("name", "color") VALUES
('Done', '#7a7a7a'),
('Important', '#fb9600e6'),
('Need focus time', '##209cee'),
('Success', '#23d1608c'),
('Info', '#d1bc2c'),
('Urgent', '#e70909');

-- On oublie pas la table de liaison !
INSERT INTO "card_has_tag" ("card_id", "tag_id") VALUES
(2, 1);

COMMIT;
