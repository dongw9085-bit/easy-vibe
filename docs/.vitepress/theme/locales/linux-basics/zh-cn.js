export default {
  fileSystem: {
    title: 'Linux 文件系统层级',
    subtitle: '点击目录查看用途说明',
    examplesLabel: '常见内容：',
    dirs: [
      {
        path: '/',
        icon: '📁',
        brief: '根目录',
        desc: '整个文件系统的起点，所有目录和文件都从这里开始。Linux 中一切皆文件，所有设备、进程信息都以文件形式存在于这棵目录树中。',
        examples: []
      },
      {
        path: '/bin',
        icon: '⚙️',
        brief: '基础命令',
        desc: '存放系统启动和单用户模式下必需的基础命令二进制文件。这些命令所有用户都可以使用。',
        examples: ['ls', 'cp', 'mv', 'cat', 'grep', 'chmod']
      },
      {
        path: '/etc',
        icon: '📋',
        brief: '配置文件',
        desc: '存放系统和应用的配置文件。几乎所有软件的配置都在这里，修改配置是 Linux 运维的日常。',
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
        brief: '用户目录',
        desc: '普通用户的家目录。每个用户在这里有一个以用户名命名的子目录，存放个人文件和配置。',
        examples: ['/home/alice', '/home/bob', '~/.bashrc', '~/.ssh/']
      },
      {
        path: '/var',
        icon: '📊',
        brief: '可变数据',
        desc: '存放运行时会变化的数据：日志、缓存、邮件、数据库文件等。排查问题时经常需要查看这里的日志。',
        examples: ['/var/log/', '/var/cache/', '/var/lib/mysql/', '/var/www/']
      },
      {
        path: '/tmp',
        icon: '🗑️',
        brief: '临时文件',
        desc: '存放临时文件，系统重启后通常会被清空。所有用户都有写权限，适合存放不需要持久化的中间文件。',
        examples: ['编译中间文件', '下载缓存', '会话临时数据']
      },
      {
        path: '/usr',
        icon: '📦',
        brief: '用户程序',
        desc: '存放用户安装的程序、库和文档。可以理解为 "Unix System Resources"，是最大的目录之一。',
        examples: ['/usr/bin/', '/usr/lib/', '/usr/local/', '/usr/share/']
      },
      {
        path: '/proc',
        icon: '🔍',
        brief: '进程信息',
        desc: '虚拟文件系统，不占磁盘空间。内核将进程和系统信息以文件形式暴露在这里，是监控和调试的重要数据源。',
        examples: ['/proc/cpuinfo', '/proc/meminfo', '/proc/[pid]/status']
      },
      {
        path: '/dev',
        icon: '🔌',
        brief: '设备文件',
        desc: '存放设备文件。Linux 中硬件设备也是文件，通过读写这些文件与硬件交互。',
        examples: ['/dev/sda', '/dev/null', '/dev/zero', '/dev/tty']
      }
    ]
  },
  commands: {
    title: 'Linux 命令速查',
    subtitle: '按分类查看常用命令及示例',
    categories: [
      {
        key: 'file',
        label: '文件操作',
        commands: [
          { name: 'ls', brief: '列出文件和目录', example: 'ls -la /home' },
          { name: 'cd', brief: '切换目录', example: 'cd /var/log' },
          { name: 'cp', brief: '复制文件', example: 'cp -r src/ backup/' },
          { name: 'mv', brief: '移动/重命名', example: 'mv old.txt new.txt' },
          { name: 'rm', brief: '删除文件', example: 'rm -rf dist/' },
          {
            name: 'mkdir',
            brief: '创建目录',
            example: 'mkdir -p src/components'
          },
          {
            name: 'find',
            brief: '查找文件',
            example: 'find . -name "*.js" -type f'
          }
        ]
      },
      {
        key: 'text',
        label: '文本处理',
        commands: [
          { name: 'cat', brief: '查看文件内容', example: 'cat config.json' },
          {
            name: 'grep',
            brief: '搜索文本',
            example: 'grep -rn "ERROR" /var/log/'
          },
          {
            name: 'head/tail',
            brief: '查看文件头/尾',
            example: 'tail -f app.log'
          },
          {
            name: 'awk',
            brief: '文本列处理',
            example: "awk '{print $1, $3}' data.txt"
          },
          {
            name: 'sed',
            brief: '流式文本替换',
            example: "sed -i 's/old/new/g' file.txt"
          },
          { name: 'wc', brief: '统计行/词/字符数', example: 'wc -l *.js' },
          {
            name: 'sort | uniq',
            brief: '排序去重',
            example: 'sort data.txt | uniq -c'
          }
        ]
      },
      {
        key: 'process',
        label: '进程管理',
        commands: [
          { name: 'ps', brief: '查看进程', example: 'ps aux | grep node' },
          { name: 'top/htop', brief: '实时监控', example: 'top -o %CPU' },
          { name: 'kill', brief: '终止进程', example: 'kill -9 12345' },
          { name: 'nohup', brief: '后台运行', example: 'nohup node app.js &' },
          { name: 'lsof', brief: '查看打开的文件', example: 'lsof -i :3000' },
          {
            name: 'systemctl',
            brief: '管理系统服务',
            example: 'systemctl restart nginx'
          }
        ]
      },
      {
        key: 'network',
        label: '网络工具',
        commands: [
          {
            name: 'curl',
            brief: '发送 HTTP 请求',
            example: 'curl -X POST -d "data" url'
          },
          {
            name: 'ping',
            brief: '测试连通性',
            example: 'ping -c 4 google.com'
          },
          { name: 'ss/netstat', brief: '查看网络连接', example: 'ss -tlnp' },
          { name: 'dig', brief: 'DNS 查询', example: 'dig example.com' },
          { name: 'ssh', brief: '远程登录', example: 'ssh user@server -p 22' },
          {
            name: 'scp',
            brief: '远程复制文件',
            example: 'scp file.txt user@server:/tmp/'
          }
        ]
      }
    ]
  },
  permissions: {
    title: 'Linux 权限解读器',
    subtitle: '输入权限字符串或数字，查看含义',
    inputLabel: '权限数字（如 755）',
    examplesTitle: '常见权限组合',
    groups: [
      { key: 'owner', label: '所有者（Owner）' },
      { key: 'group', label: '所属组（Group）' },
      { key: 'others', label: '其他人（Others）' }
    ],
    bitNames: {
      r: '读',
      w: '写',
      x: '执行'
    },
    examples: [
      { num: '644', desc: '普通文件（owner 读写，其他只读）' },
      { num: '755', desc: '可执行文件/目录（owner 全权限）' },
      { num: '600', desc: '私密文件（仅 owner 读写）' },
      { num: '777', desc: '完全开放（不推荐）' }
    ]
  }
}
