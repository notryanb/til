# Developer Environment Setup 

## OSX / Unix

Dev Tools to make sure you have
- nvm (Node Version Manager) `nvm --version` => 0.33.0 on my machine.
- node Current or LTS(latests). These are v6.9.5 || v7.4.0 right now. Can be later.

---

## Cloning the repository

**MacOSX**

In Terminal

`git clone https://github.com/notryanb/til.git`

**Windows**

Working on it...

## Development Tools
  - PostgreSQL
  - Yarn

**Installing PostgreSQL**

**MacOSX**

  - brew Update
  - brew install postgresql

**Windows**

Working on it...

**Installing Yarn**

**MacOSX**

  - brew install yarn

**Windows**
Working on it..

---

## Creating Our Databases for development & testing
**MaxOSX**
In Terminal

`createdb til_dev`

`createdb til_test`

To open PG from cli

`psql`

Check if your db's were created

`\l`

**Windows**

Working on it...

---

## Installing JS dependencies

**MacOSX**

`yarn install`

**Windows**

Working on it...


---

## Sequelize CLI 

This adds the sequelize-cli package globally so you don't have to type yarn before it.

`yarn global add sequelize-cli`

`sequelize` => Will output help doc menu if correct.:wq

---


## Migrations

`sequelize model:create --name user --attibutes 'first_name:string, last_name:string, email:string, active:boolean, bio:text'`



