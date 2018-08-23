CREATE TABLE "owners"(
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(20),
"number of pets" INTEGER);

INSERT INTO "owners" ("name", "number of pets")
VALUES ('owner1', 2), ('owner2', 1),
('owner3', 3 );

CREATE TABLE "pets"(
"id" SERIAL PRIMARY KEY,
"owner_name" VARCHAR(20),
"pet_name" VARCHAR(40),
"breed" VARCHAR(20),
"color" VARCHAR(20),
"checked_in" VARCHAR(3),
"attitude" VARCHAR(20),
"swag_level" VARCHAR(20),
"image_url" VARCHAR(200)
);


INSERT INTO "pets" ("owner_name", "pet_name", "breed", "color", "checked_in", "attitude", "swag_level", "image_url")
VALUES ('owner1', 'tyrone biggums', 'cat', 'Hazel', 'Yes', 'high anxiety', 'non-existent',
 'https://i.pinimg.com/236x/7d/2d/57/7d2d5725cdecdc10bbc117b8f3b99c60--funny-cats-funny-animals.jpg');

