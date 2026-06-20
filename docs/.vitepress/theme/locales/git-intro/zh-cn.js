export default {
  common: {
    reset: '重置',
    empty: '（空）'
  },
  cheatsheet: {
    desc: '把这张表存起来，遇到忘了的命令随时查：',
    yAxis: '使用频率',
    xAxis: '命令',
    scrollHint: '（可左右滑动查看）',
    levelLabels: {
      5: '极高频',
      4: '高频',
      3: '中频',
      2: '低频',
      1: '很少',
      0: '一次性'
    },
    rows: [
      {
        cmd: 'git init',
        desc: '在当前目录初始化 Git 仓库',
        level: 0,
        freqLabel: '项目开始时一次'
      },
      {
        cmd: 'git status',
        desc: '查看工作区和暂存区的状态',
        level: 5,
        freqLabel: '极高频'
      },
      {
        cmd: 'git add <文件>',
        desc: '把指定文件放入暂存区',
        level: 5,
        freqLabel: '每次提交前'
      },
      {
        cmd: 'git add .',
        desc: '把所有修改放入暂存区',
        level: 5,
        freqLabel: ''
      },
      {
        cmd: 'git commit -m "..."',
        desc: '提交暂存区内容，附上说明',
        level: 5,
        freqLabel: ''
      },
      { cmd: 'git push', desc: '推送到远程仓库', level: 5, freqLabel: '' },
      { cmd: 'git pull', desc: '拉取远程最新内容', level: 5, freqLabel: '' },
      {
        cmd: 'git log --oneline',
        desc: '查看简洁的提交历史',
        level: 4,
        freqLabel: ''
      },
      {
        cmd: 'git checkout -b <分支名>',
        desc: '创建并切换到新分支',
        level: 4,
        freqLabel: ''
      },
      {
        cmd: 'git checkout <分支名>',
        desc: '切换到已有分支',
        level: 4,
        freqLabel: ''
      },
      {
        cmd: 'git clone <url>',
        desc: '克隆远程仓库到本地',
        level: 4,
        freqLabel: ''
      },
      { cmd: 'git branch', desc: '查看所有本地分支', level: 3, freqLabel: '' },
      {
        cmd: 'git merge <分支名>',
        desc: '将指定分支合并到当前分支',
        level: 3,
        freqLabel: ''
      },
      {
        cmd: 'git stash',
        desc: '临时保存未提交的改动（切换任务时用）',
        level: 3,
        freqLabel: ''
      },
      {
        cmd: 'git stash pop',
        desc: '恢复之前 stash 的改动',
        level: 3,
        freqLabel: ''
      },
      {
        cmd: 'git reset HEAD~1',
        desc: '撤销最近一次提交（保留改动）',
        level: 3,
        freqLabel: ''
      },
      {
        cmd: 'git diff',
        desc: '查看工作区和暂存区的具体差异',
        level: 3,
        freqLabel: ''
      },
      {
        cmd: 'git branch -d <分支名>',
        desc: '删除已合并的分支',
        level: 2,
        freqLabel: ''
      },
      {
        cmd: 'git remote add origin <url>',
        desc: '关联远程仓库（只做一次）',
        level: 0,
        freqLabel: '项目初始时'
      }
    ]
  },
  sync: {
    initialLine: '# 本地 2 次提交，还没关联远程仓库',
    initialHint: '点击下方命令按钮，按顺序执行',
    localRepo: '本地仓库',
    remoteRepo: '远程仓库',
    unpushed: '{count} 个未推送',
    synced: '已同步',
    online: '在线',
    initialLocalLog: [
      { hash: '9f3e1b2', msg: 'init: 初始化项目' },
      { hash: 'c4d8a31', msg: 'feat: 首页布局' }
    ],
    ops: {
      remote: {
        output: [
          { kind: 'dim', text: '# 建立本地与远程的关联（只做一次）' },
          {
            kind: 'grn',
            text: 'origin  https://github.com/you/project.git (fetch)'
          },
          {
            kind: 'grn',
            text: 'origin  https://github.com/you/project.git (push)'
          }
        ],
        hint: '"origin" 是远程仓库的别名，相当于给 GitHub 地址起个简短的联系人名字。'
      },
      push1: {
        output: [
          { kind: 'dim', text: 'Enumerating objects: 5, done.' },
          { kind: 'grn', text: 'To https://github.com/you/project.git' },
          { kind: 'grn', text: ' * [new branch]  main -> main' }
        ],
        hint: '第一次 push 加 -u，以后直接 git push 就行。本地提交现在上传到 GitHub 了。'
      },
      commit: {
        cmd: 'git commit -m "fix: 修复登录 Bug"',
        output: [
          { kind: 'dim', text: '[main b5e6f7a] fix: 修复登录 Bug' },
          {
            kind: 'yel',
            text: "Your branch is 1 commit ahead of 'origin/main'."
          }
        ],
        hint: '本地新增一个 commit，但还没 push。远程还是旧的，本地比它“快了一步”。',
        commitMsg: 'fix: 修复登录 Bug'
      },
      push2: {
        output: [
          { kind: 'grn', text: 'To https://github.com/you/project.git' },
          { kind: 'grn', text: '   c4d8a31..b5e6f7a  main -> main' }
        ],
        hint: '第二次 push 不需要 -u，直接推。远程和本地又同步了。'
      },
      pull: {
        output: [
          { kind: 'grn', text: 'From https://github.com/you/project.git' },
          { kind: 'grn', text: '   b5e6f7a..d8c9e0f  main -> origin/main' },
          {
            kind: 'dim',
            text: 'Fast-forward: readme.md | 5 +++++ 1 file changed'
          }
        ],
        hint: 'pull = fetch + merge。队友推上去的提交，现在也同步到你本地了。',
        commitMsg: '队友: 更新 README'
      }
    }
  },
  branch: {
    initialLine: '# main 分支上已有 2 次提交，按步骤演示分支操作',
    initialHint: '依次点击上方命令按钮，观察下方分支图的变化',
    legend: {
      main: 'main 主分支',
      feature: 'feature-login 功能分支',
      merge: 'Merge 合并节点',
      head: '你当前所在位置'
    },
    mainInitial: [
      { hash: '9f3e1b2', shortMsg: 'init', merge: false },
      { hash: 'c4d8a31', shortMsg: '首页', merge: false }
    ],
    ops: {
      create: {
        output: [
          { kind: 'grn', text: "Switched to a new branch 'feature-login'" }
        ],
        hint: '新分支创建了！它和 main 指向同一个提交，但是独立的“时间线”。现在你在 feature-login 上，main 的时间线不会动。'
      },
      c1: {
        cmd: 'git commit -m "feat: 登录表单"',
        output: [
          { kind: 'dim', text: '[feature-login e1a2b3c] feat: 登录表单' },
          { kind: 'dim', text: ' 1 file changed, 38 insertions(+)' }
        ],
        hint: '看图！feature-login 向右延伸了一个新节点，而 main 纹丝不动。这就是“平行宇宙”：两条线同时存在，互不影响。',
        shortMsg: '登录表单'
      },
      c2: {
        cmd: 'git commit -m "feat: 登录接口"',
        output: [
          { kind: 'dim', text: '[feature-login f4d5e6f] feat: 登录接口' },
          { kind: 'dim', text: ' 1 file changed, 22 insertions(+)' }
        ],
        hint: 'feature-login 又多了一个提交。此时它比 main 多了 2 个节点。功能开发完毕，准备合并回主线。',
        shortMsg: '登录接口'
      },
      back: {
        output: [{ kind: 'grn', text: "Switched to branch 'main'" }],
        hint: '切回 main。HEAD 标签跳回到 main 最后的节点。feature-login 里写的代码，现在工作区完全看不到：两条线彻底隔离。'
      },
      merge: {
        output: [
          { kind: 'dim', text: "Merge made by the 'ort' strategy." },
          { kind: 'grn', text: ' login.js | 60 ++++++ 1 file changed' }
        ],
        hint: '合并完成！看图：feature-login 的弧线收束回了 main，形成一个绿色合并节点。两条时间线重新汇合，登录功能进入主线。'
      }
    }
  },
  commitFlow: {
    initialLine: '# 你刚改了 3 个文件，现在演示 add -> commit 流程',
    initialHint:
      '点击下方命令按钮，按顺序执行。观察右侧三区里文件如何随命令移动。',
    areas: {
      work: {
        title: '工作区',
        desc: 'Working Directory',
        detail: '你正在改的文件',
        label: 'Changes not staged for commit:',
        empty: '（无未暂存修改）',
        state: '未暂存'
      },
      stage: {
        title: '暂存区',
        desc: 'Staging Area',
        detail: '准备这次提交的文件',
        label: 'Changes to be committed:',
        empty: '（空）',
        state: '已暂存'
      },
      repo: {
        title: '仓库',
        desc: 'Repository (.git)',
        detail: '永久保存的版本',
        label: '已提交记录 (git log):',
        empty: '（无提交）'
      }
    },
    initialCommit: { hash: '9f3e1b2', msg: 'init: 项目初始化' },
    ops: {
      status: {
        output: [
          { kind: 'dim', text: 'On branch main' },
          { kind: 'dim', text: '' },
          { kind: 'dim', text: 'Changes not staged for commit:' },
          { kind: 'red', text: '  modified:   login.js' },
          { kind: 'red', text: '  modified:   style.css' },
          { kind: 'red', text: '  modified:   debug.log' },
          { kind: 'dim', text: '' },
          { kind: 'dim', text: 'no changes added to commit (use "git add")' }
        ],
        hint: '红色 = 改了但还没暂存。三区里可以看到：3 个文件都在“工作区”，暂存区是空的。先用 git status 看清楚状态，再决定下一步。'
      },
      add: {
        output: [
          { kind: 'dim', text: '# git add 只加你指定的文件，debug.log 跳过' },
          { kind: 'dim', text: '' },
          { kind: 'dim', text: 'On branch main' },
          { kind: 'dim', text: '' },
          { kind: 'dim', text: 'Changes to be committed:' },
          { kind: 'grn', text: '  modified:   login.js' },
          { kind: 'grn', text: '  modified:   style.css' },
          { kind: 'dim', text: '' },
          { kind: 'red', text: 'Untracked files:' },
          { kind: 'red', text: '  debug.log   <- 没 add，不会提交' }
        ],
        hint: '绿色 = 进入暂存区。观察：login.js 和 style.css 从工作区“搬进”了暂存区；debug.log 仍留在工作区（未暂存），不会参与这次提交。'
      },
      commit: {
        cmd: 'git commit -m "feat: 添加登录功能"',
        output: [
          { kind: 'dim', text: '[main a1b2c3d] feat: 添加登录功能' },
          { kind: 'dim', text: ' 2 files changed, 47 insertions(+)' },
          { kind: 'dim', text: ' create mode 100644 login.js' },
          { kind: 'dim', text: ' create mode 100644 style.css' }
        ],
        hint: 'commit 成功！暂存区里的内容被“封存”进仓库，形成新的一条提交记录。暂存区变空；debug.log 仍在工作区，不受影响。',
        commitMsg: 'feat: 添加登录功能'
      },
      log: {
        output: [
          { kind: 'yel', text: 'a1b2c3d (HEAD -> main) feat: 添加登录功能' },
          { kind: 'yel', text: '9f3e1b2 init: 项目初始化' }
        ],
        hint: '每行一个 commit，最新的在最上面。仓库区里可以看到完整的历史时间轴；工作区里只剩 debug.log（未提交的临时文件）。'
      },
      status2: {
        output: [
          { kind: 'dim', text: 'On branch main' },
          { kind: 'dim', text: '' },
          { kind: 'dim', text: 'Changes not staged for commit:' },
          { kind: 'red', text: '  modified:   debug.log' },
          { kind: 'dim', text: '' },
          { kind: 'dim', text: 'no changes added to commit (use "git add")' }
        ],
        hint: '提交后：login.js 和 style.css 已进仓库，工作区里只剩 debug.log 的修改。红色 = 改了但还没暂存，下次提交前可再 git add。'
      }
    }
  }
}
