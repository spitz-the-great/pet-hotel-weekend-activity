CREATE TABLE "owners"(
"id" SERIAL PRIMARY KEY,
"owners_name" VARCHAR(20),
"number_of_pets" INTEGER);


CREATE TABLE "pets"(
"id" SERIAL PRIMARY KEY,
"pet_name" VARCHAR(40),
"breed" VARCHAR(20),
"color" VARCHAR(20),
"checked_in" VARCHAR(3),
"attitude" VARCHAR(20),
"swag_level" VARCHAR(20),
"image_url" VARCHAR(200),
"owner_id" INT REFERENCES "owners"
);

CREATE TABLE "owner_pets" (
  id SERIAL PRIMARY KEY,
  owner_id INT REFERENCES "owners",
  pet_id INT REFERENCES "pets"
);

INSERT INTO "owners" ("owners_name", "number_of_pets")
VALUES ('owner1', 1), ('owner2', 1);

-- GET route will need to JOIN on owners to get owner name
-- POST addPet route will need to update number of pets in owners table
-- DELETE route will need to update number of pets in owners table

INSERT INTO "pets" ("pet_name", "breed", "color", "checked_in", "attitude", "swag_level", "image_url", "owner_id")
VALUES ('Yeesus', 'cat', 'whitish', 'No', 'god complex', 'higher than yours',  'https://78.media.tumblr.com/5146f19c28a0028fc18bbaecbd854b41/tumblr_mlcp9guRPJ1r99egpo1_500.jpg', 1
);

INSERT INTO "pets" ("pet_name", "breed", "color", "checked_in", "attitude", "swag_level", "image_url", "owner_id")
VALUES ('old doge kenobi', 'jedi', 'old', 'No', 'old', 'Liam Neeson', 2,
 'https://dogemuchwow.com/wp-content/uploads/2018/04/old-doge.jpg');

