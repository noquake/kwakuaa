const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const input = document.querySelector("input");

// Object to store predefined commands and their responses
const commands = {
    'help': 'List of commands: help, about, contact',
    'about': 'This is a demo terminal interface.',
    'contact': 'Email: kwakuagyapong478@gmail.com \nGitHub: https://github.com/noquake \nLinkedIn: https://www.linkedin.com/in/kwakuaagyapong/ \nNeed a meeting? try my Calendly https://calendly.com/kwakuagyapong478/30min',
    'clear': terminalOutput.textContent = '',
    'ls': 'A \nBunch \nOf \nFake \nFiles',
  };

  terminalInput.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
      const input = terminalInput.value.trim();
      if (input !== '') { 
        appendToTerminal(executeCommand(input)); 
        const currentOutput = terminalInput.parentElement;
        currentOutput.terminalContainer.appendChild(terminalInput.parentElement); // Append it to the end
        terminalInput.value = ''; // clears input field after entering a value
      }
    }
  });

    function executeCommand(input) {
      const command = input.split(' ')[0].toLowerCase(); // Extract the command (first word)
    //  const args = input.substring(command.length).trim(); // Extract any arguments after the command
      if (commands.hasOwnProperty(command)) {
        return commands[command];
      } else {
        return `Command not found: "${command}"`;
      }
    }

    function appendToTerminal(output) {
      const newLine = document.createElement('div');
      newLine.textContent = output;
      terminalOutput.appendChild(newLine);
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
