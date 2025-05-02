const generalCSQuiz = {
  category: 'General CS',
  questions: [
    {
      question: 'In terms of Big-O complexity, what is the time complexity for lookups in a binary tree index?',
      answer: 'O(log n)',
      distractors: ['O(n)', 'O(n log n)', 'O(1)'],
      explanation: 'This is because a binary tree index allows for efficient searching by halving the search space at each step.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#heading-chapter-11-database-performance'
    },
    {
      question: 'What is the time complexity of the Ford-Fulkerson algorithm?',
      answer: 'O(V * E ^ 2)',
      distractors: ['O(V + E)', 'O(V ^ 2 * E)', 'O(V ^ 3 * E ^ 2)'],
      explanation: 'The time complexity of the Ford-Fulkerson algorithm depends on how the augmenting paths are found. If the paths are found using a breadth-first search (BFS), it can lead to the Edmonds-Karp implementation, which has a time complexity of O(V * E ^ 2).',
      link: 'https://www.freecodecamp.org/news/graph-algorithms-and-data-structures-explained-with-java-and-c-examples/'
    },
    {
      question: 'What is the base case in a recursive function?',
      answer: 'The condition under which the recursive function stops calling itself',
      distractors: [
        'The condition under which the recursive function starts calling itself',
        'The maximum number of times the recursive function can call itself',
        'The initial input value to the recursive function'
      ],
      explanation: 'In recursion, the base case is the condition under which the recursive function stops calling itself to prevent an infinite loop. It is crucial for ensuring that the recursion terminates and the program does not run indefinitely.',
      link: 'https://www.freecodecamp.org/news/recursion-in-javascript/'
    },
    {
      question: 'Which of the following is a primary application of computer vision?',
      answer: 'Object recognition',
      distractors: ['Word processing', 'Spreadsheet calculations', 'Database management'],
      explanation: 'Computer vision primarily deals with enabling machines to interpret and make decisions based on visual data. Object recognition is a fundamental application of computer vision where the system identifies objects within an image or video.',
      link: 'https://www.freecodecamp.org/news/computer-vision-js-frameworks-you-need-to-know-b233996103ce/'
    },
    {
      question: 'What is the average time complexity of an element insertion in a hash table?',
      answer: 'O(1)',
      distractors: ['O(logn)', 'O(n)', 'O(n^2)'],
      explanation: 'The average time complexity of an element insertion in a hash table is O(1). Unlike arrays, hash tables use a hashing function to generate a unique key or index for each element, ensuring constant time for element insertion.',
      link: 'https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/'
    },
    {
      question: 'Which of the following methods can be used to solve the N-Queens problem?',
      answer: 'Backtracking',
      distractors: ['Greedy Paradigm', 'Divide and Conquer', 'Dynamic Programming'],
      explanation: 'Backtracking is used to solve the N-Queens problem based on the condition that no two queens can be present in the same row, column or diagonal.',
      link: 'https://youtu.be/A80YzvNwqXA?si=Eue2Exdk1zT2SUm5&t=511'
    },
    {
      question: 'Which sorting algorithm has an average time complexity of O(nlogn)?',
      answer: 'Quick sort',
      distractors: ['Bubble sort', 'Insertion sort', 'Selection sort'],
      explanation: 'Quick sort has an average time complexity of O(nlogn), making it efficient for sorting large datasets.',
      link: 'https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/#quick-sort'
    },
    {
      question: 'In a graph, which data structure is best suited for finding the shortest path between two vertices?',
      answer: 'Priority Queue',
      distractors: ['Stack', 'String', 'Heap'],
      explanation: `Dijkstra's algorithm, which is used to find the shortest path in a graph, typically employs a priority queue to efficiently select the next vertex with the smallest distance.`,
      link: 'https://www.freecodecamp.org/news/dijkstras-shortest-path-algorithm-visual-introduction/'
    },
    {
      question: 'What is the time complexity of inserting an element into a linked list at the beginning?',
      answer: 'O(1)',
      distractors: ['O(log n)', 'O(n)', 'O(n2)'],
      explanation: 'The time complexity involved to insert a node at the head of the linked list as well as to append at the tail is O(1).',
      link: 'https://www.freecodecamp.org/news/data-structures-101-linked-lists-254c82cf5883/'
    },
    {
      question: 'What is the time complexity of Bellman Ford\'s Algorithm?',
      answer: 'O(V*E)',
      distractors: ['O(V)', 'O(E)', 'O(V+E)'],
      explanation: `Bellman Ford's algorithm is a shortest path finding algorithm for graphs that can have negative weights having the optimal time complexity of O(V*E).`,
      link: 'https://www.freecodecamp.org/news/graph-algorithms-and-data-structures-explained-with-java-and-c-examples/'
    },
    {
      question: 'What is the acceptable range of Balance Factor for an AVL tree?',
      answer: '[-1,1]',
      distractors: ['[0,1]', '[-1,0]', 'None of the above'],
      explanation: ' The self balancing property of an AVL tree is maintained by the balance factor. The value of balance factor should always be -1, 0 or +1',
      link: 'https://forum.freecodecamp.org/t/algorithms-avl-trees/297458'
    },
    {
      question: 'Which approach involves duplicating the argument\'s value into the function\'s formal parameter?',
      answer: 'Call by Value',
      distractors: ['Call by pointer', 'Call by reference', 'Call by address'],
      explanation: 'In the call-by-value approach, a replica of the argument\'s value is generated, and any modifications made to the formal parameter within the function do not affect the original argument outside of the function, as the function operates on its own isolated copy of the data.',
      link: 'https://www.freecodecamp.org/news/understanding-by-reference-vs-by-value-d49139beb1c4/'
    },
    {
      question: 'Which of the following algorithms is used to find the shortest path between two points in a connected weighted graph?',
      answer: 'Kruskal Algorithm',
      distractors: [`Floyd's Tortoise-Hare Algorithm`, 'Greedy Algorithms', 'Prims Algorithms'],
      explanation: 'Kruskal Algorithm is used to find the shortest path between two points in a connected weighted graph.',
      link: 'https://en.wikipedia.org/wiki/Kruskal%27s_algorithm'
    },
    {
      question: 'What does NFC stands for?',
      answer: 'Near-Field Communication',
      distractors: ['Narrow Field Communication', 'Near-Fragile Communication', 'Nearly Factory Communication'],
      explanation: 'NFC stands for near-field communication and it is the standard for devices to communicate with each other wirelessly from a very close distance.',
      link: 'https://www.freecodecamp.org/news/what-is-nfc-near-field-communication-uses-chips-tags-and-readers-explained/'
    },
    {
      question: 'What is the best algorithm for matrix multiplication?',
      answer: `Strassen's Algorithm`,
      distractors: ['Multiplication algorithm', 'Divide and Conquer Technique', 'None of the above'],
      explanation: `Strassen's algorithm reduces the number of multiplication and addition in a given matrix and results in a time complexity of O(2.81)`,
      link: 'https://en.wikipedia.org/wiki/Strassen_algorithm#'
    },
    {
      question: 'Which of the following sorting algorithms is stable in nature?',
      answer: 'Merge Sort',
      distractors: ['Heap Sort', 'Quick Sort', 'Selection sort'],
      explanation: 'Stable sorting algorithms maintain the relative order of elements with equal values, or keys. Merge sort is stable in nature.',
      link: 'https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/#classification-of-a-sorting-algorithm'
    },
    {
      question: 'Which of the following sorting algorithms has the same best-case and worst-case time complexities?',
      answer: 'Merge Sort',
      distractors: ['Bubble Sort', 'Quick Sort', 'Selection sort'],
      explanation: 'Merge sort has a time complexity of O(nlogn) in all cases - best, average and worst.',
      link: 'https://www.freecodecamp.org/news/merge-sort-algorithm-python-and-java-examples-with-time-complexity/'
    },
    {
      question: 'What is Object-Oriented Programming?',
      answer: 'OOP is a programming pattern that is built around objects or entities.',
      distractors: [
        'OOP is a topological paradigm to program things',
        'OOP is a set of sorting algorithms',
        'OOP is a list of Bitwise operators'
      ],
      explanation: 'OOP is a programming pattern that is built around objects or entities',
      link: 'https://www.freecodecamp.org/news/what-is-object-oriented-programming/'
    },
    {
      question: 'Which of the following is true regarding division and the bitwise operator?',
      answer: 'Dividing a number by 8 using the bitwise operator is faster than using the / operator',
      distractors: [
        'Dividing a number by 8 cannot be implemented using bitwise operator',
        'Dividing a number by 8 using the bitwise operator is slower than using the / operator',
        'none of the following options are true'
      ],
      explanation: 'When a binary number is shifted to the right 3 times, it will be divided by 8.',
      link: 'https://forum.freecodecamp.org/t/javascript-bitwise-operators-explained-with-examples/16153'
    },
    {
      question: 'Which of the following is NOT an in-place sorting algorithm?',
      answer: 'Merge Sort',
      distractors: ['Bubble sort', 'Insertion sort', 'Quick sort'],
      explanation: 'Merge sort uses the Divide and Conquer paradigm and is not considered an in-place sorting algorithm.',
      link: 'https://en.wikipedia.org/wiki/In-place_algorithm'
    },
    {
      question: 'Which term is used for removing elements from the front of the queue?',
      answer: 'Dequeue.',
      distractors: ['Enqueue.', 'Peek.', 'isFull.'],
      explanation: 'Dequeue is the term for removing elements from the front of the queue.',
      link: 'https://www.freecodecamp.org/news/data-structures-101-queues-a6960a3c98/'
    },
    {
      question: `Which problems are solved using Bellman Ford's Algorithm?`,
      answer: 'Single Source Shortest Path',
      distractors: ['All Pair Shortest Path', 'Negative Cycle Detection', 'Minimum Spanning Tree'],
      explanation: `Bellman Ford's algorithm is a shortest path finding algorithm for graphs that can have negative weights.`,
      link: 'https://www.freecodecamp.org/news/graph-algorithms-and-data-structures-explained-with-java-and-c-examples/'
    },
    {
      question: 'Which of the following algorithms can be used to determine a minimum spanning tree in a graph?',
      answer: `Boruvka's algorithm`,
      distractors: ['Breadth first search', 'Depth first search', 'Binary search'],
      explanation: `Boruvka's algorithm can be used to determine a minimum spanning tree in a graph.`,
      link: 'https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=1229s'
    },
    {
      question: 'Which of the following is synonymous with an articulation point in a graph?',
      answer: 'Cut vertex',
      distractors: ['Cut set', 'Cut edge', 'Leaf node'],
      explanation: 'In a graph, an articulation point is the same as a cut vertex.',
      link: 'https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=1213s'
    },
    {
      question: 'Which of the following is synonymous with a bridge in a graph?',
      answer: 'Cut edge',
      distractors: ['Cut set', 'Articulation point', 'Directed edge'],
      explanation: 'In a graph, a bridge is the same as a cut edge.',
      link: 'https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=1178s'
    },
    {
      question: 'Which of the following statements is true for the Traveling salesman problem?',
      answer: 'It is an NP-Hard problem.',
      distractors: ['It is an NP-Complete problem.', 'It is an NP problem.', 'It is a P problem.'],
      explanation: 'Traveling salesman problem is an NP-Hard problem.',
      link: 'https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=1147s'
    },
    {
      question: 'Which of the following algorithms can be used for the shortest path problem for an unweighted graph?',
      answer: 'Breadth First Search',
      distractors: ['Binary Search', 'Ternary Search', 'Linear Search'],
      explanation: 'Breadth First Search can be used for the shortest path problem for an unweighted graph.',
      link: 'https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=934s'
    },
    {
      question: 'What is SOLID?',
      answer: 'SOLID is an acronym which represents five principles of Object-Oriented design.',
      distractors: [`It's a new type of Hardware`, 'New kind of software', `It's a new group of technologies`],
      explanation: 'SOLID is a set of rules and best practices to follow while creating OOP designs.',
      link: 'https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/'
    },
    {
      question: 'Which of the following is true for an adjacency list?',
      answer: 'Edge weight lookup is O(E).',
      distractors: [
        'Edge weight lookup is O(1).',
        'Edge weight cannot be specified in adjacency list.',
        'It cannot be used to represent a cyclic graph.'
      ],
      explanation: 'In an adjacency list, for each node only adjacent nodes are stored in a list',
      link: 'https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=682s'
    },
    {
      question: 'Which of the following is true for an adjacency matrix?',
      answer: 'It is space efficient for representing dense graphs.',
      distractors: [
        'It is space efficient for representing sparse graphs.',
        'Edge weight lookup is lower bounded by log(n).',
        'Space complexity is O(n).'
      ],
      explanation: 'If a graph is sparse then most spaces are wasted.',
      link: 'https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=620s'
    },
    {
      question: 'Which of the following is true for a graph?',
      answer: 'A graph is bipartite if and only if it is two colorable.',
      distractors: [
        'A graph is bipartite if and only if it does not contain an even length cycle.',
        'A graph is bipartite if and only if it is three colorable.',
        'A graph is bipartite if and only if it is a directed acyclic graph'
      ],
      explanation: 'If a graph is two colorable then the nodes with same color can be grouped together to form two different groups.',
      link: 'https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=440s'
    },
    {
      question: 'Which of the following is true for an arborescence in graph theory?',
      answer: 'All arborescence are Directed Acyclic Graphs (DAGs) but not all DAGs are arborescence',
      distractors: [
        'All DAGs are arborescence but not all arborescence are DAGs.',
        'A strongly connected and directed graph is an arborescence.',
        'A graph where the number of edges is twice the number of nodes is arborescence.'
      ],
      explanation: 'An arborescence is a directed tree. Hence, it is a directed graph with no cycle. A graph with 4 nodes where three nodes are pointing towards a single node is not an arborescence but a DAG.',
      link: 'https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=346s'
    },
    {
      question: 'What is an arborescence in graph theory?',
      answer: 'A rooted tree in which all edges point away from the root',
      distractors: [
        'A graph having cycles',
        'A strongly connected and directed graph',
        'A graph where the number of edges is twice the number of nodes'
      ],
      explanation: 'A tree is rooted if the tree has a designated node called root node such that all edges either points towards the root or points away from the root. And if all edges point away from the root then it is called arborescence.',
      link: 'https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=346s'
    },
    {
      question: 'What is the term for when data is being pushed onto a full stack?',
      answer: 'Stack Overflow',
      distractors: ['Underflow', 'Garbage Collection', 'Empty collection'],
      explanation: 'Stack Overflow happens when there is an attempt to push data on an already full stack.',
      link: 'https://www.freecodecamp.org/news/data-structures-101-stacks-696b3282980/'
    },
    {
      question: 'What is the name for an error where the programmer writes invalid syntax resulting in the program failing to run?',
      answer: 'Syntax Error',
      distractors: ['Runtime Error', 'Logical Error', 'Semantic Error'],
      explanation: 'A syntax error is when the programmer writes invalid code that violates the rules of that programming language.',
      link: 'https://www.youtube.com/watch?v=zOjov-2OZ0E'
    },
    {
      question: 'Which operation is used to add an item to the back of the queue?',
      answer: 'Enqueue',
      distractors: ['Dequeue', 'Peek', 'isFull'],
      explanation: 'Enqueue is the operation used to add an item to the back of the queue.',
      link: 'https://www.freecodecamp.org/news/queue-data-structure-definition-and-java-example-code/'
    },
    {
      question: 'Which of the following is correct about a tree?',
      answer: 'trees are minimally connected.',
      distractors: [
        'trees can be cyclic.',
        'a tree must be an undirected graph',
        'trees must have at least two nodes'
      ],
      explanation: 'If we remove any edge from a tree, it creates a two disconnected graph',
      link: 'https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=306s'
    },
    {
      question: 'Which of the following is a constraint for Dijkstra\'s Single Source Shortest Path Algorithm?',
      answer: 'The graph must only contain non-negative edge weights.',
      distractors: [
        'The graph must be acyclic',
        'The graph must be a balanced binary tree',
        'The graph must have unique edge weights'
      ],
      explanation: `Dijkstra's SSSP algorithm may not work for a graph with negative edge weights. This constraint is to ensure that once a vertex is visited, the optimal distance from source cannot be updated further.`,
      link: 'https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=4832s'
    },
    {
      question: 'Which of the following is the most correct statement?',
      answer: 'Topological sort is possible only for a Directed Acyclic Graph',
      distractors: [
        'Topological sort is just an another name for BFS',
        'All undirected graphs have topological ordering',
        'A cyclic graph also has topological ordering.'
      ],
      explanation: 'The only graph that has valid topological ordering is a Directed Acyclic Graph.',
      link: 'https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=3632s'
    },
    {
      question: 'What is ASCII?',
      answer: 'It is a character encoding standard to represent text in a computer.',
      distractors: [
        'Algorithm to convert decimal to number in base 65.',
        'A protocol in Layer 3 of TCP/IP Suite',
        'A unit of throughput for a processor.'
      ],
      explanation: 'American Standard Code for Information Interchange (ASCII) is a character encoding standard to represent text in computers.',
      link: 'https://www.youtube.com/watch?v=LtoBGQPuu1c&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=406s'
    },
    {
      question: 'Which of the following is true for Big O?',
      answer: '2*logn = O(n)',
      distractors: ['n^2 = O(n)', 'n! = O(n)', '2^n = O(n)'],
      explanation: 'Big O notation describes the upper bound. The function n upper bounds the function 2*logn. However, it is not the tightest upper bound, and in general we always specify the tightest upper bound to quantify an algorithm.',
      link: 'https://www.youtube.com/watch?v=RBSGKlAvoiM&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=5m43s'
    },
    {
      question: 'Between Merge sort and Quicksort, which sorting algorithm works faster in the case of larger datasets?',
      answer: 'Merge sort',
      distractors: [
        'testing on speed between the two algorithms has been inconclusive on which one is faster',
        'Quicksort',
        'Both'
      ],
      explanation: 'Merge sort runs quicker than Quick sort in the case of larger datasets.',
      link: 'https://forum.freecodecamp.org/t/the-merge-sort-algorithm-explained/16104'
    },
    {
      question: 'What data structure does a binary search tree degenerate to if it isn\'t balanced properly?',
      answer: 'Linked List',
      distractors: ['Set', 'Queue', 'Dictionary'],
      explanation: 'A binary search tree degenerates to a linked list if it is not balanced properly. It is balanced if the height of the left and right subtrees of any node differ by at most one.',
      link: 'https://www.freecodecamp.org/news/data-structures-101-binary-search-tree-398267b6bff0/'
    },
    {
      question: 'Which algorithm utilizes a pivot value to sort?',
      answer: 'Quick Sort',
      distractors: ['Merge Sort', 'Bubble Sort', 'Insertion Sort'],
      explanation: 'Quick sort works by selecting one element (called “the pivot”) and finding the index where the pivot should end up in the sorted array.',
      link: 'https://www.freecodecamp.org/news/introduction-to-algorithms-with-javascript-examples/#quick-sort'
    },
    {
      question: 'Which of these sorting algorithms follows an average case time complexity of order O(nlogn)?',
      answer: 'Merge Sort',
      distractors: ['Selection Sort', 'Bubble Sort', 'Insertion Sort'],
      explanation: 'The average case time complexity for the merge sort algorithm is O(n log n).',
      link: 'https://youtu.be/l7-f9gS8VOs'
    },
    {
      question: 'Which one of the following terms mean adding an element to the top of the stack?',
      answer: 'Push',
      distractors: ['Peek', 'Pop', 'Display'],
      explanation: 'The push method is used to add an element to the top of the stack.',
      link: 'https://www.youtube.com/watch?v=RBSGKlAvoiM&t=3506s'
    },
    {
      question: 'Which one of these data structures follows the FIFO(First In First Out) method?',
      answer: 'Queues',
      distractors: ['Arrays', 'Trees', 'Stacks'],
      explanation: 'A queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.',
      link: 'https://www.youtube.com/watch?v=RBSGKlAvoiM&t=4558s'
    },
    {
      question: 'What is the basic language of a computer?',
      answer: 'Binary',
      distractors: ['HyperText Markup Language', 'Cascading Style Sheets', 'JavaScript'],
      explanation: 'Computers are simplistic and understand binary. Programming languages such as Python and Java were created to help humans write instructions for computers and interpret it.',
      link: 'https://youtu.be/F0WoVEr0-44?t=336'
    },
    {
      question: 'Which one of these is NOT a common time complexity equation for Big O notation?',
      answer: 'O(n14)',
      distractors: ['O(1)', 'O(log n)', 'O(n)'],
      explanation: 'O(1), O(log n), O(n) are just some of the common time complexity equations for Big O notation.',
      link: 'https://www.youtube.com/watch?v=zg9ih6SVACc&t=867s'
    },
    {
      question: 'What is Big O Notation?',
      answer: 'A way to measure the performance and efficiency of an algorithm.',
      distractors: [
        'A way to notate changes from the server.',
        'A way to notate the different types in a file system.',
        'A way to notate the different elements in an array.'
      ],
      explanation: 'Big O notation is a way to measure the performance of an algorithm.',
      link: 'https://www.freecodecamp.org/news/learn-big-o-notation/'
    },
    {
      question: 'What is the worst case time complexity for accessing an element in a BST(Binary Search Tree)?',
      answer: 'O(n)',
      distractors: ['O(n*logn)', 'O(n*n)', 'O(logn)'],
      explanation: 'The worst case time complexity would be O(n) because we might need to visit all of the nodes.',
      link: 'https://www.freecodecamp.org/news/binary-search-tree-what-is-it/'
    },
    {
      question: 'What is the Design Thinking Process?',
      answer: 'A process to come up with creative, user centric solutions to complex problems.',
      distractors: [
        'A process to fix computers.',
        'A process to design mockups.',
        'A process to troubleshoot Windows applications.'
      ],
      explanation: 'The Design Thinking Process is a way to come up with creative, user centric solutions to complex problems.',
      link: 'https://www.freecodecamp.org/news/the-design-thinking-process-explained/'
    },
    {
      question: 'Which of the following data structures is used to convert an infix expression to a postfix expression?',
      answer: 'Stacks',
      distractors: ['Queues', 'Priority Queues', 'LinkedList'],
      explanation: 'A stack is the most suitable data structure for converting an infix expression to a postfix expression',
      link: 'https://youtu.be/B31LgI4Y4DQ?t=13587'
    },
    {
      question: 'Which of the following techniques is implemented to improve CPU performance?',
      answer: 'Pipelining',
      distractors: ['Encoding', 'Ratelimiting', 'None of these'],
      explanation: 'A substantial improvement in performance can be achieved by overlapping the execution of successive instructions,using a technique called pipelining ',
      link: 'https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/pipelining/index.html'
    },
    {
      question: 'Which one of these data structures follows the LIFO(Last In First Out) method?',
      answer: 'Stacks',
      distractors: ['Priority Queues', 'Trees', 'Queues'],
      explanation: 'A stack is a linear data structure that uses the LIFO(Last In First Out) method.',
      link: 'https://youtu.be/RBSGKlAvoiM?t=3567'
    },
    {
      question: 'Which of the following is a Divide and Conquer algorithm?',
      answer: 'Merge Sort',
      distractors: ['Selection Sort', 'Heap Sort', 'Bubble Sort'],
      explanation: 'Merge Sort recursively splits the array into smaller arrays, sorts those arrays and merges them into one sorted array.',
      link: 'https://www.freecodecamp.org/news/an-intro-to-advanced-sorting-algorithms-merge-quick-radix-sort-in-javascript-b65842194597/'
    },
    {
      question: 'Which of the following is correct for arrays?',
      answer: 'Size of an array can not be changed once initialized',
      distractors: [
        'Insertion and deletion of elements has a time complexity of O(1)',
        'A single array can contain data of different data types',
        'It can only be one-dimensional'
      ],
      explanation: 'When you create an array, you are allocated a block of contiguous memory and in order to change it\'s size, you will have to create a new array.',
      link: 'https://youtu.be/zg9ih6SVACc?t=1470'
    },
    {
      question: 'What is a first class function?',
      answer: 'The ability to send and receive functions like values.',
      distractors: [
        'Functions with higher priority than others.',
        'Functions declared in classes',
        'Functions that only return numbers'
      ],
      explanation: 'If functions can be sent and received just like values, than that language is said to have first class functions. They are also called first class citizens.',
      link: 'https://www.freecodecamp.org/news/discover-the-power-of-first-class-functions-fd0d7b599b69/'
    },
    {
      question: 'What are parallel arrays?',
      answer: 'two or more arrays that contain the same number of elements and have corresponding values in the same position',
      distractors: [
        'arrays that only hold strings',
        'arrays that only hold numbers',
        'a special type of nested arrays'
      ],
      explanation: 'Parallel arrays contain the same number of elements and have corresponding values in the same position.',
      link: 'https://www.youtube.com/watch?v=zg9ih6SVACc&t=1379s'
    },
    {
      question: 'What is a bug?',
      answer: 'An error in a computer program that causes it to generate an incorrect or unexpected result or output.',
      distractors: [
        'A programming paradigm. ',
        'A programming structure that repeats a block of code a given number of times',
        'This concept is not related to programming at all.'
      ],
      explanation: 'A bug is an error in a computer program that causes it to generate an incorrect or unexpected result or output. The process of finding and fixing bugs is known as debugging.',
      link: 'https://en.wikipedia.org/wiki/Software_bug'
    },
    {
      question: 'What is a Floating point number?',
      answer: 'A number with a decimal point',
      distractors: ['A number greater than 100', 'A number less than 0', 'A number that is divisible by 3'],
      explanation: 'A floating point number is a number with a decimal point.',
      link: 'https://www.freecodecamp.org/news/floating-point-definition/'
    },
    {
      question: 'How many bytes make up a Zettabyte?',
      answer: '1 sextillion bytes',
      distractors: ['1 hundred bytes', '1 thousand bytes', '1 million bytes'],
      explanation: 'A Zettabyte is composed of 1 sextillion bytes',
      link: 'https://www.freecodecamp.org/news/zettabyte-definition/'
    },
    {
      question: 'The process of finding and fixing bugs in a computer program is known as...',
      answer: 'Debugging',
      distractors: ['Encapsulation', 'Abstraction', 'Looping'],
      explanation: 'Debugging is the process of finding and fixing bugs in a computer program. ',
      link: 'https://en.wikipedia.org/wiki/Debugging'
    },
    {
      question: 'How many bytes make up a Terabyte?',
      answer: '1 trillion bytes',
      distractors: ['1 billion bytes', '1 thousand bytes', '1 million bytes'],
      explanation: 'A Terabyte is composed of 1 trillion bytes',
      link: 'https://www.freecodecamp.org/news/terabyte-definition/'
    },
    {
      question: 'What is a server?',
      answer: 'A software or hardware device that sends data over a network',
      distractors: ['A Python library', 'A type of compiler', 'An IDE'],
      explanation: 'A server is a software or hardware device that sends data over a network',
      link: 'https://www.freecodecamp.org/news/server-definition/'
    },
    {
      question: 'The values that an operator operates on are known as...',
      answer: 'Operands',
      distractors: ['Operators', 'Operative', 'Operation'],
      explanation: 'The values that an operator operates on are known as operands.',
      link: 'https://en.wikipedia.org/wiki/Operand'
    },
    {
      question: 'What is an algorithm?',
      answer: 'A sequence of detailed step-by-step instructions to complete a task.',
      distractors: ['A programming paradigm.', 'A Python module.', 'A web development framework.'],
      explanation: 'An algorithm is a sequence of detailed step-by-step instructions to complete a task.',
      link: 'https://www.freecodecamp.org/news/algorithms-explained-what-they-are-and-common-sorting-algorithms/'
    },
    {
      question: 'How many bits make up a byte?',
      answer: '8 bits',
      distractors: ['16 bits', '32 bits', '12 bits'],
      explanation: 'There are 8 bits in a byte',
      link: 'https://www.freecodecamp.org/news/byte-definition/'
    },
    {
      question: 'What is an operating system?',
      answer: 'Manages the hardware and software components of a computer',
      distractors: [
        'A program that translates code from one languages to another',
        'A system that converts data into machine code',
        `A base 2 numerical system made up of 0's and 1's`
      ],
      explanation: 'An operating system manages the hardware and software components of a computer.',
      link: 'https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/'
    },
    {
      question: 'How many bytes make up a Exabyte?',
      answer: '1 quintillion bytes',
      distractors: ['1 billion bytes', '1 trillion bytes', '1 thousand bytes'],
      explanation: 'A Exabyte is composed of 1 quintillion bytes',
      link: 'https://www.freecodecamp.org/news/exabyte-definition/'
    },
    {
      question: 'What does API stand for?',
      answer: 'Application Programming Interface',
      distractors: ['Apple Pie Inside', 'Application Program Interface', 'Another Program Interface'],
      explanation: 'API stands for Application Programming Interface.',
      link: 'https://www.freecodecamp.org/news/what-does-api-stand-for-a-definition-of-the-coding-acronym-in-plain-english/'
    },
    {
      question: 'How many bytes make up a Gigabyte?',
      answer: '1 billion bytes',
      distractors: ['1 quintillion bytes', '1 trillion bytes', '1 hundred bytes'],
      explanation: 'A Gigabyte is composed of 1 billion bytes',
      link: 'https://www.freecodecamp.org/news/gigabyte-definition/'
    },
    {
      question: 'Select the type of loop that repeats a sequence of instructions an unknown number of times while a condition is True. ',
      answer: 'While loop',
      distractors: ['For loop', 'Infinite loop', 'Circular loop'],
      explanation: 'While loops repeat a block of code an unknown number of times while a condition is True and they stop when the condition is False. ',
      link: 'https://www.freecodecamp.org/news/python-while-loop-tutorial/'
    },
    {
      question: 'How many bytes make up a Yottabyte?',
      answer: '1 septillion bytes',
      distractors: ['1 thousand bytes', '1 million bytes', '1 billion bytes'],
      explanation: 'A Yottabyte is made up of 1 septillion bytes',
      link: 'https://www.freecodecamp.org/news/yottabyte-definition/'
    },
    {
      question: 'How many bytes make up a Kilobyte?',
      answer: '1,000 bytes',
      distractors: ['100 bytes', '10 bytes', '1 byte'],
      explanation: 'A Kilobyte is composed of 1,000 bytes',
      link: 'https://www.freecodecamp.org/news/kilobyte-definition/'
    },
    {
      question: 'What is a bit?',
      answer: 'Smallest form of data on a computer',
      distractors: ['Structured assembly language ', 'A special type of file system', 'A special type of object'],
      explanation: 'A binary digit or "bit" is the smallest form of data on a computer',
      link: 'https://www.freecodecamp.org/news/bit-definition/'
    },
    {
      question: 'What is RAM?',
      answer: 'A type of short term memory that stores data that computer processors need access to',
      distractors: [
        'A type of memory that computers use to call servers',
        'A type of memory that computers use to delete data',
        'A type of memory that computers use to connect with other devices'
      ],
      explanation: 'Random Access Memory is a type of short term memory that stores data that computer processors can access frequently.',
      link: 'https://www.freecodecamp.org/news/ram-definition/'
    },
    {
      question: 'What unit is used to measure the speed of a CPU?',
      answer: 'GHz (gigahertz)',
      distractors: ['MHz (megahertz)', 'kHz (kilohertz)', 'THz (terahertz)'],
      explanation: 'The speed of a computer is determined by its clock cycle. The clock speed measures the number of cycles the CPU executes per second. Hertz is a unit of frequency. The CPU clock cycle is measured in GHz (gigahertz). 1GHz is equal to 10 ⁹ Hz (hertz).So 1Gigahertz means 10 ⁹ cycles per second.',
      link: 'https://www.freecodecamp.org/news/how-does-a-cpu-work/'
    },
    {
      question: 'Each one of the alternative sequence of statements in a conditional statement is known as...',
      answer: 'Branch',
      distractors: ['Decision', 'Path', 'Loop'],
      explanation: 'Each one of the alternative sequence of statements in a conditional statement is known as a branch.',
      link: 'https://www.freecodecamp.org/news/python-if-else-statement-conditional-statements-explained/'
    },
    {
      question: 'What is an infinite loop?',
      answer: 'A loop that will continue endlessly unless an external intervention stops its execution. ',
      distractors: [
        'A loop that only completes two iterations.',
        'A loop that cannot be stopped, even with external intervention. ',
        'A loop that never runs.'
      ],
      explanation: 'An infinite loop is a loop whose condition is always true, so it will continue running endlessly unless there is some external intervention to stop it.',
      link: 'https://www.freecodecamp.org/news/python-while-loop-tutorial/'
    },
    {
      question: 'What is pair programming?',
      answer: 'Two people coding together on one computer',
      distractors: [
        'One person coding on two computers at the same time',
        'Programming on a non-Apple computer (also known as pear programming)',
        'Programming where you use each data structure twice'
      ],
      explanation: 'When Pair Programming, one developer is the "driver" with their hands on the keyboard. The other is the "navigator" helping talk through the problem and decide what to do. They periodically switch roles. This is an efficient and commonly used Agile Software Development methodology.',
      link: 'https://www.freecodecamp.org/news/want-to-be-a-developer-you-should-probably-be-pair-programming-2c6ec12c4866/'
    },
    {
      question: 'What does CPU stand for?',
      answer: 'Central Processing Unit',
      distractors: ['Central Protocol Unit', 'Central Programming Unit', 'Control Processing Unit'],
      explanation: 'CPU stands for Central Processing Unit which performs logic computations for the program.',
      link: 'https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/'
    },
    {
      question: 'How many bytes make up a Petabyte?',
      answer: '1 quadrillion bytes',
      distractors: ['1 quintillion bytes', '1 hundred bytes', '1 million bytes'],
      explanation: 'A Petabyte is composed of 1 quadrillion bytes',
      link: 'https://www.freecodecamp.org/news/petabyte-definition/'
    },
    {
      question: 'What is a Boolean?',
      answer: 'A data type representing a true or false value.',
      distractors: ['A data type representing a number.', 'A programming language.', 'A Python library.'],
      explanation: 'In computer science, a Boolean is a data type which only has two possible values of true or false.',
      link: 'https://www.freecodecamp.org/news/boolean-definition/'
    },
    {
      question: 'What is a virtual machine?',
      answer: 'A computer inside another computer',
      distractors: ['a popular JavaScript library', 'a Linux distribution', 'another name for a compiler'],
      explanation: 'A virtual machine is a program you run on a computer that acts like it is a separate computer. It is basically a way to create a computer within a computer.',
      link: 'https://www.freecodecamp.org/news/what-is-a-virtual-machine-and-how-to-setup-a-vm-on-windows-linux-and-mac/'
    },
    {
      question: 'What is a password?',
      answer: 'A secret set of characters',
      distractors: ['A way to request data from a server', 'A special type of computer memory', 'A type of array'],
      explanation: 'A password is a secret set of characters used to login in to applications',
      link: 'https://www.freecodecamp.org/news/password-definition/'
    },
    {
      question: 'A special symbol used to perform arithmetic or logical computations is known as...',
      answer: 'Operator',
      distractors: ['Operand', 'Operation', 'Operative'],
      explanation: 'A special symbol used to perform arithmetic or logical computations is known as operator.',
      link: 'https://en.wikipedia.org/wiki/Operator_(computer_programming)'
    },
    {
      question: 'Which one is NOT a popular operating system for computers?',
      answer: 'PASSIM',
      distractors: ['Microsoft Windows', 'macOS', 'Linux'],
      explanation: 'Linux, Microsoft Windows and macOS are three popular operating systems used by developers.',
      link: 'https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/'
    },
    {
      question: 'What is RGB?',
      answer: 'A color model',
      distractors: ['An Internet Protocol', 'HTML syntax', 'A secret password'],
      explanation: 'RGB is an acronym that stands for Red Green Blue. It expresses colors in terms of the amount of red, green, and blue they are made up of and uses a human counting system with integers ranging from 0-255 or a percentage ranging from (0% - 100%).',
      link: 'https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/'
    },
    {
      question: 'Fonts that are generally available across most browsers and operating systems are known as...',
      answer: 'Web safe fonts',
      distractors: ['General fonts', 'Universal fonts', 'Web Fonts'],
      explanation: 'Web safe fonts are the fonts that are generally available across most browsers and operating systems.',
      link: 'https://www.freecodecamp.org/news/web-safe-fonts/'
    },
    {
      question: 'What does GIF stand for?',
      answer: 'Graphics Interchange Format',
      distractors: [
        'Graphical International Format',
        'Graphical Interconnected Functions',
        'General Interchange Format'
      ],
      explanation: 'GIF stands for Graphics Interchange Format.',
      link: 'https://www.freecodecamp.org/news/how-to-make-a-gif-create-animated-gifs-without-downloading-software/#:~:text=A%20GIF%20(Graphics%20Interchange%20Format,with%20your%20friends%20and%20family.'
    },
    {
      question: 'When was the World Wide Web invented?',
      answer: '1989',
      distractors: ['1990', '1995', '2005'],
      explanation: 'Tim Berners-Lee invented the World Wide Web in 1989.',
      link: 'https://en.wikipedia.org/wiki/World_Wide_Web'
    },
    {
      question: 'What does DOM stand for?',
      answer: 'Document Object Model',
      distractors: ['Direct Object Model', 'Document Objective Model', 'Documentary Object Mobile'],
      explanation: 'DOM stands for Document Object Model.',
      link: 'https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/#:~:text=DOM%20stands%20for%20Document%20Object,remove%20elements%20from%20the%20document.'
    },
    {
      question: 'What does PNG stand for?',
      answer: 'Portable Network Graphics',
      distractors: ['Portable New Graphics', 'Premium Network Graphics', 'Portable Network Green'],
      explanation: 'PNG stands for Portable Network Graphics.',
      link: 'https://en.wikipedia.org/wiki/Portable_Network_Graphics'
    },
    {
      question: 'What color would rgb(255,255,255) give?',
      answer: 'White',
      distractors: ['Red', 'Black', 'Blue'],
      explanation: 'The maximum value of 255 represents that the full amount of all colors and their full intensity is on display.',
      link: 'https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/'
    },
    {
      question: 'The rules that determine the correct structure of the code in a computer program are known as...',
      answer: 'Syntax',
      distractors: ['Semantics', 'Interpreter', 'Compiler'],
      explanation: 'The rules that determine the correct structure of the code in a computer program are known as syntax.',
      link: 'https://en.wikipedia.org/wiki/Syntax_(programming_languages)'
    },
    {
      question: 'What do R, G, and B in RGB stand for?',
      answer: 'Red, green, and blue',
      distractors: ['Red, gray, and black ', 'Red, green, and black', 'Red, gray, and blue'],
      explanation: 'RGB is an acronym that stands for Red Green Blue',
      link: 'https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/'
    },
    {
      question: 'What does a CPU do?',
      answer: 'A CPU executes commands from a computer program',
      distractors: [
        'Writes code for developers',
        'Displays images and text on screen',
        'Points to objects on the screen'
      ],
      explanation: 'The CPU is the brains of a computer that processes operations and executes instructions for computer programs. ',
      link: 'https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/'
    },
    {
      question: 'What is Binary?',
      answer: `A numeral system where the values are 0's and 1's.`,
      distractors: [
        `A numeral system where the values are 1's and 2's.`,
        'A numeral system where the values are 0-7.',
        'A numeral system where the values are 0-9.'
      ],
      explanation: 'Binary is a base 2 numeral system whose values are 0 and 1.',
      link: 'https://www.freecodecamp.org/news/binary-definition/'
    },
    {
      question: 'The process by which a function calls itself directly or indirectly is known as...',
      answer: 'Recursion',
      distractors: ['Looping', 'Encapsulation', 'Decomposition'],
      explanation: 'Recursion is the process by which a function calls itself directly or indirectly during its execution. This works for problems that can be solved by solving smaller instances of the same problem. ',
      link: 'https://www.freecodecamp.org/news/understanding-recursion-in-programming/'
    },
    {
      question: 'Which of the following is considered an example of an input device?',
      answer: 'A computer mouse',
      distractors: ['Speakers', 'Monitor', 'Projector'],
      explanation: 'Examples of Input devices are a keyboard (used for typing text and characters – essentially for entering any written information), a mouse (for clicking, pointing, and selecting appropriate data) and a microphone.',
      link: 'https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/'
    },
    {
      question: 'What does IDE stand for?',
      answer: 'Integrated Development Environment',
      distractors: [
        'Internal Development Environment',
        'Integrated Design Environment',
        'International Development Experimentation'
      ],
      explanation: 'IDE stands for Integrated Development Environment.',
      link: 'https://www.freecodecamp.org/news/what-is-an-ide-in-programming-an-ide-definition-for-developers/'
    },
    {
      question: 'The set of instructions that specifies a computation in known as...',
      answer: 'Program',
      distractors: ['Syntax', 'Recursion', 'API'],
      explanation: 'The set of instructions that specifies a computation is known as a program.',
      link: 'https://www.freecodecamp.org/news/what-is-programming/'
    },
    {
      question: 'What do HDD and SSD stand for in computer hardware?',
      answer: 'Hard Disk Drive & Solid State Drive',
      distractors: [
        'Harvest Disk Drive & Solid State Drive',
        'Hard Disk Drive & Segment State Drive',
        'Hard Disk Drive & Scratch State Drive'
      ],
      explanation: 'HDD stands for Hard Disk Drive while SSD stands for Solid State Drive.',
      link: 'https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/'
    },
    {
      question: 'Who invented the World Wide Web?',
      answer: 'Tim Berners-Lee',
      distractors: ['Ada Lovelace', 'Alan Turing', 'Quincy Larson'],
      explanation: 'Tim Berners-Lee invented the World Wide Web in 1989.',
      link: 'https://en.wikipedia.org/wiki/Tim_Berners-Lee'
    },
    {
      question: 'What is another term used when referring to the CPU?',
      answer: 'Processor',
      distractors: ['Operating System', 'System Unit', 'Computer Software'],
      explanation: 'CPU is short for Central Processing Unit. It is also known as a processor or microprocessor.',
      link: 'https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/'
    },
    {
      question: 'What does ISP stand for?',
      answer: 'Internet Service Provider',
      distractors: ['Internet System Provider', 'International Service Provider', 'Intermediate Systems Provider'],
      explanation: 'ISP stands for Internet Service Provider.',
      link: 'https://www.freecodecamp.org/news/how-does-the-internet-work/'
    },
    {
      question: 'What does JPEG stand for?',
      answer: 'Joint Photographic Experts Group',
      distractors: [
        'Join Photogenic Experimental Group',
        'Join Photographic External Graphics',
        'Join Photos Enchanted Graphics'
      ],
      explanation: 'JPEG stands for Joint Photographic Experts Group.',
      link: 'https://en.wikipedia.org/wiki/JPEG'
    },
    {
      question: 'What does HTTP stand for?',
      answer: 'HyperText Transfer Protocol',
      distractors: ['HyperText Transmission Protocol', 'HyperTest Transfer Product', 'HyperText Transfer Password'],
      explanation: 'HTTP stands for HyperText Transfer Protocol.',
      link: 'https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/'
    },
    {
      question: 'How many bytes make up a Megabyte?',
      answer: '1 million bytes',
      distractors: ['1 thousand bytes', '1 billion bytes', '1 trillion bytes'],
      explanation: 'A Megabyte is composed of 1 million bytes',
      link: 'https://www.freecodecamp.org/news/megabyte-definition/'
    },
    {
      question: 'What is the Internet?',
      answer: 'A bunch of wires and undersea cables connected and buried deep in the ground and oceans, all around the world.',
      distractors: ['A cloud', 'Another term for the World Wide Web', 'An executable program file'],
      explanation: `The Internet is actually a wire. Well, it's many wires that connect computers all around the world. The Internet is also infrastructure. It's a global network of interconnected computers that communicate in a standardized way with set protocols.`,
      link: 'https://www.freecodecamp.org/news/brief-history-of-the-internet/'
    },
    {
      question: 'Which phase is NOT part of the Design Thinking Process?',
      answer: 'Rationalize',
      distractors: ['Ideate', 'Prototype', 'Empathize'],
      explanation: 'The five phases of the Design Thinking Process are Empathize, Define, Ideate, Prototype, and Test.',
      link: 'https://www.freecodecamp.org/news/the-design-thinking-process-explained/'
    },
    {
      question: 'What type of loop is used to repeat a block of code a known number of times?',
      answer: 'For loop',
      distractors: ['While loop', 'Infinite loop', 'Triangular loop'],
      explanation: 'For loops repeat a block of code a known number of times, so we can use them when we know in advance how many iterations we need to run to complete a task. ',
      link: 'https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/'
    },
    {
      question: 'Which one is NOT a standard HTTP response status code?',
      answer: '702',
      distractors: ['403', '504', '201'],
      explanation: 'HTTP response status codes are divided in five groups between 100-599.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status'
    },
    {
      question: 'What is WebP?',
      answer: 'Is an image format',
      distractors: ['Is a web page', 'Is a video format', 'Is a domain name'],
      explanation: 'Is an image format that provides lossless and lossy compression for images on the Internet using predictive coding to encode an image.',
      link: 'https://www.freecodecamp.org/news/make-your-website-load-lightning-fast-with-webp-images-cf55c98ac0a2/'
    },
    {
      question: 'What is Lossy compression?',
      answer: 'A compression algorithm',
      distractors: ['An algorithm to reduce file names', 'A reverse algorithm', 'A sorting algorithm'],
      explanation: 'Lossy compression permits reconstruction only of an approximation of the original data.',
      link: 'https://www.freecodecamp.org/news/image-file-types-picture-format-extensions-jpeg-gif-png-svg-tiff/'
    },
    {
      question: 'What is a domain name?',
      answer: 'The address of a website',
      distractors: ['The name of a website', 'The name of a network', 'The IP address of a user'],
      explanation: 'A domain name is the address of a website. It\'s the name you type into a web browser to access that specific website.',
      link: 'https://www.freecodecamp.org/news/what-is-a-domain-name-example/'
    },
    {
      question: 'A value passed to a function (or method) when calling the function is known as...',
      answer: 'Argument',
      distractors: ['Parameter', 'Return value', 'Class'],
      explanation: 'An argument is a value passed to a function (or method) when the function or method is called.',
      link: 'https://www.freecodecamp.org/news/python-function-examples-how-to-declare-and-invoke-with-parameters-2/'
    },
    {
      question: 'What does SVG stand for?',
      answer: 'Scalable Vector Graphics',
      distractors: ['Stretchable Vector Graphics', 'Scalable Vectorial Graphics', 'Screen Vector Graphics'],
      explanation: 'SVG stands for Scalable Vector Graphics.',
      link: 'https://www.freecodecamp.org/news/use-svg-images-in-css-html/'
    },
    {
      question: 'What is Lossless compression?',
      answer: 'a compression algorithm that allows the original data to be perfectly reconstructed from the compressed data.',
      distractors: ['a sorting algorithm', 'a reverse algorithm', 'an algorithm that converts wav files to mp3 files'],
      explanation: 'Lossless compression is a compression algorithm that allows the original data to be perfectly reconstructed from the compressed data.',
      link: 'https://www.freecodecamp.org/news/image-file-types-picture-format-extensions-jpeg-gif-png-svg-tiff/'
    },
    {
      question: 'What is a Nibble?',
      answer: 'Nibble is a four-bit aggregation',
      distractors: ['Nibble is an algorithm', 'Nibble is a octet', 'Nibble is a device'],
      explanation: 'A Nibble is a group of four bits (half of a byte)',
      link: 'https://en.wikipedia.org/wiki/Nibble'
    },
    {
      question: 'Which data structure is used for the implementation of a recursive algorithm?',
      answer: 'Stack',
      distractors: ['Queue', 'Linked list', 'Tree'],
      explanation: 'In recursion, the nested function that is called later returns the value first, which is in the same nature as that of a stack (Last In First Out).',
      link: 'https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/'
    },
    {
      question: 'Which one is NOT a programming paradigm?',
      answer: 'Boolean Programming',
      distractors: ['Object-Oriented Programming', 'Functional Programming', 'Procedural Programming'],
      explanation: 'Object-oriented programming, functional programming and procedural programming are all well known paradigms.',
      link: 'https://www.freecodecamp.org/news/an-introduction-to-programming-paradigms/'
    },
    {
      question: 'Which one is NOT a real logic gate?',
      answer: 'XAND',
      distractors: ['AND', 'NAND', 'XNOR'],
      explanation: 'The seven logic gates in boolean algebra are AND, OR, XOR, NOT, NAND, NOR, and XNOR.',
      link: 'https://www.freecodecamp.org/news/boolean-algebra/'
    },
    {
      question: 'Which type of computer network generally has the smallest size?',
      answer: 'PAN',
      distractors: ['MAN', 'LAN', 'WAN'],
      explanation: 'Some examples of a Personal Area Network (PAN) include tablets, video game consoles and smartphones. ',
      link: 'https://en.wikipedia.org/wiki/Computer_network'
    },
    {
      question: 'Which color model is used for printing?',
      answer: 'CMYK',
      distractors: ['RGB', 'RYB', 'HSV'],
      explanation: 'The CMYK color model uses subtractive colors, thus producing better results on a white background like a paper.',
      link: 'https://en.wikipedia.org/wiki/Color_model'
    },
    {
      question: 'What are the four pillars of Object-oriented programming?',
      answer: 'Abstraction, Encapsulation, Inheritance, and Polymorphism.',
      distractors: [
        'Objects, Methods, Properties and Fields.',
        'Immutability, Purity, Transparency and State.',
        'Declaration, Modeling, Evaluation and Implementation.'
      ],
      explanation: 'Abstraction, encapsulation, inheritance, and polymorphism are software design principles to help you write clean object-oriented code.',
      link: 'https://www.freecodecamp.org/news/four-pillars-of-object-oriented-programming/'
    },
    {
      question: 'What is pseudocode?',
      answer: 'Pseudocode is fake code that is used to write programs that are easily understood.',
      distractors: [
        'An old programming language that they used back in the day.',
        'A diagrammatic representation of a set of instructions',
        'A specific programming language that all computers use'
      ],
      explanation: 'Pseudocode is fake code that is used to write programs in which you represent the sequence of actions and instructions (aka algorithms) in a form that humans can easily understand.',
      link: 'https://www.freecodecamp.org/news/what-is-pseudocode-in-programming/'
    },
    {
      question: 'What is a function?',
      answer: 'Is a block of code that is self-contained behavior for the computer to run.',
      distractors: [
        'an extensible program-code-template',
        'Text that does not get executed by the computer',
        'container for storing data'
      ],
      explanation: 'The code inside a function runs only when it is needed, meaning only when it is called.',
      link: 'https://www.freecodecamp.org/news/introduction-to-computer-programming-and-computer-science-course/'
    },
    {
      question: 'What are loops?',
      answer: 'Code used to run certain instructions repeatedly.',
      distractors: [
        'Code that is ran only one time',
        'Code to encapsulate statements',
        'Code that ends the program'
      ],
      explanation: 'A statement which can repeat a set of statements up to a fixed number of times or until a certain criterion is satisfied.',
      link: 'https://www.freecodecamp.org/news/introduction-to-computer-programming-and-computer-science-course/'
    },
    {
      question: 'What is an array?',
      answer: 'Is a list of data',
      distractors: [
        'A variable that is assigned a single value',
        'A function that loops through data',
        'A programming language used for Macintosh computer'
      ],
      explanation: 'An array is a special variable, which can hold more than one value.',
      link: 'https://www.freecodecamp.org/news/introduction-to-computer-programming-and-computer-science-course/'
    },
    {
      question: 'What is the best case time complexity for the merge sort algorithm?',
      answer: 'O(n*log(n))',
      distractors: ['O(n^2)', 'O(log(n))', 'O(2^n)'],
      explanation: 'Merge sort is a divide and conquer algorithm that has a best case time complexity of O(n*log n)',
      link: 'https://www.freecodecamp.org/news/an-intro-to-advanced-sorting-algorithms-merge-quick-radix-sort-in-javascript-b65842194597/'
    },
    {
      question: 'What is the advantage of using linked lists over arrays?',
      answer: 'Linked lists helps in faster insertions and deletions than arrays',
      distractors: [
        'Memory usage in linked lists is less than arrays',
        'Reverse traversal is possible in singly linked lists',
        'Random accessing elements is easier in linked lists than arrays'
      ],
      explanation: 'Linked lists have quicker insertions and deletions than arrays because there is no need to shift all other elements with lists.',
      link: 'https://www.freecodecamp.org/news/data-structures-101-linked-lists-254c82cf5883/'
    },
    {
      question: 'Which sorting algorithm is best when data is nearly sorted?',
      answer: 'Bubble Sort',
      distractors: ['Merge Sort', 'Insertion Sort', 'Selection Sort'],
      explanation: 'If the list is nearly sorted, then Bubble Sort is a good choice because it will sort the data with only a few passes of the array.',
      link: 'https://www.freecodecamp.org/news/bubble-sort/'
    },
    {
      question: 'In which generation of computers were compilers introduced?',
      answer: 'Third generation',
      distractors: ['Fourth generation', 'First generation', 'Second generation'],
      explanation: 'Translators called compilers were introduced in third generation to translate the code programmers wrote to machine executable binary code.',
      link: 'https://www.freecodecamp.org/news/computer-coding-computer-program-definition-and-code-meaning/'
    },

    {
      question: 'Which algorithm finds the shortest path between nodes in a graph?',
      answer: `Dijkstra's Algorithm`,
      distractors: ['Rabin-Karp Algorithm', 'Binary Search Algorithm', 'Quicksort Algorithm'],
      explanation: `Dijkstra's Algorithm can find the shortest path from a node (called the 'source node') to all other nodes in the graph, producing a shortest-path tree.`,
      link: 'https://www.freecodecamp.org/news/dijkstras-shortest-path-algorithm-visual-introduction/'
    },

    {
      question: `In Banker's algorithm, which part of the computer represents the 'Banker'?`,
      answer: 'Operating System',
      distractors: ['RAM', 'CPU', 'Register'],
      explanation: `Banker's algorithm is most commonly used within banking systems to help determine if resources are available to lend to customers. The operating system represents the 'Banker' because it decides the resource allocation.`,
      link: 'https://www.freecodecamp.org/news/what-is-an-os-operating-system-definition-for-beginners/'
    },

    {
      question: 'What is Big Theta notation?',
      answer: `A range between the lower and upper bounds of an algorithm's performance`,
      distractors: [
        `The lower bound of an algorithm's performance`,
        `The upper bound of an algorithm's performance`,
        `The average case for an algorithm's performance`
      ],
      explanation: 'Big theta is either the exact performance value of the algorithm, or a useful range between narrow upper and lower bounds.',
      link: 'https://www.freecodecamp.org/news/big-theta-and-asymptotic-notation-explained/'
    },

    {
      question: 'Which of the following runtimes can be used for recursive functions that make multiple calls?',
      answer: `branches ^ (depth) i.e. 'b' raised to the power of 'd'`,
      distractors: ['depth ^ (branches)', '2 ^ (branches)', '2 ^ (branches * depth)'],
      explanation: 'An O(branches ^ depth) runtime is often reported (although not always) for recursive functions that make multiple calls.',
      link: 'https://www.freecodecamp.org/news/learn-big-o-notation/'
    },
    {
      question: 'What is the worst case time complexity for binary and linear search?',
      answer: 'binary search is O(logn) and linear search is O(n)',
      distractors: [
        'binary search is O(n) and linear search is O(logn)',
        'binary search is O(n) and linear search is O(n)',
        'binary search is O(logn) and linear search is O(logn)'
      ],
      explanation: 'The worst case time complexity for linear search O(n) because we have to iterate through n elements. The worst case time complexity for binary search is O(logn) because it is a divide and conquer algorithm.',
      link: 'https://www.freecodecamp.org/news/search-algorithms-linear-and-binary-search-explained/'
    },
    {
      question: 'What is Proprietary Software?',
      answer: 'Software which is owned by an organization or an individual.',
      distractors: [
        'Software where the code is publicly available for people to modify, and share.',
        'Software where the code can be used by everyone for free',
        'Software that has only been developed by Oracle'
      ],
      explanation: 'The original authors of proprietary software can modify its code. Users of this type of software have to agree not to alter it in any way unless they have permission from the owners to do so.',
      link: 'https://www.freecodecamp.org/news/what-is-open-source-software-explained-in-plain-english'
    },
    {
      question: 'What is Open Source Software?',
      answer: 'A type of software where the code is publicly available for people to view, modify, and share.',
      distractors: [
        'Software owned by Big Tech Companies',
        'Software developed by Facebook',
        'Software where the code is only available to a select few people'
      ],
      explanation: 'Open Source Software is code that is publicly available for people to view, modify, and share. One example of open source would be freeCodeCamp.',
      link: 'https://www.freecodecamp.org/news/what-is-open-source-software-explained-in-plain-english'
    },
    {
      question: 'How does the Bubble Sort algorithm work?',
      answer: 'This algorithm traverses a list, compares adjacent values, and swaps them if they are not in the correct order.',
      distractors: [
        'This algorithm divides the list into different buckets and sorts these buckets individually.',
        'This algorithm selects the current smallest element, and swaps it into place.',
        'This algorithm breaks down an unsorted list into two halves.'
      ],
      explanation: 'The Bubble Sort algorithm traverses a list, compares adjacent values, and swaps them if they are not in the correct order.',
      link: 'https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c'
    },
    {
      question: 'What is the underlining process behind the Merge Sort algorithm?',
      answer: 'Recursion',
      distractors: ['String matching and parsing', 'backtracking', 'graph traversal'],
      explanation: 'The Merge Sort algorithm works by recursively breaking down an unsorted list into two halves until it reaches a point where it can no longer be broken down.',
      link: 'https://www.freecodecamp.org/news/how-to-sort-recursively-in-python'
    },
    {
      question: 'What is a String?',
      answer: 'A data type that comprises of a sequence of characters',
      distractors: [
        'An Array indicator for programming languages',
        'A Data Structure for data arrangement',
        'a programming language for complex tasks'
      ],
      explanation: 'A string is a data type that can contain many different characters. A string is written as a series of characters between single or double quotes.',
      link: 'https://www.freecodecamp.org/news/how-to-lowercase-a-string-in-javascript-tolowercase-in-js/'
    },
    {
      question: 'What is the worst case time complexity for Bubble sort?',
      answer: 'O(n^2)',
      distractors: ['O(logn)', 'O(n)', 'O(nlogn)'],
      explanation: 'Bubble sort has a worst case time complexity of O(n^2), which is slow compared to other sorting algorithms.',
      link: 'https://www.freecodecamp.org/news/bubble-sort/'
    },
    {
      question: `Which HTTP status code returns 'I'm a teapot'?`,
      answer: '418',
      distractors: ['000', '007', '128'],
      explanation: `HTTP status code 418 returns 'I'm a teapot' and it is a reference to a 1998 April Fools' joke.`,
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418#'
    },
    {
      question: 'Which of the following time complexities is considered to be the fastest?',
      answer: 'O(1)',
      distractors: ['O(logn)', 'O(n)', 'O(nlogn)'],
      explanation: 'O(1) is independent of input size so it remains in constant time regardless of the size of the input.',
      link: 'https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/'
    },
    {
      question: 'What is the worst case time complexity for Selection sort?',
      answer: 'O(n*n)',
      distractors: ['O(n*logn)', 'O(n^3)', 'O(n+k)'],
      explanation: 'Selection sort has a worst case time complexity of O(n*n), due to the two nested loops.',
      link: 'https://forum.freecodecamp.org/t/the-selection-sort-algorithm-explained-with-examples/16106'
    },
    {
      question: 'Which of the following is a dynamically typed language?',
      answer: 'Python',
      distractors: ['C', 'Java', 'C++'],
      explanation: 'Statically-typed languages like C, C++, and Java, perform type checking at compile time whereas dynamically-typed languages like Python and JavaScript  perform type checking at runtime.',
      link: 'https://www.freecodecamp.org/news/why-use-static-types-in-javascript-part-1-8382da1e0adb/#:~:text=series%20is%20about.-,First%2C%20a%20definition,-The%20quickest%20way'
    },
    {
      question: 'If you were to solve the classic FizzBuzz challenge, what would be the output for the 15th iteration?',
      answer: 'FizzBuzz',
      distractors: ['Fizz', 'Buzz', 'BuzzFizz'],
      explanation: 'FizzBuzz is a common coding challenge where you will need to write a loop that iterates from 1 to N while outputting \'Fizz\' at multiples of 3, \'Buzz\' at multiples of 5 and \'FizzBuzz\' at multiples of 3 and 5. Position 15 has the word FizzBuzz because it is a multiple of both 3 and 5.',
      link: 'https://en.wikipedia.org/wiki/Fizz_buzz'
    },
    {
      question: `What's the Big O notation of an algorithm that increases the running time linearly with the input size?`,
      answer: 'O(n)',
      distractors: ['O(n^2)', 'O(1)', 'O(log n)'],
      explanation: 'The letter n represents the input size, and the big O represents the increase of the running time.',
      link: 'https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/'
    },
    {
      question: 'Why are sorting algorithms important in programming?',
      answer: 'Sorting algorithms are important because they can reduce the complexity of a problem.',
      distractors: [
        'Sorting algorithms are important because they are only used to arrange data in alphabetical order',
        'Sorting algorithms are important because they are frequently asked in interviews.',
        'Sorting algorithms are not important because there are faster ways to solve problems'
      ],
      explanation: 'Sorting algorithms are important because they can reduce the complexity of a problem by arranging data in a specific order, which can make it easier to solve and streamline various tasks and processes.',
      link: 'https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/#classification-of-a-sorting-algorithm'
    },
    {
      question: 'Which of the following examples shows the correct syntax for kebab case?',
      answer: 'number-of-donuts',
      distractors: ['number_of_donuts', 'numberOfDonuts', 'number*of*donuts'],
      explanation: 'Kebab case separates each lowercase word by dashes.',
      link: 'https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/'
    },
    {
      question: `Which of the following type of trees is also known as a 'large key' tree?`,
      answer: 'B-Tree',
      distractors: [
        'Binary Search Tree',
        'Adelson-Velsky and Landis Tree (AVL Tree/Height balanced tree)',
        'Ternary Tree'
      ],
      explanation: 'B-Trees are identified by their capacity to hold a significant quantity of keys within a single node, leading to their alternative name, large key trees.',
      link: 'https://www.freecodecamp.org/news/b-tree-self-balancing-search-index-data-structures-explained/'
    },
    {
      question: 'Which data structure is used to implement an auto-complete feature?',
      answer: 'Trie',
      distractors: ['Linked List', 'Stack', 'Tree'],
      explanation: 'A Trie is a tree based data structure where each node stores a character performing efficient search operations on them',
      link: 'https://en.wikipedia.org/wiki/Trie'
    },
    {
      question: 'Which of the following tree traversal algorithms has an O(1) space complexity?',
      answer: 'Morris algorithm',
      distractors: ['Bellman-Ford algorithm', 'Floyd Warshall algorithm', `Dijkstra's algorithm`],
      explanation: 'Morris traversal is a tree traversal algorithm that does not employ the use of recursion or a stack. In this traversal, links are created as successors and nodes are printed using these links.',
      link: 'https://en.wikipedia.org/wiki/Tree_traversal#Morris_in-order_traversal_using_threading'
    },
    {
      question: 'Which of the following search algorithms is best for finding the minimum or maximum of an unimodal function?',
      answer: 'Ternary Search',
      distractors: ['Binary Search', 'Linear Search', 'Sentinel Linear Search'],
      explanation: 'Ternary Search is similar to binary search but distinguishes itself through a trisection approach giving us three possibilities for the two points m1 and m2 f(m1) < f(m2), f(m1) > f(m2), f(m1) = f(m2)',
      link: 'https://en.wikipedia.org/wiki/Ternary_search'
    },
    {
      question: 'In the RotateLeft or RotateRight function in an AVL tree, when do we update the root of the tree?',
      answer: 'when the Parent of the node becomes nullptr',
      distractors: [
        'when the node becomes nullptr',
        'when the node becomes a leaf of the tree',
        'when the height balance is restored '
      ],
      explanation: 'When the parent of the node becomes nullptr, this means the  node is the root of the tree.  So when we make a right or left rotation, we need to update the root of the tree with the appropriate child of the node.',
      link: 'https://forum.freecodecamp.org/t/algorithms-avl-trees/297458'
    },
    {
      question: 'In a Red-Black Tree, every tree leaf node is _________',
      answer: 'Black',
      distractors: ['Red', 'Red or Black', 'White'],
      explanation: 'A Red-Black Tree is a self-balancing Binary Search Tree (BST) and every tree leaf node is always black.',
      link: 'https://forum.freecodecamp.org/t/red-black-trees/297473'
    },
    {
      question: 'What is a data structure that consists of nodes, where each node has data and a reference to the next node in the sequence?',
      answer: 'Linked List',
      distractors: ['Vector', 'Stack', 'Heap'],
      explanation: 'A Linked List contains nodes and each node has data and a reference to next node so that it can have access to the data of its next node and we can get the information of all nodes by iterating the node until it reaches nullptr.',
      link: 'https://www.freecodecamp.org/news/how-linked-lists-work/'
    },
    {
      question: 'What is the basis for a Red-Black tree?',
      answer: '2-3-4 tree',
      distractors: ['AVL Tree', 'Red-Black Graphs', 'Linked List'],
      explanation: 'A Red-Black Tree is based upon a 2-3-4 tree where the red nodes collapse into the black node above them to form a 2-3-4 node.',
      link: 'https://en.wikipedia.org/wiki/Red%E2%80%93black_tree'
    },
    {
      question: 'What are the space and time complexities for Red-Black Trees where n are the number of entries?',
      answer: 'O(n), O(logn)',
      distractors: ['O(n), O(n^2)', 'O(logn), O(logn)', 'O(nlogn), O(1)'],
      explanation: 'As we have n Nodes we get a Space Complexity of O(n).  The (re-)balancing is not perfect, but guarantees searching in O(log n). The insert and delete operations, along with the tree rearrangement and recoloring, are also performed in O(log n) time',
      link: 'https://en.wikipedia.org/wiki/Red%E2%80%93black_tree'
    },
    {
      question: 'Which of the following algorithms is used in Identifying a circular linked list?',
      answer: `Floyd's Tortoise-Hare Algorithm`,
      distractors: [`Dijkstra's Algorithm`, 'Greedy Algorithms', 'Linear Search Algorithm'],
      explanation: `Floyd's Tortoise-Hare Algorithm is for finding a circular Linked list. The Hare is a pointer which jumps 2 nodes while the Tortoise moves one node at a time. In case they both meet, we get a circular linked list. If any of them becomes nullptr, then there is no Circular Linked list.`,
      link: 'https://en.wikipedia.org/wiki/Cycle_detection'
    },
    {
      question: 'What is the time complexity of the Floyd-Warshall algorithm for finding all shortest paths in a weighted graph?',
      answer: 'O(V^3)',
      distractors: ['O(V log V)', 'O(V^2 log V)', 'O(E log V)'],
      explanation: 'The Floyd-Warshall algorithm has a time complexity of O(V^3), where V is the number of vertices in the graph.',
      link: 'https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm'
    },
    {
      question: 'In the context of machine learning, what is the bias-variance trade-off?',
      answer: 'The balance between underfitting (high bias) and overfitting (high variance) in a model.',
      distractors: [
        'A technique to reduce overfitting in neural networks.',
        'The trade-off between precision and recall in classification.',
        'The relationship between accuracy and complexity in algorithms.'
      ],
      explanation: 'The bias-variance trade-off refers to finding the right balance in a machine learning model to avoid underfitting (high bias) and overfitting (high variance).',
      link: 'https://en.wikipedia.org/wiki/Bias%E2%80%93variance_tradeoff'
    },
    {
      question: 'What is the purpose of a Bloom filter in computer science?',
      answer: 'To test whether an element is a member of a set with a small probability of false positives.',
      distractors: [
        'To compress data for efficient storage.',
        'To encrypt data for secure transmission.',
        'To hash passwords for authentication.'
      ],
      explanation: 'A Bloom filter is a data structure used to test membership in a set with a small probability of false positives, making it suitable for tasks like spell checking and network routing.',
      link: 'https://en.wikipedia.org/wiki/Bloom_filter'
    },
    {
      question: 'What is the purpose of dynamic programming in algorithm design?',
      answer: 'To solve problems by breaking them into smaller subproblems and storing their solutions to avoid redundant calculations.',
      distractors: [
        'To optimize code for parallel processing.',
        'To reduce the time complexity of algorithms through loop unrolling.',
        'To balance load in distributed systems.'
      ],
      explanation: 'Dynamic programming is a technique used to solve problems by breaking them into smaller subproblems and storing their solutions, reducing redundant calculations and improving efficiency.',
      link: 'https://en.wikipedia.org/wiki/Dynamic_programming'
    },
    {
      question: 'What is the significance of P vs. NP problem in computer science and mathematics?',
      answer: 'It addresses the question of whether every problem whose solution can be verified quickly can also be solved quickly.',
      distractors: [
        'It defines the class of polynomial-time algorithms.',
        'It characterizes the complexity of sorting algorithms.',
        'It studies the relationship between parallel and distributed computing.'
      ],
      explanation: 'The P vs. NP problem is a fundamental question in computer science and mathematics, addressing the efficiency of solving problems and the class of problems that can be solved efficiently.',
      link: 'https://en.wikipedia.org/wiki/P_versus_NP_problem'
    },
    {
      question: 'What is the use of a priority queue?',
      answer: 'A priority queue manages elements based on priority, ensuring higher priority items are processed first.',
      distractors: [
        `It's a queue that organizes elements by their value.`,
        `It's a fixed-size queue.`,
        'It only accepts elements of the same type.'
      ],
      explanation: 'A priority queue is essential in scenarios where certain tasks need to be handled in order of importance or urgency.',
      link: 'https://www.freecodecamp.org/news/priority-queue-implementation-in-java/'
    },
    {
      question: 'What is a binary search algorithm?',
      answer: 'Binary search efficiently finds values in sorted arrays by dividing the search space in half until the target is found or determined to be absent.',
      distractors: [
        'Binary search is used for searching unsorted arrays.',
        'Binary search only works with non-integer values.',
        'Binary search has a time complexity of O(n).'
      ],
      explanation: 'Binary search is a fundamental and highly efficient algorithm for searching in sorted data structures like arrays and is based on the principle of divide and conquer.',
      link: 'https://www.freecodecamp.org/news/binary-search-algorithm-and-time-complexity-explained/'
    },
    {
      question: 'What is a hash table in computer science?',
      answer: 'A hash table stores key-value pairs, using a hash function to enable fast data retrieval.',
      distractors: [
        'A hash table is a data structure that only stores keys, not values.',
        'A hash table is primarily used for sorting data.',
        'A hash table is limited to a fixed size and cannot grow dynamically.'
      ],
      explanation: 'Hash tables are widely used in computer science for implementing associative arrays, databases, and various applications that require fast data access.',
      link: 'https://www.freecodecamp.org/news/hash-tables/'
    },
    {
      question: 'What is the difference between a stack and a queue in data structures?',
      answer: 'A stack (LIFO) removes the last element added first, while a queue (FIFO) removes the first element added first.',
      distractors: [
        'A stack and a queue have the same behavior and are interchangeable in data structures.',
        'A stack and a queue are both unordered collections of elements.',
        'A stack and a queue are not used in computer programming.'
      ],
      explanation: 'A stack is a linear data structure that uses the Last in First Out principle while a queue uses the First In First Out principle.  Understanding the differences between stacks and queues is essential for choosing the right data structure for specific algorithms and applications.',
      link: 'https://www.freecodecamp.org/news/linear-data-structures-linked-lists-stacks-and-queues-in-javascript-a13c7591ad87/'
    },
    {
      question: `What is the time complexity of Kruskal's algorithm in terms of the number of edges (E) and vertices (V) in the graph?`,
      answer: 'O(E log V)',
      distractors: ['O(E)', 'O(E log V)', 'O(V log E)'],
      explanation: 'E is at most O(V^2) in a complete graph, and log(V^2) is equivalent to 2 * log(V), the time complexity is often expressed as O(E log V). This is because, in most cases, E is significantly smaller than V^2, and it simplifies to O(E log V).',
      link: 'https://en.wikipedia.org/wiki/Kruskal%27s_algorithm'
    },
    {
      question: 'What is a key characteristic of a complete binary tree?',
      answer: 'It has the maximum number of nodes for a given height',
      distractors: [
        'All nodes have exactly two children.',
        'The last level may have gaps in node positions',
        'It has the maximum number of nodes for a given height'
      ],
      explanation: 'The key characteristic of a complete binary tree is that it contains the maximum possible number of nodes for a tree of its height. This maximizes the number of nodes that can be accommodated while maintaining the structure\'s completeness.',
      link: 'https://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees'
    },
    {
      question: 'What is the postfix notation for the infix expression: 3 * (5 + 2)?',
      answer: '3 5 2 * +',
      distractors: ['3 5 2 + *', '3 5 + 2 *', '3 5 2 * +'],
      explanation: 'The postfix notation for the infix expression "3 * (5 + 2)" is "3 5 2 * +". This notation represents the same mathematical expression and can be directly evaluated using a stack-based algorithm.',
      link: 'https://youtu.be/B31LgI4Y4DQ?si=R1q51bZBH-OWHot1&t=15255'
    },
    {
      question: 'Which data structure allows for efficient retrieval of data based on a key?',
      answer: 'Hash Table',
      distractors: ['Binary Tree', 'Linked List', 'Queue'],
      explanation: 'A hash table allows for efficient data retrieval based on a key through the use of a hash function.',
      link: 'https://en.wikipedia.org/wiki/Hash_table'
    },
    {
      question: 'What is the Halting problem in computability theory?',
      answer: 'The Halting Problem is an unsolvable problem in computer science',
      distractors: [
        'The Halting Problem is a type of computer virus.',
        'The Halting Problem is a cryptographic challenge.',
        'The Halting Problem is used for code debugging.'
      ],
      explanation: 'The Halting Problem is significant in theoretical computer science as it demonstrates the existence of problems that cannot be solved algorithmically.',
      link: 'https://en.wikipedia.org/wiki/Halting_problem'
    },
    {
      question: 'What is load balancing in LLD(Low Level Design)?',
      answer: ' Distribution of  network traffic evenly across multiple servers',
      distractors: [
        'An Internet Protocol',
        'Removing excess load from a server',
        'Allocating more resources to a single server'
      ],
      explanation: 'Load balancing is a technique used in computing and networking to distribute incoming network traffic or workload across multiple servers, devices, or resources. The primary goal of load balancing is to optimize resource utilization, maximize throughput, minimize response time, and ensure high availability of services.',
      link: 'https://en.wikipedia.org/wiki/Load_balancing_(computing)'
    },
    {
      question: 'What does NTFS stand for in the context of Windows file systems?',
      answer: 'New Technology File System',
      distractors: ['Network Time File System', 'Network Transfer File System', 'New Transfer File System'],
      explanation: 'NTFS, which stands for NT file system and the New Technology File System, is the file system that the Windows NT operating system (OS) uses for storing and retrieving files on hard disk drives (HDDs) and solid-state drives (SSDs). It is the default file system for the Windows NT family and it is developed by Microsoft.',
      link: 'https://en.wikipedia.org/wiki/NTFS'
    },
    {
      question: 'Which data structure uses the LIFO (Last In, First Out) principle?',
      answer: 'Stack',
      distractors: ['Queue', 'Linked List', 'Hash Table'],
      explanation: 'A stack is a data structure that follows the Last In, First Out (LIFO) principle, meaning the last element added to the stack will be the first one to be removed.',
      link: 'https://www.freecodecamp.org/news/linear-data-structures-linked-lists-stacks-and-queues-in-javascript-a13c7591ad87/'
    },
    {
      question: 'In object-oriented programming, what is encapsulation?',
      answer: 'The concept of wrapping data and methods that operate on the data within a single unit or class',
      distractors: [
        'The ability of a function to call itself',
        'The ability to define multiple methods with the same name',
        'The concept of using symbols to represent operations and data'
      ],
      explanation: 'Encapsulation is an object-oriented programming principle that bundles the data (attributes) and methods (functions) that operate on the data into a single unit or class, and restricts direct access to some of the object\'s components.',
      link: 'https://www.freecodecamp.org/news/a-guide-to-object-oriented-programming-principles/'
    },
    {
      question: 'What is polymorphism in the context of object-oriented programming?',
      answer: 'The ability of different objects to respond uniquely to the same method call',
      distractors: [
        'The process of defining a new class based on an existing class',
        'The concept of hiding the internal state of an object',
        'The ability to create multiple methods with the same name but different implementations'
      ],
      explanation: 'Polymorphism is an object-oriented programming principle that allows objects of different classes to be treated as objects of a common super class. It enables a single method to behave differently based on the object that it is acting upon.',
      link: 'https://www.freecodecamp.org/news/a-guide-to-object-oriented-programming-principles/'
    },
    {
      question: 'What does a compiler do?',
      answer: 'Translates high-level code to machine code',
      distractors: ['Manages memory allocation', 'Optimizes performance', 'Debugs code'],
      explanation: 'A compiler is a utility program that transforms your code into executable machine code files.',
      link: 'https://www.freecodecamp.org/news/what-is-a-compiler-in-c/'
    }
  ]
};

export default generalCSQuiz;
