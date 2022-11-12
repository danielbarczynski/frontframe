import { FC } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Routes/Home/home';
import { Posts } from './components/Routes/Posts/posts';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="" />
      <div>
        <div>
        <Link to="posts">Posts</Link>
        </div>
        <div>
        <Link to="/">Home</Link>
        </div>
      </div>
      <Routes>
        <Route path="posts" element={<Posts />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
