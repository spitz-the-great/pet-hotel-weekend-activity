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
"attitude" VARCHAR(20),
"swag_level" VARCHAR(20)
);


