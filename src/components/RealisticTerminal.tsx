import React, { useState, useEffect, useRef } from 'react';

interface TerminalEntry {
  type: 'command' | 'output' | 'error' | 'success' | 'info';
  content: string;
  path?: string;
  user?: string;
  host?: string;
}

const RealisticTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentPath] = useState('~/portfolio');
  const [username] = useState('dhairya');
  const [hostname] = useState('dev-machine');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    // Add welcome message
    setHistory([{
      type: 'info',
      content: `Welcome to Dhairya's Portfolio Terminal v2.0

🚀 Available Commands:
  about       - Learn about me
  projects    - View my projects
  skills      - Check my technical skills
  achievements- See my achievements
  contact     - Get my contact information
  certifications - View my certifications
  help        - Show this help message
  clear       - Clear the terminal
  
Type any command to get started!`
    }]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const projects = [
    {
      title: 'PokéNFT Website',
      description: 'Evolution and marketplace components for Pokémon NFTs. Features cool text styles, timer features, and a consistent dark theme.',
      tags: ['React', 'TypeScript', 'Web3.js', 'Tailwind CSS'],
      status: 'In Development'
    },
    {
      title: 'AI Playlist Maker',
      description: 'Generates playlists based on user prompts. Integrated with Spotify API for exporting playlists.',
      tags: ['Python', 'Flask', 'Spotify API', 'NLP'],
      status: 'Completed'
    },
    {
      title: 'Full-Stack Inventory Project',
      description: 'An inventory management system developed using React (frontend), Node.js (backend), and integrated with TypeScript.',
      tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
      status: 'Completed'
    },
    {
      title: 'Generative AI Chatbot',
      description: 'Industry-specific use cases with conversation summarization and progress tracking.',
      tags: ['Python', 'TensorFlow', 'NLP', 'Flask'],
      status: 'Completed'
    }
  ];

  const skills = {
    'Frontend Development': ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'HTML&CSS'],
    'Backend Development': ['Node.js', 'Flask', 'Express', 'MongoDB', 'SQL'],
    'Generative AI': ['LangChain', 'Prompt Engineering', 'Open AI', 'Hugging Face', 'Machine Learning']
  };

  const achievements = [
    {
      title: 'Winner – Illuminati\'25 Hackathon 🏆',
      description: 'Secured 1st place at Illuminati 2025, hosted by ITM SLS Baroda University.',
      details: [
        'Developed Evencio, an NFT-based ticketing system that prioritizes real fans over scalpers',
        'Integrated Spotify authentication to calculate a Fan Score based on listening activity',
        'Implemented a resale revenue-sharing model, allowing artists to earn from secondary sales',
        'Designed and built a user-friendly UI under tight time constraints'
      ],
      date: 'FEB-2025'
    }
  ];

  const certifications = [
    {
      title: 'Foundation Course and Training on Python Programming, Data Analysis with Python, AI, and SAP Conversational AI Chatbot',
      issuer: 'Code Unnati Program, Edunet Foundation'
    },
    {
      title: 'Introduction to Prompt Engineering',
      issuer: 'Skillup'
    }
  ];

  const formatProjects = () => {
    let output = `
╭────────────────────────────────────────╮
│              🚀 MY PROJECTS            │
╰────────────────────────────────────────╯

`;
    projects.forEach((project, index) => {
      output += `
┌─ Project ${index + 1}: ${project.title}
├─ Status: ${project.status}
├─ Description: 
│  ${wrapText(project.description, 50)}
├─ Tech Stack: 
│  ${wrapText(project.tags.join(' • '), 50)}
└────────────────────────────────────────

`;
    });
    return output;
  };

  const formatSkills = () => {
    let output = `
╭────────────────────────────────────────╮
│           💻 TECHNICAL SKILLS          │
╰────────────────────────────────────────╯

`;
    Object.entries(skills).forEach(([category, skillList]) => {
      output += `
┌─ ${category}
`;
      skillList.forEach(skill => {
        output += `├─ ✓ ${skill}
`;
      });
      output += `└────────────────────────────────────────

`;
    });
    return output;
  };

  const formatAchievements = () => {
    let output = `
╭────────────────────────────────────────╮
│             🏆 ACHIEVEMENTS            │
╰────────────────────────────────────────╯

`;
    achievements.forEach((achievement) => {
      output += `
┌─ ${achievement.title}
├─ ${wrapText(achievement.description, 38)}
├─ Date: ${achievement.date}
├─ Key Highlights:
`;
      achievement.details.forEach(detail => {
        const wrappedDetail = wrapText(detail, 36);
        const lines = wrappedDetail.split('\n');
        lines.forEach((line, idx) => {
          output += `│  ${idx === 0 ? '•' : ' '} ${line}
`;
        });
      });
      output += `└────────────────────────────────────────

`;
    });
    return output;
  };

  const formatCertifications = () => {
    let output = `
╭────────────────────────────────────────╮
│           📜 CERTIFICATIONS            │
╰────────────────────────────────────────╯

`;
    certifications.forEach((cert, index) => {
      output += `
┌─ Certification ${index + 1}:
├─ Title: 
│  ${wrapText(cert.title, 38)}
├─ Issuer: ${cert.issuer}
└────────────────────────────────────────

`;
    });
    return output;
  };

  const formatAbout = () => {
    return `
╭────────────────────────────────────────╮
│              👨‍💻 ABOUT ME              │
╰────────────────────────────────────────╯

Hey there! I'm Dhairya Chawda, a passionate 
full-stack developer with expertise in building 
robust and scalable web applications.

🚀 My Journey:
   • Full-stack development with React, 
     TypeScript, Node.js
   • Recently diving deep into Generative AI
   • Worked on exciting AI projects during 
     internship
   • Always eager for new challenges in tech

💡 What I Do:
   • Build modern web applications
   • Create AI-powered solutions
   • Design intuitive user experiences
   • Solve complex technical problems

⚽ Beyond Code:
   • Passionate about hiking, sports, cycling
   • Played football at I-League and 
     inter-district levels
   • Believer in teamwork and perseverance

📍 Location: Vadodara, Gujarat, India
📧 Email: dhairychawda12@gmail.com

Always learning, always building! 🌟
`;
  };

  const formatContact = () => {
    return `
╭────────────────────────────────────────╮
│            📞 CONTACT INFO             │
╰────────────────────────────────────────╯

📧 Email: dhairychawda12@gmail.com
📍 Location: Vadodara, Gujarat, India

🌐 Social Links:
   • LinkedIn: 
     linkedin.com/in/dhairya-chawda-464884233/
   • GitHub: github.com/dhairyaaa15
   • X (Twitter): x.com/dhairya_15_

💼 Let's connect and build something 
   amazing together!
`;
  };

  const formatHelp = () => {
    return `
╭────────────────────────────────────────╮
│           📖 HELP & COMMANDS           │
╰────────────────────────────────────────╯

Available Commands:

🔹 about         - Learn about my background
🔹 projects      - Explore my latest projects
🔹 skills        - View my technical skills
🔹 achievements  - See my accomplishments
🔹 certifications- Check my certifications
🔹 contact       - Get my contact info
🔹 help          - Show this help message
🔹 clear         - Clear the terminal screen

Navigation Tips:
• Use ↑/↓ arrow keys to browse command history
• Use Tab for command auto-completion
• Type 'clear' to start fresh

Ready to explore? Try any command above! 🚀
`;
  };

  // Helper function to wrap text
  const wrapText = (text: string, maxLength: number): string => {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    words.forEach(word => {
      if ((currentLine + word).length > maxLength) {
        if (currentLine) {
          lines.push(currentLine.trim());
          currentLine = word + ' ';
        } else {
          lines.push(word);
          currentLine = '';
        }
      } else {
        currentLine += word + ' ';
      }
    });

    if (currentLine) {
      lines.push(currentLine.trim());
    }

    return lines.join('\n│  ');
  };

  const executeCommand = (cmd: string): { content: string; type: 'output' | 'error' | 'success' } => {
    const command = cmd.trim().toLowerCase();
    
    switch (command) {
      case '':
        return { content: '', type: 'output' };
        
      case 'about':
        return { content: formatAbout(), type: 'success' };
        
      case 'projects':
        return { content: formatProjects(), type: 'success' };
        
      case 'skills':
        return { content: formatSkills(), type: 'success' };
        
      case 'achievements':
        return { content: formatAchievements(), type: 'success' };
        
      case 'certifications':
        return { content: formatCertifications(), type: 'success' };
        
      case 'contact':
        return { content: formatContact(), type: 'success' };
        
      case 'help':
        return { content: formatHelp(), type: 'info' };
        
      case 'clear':
        setHistory([]);
        return { content: '', type: 'output' };
        
      case 'whoami':
        return { content: 'dhairya - Full-Stack Developer & AI Enthusiast', type: 'output' };
        
      case 'pwd':
        return { content: currentPath, type: 'output' };
        
      case 'date':
        return { content: new Date().toString(), type: 'output' };
        
      default:
        return { 
          content: `Command '${command}' not found. Type 'help' to see available commands.`, 
          type: 'error' 
        };
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
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
      const commands = ['about', 'projects', 'skills', 'achievements', 'certifications', 'contact', 'help', 'clear'];
      const matches = commands.filter(cmd => cmd.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    } else if (e.key === 'Enter') {
      if (!input.trim()) return;
      
      setCommandHistory(prev => [...prev, input]);
      setHistoryIndex(-1);
      
      const result = executeCommand(input);
      
      setHistory(prev => [...prev, {
        type: 'command',
        content: input,
        path: currentPath,
        user: username,
        host: hostname
      }]);
      
      if (result.content) {
        setHistory(prev => [...prev, {
          type: result.type,
          content: result.content
        }]);
      }
      
      setInput('');
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  const formatOutput = (content: string, type: string) => {
    const getTextColor = () => {
      switch (type) {
        case 'error': return 'text-red-400';
        case 'success': return 'text-green-400';
        case 'info': return 'text-cyan-400';
        default: return 'text-white';
      }
    };

    return content.split('\n').map((line, i) => (
      <div key={i} className={`${getTextColor()}`} style={{ wordBreak: 'break-word' }}>
        {line}
      </div>
    ));
  };

  const getPrompt = () => {
    const pathDisplay = currentPath.replace('/home/dhairya', '~');
    return (
      <span className="text-green-400 flex-shrink-0">
        {username}@{hostname}
        <span className="text-white">:</span>
        <span className="text-blue-400">{pathDisplay}</span>
        <span className="text-white">$ </span>
      </span>
    );
  };

  return (
    <div className="h-full bg-black text-white font-mono text-sm border border-gray-800 rounded-lg overflow-hidden">
      <div 
        ref={terminalRef}
        className="h-full p-4 overflow-y-auto overflow-x-hidden cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, index) => (
          <div key={index} className="mb-1">
            {entry.type === 'command' ? (
              <div className="flex flex-wrap">
                <span className="text-green-400 flex-shrink-0">
                  {entry.user}@{entry.host}
                  <span className="text-white">:</span>
                  <span className="text-blue-400">{entry.path?.replace('/home/dhairya', '~')}</span>
                  <span className="text-white">$ </span>
                </span>
                <span className="text-white break-all">{entry.content}</span>
              </div>
            ) : (
              <div className="overflow-x-hidden">
                {formatOutput(entry.content, entry.type)}
              </div>
            )}
          </div>
        ))}
        
        <div className="flex flex-wrap">
          {getPrompt()}
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent text-white flex-1 min-w-0 outline-none caret-white"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};

export default RealisticTerminal;