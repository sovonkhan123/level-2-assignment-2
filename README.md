# E-commerce Product and Order Management API

This project is an Express application written in TypeScript, integrating MongoDB with Mongoose for data management. The application ensures data integrity through validation using Joi/Zod.

## Features

- Product Management
  - Create a new product
  - Retrieve a list of all products
  - Retrieve a specific product by ID
  - Update product information
  - Delete a product
  - Search products
- Order Management
  - Create a new order
  - Retrieve all orders
  - Retrieve orders by user email
  - Update inventory upon order creation

## Technologies Used

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- Zod for validation
- ESLint

## API for product management

  - /api/products
  - /api/products
  - /api/products/:productId
  - /api/products/:productId
  - /api/products/:productId
  - /api/products?searchTerm=iphone

## API for order mamagement

  - /api/orders
  - /api/orders
  - /api/orders?email=level2@programming-hero.com


### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/sovonkhan123/level-2-assignment-2.git
   cd your-repo-url
