import reactsvg from "../assets/react.svg";
import styles from "../styles/Navigator.module.css";
import Navbar from "./Navbar";
function Navigator() {
  return (
    <>
      <header className={styles.header}>
        <div className="logo">
          <a
            href="http://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={reactsvg} alt="imagem logo" className="imglogo" />
            <p>Brenekat Web Developer</p>
          </a>
        </div>
        <Navbar />
      </header>
    </>
  );
}
export default Navigator;
