const OutputBox = ({ output }) => {
  return (
    <div className="mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded">
      <h3 className="font-bold text-lg mb-2">Output:</h3>
      <pre className="whitespace-pre-wrap break-words">{output}</pre>
    </div>
  );
};

export default OutputBox;
