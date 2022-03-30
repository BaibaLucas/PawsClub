-- DEPLOY DATABASE PROFIL MEMBER --
-- 1 -> Connect to PSQL
-- 2 --> Create Database --> CREATE DATABASE {dbname};
-- 3 --> Create User with password ---> CREATE USER {username} WITH PASSWORD {password};
-- 4 --> Link DB with User ---> GRANT ALL PRIVILEGES ON DATABASE {dbname} TO {username}
-- psql -U {username} -d {dbname} -f ./db/init.sql --

BEGIN;

DROP TABLE IF EXISTS "role", "user", "tag", "section", "news", "m2m_user_belong_section" CASCADE;

-------------------------------------
-- Create role table
-------------------------------------
CREATE TABLE "role" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL
);
-------------------------------------
-- Create user table
-------------------------------------
CREATE TABLE "user" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "username" TEXT NOT NULL,
  "email" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "profilurl" TEXT,
  "stream" TEXT,
  "role_id" INT REFERENCES "role"(id) DEFAULT 1,
  "section_id" INT REFERENCES "section"(id),
);
-------------------------------------
-- Create tag table
-------------------------------------
CREATE TABLE "tag" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL
);
-------------------------------------
-- Create section table
-- * Check after if section need ref to user with m2m
-------------------------------------
CREATE TABLE "section" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "sectionurl" TEXT,
  "description" TEXT NOT NULL,
  "content" TEXT NOT NULL
);
-------------------------------------
-- Create news table
-------------------------------------
CREATE TABLE "news" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL,
  "subtitle" TEXT NOT NULL,
  "content" TEXT NOT NULL,
  "newsurl" TEXT,
  "date" DATE NOT NULL,
  "time" TIME WITH TIME ZONE NOT NULL,
  "user_id" INT REFERENCES "user"(id),
  "section_id" INT REFERENCES "section"(id),
  "tag_id" INT REFERENCES "tag"(id)
);
-------------------------------------
-- Create relation between M2M table
-------------------------------------
CREATE TABLE "m2m_user_belong_section" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "user_id" INT REFERENCES "user"(id) ON DELETE CASCADE,
  "section_id" INT REFERENCES "section"(id) ON DELETE CASCADE
);
-------------------------------------
-- Grant privileges for user
-------------------------------------
GRANT ALL PRIVILEGES ON "role", "user", "tag", "section", "news", "m2m_user_belong_section" TO noway;
-------------------------------------
-- Insert values into tables
-------------------------------------
INSERT INTO "role"("name") VALUES
('member'),
('moderator'),
('administrator');

INSERT INTO "user"("username", "email", "password", "profilurl", "stream", "role_id") VALUES
('heda', 'heda@gmail.com', 'Reape2022*', '', 'https://www.twitch.tv/hedarim', '1'),
('liwest', 'li@gmail.com', 'Reape2022*', '', 'https://www.twitch.tv/liwesttv', '1');

-- INSERT INTO "section"("name", "title", "description", "content") VALUES
-- ('World of Warcraft', 'World of Warcraft', 'Bienvenue sur la section World Of Warcraft de la communauté PAWS. Créer courant de l''été 2021, sur le serveur EU-Archimonde Alliance n''a cessé d''agrandir ses rangs. Suite à un choix nous avons décider debut 2022 de migrer la guilde côté Horde sur le serveur EU-Hyjal', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur ut massa in fermentum. Curabitur varius laoreet mauris, et scelerisque ante tempor ac. Nunc eu fringilla dolor. Duis semper eget dui sit amet tincidunt. Mauris molestie ex semper dolor finibus blandit. In eget sem turpis. Morbi sollicitudin est sit amet massa tincidunt sagittis. Nam blandit tempor semper. Nam convallis venenatis purus, eu molestie sapien vulputate consequat. Suspendisse fermentum volutpat ornare. Cras ut nisl felis. Maecenas sit amet metus egestas lacus euismod lacinia ac quis urna. Aliquam erat volutpat. Nulla elementum enim a urna feugiat pharetra.'),
-- ('League Of Legends', 'League Of Legends', 'Bienvenue sur la section League of Legends de la communauté PAWS. Préparez vous pour la nouvelle campagne de Guerande !','Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur ut massa in fermentum. Curabitur varius laoreet mauris, et scelerisque ante tempor ac. Nunc eu fringilla dolor. Duis semper eget dui sit amet tincidunt. Mauris molestie ex semper dolor finibus blandit. In eget sem turpis. Morbi sollicitudin est sit amet massa tincidunt sagittis. Nam blandit tempor semper. Nam convallis venenatis purus, eu molestie sapien vulputate consequat. Suspendisse fermentum volutpat ornare. Cras ut nisl felis. Maecenas sit amet metus egestas lacus euismod lacinia ac quis urna. Aliquam erat volutpat. Nulla elementum enim a urna feugiat pharetra.'),
-- ('Rocket League', 'Rocket League', 'Bienvenue sur la section Rocket League de la communauté PAWS.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur ut massa in fermentum. Curabitur varius laoreet mauris, et scelerisque ante tempor ac. Nunc eu fringilla dolor. Duis semper eget dui sit amet tincidunt. Mauris molestie ex semper dolor finibus blandit. In eget sem turpis. Morbi sollicitudin est sit amet massa tincidunt sagittis. Nam blandit tempor semper. Nam convallis venenatis purus, eu molestie sapien vulputate consequat. Suspendisse fermentum volutpat ornare. Cras ut nisl felis. Maecenas sit amet metus egestas lacus euismod lacinia ac quis urna. Aliquam erat volutpat. Nulla elementum enim a urna feugiat pharetra.'),
-- ('Diablo 3', 'Diablo 3', 'Bienvenue sur la section Diablo 3 de la communauté PAWS.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur ut massa in fermentum. Curabitur varius laoreet mauris, et scelerisque ante tempor ac. Nunc eu fringilla dolor. Duis semper eget dui sit amet tincidunt. Mauris molestie ex semper dolor finibus blandit. In eget sem turpis. Morbi sollicitudin est sit amet massa tincidunt sagittis. Nam blandit tempor semper. Nam convallis venenatis purus, eu molestie sapien vulputate consequat. Suspendisse fermentum volutpat ornare. Cras ut nisl felis. Maecenas sit amet metus egestas lacus euismod lacinia ac quis urna. Aliquam erat volutpat. Nulla elementum enim a urna feugiat pharetra.');

-------------------------------------
--- /!\ CAN'T WORK IF WE HAVNT CREATE SOME USERS/TAG BEFORE INSERT VALUES
-------------------------------------
-- INSERT INTO "tag"("name") VALUES
-- ('Try');
-- ('Try2');
-- INSERT INTO "news"("title", "subtitle", "content", "newsurl", "date", "time", "user_id", "tag_id") VALUES
-- ('TITLE1', 'suBTITLE1', 'Content1', 'http://myphotourlnews.fr', '02/16/2022', '13:00', '4', '1');
-- ('TITLE2', 'suBTITLE2', 'Content2', 'http://myphotourlnews.fr', '02/16/2022', '14:00', '6', '2');
-------------------------------------
--- /!\ CAN'T WORK IF WE HAVNT CREATE SOME USERS/TAG BEFORE INSERT VALUES
-------------------------------------


COMMIT;