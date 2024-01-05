# CRUD API

This repository contains a CRUD API project built using Node.js, Express, and MongoDB.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The CRUD API is designed to perform CRUD (Create, Read, Update, Delete) operations on a specific resource (e.g., users, products, tasks). It provides endpoints to manage the data associated with the resource efficiently.

## Features

- Create new records for the specified resource
- Read existing records by ID or fetch all records
- Update records by ID
- Delete records by ID

## Installation

To run this API locally, follow these steps:

1. Clone the repository: `git clone https://github.com/dhruvil-kathiriya/CRUD-API.git`
2. Navigate to the project directory: `cd CRUD-API`
3. Install dependencies: `npm install`

## Usage

After installing dependencies, start the server using the following command:

```bash
npm start
```
This will start the server, and the API will be accessible at http://localhost:8003.

### API Endpoints
The CRUD API offers the following endpoints:

`GET /resource` : Retrieve all resources

`GET /resource/:id`: Retrieve a resource by ID

`POST /resource`: Create a new resource

`PUT /resource/:id`: Update a resource by ID

`DELETE /resource/:id`: Delete a resource by ID

Replace `resource` with the name of your specific resource (e.g., users, products).

### Technologies Used

- Node.js
- Express.js
- MongoDB 

#### Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or create a pull request. 

### License
This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/)
