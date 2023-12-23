## Levitation-Blog-API

- Basic Authentication (Register/Login with hashed password)
- JWT Tokens ( RefreshToken & AccessToken), make requests with a token after login with `Authorization` header with value `Bearer yourAccessToken` where `yourAccessToken` will be returned in Login response.
- Pre-defined response structures with proper status codes.
- Validations added.
- API collection for Postman.
- Light-weight project.

## Software Requirements

- Node.js **8+**
- MongoDB **3.6+** (Recommended **4+**)

## How to install

### Using Git (recommended)

1.  Clone the project from github.

```bash
git clone https://github.com/debapriya36/Levitation-Task.git
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
npm install
```

### Setting up environments

1.  You will find a file named `.env.example` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`
    ```bash
    cp .env.example .env
    ```
3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment. Helpful comments added to `.env.example` file to understand the constants.

## Project structure

```sh
.
├── app.js
├── package.json
├── controllers
│   ├── user.controller.js
│   └── blog.controller.js
├── models
│   ├── blog.model.js
│   └── user.model.js
├── routes
│   ├── user.route.js
│   ├── blog.route.js
│   └── book.js
├── middlewares
│   ├── auth.middleware.js
├── utility
│   ├── ApiResponse.utils.js
│   └── ApiError.utils.js
│  

```

## How to run

### Running API server locally

```bash
npm run dev
```

You will know server is running by checking the output of the command `npm run dev`

```bash
Connected to mongodb:YOUR_DB_CONNECTION_STRING
App is running ...

Press CTRL + C to stop the process.
```
