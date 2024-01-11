import ActivityCards from "./components/Dashboard/ActivityCards/ActivityCards";
import UserCard from "./components/Dashboard/UserCard/UserCard";

function App() {
  return (
    <main className="mx-auto grid min-h-[100dvh] w-full max-w-7xl place-items-center px-4 py-12 text-white md:min-h-screen">
      <section className="flex flex-col flex-wrap gap-y-6 md:flex-row md:flex-nowrap md:gap-x-8">
        <UserCard />
        <ActivityCards />
      </section>
    </main>
  );
}

export default App;
