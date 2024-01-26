import { useState } from "react";
export default function LoginPage({onLogin}) {
    
    const [username, setUsername] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (username) {
            onLogin(username)
        }
    }

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Your Name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
