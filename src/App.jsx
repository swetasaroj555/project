import "./App.css";


import Navigation from "./components/Navigation/me";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";
function App() {
  return (
    <div>
      
      <main className="main_container">
      <Navigation/>
      <main className="main_container">
        <ContactHeader />
        <ContactForm/>
        </main>
        
      </main>
    </div>
  );
}

export default App;