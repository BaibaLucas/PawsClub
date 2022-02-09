-- DEPLOY DATABASE PROFIL MEMBER --
-- 1 -> Connect to PSQL
-- 2 --> Create Database --> CREATE DATABASE {dbname};
-- 3 --> Create User with password ---> CREATE USER {username} WITH PASSWORD {password};
-- 4 --> Link DB with User ---> GRANT ALL PRIVILEGES ON DATABASE {dbname} TO {username}
-- psql -U {username} -d {dbname} -f ./migrations/deploy/init.sql --

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
  "role_id" INT REFERENCES "role"(id) DEFAULT 1
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
  "newsurl" TEXT NOT NULL,
  "date" DATE NOT NULL,
  "time" TIME WITH TIME ZONE NOT NULL,
  "user_id" INT REFERENCES "user"(id),
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

COMMIT;