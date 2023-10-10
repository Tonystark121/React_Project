import About from './About/About';
import styles from './App.module.css';
import Experience from './Experience/Experience';
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import Project from './Project/Project';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
       <div className={styles.App}>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Project />
            <Footer />
        </div>
    </>
  );
}

export default App;
