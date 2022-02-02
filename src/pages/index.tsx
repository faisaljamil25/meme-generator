import type { NextPage } from 'next';
import Canvas from '../components/Canvas';
import Form from '../components/Form';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Meme Generator</h1>
      <Form />
      <Canvas />
    </div>
  );
};

export default Home;
