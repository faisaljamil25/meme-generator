import type { NextPage } from 'next';
// import Canvas from '../components/Canvas';
import Form from '../components/Form';
import MemeComponent from '../components/Meme';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Meme Generator</h1>
      <MemeComponent />
    </div>
  );
};

export default Home;
