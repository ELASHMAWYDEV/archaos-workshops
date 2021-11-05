import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <a href="https://ar-chaos.com">
          <img
            src="https://res.cloudinary.com/archaos/image/upload/v1635964571/archaos/img/logo//logo.svg"
            alt="Archaos"
          />
        </a>
        <p className="description">
        Archaos community organizes different workshops. Our workshops aim to satisfy the needs of the next generation of creatives and leaders.
        We also arrange and participate in different competitions in all fields creative.
        </p>
      </header>
      <div className="Reminder_Sec">
        <div className="image-container">
          <h3>Coming Soon...</h3>
          <img src="https://res.cloudinary.com/archaos/image/upload/v1635956085/archaos/img/This-is-who-we-are-gif.gif" />
        </div>
        <div className="form-container">
          <h2 className="Line1">Workshops</h2>
          <h3 className="Line2">Let's make sure you are the first one to get notified when we become avaliable</h3>

          <form>
            <i className="far fa-envelope"></i>
            <input className="input" type="email" name="Email" placeholder="What's your email ?" />
            <button className="button" type="submit" name="Reminder_Submission">
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
