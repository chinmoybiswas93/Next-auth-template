import { signIn } from "next-auth/react";
import { useState } from "react";

const Signin = () => {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await signIn("credentials", {
      username: userInfo.username,
      password: userInfo.password,
      redirect: false,
    });
    
    console.log(res);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User Name:</label>
        <input
          type="text"
          id="username"
          name="email"
          required
          autoComplete="username"
          onChange={({ target }) => {
            setUserInfo({ ...userInfo, username: target.value });
          }}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          autoComplete="current-password"
          onChange={({ target }) => {
            setUserInfo({ ...userInfo, password: target.value });
          }}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Signin;
