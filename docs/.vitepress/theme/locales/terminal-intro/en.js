export default {
  common: {
    primaryBuffer: 'Primary Buffer',
    alternateBuffer: 'Alternate Buffer'
  },
  bufferSwitch: {
    primaryDesc:
      'This is the standard scrolling log. Commands are executed line by line.',
    alternateDesc:
      'A separate "canvas" for full-screen apps. It hides the history but doesn\'t delete it.',
    executeVim: 'Execute `vim notes.txt`',
    executeQuit: 'Execute `:q` (Quit)'
  },
  escapeParser: {
    title: 'Parser Mechanism',
    inputLabel: 'Input Byte Stream',
    screenLabel: 'Screen Display'
  },
  escapeSequences: {
    paletteLabel: '16-Color Palette',
    stylesLabel: 'Style Sequences',
    boldLabel: 'Bold',
    underlineLabel: 'Underline',
    resetLabel: 'Reset All Styles',
    cursorLabel: 'Cursor Control Sequences',
    clearScreen: 'Clear Screen',
    moveHome: 'Move Home (0,0)',
    moveTo: 'Move to (5,10)'
  },
  terminalDefinition: {
    cliLabel: 'Command Line Interface',
    guiLabel: 'Graphical User Interface',
    sendDesc: 'Sends commands (character signals)',
    charStream: 'Character Stream',
    textGrid: 'Text Grid Feedback',
    cliModeDesc:
      "In this mode, the computer only understands characters. Each key press is converted to an encoding and sent to the system, which processes it and returns text results. It doesn't care where you click, only what you type.",
    playSimulation: 'Play Simulation /',
    simulating: 'Simulating... /',
    sendEvent: 'Sends events (coordinates/clicks)',
    eventLoop: 'Event Loop',
    pixelRender: 'Pixel Graphics Rendering',
    guiModeDesc:
      "In this mode, the computer tracks mouse coordinates and click events in real time, and refreshes the screen pixels 60 times per second. It's more intuitive but requires significant resources to handle graphics rendering.",
    playInteraction: 'Play Interaction /'
  },
  terminalOSDemo: {
    clickLabel: 'Keep Clicking',
    finishedLabel: 'Finished (Reset)',
    clickHint: 'Click screen to continue',
    cmd: 'Command',
    powershell: 'PowerShell',
    macTerminal: 'macOS Terminal',
    linuxTerminal: 'Linux Terminal',
    ready: 'Ready to input command...',
    dirCmd:
      'Input `dir` (Directory). This is the Windows command to **list current folder contents**.',
    dirOutput:
      'System returned the file list. `<DIR>` indicates a folder, numbers indicate file size.',
    getDateCmd:
      'Input `Get-Date`. PowerShell uses verb-noun naming, this **gets the current time**.',
    getDateOutput: 'System returned the current date and time.',
    echoCmd:
      'Input `echo`. This makes the computer **repeat** what you say, used for testing or printing info.',
    echoOutput: 'The computer obediently output "Hello World".',
    lsCmd:
      'Input `ls` (List). This is the Mac/Linux command to **list files**. `-G` flag adds color.',
    lsOutput: 'System listed folders in your home directory.',
    swVersCmd:
      'Input `sw_vers` (Software Version). This macOS-specific command checks **system version**.',
    swVersOutput: 'System returned current macOS version info.',
    lsLaCmd:
      'Input `ls` (List). This is the Linux/Mac command to **list files**. `-la` means "list all files(all) in long format(long)".',
    lsLaOutput:
      'System returned the file list. The `drwxr-xr-x` looks like gibberish but is actually **permission description** (who can read/write).',
    whoamiCmd:
      'Input `whoami` (Who am I). A classic philosophical command (lol), telling the computer: **Who am I?** (current logged-in user).',
    whoamiOutput: 'System answered: You are "user".'
  },
  architecture: {
    terminalLabel: 'Terminal',
    conduitLabel: 'Conduit / Window',
    shellLabel: 'Shell',
    terminalRole: 'Terminal',
    terminalDesc: 'Conduit / Window',
    shellRole: 'Shell',
    shellDesc: 'Interpreter / Assistant',
    kernelRole: 'Kernel',
    kernelDesc: 'Manager / Chip',
    userSpace: 'User Space',
    kernelSpace: 'Kernel Space',
    clickStart: 'Keep Clicking',
    finishedReset: 'Finished (Reset)',
    startSimulation: 'Start Simulation',
    nextStep: 'Next Step',
    done: 'Done',
    reset: 'Reset',
    clickHint:
      'Click "Start Simulation" to see how the command \'ls\' travels through the system.',
    step1Title: '1. User Input',
    step1Desc:
      "You type 'ls' in the terminal window. The terminal captures your keystrokes.",
    step1Tech: "Terminal buffers input in 'Cooked Mode' until you press Enter.",
    step2Title: '2. Transmission',
    step2Desc:
      "The Terminal sends the characters 'l', 's', and 'Enter' to the Shell.",
    step2Tech: 'Data travels via standard input (stdin) as a byte stream.',
    step3Title: '3. Shell Parsing',
    step3Desc: 'The Shell (Waiter) translates your command for the Kernel.',
    step3Tech: "Shell tokenizes input, finds the 'ls' executable in $PATH.",
    step4Title: '4. System Call',
    step4Desc: 'The Shell asks the Kernel to read the file list from the disk.',
    step4Tech: 'Shell invokes `execve()` and `getdents()` system calls.',
    step5Title: '5. Kernel Execution',
    step5Desc:
      'The Kernel (Kitchen) executes the request by accessing hardware.',
    step5Tech: 'Kernel driver accesses the file system (APFS/ext4).',
    step6Title: '6. Returning Data',
    step6Desc: 'The Kernel gives the raw file list back to the Shell.',
    step6Tech: 'System call returns with file descriptors/structs.',
    step7Title: '7. Formatting',
    step7Desc:
      'The Shell formats the raw list into text, adding colors if needed.',
    step7Tech: 'Shell formats output buffer, adding ANSI color codes.',
    step8Title: '8. Display Output',
    step8Desc:
      'The Shell sends the final text back to the Terminal to show you.',
    step8Tech: 'Data travels via standard output (stdout) to the TTY.',
    step9Title: '9. Render',
    step9Desc: 'The Terminal draws the text on the screen grid.',
    step9Tech: 'Terminal emulator renders glyphs into the frame buffer.'
  },
  terminalHandsOn: {
    taskTitle: 'Hands-on Task',
    aiTitle: 'Not sure how to write? Ask AI',
    copyCmd: 'Copy command',
    expectedGoal: 'Expected Goal: ',
    taskComplete: 'Awesome! Task Complete!',
    nextLevel: 'Next Level',
    restart: 'Start Over',
    enterHint: 'Press Enter to execute',
    hintTryAi: 'Hint: Try clicking "Ask AI" on the left?',
    nextLevelIntro: '--- Entering Next Level',
    t1Title: "Step 1: See What's Here",
    t1Desc:
      'Before working with files, we first need to know what files are in the current directory.',
    t1Goal: 'List all files in the current directory.',
    t1Query:
      'How do I view files in the current directory? What command should I use?',
    t1AiMac:
      'In macOS and Linux, use the `ls` command (List) to view file lists.',
    t1AiLinux:
      'In macOS and Linux, use the `ls` command (List) to view file lists.',
    t1AiPs: 'In PowerShell, you can use `ls` or `dir` command.',
    t1AiCmd:
      'In Windows CMD, use the `dir` command (Directory) to view file lists.',
    t1AiCommon: 'Usually use ls or dir.',
    t2Title: 'Step 2: Create a New Home',
    t2Desc:
      "Too many files can be messy. Let's create a dedicated folder for today's practice files.",
    t2Goal: 'Create a folder named "demo".',
    t2Query: 'How do I create a new folder? Name it demo.',
    t2Ai: 'The command to create a folder (directory) is `mkdir` (Make Directory). You can type `mkdir demo`.',
    t3Title: 'Step 3: Enter the New Home',
    t3Desc:
      'The folder is created, but we\'re still outside. We need to "walk" in.',
    t3Goal: 'Enter the "demo" folder.',
    t3Query: 'How do I enter the demo folder I just created?',
    t3Ai: 'Use the `cd` command (Change Directory) to switch directories. Type `cd demo`.',
    t4Title: 'Step 4: Create a New File',
    t4Desc: "Now we're in the demo folder. Let's create a simple text file.",
    t4Goal: 'Create a file named "hello.txt".',
    t4Query: 'I want to create an empty file called hello.txt. How?',
    t4AiMac:
      'On Mac/Linux, use `touch hello.txt` to quickly create an empty file.',
    t4AiLinux:
      'On Mac/Linux, use `touch hello.txt` to quickly create an empty file.',
    t4AiPs:
      'In PowerShell, you can use `ni hello.txt` or `echo "" > hello.txt`.',
    t4AiCmd:
      'In CMD, you can use `type nul > hello.txt` or `echo. > hello.txt`.',
    t5Title: 'Step 5: Install Software (System Tools & Python Libraries)',
    t5Desc:
      "Terminals can not only manage files but also install software. Let's try two common installation scenarios: installing system tools (like wget/git) and installing Python libraries (like requests).",
    t5Goal: 'Choose one: Install system tools or Python libraries.',
    t5Query:
      "How do I install software via command line? I want to install git or Python's requests library.",
    t5AiMac:
      'macOS recommends using Homebrew for system software, pip for Python libraries.',
    t5AiLinux:
      'Linux (Ubuntu/Debian) uses apt for system software, pip for Python libraries.',
    t5AiPs:
      'Windows PowerShell recommends using winget for system software, pip for Python libraries.',
    t5AiCmd:
      'Windows CMD recommends using winget for system software, pip for Python libraries.',
    t5AiCommon: 'Different systems have different package managers.',
    t5InstallWget: 'Install wget (System)',
    t5InstallRequests: 'Install requests (Python)',
    t5InstallGit: 'Install git (System)',
    t6Title: 'Step 6: Clean Up',
    t6Desc:
      "Practice is over. Let's delete the files we just created to keep the environment tidy.",
    t6Goal: 'Delete the "hello.txt" file.',
    t6Query: "I don't want hello.txt anymore. How do I delete it?",
    t6AiMac:
      "Use the `rm` command (Remove) to delete files. Be careful, this operation usually can't be undone! Type `rm hello.txt`.",
    t6AiLinux:
      "Use the `rm` command (Remove) to delete files. Be careful, this operation usually can't be undone! Type `rm hello.txt`.",
    t6AiPs: 'In PowerShell use `rm` or `del`. Type `rm hello.txt`.',
    t6AiCmd: 'In CMD use the `del` command (Delete). Type `del hello.txt`.'
  }
}
