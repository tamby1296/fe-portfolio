import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <main className="flex bg-kAppGrey">
      <section className="flex-grow [&>div]:h-full min-h-[100vh] lg:ml-[25%]">
        <Outlet />
      </section>
      <Navigation />
    </main>
  );
}

export default App;
