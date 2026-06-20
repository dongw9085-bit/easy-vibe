export default {
  aiHelp: {
    start: 'Demo: how do you ask AI about code you do not understand?',
    replay: 'Replay',
    codeComments: {
      waitData: 'Wait for data to finish loading',
      waitDom: 'Wait for the DOM update before rendering the chart'
    },
    question: 'Can you explain what the red boxed area on the left is for?',
    answer: {
      introPrefix: 'This is the VS Code',
      menuBar: 'Menu Bar',
      introSuffix:
        ', which contains entry points for the main application features.',
      menuTitle: 'Common menus:',
      items: [
        { name: 'File', desc: 'Create, open, and save files or projects.' },
        { name: 'Edit', desc: 'Copy, paste, find, replace, undo, and redo.' },
        {
          name: 'View',
          desc: 'Control what the interface shows, such as the sidebar and terminal.'
        },
        { name: 'Terminal', desc: 'Open the integrated command-line tool.' }
      ],
      tipLabel: 'Tip',
      tipText: ': if you forget where a feature is, press',
      tipSuffix: 'to open the Command Palette and search by name.'
    }
  },
  architecture: {
    title: 'IDE Core Mechanism Simulator',
    subtitle:
      'Click the tabs below to compare runtime results and see why each part matters.',
    runTitle: 'Click to run',
    runButton: '▶ Run',
    layerLabels: {
      shell: '1. Shell (VS Code)',
      mediator: '2. Mediator (Extension)',
      engine: '3. Engine (Environment)'
    },
    statuses: {
      editorError: 'Does not know how to run it',
      extensionMissing: 'Extension not installed',
      envMissing: 'Environment not installed',
      commandGenerated: 'Generated command:',
      calculating: 'Calculating...',
      done: 'Calculation complete',
      programMissing: 'Program not found',
      terminal: 'Terminal',
      placeholder: 'Click the Run button above to start...'
    },
    pythonExtension: 'Python extension',
    pythonInterpreter: 'Python interpreter',
    scenarios: {
      editor: {
        tab: '1. Editor only',
        title: 'Scenario 1: VS Code only (plain text mode)',
        desc: 'This is like writing code in Notepad. You can type, but the editor does not understand Python.',
        result:
          'Failed: VS Code treats the code as plain text and does not know how to run it.'
      },
      extension: {
        tab: '2. + Extension',
        title: 'Scenario 2: Extension installed (missing environment)',
        desc: 'The Python extension knows that Run means finding a Python program, but Python is not installed on your computer.',
        result:
          'Error: the extension generated a command, but the system cannot find "python.exe".'
      },
      full: {
        tab: '3. + Environment',
        title: 'Scenario 3: Complete setup (IDE + extension + environment)',
        desc: 'The Python interpreter is installed. The extension generates a command, and the interpreter receives and runs it.',
        result: 'Success: Hello World'
      }
    },
    logs: {
      unknownFile:
        'VS Code: "What kind of file is this? I do not recognize it."',
      textEditor:
        'VS Code: "I am only a text editor here, so I cannot run it."',
      missingPython: 'System: Python interpreter not found'
    }
  },
  virtual: {
    title: 'Virtual IDE Interactive Demo',
    startTour: 'Start auto tour',
    stopTour: 'Stop demo',
    infoPlaceholder: 'Hover to inspect features',
    selectFallback: 'Choose tour mode',
    tourFinished: 'Tour finished',
    tourOptions: [
      { label: 'Full Tour', value: 'all' },
      { label: 'Interface Navigation', value: 'navigation' },
      { label: 'Extensions', value: 'extensions' },
      { label: 'Code Editing', value: 'editor' },
      { label: 'Debug & Terminal', value: 'debug' }
    ],
    menus: {
      File: [
        { label: 'New File', info: 'New file: create an empty file' },
        { label: 'Open File...', info: 'Open file: choose a file' },
        { label: 'Save', info: 'Save: save changes' },
        { label: 'Save As...', info: 'Save as: save as a new file' },
        { label: 'Auto Save', info: 'Auto save: enable automatic saving' },
        {
          label: 'Preferences',
          info: 'Preferences: configure themes and settings'
        },
        { label: 'Exit', info: 'Exit: close VS Code' }
      ],
      Edit: [
        { label: 'Undo', info: 'Undo: revert the last action' },
        { label: 'Redo', info: 'Redo: restore the action' },
        { label: 'Cut', info: 'Cut: remove the selection' },
        { label: 'Copy', info: 'Copy: copy the selection' },
        { label: 'Paste', info: 'Paste: insert clipboard content' },
        { label: 'Find', info: 'Find: search content' },
        { label: 'Replace', info: 'Replace: replace content' }
      ],
      Selection: [
        { label: 'Select All', info: 'Select all: select everything' },
        {
          label: 'Expand Selection',
          info: 'Expand selection: include more range'
        },
        {
          label: 'Shrink Selection',
          info: 'Shrink selection: reduce the range'
        }
      ],
      View: [
        { label: 'Command Palette...', info: 'Command Palette: run commands' },
        { label: 'Open View...', info: 'Open view: show a panel or view' },
        { label: 'Appearance', info: 'Appearance: adjust display' },
        { label: 'Editor Layout', info: 'Layout: arrange editor splits' }
      ],
      Go: [
        { label: 'Back', info: 'Back: previous location' },
        { label: 'Forward', info: 'Forward: next location' },
        { label: 'Go to File...', info: 'Go to file: open quickly' },
        { label: 'Go to Symbol...', info: 'Go to symbol: jump to definitions' }
      ],
      Debug: [
        {
          label: 'Start Debugging',
          info: 'Start debugging: run with debugger'
        },
        { label: 'Run Without Debugging', info: 'Run: run directly' },
        { label: 'Stop Debugging', info: 'Stop: end debugging' }
      ],
      Terminal: [
        { label: 'New Terminal', info: 'New terminal: open a command line' },
        {
          label: 'Split Terminal',
          info: 'Split terminal: show terminals side by side'
        },
        { label: 'Run Task...', info: 'Run task: execute a configured task' }
      ],
      Help: [
        { label: 'Welcome', info: 'Welcome: getting started guide' },
        { label: 'Documentation', info: 'Documentation: read the docs' },
        { label: 'Show Release Notes', info: 'Release notes: version updates' },
        { label: 'About', info: 'About: version information' }
      ]
    },
    info: {
      logoMainMenu: 'VS Code logo: main menu',
      menuBar: 'Menu bar: all features',
      fileMenu: 'File menu: file operations',
      newFile: 'New file: create an empty file',
      navArrows: 'Navigation buttons: back and forward',
      commandCenter: 'Command center: quick search',
      layoutControls: 'Layout controls: switch views',
      activityBar: 'Activity bar: switch views',
      explorer: 'Explorer: manage files',
      search: 'Global search: find and replace',
      sourceControl: 'Source control: Git',
      runDebug: 'Run and debug: debug code',
      extensions: 'Extensions marketplace: install plugins',
      accounts: 'Accounts: sync settings',
      manage: 'Manage: global settings',
      sidebar: 'Sidebar: detailed content',
      openEditors: 'Open editors: files being edited',
      fileTree: 'Project file tree: project structure',
      tabs: 'Tabs: opened files',
      breadcrumbs: 'Breadcrumbs: file path',
      editor: 'Editor: write code',
      minimap: 'Minimap: preview code',
      bottomPanel: 'Bottom panel: integrated tools',
      panelTabs: 'Panel tabs: switch tools',
      terminal: 'Terminal: run commands',
      statusBar: 'Status bar: global information',
      statusLeft: 'Left status: Git and errors',
      statusRight: 'Right status: environment information',
      extensionSearch: 'Search extensions: enter python',
      installExtension: 'Install button: install with one click',
      backExplorer: 'Back to Explorer',
      titleBar: 'Title bar: global controls',
      logo: 'VS Code logo',
      menuEntry: 'Menu bar: feature entry points',
      navigation: 'Navigation: back and forward',
      searchCenter: 'Command center: search',
      layoutSwitch: 'Layout controls: switch views',
      windowControls: 'Window controls',
      explorerFiles: 'Explorer: file management',
      runDebugShort: 'Run and debug',
      extensionShort: 'Extensions',
      accountsShort: 'Accounts: sync',
      manageShort: 'Manage: settings',
      sidebarDetails: 'Sidebar: detailed content',
      tabSwitch: 'Tabs: switch files',
      filePath: 'Breadcrumbs: file path',
      codeEditor: 'Editor: write code',
      minimapJump: 'Minimap: jump quickly',
      integratedTools: 'Bottom panel: integrated tools',
      problems: 'Problems panel: errors and warnings',
      output: 'Output panel: logs',
      debugConsole: 'Debug console',
      terminalCli: 'Terminal: command line',
      panelActions: 'Panel actions',
      statusEnvironment: 'Status bar: environment information'
    }
  }
}
