
# express-api-responder

A lightweight and consistent utility for sending structured JSON responses in Express.js applications using TypeScript.

## ✨ Features

- ✅ Standardized response format
- ⚙️ Works with `http-status-codes`
- 💬 Custom and fallback messages
- ❌ Built-in support for error responses
- 📦 Easy to integrate with any Express project
- 🧪 TypeScript ready

---

## 📦 Installation

```
npm install express-json-response http-status-codes
````

---

## 🚀 Usage

### 1. Import the function

```ts
import jsonResponse from "express-json-response";
import { StatusCodes } from "http-status-codes";
```

### 2. Success Response Example

```ts
jsonResponse(StatusCodes.OK, res, { user: userData }, "User fetched successfully");
```

### 3. Error Response Example

```ts
jsonResponse(StatusCodes.BAD_REQUEST, res, null, "Invalid data", {
  email: "Email format is incorrect",
  password: "Password is too short"
});
```

---

## 📘 Response Format

All responses follow a consistent structure:

### ✅ Success Response

```json
{
  "success": true,
  "status": "success",
  "code": 200,
  "message": "Request successful",
  "data": {
    "user": { "id": 1, "name": "Lateef" }
  }
}
```

### ❌ Error Response

```json
{
  "success": false,
  "status": "error",
  "code": 400,
  "message": "Invalid data",
  "errors": {
    "email": "Email format is incorrect",
    "password": "Password is too short"
  }
}
```

---

## 💡 Default Fallback Messages

Fallback messages are used if you don’t provide a `message` argument:

| HTTP Code | Default Message        |
| --------- | ---------------------- |
| 200       | Request successful     |
| 201       | Request successful     |
| 202       | Request accepted       |
| 400       | Invalid request data   |
| 401       | Unauthorized           |
| 403       | Access forbidden       |
| 404       | Resource not found     |
| 408       | Request timed out      |
| 422       | Unprocessable entity   |
| 500       | Something went wrong   |
| 503       | Service is unavailable |

---

## 🧩 API

```ts
jsonResponse(
  code: number,
  res: Response,
  data?: any,
  message?: string,
  errors?: Record<string, string>
): void
```

* `code`: HTTP status code (e.g. `StatusCodes.OK`)
* `res`: Express `Response` object
* `data`: Optional data object (used on success)
* `message`: Optional message string
* `errors`: Optional object with field-specific errors

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome! To contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

---

## 📄 License

MIT License © [Abdullateef Mubarak](https://github.com/TechLateef/express-json-responder.git)

```