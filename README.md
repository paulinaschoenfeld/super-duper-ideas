# Super Duper Ideas List

Prosty projekt Angularowy do ćwiczeń frontendowych z nowoczesnym podejściem (Angular 19.2, SCSS, Signals, animacje, modale).  
Aplikacja służy do przechowywania i zarządzania pomysłami w stylu "idea board".

---

## ✨ Funkcje

- Dodawanie nowych pomysłów przez **modal z formularzem**
- Przeglądanie listy pomysłów w formie **akordeonów**
- Rozwijanie akordeonu pokazuje szczegóły pomysłu
- **Edycja** i **usuwanie** pomysłów
- Oznaczanie pomysłów jako **ulubione**
- **Filtrowanie/sortowanie** listy
- Zapis danych w **localStorage**
- Obsługa **deep linków** (`/ideas?id=42`) – automatyczne rozwinięcie i scroll

---

## ⚙️ Technologie i podejście

- Angular `19.2`
- SCSS jako preprocesor
- Nowa składnia szablonów: `@if`, `@for`
- Signals (tam, gdzie mają sens)
- Brak bibliotek UI (modal tworzony własnoręcznie)
- Angular Animations do akordeonów i modali
- Podejście single-page (bez przechodzenia między widokami)

---

## 📁 Struktura komponentów (planowana)

- `IdeasListComponent` – główny widok listy
- `IdeaItemComponent` – pojedynczy akordeon
- `IdeaFormModalComponent` – modal z formularzem
- `IdeaService` – logika danych (localStorage)
- (opcjonalnie) `IdeaPreviewModalComponent` – podgląd z poziomu modala

---

## 🧠 Cele edukacyjne

- Praktyka nowoczesnego Angulara
- Praca z własnym modalem i animacjami
- Zarządzanie danymi bez backendu
- Obsługa routingu i linkowania do elementów na stronie
- Lepsze zrozumienie `signals`, `@if`, `@for`

---

## ✅ TODO (na start)

- [x] Zmiana projektu na SCSS
- [ ] Własny modal z formularzem
- [x] Akordeonowa lista z animacją
- [ ] Obsługa localStorage
- [ ] Deep linking po ID z automatycznym scrollowaniem
- [ ] Filtr / sortowanie pomysłów

---

## 🌟 Nice to have (in the future)

- [ ] Eksport listy pomysłów do pliku `.json`
- [ ] Import listy z pliku `.json` do aplikacji
- [ ] Automatyczne tworzenie backupu w localStorage
- [ ] Podgląd pomysłu w osobnym modalu (zamiast tylko w akordeonie)
- [ ] Kategorie / tagi pomysłów
- [ ] Sortowanie drag & drop (np. Angular CDK)

---

Made with love and chaos by Paulina
