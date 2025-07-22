import "./App.css";
import discordLogo from "./assets/discord-logo-white.png";
import burgerMenu from "./assets/menu-icon.png";
import peopleImg from "./assets/discord-background.png";

function App() {
  return (
    <>
      <nav>
        <img src={discordLogo} alt="logo" />
        <img src={burgerMenu} alt="burger" />
      </nav>
      <h1>IMAGINE A PLACE...</h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </p>
      <section id="btn-container">
        <button>Download for Mac</button>
        <button id="discord-btn">Open Discord in your browser</button>
      </section>
      <section>
        <img src={peopleImg} alt="people image" className="people-img" />
      </section>
    </>
  );
}

export default App;
