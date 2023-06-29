import { Component } from "react";
import "./App.css";

import Home from "./Home";

const l = [
  {
    id: 0,
    emojiName: "Face with stuck out tongue",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png",
  },
  {
    id: 1,
    emojiName: "Face with head bandage",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png",
  },
  {
    id: 2,
    emojiName: "Face with hugs",
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png",
  },
  {
    id: 3,
    emojiName: "Face with laughing",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png",
  },
  {
    id: 4,
    emojiName: "Laughing face with hand in front of mouth",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png",
  },
  {
    id: 5,
    emojiName: "Face with mask",
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png",
  },
  {
    id: 6,
    emojiName: "Face with silence",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png",
  },
  {
    id: 7,
    emojiName: "Face with stuck out tongue and winked eye",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png",
  },
  {
    id: 8,
    emojiName: "Grinning face with sweat",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png",
  },
  {
    id: 9,
    emojiName: "Smiling face with heart eyes",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png",
  },
  {
    id: 10,
    emojiName: "Grinning face",
    emojiUrl: "https://assets.ccbp.in/frontend/react-js/grinning-face-img.png",
  },
  {
    id: 11,
    emojiName: "Smiling face with star eyes",
    emojiUrl:
      "https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png",
  },
];

let d = [];

class App extends Component {
  state = { list: l, active: false, score: 0, hs: 0 };

  r = (id) => {
    const { list, active, hs, score } = this.state;
    console.log(active);

    let u = list.filter((i) => i.id === id);
    if (!d.includes(u[0].id)) {
      d.push(u[0].id);
      let i = list.length - 1;
      if (d.length <= l.length) {
        while (i > 0) {
          let j = Math.floor(Math.random() * (i + 1));
          [list[i], list[j]] = [list[j], list[i]];
          i -= 1;
        }
        if (!active) {
          this.setState((i) => ({ list, score: i.score + 1 }));
        }
        if (d.length === l.length) {
          if (hs < score) {
            this.setState({ hs: score + 1 });
          }
          this.setState({ active: true });
        }
      } else {
      }
    } else {
      const { hs, score } = this.state;
      if (hs < score) {
        this.setState({ hs: score });
      }

      this.setState({ active: true });

      console.log(active);
    }
  };

  r1 = () => {
    const { list, score } = this.state;
    return (
      <div>
        <div>
          <h1>EMOJI GAME</h1>
          <h1>Score:{score}</h1>
        </div>
        <ul>
          {list.map((i) => (
            <Home key={i.id} detail={i} btn={this.r} />
          ))}
        </ul>
      </div>
    );
  };

  b = () => {
    this.setState({ active: false, score: 0 });
    d = [];
  };

  ac1 = () => {
    const { score, hs, list } = this.state;
    return (
      <div className="t">
        <h1>EMOJI GAME</h1>
        <div className="re">
          <h2>High-Score:{hs}</h2>
          <h2>
            Score:{score}/{list.length}
          </h2>
          <h2>Game Over.... </h2>
        </div>

        <button className="bt" onClick={this.b} type="button">
          New Game
        </button>
      </div>
    );
  };

  render() {
    const { active } = this.state;

    return <div>{!active ? this.r1() : this.ac1()} ;</div>;
  }
}

export default App;
