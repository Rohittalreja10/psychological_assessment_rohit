import American from "./components/American/American";
import Assessments from "./components/Assessments/Assessments";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="bg-cream ">
      <Header />
      <American />
      <Hero />
      <Assessments />
      <Footer />
    </div>
  );
}

export default App;
