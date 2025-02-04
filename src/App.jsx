import './App.css';
import { DogSection } from './dogSection';
function App() {
  return (
    <>
      <header className="bg-rose-200 text-rose-800 p-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">Hunde Adopsjon</h1>
      </header> {" "}
      <main className="flex-grow p-8">
                <DogSection />
              </main>
    

      <footer className="bg-rose-200 text-rose-800 p-4 text-center shadow-md">
        <p className="font-semibold">Lillian</p>
      </footer>
    </>
  );
}

export default App;
