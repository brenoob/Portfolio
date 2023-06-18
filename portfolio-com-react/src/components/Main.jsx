import styles from "../styles/Main.module.css";

import icon_download from "../assets/icon_data_transfer_download_.png";
import icon_contact from "../assets/contact_icon.png";
import img_html from "../assets/Html5.png";
import img_css from "../assets/Css3.png";
import img_js from "../assets/javascript.png";
import img_bg_home from "../assets/image_bg_one.png";
import Button from "./Button";

function Main() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container_home}>
          <h1>I how are you my name is Brenekat</h1>
          <p>Web Developer</p>
        <div className={styles.skills}>
          <h2>Soft Skills</h2>
          <img src={img_html} alt="imagem html" />
          <img src={img_css} alt="imagem css" />
          <img src={img_js} alt="imagem js" />
        </div>
        <div className={styles.btns_home}>
          <Button title="Download CV" src={icon_download} alt={"icone de download"}/>
          <Button title="Contato" src={icon_contact} alt={"icone de contato"}/>
        </div>
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
