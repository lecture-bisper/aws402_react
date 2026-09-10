import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import App2 from "./App2.tsx";
// import Clock from "./components/Clock.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
    <App2 />
  </StrictMode>,
);

// setInterval(() => {
//   createRoot(document.getElementById('root')!).render(
//     <StrictMode>
//       <Clock />
//     </StrictMode>
//   );
// }, 1000);
