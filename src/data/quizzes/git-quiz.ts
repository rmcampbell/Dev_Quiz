const gitQuiz = [
  {
    Question:
      'In Git, how can you stage a file that ends with a *.txt extension?',
    Answer: 'git add *.txt',
    Distractors: ['git add *.text',
      'git add -a .txt',
      'git add - *.txt'],
    Explanation:
      'git add is a command used to add a file that is in the working directory to the staging area. Use *.txt to add specific pattern.',
    Link: 'https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/'
  },
  {
    Question:
      'In Git, how can you save uncommitted changes on your local machine so you can work on it later?',
    Answer: 'git stash',
    Distractors: ['git copy into notepad.exe',
      'git save code',
      'git clone --for later'],
    Explanation:
      'Stashes are temporary storage spaces where you can store your code. When you\'re done, you can put your code back from the stash using git stash pop. You won’t have to worry about losing any uncommitted changes!',
    Link: 'https://www.freecodecamp.org/news/how-to-use-git-stash-as-temporary-storage-84a0a1e37a43/'
  },
  {
    Question: 'In Git, how can you check your configuration?',
    Answer: 'git config -l',
    Distractors: ['git config -check',
      'git checkconfig -l',
      'git checkconfig -m'],
    Explanation:
      'The command git config -l returns a list of information about your git configuration including user name and email',
    Link: 'https://www.freecodecamp.org/news/git-cheat-sheet/'
  },
  {
    Question:
      'In Git, how do you integrate changes from one branch to another?',
    Answer: 'git merge',
    Distractors: ['git copy into',
      'git merge --docs',
      'git clone --docs'],
    Explanation:
      'In the command line, you can use git merge to integrate changes from one branch to another',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question: 'In Git, what is a modified state?',
    Answer:
      'changes have been made to the files but those changes are not saved yet',
    Distractors: ['a new local repository has been created',
      'a new remote repository has been created',

      'the files have been saved and need to be pushed to the remote repository'],
    Explanation:
      'The modified state is when changes have been made to the files but those changes are not saved yet',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question:
      'In Git, how can you list all the commits in a local repository in reverse chronological order?',
    Answer: 'git log',
    Distractors: ['git show',
      'git ls',
      'git commits'],
    Explanation:
      'You can use git log to see the commits in a repository in reverse chronological order.',
    Link: 'https://www.freecodecamp.org/news/what-is-git-learn-git-version-control/'
  },
  {
    Question:
      'In Git, how can you list all the local branches in your repository?',
    Answer: 'git branch',
    Distractors: [ 'git list',
      'git ls',
      'git branches'],
    Explanation:
      'You can use git branch to list all the local branches in the repository. ',
    Link: 'https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/'
  },
  {
    Question: 'What is the committed state in Git?',
    Answer:
      'all of the files have been saved to the local repo and are ready to be pushed to the remote repo',
    Distractors: [ 'the files need to be saved to the local repo',
      'the files have been successfully pushed to the remote repo',
      'the files have been deleted from the local repo'],
    Explanation:
      'The committed state is when all of the files have been saved to the local repo and are ready to be pushed to the remote repo',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question: 'In Git, how do you push a local branch to a remote repository?',
    Answer: 'git push -u <remote> <branch-name>',
    Distractors: [ 'git push -u <branch-name> <remote>',
      'git copy url <branch-name> <remote>',
      'git pull url <branch-name> <remote>'],
    Explanation:
      'In the command line, you can use git push -u <remote> <branch-name> to push a branch from a local Git repository to a remote repository.',

    Link: 'https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/'
  },
  {
    Question:
      'In Git, how do you set your username for commits you make on all cloned repositories on your computer?',
    Answer: 'git config --global user.name "YOUR_USERNAME"',
    Distractors: [ 'git config --global password "YOUR_USERNAME"',
      'git config &user "YOUR_USERNAME"',
      'git create --user "YOUR_USERNAME"'],
    Explanation:
      'In the command line, you can use git config --global user.name "YOUR_USERNAME"',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question: 'In Git, how do you initialize a new Git repository?',
    Answer: 'git init',
    Distractors: [ 'git create new repo',
      'git config init repo',
      'git new repo'],
    Explanation:
      'In the command line, you can use git init to initialize a new Git repository',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question: 'In Git, how do you add a specific file to be committed?',
    Answer: 'git add filename',
    Distractors: [ 'git add < filename',
      'git add *filename',
      'git add %filename'],
    Explanation:
      'In the command line, you can use git add filename to add a specific file.',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question: 'What is Git?',
    Answer: 'A popular type of version control system ',
    Distractors: [ 'A sorting algorithm',
      'A data type',
      'A non-relational database'],
    Explanation:
      'Git is an open source version control system that tracks changes to your files. ',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question:
      'In Git, how do you create a connection between a local repository and a remote one?',
    Answer: 'git remote add origin git-url',
    Distractors: [ 'git add remote and local',
      'git remote local',
      'git local remote'],
    Explanation:
      'In the command line, you can use git remote add origin git-url to connect the local repository to the remote one.',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question: 'In Git, how can you create a new branch and switch to it?',
    Answer: 'git checkout -b branch-name',
    Distractors: [ 'git switch branch-name',
      'git switch to branch-name',
      'git change branch-name'],
    Explanation:
      'In the command line, you can use git checkout -b branch-name to switch to a different branch',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question: 'In Git, how do you commit files to the history of changes?',
    Answer: 'git commit -m "commit message"',
    Distractors: [ 'git commit --add message',
      'git commit < add message',
      'git add message'],
    Explanation:
      'In the command line, you can use git commit -m "commit message" to commit your changes.',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question:
      'In Git, how do you push changes from the main branch of a local Git repository to a remote repository (origin)?',
    Answer: 'git push -u origin main',
    Distractors: [ 'git push changes',
      'git push all changes',
      'git push --to main branch'],
    Explanation:
      'In the command line, you can use git push -u origin main to push your changes from the main branch of a local Git repository to a remote repository.',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question: 'In Git, how can you delete a branch from a repository?',
    Answer: 'git branch -d <branch-name>',
    Distractors: [ 'git branch <branch-name>',
      'git delete <branch-name>',
      'git del <branch-name>'],
    Explanation:
      'You can use git branch -d <branch-name> to delete a branch from the repository.',
    Link: 'https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/'
  },
  {
    Question:
      'In Git, how do you add all of the files in the local Git repository?',
    Answer: 'git add .',
    Distractors: [ 'git add all files',
      'git add --all files',
      'git add <all files'],
    Explanation:
      'In the command line, you can use git add . to add all of the files in your local repository.',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question: 'In Git, what is a staged state?',
    Answer: 'the files are ready to be committed',
    Distractors: [ 'the files are ready to be deleted',
      'a new local repository has been created',
      'the files need to be saved to the remote repository'],
    Explanation: 'The staged state is when the files are ready to be committed',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question: 'What is GitHub?',
    Answer: 'A hosting platform for Git repositories ',
    Distractors: [ 'An online IDE',
      'A popular database',
      'A subscription based platform to sell coding classes'],
    Explanation:
      'GitHub is a popular hosting platform for developers to store their Git repositories and collaborate with other developers all around the world.',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question:
      'In Git, how do you check for the version of Git installed on your machine?',
    Answer: 'git --version',
    Distractors: [ 'git &version',
      'git <version>',
      'git /version'],
    Explanation:
      'In the command line, you can use git --version to check which version of Git is installed on your local machine',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question: 'In Git, how can you pull changes made to the remote repository?',
    Answer: 'git pull <remote>',
    Distractors: [ 'git <remote> pull',
      'git push <remote>',
      'git pul <remote>'],
    Explanation:
      'You can pull changes from the remote repository with git pull <remote>.',
    Link: 'https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/'
  },
  {
    Question: 'In Git, how do you clone a remote repository?',
    Answer: 'git clone',
    Distractors: [ 'git copy',
      'git copy url',
      'git clone --copy'],
    Explanation:
      'In the command line, you can use git clone followed by the remote url address for the repository you want to clone into your local machine',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question:
      'In Git, how can you see the current status of the current branch?',
    Answer: 'git status',
    Distractors: [ 'git info',
      'git show status',
      'git show'],
    Explanation:
      'You can see the status of the current branch with git status in Git.',
    Link: 'https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/'
  },
  {
    Question: 'In Git, how can you add color to git command outputs?',
    Answer: 'git config --global color.ui true',
    Distractors: [ 'git config --global color.ui false',
      'git set --global color.ui true',
      'git config --global true'],
    Explanation:
      'You can use git config --global color.ui true to add color to Git output.',
    Link: 'https://www.freecodecamp.org/news/best-git-tutorial/'
  },
  {
    Question: 'In Git, how do you switch back to the main branch?',
    Answer: 'git checkout main',
    Distractors: [ 'git switch main',
      'git change main',
      'git go to main'],
    Explanation:
      'In the command line, you can use git checkout main to switch over to the main branch',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question: 'What is the -m flag in Git?',
    Answer: 'Shorthand for message',
    Distractors: [ 'Shorthand for main',
      'Shorthand for mistake',
      'Shorthand for merge'],
    Explanation: 'The -m flag in Git is shorthand for message.',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question: 'In Git, how do you set your email associated with your commits?',
    Answer: 'git config --global user.email "YOUR_EMAIL"',
    Distractors: [ 'git config --global set email address "YOUR_EMAIL"',
      'git config --email address "YOUR_EMAIL"',
      'git create user email "YOUR_EMAIL"'],
    Explanation:
      'In the command line, you can use git config --global user.email "YOUR_EMAIL" to set your email address in Git.',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question:
      'In Git, how can you change the text editor used to write commit messages?',
    Answer: 'git config --global core.editor <editor>',
    Distractors: [ 'git config email <editor>',
      'git set editor <editor>',
      'git config <editor>'],
    Explanation:
      'You can use git config --global core.editor <editor> to set the text editor that will be used to write commit messages and to work with Git in general.',
    Link: 'https://www.freecodecamp.org/news/best-git-tutorial/'
  },
  {
    Question:
      'In Git, how can you check for the status of your working directory?',
    Answer: 'git status',
    Distractors: [ 'git check status',
      'git share status',
      'git show status'],
    Explanation:
      'In the command line, you can use git status to check the current status of your working directory',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question: 'In Git, how do you create a new branch and switch to it?',
    Answer: 'git checkout -b new-branch-name',
    Distractors: [ 'git create -b new-branch-name',
      'git change -b new-branch-name',
      'git create --change -b new-branch-name'],
    Explanation:
      'In the command line, you can use git checkout -b new-branch-name to create a new branch and switch to it',
    Link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/'
  },
  {
    Question: 'In Git, how do you rename the current branch?',
    Answer: 'git branch -m new-name',
    Distractors: [ 'git rename -b new-name',
      'git change -b new-branch-name',
      'git branch --rename new-name'],
    Explanation:
      'In the command line, you can use git branch -m new-name to rename the current branch.',
    Link: 'https://www.freecodecamp.org/news/renaming-a-git-branch-how-to-rename-the-current-branch-in-git/'
  },
  {
    Question:
      'In Git, which command is used to list differences between your current working directory and your staging area?',
    Answer: 'git diff',
    Distractors: [ 'git different',
      'git status',
      'git update'],
    Explanation:
      'In the command line, you can use git diff to show all the differences between your current working directory and your staging area.',
    Link: 'https://www.freecodecamp.org/news/git-diff-command/'
  },
  {
    Question:
      'In Git, what do you do right after resolving a merge conflict in a file?',
    Answer: 'git add file_that_had_conflict',
    Distractors: [ 'git commit',
      'git status',
      'git update'],
    Explanation:
      'In the command line, after resolving the conflict you will need to stage the changes.',
    Link: 'https://www.freecodecamp.org/news/resolve-merge-conflicts-in-git-a-practical-guide/'
  },
  {
    Question: 'In Git, what command is used to revert changes?',
    Answer: 'git revert',
    Distractors: [ 'git undo',
      'git stash',
      'git update'],
    Explanation:
      'In the command line, to undo unwanted changes you can run git revert with the hash of the commit you want to revert back to.',
    Link: 'https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/'
  },
  {
    Question:
      'In Git, which command is used to reset a branch to a previous commit?',
    Answer: 'git reset',
    Distractors: [ 'git revert',
      'git rebase',
      'git reflog'],
    Explanation:
      'The git reset command is used to reset your current HEAD to a specified state.',
    Link: 'https://www.freecodecamp.org/news/the-ultimate-guide-to-git-reset-and-git-revert/'
  },
  {
    Question:
      'In Git, how do you see your commit history including changes in files?',
    Answer: 'git log -p',
    Distractors: [ 'git log --show',
      'git log -c',
      'git log'],
    Explanation:
      'The git log -p command shows the commit\'s history including all files and their changes.',
    Link: 'https://www.freecodecamp.org/news/git-cheat-sheet/'
  },
  {
    Question:
      'In Git, which command is used to list all of the remote branches that Git is tracking?',
    Answer: 'git branch -r',
    Distractors: [ 'git branch --show -r',
      'git -b -d',
      'git branch'],
    Explanation:
      'The git branch -r command shows the name of all remote branches that Git is tracking for the current repository.',
    Link: 'https://www.freecodecamp.org/news/git-cheat-sheet/'
  },
  {
    Question:
      'In Git,  which command is used to choose a commit from one branch and apply it to another?',
    Answer: 'git cherry-pick <commit>',
    Distractors: [ 'git write-over <commit>',
      'git goto <commit>',
      'git merge <commit>'],
    Explanation:
      'git cherry-pick selects a handpicked commit from one branch and applies it to another branch.',
    Link: 'https://www.freecodecamp.org/news/the-git-cherry-pick-command/'
  },
  {
    Question: 'In Git, what is the correct syntax for the git tag command?',
    Answer: 'git tag <tag-name>',
    Distractors: [ 'git add-tag <tag-name>',
      'git tag-add <tag-name>',
      'git tag-on <commit>'],
    Explanation:
      'git tags point to a specific part in the Git history and are often used to mark specific version releases in the code.',
    Link: 'https://www.freecodecamp.org/news/git-tag-explained-how-to-add-remove/'
  },
  {
    Question: 'In Git, how do you do a force push?',
    Answer: 'git push -f',
    Distractors: [ 'git push -u',
      'git push',
      'git add fil*'],
    Explanation:
      'The git push -f command will force a push request. This is usually fine for pull request branches because nobody else should have cloned them.',
    Link: 'https://www.freecodecamp.org/news/git-cheat-sheet/'
  },
  {
    Question: 'In Git, how do you list multiple stashes?',
    Answer: 'git stash list',
    Distractors: [ 'git list',
      'git apply stash',
      'git pull'],
    Explanation:
      'To list multiple stashes that you have created you run git stash list.',
    Link: 'https://git-scm.com/docs/git-stash'
  },
  {
    Question: 'How does Git know that changes have been made to a file?',
    Answer:
      'Everything is checksummed before it is stored and is referred to by that checksum',
    Distractors: [ 'Git takes snapshots of the changes',
      'Nearly every operation is local',
      'Git is a Distributed Version Control System'],
    Explanation:
      'Git has integrity because everything in git is checksummed using SHA-1 mechanism.',
    Link: 'https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F#'
  },
  {
    Question: 'What is the difference between Git and GitHub?',
    Answer:
      'Git is a popular version control system and GitHub is a hosting service for Git repositories.',
    Distractors: [
      'GitHub is a type of version control system, while Git is a hosting service for Git repositories.',
      'Git and GitHub are the same thing',

      'Git is a version control system only used on Mac computers while GitHub is a version control system only used on Windows.'],
    Explanation:
      'Git is a version control system for managing the source and history of code and GitHub is a hosting service for Git repositories.',
    Link: 'https://www.freecodecamp.org/news/introduction-to-git-and-github/'
  },
  {
    Question: 'In Git, how do you apply a stash if you have multiple?',
    Answer: 'git stash pop stash@{x}',
    Distractors: [ 'git stash pop',
      'git stash apply',
      'git commit'],
    Explanation:
      'To apply a stash when you have multiple stashes, you use git stash pop stash@{x} where x is the number in the list of stash.',
    Link: 'https://git-scm.com/docs/git-stash'
  },
  {
    Question: 'In Git, how do you see a summary for a single stash?',
    Answer: 'git stash show',
    Distractors: [ 'git stash view',
      'git stash diff',
      'git stash summary'],
    Explanation:
      'To view a summary for a single stash, you use git stash show which shows a summary of file changes.',
    Link: 'https://git-scm.com/docs/git-stash'
  },
  {
    Question: 'In Git, how do you create a branch from your stash?',
    Answer: 'git stash branch branch_name stash@{x}',
    Distractors: [ 'git checkout -b branch_name stash',
      'git -b branch_name stash@{x}',
      'git branch_name stash@{x}'],
    Explanation:
      'To create a branch from a stash, you use git stash branch the_branch_name stash@{x} where x is the number in the list of stash.',
    Link: 'https://git-scm.com/docs/git-stash'
  },
  {
    Question: 'In Git, how do you delete all the stashes?',
    Answer: 'git stash clear',
    Distractors: [ 'git stash delete',
      'git stash remove',
      'git stash drop'],
    Explanation:
      'To remove all stashes, you use git stash clear which will delete ALL stashes.',
    Link: 'https://git-scm.com/docs/git-stash'
  },
  {
    Question: 'In Git, how do you delete a single stash?',
    Answer: 'git stash drop stash@{x}',
    Distractors: [ 'git stash delete stash@{x}',
      'git stash remove stash@{x}',
      'git drop stash@{x}'],
    Explanation:
      'To delete a SINGLE stash, you use git stash drop stash@{x} where x is the number in the list of stash.',
    Link: 'https://git-scm.com/docs/git-stash'
  },
  {
    Question: 'How do you change the latest commit message in Git?',
    Answer: 'git commit --amend',
    Distractors: [ 'git checkout -b change',
      'git rebase -i Head~4',
      'git drop stash@{change}'],
    Explanation:
      'git commit --amend  is the command used to change the latest commit message.',
    Link: 'https://forum.freecodecamp.org/t/git-guide-how-to-amend-your-most-recent-git-commit-message/13186'
  },
  {
    Question:
      'Which one of the following is the default text editor in Git Bash?',
    Answer: 'Vim',
    Distractors: [ 'Emacs',
      'Nano',
      'VS Code'],
    Explanation:
      'Vim stands for Vi Improved and it is terminal based text editor used among Linux users. You can open the editor by using the following command: vi fileName',
    Link: 'https://www.freecodecamp.org/news/learn-vim-beginners-tutorial/'
  },
  {
    Question: 'How do you unstage a staged file in git?',
    Answer: 'git restore --staged <file-path>',
    Distractors: [ 'git unstage <file-path>',
      'git restore <file-path>',
      'git restore --staged <file-path>'],
    Explanation:
      'git restore --staged <file-path> command is used to unstage a staged file in git.',
    Link: 'https://www.git-tower.com/learn/git/commands/git-restore'
  },
  {
    Question:
      'In Git, which command logs the previous commits in single line form?',
    Answer: 'git log --oneline',
    Distractors: [ 'git log singleline',
      'git single log',
      'git log -1'],
    Explanation:
      'git log --oneline is the command used to log the previous commits in single line form.',
    Link: 'https://www.freecodecamp.org/news/git-cheat-sheet/'
  },
  {
    Question: 'In Git, what does a good commit message look like?',
    Answer: 'It should be short, descriptive and in present tense',
    Distractors: [ 'It should be long',
      'It should be in one word',
      'None of these'],
    Explanation:
      'A good commit message should be short, descriptive and in present tense.',
    Link: 'https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/'
  },
  {
    Question:
      'In Git, what is the shorthand command to stage and commit all changes?',
    Answer: 'git commit -am  \'<commit message>\'',
    Distractors: [ 'git add -m \'commit message\'',
      'git commit all \'commit message\'',
      'git add commit -m \'commit message\''],
    Explanation:
      'git commit -am  \'<commit message>\' is used to stage and commit all changes in the current directory and its subdirectories.',
    Link: 'https://git-scm.com/docs/git-commit'
  },
  {
    Question:
      'Which git command allows you to download objects and refs from another repository without committing to the main branch?',
    Answer: 'git fetch <remote> <branch>',
    Distractors: [ 'git pull <remote> <branch>',
      'git push <remote> <branch>',
      'git clone <repo>'],
    Explanation:
      'git fetch <remote> <branch> is used to download objects and refs without committing to the main branch that you are working on',
    Link: 'https://git-scm.com/docs/git-fetch'
  },
  {
    Question: 'What is the purpose of the \'git branch\' command in Git?',
    Answer:
      'git branch is used to list, create, or delete branches in a Git repository.',
    Distractors: [ 'git branch is used to commit changes in Git.',
      'git branch is used to merge branches in Git.',
      'git branch is used to clone a remote repository in Git.'],
    Explanation:
      'The \'git branch\' command is used to manage branches in a Git repository, including listing existing branches, creating new branches, and deleting branches.',
    Link: 'https://git-scm.com/docs/git-branch'
  },
  {
    Question: 'In Git, what is the purpose of the \'git bisect\' command?',
    Answer:
      'to find a commit that introduced a bug',
    Distractors: [ 'to find the latest commit in the repository',
      'to find the oldest commit in the repository',
      'to find the commit with the most changes'],
    Explanation:
      'The \'git bisect\' command uses a binary search algorithm to find which commit in your project\'s history introduced a bug.',
    Link: 'https://git-scm.com/docs/git-bisect'
  },
  {
    Question: 'Which command displays help information about Git?',
    Answer:
      'git help',
    Distractors: [ 'git assist',
      'git commit',
      'git guide'],
    Explanation:
      'The \'git help\' command will display help information on common Git commands. The \'git help git\' command will provide a complete overview of the system.',
    Link: 'https://www.freecodecamp.org/news/best-git-tutorial/'
  },
  {
    Question: 'When using the \'git stash\' command, what is one of the major disadvantages of using it?',
    Answer:
      'It contains clusters of saved drafts and causes confusion',
    Distractors: [ 'It is easy to use and understand',
      'It helps you save a draft of your current task and focus on another one',
      'It helps with merge conflicts when using the \'git fork\' command'],
    Explanation:
      'When working with the \'git stash\' command, you may run into a situation where there are many drafts in a large project, which can confuse developers.',
    Link: 'https://www.freecodecamp.org/news/how-to-use-git-stash-to-manage-code/'
  }
];

export default gitQuiz;
