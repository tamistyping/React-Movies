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
      <h2 className="title">Enter Your Name!</h2>
      <form onSubmit={handleSubmit}>
        <input id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Your Name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
