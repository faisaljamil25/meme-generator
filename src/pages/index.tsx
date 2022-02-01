import type { NextPage } from 'next';
import Canvas from '../components/Canvas';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Meme Generator</h1>
      <Canvas />
    </div>
  );
};

export default Home;
