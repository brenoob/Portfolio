import styles from "../styles/Navigator.module.css";
function Navbar() {
  return (
    <>
      <ul className={styles.ul_nav}>
        <li>Projetos</li>
        <li>Contatos</li>
        <li>Sobre mim</li>
      </ul>
    </>
  );
}
export default Navbar;
