export default {
  common: {
    reset: 'Reset',
    empty: '(empty)'
  },
  cheatsheet: {
    desc: 'Save this table and check it whenever a Git command slips your mind:',
    yAxis: 'Usage frequency',
    xAxis: 'Command',
    scrollHint: '(scroll horizontally)',
    levelLabels: {
      5: 'Very frequent',
      4: 'Frequent',
      3: 'Medium',
      2: 'Low',
      1: 'Rare',
      0: 'One-time'
    },
    rows: [
      {
        cmd: 'git init',
        desc: 'Initialize a Git repository in the current directory',
        level: 0,
        freqLabel: 'Once at project start'
      },
      {
        cmd: 'git status',
        desc: 'Check working tree and staging area status',
        level: 5,
        freqLabel: 'Very frequent'
      },
      {
        cmd: 'git add <file>',
        desc: 'Put a specific file into the staging area',
        level: 5,
        freqLabel: 'Before each commit'
      },
      {
        cmd: 'git add .',
        desc: 'Stage all changed files',
        level: 5,
        freqLabel: ''
      },
      {
        cmd: 'git commit -m "..."',
        desc: 'Commit staged content with a message',
        level: 5,
        freqLabel: ''
      },
      {
        cmd: 'git push',
        desc: 'Push commits to the remote repository',
        level: 5,
        freqLabel: ''
      },
      {
        cmd: 'git pull',
        desc: 'Pull the latest remote changes',
        level: 5,
        freqLabel: ''
      },
      {
        cmd: 'git log --oneline',
        desc: 'View a compact commit history',
        level: 4,
        freqLabel: ''
      },
      {
        cmd: 'git checkout -b <branch>',
        desc: 'Create and switch to a new branch',
        level: 4,
        freqLabel: ''
      },
      {
        cmd: 'git checkout <branch>',
        desc: 'Switch to an existing branch',
        level: 4,
        freqLabel: ''
      },
      {
        cmd: 'git clone <url>',
        desc: 'Clone a remote repository locally',
        level: 4,
        freqLabel: ''
      },
      {
        cmd: 'git branch',
        desc: 'List local branches',
        level: 3,
        freqLabel: ''
      },
      {
        cmd: 'git merge <branch>',
        desc: 'Merge a branch into the current branch',
        level: 3,
        freqLabel: ''
      },
      {
        cmd: 'git stash',
        desc: 'Temporarily save uncommitted changes',
        level: 3,
        freqLabel: ''
      },
      {
        cmd: 'git stash pop',
        desc: 'Restore the previous stash',
        level: 3,
        freqLabel: ''
      },
      {
        cmd: 'git reset HEAD~1',
        desc: 'Undo the latest commit while keeping changes',
        level: 3,
        freqLabel: ''
      },
      {
        cmd: 'git diff',
        desc: 'Inspect detailed file differences',
        level: 3,
        freqLabel: ''
      },
      {
        cmd: 'git branch -d <branch>',
        desc: 'Delete a merged branch',
        level: 2,
        freqLabel: ''
      },
      {
        cmd: 'git remote add origin <url>',
        desc: 'Connect a remote repository once',
        level: 0,
        freqLabel: 'At project setup'
      }
    ]
  },
  sync: {
    initialLine: '# Local repository has 2 commits and no remote yet',
    initialHint: 'Click the command buttons below in order',
    localRepo: 'Local repository',
    remoteRepo: 'Remote repository',
    unpushed: '{count} unpushed',
    synced: 'Synced',
    online: 'Online',
    initialLocalLog: [
      { hash: '9f3e1b2', msg: 'init: initialize project' },
      { hash: 'c4d8a31', msg: 'feat: homepage layout' }
    ],
    ops: {
      remote: {
        output: [
          {
            kind: 'dim',
            text: '# Link the local repository to the remote once'
          },
          {
            kind: 'grn',
            text: 'origin  https://github.com/you/project.git (fetch)'
          },
          {
            kind: 'grn',
            text: 'origin  https://github.com/you/project.git (push)'
          }
        ],
        hint: '"origin" is the remote alias, a short contact name for the GitHub URL.'
      },
      push1: {
        output: [
          { kind: 'dim', text: 'Enumerating objects: 5, done.' },
          { kind: 'grn', text: 'To https://github.com/you/project.git' },
          { kind: 'grn', text: ' * [new branch]  main -> main' }
        ],
        hint: 'The first push uses -u. After that, plain git push is enough. Your local commits are now on GitHub.'
      },
      commit: {
        cmd: 'git commit -m "fix: fix login bug"',
        output: [
          { kind: 'dim', text: '[main b5e6f7a] fix: fix login bug' },
          {
            kind: 'yel',
            text: "Your branch is 1 commit ahead of 'origin/main'."
          }
        ],
        hint: 'A new local commit exists, but it has not been pushed. The remote is still behind.',
        commitMsg: 'fix: fix login bug'
      },
      push2: {
        output: [
          { kind: 'grn', text: 'To https://github.com/you/project.git' },
          { kind: 'grn', text: '   c4d8a31..b5e6f7a  main -> main' }
        ],
        hint: 'The second push no longer needs -u. Local and remote are synced again.'
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
        hint: 'pull = fetch + merge. A teammate’s pushed commit is now synced to your local repository.',
        commitMsg: 'teammate: update README'
      }
    }
  },
  branch: {
    initialLine:
      '# main already has 2 commits. Follow the steps to see branching',
    initialHint:
      'Click the command buttons in order and watch the branch graph change',
    legend: {
      main: 'main branch',
      feature: 'feature-login branch',
      merge: 'Merge commit',
      head: 'your current position'
    },
    mainInitial: [
      { hash: '9f3e1b2', shortMsg: 'init', merge: false },
      { hash: 'c4d8a31', shortMsg: 'home', merge: false }
    ],
    ops: {
      create: {
        output: [
          { kind: 'grn', text: "Switched to a new branch 'feature-login'" }
        ],
        hint: 'The new branch points to the same commit as main, but it now has its own timeline. You are on feature-login, so main will not move.'
      },
      c1: {
        cmd: 'git commit -m "feat: login form"',
        output: [
          { kind: 'dim', text: '[feature-login e1a2b3c] feat: login form' },
          { kind: 'dim', text: ' 1 file changed, 38 insertions(+)' }
        ],
        hint: 'The feature-login branch extends by one commit while main stays still. Two timelines now exist independently.',
        shortMsg: 'login form'
      },
      c2: {
        cmd: 'git commit -m "feat: login API"',
        output: [
          { kind: 'dim', text: '[feature-login f4d5e6f] feat: login API' },
          { kind: 'dim', text: ' 1 file changed, 22 insertions(+)' }
        ],
        hint: 'feature-login gained another commit. It is now two commits ahead of main and ready to merge back.',
        shortMsg: 'login API'
      },
      back: {
        output: [{ kind: 'grn', text: "Switched to branch 'main'" }],
        hint: 'Back on main. The HEAD label jumps to the latest main commit. The feature branch work is isolated from this timeline.'
      },
      merge: {
        output: [
          { kind: 'dim', text: "Merge made by the 'ort' strategy." },
          { kind: 'grn', text: ' login.js | 60 ++++++ 1 file changed' }
        ],
        hint: 'Merge complete. The feature branch curve joins main and the login feature is now part of the main line.'
      }
    }
  },
  commitFlow: {
    initialLine:
      '# You changed 3 files. This demo shows the add -> commit flow',
    initialHint:
      'Click the command buttons in order and watch files move across the three areas.',
    areas: {
      work: {
        title: 'Working tree',
        desc: 'Working Directory',
        detail: 'files you are editing',
        label: 'Changes not staged for commit:',
        empty: '(no unstaged changes)',
        state: 'unstaged'
      },
      stage: {
        title: 'Staging area',
        desc: 'Staging Area',
        detail: 'files prepared for this commit',
        label: 'Changes to be committed:',
        empty: '(empty)',
        state: 'staged'
      },
      repo: {
        title: 'Repository',
        desc: 'Repository (.git)',
        detail: 'versions saved permanently',
        label: 'Committed history (git log):',
        empty: '(no commits)'
      }
    },
    initialCommit: { hash: '9f3e1b2', msg: 'init: initialize project' },
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
        hint: 'Red means changed but not staged. All 3 files are still in the working tree, while the staging area is empty.'
      },
      add: {
        output: [
          {
            kind: 'dim',
            text: '# git add only stages the files you name; debug.log is skipped'
          },
          { kind: 'dim', text: '' },
          { kind: 'dim', text: 'On branch main' },
          { kind: 'dim', text: '' },
          { kind: 'dim', text: 'Changes to be committed:' },
          { kind: 'grn', text: '  modified:   login.js' },
          { kind: 'grn', text: '  modified:   style.css' },
          { kind: 'dim', text: '' },
          { kind: 'red', text: 'Untracked files:' },
          {
            kind: 'red',
            text: '  debug.log   <- not added, so it will not be committed'
          }
        ],
        hint: 'Green means staged. login.js and style.css moved into the staging area; debug.log remains unstaged.'
      },
      commit: {
        cmd: 'git commit -m "feat: add login feature"',
        output: [
          { kind: 'dim', text: '[main a1b2c3d] feat: add login feature' },
          { kind: 'dim', text: ' 2 files changed, 47 insertions(+)' },
          { kind: 'dim', text: ' create mode 100644 login.js' },
          { kind: 'dim', text: ' create mode 100644 style.css' }
        ],
        hint: 'Commit succeeded. The staged content is saved into the repository as a new commit. debug.log remains in the working tree.',
        commitMsg: 'feat: add login feature'
      },
      log: {
        output: [
          {
            kind: 'yel',
            text: 'a1b2c3d (HEAD -> main) feat: add login feature'
          },
          { kind: 'yel', text: '9f3e1b2 init: initialize project' }
        ],
        hint: 'Each line is one commit, newest first. The repository area shows the history, while debug.log remains uncommitted.'
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
        hint: 'After the commit, login.js and style.css are in the repository. Only debug.log remains changed in the working tree.'
      }
    }
  }
}
