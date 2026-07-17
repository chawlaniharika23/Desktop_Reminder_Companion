# Desktop Companion

## Day 1

### Goal
Set up the project architecture and prepare the development environment.

### Completed
- Created the project using React + Vite.
- Installed Electron and required dependencies.
- Initialized Git and connected the project to GitHub.
- Designed the initial folder structure.
- Organized mascot assets into animation folders:
  - idle
  - walk
  - talk
- Created folders for:
  - components
  - hooks
  - services
  - utils
  - data
- Created the `Mascot` component.
- Displayed the mascot successfully in the React application.
- Resolved the Git merge issue caused by creating `DEVLOG.md` directly on GitHub.

### Challenges Faced
- Git rejected the first push because the remote repository contained a commit that wasn't present locally.
- Learned how Git handles divergent histories and merge commits.

### What I Learned
- Basic Electron project structure.
- Organizing React projects for scalability.
- Managing Git remotes, merges, and push conflicts.

### Next Steps
- Build a reusable sprite animation system.
- Animate the idle state.
- Display smooth frame-by-frame animations.
- Begin implementing mascot state management.

### Current Status
Project setup complete.
Ready to start the animation engine.

## Day 2

### Goal
Build a reusable animation system for the desktop mascot.

### Completed
- Created a reusable `SpriteAnimator` component.
- Successfully animated the mascot's idle state.
- Organized all animation assets in a central `animations.js` file.
- Implemented the `useAnimation` hook to retrieve animation data.
- Implemented the `useMascotState` hook for mascot state management.
- Refactored `Mascot.jsx` to use hooks instead of directly managing animation data.
- Established the initial architecture for future mascot behaviors.

### Challenges Faced
- Decided on a scalable architecture before adding more features.
- Learned the importance of separating:
  - animation rendering
  - animation data
  - mascot state
  - UI components

### What I Learned
- Building reusable React components.
- Creating and using custom hooks.
- Separating concerns for maintainable code.
- Designing a simple state-driven animation system.

### Next Steps
- Build the movement engine.
- Make the mascot walk across the screen.
- Introduce target positions and movement speed.
- Prepare for reminder interactions.

### Current Status
Animation engine complete.
State management started.
Movement system in progress.