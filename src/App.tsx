import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation"

function App() {
  return (
    <main className="flex">
      <Navigation />
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default App
