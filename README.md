
# 🏡 RealEstate API

A modular and scalable API for managing real estate properties, built with **FastAPI** and designed for efficiency and ease of integration.



## 🚀 Features

- Full CRUD operations for properties
- Automated testing with Pytest


## 🛠️ Tech Stack

- **FastAPI** – Modern, high-performance web framework
- **GitHub Actions** – CI/CD automation



## 📁 Structure

graph TD

    2["User<br>External Actor"]
    7["User<br>External Actor"]
    subgraph 1["Real Estate API<br>Node.js / Express"]
        3["Express Application<br>Node.js / Express"]
        4["In-Memory Estates Data<br>JavaScript Array"]
        5["/api/estates Endpoint<br>Express Route"]
        %% Edges at this level (grouped by source)
        3["Express Application<br>Node.js / Express"] -->|uses| 4["In-Memory Estates Data<br>JavaScript Array"]
        3["Express Application<br>Node.js / Express"] -->|defines route| 5["/api/estates Endpoint<br>Express Route"]
        5["/api/estates Endpoint<br>Express Route"] -->|accesses| 4["In-Memory Estates Data<br>JavaScript Array"]
    end
    subgraph 6["Real Estate API<br>Node.js / Express"]
        10["/api/estates Endpoint<br>Express Route"]
        8["Express Application<br>Node.js / Express"]
        9["In-Memory Estates Data<br>JavaScript Array"]
        %% Edges at this level (grouped by source)
        8["Express Application<br>Node.js / Express"] -->|uses| 9["In-Memory Estates Data<br>JavaScript Array"]
        8["Express Application<br>Node.js / Express"] -->|defines route| 10["/api/estates Endpoint<br>Express Route"]
        10["/api/estates Endpoint<br>Express Route"] -->|accesses| 9["In-Memory Estates Data<br>JavaScript Array"]
    end
    %% Edges at this level (grouped by source)
    2["User<br>External Actor"] -->|makes requests to| 1["Real Estate API<br>Node.js / Express"]
    7["User<br>External Actor"] -->|makes requests to| 6["Real Estate API<br>Node.js / Express"]


## 📦 Installation

Install my-project with npm

```bash
git clone https://github.com/RenzoMedina/realestate-api.git
cd realestate-api
```
```python
pip install -r requirements.txt 
```
    
## 📚 Main Endpoint

| Method| Endpoint | Description |
|-----------|-----------|-----------|
| GET   | /api/estates   | List all properties   |



## 🧪 Testing

```python
  pytest
```
## Authors

Developed with ❤️ by Renzo Steven Medina Olaya
Backend Developer transitioning into DevOps

