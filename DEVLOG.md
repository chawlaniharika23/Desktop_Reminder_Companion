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

## Day 3

### Goal
Implement mascot movement and begin building interactive behaviors.

### Completed
- Built the initial movement system using a custom `useMovement` hook.
- Made the mascot move from right to left across the screen.
- Refactored the mascot to use movement, animation, and state hooks together.
- Replaced the temporary timed movement with destination-based movement.
- Created the foundation for a behavior-driven state system.
- Added a reminder message database (`messages.js`).
- Designed the speech bubble component structure.
- Started integrating the reminder system using a custom `useReminder` hook.
- Debugged React errors related to animation state and sprite rendering.

### Challenges Faced
- Resolved `animation is not defined` errors.
- Fixed issues caused by incorrect state flow between components.
- Learned how different systems communicate using shared state instead of directly interacting.
- Investigated image rendering issues caused by runtime errors.

### What I Learned
- Creating reusable movement logic with custom hooks.
- Passing data between independent systems using React state.
- Building scalable project architecture by separating:
  - Animation System
  - Movement System
  - State System
  - Reminder System
- Debugging React runtime errors using the browser console.

### Current Project Structure

src/
├── assets/
│   └── mascot/
│       ├── idle/
│       └── walk/
├── components/
│   └── Mascot/
│       ├── Mascot.jsx
│       ├── SpriteAnimator.jsx
│       ├── SpeechBubble.jsx
│       ├── SpeechBubble.css
│       └── Mascot.css
├── hooks/
│   ├── useAnimation.js
│   ├── useMascotState.js
│   ├── useMovement.js
│   └── useReminder.js
├── data/
│   ├── animations.js
│   └── messages.js

### Next Steps
- Complete the speech bubble system.
- Hide the speech bubble automatically after a few seconds.
- Make the mascot walk off-screen after delivering a reminder.
- Introduce a finite state machine (FSM) to manage mascot behavior.
- Prepare for Electron integration.