-- DEPLOY DATABASE PROFIL MEMBER --
-- 1 -> Connect to PSQL
-- 2 --> Create Database --> CREATE DATABASE {dbname};
-- 3 --> Create User with password ---> CREATE USER {username} WITH PASSWORD {password};
-- 4 --> Link DB with User ---> GRANT ALL PRIVILEGES ON DATABASE {dbname} TO {username}
-- psql -U {username} -d {dbname} -f ./db/init.sql --

BEGIN;

DROP TABLE IF EXISTS "role", "user", "tag", "section", "news" CASCADE;

-------------------------------------
-- Create role table
-------------------------------------
CREATE TABLE "role" (
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
-- Create user table
-------------------------------------
CREATE TABLE "user" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "username" TEXT NOT NULL,
  "email" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "profilurl" TEXT,
  "stream" TEXT,
  "verified" BOOLEAN NOT NULL DEFAULT FALSE,
  "role_id" INT REFERENCES "role"(id) DEFAULT 1,
  "section_id" INT REFERENCES "section"(id)
);
-------------------------------------
-- Create tag table
-------------------------------------
CREATE TABLE "tag" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL
);
-------------------------------------
-- Create news table
-------------------------------------
CREATE TABLE "news" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL UNIQUE,
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
-- Grant privileges for user
-------------------------------------
GRANT ALL PRIVILEGES ON "role", "user", "tag", "section", "news" TO noway;
-------------------------------------
-- Insert values into tables
-------------------------------------
INSERT INTO "role"("name") VALUES
('member'),
('moderator'),
('administrator');
-------------------------------------


COMMIT;
