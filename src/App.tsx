import { Routes, Route, Link } from 'react-router-dom';
import About from './views/About/about';
import Home from './views/Home/home';
import Login from './views/login/login';

function App() {
  type dataType = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  const data: dataType[] = [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
  ];

  localStorage.setItem('meow', JSON.stringify(data));
  return (
    <div className="App">
      <nav>
        <Link to="/home">Home</Link> <Link to="/about">About</Link>{' '}
        <Link to="/">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
