import React, { useState } from "react";
import { useAuth } from "./LocalAuthProvider"; // or keycloakProvider, both export same API

function App() {
  const { profile, login, logout,loading } = useAuth();
  const [username, setUsername] = useState("");
    
  if(loading){
    return <div>Loading authentication...</div>
  }


  if (!profile) {
    return login ? (
      <div style={{ padding: 20 }}>
        <h3>Local Login</h3>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => login(username)}>Login</button>
      </div>
    ) : (
      <div>Loading user...</div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>
        Welcome, {profile.firstName} {profile.lastName}
      </h2>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
