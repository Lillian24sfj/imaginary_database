import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PageLayout from './PageLayout';
import { IndexPage } from './Pages/IndexPage';
import { AboutPage } from './Pages/AboutPage';
import DogDatabase from './dogsDatabase';


function App() {
  return (
    <>
    <Router>
      <header className="bg-rose-200 text-rose-800 p-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">Hunde Adopsjon</h1>
      </header> {" "}
      <PageLayout>
      <Routes>
        {"  "}
        <Route
          path="/"
          element={
            <div className="dog-info">
              {DogDatabase.map((dog, index) => (
                <IndexPage key={index} {...dog} id={index + 1} /> 
              ))}
            </div>
          }
        />
        <Route path="/AboutPage/:id" element={<AboutPage />} /> 
      </Routes>

      
      </PageLayout>

      <footer className="bg-rose-200 text-rose-800 p-4 text-center shadow-md">
        <p className="font-semibold">Lillian</p>
      </footer>
      </Router>
    </>
  );
}

export default App;
