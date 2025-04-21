const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { v4: uuidv4 } = require('uuid');
const os = require('os');

const tempDir = path.join(process.cwd(), 'temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

const isWindows = os.platform() === 'win32';

// Function to extract class name from Java code
const extractClassName = (code) => {
  const match = code.match(/public\s+class\s+(\w+)/);
  return match ? match[1] : 'Main'; // Default to 'Main' if not found
};

// Function to determine file extension based on language
const getFileExtension = (language) => {
  switch (language) {
    case 'javascript': return 'js';
    case 'python': return 'py';
    case 'c': return 'c';
    case 'cpp': return 'cpp';
    case 'java': return 'java';
    default: return 'txt';
  }
};

exports.executeCode = async (req, res) => {
  const { code, language } = req.body;

  const ext = getFileExtension(language);
  const filename = `${uuidv4()}.${ext}`;
  const filepath = path.join(tempDir, filename);

  fs.writeFileSync(filepath, code);

  let command;

  try {
    switch (language) {
      case 'javascript':
        command = `node ${filepath}`;
        break;

      case 'python':
        command = `python ${filepath}`;
        break;

      case 'c': {
        const exeFile = filepath.replace('.c', '.exe');
        command = `gcc ${filepath} -o ${exeFile} && ${isWindows ? exeFile : `./${exeFile}`}`;
        break;
      }

      case 'cpp': {
        const exeFile = filepath.replace('.cpp', '.exe');
        command = `g++ ${filepath} -o ${exeFile} && ${isWindows ? exeFile : `./${exeFile}`}`;
        break;
      }

      case 'java': {
        const className = extractClassName(code); // Extract class name from the code
        const classFilePath = path.join(tempDir, `${className}.java`);
        
        // Write the code to a file with the class name
        fs.writeFileSync(classFilePath, code);

        const dir = path.dirname(classFilePath);
        command = `javac ${classFilePath} && java -cp ${dir} ${className}`;
        break;
      }

      default:
        return res.status(400).json({ output: 'Unsupported language' });
    }

    exec(command, (error, stdout, stderr) => {
      fs.unlinkSync(filepath); // Cleanup source file

      if (error || stderr) {
        return res.json({ output: `Error: ${stderr || error.message}` });
      }

      return res.json({ output: stdout });
    });

  } catch (err) {
    return res.status(500).json({ output: 'Internal server error' });
  }
};
