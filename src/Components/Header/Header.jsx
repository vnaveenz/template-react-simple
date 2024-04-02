import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescription = ['Fundamental', 'core', 'crucial'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const description = reactDescription[genRandomInt(reactDescription.length - 1)];

export function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
