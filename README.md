# Super Duper Ideas List

A simple Angular project for frontend practice using a modern approach (Angular 19.2, SCSS, Signals, animations, modals).  
The app serves as a lightweight “idea board” for storing and managing your ideas.

---

## ✨ Features

- Add new ideas via a **modal form**
- Browse the list in an **accordion-style layout**
- Expanding an accordion reveals idea details
- **Edit** and **delete** existing ideas
- Mark ideas as **favorites**
- **Filter/sort** the idea list
- Data saved in **localStorage**
- **Deep linking** (`/ideas?id=42`) – automatically expands and scrolls to the item

---

## ⚙️ Technologies & Approach

- Angular `19.2`
- SCSS as preprocessor
- New template syntax: `@if`, `@for`
- Signals (used where appropriate)
- No external UI libraries (custom modal implementation)
- Angular Animations for accordion and modal transitions
- Single-page structure (no route switching between views)

---

## 📁 Component Structure (planned)

- `IdeasListComponent` – main idea list view
- `IdeaItemComponent` – single accordion item
- `IdeaFormModalComponent` – modal with form
- `IdeaService` – data logic (localStorage)
- (optional) `IdeaPreviewModalComponent` – preview modal for idea details

---

## 🧠 Learning Goals

- Practice modern Angular features
- Build a custom modal with animations
- Manage data without backend
- Handle routing and deep-linking within a single-page app
- Get familiar with `signals`, `@if`, and `@for`

---

## ✅ TODO (initial)

- [x] Switch project to SCSS
- [x] Custom modal with form
- [x] Accordion list with animation
- [x] localStorage support
- [ ] Deep linking by ID with auto-scrolling
- [ ] Idea filtering/sorting
- [ ] Dark mode support
- [ ] Multi-language support (with user language switcher)

---

## 🌟 Nice to have (future plans)

- [ ] Export idea list to `.json`
- [ ] Import idea list from `.json`
- [ ] Automatic localStorage backup
- [ ] Preview idea in dedicated modal (instead of just in accordion)
- [ ] Add categories/tags to ideas
- [ ] Drag & drop sorting (e.g. via Angular CDK)

---

Made with love and chaos by Paulina
