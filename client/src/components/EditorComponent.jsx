import { useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

const EditorComponent = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('// Write your code here');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate hook

  const runCode = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/execute', { code, language });
      setOutput(res.data.output);
    } catch (err) {
      setOutput('Error executing code');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');  // Remove token from localStorage
    navigate('/login');  // Navigate to the login page
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
        </select>
        <button
          onClick={runCode}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          {loading ? 'Running...' : 'Run'}
        </button>
      </div>

      <Editor
        height="400px"
        language={language === 'cpp' ? 'cpp' : language}
        value={code}
        theme="vs-dark"
        defaultLanguage="javascript"
        onChange={(value) => setCode(value)}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          automaticLayout: true,
          tabSize: 2,
        }}
      />

      <div className="mt-4 p-4 bg-gray-200 rounded">
        <h3 className="font-semibold mb-2">Output:</h3>
        <pre>{output}</pre>
      </div>

      <div className="mt-4 text-center">
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default EditorComponent;
