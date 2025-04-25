# tRPC Demo Project
This is a demo project showcasing the use of tRPC with TypeScript and Zod for building a type-safe client-server application.

---

### 🚀 What is tRPC?

**tRPC** stands for **TypeScript Remote Procedure Call**.

It’s a **TypeScript-first framework** that allows you to **build fully typesafe APIs without needing to write schemas (like in GraphQL or OpenAPI)**.

Basically, with tRPC:
- You define your API functions directly in TypeScript.
- Your frontend can **call those functions directly** and get **full type safety** without needing to define separate types or contracts.

---

### 🧠 Why use tRPC?

- ✅ **No API client code**: You don’t have to write or generate clients (like you do with REST or GraphQL).
- ✅ **End-to-end type safety**: The types you write in the backend are instantly available in the frontend.
- ✅ **Great DX (Developer Experience)**: Autocomplete, inline documentation, and type checks everywhere.

---

### 🏗️ How does it work?

1. You define **routers** (collections of procedures) on the backend.
2. You expose them using tRPC’s server.
3. On the frontend, you **import and call them like normal functions**, and TypeScript knows the types automatically.

---

### 🔄 REST vs GraphQL vs tRPC

| Feature          | REST     | GraphQL   | tRPC        |
|------------------|----------|-----------|-------------|
| Type safety      | ❌        | ✅         | ✅✅✅        |
| Autocomplete     | ❌        | ✅         | ✅✅✅        |
| Schema needed    | ❌        | ✅         | ❌           |
| Boilerplate      | Medium   | High      | Low         |

---
