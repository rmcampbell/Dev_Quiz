const linuxQuiz = {
  category: 'Linux',
  questions: [
    {
      question: 'Which Linux tool is commonly used to analyze CPU performance and identify bottlenecks?',
      answer: 'Perf',
      distractors: [
        'top',
        'htop',
        'ps'
      ],
      explanation: 'Perf is a powerful Linux tool used to analyze CPU performance, monitor system events, and identify bottlenecks',
      link: 'https://www.freecodecamp.org/news/helpful-linux-commands-you-should-know'
    },
    {
      question: 'What does the -q option do in most command-line tools?',
      answer: 'Suppresses output',
      distractors: [
        'Enables verbose output',
        'Runs the command in the background',
        'Stops the command execution'
      ],
      explanation: 'In most command-line tools, the -q or --quiet option is used to suppress the output of the command, making the execution silent unless there are errors.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'Which of the following is not a mode in the Vim editor?',
      answer: 'Write',
      distractors: [
        'Insert',
        'Visual',
        'Command'
      ],
      explanation: 'In the Vim editor, there is no mode called \'Write.\' The modes include Insert, Visual, and Command. \'Write\' refers to a command (\':w\') used to save changes, not a mode.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'Which of the following commands is used to create a new window for editing a file?',
      answer: 'gvim',
      distractors: [
        'vim',
        'gedit',
        'nvim'
      ],
      explanation: 'The gvim command causes the editor to open a new window for editing the file whereas the vim command causes the editing to occur inside your command window.',
      link: 'https://vimdoc.sourceforge.net/htmldoc/usr_02.html#02.1'
    },
    {
      question: 'Which command allows you to run commands in a different root directory?',
      answer: 'chroot',
      distractors: [
        'chmod',
        'cd',
        'cp'
      ],
      explanation: 'The chroot, short for “change root”, command changes the root directory and allows you to run commands in a different root directory.',
      link: 'https://www.freecodecamp.org/news/helpful-linux-commands-you-should-know'
    },
    {
      question: 'What is the primary purpose of the /etc/passwd file in Linux?',
      answer: 'Storing user account information, including usernames, UIDs, home directories, and default shells.',
      distractors: [
        'Storing system configuration settings.',
        'Managing software packages.',
        'Storing system log files.'
      ],
      explanation: 'The /etc/passwd file contains user account information used by the system to authenticate and manage users.',
      link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
    },
    {
      question: 'What is the User ID (UID) 0 typically reserved for in Linux?',
      answer: 'The root user, which has superuser privileges.',
      distractors: [
        'Normal users with UID 0.',
        'System accounts with UID 0.',
        'Guest users.'
      ],
      explanation: 'UID 0 is reserved for the superuser (root) who has unrestricted access to the system.',
      link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
    },
    {
      question: 'How does Linux represent the root user in the shell prompt when logged in as root?',
      answer: '#',
      distractors: [
        '@',
        '$',
        '!'
      ],
      explanation: 'The root user\'s shell prompt is typically displayed as \'#\' to signify the superuser\'s power and responsibility.',
      link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
    },
    {
      question: 'Which of the following operations typically require root privileges in Linux?',
      answer: 'Creating, removing and managing user accounts, managing software packages, removing or modifying system files, restarting system services.',
      distractors: [
        'Running network clients, using devices such as printers, accessing files with proper permissions, executing SUID-root applications.',
        'Managing user passwords, changing the system time, viewing system logs, creating user groups.',
        'Installing and updating software, using peripheral devices, reading user data, sharing files over the network.'
      ],
      explanation: 'Root privileges are necessary for critical system administration tasks.',
      link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
    },
    {
      question: 'What is the key difference between `su` and `sudo` in Linux for granting root access?',
      answer: '`su` requires the root password, while `sudo` requires the user\'s password and provides more fine-grained control over permissions.',
      distractors: [
        '`su` requires the user\'s password, while `sudo` requires the root password and provides detailed logging features.',
        '`su` and `sudo` both require the root password and have the same level of security.',
        '`su` requires no password, while `sudo` requires both the root and user passwords for authentication.'
      ],
      explanation: 'The methods differ in password requirements and security features.',
      link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
    },
    {
      question: 'What file is responsible for configuring user privileges when using `sudo` in Linux?',
      answer: '/etc/sudoers',
      distractors: [
        '/etc/passwd',
        '/etc/shadow',
        '/etc/group'
      ],
      explanation: '/etc/sudoers defines who has the right to use `sudo` and the scope of their privilege.',
      link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
    },
    {
      question: 'Where are sudo command logs typically stored on a Linux system?',
      answer: '/var/log/auth.log or /var/log/secure',
      distractors: [
        '/var/log/syslog',
        '/var/log/messages',
        '/var/log/sudo.log'
      ],
      explanation: 'Logging is crucial for tracking and accountability of `sudo` use.',
      link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
    },
    {
      question: 'What hashing algorithm is commonly used to encrypt passwords on Linux systems?',
      answer: 'SHA-512 (Secure Hashing Algorithm 512 bits)',
      distractors: [
        'MD5 (Message Digest Algorithm 5)',
        'AES (Advanced Encryption Standard)',
        'RSA (Rivest–Shamir–Adleman)'
      ],
      explanation: 'SHA-512 is widely used for securing passwords in Linux.',
      link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
    },
    {
      question: 'What is the purpose of password aging in Linux?',
      answer: 'To prompt users to create new passwords after a specific period, ensuring passwords have a limited usability period.',
      distractors: [
        'To force users to change their passwords daily.',
        'To enforce strong password policies.',
        'To store old passwords for historical reference.'
      ],
      explanation: 'Password aging enhances security by requiring password updates.',
      link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
    },
    {
      question: 'What is the recommended practice for handling known security vulnerabilities in Linux?',
      answer: 'Install updates promptly and take advantage of automatic update mechanisms.',
      distractors: [
        'Ignore known vulnerabilities as they are usually not exploited.',

        'Manually patch vulnerabilities only when they become critical.',
        'Reinstall the operating system to resolve vulnerabilities.'
      ],
      explanation: 'Prompt updates are essential to address known vulnerabilities.',
      link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
    },
    {
      question: 'Where are user passwords typically stored in modern Linux systems?',
      answer: '/etc/shadow',
      distractors: [
        '/etc/passwd',
        '/etc/passwords',
        '/var/log/auth.log'
      ],
      explanation: 'Passwords are stored in an encrypted format in the /etc/shadow file.',
      link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
    },
    {
      question: 'What is the purpose of using Pluggable Authentication Modules (PAM) for password management in Linux?',
      answer: 'To enforce strong password policies and automatically verify password strength during password creation or modification.',
      distractors: [
        'To provide a secure environment for running applications.',
        'To create user accounts with default settings.',
        'To log all user authentication attempts.'
      ],
      explanation: 'PAM is used to enhance password security by ensuring strong passwords.',
      link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
    },
    {
      question: 'How can you enhance the security of the boot process in Linux?',
      answer: 'By setting a secure password for the bootloader to prevent unauthorized changes during boot.',
      distractors: [
        'By encrypting the entire hard drive.',
        'By disabling the bootloader entirely.',
        'By setting a BIOS password.'
      ],
      explanation: 'Bootloader passwords prevent unauthorized changes during boot.',
      link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
    },
    {
      question: 'What is the purpose of the Control Groups (cgroups) feature in Linux?',
      answer: 'To group processes and associate finite resources to each cgroup, enhancing resource management and isolation.',
      distractors: [
        'To control access to hardware devices.',
        'To manage user accounts and groups.',
        'To encrypt files and directories.'
      ],
      explanation: 'Control Groups (cgroups) help manage and isolate processes.',
      link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
    },
    {
      question: 'What type of accounts have User IDs (UIDs) ranging from 1000 or greater in Linux?',
      answer: 'Normal user accounts.',
      distractors: [
        'Root accounts.',
        'System accounts.',
        'Guest accounts.'
      ],
      explanation: 'UIDs of 1000 or greater are typically assigned to normal users.',
      link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
    },
    {
      question: 'What is the purpose of setting a bootloader password in Linux?',
      answer: 'To prevent unauthorized changes to the bootloader configuration during the boot process.',
      distractors: [
        'To encrypt the entire hard drive.',
        'To lock the user out of the system entirely.',
        'To protect the BIOS settings.'
      ],
      explanation: 'Bootloader passwords enhance boot process security.',
      link: 'https://www.freecodecamp.org/news/introduction-to-linux-part-2/'
    },
    {
      question: 'In Linux, Which command is used to convert and copy files with specific size?',
      answer: 'dd',
      distractors: [
        'cp',
        'mv',
        'df'
      ],
      explanation: 'The dd command is used to convert data along with copying files of specific size.',
      link: 'https://www.freecodecamp.org/news/linux-example-bash-command-line/#linux-dd-command-example'
    },
    {
      question: 'In Linux, Which command is used to export variables to child processes?',
      answer: 'export',
      distractors: [
        'env',
        'move',
        'df'
      ],
      explanation: 'The export command is used to export variables to child processes.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-export-command'
    },
    {
      question: 'In Linux, which command option is used to perform a case-insensitive search when searching for text patterns?',
      answer: 'grep -i',
      distractors: [
        'grep -c',
        'grep -v',
        'grep -s'
      ],
      explanation: 'The grep -i command is used to perform a case-insensitive search, allowing you to find text patterns ignoring the case.',
      link: 'https://man7.org/linux/man-pages/man1/grep.1.html'
    },
    {
      question: 'In Linux, which command is used to set limits on a file size?',
      answer: 'ulimit',
      distractors: [
        'fsize',
        'flimit -r',
        'usize'
      ],
      explanation: 'ulimit is a Linux command that is used to get and set a limit on a file size.',
      link: 'https://man7.org/linux/man-pages/man3/ulimit.3.html'
    },
    {
      question: 'In Linux, which one of the following commands can be used to create a symbolic link between files?',
      answer: 'ln -s',
      distractors: [
        'ls',
        'lp',
        'link'
      ],
      explanation: 'In Linux, the ln -s command is used to create a symbolic link between files.',
      link: 'https://man7.org/linux/man-pages/man1/ln.1.html'
    },
    {
      question: 'Which command finds memory being used by Linux?',
      answer: 'All of these',
      distractors: [
        'free-m',
        'htop',
        'vmstat'
      ],
      explanation: 'The top command is used to display dynamic real-time information. You can use free-m, htop, top or vmstat to find memory being used by Linux.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-top-command'
    },
    {
      question: 'In Linux, which option is used with the uname command to print the processor architecture name?',
      answer: '-p',
      distractors: [
        '-arch',
        '-ps',
        '-pname'
      ],
      explanation: 'In Linux, the -p option can be used with the uname command to print the processor architecture name.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command'
    },
    {
      question: 'In Linux, which option is used with the uname command to print the node network name?',
      answer: '-n',
      distractors: [
        '-network',
        '-node',
        '-ntwrk'
      ],
      explanation: 'In Linux, the -n option can be used with the uname command to print the node network name.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command'
    },
    {
      question: 'In Linux, which command converts input and uses it as an argument for another command?',
      answer: 'xargs',
      distractors: [
        'convert',
        'stdin',
        'argv'
      ],
      explanation: 'The xargs command is used in a UNIX shell to convert input from the standard input and use it as an argument for another command.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-xargs-command'
    },
    {
      question: 'In Linux, which command is used to display all the users logged in to the system?',
      answer: 'who',
      distractors: [
        'all-users',
        'show',
        'whoami'
      ],
      explanation: 'The who command displays the users logged in to the system.',
      link: 'https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/'
    },
    {
      question: 'In Linux, which command is used to remove the writing and executing permissions for `group` and `other`?',
      answer: 'chmod go-wx list',
      distractors: [
        'chmod go+wx list',
        'chmod a-wx list',
        'chmod go+r list'
      ],
      explanation: 'The `chmod go-wx list` is used to remove the writing and executing permissions for `group` and `other` for a file named list.',
      link: 'https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/'
    },
    {
      question: 'In Linux, which one of the following commands determines file type?',
      answer: 'file',
      distractors: [
        'kind',
        'wget',
        'which'
      ],
      explanation: 'The command `file` determines file type.',
      link: 'https://man7.org/linux/man-pages/man1/file.1.html'
    },
    {
      question: 'In Linux, which one of the following commands locates the binary, source, and manual page files for a command?',
      answer: 'whereis <command>',
      distractors: [
        'locate <command>',
        'wget <command>',
        'which <command>'
      ],
      explanation: 'The command `whereis` locates the binary, source, and manual page files for a command.',
      link: 'https://man7.org/linux/man-pages/man1/whereis.1.html'
    },
    {
      question: 'In Linux, which one of the following commands lists threads of a process?',
      answer: 'ps -T -p <PID>',
      distractors: [
        'ps -ef',
        'top thread <PID>',
        'show_thread <PID>'
      ],
      explanation: 'The option `-p` selects the process by PID, and the option `-T` is to show threads.',
      link: 'https://man7.org/linux/man-pages/man1/ps.1.html'
    },
    {
      question: 'In Linux, which one of the following commands concatenates and prints files in reverse?',
      answer: 'tac',
      distractors: [
        'catr',
        'cat_reverse',
        'print_reverse'
      ],
      explanation: 'The command `tac` prints files in reverse.',
      link: 'https://man7.org/linux/man-pages/man1/tac.1.html'
    },
    {
      question: 'In Linux, which one of the following commands repeatedly outputs a line with all specified string(s) or just `y`?',
      answer: 'yes',
      distractors: [
        'no',
        'loop',
        'iterate'
      ],
      explanation: 'The command `yes` repeatedly outputs a line with all specified string(s), or `y`.',
      link: 'https://man7.org/linux/man-pages/man1/yes.1.html'
    },
    {
      question: 'In Linux, which one is not a communication command?',
      answer: 'grep',
      distractors: [
        'mesg',
        'mail',
        'write'
      ],
      explanation: 'The grep filter searches a file for a particular pattern of characters, and displays all lines that contain that pattern.',
      link: 'https://www.freecodecamp.org/news/grep-command-tutorial-how-to-search-for-a-file-in-linux-and-unix/'
    },
    {
      question: 'Which of the following commands creates a file without opening it?',
      answer: 'touch <filename>',
      distractors: [
        'nano <filename>',
        'cat <filename>',
        'cp <filename>'
      ],
      explanation: 'The touch <filename> command creates a new file without opening it which can be verified using the ls command.',
      link: 'https://www.freecodecamp.org/news/linux-basics/'
    },
    {
      question: 'In Linux, which command grants every permission to everyone?',
      answer: 'chmod 777',
      distractors: [
        'chmod 111',
        'chmod 724',
        'chmod 666'
      ],
      explanation: 'The command chmod 777 activates all the permission access to owner, group and others by summing 4, 2, 1 on the octal base.',
      link: 'https://www.freecodecamp.org/news/how-to-change-file-permissions-with-the-chmod-command-on-linux/'
    },
    {
      question: 'In Linux, which command helps in listing all the environment variables?',
      answer: 'printenv',
      distractors: [
        'lsenv',
        'listenv',
        'printvar'
      ],
      explanation: 'The command printenv helps in listing all the environment variables, set either by the system, or by your own shell scripts and configuration.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-printenv-command'
    },
    {
      question: 'In Linux, what is a maximum length for a filename?',
      answer: '255 Bytes',
      distractors: [
        '225 Bytes',
        '235 Bytes',
        '295 Bytes'
      ],
      explanation: 'The maximum length for a file name is 255 bytes. The maximum combined length of both the file name and path name is 4096 bytes.',
      link: 'https://www.ibm.com/docs/en/spectrum-protect/8.1.9?topic=parameters-file-specification-syntax'
    },
    {
      question: 'In Linux, what does the resize2fs command do?',
      answer: 'This can be used to change the size of an ext2 or ext3 filesystem.',
      distractors: [
        'This is used manipulate the size of partitions.',
        'This is used to create an ext2, ext3, or ext4 filesystem',
        'This is used to check the family of filesystems.'
      ],
      explanation: 'The resize2fs program will resize ext2, ext3, or ext4 file systems. It can be used to enlarge or shrink an unmounted file system located on the device. The resize2fs program does not manipulate the size of partitions.',
      link: 'http://manpages.ubuntu.com/manpages/bionic/man8/resize2fs.8.html'
    },
    {
      question: 'In Linux, which command is used to display information about the processes using a filesystem?',
      answer: 'fuser',
      distractors: [
        'ps',
        'top',
        'grep'
      ],
      explanation: 'The fuser utility displays the process IDs of the processes that are using the files specified as arguments.',
      link: 'https://docs.oracle.com/cd/E88353_01/html/E72487/fuser-8.html'
    },
    {
      question: 'In Linux, which command prints the path to the current directory you are in?',
      answer: 'pwd',
      distractors: [
        'cat',
        'cd',
        'ls'
      ],
      explanation: 'pwd(short for print working directory) prints the current folder path and is helpful when you are lost in the terminal.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-pwd-command'
    },
    {
      question: 'In Linux, which of the following is the pipe symbol?',
      answer: '|',
      distractors: [
        '/',
        '+',
        '[]'
      ],
      explanation: 'With the pipe symbol (|), the output of one command serves as the input to another.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cd-command'
    },
    {
      question: 'In Linux, which command is used to send HTTP requests?',
      answer: 'curl',
      distractors: [
        'tar',
        'uname',
        'gzip'
      ],
      explanation: 'Curl is a command-line tool that allows us to do HTTP requests from shell',
      link: 'https://www.freecodecamp.org/news/how-to-start-using-curl-and-why-a-hands-on-introduction-ea1c913caaaa/'
    },
    {
      question: 'In Linux, which command is used to remove adjacent duplicate lines inside a file?',
      answer: 'uniq',
      distractors: [
        'sort',
        'rm',
        'rmdir'
      ],
      explanation: 'The uniq command removes duplicate lines in a file, by default.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In Linux, which command is used to create multiple nested folders?',
      answer: 'mkdir -p',
      distractors: [
        'mkdir -27',
        'makedir',
        'makedir -p'
      ],
      explanation: 'You can create multiple nested folders by adding the -p option to the mkdir command.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In the vim editor, which mode helps us to copy, paste and delete the text?',
      answer: 'visual mode',
      distractors: [
        'yanking mode',
        'insert mode',
        'normal mode'
      ],
      explanation: 'Visual Mode in vim helps the user to copy, paste and delete the text like a normal editor.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-vim-editor-command'
    },
    {
      question: 'In Linux, which is the default shell?',
      answer: 'Bourne Again SHell',
      distractors: [
        'PowerSHell',
        'Emacs',
        'Fish'
      ],
      explanation: 'Bash (short for Bourne Again SHell) is the most widely used shell, packaged by default for most Linux distributions',
      link: 'https://www.freecodecamp.org/news/linux-command-line-bash-tutorial/'
    },
    {
      question: 'In Linux, which command is used to create an archive?',
      answer: 'tar',
      distractors: [
        'gzip',
        'gunzip',
        'diff'
      ],
      explanation: 'The tar command is used to create an archive, grouping multiple files in a single file, without compressing them',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-tar-command'
    },
    {
      question: 'What is the grep command used for?',
      answer: 'Searching through text in the given file',
      distractors: [
        'Move the contents of a file to another one',
        'Rename the file',
        'Delete all text in a file'
      ],
      explanation: 'grep stands for Globally Search For Regular Expression and Print out. It is a command line tool used in UNIX and Linux systems to search a specified pattern in a file or group of files.',
      link: 'https://www.freecodecamp.org/news/grep-command-tutorial-how-to-search-for-a-file-in-linux-and-unix/'
    },
    {
      question: 'In Linux, which command is used to rename files and folders?',
      answer: 'mv',
      distractors: [
        'touch',
        'mkdir',
        'rm'
      ],
      explanation: 'You rename files and folders by using the mv(short for move)  command.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In Linux, what does the ls -a command do?',
      answer: 'lists out the directories and files - including all hidden files',
      distractors: [
        'lists only the hidden files',
        'lists files and then deletes them',
        'show deleted files'
      ],
      explanation: 'The ls -a(short for all) command lists all directories(folders) and files in the current directory. This includes all hidden files. The -a flag(or option) shows hidden files. Hidden files are files that start with a dot (.)',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#introductiontolinuxandshells'
    },
    {
      question: 'In Linux, which command is used to change the owner of a file/directory?',
      answer: 'chown',
      distractors: [
        'uname',
        'whoami',
        'echo'
      ],
      explanation: 'Every file/directory in an Operating System like Linux or macOS (and every UNIX system in general) has an owner. The owner of a file can do everything with it. It can decide the fate of that file. The owner (and the root user) can change the owner to another user, too, using the chown command.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In grep, which wildcard can you use to select ALL files in a directory?',
      answer: '*',
      distractors: [
        '?',
        '[]',
        '!'
      ],
      explanation: 'You can use the wildcard (*) to select all files in a directory. For example the ls * command would list ALL files in the current directory.',
      link: 'https://www.freecodecamp.org/news/grep-command-tutorial-how-to-search-for-a-file-in-linux-and-unix/'
    },
    {
      question: 'In Linux, which command displays information about the Operating System?',
      answer: 'uname',
      distractors: [
        'echo',
        'man',
        'find'
      ],
      explanation: 'Calling uname without any options will return the Operating System codename. The m option shows the hardware name and the p option prints the processor architecture name.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command'
    },
    {
      question: 'In the Vim text editor, which command is used to move the cursor one character to the left?',
      answer: 'h',
      distractors: [
        'j',
        'k',
        'l'
      ],
      explanation: 'To move the cursor one character to the left, use the h command.',
      link: 'https://www.freecodecamp.org/news/vim-editor-modes-explained/'
    },
    {
      question: 'In Linux, which command is used for creating files?',
      answer: 'touch',
      distractors: [
        'mv',
        'man',
        'mkdir'
      ],
      explanation: 'You create an empty file using the touch command, followed by the name of the file e.g. touch demo.txt',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-touch-command'
    },
    {
      question: 'In Linux, which command is used for counting the total amount of lines, words, and bytes in a file?',
      answer: 'wc',
      distractors: [
        'countl',
        'countw',
        'countwl'
      ],
      explanation: 'The wc command gives us useful information about a file. The first column returned in the output  is the number of lines. The second is the number of words. The third is the number of bytes.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-wc-command'
    },
    {
      question: 'In Linux, which command is used to move into a directory?',
      answer: 'cd',
      distractors: [
        'mv',
        'pwd',
        'rm'
      ],
      explanation: 'Once you\'ve created a folder, you can move into it with the cd command(which stands for change directory). You invoke it specifying a folder to move into. You can specify a folder name, or an entire path.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In Linux, which command deletes a directory with files inside it?',
      answer: 'rm -rf',
      distractors: [
        'rmdir',
        'rm',
        'ls'
      ],
      explanation: 'To delete folders with files in them, you use the more generic rm command which deletes files . The -rf option is used to recursively and forcefully delete all files contained in the directory.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-rmdir-command'
    },
    {
      question: 'In Linux, which command is used to count JUST the number of bytes in a file?',
      answer: 'wc -c',
      distractors: [
        'wc -w',
        'wc -l',
        'wc -z'
      ],
      explanation: 'To count just the number of bytes in a file you use the wc command with the -c option.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-wc-command'
    },
    {
      question: 'In Linux, what does the cd command stand for?',
      answer: 'change directory',
      distractors: [
        'create directory',
        'created directory',
        'changed directory'
      ],
      explanation: 'cd stands for change directory',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cd-command'
    },
    {
      question: 'In Linux, which command is used to remove all previous commands and output from the terminal?',
      answer: 'clear',
      distractors: [
        'exit',
        'deleting',
        'rm'
      ],
      explanation: 'The clear command removes all previous commands that were run in the current terminal. The screen will clear and you will just see the prompt at the top.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In Vim, pressing this keystroke allows you start typing in the editor.',
      answer: 'i',
      distractors: [
        'esc',
        ':q!',
        ':wq'
      ],
      explanation: 'The i command( for `insert`), immediately switches vim to insert mode. Once you are in insert mode, you can insert characters just like a regular text editor.',
      link: 'https://www.freecodecamp.org/news/vim-editor-modes-explained/'
    },
    {
      question: 'What is the name of the penguin mascot of Linux?',
      answer: 'Tux',
      distractors: [
        'Tail',
        'Ping',
        'Flux'
      ],
      explanation: 'Linux\'s mascot is a penguin named “Tux”.',
      link: 'https://www.freecodecamp.org/news/linux-is-25-yay-lets-celebrate-with-25-rad-facts-about-linux-c8d8ac30076d/'
    },
    {
      question: 'In Linux, which command is used for creating directories (folders)?',
      answer: 'mkdir',
      distractors: [
        'mkcd',
        'cd',
        'rm'
      ],
      explanation: 'You create folders using the mkdir command, followed by the name of the directory e.g. mkdir photos',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-mkdir-command'
    },
    {
      question: 'In Unix, which command is used for exiting VIM WITHOUT saving the changes you made?',
      answer: ':q!',
      distractors: [
        ':wq',
        ':i',
        ':r'
      ],
      explanation: 'If you made some changes and would rather discard them, type :q! to forcefully quit, and press Enter/return.',
      link: 'https://www.freecodecamp.org/news/how-to-exit-vim/'
    },
    {
      question: 'Who created Linux?',
      answer: 'Linus Torvalds',
      distractors: [
        'Bill Gates',
        'Mark Zuckerberg',
        'Sergey Brin'
      ],
      explanation: 'Linus Torvalds created Linux as a college student in Finland in 1991.',
      link: 'https://www.freecodecamp.org/news/linux-is-25-yay-lets-celebrate-with-25-rad-facts-about-linux-c8d8ac30076d/'
    },
    {
      question: 'In Linux, which keyboard shortcut will stop running the ping command?',
      answer: 'Ctrl-C',
      distractors: [
        'command-D',
        'ctrl-D',
        'exit'
      ],
      explanation: 'The ping command, keeps sending multiple requests every second, by default. It will keep running until you stop it with Ctrl-C.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In awk, how do you print all columns in a file named demo.txt?',
      answer: '`awk \'{print $0}\' demo.txt`',
      distractors: ['`awk \'{print $1}\' demo.txt`', '`awk \'{print $1, $2}\' demo.txt`', '`awk \'/^print/\' demo.txt`'],
      explanation: 'To print all columns in a file you can use the awk command. The action you specify inside the curly braces is print $0.',
      link: 'https://www.freecodecamp.org/news/the-linux-awk-command-linux-and-unix-usage-syntax-examples/'
    },
    {
      question: 'In Vim, which command is used for exiting AND saving the changes you made on a file?',
      answer: ':wq',
      distractors: [
        ':q!',
        ':h',
        ':j'
      ],
      explanation: 'If you made some changes and would like to keep them, type :wq(short for write and quit) and press Enter/return.',
      link: 'https://www.freecodecamp.org/news/how-to-exit-vim/'
    },
    {
      question: 'In Linux, what does .. mean in a directory path?',
      answer: 'Refers to the parent folder',
      distractors: [
        'Refers to the current folder',
        'Refers to no directory',
        'Refers to the root of the file structure'
      ],
      explanation: 'The .. is a special path and means one level up. It refers to the parent directory.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'What is the main component, the "core", of Linux?',
      answer: 'The kernel',
      distractors: [
        'The shell',
        'The commands',
        'The terminal window'
      ],
      explanation: 'The main component of linux and its core is the kernel. It\'s the interface between the Operating System and all the hardware components and it manages all the processes.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#introductiontolinuxandshells'
    },
    {
      question: 'In what year was the Linux Operating System created?',
      answer: '1991',
      distractors: [
        '1990',
        '1989',
        '1992'
      ],
      explanation: 'Linus Torvalds created Linux as a college student in Finland in 1991.',
      link: 'https://www.freecodecamp.org/news/linux-is-25-yay-lets-celebrate-with-25-rad-facts-about-linux-c8d8ac30076d/'
    },
    {
      question: 'In Linux, which command is used to compress files?',
      answer: 'gzip',
      distractors: [
        'tar',
        'chown',
        'diff'
      ],
      explanation: 'The gzip command is used to compress a file to save space',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-gzip-command'
    },
    {
      question: 'In Linux, which flag (or option) is used with the ln command to create a soft link?',
      answer: '-s',
      distractors: [
        '-l',
        '-a',
        '-la'
      ],
      explanation: 'You create soft links using the -s option of ln. For example, ln -s <original> <link>',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-ln-command'
    },
    {
      question: 'In Linux, which command calculates the size of a directory?',
      answer: 'du',
      distractors: [
        'wc',
        'wc -c',
        'man'
      ],
      explanation: 'The du command will calculate the size of a directory as a whole.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In Linux, which command opens the VIM command-line editor?',
      answer: 'vi',
      distractors: [
        'open',
        'open vim',
        'open vi'
      ],
      explanation: 'You start up VIM  by running vi in the command line.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-vim-editor-command'
    },
    {
      question: 'Which of the following is NOT a Unix shell?',
      answer: 'pwd',
      distractors: [
        'ksh',
        'csh',
        'bash'
      ],
      explanation: 'There are many different kind of shells available on Linux and macOS computers. A few of them that dominate the space are bash, csh, zsh, and fish.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#introductiontolinuxandshells'
    },
    {
      question: 'In Linux, which of the following commands is used to showcase the contents stored in a file?',
      answer: 'less',
      distractors: [
        'open',
        'man',
        'rm'
      ],
      explanation: 'The less command shows the content stored inside a file.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In Linux, which command is used to copy the contents of one file to another one?',
      answer: 'cp',
      distractors: [
        'rm ',
        'rmdir',
        'touching'
      ],
      explanation: 'You can copy a file using the cp command.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In Linux, which command verifies that an IP address exists?',
      answer: 'ping',
      distractors: ['which', 'uname', 'chown'],
      explanation: 'The ping command pings a specific network host, on the local network or on the Internet. It verifies IP level connectivity to another computer.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'Which one of these options is layer 1 in the Open Systems Interconnection (OSI) model?',
      answer: 'The physical layer',
      distractors: ['The network layer', 'The transport Layer', 'The application layer'],
      explanation: 'Layer 1 is the physical layer. There\'s a lot of technology in Layer 1 - everything from physical network devices, cabling, to how the cables hook up to the devices.',
      link: 'https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/'
    },
    {
      question: 'In Linux, which command is used to display the NAME of the operating system?',
      answer: 'uname -o',
      distractors: ['uname -r', 'uname -k', 'uname -u'],
      explanation: 'The uname -o command prints the Operating System name',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command'
    },
    {
      question: 'What does Bash stand for?',
      answer: 'Bourne-again shell',
      distractors: ['Born-again shell', 'Basic shell', 'Bourne-another shell'],
      explanation: 'All shells originate from the Bourne Shell and the name Bourne is used because its creator was Steve Bourne. Bash means Bourne-again shell. ',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cd-command'
    },
    {
      question: 'In Linux, which command is used to count JUST the words in a file?',
      answer: 'wc -w',
      distractors: ['wc -l', 'wc -c', 'wc  -5'],
      explanation: 'To count just the words inside a file you use the wc command with the -w option.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-wc-command'
    },
    {
      question: 'In Linux, which command is used for creating links between files?',
      answer: 'ln',
      distractors: ['ls', 'link', 'cat'],
      explanation: 'The ln command is used for creating links. A link is like a pointer to another file, or a file that points to another file.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-ln-command'
    },
    {
      question: 'In Linux, which command is used to copy a whole folder and its contents?',
      answer: 'cp -r',
      distractors: ['cp -saving', 'mv', 'mkdir'],
      explanation: 'To copy folders you need to add the -r option to recursively copy the whole folder contents.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In Linux, which command is used to display the current running processes?',
      answer: 'ps',
      distractors: ['ls', 'pwd', 'echo'],
      explanation: 'You can list running processes using the ps command (ps means process status). The ps command displays your current running processes in real-time.',
      link: 'https://www.freecodecamp.org/news/linux-list-processes-how-to-check-running-processes/'
    },
    {
      question: 'In Linux, which command deletes a directory that has NO files inside it?',
      answer: 'rmdir',
      distractors: ['mkdir', 'rm', 'touch'],
      explanation: 'You can delete a folder using rmdir. That folder must be empty.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-rmdir-command'
    },
    {
      question: 'In Linux, which command prints to the terminal the argument that is passed to it?',
      answer: 'echo',
      distractors: ['man', 'print', 'ls'],
      explanation: 'The echo command prints to the terminal the argument passed to it. For example, the command echo \'hello world\' will print hello world to the terminal.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In Linux, which command provides information on all other commands available?',
      answer: 'man',
      distractors: ['echo', 'ls', 'pwd'],
      explanation: 'The man command (short for manual), provides a manual page. The page gives you a very quick overview of a command, with some handy examples of common usage scenarios.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-man-command'
    },
    {
      question: 'Which of the following is NOT a Linux distribution?',
      answer: 'multicsxz',
      distractors: ['CentOS', 'Debian', 'RHEL'],
      explanation: 'There are different versions of Linux (called distributions)  that allow the user varying degrees of personalization and control of the operating system. This means that users can choose their Linux distributions based on their wants and needs. Some popular ones are: Ubuntu, Linux Mint, CentOS, RHEL,Arch Linux.',
      link: 'https://www.freecodecamp.org/news/the-best-linux-tutorials/'
    },
    {
      question: 'In Linux, which command lists the contents of a directory?',
      answer: 'ls',
      distractors: ['ln', 'look', 'less'],
      explanation: 'The ls command (short for list) is used to list files or directories in Linux and other Unix-based operating systems. It allows you to list all files or directories in the current directory.',
      link: 'https://www.freecodecamp.org/news/the-linux-ls-command-how-to-list-files-in-a-directory-with-options/'
    },
    {
      question: 'In Linux, which command is used for displaying the name of the current user logged in the terminal?',
      answer: 'whoami',
      distractors: ['cat', 'echo', 'pwd'],
      explanation: 'The whoami command prints the username currently logged in to the terminal session.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-whoami-command'
    },
    {
      question: 'In Linux, which command shows all previously executed commands?',
      answer: 'history',
      distractors: ['memory', 'review', 'man'],
      explanation: 'Every time you run a command, it\'s memorized in the history. You can display all the history using the history command.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In Linux, what does . mean in a directory path?',
      answer: 'Refers to the current folder',
      distractors: [
        'Refers to the parent folder',
        'Refers to the root of the file structure',
        'Refers to no directory'
      ],
      explanation: 'The . is a special path indicator. It indicates the current folder.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In Linux, which command deletes a file?',
      answer: 'rm',
      distractors: ['rmdirs', 'touch', 'ls'],
      explanation: 'The rm (short for remove) command when used without options deletes files.',
      link: 'https://www.freecodecamp.org/news/remove-a-directory-in-linux-how-to-delete-directories-and-contents-from-the-command-line/'
    },
    {
      question: 'In Linux, which command is used to count JUST the lines in a file?',
      answer: 'wc -l',
      distractors: ['wc -9', 'wc -w', 'wc -c '],
      explanation: 'To count just the lines inside a file you use the wc command with the -l option.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-wc-command'
    },
    {
      question: 'What does GNU stand for?',
      answer: `GNU's not UNIX`,
      distractors: ['GeNeral Unix', 'Great New Unix', 'Greatly Needed Unix'],
      explanation: `GNU is a recursive acronym for 'GNU's not UNIX'.`,
      link: 'https://forum.freecodecamp.org/t/the-origins-of-linux-and-the-free-software-movement-a-brief-history/19527'
    },
    {
      question: 'Which command prints the Linux version?',
      answer: 'uname -r',
      distractors: ['uname -s', 'uname -u', 'uname -k'],
      explanation: 'The r option of the uname command prints the release',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command'
    },
    {
      question: 'In Linux, which command is used to sort the contents of a file alphabetically and numerically?',
      answer: 'sort',
      distractors: ['wc', 'cat', 'tail'],
      explanation: `The sort command helps you sort a file's contents in a particular order(either numerical or alphabetical).`,
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In Linux, which command changes passwords for user accounts?',
      answer: 'passwd',
      distractors: ['chpass', 'chpasswd', 'cpasswd'],
      explanation: 'Users in Linux have a password assigned. You can change the password using the passwd command.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In Linux, how do you change permissions using the chmod command?',
      answer: 'chmod permissions filename',
      distractors: ['permissions filename chmod', 'chmod filename', 'chmod permissions'],
      explanation: `'permissions' can be read, write, execute or a combination of them. 'filename' is the name of the file for which the permissions need to change.`,
      link: 'https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/'
    },
    {
      question: 'In Linux, how do you change user and group ownership simultaneously?',
      answer: 'chown user:group filename',
      distractors: ['chmod user:group filename', 'chown user::group filename', 'chmod user::group filename'],
      explanation: 'We can use chown to change user and group simultaneously',
      link: 'https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/'
    },
    {
      question: 'In Linux, what is the correct syntax for changing permissions using absolute mode?',
      answer: 'chmod 451 file-name',
      distractors: ['permissions 451 file-name', 'change 451 file-name', 'chown 451 file-name'],
      explanation: 'Absolute mode uses numbers to represent permissions and mathematical operators to modify them.',
      link: 'https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/'
    },
    {
      question: 'In Linux, which command is used to display network status and generate protocol statistics?',
      answer: 'netstat',
      distractors: ['ipconfig', 'ifconfig', 'netlist'],
      explanation: 'The netstat command can be used to display network connections and various protocol statistics.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In Linux, which command can be used to terminate a program?',
      answer: 'kill',
      distractors: ['end', 'stop', 'finish'],
      explanation: 'The kill command sends a signal which terminates or kills a particular process or group of processes.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-kill-command'
    },
    {
      question: 'In Linux, which command can be used for cron jobs?',
      answer: 'crontab',
      distractors: ['cronaction', 'cronset', 'cronedit'],
      explanation: 'The crontab command can used to perform various actions on cron jobs.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-crontab-command'
    },
    {
      question: 'In Linux, which command is used to view, modify, delete, and copy partitions on a hard drive?',
      answer: 'fdisk',
      distractors: ['df', 'split', 'ps'],
      explanation: 'fdisk is used to view, create, delete, change, resize, copy and move partitions on a hard drive.',
      link: 'https://www.freecodecamp.org/news/how-to-install-arch-linux/'
    },
    {
      question: 'The sudo command stands for ___.',
      answer: 'superuser do',
      distractors: ['su', 'superuser does', 'super do'],
      explanation: 'The sudo command stands for superuser do.',
      link: 'https://www.freecodecamp.org/news/the-ultimate-guide-to-linux-creating-a-sudo-user/'
    },
    {
      question: 'In Linux, which one is the correct syntax for renaming a file called abc.txt to pqr.txt?',
      answer: 'mv abc.txt pqr.txt',
      distractors: ['mv pqr.txt abc.txt', 'mv -a pqr.txt abc.txt', 'mv -all pqr.txt abc.txt'],
      explanation: 'The correct syntax for renaming a file called abc.txt to pqr.txt is mv abc.txt pqr.txt',
      link: 'https://www.freecodecamp.org/news/rename-file-linux-bash-command/'
    },
    {
      question: 'Which Linux command is used to go up one level to a parent folder?',
      answer: 'cd ..',
      distractors: ['cd', 'cd/', 'chdir'],
      explanation: '.. is a special path used to indicate the parent folder. cd .. is used to go up one level to a parent folder.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-pwd-command'
    },
    {
      question: 'What does Vim stand for?',
      answer: 'Vi Improved',
      distractors: ['Vi IMitation', 'Vi Manual', 'Vi Moolenaar'],
      explanation: 'Vim stands for Vi IMproved and it is a popular open-source text editor.',
      link: 'https://www.freecodecamp.org/news/learn-vim-beginners-tutorial/'
    },
    {
      question: 'Which Linux desktop environment has a similar UI to Windows?',
      answer: 'KDE Plasma',
      distractors: ['GNOME', 'Xfce', 'Mate'],
      explanation: 'KDE is a popular desktop environment which resembles the Windows user interface.',
      link: 'https://www.freecodecamp.org/news/linux-basics/'
    },
    {
      question: 'Which set among the following is the correct set of three types of Linux file users?',
      answer: '{user, group, other}',
      distractors: ['{whoami, users, group}', '{whoami, user, others}', '{user, group, all}'],
      explanation: 'In Linux, there are three types of users: user, group and other.',
      link: 'https://www.freecodecamp.org/news/linux-basics/'
    },
    {
      question: 'Which of the following is NOT a category of file permissions in Linux?',
      answer: 'compile',
      distractors: ['execute', 'write', 'read'],
      explanation: 'In Linux, file permissions fall into three categories: read, write and execute.',
      link: 'https://www.freecodecamp.org/news/linux-chmod-chown-change-file-permissions/'
    },
    {
      question: 'In Linux, which command is used to find files/folders matching a particular search pattern?',
      answer: 'find',
      distractors: ['who', 'which', 'search'],
      explanation: 'The find command can be used to find files or folders matching a particular search pattern. It searches recursively.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'Which of the following Linux commands calculates the total number of lines, words, and characters in a file?',
      answer: 'wc',
      distractors: ['wordcount', 'wordc', 'lc'],
      explanation: 'The wc command calculates the total number of lines, words, and characters in a file.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In Linux, which command is used to show a user a list of groups they belong to?',
      answer: 'groups',
      distractors: ['showgroup', 'members', 'groupadd'],
      explanation: 'The groups command is used to show a user a list of groups for which they belong to. Primary and secondary are the two types of groups in Linux.',
      link: 'https://www.freecodecamp.org/news/learn-the-basics-of-the-linux-operating-system/'
    },
    {
      question: 'Which Linux commands can be used to show who is logged on and what they are doing?',
      answer: 'w',
      distractors: ['top', 'whoami', 'which user'],
      explanation: 'w displays information about the users currently on the machine, and their processes. The header shows, in this order, the current time, how long the system has been running, how many users are currently logged on, and the system load averages for the past 1, 5, and 15 minutes.',
      link: 'https://man7.org/linux/man-pages/man1/w.1.html'
    },
    {
      question: 'In Linux, which option is used with gzip to decompress a file?',
      answer: '-d',
      distractors: ['-kv', '-r', '-c'],
      explanation: 'gzip can also be used to decompress a file, using the -d option: gzip -d filename.gz',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In Linux, what does the dmesg command do?',
      answer: 'shows kernel logs',
      distractors: ['shows authentication logs', 'shows syslog file', 'shows daemon logs'],
      explanation: 'The dmesg command is a Linux utility that shows kernel-related messages that have been taken from the kernel ring buffer.',
      link: 'https://en.wikipedia.org/wiki/Dmesg'
    },
    {
      question: 'In Linux, what does the inode mean?',
      answer: 'Unique name given by the operating system to each file',
      distractors: ['kernel nodes', 'does not exist', 'linux nodes'],
      explanation: 'Each file is given a unique name by the operating system which is called as the inode.',
      link: 'https://en.wikipedia.org/wiki/Inode'
    },
    {
      question: 'What does CLI stand for?',
      answer: 'Command Line Interface',
      distractors: ['Computer Linux Index', 'Code Line Interface', 'Code Line Index'],
      explanation: 'CLI stands for Command Line Interface',
      link: 'https://en.wikipedia.org/wiki/Command-line_interface'
    },
    {
      question: 'In Linux, what does the ls -d command do?',
      answer: 'lists out only the directories themselves,not their contents ',
      distractors: [
        'lists only the files starting with',
        'lists files and sorts them alphabetically',
        'show deleted files'
      ],
      explanation: 'In Linux, the -d or --directory option is used to list the directories but not the directory contents.',
      link: 'https://man7.org/linux/man-pages/man1/ls.1.html'
    },
    {
      question: 'In Linux, how do you print the last column of a file named demo.txt?',
      answer: 'awk \'{print $NF}\' demo.txt',
      distractors: ['awk \'{print $0}\' demo.txt', 'awk \'{print $1, $4}\' demo.txt', 'awk \'/^print/\' demo.txt'],
      explanation: 'While using the awk command, you can use $NF which represents the last field in a record, to print the last column of a file',
      link: 'https://www.freecodecamp.org/news/the-linux-awk-command-linux-and-unix-usage-syntax-examples/'
    },
    {
      question: 'In Linux, which command is used to strip directory and suffix from filenames?',
      answer: 'basename',
      distractors: ['dirname', 'pwd', 'ls'],
      explanation: 'The basename command can be used to print the filename from the given pathname. It will delete any prefix up to the last forward-slash character and return the result.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-basename-command'
    },
    {
      question: 'In Linux, which command is used to display the amount of available free disk space for file systems?',
      answer: 'df',
      distractors: ['du', 'free', 'top'],
      explanation: 'The df command stands for disk-free and it is used to check the available disk space in Linux.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-df-command'
    },
    {
      question: `In Linux, which command is used to go back to the user's home directory?`,
      answer: 'cd ~',
      distractors: ['cd /', 'clear', 'ls -la'],
      explanation: 'The cd ~ command can be used to get back to home directory in Linux.',
      link: 'https://www.freecodecamp.org/news/linux-command-line-tutorial/'
    },
    {
      question: 'Which command is used in the Vim editor to delete a single character?',
      answer: 'x',
      distractors: ['y', 'a', 'z'],
      explanation: 'If you want to delete a single character in the Vim editor, you can use the x command.',
      link: 'https://www.freecodecamp.org/news/vim-editor-modes-explained/'
    },
    {
      question: 'In Linux, which command is used to find the difference between two files?',
      answer: 'diff',
      distractors: ['uniq', 'echo', 'chown'],
      explanation: `In Linux, you can use the diff command to display the difference between two files'.`,
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-diff-command'
    },
    {
      question: 'In Linux, which command is used to used to securely remove data?',
      answer: 'shred',
      distractors: ['rm', 'mkdir', 'dd'],
      explanation: 'The shred command helps to overwrite the data in place several times. This makes it harder for third party software and hardware probing to recover the data. That is why it\'s commonly used to securely remove data.',
      link: 'https://www.freecodecamp.org/news/securely-erasing-a-disk-and-file-using-linux-command-shred/'
    },
    {
      question: 'In Linux, which the command is used to remove an empty directory?',
      answer: 'rmdir',
      distractors: ['remove', 'rdir', 'delete'],
      explanation: 'If you have an empty directory that you would like to remove, then you can use the rmdir command in the terminal.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-rmdir-command'
    },
    {
      question: 'In Linux, which command is used to create a new file and open it in the Vim editor?',
      answer: 'vi filename.extension',
      distractors: ['new filename.extension', 'create filename', 'None of the above'],
      explanation: 'vi filename.extension is used to create a new file using the terminal and open it in the Vim editor.',
      link: 'https://www.freecodecamp.org/news/learn-vim-beginners-tutorial/'
    },
    {
      question: 'In Linux, which command is used to list the last 10 lines of a file?',
      answer: 'tail -10 filename',
      distractors: ['bottom -10 filename', 'last -10 filename', 'filename -10'],
      explanation: 'tail -10 filename is used to list the last 10 lines of a file.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook'
    },
    {
      question: 'In Linux, which command is used to display the first 10 lines of a file?',
      answer: 'head -10 \'filename\'',
      distractors: ['filename -10', 'filename -f', 'ls filename -10'],
      explanation: 'The head -10 \'filename\' command is used to display the first 10 lines of a file.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook'
    },
    {
      question: 'In Linux, which command is used to list files with its permissions and users access?',
      answer: 'ls -l',
      distractors: ['ls allusers', 'ls all', 'None of These'],
      explanation: 'In Linux, the ls -l command is used to long list the files which displays the permissions of files and user access',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook'
    },
    {
      question: 'In Linux, which command is used to list all files with the .js extension?',
      answer: 'ls *.js',
      distractors: ['ls js', 'ls .js files', 'None of These'],
      explanation: 'In Linux, this formatter with the ls command can be used to list all files with similar postfix or extension',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook'
    },
    {
      question: 'In Linux, which command is used to list the file extensions in alphabetical order?',
      answer: 'ls -X',
      distractors: ['ls -a', 'ls alpha', 'ls -extension'],
      explanation: 'The ls -X command is used to list the file extensions in alphabetical order.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In Linux, which command is used to concatenate two files and display the output?',
      answer: 'cat file1 file2 file3',
      distractors: ['Cat file1 + file2', 'Cat file1 file2 > file3', 'Cat file1 > file2'],
      explanation: 'The cat command prints a file\'s content to the standard output',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/'
    },
    {
      question: 'In Linux, what are four operations that can be done with the cat command?',
      answer: 'create, read, write and append files',
      distractors: [
        'create, delete, reverse and append files',
        'sort, destroy, move and append files',
        'reverse, read, write and multiply files'
      ],
      explanation: 'The cat command can create, read, write and append files.',
      link: 'https://www.freecodecamp.org/news/the-cat-command-in-linux-how-to-create-a-text-file-with-cat-or-touch/'
    },
    {
      question: 'In Linux, which of the following options is the correct way to create a new file?',
      answer: '> filename.extension',
      distractors: ['cd filename.extension', 'ls filename.extension', 'None of the above'],
      explanation: '> greater than operator is used to create a new file in Linux.',
      link: 'https://www.freecodecamp.org/news/learn-the-50-most-used-linux-terminal-commands/'
    },
    {
      question: 'In Linux, what does elif stand for?',
      answer: 'else if',
      distractors: ['elif condition', 'elif statement', 'None of the above'],
      explanation: 'elif is an else if statement in Shell Scripting.',
      link: 'https://www.freecodecamp.org/news/shell-scripting-crash-course-how-to-write-bash-scripts-in-linux/'
    },
    {
      question: 'In Linux, Which command is used to stop a running process?',
      answer: 'kill -9 [process ID]',
      distractors: ['pidof [OPTIONS] NAME', 'ps -ef', 'stop [signal] PID'],
      explanation: 'The kill command is used to stop a running process.',
      link: 'https://www.linuxfoundation.org/blog/blog/classic-sysadmin-how-to-kill-a-process-from-the-command-line'
    },
    {
      question: 'In Linux, which command is used to perform a binary file comparison and display the differences between two files?',
      answer: 'cmp',
      distractors: ['diff', 'compare', 'contrast'],
      explanation: `The 'cmp' command is used to compare two binary files byte by byte and displays the differences between them, if any.`,
      link: 'https://linux.die.net/man/1/cmp'
    },
    {
      question: 'In Linux, what command is used to analyze and display detailed information about system resource usage by processes?',
      answer: 'top',
      distractors: ['ps', 'htop', 'uptime'],
      explanation: `The 'top' command provides a real-time view of system resource usage by processes, including CPU, memory, and more.`,
      link: 'https://linux.die.net/man/1/top'
    },
    {
      question: 'Which Linux command is used to securely copy files and directories over SSH?',
      answer: 'scp',
      distractors: ['rsync', 'ftp', 'wget'],
      explanation: `The 'scp' command is used for secure copy over SSH, allowing files and directories to be transferred securely between hosts.`,
      link: 'https://linux.die.net/man/1/scp'
    },
    {
      question: `In Linux, what is the purpose of the 'strace' command?`,
      answer: `The 'strace' command is used to trace system calls and signals made by a process.`,
      distractors: [
        `The 'strace' command is used to check network status.`,
        `The 'strace' command is used to list running processes.`,
        `The 'strace' command is used to analyze memory usage.`
      ],
      explanation: `The 'strace' command can be an invaluable tool for diagnosing issues with programs and understanding their behavior at a system call level. This command is used to trace system calls and signals made by a process. To use 'strace', you specify the program's name and its arguments as parameters.`,
      link: 'https://linux.die.net/man/1/strace'
    },
    {
      question: `What Linux command is used to view and edit the system's crontab, which controls scheduled tasks and cron jobs?`,
      answer: 'crontab',
      distractors: ['cronjob', 'taskcron', 'cronedit'],
      explanation: `The 'crontab' command is used to view and edit the cron jobs for a user. It opens the user's crontab file for editing.`,
      link: 'https://linux.die.net/man/1/crontab'
    },
    {
      question: 'How does Linux work on Ubuntu?',
      answer: 'The Linux kernel serves as an interface between hardware and software.',
      distractors: [
        'Ubuntu kernel is entirely separate from Linux.',
        'Ubuntu uses a proprietary operating system.',
        'Linux operates without a kernel on Ubuntu.'
      ],
      explanation: 'The Linux kernel, which manages system resources, acts as the bridge between the hardware and software on Ubuntu. It initializes hardware, establishes the system environment, loads necessary drivers, and allows applications to run on top of it. This fundamental structure is common to all Linux distributions, including Ubuntu.',
      link: 'https://www.freecodecamp.org/news/introduction-to-linux/'
    },
    {
      question: 'Which package manager is commonly used in Debian-based Linux distributions, such as Ubuntu?',
      answer: 'APT',
      distractors: ['YUM', 'DNF', 'Pacman'],
      explanation: 'APT (Advanced Package Tool) is the package manager commonly used in Debian-based distributions, while the other options are more associated with other Linux distributions.',
      link: 'https://linux.die.net/man/8/apt'
    },
    {
      question: 'What is the primary purpose of the halt command in Linux?',
      answer: 'It initiates the system shutdown process and powers off the computer.',
      distractors: [
        'It moves files from one directory to another.',
        'It displays system information and statistics.',
        'It reboots the system.'
      ],
      explanation: 'When you use the halt command in Linux, it sends a signal to the system to initiate a controlled shutdown. The operating system will gracefully terminate running processes and then power off the computer, effectively shutting it down.',
      link: 'https://man7.org/linux/man-pages/man8/halt.8.html'
    },
    {
      question: 'In Linux, what can we use to configure a custom command with a unique set of options?',
      answer: 'alias',
      distractors: ['suo', 'umask', 'grep'],
      explanation: 'Some commands fail to provide enough information and context. When you are in need of a custom solution, using an alias to refer to a more useful base command can be very helpful.',
      link: 'https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-alias-command'
    },
    {
      question: 'What does Ctrl + r (windows) or ⌘ + r(mac) do in the default ubuntu terminal?',
      answer: 'query the command history',
      distractors: ['to call find & replace text function', 'to redo last action', 'to reload current shell'],
      explanation: 'The Ctrl + r (windows) or ⌘ + r(mac) shortcut helps you query the command history by suggesting autocomplete.',
      link: 'https://www.freecodecamp.org/news/bash-command-line-tips-to-help-you-work-faster/'
    },
    {
      question: `In Ubuntu, which of the following commands adds the user named 'quincy' to a group named 'writers'?`,
      answer: 'usermod -a -G writers quincy',
      distractors: ['usermod -g writers quincy', 'useradd writers quincy', 'group writers -a quincy'],
      explanation: 'You can use the usermod command to add a user to a group. The -a parameter means "append" and the -G parameter adds a group as a secondary group',
      link: 'https://www.freecodecamp.org/news/linux-user-groups-explained-how-to-add-a-new-group-a-new-group-member-and-change-groups/'
    },
    {
      question: 'In Linux, which command below does not display logs?',
      answer: 'cd',
      distractors: ['dmesg', 'journalctl', 'cat /var/log/syslog'],
      explanation: 'The cd command stands for change directory and is used to change to a directory in the terminal. The cd command is not used to display logs.',
      link: 'https://www.youtube.com/watch?v=ROjZy1WbCIA&t=3472s'
    },
    {
      question: 'In Linux, what is a daemon?',
      answer: 'a program that automatically runs in the background',
      distractors: [
        'a daemon is a summoned cyber spirit',
        'a corrupted program that cannot be uninstalled',
        'a MAC OS specific program that is unsupported in Linux OS'
      ],
      explanation: 'a daemon is a computer program that runs as a background process, rather than being under the direct control of an interactive user',
      link: 'https://www.freecodecamp.org/news/learn-linux-for-beginners-book-basic-to-advanced/'
    },
    {
      question: `In Linux, when you remove a user's account using the 'userdel' command, what happens to the data files stored in that user's directory?`,
      answer: `The 'userdel' command will delete all data stored by that user`,
      distractors: [
        `The 'userdel' command will delete the user account, and archive all data files and directories from that user's home directory to a new read-only directory`,
        `The 'userdel' command will fail if there are data files remaining in that user's home directory`,
        `The 'userdel' command is the incorrect command and the remusr command should be used instead`
      ],
      explanation: `The 'userdel' command will delete the user account, along with the home directory including any data files owned by that user.`,
      link: 'https://www.freecodecamp.org/news/how-to-manage-users-in-linux/'
    }
  ]
};

export default linuxQuiz;
