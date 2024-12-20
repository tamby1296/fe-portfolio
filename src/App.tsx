import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation"

function App() {
  return (
    <main className="flex bg-kAppGrey">
      <Navigation />
      <section className="flex-grow [&>div]:h-full min-h-[100vh]">
        <Outlet />
      </section>
    </main>
  )
}

export default App
