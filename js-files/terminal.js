const terminalBody = document.getElementById('terminal-body');
const terminalInput = document.getElementById('terminal-input');

const input = document.querySelector("input");

// Object to store predefined commands and their responses
const commands = {
    'help': 'List of available commands: help, about, contact',
    'about': 'This is a demo terminal interface.',
    'contact': 'You can contact us at example@example.com.',
    'clear': 'qi3hbf'
  };

// terminalInput.addEventListener('keypress', function(event) {
  terminalInput.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
      const input = terminalInput.value.trim();
      if (input !== '') {
        const output = executeCommand(input);
        appendToTerminal(output);
      }
      terminalInput.value = ''; // clears input field after entering a value
    }
  });

    function executeCommand(input) {
      const command = input.split(' ')[0].toLowerCase(); // Extract the command (first word)
      const args = input.substring(command.length).trim(); // Extract any arguments after the command
      if (commands.hasOwnProperty(command)) {
        return commands[command];
      } else {
        return `Command not found: "${command}"`;
      }
    }

    function appendToTerminal(output) {
      const newLine = document.createElement('div');
      newLine.textContent = output;
      terminalBody.appendChild(newLine);
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
