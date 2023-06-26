import "./Home.css";

const Home = (props) => {
  const { detail, btn } = props;
  const { id, emojiUrl, emojiName } = detail;
  const b = () => {
    btn(id);
  };

  return (
    <button onClick={b}>
      <li>
        <img src={emojiUrl} alt={emojiName} />
        <p>{emojiName}</p>
      </li>
    </button>
  );
};

export default Home;
