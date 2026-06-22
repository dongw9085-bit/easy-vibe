export default {
  common: {
    primaryBuffer: '主缓冲区',
    alternateBuffer: '备用缓冲区'
  },
  bufferSwitch: {
    primaryDesc: '这是标准的滚动日志。命令逐行执行。',
    alternateDesc: '全屏应用使用的独立"画布"。它隐藏历史记录但不删除。',
    executeVim: '执行 `vim notes.txt`',
    executeQuit: '执行 `:q` (退出)'
  },
  escapeParser: {
    title: '转义序列解析原理',
    inputLabel: '输入字节流',
    screenLabel: '屏幕显示'
  },
  escapeSequences: {
    paletteLabel: '16 色调色板',
    stylesLabel: '样式序列',
    boldLabel: '加粗',
    underlineLabel: '下划线',
    resetLabel: '重置所有样式',
    cursorLabel: '光标控制序列',
    clearScreen: '清屏',
    moveHome: '回到原点 (0,0)',
    moveTo: '移动到 (5,10)'
  },
  terminalDefinition: {
    cliLabel: '命令行界面',
    guiLabel: '图形用户界面',
    sendDesc: '发送指令 (字符信号)',
    charStream: '字符流',
    textGrid: '文本网格反馈',
    cliModeDesc:
      '这种模式下，计算机只认识字符。你的每一次按键都会被转换成编码发送给系统，系统处理后返回文字结果。它不关心你在哪里点击，只关心你输入了什么。',
    playSimulation: '演示输入流',
    simulating: '演示中',
    sendEvent: '发送事件 (坐标/点击)',
    eventLoop: '事件循环',
    pixelRender: '像素图形渲染',
    guiModeDesc:
      '这种模式下，计算机实时追踪鼠标坐标和点击事件，并每秒刷新 60 次屏幕像素。它更直观，但需要消耗大量资源来处理图形渲染。',
    playInteraction: '演示交互'
  },
  terminalOSDemo: {
    clickLabel: '不断点击屏幕演示',
    finishedLabel: '演示结束，点击重置',
    clickHint: '点击屏幕继续',
    cmd: '命令',
    powershell: 'PowerShell',
    macTerminal: 'macOS 终端',
    linuxTerminal: 'Linux 终端',
    ready: '准备输入命令...',
    dirCmd:
      '输入 `dir` (Directory)。这是 Windows 系统用来**列出当前文件夹内容**的命令。',
    dirOutput:
      '系统返回了文件列表。`<DIR>` 表示这是一个文件夹，数字表示文件大小。',
    getDateCmd:
      '输入 `Get-Date`。PowerShell 使用动词-名词的命名方式，这里是**获取当前时间**。',
    getDateOutput: '系统返回了当前的日期和时间。',
    echoCmd:
      '输入 `echo`。这是让计算机**复读**你说的话，常用于测试或打印信息。',
    echoOutput: '计算机乖乖地输出了 "Hello World"。',
    lsCmd:
      '输入 `ls` (List)。这是 Mac/Linux 系统用来**列出文件**的命令。`-G` 参数让输出带颜色。',
    lsOutput: '系统列出了你的主目录下的文件夹。',
    swVersCmd:
      '输入 `sw_vers` (Software Version)。这是 macOS 特有的命令，查看**系统版本**。',
    swVersOutput: '系统返回了当前的 macOS 版本信息。',
    lsLaCmd:
      '输入 `ls` (List)。这是 Linux/Mac 系统用来**列出文件**的命令。`-la` 是参数，表示"列出所有文件(all)的详细信息(long)"。',
    lsLaOutput:
      '系统返回了文件列表。左边的 `drwxr-xr-x` 看起来像乱码，其实是**权限描述**（谁能读、谁能写）。',
    whoamiCmd:
      '输入 `whoami` (Who am I)。这是一个经典的哲学命令（笑），告诉计算机：**我是谁？**（当前登录用户）。',
    whoamiOutput: '系统回答：你是 "user"。'
  },
  architecture: {
    terminalLabel: '终端',
    conduitLabel: '传声筒 / 窗口',
    shellLabel: '壳',
    terminalRole: '终端',
    terminalDesc: '传声筒 / 窗口',
    shellRole: '壳',
    shellDesc: '翻译官 / 助手',
    kernelRole: '内核',
    kernelDesc: '大管家 / 芯片',
    userSpace: '用户空间',
    kernelSpace: '内核空间',
    clickStart: '不断点击屏幕演示',
    finishedReset: '演示结束，点击重置',
    startSimulation: '开始演示',
    nextStep: '下一步',
    done: '完成',
    reset: '重置',
    clickHint: '点击"开始演示"查看 \'ls\' 命令如何在系统中流转。',
    step1Title: '1. 用户输入',
    step1Desc: "你在终端窗口输入 'ls'。终端会捕获你的按键操作。",
    step1Tech: '终端在"加工模式 (Cooked Mode)"下缓冲输入，直到你按下回车键。',
    step2Title: '2. 传输',
    step2Desc: "终端将字符 'l'、's' 和 '回车' 发送给 Shell。",
    step2Tech: '数据通过标准输入 (stdin) 以字节流的形式传输。',
    step3Title: '3. Shell 解析',
    step3Desc: 'Shell（服务员）接收指令，并将其翻译成内核能听懂的请求。',
    step3Tech:
      "Shell 对输入进行分词，并在 $PATH 环境变量中查找 'ls' 可执行文件。",
    step4Title: '4. 系统调用',
    step4Desc: 'Shell 请求内核从磁盘读取文件列表。',
    step4Tech: 'Shell 调用 `execve()` 和 `getdents()` 等系统调用。',
    step5Title: '5. 内核执行',
    step5Desc: '内核（后厨）直接操作硬件（如磁盘）来执行实际任务。',
    step5Tech: '内核驱动程序访问文件系统 (APFS/ext4)。',
    step6Title: '6. 返回数据',
    step6Desc: '内核将原始文件列表数据返回给 Shell。',
    step6Tech: '系统调用返回文件描述符或结构体数据。',
    step7Title: '7. 格式化',
    step7Desc: 'Shell 将原始列表格式化为文本，并根据需要添加颜色。',
    step7Tech: 'Shell 格式化输出缓冲区，并添加 ANSI 颜色代码。',
    step8Title: '8. 显示输出',
    step8Desc: 'Shell 将最终文本发送回终端以供显示。',
    step8Tech: '数据通过标准输出 (stdout) 传输到 TTY。',
    step9Title: '9. 渲染',
    step9Desc: '终端在屏幕网格上绘制文本。',
    step9Tech: '终端模拟器将字形渲染到帧缓冲区中。'
  },
  terminalHandsOn: {
    taskTitle: '实操任务',
    aiTitle: '不知道怎么写？问问 AI',
    copyCmd: '复制命令',
    expectedGoal: '预期目标：',
    taskComplete: '太棒了！任务完成！',
    nextLevel: '下一关',
    restart: '重新开始',
    enterHint: '按回车执行',
    hintTryAi: '提示：试试点击左侧的"问问 AI"？',
    nextLevelIntro: '--- 进入下一关',
    t1Title: '第一步：看看这里有什么',
    t1Desc: '在对文件进行操作之前，我们首先需要知道当前目录下有哪些文件。',
    t1Goal: '列出当前目录下的所有文件。',
    t1Query: '我想查看当前目录下的文件，应该用什么命令？',
    t1AiMac: '在 macOS 和 Linux 中，查看文件列表使用 `ls` 命令 (List)。',
    t1AiLinux: '在 macOS 和 Linux 中，查看文件列表使用 `ls` 命令 (List)。',
    t1AiPs: '在 PowerShell 中，你可以使用 `ls` 或 `dir` 命令。',
    t1AiCmd: '在 Windows CMD 中，查看文件列表使用 `dir` 命令 (Directory)。',
    t1AiCommon: '通常使用 ls 或 dir。',
    t2Title: '第二步：创建一个新家',
    t2Desc: '文件太多会很乱，我们创建一个专门的文件夹来存放今天的练习文件。',
    t2Goal: '创建一个名为 "demo" 的文件夹。',
    t2Query: '怎么创建一个新的文件夹？名字叫 demo。',
    t2Ai: '创建文件夹（目录）的命令是 `mkdir` (Make Directory)。你可以输入 `mkdir demo`。',
    t3Title: '第三步：进入新家',
    t3Desc: '文件夹建好了，但我们现在还在外面。我们需要"走"进去。',
    t3Goal: '进入 "demo" 文件夹。',
    t3Query: '怎么进入刚才建好的 demo 文件夹？',
    t3Ai: '切换目录使用 `cd` 命令 (Change Directory)。输入 `cd demo` 即可。',
    t4Title: '第四步：新建一个文件',
    t4Desc: '现在我们在 demo 文件夹里了。来创建一个简单的文本文件吧。',
    t4Goal: '创建一个名为 "hello.txt" 的文件。',
    t4Query: '我想新建一个空文件叫 hello.txt，怎么做？',
    t4AiMac: '在 Mac/Linux 上，使用 `touch hello.txt` 可以快速创建一个空文件。',
    t4AiLinux:
      '在 Mac/Linux 上，使用 `touch hello.txt` 可以快速创建一个空文件。',
    t4AiPs:
      '在 PowerShell 中，可以使用 `ni hello.txt` 或 `echo "" > hello.txt`。',
    t4AiCmd:
      '在 CMD 中，可以使用 `type nul > hello.txt` 或 `echo. > hello.txt`。',
    t5Title: '第五步：安装程序 (系统软件 & Python库)',
    t5Desc:
      '终端不仅能管理文件，还能安装软件。我们来尝试两种常见的安装场景：安装系统工具（如 wget/git）和安装 Python 库（如 requests）。',
    t5Goal: '任选其一：安装系统工具或 Python 库。',
    t5Query: '怎么用命令行安装软件？我想装 git 或者 python 的 requests 库。',
    t5AiMac: 'macOS 推荐使用 Homebrew 安装系统软件，使用 pip 安装 Python 库。',
    t5AiLinux:
      'Linux (Ubuntu/Debian) 使用 apt 安装系统软件，使用 pip 安装 Python 库。',
    t5AiPs:
      'Windows PowerShell 推荐使用 winget 安装系统软件，使用 pip 安装 Python 库。',
    t5AiCmd:
      'Windows CMD 推荐使用 winget 安装系统软件，使用 pip 安装 Python 库。',
    t5AiCommon: '不同系统有不同的包管理器。',
    t5InstallWget: '安装 wget (系统)',
    t5InstallRequests: '安装 requests (Python)',
    t5InstallGit: '安装 git (系统)',
    t6Title: '第六步：打扫战场',
    t6Desc: '练习结束了，我们把刚才创建的文件删除掉，保持环境整洁。',
    t6Goal: '删除 "hello.txt" 文件。',
    t6Query: '我不想要 hello.txt 了，怎么删除它？',
    t6AiMac:
      '删除文件使用 `rm` 命令 (Remove)。小心，这个操作通常不可撤销！输入 `rm hello.txt`。',
    t6AiLinux:
      '删除文件使用 `rm` 命令 (Remove)。小心，这个操作通常不可撤销！输入 `rm hello.txt`。',
    t6AiPs: '在 PowerShell 中使用 `rm` 或 `del`。输入 `rm hello.txt`。',
    t6AiCmd: '在 CMD 中使用 `del` 命令 (Delete)。输入 `del hello.txt`。'
  }
}
