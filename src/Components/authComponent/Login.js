import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import parseJwt from '../commonComponent/Jwtparser';
import { login, getCurrentUser } from "../commonComponent/Api";
import { ACCESS_TOKEN , USER_DATA} from '../commonComponent/Constant';
import { setToken, setUser } from '../slice/authslice';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL } from "../commonComponent/Constant";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user);
  
  console.log("token , user in Login state mgmt " , token , user)


  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      localStorage.setItem(ACCESS_TOKEN, response.accessToken);

     console.log("response",response);
      dispatch(setToken(response.accessToken));

      const userData = await getCurrentUser(token);
      localStorage.setItem(USER_DATA, userData);

        console.log("userdata",userData);;
      dispatch(setUser(userData));

      console.log("User Data:", userData);
      console.log("token Data:", token);
      console.log("user from redux Data:", user);




      if (userData.roles.some(role => role.name === 'ADMIN')) {
        navigate('/admin');
      } else if (userData.roles.some(role => role.name === 'USER')) {
        navigate('/user');
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div className="social-login">
        <a href={GOOGLE_AUTH_URL}>Log in with Google</a>
        <a href={FACEBOOK_AUTH_URL}>Log in with Facebook</a>
        <a href={GITHUB_AUTH_URL}>Log in with Github</a>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
