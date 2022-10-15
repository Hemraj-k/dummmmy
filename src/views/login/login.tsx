import './login.css';
import { useEffect, useState } from 'react';
import LoginVerify from '../../components/loginVerify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, setstate] = useState<null | type[]>([]);
  const navigate = useNavigate();

  type type = { userId: number; id: number; title: string; body: string };

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then((response) => response.json())
      .then((data) => sessionStorage.setItem('users', JSON.stringify(data)));
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let name = e.target.email.value;
    let password = e.target.password.value;

    let data: any | null = sessionStorage.getItem('users');
    console.log('11', data);

    let newData = JSON.parse(data);
    console.log('22', newData);

    for (let i = 0; i < newData.length; i++) {
      console.log('meowww', newData[i]);
      if (newData[i].name === name) {
        alert('user found');
        if (newData[i].password === password) {
          alert('matched');
          navigate('/home');
        } else {
          alert('No match');
        }
      }
    }
  };

  return (
    <div>
      <div className="logo">
        A<span>AH</span>D
      </div>
      <div>
        <div className="form">
          <div className="signIn">Sign In</div>
          <form className="formContainer" onSubmit={handleSubmit}>
            <div className="email">
              <label htmlFor="email">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="input"
                  placeholder=" Email "
                />
              </label>
            </div>
            <div className="password">
              <label htmlFor="password">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input"
                  placeholder="password"
                />
              </label>
            </div>
            <div className="button">
              <input type="submit" value="Submit" />
            </div>
          </form>
          <div className="reg">
            Don't have account? <a href="#">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
