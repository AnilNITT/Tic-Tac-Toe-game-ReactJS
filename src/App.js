import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  return (
    <>
      <div class="select-box">
        <header>Tic Tac Toe</header>
        <div class="content">
          <div class="title">Select which you want to be?</div>
          <div class="options">
            <button class="playerX">Player (X)</button>
            <button class="playerO">Player (O)</button>
          </div>
          <div class="credit">Created By <a href="/#" rel="noreferrer" target="_blank">Developer</a></div>
        </div>
      </div>

      {/* <!-- playboard section --> */}
      <div class="play-board">
        <div class="details">
          <div class="players">
            <span class="Xturn">X's Turn</span>
            <span class="Oturn">O's Turn</span>
            <div class="slider"></div>
          </div>
        </div>
        <div class="play-area">
          <section>
            <span class="box1"></span>
            <span class="box2"></span>
            <span class="box3"></span>
          </section>
          <section>
            <span class="box4"></span>
            <span class="box5"></span>
            <span class="box6"></span>
          </section>
          <section>
            <span class="box7"></span>
            <span class="box8"></span>
            <span class="box9"></span>
          </section>
        </div>
      </div>

      {/* <!-- result box --> */}
      <div class="result-box">
        <div class="won-text"></div>
        <div class="btn"><button>Replay</button></div>
      </div>
      <Helmet>
        <script type='text/javascript' src="./script.js" />
      </Helmet>
    </>
  );
}

export default App;
