## Installation & Setup

### Install dependencies

```
npm install
```

---

## Running the App

### **Start the React frontend**

```
npm run dev
```

### **Start json-server (REST API)**

```
json-server --watch db.json --port 3000
```

Your frontend will run on:

➡ [http://localhost:5173/](http://localhost:5173/)

Your API will run on:

➡ [http://localhost:3000/](http://localhost:3000/)

---

## 🗄 Example REST API (db.json)

```json
{
  "teams": [
    {
      "id": 1,
      "name": "Team A",
      "color1": "#ff0000",
      "color2": "#0000ff"
    }
  ],
  "players": [
    {
      "id": 1,
      "name": "John Doe",
      "position": "Goalkeeper",
      "teamId": 1
    }
  ]
}
```

---

