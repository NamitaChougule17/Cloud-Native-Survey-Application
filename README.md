# Cloud-Native Survey Application

A full-stack **cloud-native survey platform** built with a modern microservices architecture.  
The application consists of a **Vue.js frontend**, a **Spring Boot backend**, containerized using **Docker**, deployed via **Kubernetes manifests**, and automated with **Jenkins CI/CD**.

---

## Features

- Web-based survey creation and response collection
- RESTful backend APIs built with Spring Boot
- Modern SPA frontend using Vue.js
- Containerized services with Docker
- Kubernetes deployments and services for frontend and backend
- CI/CD pipeline using Jenkins
- Environment-agnostic, cloud-ready design

---

## Architecture Overview

Client (Browser)
|
v
Frontend (Vue.js)
|
v
Backend (Spring Boot REST API)
|
v
Database (Configurable / External)



Each service is independently containerized and deployed.

---

## Repository Structure

Cloud-Native-Survey-Application/
│
├── student-survey-frontend/ # Vue.js frontend application
├── student-survey-backend/ # Spring Boot backend service
│
├── frontend-Dockerfile # Dockerfile for frontend
├── backend-Dockerfile # Dockerfile for backend
│
├── frontend-deployment.yaml # Kubernetes deployment (frontend)
├── frontend-service.yaml # Kubernetes service (frontend)
├── backend-deployment.yaml # Kubernetes deployment (backend)
├── backend-service.yaml # Kubernetes service (backend)
│
├── Jenkinsfile # CI/CD pipeline definition
├── .gitignore # Git ignore rules
└── README.md # Project documentation

yaml
Copy code

---

## Tech Stack

### Frontend
- Vue.js
- JavaScript
- HTML / CSS
- Docker

### Backend
- Java
- Spring Boot
- Maven
- REST APIs
- Docker

### DevOps / Cloud
- Docker
- Kubernetes
- Jenkins
- Git & GitHub

---

## 🐳 Docker Setup (Local)

### Build Images

docker build -f frontend-Dockerfile -t survey-frontend .
docker build -f backend-Dockerfile -t survey-backend .
Run Containers

docker run -p 8080:8080 survey-backend
docker run -p 3000:80 survey-frontend

## Kubernetes Deployment
Apply backend resources:

kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml

Apply frontend resources:
kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml

Check status:
kubectl get pods
kubectl get services

## CI/CD Pipeline (Jenkins)
The Jenkins pipeline:

Checks out source code

Builds Docker images

Runs application builds

Prepares deployment artifacts

Pipeline configuration is defined in:
Jenkinsfile

---
