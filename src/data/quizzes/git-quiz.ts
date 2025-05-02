const gitQuiz = {
  category: 'Git',
  questions: [
    {
      question: 'In Git, how can you stage a file that ends with a *.txt extension?',
      answer: 'git add *.txt',
      distractors: ['git add *.text', 'git add -a .txt', 'git add - *.txt'],
      explanation: 'git add is a command used to add a file that is in the working directory to the staging area. Use *.txt to add specific pattern.',
      link: 'https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/'
    },
    {
      question: 'In Git, how can you save uncommitted changes on your local machine so you can work on it later?',
      answer: 'git stash',
      distractors: ['git copy into notepad.exe', 'git save code', 'git clone --for later'],
      explanation: `Stashes are temporary storage spaces where you can store your code. When you're done, you can put your code back from the stash using git stash pop. You won’t have to worry about losing any uncommitted changes!`,
      link: 'https://www.freecodecamp.org/news/how-to-use-git-stash-as-temporary-storage-84a0a1e37a43/'
    },
    {
      question: 'In Git, how can you check your configuration?',
      answer: 'git config -l',
      distractors: ['git config -check', 'git checkconfig -l', 'git checkconfig -m'],
      explanation: 'The command git config -l returns a list of information about your git configuration including user name and email',
      link: 'https://www.freecodecamp.org/news/git-cheat-sheet/'
    },
    {
      question: 'In Git, how do you integrate changes from one branch to another?',
      answer: 'git merge',
      distractors: ['git copy into', 'git merge --docs', 'git clone --docs'],
      explanation: 'In the command line, you can use git merge to integrate changes from one branch to another',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'In Git, what is a modified state?',
      answer: 'changes have been made to the files but those changes are not saved yet',
      distractors: [
        'a new local repository has been created',
        'a new remote repository has been created',
        'the files have been saved and need to be pushed to the remote repository'
      ],
      explanation: 'The modified state is when changes have been made to the files but those changes are not saved yet',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'In Git, how can you list all the commits in a local repository in reverse chronological order?',
      answer: 'git log',
      distractors: ['git show', 'git ls', 'git commits'],
      explanation: 'You can use git log to see the commits in a repository in reverse chronological order.',
      link: 'https://www.freecodecamp.org/news/what-is-git-learn-git-version-control/'
    },
    {
      question: 'In Git, how can you list all the local branches in your repository?',
      answer: 'git branch',
      distractors: ['git list', 'git ls', 'git branches'],
      explanation: 'You can use git branch to list all the local branches in the repository. ',
      link: 'https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/'
    },
    {
      question: 'What is the committed state in Git?',
      answer: 'all of the files have been saved to the local repo and are ready to be pushed to the remote repo',
      distractors: [
        'the files need to be saved to the local repo',
        'the files have been successfully pushed to the remote repo',
        'the files have been deleted from the local repo'
      ],
      explanation: 'The committed state is when all of the files have been saved to the local repo and are ready to be pushed to the remote repo',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'In Git, how do you push a local branch to a remote repository?',
      answer: 'git push -u <remote> <branch-name>',
      distractors: [
        'git push -u <branch-name> <remote>',
        'git copy url <branch-name> <remote>',
        'git pull url <branch-name> <remote>'
      ],
      explanation: 'In the command line, you can use git push -u <remote> <branch-name> to push a branch from a local Git repository to a remote repository.',

      link: 'https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/'
    },
    {
      question: 'In Git, how do you set your username for commits you make on all cloned repositories on your computer?',
      answer: 'git config --global user.name "YOUR_USERNAME"',
      distractors: [
        'git config --global password "YOUR_USERNAME"',
        'git config &user "YOUR_USERNAME"',
        'git create --user "YOUR_USERNAME"'
      ],
      explanation: 'In the command line, you can use git config --global user.name "YOUR_USERNAME"',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'In Git, how do you initialize a new Git repository?',
      answer: 'git init',
      distractors: ['git create new repo', 'git config init repo', 'git new repo'],
      explanation: 'In the command line, you can use git init to initialize a new Git repository',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'In Git, how do you add a specific file to be committed?',
      answer: 'git add filename',
      distractors: ['git add < filename', 'git add *filename', 'git add %filename'],
      explanation: 'In the command line, you can use git add filename to add a specific file.',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'What is Git?',
      answer: 'A popular type of version control system ',
      distractors: ['A sorting algorithm', 'A data type', 'A non-relational database'],
      explanation: 'Git is an open source version control system that tracks changes to your files. ',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'In Git, how do you create a connection between a local repository and a remote one?',
      answer: 'git remote add origin git-url',
      distractors: ['git add remote and local', 'git remote local', 'git local remote'],
      explanation: 'In the command line, you can use git remote add origin git-url to connect the local repository to the remote one.',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'In Git, how can you create a new branch and switch to it?',
      answer: 'git checkout -b branch-name',
      distractors: ['git switch branch-name', 'git switch to branch-name', 'git change branch-name'],
      explanation: 'In the command line, you can use git checkout -b branch-name to switch to a different branch',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'In Git, how do you commit files to the history of changes?',
      answer: 'git commit -m "commit message"',
      distractors: ['git commit --add message', 'git commit < add message', 'git add message'],
      explanation: 'In the command line, you can use git commit -m "commit message" to commit your changes.',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'In Git, how do you push changes from the main branch of a local Git repository to a remote repository (origin)?',
      answer: 'git push -u origin main',
      distractors: ['git push changes', 'git push all changes', 'git push --to main branch'],
      explanation: 'In the command line, you can use git push -u origin main to push your changes from the main branch of a local Git repository to a remote repository.',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'In Git, how can you delete a branch from a repository?',
      answer: 'git branch -d <branch-name>',
      distractors: ['git branch <branch-name>', 'git delete <branch-name>', 'git del <branch-name>'],
      explanation: 'You can use git branch -d <branch-name> to delete a branch from the repository.',
      link: 'https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/'
    },
    {
      question: 'In Git, how do you add all of the files in the local Git repository?',
      answer: 'git add .',
      distractors: ['git add all files', 'git add --all files', 'git add <all files'],
      explanation: 'In the command line, you can use git add . to add all of the files in your local repository.',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'In Git, what is a staged state?',
      answer: 'the files are ready to be committed',
      distractors: [
        'the files are ready to be deleted',
        'a new local repository has been created',
        'the files need to be saved to the remote repository'
      ],
      explanation: 'The staged state is when the files are ready to be committed',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'What is GitHub?',
      answer: 'A hosting platform for Git repositories ',
      distractors: ['An online IDE', 'A popular database', 'A subscription based platform to sell coding classes'],
      explanation: 'GitHub is a popular hosting platform for developers to store their Git repositories and collaborate with other developers all around the world.',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'In Git, how do you check for the version of Git installed on your machine?',
      answer: 'git --version',
      distractors: ['git &version', 'git <version>', 'git /version'],
      explanation: 'In the command line, you can use git --version to check which version of Git is installed on your local machine',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'In Git, how can you pull changes made to the remote repository?',
      answer: 'git pull <remote>',
      distractors: ['git <remote> pull', 'git push <remote>', 'git pul <remote>'],
      explanation: 'You can pull changes from the remote repository with git pull <remote>.',
      link: 'https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/'
    },
    {
      question: 'In Git, how do you clone a remote repository?',
      answer: 'git clone',
      distractors: ['git copy', 'git copy url', 'git clone --copy'],
      explanation: 'In the command line, you can use git clone followed by the remote url address for the repository you want to clone into your local machine',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'In Git, how can you see the current status of the current branch?',
      answer: 'git status',
      distractors: ['git info', 'git show status', 'git show'],
      explanation: 'You can see the status of the current branch with git status in Git.',
      link: 'https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/'
    },
    {
      question: 'In Git, how can you add color to git command outputs?',
      answer: 'git config --global color.ui true',
      distractors: ['git config --global color.ui false', 'git set --global color.ui true', 'git config --global true'],
      explanation: 'You can use git config --global color.ui true to add color to Git output.',
      link: 'https://www.freecodecamp.org/news/best-git-tutorial/'
    },
    {
      question: 'In Git, how do you switch back to the main branch?',
      answer: 'git checkout main',
      distractors: ['git switch main', 'git change main', 'git go to main'],
      explanation: 'In the command line, you can use git checkout main to switch over to the main branch',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'What is the -m flag in Git?',
      answer: 'Shorthand for message',
      distractors: ['Shorthand for main', 'Shorthand for mistake', 'Shorthand for merge'],
      explanation: 'The -m flag in Git is shorthand for message.',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'In Git, how do you set your email associated with your commits?',
      answer: 'git config --global user.email "YOUR_EMAIL"',
      distractors: [
        'git config --global set email address "YOUR_EMAIL"',
        'git config --email address "YOUR_EMAIL"',
        'git create user email "YOUR_EMAIL"'
      ],
      explanation: 'In the command line, you can use git config --global user.email "YOUR_EMAIL" to set your email address in Git.',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'In Git, how can you change the text editor used to write commit messages?',
      answer: 'git config --global core.editor <editor>',
      distractors: ['git config email <editor>', 'git set editor <editor>', 'git config <editor>'],
      explanation: 'You can use git config --global core.editor <editor> to set the text editor that will be used to write commit messages and to work with Git in general.',
      link: 'https://www.freecodecamp.org/news/best-git-tutorial/'
    },
    {
      question: 'In Git, how can you check for the status of your working directory?',
      answer: 'git status',
      distractors: ['git check status', 'git share status', 'git show status'],
      explanation: 'In the command line, you can use git status to check the current status of your working directory',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'In Git, how do you create a new branch and switch to it?',
      answer: 'git checkout -b new-branch-name',
      distractors: [
        'git create -b new-branch-name',
        'git change -b new-branch-name',
        'git create --change -b new-branch-name'
      ],
      explanation: 'In the command line, you can use git checkout -b new-branch-name to create a new branch and switch to it',
      link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
    },
    {
      question: 'In Git, how do you rename the current branch?',
      answer: 'git branch -m new-name',
      distractors: ['git rename -b new-name', 'git change -b new-branch-name', 'git branch --rename new-name'],
      explanation: 'In the command line, you can use git branch -m new-name to rename the current branch.',
      link: 'https://www.freecodecamp.org/news/renaming-a-git-branch-how-to-rename-the-current-branch-in-git/'
    },
    {
      question: 'In Git, which command is used to list differences between your current working directory and your staging area?',
      answer: 'git diff',
      distractors: ['git different', 'git status', 'git update'],
      explanation: 'In the command line, you can use git diff to show all the differences between your current working directory and your staging area.',
      link: 'https://www.freecodecamp.org/news/git-diff-command/'
    },
    {
      question: 'In Git, what do you do right after resolving a merge conflict in a file?',
      answer: 'git add file_that_had_conflict',
      distractors: ['git commit', 'git status', 'git update'],
      explanation: 'In the command line, after resolving the conflict you will need to stage the changes.',
      link: 'https://www.freecodecamp.org/news/resolve-merge-conflicts-in-git-a-practical-guide/'
    },
    {
      question: 'In Git, what command is used to revert changes?',
      answer: 'git revert',
      distractors: ['git undo', 'git stash', 'git update'],
      explanation: 'In the command line, to undo unwanted changes you can run git revert with the hash of the commit you want to revert back to.',
      link: 'https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/'
    },
    {
      question: 'In Git, which command is used to reset a branch to a previous commit?',
      answer: 'git reset',
      distractors: ['git revert', 'git rebase', 'git reflog'],
      explanation: 'The git reset command is used to reset your current HEAD to a specified state.',
      link: 'https://www.freecodecamp.org/news/the-ultimate-guide-to-git-reset-and-git-revert/'
    },
    {
      question: 'In Git, how do you see your commit history including changes in files?',
      answer: 'git log -p',
      distractors: ['git log --show', 'git log -c', 'git log'],
      explanation: `The git log -p command shows the commit's history including all files and their changes.`,
      link: 'https://www.freecodecamp.org/news/git-cheat-sheet/'
    },
    {
      question: 'In Git, which command is used to list all of the remote branches that Git is tracking?',
      answer: 'git branch -r',
      distractors: ['git branch --show -r', 'git -b -d', 'git branch'],
      explanation: 'The git branch -r command shows the name of all remote branches that Git is tracking for the current repository.',
      link: 'https://www.freecodecamp.org/news/git-cheat-sheet/'
    },
    {
      question: 'In Git,  which command is used to choose a commit from one branch and apply it to another?',
      answer: 'git cherry-pick <commit>',
      distractors: ['git write-over <commit>', 'git goto <commit>', 'git merge <commit>'],
      explanation: 'git cherry-pick selects a handpicked commit from one branch and applies it to another branch.',
      link: 'https://www.freecodecamp.org/news/the-git-cherry-pick-command/'
    },
    {
      question: 'In Git, what is the correct syntax for the git tag command?',
      answer: 'git tag <tag-name>',
      distractors: ['git add-tag <tag-name>', 'git tag-add <tag-name>', 'git tag-on <commit>'],
      explanation: 'git tags point to a specific part in the Git history and are often used to mark specific version releases in the code.',
      link: 'https://www.freecodecamp.org/news/git-tag-explained-how-to-add-remove/'
    },
    {
      question: 'In Git, how do you do a force push?',
      answer: 'git push -f',
      distractors: ['git push -u', 'git push', 'git add fil*'],
      explanation: 'The git push -f command will force a push request. This is usually fine for pull request branches because nobody else should have cloned them.',
      link: 'https://www.freecodecamp.org/news/git-cheat-sheet/'
    },
    {
      question: 'In Git, how do you list multiple stashes?',
      answer: 'git stash list',
      distractors: ['git list', 'git apply stash', 'git pull'],
      explanation: 'To list multiple stashes that you have created you run git stash list.',
      link: 'https://git-scm.com/docs/git-stash'
    },
    {
      question: 'How does Git know that changes have been made to a file?',
      answer: 'Everything is checksummed before it is stored and is referred to by that checksum',
      distractors: [
        'Git takes snapshots of the changes',
        'Nearly every operation is local',
        'Git is a Distributed Version Control System'
      ],
      explanation: 'Git has integrity because everything in git is checksummed using SHA-1 mechanism.',
      link: 'https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F#'
    },
    {
      question: 'What is the difference between Git and GitHub?',
      answer: 'Git is a popular version control system and GitHub is a hosting service for Git repositories.',
      distractors: [
        'GitHub is a type of version control system, while Git is a hosting service for Git repositories.',
        'Git and GitHub are the same thing',
        'Git is a version control system only used on Mac computers while GitHub is a version control system only used on Windows.'
      ],
      explanation: 'Git is a version control system for managing the source and history of code and GitHub is a hosting service for Git repositories.',
      link: 'https://www.freecodecamp.org/news/introduction-to-git-and-github/'
    },
    {
      question: 'In Git, how do you apply a stash if you have multiple?',
      answer: 'git stash pop stash@{x}',
      distractors: ['git stash pop', 'git stash apply', 'git commit'],
      explanation: 'To apply a stash when you have multiple stashes, you use git stash pop stash@{x} where x is the number in the list of stash.',
      link: 'https://git-scm.com/docs/git-stash'
    },
    {
      question: 'In Git, how do you see a summary for a single stash?',
      answer: 'git stash show',
      distractors: ['git stash view', 'git stash diff', 'git stash summary'],
      explanation: 'To view a summary for a single stash, you use git stash show which shows a summary of file changes.',
      link: 'https://git-scm.com/docs/git-stash'
    },
    {
      question: 'In Git, how do you create a branch from your stash?',
      answer: 'git stash branch branch_name stash@{x}',
      distractors: [
        'git checkout -b branch_name stash',
        'git -b branch_name stash@{x}',
        'git branch_name stash@{x}'
      ],
      explanation: 'To create a branch from a stash, you use git stash branch the_branch_name stash@{x} where x is the number in the list of stash.',
      link: 'https://git-scm.com/docs/git-stash'
    },
    {
      question: 'In Git, how do you delete all the stashes?',
      answer: 'git stash clear',
      distractors: ['git stash delete', 'git stash remove', 'git stash drop'],
      explanation: 'To remove all stashes, you use git stash clear which will delete ALL stashes.',
      link: 'https://git-scm.com/docs/git-stash'
    },
    {
      question: 'In Git, how do you delete a single stash?',
      answer: 'git stash drop stash@{x}',
      distractors: [
        'git stash delete stash@{x}',
        'git stash remove stash@{x}',
        'git drop stash@{x}'
      ],
      explanation: 'To delete a SINGLE stash, you use git stash drop stash@{x} where x is the number in the list of stash.',
      link: 'https://git-scm.com/docs/git-stash'
    },
    {
      question: 'How do you change the latest commit message in Git?',
      answer: 'git commit --amend',
      distractors: ['git checkout -b change', 'git rebase -i Head~4', 'git drop stash@{change}'],
      explanation: 'git commit --amend  is the command used to change the latest commit message.',
      link: 'https://forum.freecodecamp.org/t/git-guide-how-to-amend-your-most-recent-git-commit-message/13186'
    },
    {
      question: 'Which one of the following is the default text editor in Git Bash?',
      answer: 'Vim',
      distractors: ['Emacs', 'Nano', 'VS Code'],
      explanation: 'Vim stands for Vi Improved and it is terminal based text editor used among Linux users. You can open the editor by using the following command: vi fileName',
      link: 'https://www.freecodecamp.org/news/learn-vim-beginners-tutorial/'
    },
    {
      question: 'How do you unstage a staged file in git?',
      answer: 'git restore --staged <file-path>',
      distractors: ['git unstage <file-path>', 'git restore <file-path>', 'git restore --staged <file-path>'],
      explanation: 'git restore --staged <file-path> command is used to unstage a staged file in git.',
      link: 'https://www.git-tower.com/learn/git/commands/git-restore'
    },
    {
      question: 'In Git, which command logs the previous commits in single line form?',
      answer: 'git log --oneline',
      distractors: ['git log singleline', 'git single log', 'git log -1'],
      explanation: 'git log --oneline is the command used to log the previous commits in single line form.',
      link: 'https://www.freecodecamp.org/news/git-cheat-sheet/'
    },
    {
      question: 'In Git, what does a good commit message look like?',
      answer: 'It should be short, descriptive and in present tense',
      distractors: ['It should be long', 'It should be in one word', 'None of these'],
      explanation: 'A good commit message should be short, descriptive and in present tense.',
      link: 'https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/'
    },
    {
      question: 'In Git, what is the shorthand command to stage and commit all changes?',
      answer: `git commit -am  '<commit message>'`,
      distractors: [
        `git add -m 'commit message'`,
        `git commit all 'commit message'`,
        `git add commit -m 'commit message'`
      ],
      explanation: `git commit -am  '<commit message>' is used to stage and commit all changes in the current directory and its subdirectories.`,
      link: 'https://git-scm.com/docs/git-commit'
    },
    {
      question: 'Which git command allows you to download objects and refs from another repository without committing to the main branch?',
      answer: 'git fetch <remote> <branch>',
      distractors: ['git pull <remote> <branch>', 'git push <remote> <branch>', 'git clone <repo>'],
      explanation: 'git fetch <remote> <branch> is used to download objects and refs without committing to the main branch that you are working on',
      link: 'https://git-scm.com/docs/git-fetch'
    },
    {
      question: `What is the purpose of the 'git branch' command in Git?`,
      answer: 'git branch is used to list, create, or delete branches in a Git repository.',
      distractors: [
        'git branch is used to commit changes in Git.',
        'git branch is used to merge branches in Git.',
        'git branch is used to clone a remote repository in Git.'
      ],
      explanation: 'The `git branch` command is used to manage branches in a Git repository, including listing existing branches, creating new branches, and deleting branches.',
      link: 'https://git-scm.com/docs/git-branch'
    },
    {
      question: 'In Git, what is the purpose of the `git bisect` command?',
      answer: 'to find a commit that introduced a bug',
      distractors: [
        'to find the latest commit in the repository',
        'to find the oldest commit in the repository',
        'to find the commit with the most changes'
      ],
      explanation: 'The `git bisect` command uses a binary search algorithm to find which commit in your project\'s history introduced a bug.',
      link: 'https://git-scm.com/docs/git-bisect'
    },
    {
      question: 'Which command displays help information about Git?',
      answer: 'git help',
      distractors: ['git assist', 'git commit', 'git guide'],
      explanation: 'The `git help` command will display help information on common Git commands. The `git help git` command will provide a complete overview of the system.',
      link: 'https://www.freecodecamp.org/news/best-git-tutorial/'
    },
    {
      question: 'When using the `git stash` command, what is one of the major disadvantages of using it?',
      answer: 'It contains clusters of saved drafts and causes confusion',
      distractors: [
        'It is easy to use and understand',
        'It helps you save a draft of your current task and focus on another one',
        'It helps with merge conflicts when using the `git fork` command'
      ],
      explanation: 'When working with the `git stash` command, you may run into a situation where there are many drafts in a large project, which can confuse developers.',
      link: 'https://www.freecodecamp.org/news/how-to-use-git-stash-to-manage-code/'
    }
  ]
};

export default gitQuiz;
