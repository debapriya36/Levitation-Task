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
└── utility
    ├── ApiResponse.utils.js
    └── ApiError.utils.js  

```

## How to run

### Running API server locally

```bash
npm run start
```

You will know server is running by checking the output of the command `npm run start`

```bash
⚙️  Server running on port 8000
MongoDB connected: ac-6lhjwcx-shard-00-00.up0olpx.mongodb.net

Press CTRL + C to stop the process.
```
### POSTMAN API COLLECTION (JSON)
```bash
{
	"info": {
		"_postman_id": "e81e4b2a-92b7-4d6b-ac9f-70ddb620684a",
		"name": "Levitation-Blog-API",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "20763212"
	},
	"item": [
		{
			"name": "Blog",
			"item": [
				{
					"name": "Get Blogs",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{base_url}}/api/v1/blog/getBlogs",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"v1",
								"blog",
								"getBlogs"
							]
						}
					},
					"response": []
				},
				{
					"name": "Get Blog By ID",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"blogId\" : \"6585a6bc1cf101f0d71403cf\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/v1/blog/getBlog",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"v1",
								"blog",
								"getBlog"
							]
						}
					},
					"response": []
				},
				{
					"name": "Create Blog",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODVhMmIyM2I5Y2EzMWZiM2RkYjYzYyIsImVtYWlsIjoidWpqd2FsQG1hZzJpLmNvbSIsImlhdCI6MTcwMzI1Njc1NSwiZXhwIjoxNzAzMzQzMTU1fQ.ll4daq3EbSgB7jJKjLgRaFtWQCCirkfqGbCypxHzymE",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n   \"title\" : \"POSTMAN API COLLECTION\",\r\n   \"content\" : \"I dont know how to send POSTMAN API COLLECTION in JSON file...\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/v1/blog/create",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"v1",
								"blog",
								"create"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update Blog",
					"request": {
						"method": "PATCH",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODVhMmIyM2I5Y2EzMWZiM2RkYjYzYyIsImVtYWlsIjoidWpqd2FsQG1hZzJpLmNvbSIsImlhdCI6MTcwMzI1Njc1NSwiZXhwIjoxNzAzMzQzMTU1fQ.ll4daq3EbSgB7jJKjLgRaFtWQCCirkfqGbCypxHzymE",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"blogId\" : \"658677cfec759e3f34864cf4\",\r\n    \"content\" : \"6585a2b23b9ca31fb3ddb63c 6585a2b23b9ca31fb3ddb63c 6585a2b23b9ca31fb3ddb63c 6585a2b23b9ca31fb3ddb63c\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/v1/blog/update",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"v1",
								"blog",
								"update"
							]
						}
					},
					"response": []
				},
				{
					"name": "Delete Blog",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODVhMmIyM2I5Y2EzMWZiM2RkYjYzYyIsImVtYWlsIjoidWpqd2FsQG1hZzJpLmNvbSIsImlhdCI6MTcwMzI1Njc1NSwiZXhwIjoxNzAzMzQzMTU1fQ.ll4daq3EbSgB7jJKjLgRaFtWQCCirkfqGbCypxHzymE",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"blogId\" : \"658677cfec759e3f34864cf4\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/v1/blog/delete",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"v1",
								"blog",
								"delete"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "User",
			"item": [
				{
					"name": "Register",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"username\" : \"rocky bhai\",\r\n    \"email\" : \"rocky@rock.dev\",\r\n    \"password\" : \"fubitch\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/v1/user/register",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"v1",
								"user",
								"register"
							]
						}
					},
					"response": []
				},
				{
					"name": "Login",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"email\" : \"rocky@rock.dev\",\r\n    \"password\" : \"fubitch\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/v1/user/login",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"v1",
								"user",
								"login"
							]
						}
					},
					"response": []
				},
				{
					"name": "Logout",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{base_url}}/api/v1/user/logout",
							"host": [
								"{{base_url}}"
							],
							"path": [
								"api",
								"v1",
								"user",
								"logout"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}

```
