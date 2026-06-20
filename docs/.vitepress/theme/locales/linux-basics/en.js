export default {
  fileSystem: {
    title: 'Linux Filesystem Hierarchy',
    subtitle: 'Click a directory to see what it is used for',
    examplesLabel: 'Common contents:',
    dirs: [
      {
        path: '/',
        icon: '📁',
        brief: 'Root directory',
        desc: 'The starting point of the whole filesystem. Every directory and file begins here. In Linux, everything is a file, including devices and process information exposed through this directory tree.',
        examples: []
      },
      {
        path: '/bin',
        icon: '⚙️',
        brief: 'Essential commands',
        desc: 'Stores essential command binaries needed for booting and single-user mode. These commands are available to all users.',
        examples: ['ls', 'cp', 'mv', 'cat', 'grep', 'chmod']
      },
      {
        path: '/etc',
        icon: '📋',
        brief: 'Configuration files',
        desc: 'Stores system and application configuration files. Most software configuration lives here, so editing files in this directory is common in Linux operations.',
        examples: [
          'nginx.conf',
          'hosts',
          'passwd',
          'ssh/sshd_config',
          'crontab'
        ]
      },
      {
        path: '/home',
        icon: '🏠',
        brief: 'User home directories',
        desc: 'Home directories for normal users. Each user gets a named subdirectory for personal files and configuration.',
        examples: ['/home/alice', '/home/bob', '~/.bashrc', '~/.ssh/']
      },
      {
        path: '/var',
        icon: '📊',
        brief: 'Variable data',
        desc: 'Stores data that changes at runtime: logs, caches, mail, database files, and more. Troubleshooting often starts with logs here.',
        examples: ['/var/log/', '/var/cache/', '/var/lib/mysql/', '/var/www/']
      },
      {
        path: '/tmp',
        icon: '🗑️',
        brief: 'Temporary files',
        desc: 'Stores temporary files that are usually cleared after reboot. All users can write here, so it is useful for intermediate files that do not need persistence.',
        examples: [
          'Build intermediates',
          'Download cache',
          'Temporary session data'
        ]
      },
      {
        path: '/usr',
        icon: '📦',
        brief: 'User programs',
        desc: 'Stores user-installed programs, libraries, and documentation. It can be understood as Unix System Resources and is one of the largest directories.',
        examples: ['/usr/bin/', '/usr/lib/', '/usr/local/', '/usr/share/']
      },
      {
        path: '/proc',
        icon: '🔍',
        brief: 'Process information',
        desc: 'A virtual filesystem that uses no disk space. The kernel exposes process and system information as files here, making it important for monitoring and debugging.',
        examples: ['/proc/cpuinfo', '/proc/meminfo', '/proc/[pid]/status']
      },
      {
        path: '/dev',
        icon: '🔌',
        brief: 'Device files',
        desc: 'Stores device files. Hardware devices are represented as files in Linux, and programs interact with hardware by reading and writing these files.',
        examples: ['/dev/sda', '/dev/null', '/dev/zero', '/dev/tty']
      }
    ]
  },
  commands: {
    title: 'Linux Command Cheat Sheet',
    subtitle: 'Browse common commands and examples by category',
    categories: [
      {
        key: 'file',
        label: 'File operations',
        commands: [
          {
            name: 'ls',
            brief: 'List files and directories',
            example: 'ls -la /home'
          },
          { name: 'cd', brief: 'Change directory', example: 'cd /var/log' },
          { name: 'cp', brief: 'Copy files', example: 'cp -r src/ backup/' },
          {
            name: 'mv',
            brief: 'Move or rename',
            example: 'mv old.txt new.txt'
          },
          { name: 'rm', brief: 'Remove files', example: 'rm -rf dist/' },
          {
            name: 'mkdir',
            brief: 'Create directories',
            example: 'mkdir -p src/components'
          },
          {
            name: 'find',
            brief: 'Find files',
            example: 'find . -name "*.js" -type f'
          }
        ]
      },
      {
        key: 'text',
        label: 'Text processing',
        commands: [
          {
            name: 'cat',
            brief: 'View file content',
            example: 'cat config.json'
          },
          {
            name: 'grep',
            brief: 'Search text',
            example: 'grep -rn "ERROR" /var/log/'
          },
          {
            name: 'head/tail',
            brief: 'View file start/end',
            example: 'tail -f app.log'
          },
          {
            name: 'awk',
            brief: 'Process text columns',
            example: "awk '{print $1, $3}' data.txt"
          },
          {
            name: 'sed',
            brief: 'Stream text replacement',
            example: "sed -i 's/old/new/g' file.txt"
          },
          {
            name: 'wc',
            brief: 'Count lines, words, bytes',
            example: 'wc -l *.js'
          },
          {
            name: 'sort | uniq',
            brief: 'Sort and deduplicate',
            example: 'sort data.txt | uniq -c'
          }
        ]
      },
      {
        key: 'process',
        label: 'Process management',
        commands: [
          {
            name: 'ps',
            brief: 'View processes',
            example: 'ps aux | grep node'
          },
          {
            name: 'top/htop',
            brief: 'Monitor in real time',
            example: 'top -o %CPU'
          },
          {
            name: 'kill',
            brief: 'Terminate a process',
            example: 'kill -9 12345'
          },
          {
            name: 'nohup',
            brief: 'Run in background',
            example: 'nohup node app.js &'
          },
          { name: 'lsof', brief: 'View open files', example: 'lsof -i :3000' },
          {
            name: 'systemctl',
            brief: 'Manage system services',
            example: 'systemctl restart nginx'
          }
        ]
      },
      {
        key: 'network',
        label: 'Network tools',
        commands: [
          {
            name: 'curl',
            brief: 'Send HTTP requests',
            example: 'curl -X POST -d "data" url'
          },
          {
            name: 'ping',
            brief: 'Test connectivity',
            example: 'ping -c 4 google.com'
          },
          {
            name: 'ss/netstat',
            brief: 'View network connections',
            example: 'ss -tlnp'
          },
          { name: 'dig', brief: 'Query DNS', example: 'dig example.com' },
          {
            name: 'ssh',
            brief: 'Remote login',
            example: 'ssh user@server -p 22'
          },
          {
            name: 'scp',
            brief: 'Copy files remotely',
            example: 'scp file.txt user@server:/tmp/'
          }
        ]
      }
    ]
  },
  permissions: {
    title: 'Linux Permission Decoder',
    subtitle: 'Enter a numeric permission and inspect what it means',
    inputLabel: 'Permission number, such as 755',
    examplesTitle: 'Common permission combinations',
    groups: [
      { key: 'owner', label: 'Owner' },
      { key: 'group', label: 'Group' },
      { key: 'others', label: 'Others' }
    ],
    bitNames: {
      r: 'Read',
      w: 'Write',
      x: 'Execute'
    },
    examples: [
      {
        num: '644',
        desc: 'Normal file: owner can read/write, others read-only'
      },
      {
        num: '755',
        desc: 'Executable file or directory: owner has full access'
      },
      { num: '600', desc: 'Private file: only owner can read/write' },
      { num: '777', desc: 'Fully open: not recommended' }
    ]
  }
}
