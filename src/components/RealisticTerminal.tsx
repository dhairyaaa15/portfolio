import React, { useState, useEffect, useRef } from 'react';

const RealisticTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentPath, setCurrentPath] = useState('/home/user');
  const [username] = useState('user');
  const [hostname] = useState('localhost');
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const fileSystem = {
    '/home/user': {
      'Documents': 'directory',
      'Downloads': 'directory',
      'Desktop': 'directory',
      'Pictures': 'directory',
      'Music': 'directory',
      'Videos': 'directory',
      '.bashrc': 'file',
      '.vimrc': 'file',
      'project.txt': 'file',
      'README.md': 'file'
    },
    '/home/user/Documents': {
      'report.pdf': 'file',
      'notes.txt': 'file',
      'work': 'directory'
    },
    '/home/user/Downloads': {
      'file.zip': 'file',
      'image.jpg': 'file',
      'installer.deb': 'file'
    }
  };

  const executeCommand = (cmd) => {
    const [command, ...args] = cmd.trim().split(/\s+/);
    
    switch (command) {
      case '':
        return '';
        
      case 'ls':
        const path = args[0] || currentPath;
        const contents = fileSystem[path];
        if (!contents) {
          return `ls: cannot access '${path}': No such file or directory`;
        }
        return Object.entries(contents)
          .map(([name, type]) => type === 'directory' ? `\x1b[34m${name}\x1b[0m` : name)
          .join('  ');
          
      case 'pwd':
        return currentPath;
        
      case 'whoami':
        return username;
        
      case 'hostname':
        return hostname;
        
      case 'date':
        return new Date().toString();
        
      case 'uptime':
        return ' 14:23:45 up 2 days,  3:45,  1 user,  load average: 0.52, 0.43, 0.39';
        
      case 'ps':
        return `  PID TTY          TIME CMD
 1234 pts/0    00:00:01 bash
 5678 pts/0    00:00:00 ps`;
        
      case 'free':
        return `              total        used        free      shared  buff/cache   available
Mem:        8048576     2834512     3251200      124832     1962864     4878336
Swap:       2097148           0     2097148`;
        
      case 'df':
        return `Filesystem     1K-blocks    Used Available Use% Mounted on
/dev/sda1       20971520 8388608  12582912  40% /
tmpfs            1024000       0   1024000   0% /dev/shm
/dev/sda2      104857600 5242880  99614720   5% /home`;
        
      case 'cat':
        if (!args[0]) {
          return 'cat: missing file operand';
        }
        const filename = args[0];
        const currentDir = fileSystem[currentPath];
        if (!currentDir || !currentDir[filename]) {
          return `cat: ${filename}: No such file or directory`;
        }
        if (currentDir[filename] === 'directory') {
          return `cat: ${filename}: Is a directory`;
        }
        // Sample file contents
        const fileContents = {
          'project.txt': 'This is a sample project file.\nLine 2 of the file.\nEnd of file.',
          'README.md': '# Project\n\nThis is a sample README file.\n\n## Installation\n\nRun `npm install`',
          '.bashrc': '# ~/.bashrc\n\nalias ll="ls -la"\nalias la="ls -A"\nalias l="ls -CF"',
          '.vimrc': '" Vim configuration\nset number\nset tabstop=4\nset expandtab'
        };
        return fileContents[filename] || 'Sample file content';
        
      case 'echo':
        return args.join(' ');
        
      case 'clear':
        setHistory([]);
        return '';
        
      case 'history':
        return commandHistory.map((cmd, i) => `  ${i + 1}  ${cmd}`).join('\n');
        
      case 'uname':
        const flag = args[0];
        if (flag === '-a') {
          return 'Linux localhost 5.15.0-72-generic #79-Ubuntu SMP Wed Apr 19 08:22:18 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux';
        }
        return 'Linux';
        
      case 'which':
        if (!args[0]) {
          return 'which: missing operand';
        }
        const binaries = ['ls', 'cat', 'echo', 'ps', 'grep', 'vim', 'nano', 'git'];
        if (binaries.includes(args[0])) {
          return `/usr/bin/${args[0]}`;
        }
        return `which: no ${args[0]} in (/usr/local/bin:/usr/bin:/bin)`;
        
      case 'man':
        if (!args[0]) {
          return 'What manual page do you want?';
        }
        return `Manual page for ${args[0]} would be displayed here.
Use 'q' to quit the manual page.`;
        
      case 'top':
        return `top - 14:23:45 up 2 days,  3:45,  1 user,  load average: 0.52, 0.43, 0.39
Tasks: 156 total,   1 running, 155 sleeping,   0 stopped,   0 zombie
%Cpu(s):  2.3 us,  0.7 sy,  0.0 ni, 96.7 id,  0.3 wa,  0.0 hi,  0.0 si,  0.0 st

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 1234 user      20   0  123456   1234   1234 S   1.0   0.1   0:00.01 bash
 5678 user      20   0   87654    876    876 R   0.5   0.1   0:00.00 top`;
        
      case 'env':
        return `HOME=/home/user
PATH=/usr/local/bin:/usr/bin:/bin
SHELL=/bin/bash
USER=user
TERM=xterm-256color
PWD=${currentPath}`;
        
      case 'exit':
        return 'logout';
        
      default:
        return `bash: ${command}: command not found`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = ['ls', 'cat', 'echo', 'pwd', 'whoami', 'date', 'ps', 'free', 'df', 'history', 'clear', 'uname', 'which', 'man', 'top', 'env', 'exit'];
      const matches = commands.filter(cmd => cmd.startsWith(input));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    } else if (e.key === 'Enter') {
      if (!input.trim()) return;
      
      setCommandHistory(prev => [...prev, input]);
      setHistoryIndex(-1);
      
      const output = executeCommand(input);
      
      setHistory(prev => [...prev, {
        type: 'command',
        content: input,
        path: currentPath,
        user: username,
        host: hostname
      }]);
      
      if (output) {
        setHistory(prev => [...prev, {
          type: 'output',
          content: output
        }]);
      }
      
      setInput('');
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  const formatOutput = (content) => {
    return content.split('\n').map((line, i) => (
      <div key={i} className="whitespace-pre">
        {line.split('\x1b[34m').map((part, j) => {
          if (part.includes('\x1b[0m')) {
            const [coloredText, normalText] = part.split('\x1b[0m');
            return (
              <span key={j}>
                <span className="text-blue-400">{coloredText}</span>
                {normalText}
              </span>
            );
          }
          return part;
        })}
      </div>
    ));
  };

  const getPrompt = () => {
    const pathDisplay = currentPath.replace('/home/user', '~');
    return (
      <span className="text-green-400">
        {username}@{hostname}
        <span className="text-white">:</span>
        <span className="text-blue-400">{pathDisplay}</span>
        <span className="text-white">$ </span>
      </span>
    );
  };

  return (
    <div className="h-screen bg-black text-white font-mono text-sm">
      <div 
        ref={terminalRef}
        className="h-full p-4 overflow-y-auto cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, index) => (
          <div key={index} className="mb-1">
            {entry.type === 'command' ? (
              <div className="flex">
                <span className="text-green-400">
                  {entry.user}@{entry.host}
                  <span className="text-white">:</span>
                  <span className="text-blue-400">{entry.path.replace('/home/user', '~')}</span>
                  <span className="text-white">$ </span>
                </span>
                <span className="text-white">{entry.content}</span>
              </div>
            ) : (
              <div className="text-white">
                {formatOutput(entry.content)}
              </div>
            )}
          </div>
        ))}
        
        <div className="flex">
          {getPrompt()}
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent text-white flex-1 outline-none caret-white"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};

export default RealisticTerminal;