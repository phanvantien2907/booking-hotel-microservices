# 🏨 Hotel Booking Microservices

A modern, scalable, and modular **hotel booking system** built using **microservices architecture**, designed to handle high traffic and service independence.

This project is built using **TypeScript**, **NestJS v10**, **PostgreSQL 17**, and **MongoDB 8.0**, with a focus on scalability, separation of concerns, and maintainability.

---

## 📦 Tech Stack

| Layer         | Tech Stack                             |
|---------------|----------------------------------------|
| Language      | TypeScript (strict mode)               |
| Runtime       | Node.js v21 or latest                  |
| Framework     | [NestJS v10](https://nestjs.com/)      |
| Database (SQL)| PostgreSQL 17                          |
| Database (NoSQL)| MongoDB 8.0                         |
| Architecture  | Microservices (REST + Event-based)     |
| Communication | REST API, Kafka (optional), gRPC (optional) |
| Deployment    | Docker + Docker Compose                |
| Versioning    | Git + GitHub                           |

---

## 🧩 Microservices Overview

- `api-gateway`: Central entrypoint, handles routing, authentication.
- `auth-service`: Handles user registration, login, JWT token issuing.
- `user-service`: Manages user profiles, preferences.
- `hotel-service`: Handles hotel listings, room details.
- `booking-service`: Handles room bookings, availability.
- `payment-service`: (Optional) Processes payments.
- `notification-service`: (Optional) Sends email/SMS notifications.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/phanvantien2907/booking-hotel-microservices.git
```
### 2. Navigate to the project directory:
``` bash
cd hotel-booking-microservices
```
### 3. Install Node
```bash
# Install via Node Version Manager (NVM)
nvm install 21
nvm use 21
```
### 4. Install Dependencies
``` bash
cd services/api-gateway
npm install

cd ../auth-service
npm install

# ...repeat for other services
```
### 5. Setup Environment Variables
``` bash
cd services/auth-service
cp .env.example .env
```
### 6.Run via Docker (Recommended)
``` bash
# Build and start all services with Docker Compose
# PostgreSQL and MongoDB services are pre-configured in docker-compose.yml.
docker-compose up --build
```
# 🛡️ License
## This project is licensed under the MIT License.
``` bash
MIT License
Copyright (c) 2025 Phan Van Tien
```

