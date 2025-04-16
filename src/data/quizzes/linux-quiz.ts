const linuxQuiz = [
  {
    Question: 'Which Linux tool is commonly used to analyze CPU performance and identify bottlenecks?',
    Answer: 'Perf',
    Distractors: ['top',
      'htop',
      'ps'],
    Explanation: 'Perf is a powerful Linux tool used to analyze CPU performance, monitor system events, and identify bottlenecks',
    Link: 'https://www.freecodecamp.org/news/helpful-linux-commands-you-should-know'
  },
  {
    Question: 'What does the -q option do in most command-line tools?',
    Answer: 'Suppresses output',
    Distractors: ['Enables verbose output',
      'Runs the command in the background',
      'Stops the command execution'],
    Explanation:
      'In most command-line tools, the -q or --quiet option is used to suppress the output of the command, making the execution silent unless there are errors.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question: 'Which of the following is not a mode in the Vim editor?',
    Answer: 'Write',
    Distractors: ['Insert',
      'Visual',
      'Command'],
    Explanation:
      'In the Vim editor, there is no mode called \'Write.\' The modes include Insert, Visual, and Command. \'Write\' refers to a command (\':w\') used to save changes, not a mode.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question: 'Which of the following commands is used to create a new window for editing a file?',
    Answer: 'gvim',
    Distractors: ['vim',
      'gedit',
      'nvim'],
    Explanation: 'The gvim command causes the editor to open a new window for editing the file whereas the vim command causes the editing to occur inside your command window.',
    Link: 'https://vimdoc.sourceforge.net/htmldoc/usr_02.html#02.1'
  },
  {
    Question:
      'Which command allows you to run commands in a different root directory?',
    Answer: 'chroot',
    Distractors: ['chmod',
      'cd',
      'cp'],
    Explanation:
      'The chroot, short for “change root”, command changes the root directory and allows you to run commands in a different root directory.',
    Link: 'https://www.freecodecamp.org/news/helpful-linux-commands-you-should-know'
  },
  {
    Question: 'What is the primary purpose of the /etc/passwd file in Linux?',
    Answer:
      'Storing user account information, including usernames, UIDs, home directories, and default shells.',
    Distractors: ['Storing system configuration settings.',
      'Managing software packages.',
      'Storing system log files.'],
    Explanation:
      'The /etc/passwd file contains user account information used by the system to authenticate and manage users.',
    Link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
  },
  {
    Question: 'What is the User ID (UID) 0 typically reserved for in Linux?',
    Answer: 'The root user, which has superuser privileges.',
    Distractors: ['Normal users with UID 0.',
      'System accounts with UID 0.',
      'Guest users.'],
    Explanation:
      'UID 0 is reserved for the superuser (root) who has unrestricted access to the system.',
    Link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
  },
  {
    Question:
      'How does Linux represent the root user in the shell prompt when logged in as root?',
    Answer: '#',
    Distractors: ['@',
      '$',
      '!'],
    Explanation:
      'The root user\'s shell prompt is typically displayed as \'#\' to signify the superuser\'s power and responsibility.',
    Link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
  },
  {
    Question:
      'Which of the following operations typically require root privileges in Linux?',
    Answer:
      'Creating, removing and managing user accounts, managing software packages, removing or modifying system files, restarting system services.',
    Distractors: [
      'Running network clients, using devices such as printers, accessing files with proper permissions, executing SUID-root applications.',

      'Managing user passwords, changing the system time, viewing system logs, creating user groups.',

      'Installing and updating software, using peripheral devices, reading user data, sharing files over the network.'],
    Explanation:
      'Root privileges are necessary for critical system administration tasks.',
    Link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
  },
  {
    Question:
      'What is the key difference between \'su\' and \'sudo\' in Linux for granting root access?',
    Answer:
      '\'su\' requires the root password, while \'sudo\' requires the user\'s password and provides more fine-grained control over permissions.',
    Distractors: [
      '\'su\' requires the user\'s password, while \'sudo\' requires the root password and provides detailed logging features.',

      '\'su\' and \'sudo\' both require the root password and have the same level of security.',

      '\'su\' requires no password, while \'sudo\' requires both the root and user passwords for authentication.'],
    Explanation:
      'The methods differ in password requirements and security features.',
    Link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
  },
  {
    Question:
      'What file is responsible for configuring user privileges when using \'sudo\' in Linux?',
    Answer: '/etc/sudoers',
    Distractors: ['/etc/passwd',
      '/etc/shadow',
      '/etc/group'],
    Explanation:
      '/etc/sudoers defines who has the right to use \'sudo\' and the scope of their privilege.',
    Link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
  },
  {
    Question: 'Where are sudo command logs typically stored on a Linux system?',
    Answer: '/var/log/auth.log or /var/log/secure',
    Distractors: ['/var/log/syslog',
      '/var/log/messages',
      '/var/log/sudo.log'],
    Explanation:
      'Logging is crucial for tracking and accountability of \'sudo\' use.',
    Link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
  },
  {
    Question:
      'What hashing algorithm is commonly used to encrypt passwords on Linux systems?',
    Answer: 'SHA-512 (Secure Hashing Algorithm 512 bits)',
    Distractors: ['MD5 (Message Digest Algorithm 5)',
      'AES (Advanced Encryption Standard)',
      'RSA (Rivest–Shamir–Adleman)'],
    Explanation: 'SHA-512 is widely used for securing passwords in Linux.',
    Link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
  },
  {
    Question: 'What is the purpose of password aging in Linux?',
    Answer:
      'To prompt users to create new passwords after a specific period, ensuring passwords have a limited usability period.',
    Distractors: ['To force users to change their passwords daily.',
      'To enforce strong password policies.',
      'To store old passwords for historical reference.'],
    Explanation:
      'Password aging enhances security by requiring password updates.',
    Link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
  },
  {
    Question:
      'What is the recommended practice for handling known security vulnerabilities in Linux?',
    Answer:
      'Install updates promptly and take advantage of automatic update mechanisms.',
    Distractors: [
      'Ignore known vulnerabilities as they are usually not exploited.',

      'Manually patch vulnerabilities only when they become critical.',
      'Reinstall the operating system to resolve vulnerabilities.'],
    Explanation:
      'Prompt updates are essential to address known vulnerabilities.',
    Link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
  },
  {
    Question:
      'Where are user passwords typically stored in modern Linux systems?',
    Answer: '/etc/shadow',
    Distractors: ['/etc/passwd',
      '/etc/passwords',
      '/var/log/auth.log'],
    Explanation:
      'Passwords are stored in an encrypted format in the /etc/shadow file.',
    Link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
  },
  {
    Question:
      'What is the purpose of using Pluggable Authentication Modules (PAM) for password management in Linux?',
    Answer:
      'To enforce strong password policies and automatically verify password strength during password creation or modification.',
    Distractors: ['To provide a secure environment for running applications.',
      'To create user accounts with default settings.',
      'To log all user authentication attempts.'],
    Explanation:
      'PAM is used to enhance password security by ensuring strong passwords.',
    Link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
  },
  {
    Question: 'How can you enhance the security of the boot process in Linux?',
    Answer:
      'By setting a secure password for the bootloader to prevent unauthorized changes during boot.',
    Distractors: ['By encrypting the entire hard drive.',
      'By disabling the bootloader entirely.',
      'By setting a BIOS password.'],
    Explanation:
      'Bootloader passwords prevent unauthorized changes during boot.',
    Link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
  },
  {
    Question:
      'What is the purpose of the Control Groups (cgroups) feature in Linux?',
    Answer:
      'To group processes and associate finite resources to each cgroup, enhancing resource management and isolation.',
    Distractors: ['To control access to hardware devices.',
      'To manage user accounts and groups.',
      'To encrypt files and directories.'],
    Explanation: 'Control Groups (cgroups) help manage and isolate processes.',
    Link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
  },
  {
    Question:
      'What type of accounts have User IDs (UIDs) ranging from 1000 or greater in Linux?',
    Answer: 'Normal user accounts.',
    Distractors: ['Root accounts.',
      'System accounts.',
      'Guest accounts.'],
    Explanation:
      'UIDs of 1000 or greater are typically assigned to normal users.',
    Link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
  },
  {
    Question: 'What is the purpose of setting a bootloader password in Linux?',
    Answer:
      'To prevent unauthorized changes to the bootloader configuration during the boot process.',
    Distractors: ['To encrypt the entire hard drive.',
      'To lock the user out of the system entirely.',
      'To protect the BIOS settings.'],
    Explanation: 'Bootloader passwords enhance boot process security.',
    Link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
  },
  {
    Question:
      'In Linux, Which command is used to convert and copy files with specific size?',
    Answer: 'dd',
    Distractors: [ 'cp',
      'mv',
      'df'],
    Explanation:
      'The dd command is used to convert data along with copying files of specific size.',
    Link: 'https://www.freecodecamp.org/news/linux-example-bash-command-line/#linux-dd-command-example'
  },
  {
    Question:
      'In Linux, Which command is used to export variables to child processes?',
    Answer: 'export',
    Distractors: [ 'env',
      'move',
      'df'],
    Explanation:
      'The export command is used to export variables to child processes.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-export-command'
  },
  {
    Question:
      'In Linux, which command option is used to perform a case-insensitive search when searching for text patterns?',
    Answer: 'grep -i',
    Distractors: [ 'grep -c',
      'grep -v',
      'grep -s'],
    Explanation:
      'The grep -i command is used to perform a case-insensitive search, allowing you to find text patterns ignoring the case.',
    Link: 'https://man7.org/linux/man-pages/man1/grep.1.html'
  },
  {
    Question: 'In Linux, which command is used to set limits on a file size?',
    Answer: 'ulimit',
    Distractors: [ 'fsize',
      'flimit -r',
      'usize'],
    Explanation:
      'ulimit is a Linux command that is used to get and set a limit on a file size.',
    Link: 'https://man7.org/linux/man-pages/man3/ulimit.3.html'
  },
  {
    Question:
      'In Linux, which one of the following commands can be used to create a symbolic link between files?',
    Answer: 'ln -s',
    Distractors: [ 'ls',
      'lp',
      'link'],
    Explanation:
      'In Linux, the ln -s command is used to create a symbolic link between files.',
    Link: 'https://man7.org/linux/man-pages/man1/ln.1.html'
  },
  {
    Question: 'Which command finds memory being used by Linux?',
    Answer: 'All of these',
    Distractors: [ 'free-m',
      'htop',
      'vmstat'],
    Explanation:
      'The top command is used to display dynamic real-time information. You can use free-m, htop, top or vmstat to find memory being used by Linux.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-top-command'
  },
  {
    Question:
      'In Linux, which option is used with the uname command to print the processor architecture name?',
    Answer: '-p',
    Distractors: [ '-arch',
      '-ps',
      '-pname'],
    Explanation:
      'In Linux, the -p option can be used with the uname command to print the processor architecture name.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command'
  },
  {
    Question:
      'In Linux, which option is used with the uname command to print the node network name?',
    Answer: '-n',
    Distractors: [ '-network',
      '-node',
      '-ntwrk'],
    Explanation:
      'In Linux, the -n option can be used with the uname command to print the node network name.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command'
  },
  {
    Question:
      'In Linux, which command converts input and uses it as an argument for another command?',
    Answer: 'xargs',
    Distractors: [ 'convert',
      'stdin',
      'argv'],
    Explanation:
      'The xargs command is used in a UNIX shell to convert input from the standard input and use it as an argument for another command.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-xargs-command'
  },
  {
    Question:
      'In Linux, which command is used to display all the users logged in to the system?',
    Answer: 'who',
    Distractors: [ 'all-users',
      'show',
      'whoami'],
    Explanation: 'The who command displays the users logged in to the system.',
    Link: 'https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/'
  },
  {
    Question:
      'In Linux, which command is used to remove the writing and executing permissions for \'group\' and \'other\'?',
    Answer: 'chmod go-wx list',
    Distractors: [ 'chmod go+wx list',
      'chmod a-wx list',
      'chmod go+r list'],
    Explanation:
      'The \'chmod go-wx list\' is used to remove the writing and executing permissions for \'group\' and \'other\' for a file named list.',
    Link: 'https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/'
  },
  {
    Question:
      'In Linux, which one of the following commands determines file type?',
    Answer: 'file',
    Distractors: [ 'kind',
      'wget',
      'which'],
    Explanation: 'The command \'file\' determines file type.',
    Link: 'https://man7.org/linux/man-pages/man1/file.1.html'
  },
  {
    Question:
      'In Linux, which one of the following commands locates the binary, source, and manual page files for a command?',
    Answer: 'whereis <command>',
    Distractors: [ 'locate <command>',
      'wget <command>',
      'which <command>'],
    Explanation:
      'The command \'whereis\' locates the binary, source, and manual page files for a command.',
    Link: 'https://man7.org/linux/man-pages/man1/whereis.1.html'
  },
  {
    Question:
      'In Linux, which one of the following commands lists threads of a process?',
    Answer: 'ps -T -p <PID>',
    Distractors: [ 'ps -ef',
      'top thread <PID>',
      'show_thread <PID>'],
    Explanation:
      'The option \'-p\' selects the process by PID, and the option \'-T\' is to show threads.',
    Link: 'https://man7.org/linux/man-pages/man1/ps.1.html'
  },
  {
    Question:
      'In Linux, which one of the following commands concatenates and prints files in reverse?',
    Answer: 'tac',
    Distractors: [ 'catr',
      'cat_reverse',
      'print_reverse'],
    Explanation: 'The command \'tac\' prints files in reverse.',
    Link: 'https://man7.org/linux/man-pages/man1/tac.1.html'
  },
  {
    Question:
      'In Linux, which one of the following commands repeatedly outputs a line with all specified string(s) or just \'y\'?',
    Answer: 'yes',
    Distractors: [ 'no',
      'loop',
      'iterate'],
    Explanation:
      'The command \'yes\' repeatedly outputs a line with all specified string(s), or \'y\'.',
    Link: 'https://man7.org/linux/man-pages/man1/yes.1.html'
  },
  {
    Question: 'In Linux, which one is not a communication command?',
    Answer: 'grep',
    Distractors: [ 'mesg',
      'mail',
      'write'],
    Explanation:
      'The grep filter searches a file for a particular pattern of characters, and displays all lines that contain that pattern.',
    Link: 'https://www.freecodecamp.org/news/grep-command-tutorial-how-to-search-for-a-file-in-linux-and-unix/'
  },
  {
    Question:
      'Which of the following commands creates a file without opening it?',
    Answer: 'touch <filename>',
    Distractors: [ 'nano <filename>',
      'cat <filename>',
      'cp <filename>'],
    Explanation:
      'The touch <filename> command creates a new file without opening it which can be verified using the ls command.',
    Link: 'https://www.freecodecamp.org/news/linux-basics/'
  },
  {
    Question: 'In Linux, which command grants every permission to everyone?',
    Answer: 'chmod 777',
    Distractors: [ 'chmod 111',
      'chmod 724',
      'chmod 666'],
    Explanation:
      'The command chmod 777 activates all the permission access to owner, group and others by summing 4, 2, 1 on the octal base.',
    Link: 'https://www.freecodecamp.org/news/how-to-change-file-permissions-with-the-chmod-command-on-linux/'
  },
  {
    Question:
      'In Linux, which command helps in listing all the environment variables?',
    Answer: 'printenv',
    Distractors: [ 'lsenv',
      'listenv',
      'printvar'],
    Explanation:
      'The command printenv helps in listing all the environment variables, set either by the system, or by your own shell scripts and configuration.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-printenv-command'
  },
  {
    Question: 'In Linux, what is a maximum length for a filename?',
    Answer: '255 Bytes',
    Distractors: [ '225 Bytes',
      '235 Bytes',
      '295 Bytes'],
    Explanation:
      'The maximum length for a file name is 255 bytes. The maximum combined length of both the file name and path name is 4096 bytes.',
    Link: 'https://www.ibm.com/docs/en/spectrum-protect/8.1.9?topic=parameters-file-specification-syntax'
  },
  {
    Question: 'In Linux, what does the resize2fs command do?',
    Answer:
      'This can be used to change the size of an ext2 or ext3 filesystem.',
    Distractors: [ 'This is used manipulate the size of partitions.',
      'This is used to create an ext2, ext3, or ext4 filesystem',
      'This is used to check the family of filesystems.'],
    Explanation:
      'The resize2fs program will resize ext2, ext3, or ext4 file systems. It can be used to enlarge or shrink an unmounted file system located on the device. The resize2fs program does not manipulate the size of partitions.',
    Link: 'http://manpages.ubuntu.com/manpages/bionic/man8/resize2fs.8.html'
  },
  {
    Question:
      'In Linux, which command is used to display information about the processes using a filesystem?',
    Answer: 'fuser',
    Distractors: [ 'ps',
      'top',
      'grep'],
    Explanation:
      'The fuser utility displays the process IDs of the processes that are using the files specified as arguments.',
    Link: 'https://docs.oracle.com/cd/E88353_01/html/E72487/fuser-8.html'
  },
  {
    Question:
      'In Linux, which command prints the path to the current directory you are in?',
    Answer: 'pwd',
    Distractors: [ 'cat',
      'cd',
      'ls'],
    Explanation:
      'pwd(short for print working directory) prints the current folder path and is helpful when you are lost in the terminal.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-pwd-command'
  },
  {
    Question: 'In Linux, which of the following is the pipe symbol?',
    Answer: '|',
    Distractors: [ '/',
      '+',
      '[]'],
    Explanation:
      'With the pipe symbol (|), the output of one command serves as the input to another.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cd-command'
  },
  {
    Question: 'In Linux, which command is used to send HTTP requests?',
    Answer: 'curl',
    Distractors: [ 'tar',
      'uname',
      'gzip'],
    Explanation:
      'Curl is a command-line tool that allows us to do HTTP requests from shell',
    Link: 'https://www.freecodecamp.org/news/how-to-start-using-curl-and-why-a-hands-on-introduction-ea1c913caaaa/'
  },
  {
    Question:
      'In Linux, which command is used to remove adjacent duplicate lines inside a file?',
    Answer: 'uniq',
    Distractors: [ 'sort',
      'rm',
      'rmdir'],
    Explanation:
      'The uniq command removes duplicate lines in a file, by default.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question:
      'In Linux, which command is used to create multiple nested folders?',
    Answer: 'mkdir -p',
    Distractors: [ 'mkdir -27',
      'makedir',
      'makedir -p'],
    Explanation:
      'You can create multiple nested folders by adding the -p option to the mkdir command.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question:
      'In the vim editor, which mode helps us to copy, paste and delete the text?',
    Answer: 'visual mode',
    Distractors: [ 'yanking mode',
      'insert mode',
      'normal mode'],
    Explanation:
      'Visual Mode in vim helps the user to copy, paste and delete the text like a normal editor.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-vim-editor-command'
  },
  {
    Question: 'In Linux, which is the default shell?',
    Answer: 'Bourne Again SHell',
    Distractors: [ 'PowerSHell',
      'Emacs',
      'Fish'],
    Explanation:
      'Bash (short for Bourne Again SHell) is the most widely used shell, packaged by default for most Linux distributions',
    Link: 'https://www.freecodecamp.org/news/linux-command-line-bash-tutorial/'
  },
  {
    Question: 'In Linux, which command is used to create an archive?',
    Answer: 'tar',
    Distractors: [ 'gzip',
      'gunzip',
      'diff'],
    Explanation:
      'The tar command is used to create an archive, grouping multiple files in a single file, without compressing them',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-tar-command'
  },
  {
    Question: 'What is the grep command used for?',
    Answer: 'Searching through text in the given file',
    Distractors: [ 'Move the contents of a file to another one',
      'Rename the file',
      'Delete all text in a file'],
    Explanation:
      'grep stands for Globally Search For Regular Expression and Print out. It is a command line tool used in UNIX and Linux systems to search a specified pattern in a file or group of files.',
    Link: 'https://www.freecodecamp.org/news/grep-command-tutorial-how-to-search-for-a-file-in-linux-and-unix/'
  },
  {
    Question: 'In Linux, which command is used to rename files and folders?',
    Answer: 'mv',
    Distractors: [ 'touch',
      'mkdir',
      'rm'],
    Explanation:
      'You rename files and folders by using the mv(short for move)  command.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question: 'In Linux, what does the ls -a command do?',
    Answer: 'lists out the directories and files - including all hidden files',
    Distractors: [ 'lists only the hidden files',
      'lists files and then deletes them',
      'show deleted files'],
    Explanation:
      'The ls -a(short for all) command lists all directories(folders) and files in the current directory. This includes all hidden files. The -a flag(or option) shows hidden files. Hidden files are files that start with a dot (.)',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#introductiontolinuxandshells'
  },
  {
    Question:
      'In Linux, which command is used to change the owner of a file/directory?',
    Answer: 'chown',
    Distractors: [ 'uname',
      'whoami',
      'echo'],
    Explanation:
      'Every file/directory in an Operating System like Linux or macOS (and every UNIX system in general) has an owner. The owner of a file can do everything with it. It can decide the fate of that file. The owner (and the root user) can change the owner to another user, too, using the chown command.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question:
      'In grep, which wildcard can you use to select ALL files in a directory?',
    Answer: '*',
    Distractors: [ '?',
      '[]',
      '!'],
    Explanation:
      'You can use the wildcard (*) to select all files in a directory. For example the ls * command would list ALL files in the current directory.',
    Link: 'https://www.freecodecamp.org/news/grep-command-tutorial-how-to-search-for-a-file-in-linux-and-unix/'
  },
  {
    Question:
      'In Linux, which command displays information about the Operating System?',
    Answer: 'uname',
    Distractors: [ 'echo',
      'man',
      'find'],
    Explanation:
      'Calling uname without any options will return the Operating System codename. The m option shows the hardware name and the p option prints the processor architecture name.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command'
  },
  {
    Question:
      'In the Vim text editor, which command is used to move the cursor one character to the left?',
    Answer: 'h',
    Distractors: [ 'j',
      'k',
      'l'],
    Explanation:
      'To move the cursor one character to the left, use the h command.',
    Link: 'https://www.freecodecamp.org/news/vim-editor-modes-explained/'
  },
  {
    Question: 'In Linux, which command is used for creating files?',
    Answer: 'touch',
    Distractors: [ 'mv',
      'man',
      'mkdir'],
    Explanation:
      'You create an empty file using the touch command, followed by the name of the file e.g. touch demo.txt',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-touch-command'
  },
  {
    Question:
      'In Linux, which command is used for counting the total amount of lines, words, and bytes in a file?',
    Answer: 'wc',
    Distractors: [ 'countl',
      'countw',
      'countwl'],
    Explanation:
      'The wc command gives us useful information about a file. The first column returned in the output  is the number of lines. The second is the number of words. The third is the number of bytes.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-wc-command'
  },
  {
    Question: 'In Linux, which command is used to move into a directory?',
    Answer: 'cd',
    Distractors: [ 'mv',
      'pwd',
      'rm'],
    Explanation:
      'Once you\'ve created a folder, you can move into it with the cd command(which stands for change directory). You invoke it specifying a folder to move into. You can specify a folder name, or an entire path.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question:
      'In Linux, which command deletes a directory with files inside it?',
    Answer: 'rm -rf',
    Distractors: [ 'rmdir',
      'rm',
      'ls'],
    Explanation:
      'To delete folders with files in them, you use the more generic rm command which deletes files . The -rf option is used to recursively and forcefully delete all files contained in the directory.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-rmdir-command'
  },
  {
    Question:
      'In Linux, which command is used to count JUST the number of bytes in a file?',
    Answer: 'wc -c',
    Distractors: [ 'wc -w',
      'wc -l',
      'wc -z'],
    Explanation:
      'To count just the number of bytes in a file you use the wc command with the -c option.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-wc-command'
  },
  {
    Question: 'In Linux, what does the cd command stand for?',
    Answer: 'change directory',
    Distractors: [ 'create directory',
      'created directory',
      'changed directory'],
    Explanation: 'cd stands for change directory',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cd-command'
  },
  {
    Question:
      'In Linux, which command is used to remove all previous commands and output from the terminal?',
    Answer: 'clear',
    Distractors: [ 'exit',
      'deleting',
      'rm'],
    Explanation:
      'The clear command removes all previous commands that were run in the current terminal. The screen will clear and you will just see the prompt at the top.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question:
      'In Vim, pressing this keystroke allows you start typing in the editor.',
    Answer: 'i',
    Distractors: [ 'esc',
      ':q!',
      ':wq'],
    Explanation:
      'The i command( for \'insert\'), immediately switches vim to insert mode. Once you are in insert mode, you can insert characters just like a regular text editor.',
    Link: 'https://www.freecodecamp.org/news/vim-editor-modes-explained/'
  },
  {
    Question: 'What is the name of the penguin mascot of Linux?',
    Answer: 'Tux',
    Distractors: [ 'Tail',
      'Ping',
      'Flux'],
    Explanation: 'Linux\'s mascot is a penguin named “Tux”.',
    Link: 'https://www.freecodecamp.org/news/linux-is-25-yay-lets-celebrate-with-25-rad-facts-about-linux-c8d8ac30076d/'
  },
  {
    Question:
      'In Linux, which command is used for creating directories (folders)?',
    Answer: 'mkdir',
    Distractors: [ 'mkcd',
      'cd',
      'rm'],
    Explanation:
      'You create folders using the mkdir command, followed by the name of the directory e.g. mkdir photos',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-mkdir-command'
  },
  {
    Question:
      'In Unix, which command is used for exiting VIM WITHOUT saving the changes you made?',
    Answer: ':q!',
    Distractors: [ ':wq',
      ':i',
      ':r'],
    Explanation:
      'If you made some changes and would rather discard them, type :q! to forcefully quit, and press Enter/return.',
    Link: 'https://www.freecodecamp.org/news/how-to-exit-vim/'
  },
  {
    Question: 'Who created Linux?',
    Answer: 'Linus Torvalds',
    Distractors: [ 'Bill Gates',
      'Mark Zuckerberg',
      'Sergey Brin'],
    Explanation:
      'Linus Torvalds created Linux as a college student in Finland in 1991.',
    Link: 'https://www.freecodecamp.org/news/linux-is-25-yay-lets-celebrate-with-25-rad-facts-about-linux-c8d8ac30076d/'
  },
  {
    Question:
      'In Linux, which keyboard shortcut will stop running the ping command?',
    Answer: 'Ctrl-C',
    Distractors: [ 'command-D',
      'ctrl-D',
      'exit'],
    Explanation:
      'The ping command, keeps sending multiple requests every second, by default. It will keep running until you stop it with Ctrl-C.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question: 'In awk, how do you print all columns in a file named demo.txt?',
    Answer: 'awk \'{print $0}\' demo.txt',
    Distractors: [ 'awk \'{print $1}\' demo.txt',
      'awk \'{print $1, $2}\' demo.txt',
      'awk \'/^print/\' demo.txt'],
    Explanation:
      'To print all columns in a file you can use the awk command. The action you specify inside the curly braces is print $0.',
    Link: 'https://www.freecodecamp.org/news/the-linux-awk-command-linux-and-unix-usage-syntax-examples/'
  },
  {
    Question:
      'In Vim, which command is used for exiting AND saving the changes you made on a file?',
    Answer: ':wq',
    Distractors: [ ':q!',
      ':h',
      ':j'],
    Explanation:
      'If you made some changes and would like to keep them, type :wq(short for write and quit) and press Enter/return.',
    Link: 'https://www.freecodecamp.org/news/how-to-exit-vim/'
  },
  {
    Question: 'In Linux, what does .. mean in a directory path?',
    Answer: 'Refers to the parent folder',
    Distractors: [ 'Refers to the current folder',
      'Refers to no directory',
      'Refers to the root of the file structure'],
    Explanation:
      'The .. is a special path and means one level up. It refers to the parent directory.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question: 'What is the main component, the "core", of Linux?',
    Answer: 'The kernel',
    Distractors: [ 'The shell',
      'The commands',
      'The terminal window'],
    Explanation:
      'The main component of linux and its core is the kernel. It\'s the interface between the Operating System and all the hardware components and it manages all the processes.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#introductiontolinuxandshells'
  },
  {
    Question: 'In what year was the Linux Operating System created?',
    Answer: '1991',
    Distractors: [ '1990',
      '1989',
      '1992'],
    Explanation:
      'Linus Torvalds created Linux as a college student in Finland in 1991.',
    Link: 'https://www.freecodecamp.org/news/linux-is-25-yay-lets-celebrate-with-25-rad-facts-about-linux-c8d8ac30076d/'
  },
  {
    Question: 'In Linux, which command is used to compress files?',
    Answer: 'gzip',
    Distractors: [ 'tar',
      'chown',
      'diff'],
    Explanation: 'The gzip command is used to compress a file to save space',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-gzip-command'
  },
  {
    Question:
      'In Linux, which flag (or option) is used with the ln command to create a soft link?',
    Answer: '-s',
    Distractors: [ '-l',
      '-a',
      '-la'],
    Explanation:
      'You create soft links using the -s option of ln. For example, ln -s <original> <link>',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-ln-command'
  },
  {
    Question: 'In Linux, which command calculates the size of a directory?',
    Answer: 'du',
    Distractors: [ 'wc',
      'wc -c',
      'man'],
    Explanation:
      'The du command will calculate the size of a directory as a whole.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question: 'In Linux, which command opens the VIM command-line editor?',
    Answer: 'vi',
    Distractors: [ 'open',
      'open vim',
      'open vi'],
    Explanation: 'You start up VIM  by running vi in the command line.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-vim-editor-command'
  },
  {
    Question: 'Which of the following is NOT a Unix shell?',
    Answer: 'pwd',
    Distractors: [ 'ksh',
      'csh',
      'bash'],
    Explanation:
      'There are many different kind of shells available on Linux and macOS computers. A few of them that dominate the space are bash, csh, zsh, and fish.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#introductiontolinuxandshells'
  },
  {
    Question:
      'In Linux, which of the following commands is used to showcase the contents stored in a file?',
    Answer: 'less',
    Distractors: [ 'open',
      'man',
      'rm'],
    Explanation: 'The less command shows the content stored inside a file.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question:
      'In Linux, which command is used to copy the contents of one file to another one?',
    Answer: 'cp',
    Distractors: [ 'rm ',
      'rmdir',
      'touching'],
    Explanation: 'You can copy a file using the cp command.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question: 'In Linux, which command verifies that an IP address exists?',
    Answer: 'ping',
    Distractors: [ 'which',
      'uname',
      'chown'],
    Explanation:
      'The ping command pings a specific network host, on the local network or on the Internet. It verifies IP level connectivity to another computer.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question:
      'Which one of these options is layer 1 in the Open Systems Interconnection (OSI) model?',
    Answer: 'The physical layer',
    Distractors: [ 'The network layer',
      'The transport Layer',
      'The application layer'],
    Explanation:
      'Layer 1 is the physical layer. There\'s a lot of technology in Layer 1 - everything from physical network devices, cabling, to how the cables hook up to the devices.',
    Link: 'https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/'
  },
  {
    Question:
      'In Linux, which command is used to display the NAME of the operating system?',
    Answer: 'uname -o',
    Distractors: [ 'uname -r',
      'uname -k',
      'uname -u'],
    Explanation: 'The uname -o command prints the Operating System name',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command'
  },
  {
    Question: 'What does Bash stand for?',
    Answer: 'Bourne-again shell',
    Distractors: [ 'Born-again shell',
      'Basic shell',
      'Bourne-another shell'],
    Explanation:
      'All shells originate from the Bourne Shell and the name Bourne is used because its creator was Steve Bourne. Bash means Bourne-again shell. ',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cd-command'
  },
  {
    Question:
      'In Linux, which command is used to count JUST the words in a file?',
    Answer: 'wc -w',
    Distractors: [ 'wc -l',
      'wc -c',
      'wc  -5'],
    Explanation:
      'To count just the words inside a file you use the wc command with the -w option.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-wc-command'
  },
  {
    Question:
      'In Linux, which command is used for creating links between files?',
    Answer: 'ln',
    Distractors: [ 'ls',
      'link',
      'cat'],
    Explanation:
      'The ln command is used for creating links. A link is like a pointer to another file, or a file that points to another file.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-ln-command'
  },
  {
    Question:
      'In Linux, which command is used to copy a whole folder and its contents?',
    Answer: 'cp -r',
    Distractors: [ 'cp -saving',
      'mv',
      'mkdir'],
    Explanation:
      'To copy folders you need to add the -r option to recursively copy the whole folder contents.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question:
      'In Linux, which command is used to display the current running processes?',
    Answer: 'ps',
    Distractors: [ 'ls',
      'pwd',
      'echo'],
    Explanation:
      'You can list running processes using the ps command (ps means process status). The ps command displays your current running processes in real-time.',
    Link: 'https://www.freecodecamp.org/news/linux-list-processes-how-to-check-running-processes/'
  },
  {
    Question:
      'In Linux, which command deletes a directory that has NO files inside it?',
    Answer: 'rmdir',
    Distractors: [ 'mkdir',
      'rm',
      'touch'],
    Explanation:
      'You can delete a folder using rmdir. That folder must be empty.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-rmdir-command'
  },
  {
    Question:
      'In Linux, which command prints to the terminal the argument that is passed to it?',
    Answer: 'echo',
    Distractors: [ 'man',
      'print',
      'ls'],
    Explanation:
      'The echo command prints to the terminal the argument passed to it. For example, the command echo \'hello world\' will print hello world to the terminal.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question:
      'In Linux, which command provides information on all other commands available?',
    Answer: 'man',
    Distractors: [ 'echo',
      'ls',
      'pwd'],
    Explanation:
      'The man command (short for manual), provides a manual page. The page gives you a very quick overview of a command, with some handy examples of common usage scenarios.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-man-command'
  },
  {
    Question: 'Which of the following is NOT a Linux distribution?',
    Answer: 'multicsxz',
    Distractors: [ 'CentOS',
      'Debian',
      'RHEL'],
    Explanation:
      'There are different versions of Linux (called distributions)  that allow the user varying degrees of personalization and control of the operating system. This means that users can choose their Linux distributions based on their wants and needs. Some popular ones are: Ubuntu, Linux Mint, CentOS, RHEL,Arch Linux.',
    Link: 'https://www.freecodecamp.org/news/the-best-linux-tutorials/'
  },
  {
    Question: 'In Linux, which command lists the contents of a directory?',
    Answer: 'ls',
    Distractors: [ 'ln',
      'look',
      'less'],
    Explanation:
      'The ls command (short for list) is used to list files or directories in Linux and other Unix-based operating systems. It allows you to list all files or directories in the current directory.',
    Link: 'https://www.freecodecamp.org/news/the-linux-ls-command-how-to-list-files-in-a-directory-with-options/'
  },
  {
    Question:
      'In Linux, which command is used for displaying the name of the current user logged in the terminal?',
    Answer: 'whoami',
    Distractors: [ 'cat',
      'echo',
      'pwd'],
    Explanation:
      'The whoami command prints the username currently logged in to the terminal session.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-whoami-command'
  },
  {
    Question: 'In Linux, which command shows all previously executed commands?',
    Answer: 'history',
    Distractors: [ 'memory',
      'review',
      'man'],
    Explanation:
      'Every time you run a command, it\'s memorized in the history. You can display all the history using the history command.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question: 'In Linux, what does . mean in a directory path?',
    Answer: 'Refers to the current folder',
    Distractors: [ 'Refers to the parent folder',
      'Refers to the root of the file structure',
      'Refers to no directory'],
    Explanation:
      'The . is a special path indicator. It indicates the current folder.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question: 'In Linux, which command deletes a file?',
    Answer: 'rm',
    Distractors: [ 'rmdirs',
      'touch',
      'ls'],
    Explanation:
      'The rm (short for remove) command when used without options deletes files.',
    Link: 'https://www.freecodecamp.org/news/remove-a-directory-in-linux-how-to-delete-directories-and-contents-from-the-command-line/'
  },
  {
    Question:
      'In Linux, which command is used to count JUST the lines in a file?',
    Answer: 'wc -l',
    Distractors: [ 'wc -9',
      'wc -w',
      'wc -c '],
    Explanation:
      'To count just the lines inside a file you use the wc command with the -l option.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-wc-command'
  },
  {
    Question: 'What does GNU stand for?',
    Answer: 'GNU\'s not UNIX',
    Distractors: [ 'GeNeral Unix',
      'Great New Unix',
      'Greatly Needed Unix'],
    Explanation: 'GNU is a recursive acronym for \'GNU\'s not UNIX\'.',
    Link: 'https://forum.freecodecamp.org/t/the-origins-of-linux-and-the-free-software-movement-a-brief-history/19527'
  },
  {
    Question: 'Which command prints the Linux version?',
    Answer: 'uname -r',
    Distractors: [ 'uname -s',
      'uname -u',
      'uname -k'],
    Explanation: 'The r option of the uname command prints the release',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command'
  },
  {
    Question:
      'In Linux, which command is used to sort the contents of a file alphabetically and numerically?',
    Answer: 'sort',
    Distractors: [ 'wc',
      'cat',
      'tail'],
    Explanation:
      'The sort command helps you sort a file\'s contents in a particular order(either numerical or alphabetical).',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question: 'In Linux, which command changes passwords for user accounts?',
    Answer: 'passwd',
    Distractors: [ 'chpass',
      'chpasswd',
      'cpasswd'],
    Explanation:
      'Users in Linux have a password assigned. You can change the password using the passwd command.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question:
      'In Linux, how do you change permissions using the chmod command?',
    Answer: 'chmod permissions filename',
    Distractors: [ 'permissions filename chmod',
      'chmod filename',
      'chmod permissions'],
    Explanation:
      '\'permissions\' can be read, write, execute or a combination of them. \'filename\' is the name of the file for which the permissions need to change.',
    Link: 'https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/'
  },
  {
    Question:
      'In Linux, how do you change user and group ownership simultaneously?',
    Answer: 'chown user:group filename',
    Distractors: [ 'chmod user:group filename',
      'chown user::group filename',
      'chmod user::group filename'],
    Explanation: 'We can use chown to change user and group simultaneously',
    Link: 'https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/'
  },
  {
    Question:
      'In Linux, what is the correct syntax for changing permissions using absolute mode?',
    Answer: 'chmod 451 file-name',
    Distractors: [ 'permissions 451 file-name',
      'change 451 file-name',
      'chown 451 file-name'],
    Explanation:
      'Absolute mode uses numbers to represent permissions and mathematical operators to modify them.',
    Link: 'https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/'
  },
  {
    Question:
      'In Linux, which command is used to display network status and generate protocol statistics?',
    Answer: 'netstat',
    Distractors: [ 'ipconfig',
      'ifconfig',
      'netlist'],
    Explanation:
      'The netstat command can be used to display network connections and various protocol statistics.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question: 'In Linux, which command can be used to terminate a program?',
    Answer: 'kill',
    Distractors: [ 'end',
      'stop',
      'finish'],
    Explanation:
      'The kill command sends a signal which terminates or kills a particular process or group of processes.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-kill-command'
  },
  {
    Question: 'In Linux, which command can be used for cron jobs?',
    Answer: 'crontab',
    Distractors: [ 'cronaction',
      'cronset',
      'cronedit'],
    Explanation:
      'The crontab command can used to perform various actions on cron jobs.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-crontab-command'
  },
  {
    Question:
      'In Linux, which command is used to view, modify, delete, and copy partitions on a hard drive?',
    Answer: 'fdisk',
    Distractors: [ 'df',
      'split',
      'ps'],
    Explanation:
      'fdisk is used to view, create, delete, change, resize, copy and move partitions on a hard drive.',
    Link: 'https://www.freecodecamp.org/news/how-to-install-arch-linux/'
  },
  {
    Question: 'The sudo command stands for ___.',
    Answer: 'superuser do',
    Distractors: [ 'su',
      'superuser does',
      'super do'],
    Explanation: 'The sudo command stands for superuser do.',
    Link: 'https://www.freecodecamp.org/news/the-ultimate-guide-to-linux-creating-a-sudo-user/'
  },
  {
    Question:
      'In Linux, which one is the correct syntax for renaming a file called abc.txt to pqr.txt?',
    Answer: 'mv abc.txt pqr.txt',
    Distractors: [ 'mv pqr.txt abc.txt',
      'mv -a pqr.txt abc.txt',
      'mv -all pqr.txt abc.txt'],
    Explanation:
      'The correct syntax for renaming a file called abc.txt to pqr.txt is mv abc.txt pqr.txt',
    Link: 'https://www.freecodecamp.org/news/rename-file-linux-bash-command/'
  },
  {
    Question:
      'Which Linux command is used to go up one level to a parent folder?',
    Answer: 'cd ..',
    Distractors: [ 'cd',
      'cd/',
      'chdir'],
    Explanation:
      '.. is a special path used to indicate the parent folder. cd .. is used to go up one level to a parent folder.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-pwd-command'
  },
  {
    Question: 'What does Vim stand for?',
    Answer: 'Vi Improved',
    Distractors: [ 'Vi IMitation',
      'Vi Manual',
      'Vi Moolenaar'],
    Explanation:
      'Vim stands for Vi IMproved and it is a popular open-source text editor.',
    Link: 'https://www.freecodecamp.org/news/learn-vim-beginners-tutorial/'
  },
  {
    Question: 'Which Linux desktop environment has a similar UI to Windows?',
    Answer: 'KDE Plasma',
    Distractors: [ 'GNOME',
      'Xfce',
      'Mate'],
    Explanation:
      'KDE is a popular desktop environment which resembles the Windows user interface.',
    Link: 'https://www.freecodecamp.org/news/linux-basics/'
  },
  {
    Question:
      'Which set among the following is the correct set of three types of Linux file users?',
    Answer: '{user, group, other}',
    Distractors: [ '{whoami, users, group}',
      '{whoami, user, others}',
      '{user, group, all}'],
    Explanation:
      'In Linux, there are three types of users: user, group and other.',
    Link: 'https://www.freecodecamp.org/news/linux-basics/'
  },
  {
    Question:
      'Which of the following is NOT a category of file permissions in Linux?',
    Answer: 'compile',
    Distractors: [ 'execute',
      'write',
      'read'],
    Explanation:
      'In Linux, file permissions fall into three categories: read, write and execute.',
    Link: 'https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/'
  },
  {
    Question:
      'In Linux, which command is used to find files/folders matching a particular search pattern?',
    Answer: 'find',
    Distractors: [ 'who',
      'which',
      'search'],
    Explanation:
      'The find command can be used to find files or folders matching a particular search pattern. It searches recursively.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question:
      'Which of the following Linux commands calculates the total number of lines, words, and characters in a file?',
    Answer: 'wc',
    Distractors: [ 'wordcount',
      'wordc',
      'lc'],
    Explanation:
      'The wc command calculates the total number of lines, words, and characters in a file.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question:
      'In Linux, which command is used to show a user a list of groups they belong to?',
    Answer: 'groups',
    Distractors: [ 'showgroup',
      'members',
      'groupadd'],
    Explanation:
      'The groups command is used to show a user a list of groups for which they belong to. Primary and secondary are the two types of groups in Linux.',
    Link: 'https://www.freecodecamp.org/news/learn-the-basics-of-the-linux-operating-system/'
  },
  {
    Question:
      'Which Linux commands can be used to show who is logged on and what they are doing?',
    Answer: 'w',
    Distractors: [ 'top',
      'whoami',
      'which user'],
    Explanation:
      'w displays information about the users currently on the machine, and their processes. The header shows, in this order, the current time, how long the system has been running, how many users are currently logged on, and the system load averages for the past 1, 5, and 15 minutes.',
    Link: 'https://man7.org/linux/man-pages/man1/w.1.html'
  },
  {
    Question: 'In Linux, which option is used with gzip to decompress a file?',
    Answer: '-d',
    Distractors: [ '-kv',
      '-r',
      '-c'],
    Explanation:
      'gzip can also be used to decompress a file, using the -d option: gzip -d filename.gz',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question: 'In Linux, what does the dmesg command do?',
    Answer: 'shows kernel logs',
    Distractors: [ 'shows authentication logs',
      'shows syslog file',
      'shows daemon logs'],
    Explanation:
      'The dmesg command is a Linux utility that shows kernel-related messages that have been taken from the kernel ring buffer.',
    Link: 'https://en.wikipedia.org/wiki/Dmesg'
  },
  {
    Question: 'In Linux, what does the inode mean?',
    Answer: 'Unique name given by the operating system to each file',
    Distractors: [ 'kernel nodes',
      'does not exist',
      'linux nodes'],
    Explanation:
      'Each file is given a unique name by the operating system which is called as the inode.',
    Link: 'https://en.wikipedia.org/wiki/Inode'
  },
  {
    Question: 'What does CLI stand for?',
    Answer: 'Command Line Interface',
    Distractors: [ 'Computer Linux Index',
      'Code Line Interface',
      'Code Line Index'],
    Explanation: 'CLI stands for Command Line Interface',
    Link: 'https://en.wikipedia.org/wiki/Command-line_interface'
  },
  {
    Question: 'In Linux, what does the ls -d command do?',
    Answer: 'lists out only the directories themselves,not their contents ',
    Distractors: [ 'lists only the files starting with',
      'lists files and sorts them alphabetically',
      'show deleted files'],
    Explanation:
      'In Linux, the -d or --directory option is used to list the directories but not the directory contents.',
    Link: 'https://man7.org/linux/man-pages/man1/ls.1.html'
  },
  {
    Question:
      'In Linux, how do you print the last column of a file named demo.txt?',
    Answer: 'awk \'{print $NF}\' demo.txt',
    Distractors: [ 'awk \'{print $0}\' demo.txt',
      'awk \'{print $1, $4}\' demo.txt',
      'awk \'/^print/\' demo.txt'],
    Explanation:
      'While using the awk command, you can use $NF which represents the last field in a record, to print the last column of a file',
    Link: 'https://www.freecodecamp.org/news/the-linux-awk-command-linux-and-unix-usage-syntax-examples/'
  },
  {
    Question:
      'In Linux, which command is used to strip directory and suffix from filenames?',
    Answer: 'basename',
    Distractors: [ 'dirname',
      'pwd',
      'ls'],
    Explanation:
      'The basename command can be used to print the filename from the given pathname. It will delete any prefix up to the last forward-slash character and return the result.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-basename-command'
  },
  {
    Question:
      'In Linux, which command is used to display the amount of available free disk space for file systems?',
    Answer: 'df',
    Distractors: [ 'du',
      'free',
      'top'],
    Explanation:
      'The df command stands for disk-free and it is used to check the available disk space in Linux.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-df-command'
  },
  {
    Question:
      'In Linux, which command is used to go back to the user\'s home directory?',
    Answer: 'cd ~',
    Distractors: [ 'cd /',
      'clear',
      'ls -la'],
    Explanation:
      'The cd ~ command can be used to get back to home directory in Linux.',
    Link: 'https://www.freecodecamp.org/news/linux-command-line-tutorial/'
  },
  {
    Question:
      'Which command is used in the Vim editor to delete a single character?',
    Answer: 'x',
    Distractors: [ 'y',
      'a',
      'z'],
    Explanation:
      'If you want to delete a single character in the Vim editor, you can use the x command.',
    Link: 'https://www.freecodecamp.org/news/vim-editor-modes-explained/'
  },
  {
    Question:
      'In Linux, which command is used to find the difference between two files?',
    Answer: 'diff',
    Distractors: [ 'uniq',
      'echo',
      'chown'],
    Explanation:
      'In Linux, you can use the diff command to display the difference between two files\'.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-diff-command'
  },
  {
    Question:
      'In Linux, which command is used to used to securely remove data?',
    Answer: 'shred',
    Distractors: [ 'rm',
      'mkdir',
      'dd'],
    Explanation:
      'The shred command helps to overwrite the data in place several times. This makes it harder for third party software and hardware probing to recover the data. That is why it\'s commonly used to securely remove data.',
    Link: 'https://www.freecodecamp.org/news/securely-erasing-a-disk-and-file-using-linux-command-shred/'
  },
  {
    Question:
      'In Linux, which the command is used to remove an empty directory?',
    Answer: 'rmdir',
    Distractors: [ 'remove',
      'rdir',
      'delete'],
    Explanation:
      'If you have an empty directory that you would like to remove, then you can use the rmdir command in the terminal.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-rmdir-command'
  },
  {
    Question:
      'In Linux, which command is used to create a new file and open it in the Vim editor?',
    Answer: 'vi filename.extension',
    Distractors: [ 'new filename.extension',
      'create filename',
      'None of the above'],
    Explanation:
      'vi filename.extension is used to create a new file using the terminal and open it in the Vim editor.',
    Link: 'https://www.freecodecamp.org/news/learn-vim-beginners-tutorial/'
  },
  {
    Question:
      'In Linux, which command is used to list the last 10 lines of a file?',
    Answer: 'tail -10 filename',
    Distractors: [ 'bottom -10 filename',
      'last -10 filename',
      'filename -10'],
    Explanation:
      'tail -10 filename is used to list the last 10 lines of a file.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook'
  },
  {
    Question:
      'In Linux, which command is used to display the first 10 lines of a file?',
    Answer: 'head -10 \'filename\'',
    Distractors: [ 'filename -10',
      'filename -f',
      'ls filename -10'],
    Explanation:
      'The head -10 \'filename\' command is used to display the first 10 lines of a file.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook'
  },
  {
    Question:
      'In Linux, which command is used to list files with its permissions and users access?',
    Answer: 'ls -l',
    Distractors: [ 'ls allusers',
      'ls all',
      'None of These'],
    Explanation:
      'In Linux, the ls -l command is used to long list the files which displays the permissions of files and user access',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook'
  },
  {
    Question:
      'In Linux, which command is used to list all files with the .js extension?',
    Answer: 'ls *.js',
    Distractors: [ 'ls js',
      'ls .js files',
      'None of These'],
    Explanation:
      'In Linux, this formatter with the ls command can be used to list all files with similar postfix or extension',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook'
  },
  {
    Question:
      'In Linux, which command is used to list the file extensions in alphabetical order?',
    Answer: 'ls -X',
    Distractors: [ 'ls -a',
      'ls alpha',
      'ls -extension'],
    Explanation:
      'The ls -X command is used to list the file extensions in alphabetical order.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question:
      'In Linux, which command is used to concatenate two files and display the output?',
    Answer: 'cat file1 file2 file3',
    Distractors: [ 'Cat file1 + file2',
      'Cat file1 file2 > file3',
      'Cat file1 > file2'],
    Explanation:
      'The cat command prints a file\'s content to the standard output',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
  },
  {
    Question:
      'In Linux, what are four operations that can be done with the cat command?',
    Answer: 'create, read, write and append files',
    Distractors: [ 'create, delete, reverse and append files',
      'sort, destroy, move and append files',
      'reverse, read, write and multiply files'],
    Explanation: 'The cat command can create, read, write and append files.',
    Link: 'https://www.freecodecamp.org/news/the-cat-command-in-linux-how-to-create-a-text-file-with-cat-or-touch/'
  },
  {
    Question:
      'In Linux, which of the following options is the correct way to create a new file?',
    Answer: '> filename.extension',
    Distractors: [ 'cd filename.extension',
      'ls filename.extension',
      'None of the above'],
    Explanation:
      '> greater than operator is used to create a new file in Linux.',
    Link: 'https://www.freecodecamp.org/news/learn-the-50-most-used-linux-terminal-commands/'
  },
  {
    Question: 'In Linux, what does elif stand for?',
    Answer: 'else if',
    Distractors: [ 'elif condition',
      'elif statement',
      'None of the above'],
    Explanation: 'elif is an else if statement in Shell Scripting.',
    Link: 'https://www.freecodecamp.org/news/shell-scripting-crash-course-how-to-write-bash-scripts-in-linux/'
  },
  {
    Question: 'In Linux, Which command is used to stop a running process?',
    Answer: 'kill -9 [process ID]',
    Distractors: [ 'pidof [OPTIONS] NAME',
      'ps -ef',
      'stop [signal] PID'],
    Explanation: 'The kill command is used to stop a running process.',
    Link: 'https://www.linuxfoundation.org/blog/blog/classic-sysadmin-how-to-kill-a-process-from-the-command-line'
  },
  {
    Question:
      'In Linux, which command is used to perform a binary file comparison and display the differences between two files?',
    Answer: 'cmp',
    Distractors: [ 'diff',
      'compare',
      'contrast'],
    Explanation:
      'The \'cmp\' command is used to compare two binary files byte by byte and displays the differences between them, if any.',
    Link: 'https://linux.die.net/man/1/cmp'
  },
  {
    Question:
      'In Linux, what command is used to analyze and display detailed information about system resource usage by processes?',
    Answer: 'top',
    Distractors: [ 'ps',
      'htop',
      'uptime'],
    Explanation:
      'The \'top\' command provides a real-time view of system resource usage by processes, including CPU, memory, and more.',
    Link: 'https://linux.die.net/man/1/top'
  },
  {
    Question:
      'Which Linux command is used to securely copy files and directories over SSH?',
    Answer: 'scp',
    Distractors: [ 'rsync',
      'ftp',
      'wget'],
    Explanation:
      'The \'scp\' command is used for secure copy over SSH, allowing files and directories to be transferred securely between hosts.',
    Link: 'https://linux.die.net/man/1/scp'
  },
  {
    Question: 'In Linux, what is the purpose of the \'strace\' command?',
    Answer:
      'The \'strace\' command is used to trace system calls and signals made by a process.',
    Distractors: [ 'The \'strace\' command is used to check network status.',
      'The \'strace\' command is used to list running processes.',
      'The \'strace\' command is used to analyze memory usage.'],
    Explanation:
      'The \'strace\' command can be an invaluable tool for diagnosing issues with programs and understanding their behavior at a system call level. This command is used to trace system calls and signals made by a process. To use \'strace\', you specify the program\'s name and its arguments as parameters.',
    Link: 'https://linux.die.net/man/1/strace'
  },
  {
    Question:
      'What Linux command is used to view and edit the system\'s crontab, which controls scheduled tasks and cron jobs?',
    Answer: 'crontab',
    Distractors: [ 'cronjob',
      'taskcron',
      'cronedit'],
    Explanation:
      'The \'crontab\' command is used to view and edit the cron jobs for a user. It opens the user\'s crontab file for editing.',
    Link: 'https://linux.die.net/man/1/crontab'
  },
  {
    Question: 'How does Linux work on Ubuntu?',
    Answer:
      'The Linux kernel serves as an interface between hardware and software.',
    Distractors: [ 'Ubuntu kernel is entirely separate from Linux.',
      'Ubuntu uses a proprietary operating system.',
      'Linux operates without a kernel on Ubuntu.'],
    Explanation:
      'The Linux kernel, which manages system resources, acts as the bridge between the hardware and software on Ubuntu. It initializes hardware, establishes the system environment, loads necessary drivers, and allows applications to run on top of it. This fundamental structure is common to all Linux distributions, including Ubuntu.',
    Link: 'https://www.freecodecamp.org/news/introduction-to-linux/'
  },
  {
    Question:
      'Which package manager is commonly used in Debian-based Linux distributions, such as Ubuntu?',
    Answer: 'APT',
    Distractors: [ 'YUM',
      'DNF',
      'Pacman'],
    Explanation:
      'APT (Advanced Package Tool) is the package manager commonly used in Debian-based distributions, while the other options are more associated with other Linux distributions.',
    Link: 'https://linux.die.net/man/8/apt'
  },
  {
    Question: 'What is the primary purpose of the halt command in Linux?',
    Answer:
      'It initiates the system shutdown process and powers off the computer.',
    Distractors: [ 'It moves files from one directory to another.',
      'It displays system information and statistics.',
      'It reboots the system.'],
    Explanation:
      'When you use the halt command in Linux, it sends a signal to the system to initiate a controlled shutdown. The operating system will gracefully terminate running processes and then power off the computer, effectively shutting it down.',
    Link: 'https://man7.org/linux/man-pages/man8/halt.8.html'
  },
  {
    Question:
      'In Linux, what can we use to configure a custom command with a unique set of options?',
    Answer: 'alias',
    Distractors: [ 'suo',
      'umask',
      'grep'],
    Explanation:
      'Some commands fail to provide enough information and context. When you are in need of a custom solution, using an alias to refer to a more useful base command can be very helpful.',
    Link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-alias-command'
  },
  {
    Question:
      'What does Ctrl + r (windows) or ⌘ + r(mac) do in the default ubuntu terminal?',
    Answer: 'query the command history',
    Distractors: [ 'to call find & replace text function',
      'to redo last action',
      'to reload current shell'],
    Explanation:
      'The Ctrl + r (windows) or ⌘ + r(mac) shortcut helps you query the command history by suggesting autocomplete.',
    Link: 'https://www.freecodecamp.org/news/bash-command-line-tips-to-help-you-work-faster/'
  },
  {
    Question:
      'In Ubuntu, which of the following commands adds the user named \'quincy\' to a group named \'writers\'?',
    Answer: 'usermod -a -G writers quincy',
    Distractors: [ 'usermod -g writers quincy',
      'useradd writers quincy',
      'group writers -a quincy'],
    Explanation:
      'You can use the usermod command to add a user to a group. The -a parameter means "append" and the -G parameter adds a group as a secondary group',
    Link: 'https://www.freecodecamp.org/news/linux-user-groups-explained-how-to-add-a-new-group-a-new-group-member-and-change-groups/'
  },
  {
    Question:
      'In Linux, which command below does not display logs?',
    Answer: 'cd',
    Distractors: [ 'dmesg',
      'journalctl',
      'cat /var/log/syslog'],
    Explanation: 'The cd command stands for change directory and is used to change to a directory in the terminal. The cd command is not used to display logs.',
    Link: 'https://www.youtube.com/watch?v=ROjZy1WbCIA&t=3472s'
  },
  {
    Question: 'In Linux, what is a daemon?',
    Answer: 'a program that automatically runs in the background',
    Distractors: [ 'a daemon is a summoned cyber spirit',
      'a corrupted program that cannot be uninstalled',
      'a MAC OS specific program that is unsupported in Linux OS'],
    Explanation: 'a daemon is a computer program that runs as a background process, rather than being under the direct control of an interactive user',
    Link: 'https://www.freecodecamp.org/news/learn-linux-for-beginners-book-basic-to-advanced/'
  },
  {
    Question: 'In Linux, when you remove a user\'s account using the \'userdel\' command, what happens to the data files stored in that user\'s directory?',
    Answer: 'The \'userdel\' command will delete all data stored by that user',
    Distractors: [ 'The \'userdel\' command will delete the user account, and archive all data files and directories from that user\'s home directory to a new read-only directory',
      'The \'userdel\' command will fail if there are data files remaining in that user\'s home directory',
      'The \'userdel\' command is the incorrect command and the remusr command should be used instead'],
    Explanation:
      'The \'userdel\' command will delete the user account, along with the home directory including any data files owned by that user.',
    Link: 'https://www.freecodecamp.org/news/how-to-manage-users-in-linux/'
  }
];

export default linuxQuiz;
