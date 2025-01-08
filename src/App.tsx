import React from "react";
import { Header } from "./organisms/Header";
import { Main } from "./organisms/Main";

function App() {
  return (
    <section className="text-m">
      <header className="fixed top-0 bg-white w-screen">
        <Header />
      </header>
      <main className="mt-24">
        <Main />
      </main>
    </section>
  );
}

export default App;
