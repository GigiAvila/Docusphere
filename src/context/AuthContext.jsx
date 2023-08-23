import { createContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [showLogInForm, setShowLogInForm] = useState(true)
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false)
  const [user, setLocalStorageUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = async (data) => {
    setLocalStorageUser(data);
    navigate("/my-account", { replace: true });
    setShowLogInForm(false);
    setShowWelcomeMessage(true);
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const logout = () => {
    setLocalStorageUser(null);
    navigate("/home", { replace: true });
    setShowLogInForm(true);
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    console.log(isLoggedIn)
  };




  const value = useMemo(() => {
    return {
      isLoggedIn,
      showLogInForm,
      showWelcomeMessage,
      user,
      setLocalStorageUser,
      login,
      logout,

    };
  }, [user, isLoggedIn]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}
