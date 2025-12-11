# Agent Guidelines

## Project Structure
- Frontend: Vanilla JS/HTML/CSS (no build step, no framework)
- Backend: .NET 10 minimal API in `server/sync/`
- Deployment: GitHub Pages (frontend), Docker (both)

## Commands
- **Run frontend**: Open `index.html` in browser or `python3 -m http.server 8000`
- **Run sync server**: `cd server/sync && dotnet run`
- **Build Docker (frontend)**: `docker build -t links .`
- **Build Docker (server)**: `cd server/sync && docker build -t links-sync .`

## Code Style - JavaScript
- Use `const`/`let`, never `var`
- Functions: camelCase (`loadLinksFromLocal`, `renderGroups`)
- Constants: UPPER_SNAKE_CASE (`LINKS_DATA_KEY`, `REMOTE_SERVER_ADDRESS_SETTING_KEY`)
- DOM elements: camelCase matching element ID (`menuToggle`, `sideMenu`)
- Use template literals for string interpolation
- Prefer arrow functions for callbacks; regular functions for hoisted declarations
- Error handling: `try/catch` with `console.error()`, user-facing errors via `alert()`

## Code Style - C# (server/sync)
- .NET 10 minimal API pattern (no controllers)
- PascalCase for classes, methods, properties
- Nullable reference types enabled
- Models defined at bottom of Program.cs
