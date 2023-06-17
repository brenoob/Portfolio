import img_bg_home from "../assets/image_bg_one.png";
import styles from "../styles/Main.module.css";

function Main() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container_home}>
          <h1>I how are you my name is Brenekat</h1>
          <p>Web Developer</p>
        </div>
        <img
          src={img_bg_home}
          alt="imagem background home"
          className={styles.img_bg_one}
        />
      </main>
    </>
  );
}
export default Main;
