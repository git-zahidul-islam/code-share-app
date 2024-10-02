import { nanoid } from 'nanoid'

const Home = () => {


  return (
    <div className="h-screen bg-green-200 flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-semibold">Share your code here</h1>
      <a href={`/code/${nanoid()}`} className="p-2 bg-slate-900 text-white text-xl">Code Share</a>
    </div>
  );
};

export default Home;