# Commerce-ial-Revolution

## Description

- This project utilizes Express.js, Sequelize, and mySQL to create the back-end of an e-commerce site through Obeject-Relational Mapping in place of writing SQL queries to manipulate the given data.

- Upon sourcing the schema, and running the seeds, the express routes get the data, specific data, insert new data, updates current data, and deletes specific data when ran on Insomnia.

- This project helps to better understand how Object Relational Mapping structures the database and how it can be manipulated.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To ensure all proper dependencies are installed, run the following commands: 

```
    npm install
```

To install dotenv:

```
    npm install dotenv --save
```

To install Express:

```
    npm install express
```

To install mySQL2:

```
    npm install --save mysql2
```

To install Sequelize:

```
    npm install --save sequelize
```
## Usage
Before initializing, be sure to source the schema.sql file with the following commands: 

```
    mysql -u root -p;
```

After entering mysql password, source the schema.sql file:

```
    source db/schema.sql;
```

To quit mySQL:

```
    quit;
```
Be sure to run seed data before initializing:

```
    node seeds/index.js
```
Be sure to rename the .env.EXAMPLE file to a .env file and enter your mySQL information to establish connection before initializing.

To Initialize application:

```
    node server.js
```

### Link to Video Demo: ()


## License

MIT License

Copyright (c) [2022] [Shelby Hernandez]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![licensebadge](https://img.shields.io/github/license/shernandez927/commerce-ial-revolution?style=for-the-badge) ![languagebadge](https://img.shields.io/github/languages/top/shernandez927/commerce-ial-revolution?style=for-the-badge) ![reposizebadge](https://img.shields.io/github/repo-size/shernandez927/commerce-ial-revolution?style=for-the-badge)

## Features

- Dontenv

- Express

- mySQL2

- Sequelize

## Tests

No tests written... yet.