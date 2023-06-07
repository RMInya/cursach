import { useState, useCallback, useEffect } from "react";

const strageName = "userData";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  // const [ready, setReady] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);
    localStorage.setItem(
      strageName,
      JSON.stringify({ userId: id, token: jwtToken })
    );
  }, []);

  const logout = useCallback((token, userId) => {
    setToken(null);
    setUserId(null);

    localStorage.removeItem(strageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(strageName));
    if (data && data.token) {
      login(data.token, data.userId);
    }
    // setReady(true);
  }, [login]);

  return { token, userId, login, logout };
};
