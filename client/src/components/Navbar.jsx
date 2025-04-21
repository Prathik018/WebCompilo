import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="p-2 flex justify-between items-center shadow bg-gray-100 dark:bg-gray-800">
      <Link to="/">
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/815/102/original/cute-astronaut-working-as-a-programmer-free-vector.jpg"
          alt="WebCompilo Logo"
          className="h-16 w-auto mx-4 rounded-full hover:opacity-80 transition-opacity"  
        />
      </Link>
      <div className="flex gap-2">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 mx-3 rounded bg-green-500 dark:bg-gray-600 hover:bg-green-600 dark:hover:bg-gray-500 transition-colors"
        >
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        
      </div>
    </nav>
  );
}
