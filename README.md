# ♟️ notChess.com — A Functional Chessboard Interface

A fun little **/Next.js** project built for a technical assessment.

This project demonstrates component reusability, accessibility, and clean architecture while rendering a fully interactive **8×8 chessboard** with all pieces in their starting positions.

---

## 🚀 Features

### ✅ Core Requirements

- ♟️ **8×8 Chessboard** rendered using reusable components (`<Board />`, `<Square />`, `<Piece />`)
- 🧩 **Reusable piece components** — each chess piece is represented by an SVG icon
- 🎯 **Interactive highlights** — click or keyboard-focus a square to highlight it
- ♿ **Accessibility compliant** — supports keyboard navigation, ARIA roles, and high-contrast mode
- 💅 **Built with Next.js and modular CSS**

### 🌈 Bonus Features

- 🌗 **Light & Dark Mode Toggle**
  Switch between light and dark themes dynamically.
- 🪵 **Two Board Skins**
  - **Plain:** Minimal clean look
  - **Dark Wood:** Classic rich chessboard aesthetic
- ⚡ **Smooth transitions** between themes and skins for a polished experience.

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/pelumi-guy/Chessboard
cd Chessboard
````

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# then open http://localhost:3000
```

---

## 🐳 Run with Docker

To containerize and run the app:

```bash
docker build -t  .
docker run -p 3000:3000 Chessboard
```

Then visit **[http://localhost:3000](http://localhost:3000)**

---

## 🧠 Design Notes

* The UI and components follow **composition over inheritance** — every piece and square is a standalone, reusable unit.
* Accessibility and keyboard control are built-in with ARIA labels.
* Theming is achieved via CSS variables controlled by React state.
* Additional features (light/dark themes and board skins) demonstrate **scalability** and **design flexibility**.

---

## 🎥 Demo

A 1-minute walkthrough video of **notChess.com** can be found here:
👉 [Demo Video Link](https://www.loom.com/share/d39670b513014b7a995e27645200403f)

---

## 🧑‍💻 Tech Stack

* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript
* **Styling:** Basic CSS Modules
* **Icons:** Custom SVG Chess Pieces
* **Deployment:** Docker

---

## 📝 Author

**Oluwapelumi Olalekan**
Frontend & Backend Engineer | React | .NET | TypeScript
🌐 [LinkedIn](https://www.linkedin.com/in/oluwapelumi-olalekan-272b00153/) • ✉️ [Email](pelumi.olalekan.g@email.com)

---

## ⚖️ License

This project is released under the [MIT License](LICENSE).