const generalCSQuiz = [
  {
    Question: "In terms of Big-O complexity, what is the time complexity for lookups in a binary tree index?",
    Answer: "O(log n)",
    Distractors: ["O(n)",
     "O(n log n)",
     "O(1)"],
    Explanation:
      "This is because a binary tree index allows for efficient searching by halving the search space at each step.",
    Link: "https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#heading-chapter-11-database-performance"
  },
  {
    Question: "What is the time complexity of the Ford-Fulkerson algorithm?",
    Answer: "O(V * E ^ 2)",
    Distractors: ["O(V + E)",
     "O(V ^ 2 * E)",
     "O(V ^ 3 * E ^ 2)"],
    Explanation:
      "The time complexity of the Ford-Fulkerson algorithm depends on how the augmenting paths are found. If the paths are found using a breadth-first search (BFS), it can lead to the Edmonds-Karp implementation, which has a time complexity of O(V * E ^ 2).",
    Link: "https://www.freecodecamp.org/news/graph-algorithms-and-data-structures-explained-with-java-and-c-examples/"
  },
  {
    Question: "What is the base case in a recursive function?",
    Answer:
      "The condition under which the recursive function stops calling itself",
    Distractors: [
      "The condition under which the recursive function starts calling itself",

      "The maximum number of times the recursive function can call itself",
     "The initial input value to the recursive function"],
    Explanation:
      "In recursion, the base case is the condition under which the recursive function stops calling itself to prevent an infinite loop. It is crucial for ensuring that the recursion terminates and the program does not run indefinitely.",
    Link: "https://www.freecodecamp.org/news/recursion-in-javascript/"
  },
  {
    Question:
      "Which of the following is a primary application of computer vision?",
    Answer: "Object recognition",
    Distractors: ["Word processing",
     "Spreadsheet calculations",
     "Database management"],
    Explanation:
      "Computer vision primarily deals with enabling machines to interpret and make decisions based on visual data. Object recognition is a fundamental application of computer vision where the system identifies objects within an image or video.",
    Link: "https://www.freecodecamp.org/news/computer-vision-js-frameworks-you-need-to-know-b233996103ce/"
  },
  {
    Question:
      "What is the average time complexity of an element insertion in a hash table?",
    Answer: "O(1)",
    Distractors: [ "O(logn)",
     "O(n)",
     "O(n^2)"],
    Explanation:
      "The average time complexity of an element insertion in a hash table is O(1). Unlike arrays, hash tables use a hashing function to generate a unique key or index for each element, ensuring constant time for element insertion.",
    Link: "https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/"
  },
  {
    Question:
      "Which of the following methods can be used to solve the N-Queens problem?",
    Answer: "Backtracking",
    Distractors: [ "Greedy Paradigm",
     "Divide and Conquer",
     "Dynamic Programming"],
    Explanation:
      "Backtracking is used to solve the N-Queens problem based on the condition that no two queens can be present in the same row, column or diagonal.",
    Link: "https://youtu.be/A80YzvNwqXA?si=Eue2Exdk1zT2SUm5&t=511"
  },
  {
    Question:
      "Which sorting algorithm has an average time complexity of O(nlogn)?",
    Answer: "Quick sort",
    Distractors: [ "Bubble sort",
     "Insertion sort",
     "Selection sort"],
    Explanation:
      "Quick sort has an average time complexity of O(nlogn), making it efficient for sorting large datasets.",
    Link: "https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/#quick-sort"
  },
  {
    Question:
      "In a graph, which data structure is best suited for finding the shortest path between two vertices?",
    Answer: "Priority Queue",
    Distractors: [ "Stack",
     "String",
     "Heap"],
    Explanation:
      "Dijkstra's algorithm, which is used to find the shortest path in a graph, typically employs a priority queue to efficiently select the next vertex with the smallest distance.",
    Link: "https://www.freecodecamp.org/news/dijkstras-shortest-path-algorithm-visual-introduction/"
  },
  {
    Question:
      "What is the time complexity of inserting an element into a linked list at the beginning?",
    Answer: "O(1)",
    Distractors: [ "O(log n)",
     "O(n)",
     "O(n2)"],
    Explanation:
      "The time complexity involved to insert a node at the head of the linked list as well as to append at the tail is O(1).",
    Link: "https://www.freecodecamp.org/news/data-structures-101-linked-lists-254c82cf5883/"
  },
  {
    Question: "What is the time complexity of Bellman Ford's Algorithm?",
    Answer: "O(V*E)",
    Distractors: [ "O(V)",
     "O(E)",
     "O(V+E)"],
    Explanation:
      "Bellman Ford's algorithm is a shortest path finding algorithm for graphs that can have negative weights having the optimal time complexity of O(V*E).",
    Link: "https://www.freecodecamp.org/news/graph-algorithms-and-data-structures-explained-with-java-and-c-examples/"
  },
  {
    Question: "What is the acceptable range of Balance Factor for an AVL tree?",
    Answer: "[-1,1]",
    Distractors: [ "[0,1]",
     "[-1,0]",
     "None of the above"],
    Explanation:
      " The self balancing property of an AVL tree is maintained by the balance factor. The value of balance factor should always be -1, 0 or +1",
    Link: "https://forum.freecodecamp.org/t/algorithms-avl-trees/297458"
  },
  {
    Question:
      "Which approach involves duplicating the argument's value into the function's formal parameter?",
    Answer: "Call by Value",
    Distractors: [ "Call by pointer",
     "Call by reference",
     "Call by address"],
    Explanation:
      "In the call-by-value approach, a replica of the argument's value is generated, and any modifications made to the formal parameter within the function do not affect the original argument outside of the function, as the function operates on its own isolated copy of the data.",
    Link: "https://www.freecodecamp.org/news/understanding-by-reference-vs-by-value-d49139beb1c4/"
  },
  {
    Question:
      "Which of the following algorithms is used to find the shortest path between two points in a connected weighted graph?",
    Answer: "Kruskal Algorithm",
    Distractors: [ "Floyd's Tortoise-Hare Algorithm",
     "Greedy Algorithms",
     "Prims Algorithms"],
    Explanation:
      "Kruskal Algorithm is used to find the shortest path between two points in a connected weighted graph.",
    Link: "https://en.wikipedia.org/wiki/Kruskal%27s_algorithm"
  },
  {
    Question: "What does NFC stands for?",
    Answer: "Near-Field Communication",
    Distractors: [ "Narrow Field Communication",
     "Near-Fragile Communication",
     "Nearly Factory Communication"],
    Explanation:
      "NFC stands for near-field communication and it is the standard for devices to communicate with each other wirelessly from a very close distance.",
    Link: "https://www.freecodecamp.org/news/what-is-nfc-near-field-communication-uses-chips-tags-and-readers-explained/"
  },
  {
    Question: "What is the best algorithm for matrix multiplication?",
    Answer: "Strassen's Algorithm",
    Distractors: [ "Multiplication algorithm",
     "Divide and Conquer Technique",
     "None of the above"],
    Explanation:
      "Strassen's algorithm reduces the number of multiplication and addition in a given matrix and results in a time complexity of O(2.81)",
    Link: "https://en.wikipedia.org/wiki/Strassen_algorithm#"
  },
  {
    Question: "Which of the following sorting algorithms is stable in nature?",
    Answer: "Merge Sort",
    Distractors: [ "Heap Sort",
     "Quick Sort",
     "Selection sort"],
    Explanation:
      "Stable sorting algorithms maintain the relative order of elements with equal values, or keys. Merge sort is stable in nature.",
    Link: "https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/#classification-of-a-sorting-algorithm"
  },
  {
    Question:
      "Which of the following sorting algorithms has the same best-case and worst-case time complexities?",
    Answer: "Merge Sort",
    Distractors: [ "Bubble Sort",
     "Quick Sort",
     "Selection sort"],
    Explanation:
      "Merge sort has a time complexity of O(nlogn) in all cases - best, average and worst.",
    Link: "https://www.freecodecamp.org/news/merge-sort-algorithm-python-and-java-examples-with-time-complexity/"
  },
  {
    Question: "What is Object-Oriented Programming?",
    Answer:
      "OOP is a programming pattern that is built around objects or entities.",
    Distractors: [ "OOP is a topological paradigm to program things",
     "OOP is a set of sorting algorithms",
     "OOP is a list of Bitwise operators"],
    Explanation:
      "OOP is a programming pattern that is built around objects or entities",
    Link: "https://www.freecodecamp.org/news/what-is-object-oriented-programming/"
  },
  {
    Question:
      "Which of the following is true regarding division and the bitwise operator?",
    Answer:
      "Dividing a number by 8 using the bitwise operator is faster than using the / operator",
    Distractors: [
      "Dividing a number by 8 cannot be implemented using bitwise operator",

      "Dividing a number by 8 using the bitwise operator is slower than using the / operator",
     "none of the following options are true"],
    Explanation:
      "When a binary number is shifted to the right 3 times, it will be divided by 8.",
    Link: "https://forum.freecodecamp.org/t/javascript-bitwise-operators-explained-with-examples/16153"
  },
  {
    Question: "Which of the following is NOT an in-place sorting algorithm?",
    Answer: "Merge Sort",
    Distractors: [ "Bubble sort",
     "Insertion sort",
     "Quick sort"],
    Explanation:
      "Merge sort uses the Divide and Conquer paradigm and is not considered an in-place sorting algorithm.",
    Link: "https://en.wikipedia.org/wiki/In-place_algorithm"
  },
  {
    Question:
      "Which term is used for removing elements from the front of the queue?",
    Answer: "Dequeue.",
    Distractors: [ "Enqueue.",
     "Peek.",
     "isFull."],
    Explanation:
      "Dequeue is the term for removing elements from the front of the queue.",
    Link: "https://www.freecodecamp.org/news/data-structures-101-queues-a6960a3c98/"
  },
  {
    Question: "Which problems are solved using Bellman Ford's Algorithm?",
    Answer: "Single Source Shortest Path",
    Distractors: [ "All Pair Shortest Path",
     "Negative Cycle Detection",
     "Minimum Spanning Tree"],
    Explanation:
      "Bellman Ford's algorithm is a shortest path finding algorithm for graphs that can have negative weights.",
    Link: "https://www.freecodecamp.org/news/graph-algorithms-and-data-structures-explained-with-java-and-c-examples/"
  },
  {
    Question:
      "Which of the following algorithms can be used to determine a minimum spanning tree in a graph?",
    Answer: "Boruvka's algorithm",
    Distractors: [ "Breadth first search",
     "Depth first search",
     "Binary search"],
    Explanation:
      "Boruvka's algorithm can be used to determine a minimum spanning tree in a graph.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=1229s"
  },
  {
    Question:
      "Which of the following is synonymous with an articulation point in a graph?",
    Answer: "Cut vertex",
    Distractors: [ "Cut set",
     "Cut edge",
     "Leaf node"],
    Explanation:
      "In a graph, an articulation point is the same as a cut vertex.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=1213s"
  },
  {
    Question: "Which of the following is synonymous with a bridge in a graph?",
    Answer: "Cut edge",
    Distractors: [ "Cut set",
     "Articulation point",
     "Directed edge"],
    Explanation: "In a graph, a bridge is the same as a cut edge.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=1178s"
  },
  {
    Question:
      "Which of the following statements is true for the Traveling salesman problem?",
    Answer: "It is an NP-Hard problem.",
    Distractors: [ "It is an NP-Complete problem.",
     "It is an NP problem.",
     "It is a P problem."],
    Explanation: "Traveling salesman problem is an NP-Hard problem.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=1147s"
  },
  {
    Question:
      "Which of the following algorithms can be used for the shortest path problem for an unweighted graph?",
    Answer: "Breadth First Search",
    Distractors: [ "Binary Search",
     "Ternary Search",
     "Linear Search"],
    Explanation:
      "Breadth First Search can be used for the shortest path problem for an unweighted graph.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=934s"
  },
  {
    Question: "What is SOLID?",
    Answer:
      "SOLID is an acronym which represents five principles of Object-Oriented design.",
    Distractors: [ "It's a new type of Hardware",
     "New kind of software",
     "It's a new group of technologies"],
    Explanation:
      "SOLID is a set of rules and best practices to follow while creating OOP designs.",
    Link: "https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/"
  },
  {
    Question: "Which of the following is true for an adjacency list?",
    Answer: "Edge weight lookup is O(E).",
    Distractors: [ "Edge weight lookup is O(1).",
     "Edge weight cannot be specified in adjacency list.",
     "It cannot be used to represent a cyclic graph."],
    Explanation:
      "In an adjacency list, for each node only adjacent nodes are stored in a list",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=682s"
  },
  {
    Question: "Which of the following is true for an adjacency matrix?",
    Answer: "It is space efficient for representing dense graphs.",
    Distractors: [ "It is space efficient for representing sparse graphs.",
     "Edge weight lookup is lower bounded by log(n).",
     "Space complexity is O(n)."],
    Explanation: "If a graph is sparse then most spaces are wasted.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=620s"
  },
  {
    Question: "Which of the following is true for a graph?",
    Answer: "A graph is bipartite if and only if it is two colorable.",
    Distractors: [
      "A graph is bipartite if and only if it does not contain an even length cycle.",
     "A graph is bipartite if and only if it is three colorable.",

      "A graph is bipartite if and only if it is a directed acyclic graph"],
    Explanation:
      "If a graph is two colorable then the nodes with same color can be grouped together to form two different groups.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=440s"
  },
  {
    Question:
      "Which of the following is true for an arborescence in graph theory?",
    Answer:
      "All arborescence are Directed Acyclic Graphs (DAGs) but not all DAGs are arborescence",
    Distractors: [ "All DAGs are arborescence but not all arborescence are DAGs.",
     "A strongly connected and directed graph is an arborescence.",

      "A graph where the number of edges is twice the number of nodes is arborescence."],
    Explanation:
      "An arborescence is a directed tree. Hence, it is a directed graph with no cycle. A graph with 4 nodes where three nodes are pointing towards a single node is not an arborescence but a DAG.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=346s"
  },
  {
    Question: "What is an arborescence in graph theory?",
    Answer: "A rooted tree in which all edges point away from the root",
    Distractors: [ "A graph having cycles",
     "A strongly connected and directed graph",

      "A graph where the number of edges is twice the number of nodes"],
    Explanation:
      "A tree is rooted if the tree has a designated node called root node such that all edges either points towards the root or points away from the root. And if all edges point away from the root then it is called arborescence.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=346s"
  },
  {
    Question:
      "What is the term for when data is being pushed onto a full stack?",
    Answer: "Stack Overflow",
    Distractors: [ "Underflow",
     "Garbage Collection",
     "Empty collection"],
    Explanation:
      "Stack Overflow happens when there is an attempt to push data on an already full stack.",
    Link: "https://www.freecodecamp.org/news/data-structures-101-stacks-696b3282980/"
  },
  {
    Question:
      "What is the name for an error where the programmer writes invalid syntax resulting in the program failing to run?",
    Answer: "Syntax Error",
    Distractors: [ "Runtime Error",
     "Logical Error",
     "Semantic Error"],
    Explanation:
      "A syntax error is when the programmer writes invalid code that violates the rules of that programming language.",
    Link: "https://www.youtube.com/watch?v=zOjov-2OZ0E"
  },
  {
    Question:
      "Which operation is used to add an item to the back of the queue?",
    Answer: "Enqueue",
    Distractors: [ "Dequeue",
     "Peek",
     "isFull"],
    Explanation:
      "Enqueue is the operation used to add an item to the back of the queue.",
    Link: "https://www.freecodecamp.org/news/queue-data-structure-definition-and-java-example-code/"
  },
  {
    Question: "Which of the following is correct about a tree?",
    Answer: "trees are minimally connected.",
    Distractors: [ "trees can be cyclic.",
     "a tree must be an undirected graph",
     "trees must have at least two nodes"],
    Explanation:
      "If we remove any edge from a tree, it creates a two disconnected graph",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=306s"
  },
  {
    Question:
      "Which of the following is a constraint for Dijkstra's Single Source Shortest Path Algorithm?",
    Answer: "The graph must only contain non-negative edge weights.",
    Distractors: [ "The graph must be acyclic",
     "The graph must be a balanced binary tree",
     "The graph must have unique edge weights"],
    Explanation:
      "Dijkstra's SSSP algorithm may not work for a graph with negative edge weights. This constraint is to ensure that once a vertex is visited, the optimal distance from source cannot be updated further.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=4832s"
  },
  {
    Question: "Which of the following is the most correct statement?",
    Answer: "Topological sort is possible only for a Directed Acyclic Graph",
    Distractors: [ "Topological sort is just an another name for BFS",
     "All undirected graphs have topological ordering",
     "A cyclic graph also has topological ordering."],
    Explanation:
      "The only graph that has valid topological ordering is a Directed Acyclic Graph.",
    Link: "https://www.youtube.com/watch?v=09_LlHjoEiY&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=3632s"
  },
  {
    Question: "What is ASCII?",
    Answer:
      "It is a character encoding standard to represent text in a computer.",
    Distractors: [ "Algorithm to convert decimal to number in base 65.",
     "A protocol in Layer 3 of TCP/IP Suite",
     "A unit of throughput for a processor."],
    Explanation:
      "American Standard Code for Information Interchange (ASCII) is a character encoding standard to represent text in computers.",
    Link: "https://www.youtube.com/watch?v=LtoBGQPuu1c&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=406s"
  },
  {
    Question: "Which of the following is true for Big O?",
    Answer: "2*logn = O(n)",
    Distractors: [ "n^2 = O(n)",
     "n! = O(n)",
     "2^n = O(n)"],
    Explanation:
      "Big O notation describes the upper bound. The function n upper bounds the function 2*logn. However, it is not the tightest upper bound, and in general we always specify the tightest upper bound to quantify an algorithm.",
    Link: "https://www.youtube.com/watch?v=RBSGKlAvoiM&list=PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD&t=5m43s"
  },
  {
    Question:
      "Between Merge sort and Quicksort, which sorting algorithm works faster in the case of larger datasets?",
    Answer: "Merge sort",
    Distractors: [
      "testing on speed between the two algorithms has been inconclusive on which one is faster",
     "Quicksort",
     "Both"],
    Explanation:
      "Merge sort runs quicker than Quick sort in the case of larger datasets.",
    Link: "https://forum.freecodecamp.org/t/the-merge-sort-algorithm-explained/16104"
  },
  {
    Question:
      "What data structure does a binary search tree degenerate to if it isn't balanced properly?",
    Answer: "Linked List",
    Distractors: [ "Set",
     "Queue",
     "Dictionary"],
    Explanation:
      "A binary search tree degenerates to a linked list if it is not balanced properly. It is balanced if the height of the left and right subtrees of any node differ by at most one.",
    Link: "https://www.freecodecamp.org/news/data-structures-101-binary-search-tree-398267b6bff0/"
  },
  {
    Question: "Which algorithm utilizes a pivot value to sort?",
    Answer: "Quick Sort",
    Distractors: [ "Merge Sort",
     "Bubble Sort",
     "Insertion Sort"],
    Explanation:
      "Quick sort works by selecting one element (called “the pivot”) and finding the index where the pivot should end up in the sorted array.",
    Link: "https://www.freecodecamp.org/news/introduction-to-algorithms-with-javascript-examples/#quick-sort"
  },
  {
    Question:
      "Which of these sorting algorithms follows an average case time complexity of order O(nlogn)?",
    Answer: "Merge Sort",
    Distractors: [ "Selection Sort",
     "Bubble Sort",
     "Insertion Sort"],
    Explanation:
      "The average case time complexity for the merge sort algorithm is O(n log n).",
    Link: "https://youtu.be/l7-f9gS8VOs"
  },
  {
    Question:
      "Which one of the following terms mean adding an element to the top of the stack?",
    Answer: "Push",
    Distractors: [ "Peek",
     "Pop",
     "Display"],
    Explanation:
      "The push method is used to add an element to the top of the stack.",
    Link: "https://www.youtube.com/watch?v=RBSGKlAvoiM&t=3506s"
  },
  {
    Question:
      "Which one of these data structures follows the FIFO(First In First Out) method?",
    Answer: "Queues",
    Distractors: [ "Arrays",
     "Trees",
     "Stacks"],
    Explanation:
      "A queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.",
    Link: "https://www.youtube.com/watch?v=RBSGKlAvoiM&t=4558s"
  },
  {
    Question: "What is the basic language of a computer?",
    Answer: "Binary",
    Distractors: [ "HyperText Markup Language",
     "Cascading Style Sheets",
     "JavaScript"],
    Explanation:
      "Computers are simplistic and understand binary. Programming languages such as Python and Java were created to help humans write instructions for computers and interpret it.",
    Link: "https://youtu.be/F0WoVEr0-44?t=336"
  },
  {
    Question:
      "Which one of these is NOT a common time complexity equation for Big O notation?",
    Answer: "O(n14)",
    Distractors: [ "O(1)",
     "O(log n)",
     "O(n)"],
    Explanation:
      "O(1), O(log n), O(n) are just some of the common time complexity equations for Big O notation.",
    Link: "https://www.youtube.com/watch?v=zg9ih6SVACc&t=867s"
  },
  {
    Question: "What is Big O Notation?",
    Answer: "A way to measure the performance and efficiency of an algorithm.",
    Distractors: [ "A way to notate changes from the server.",
     "A way to notate the different types in a file system.",
     "A way to notate the different elements in an array."],
    Explanation:
      "Big O notation is a way to measure the performance of an algorithm.",
    Link: "https://www.freecodecamp.org/news/learn-big-o-notation/"
  },
  {
    Question:
      "What is the worst case time complexity for accessing an element in a BST(Binary Search Tree)?",
    Answer: "O(n)",
    Distractors: [ "O(n*logn)",
     "O(n*n)",
     "O(logn)"],
    Explanation:
      "The worst case time complexity would be O(n) because we might need to visit all of the nodes.",
    Link: "https://www.freecodecamp.org/news/binary-search-tree-what-is-it/"
  },
  {
    Question: "What is the Design Thinking Process?",
    Answer:
      "A process to come up with creative, user centric solutions to complex problems.",
    Distractors: [ "A process to fix computers.",
     "A process to design mockups.",
     "A process to troubleshoot Windows applications."],
    Explanation:
      "The Design Thinking Process is a way to come up with creative, user centric solutions to complex problems.",
    Link: "https://www.freecodecamp.org/news/the-design-thinking-process-explained/"
  },
  {
    Question:
      "Which of the following data structures is used to convert an infix expression to a postfix expression?",
    Answer: "Stacks",
    Distractors: [ "Queues",
     "Priority Queues",
     "LinkedList"],
    Explanation:
      "A stack is the most suitable data structure for converting an infix expression to a postfix expression",
    Link: "https://youtu.be/B31LgI4Y4DQ?t=13587"
  },
  {
    Question:
      "Which of the following techniques is implemented to improve CPU performance?",
    Answer: "Pipelining",
    Distractors: [ "Encoding",
     "Ratelimiting",
     "None of these"],
    Explanation:
      "A substantial improvement in performance can be achieved by overlapping the execution of successive instructions,using a technique called pipelining ",
    Link: "https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/pipelining/index.html"
  },
  {
    Question:
      "Which one of these data structures follows the LIFO(Last In First Out) method?",
    Answer: "Stacks",
    Distractors: [ "Priority Queues",
     "Trees",
     "Queues"],
    Explanation:
      "A stack is a linear data structure that uses the LIFO(Last In First Out) method.",
    Link: "https://youtu.be/RBSGKlAvoiM?t=3567"
  },
  {
    Question: "Which of the following is a Divide and Conquer algorithm?",
    Answer: "Merge Sort",
    Distractors: [ "Selection Sort",
     "Heap Sort",
     "Bubble Sort"],
    Explanation:
      "Merge Sort recursively splits the array into smaller arrays, sorts those arrays and merges them into one sorted array.",
    Link: "https://www.freecodecamp.org/news/an-intro-to-advanced-sorting-algorithms-merge-quick-radix-sort-in-javascript-b65842194597/"
  },
  {
    Question: "Which of the following is correct for arrays?",
    Answer: "Size of an array can not be changed once initialized",
    Distractors: [
      "Insertion and deletion of elements has a time complexity of O(1)",
     "A single array can contain data of different data types",
     "It can only be one-dimensional"],
    Explanation:
      "When you create an array, you are allocated a block of contiguous memory and in order to change it's size, you will have to create a new array.",
    Link: "https://youtu.be/zg9ih6SVACc?t=1470"
  },
  {
    Question: "What is a first class function?",
    Answer: "The ability to send and receive functions like values.",
    Distractors: [ "Functions with higher priority than others.",
     "Functions declared in classes",
     "Functions that only return numbers"],
    Explanation:
      "If functions can be sent and received just like values, than that language is said to have first class functions. They are also called first class citizens.",
    Link: "https://www.freecodecamp.org/news/discover-the-power-of-first-class-functions-fd0d7b599b69/"
  },
  {
    Question: "What are parallel arrays?",
    Answer:
      "two or more arrays that contain the same number of elements and have corresponding values in the same position",
    Distractors: [ "arrays that only hold strings",
     "arrays that only hold numbers",
     "a special type of nested arrays"],
    Explanation:
      "Parallel arrays contain the same number of elements and have corresponding values in the same position.",
    Link: "https://www.youtube.com/watch?v=zg9ih6SVACc&t=1379s"
  },
  {
    Question: "What is a bug?",
    Answer:
      "An error in a computer program that causes it to generate an incorrect or unexpected result or output.",
    Distractors: [ "A programming paradigm. ",

      "A programming structure that repeats a block of code a given number of times",
     "This concept is not related to programming at all."],
    Explanation:
      "A bug is an error in a computer program that causes it to generate an incorrect or unexpected result or output. The process of finding and fixing bugs is known as debugging.",
    Link: "https://en.wikipedia.org/wiki/Software_bug"
  },
  {
    Question: "What is a Floating point number?",
    Answer: "A number with a decimal point",
    Distractors: [ "A number greater than 100",
     "A number less than 0",
     "A number that is divisible by 3"],
    Explanation: "A floating point number is a number with a decimal point.",
    Link: "https://www.freecodecamp.org/news/floating-point-definition/"
  },
  {
    Question: "How many bytes make up a Zettabyte?",
    Answer: "1 sextillion bytes",
    Distractors: [ "1 hundred bytes",
     "1 thousand bytes",
     "1 million bytes"],
    Explanation: "A Zettabyte is composed of 1 sextillion bytes",
    Link: "https://www.freecodecamp.org/news/zettabyte-definition/"
  },
  {
    Question:
      "The process of finding and fixing bugs in a computer program is known as...",
    Answer: "Debugging",
    Distractors: [ "Encapsulation",
     "Abstraction",
     "Looping"],
    Explanation:
      "Debugging is the process of finding and fixing bugs in a computer program. ",
    Link: "https://en.wikipedia.org/wiki/Debugging"
  },
  {
    Question: "How many bytes make up a Terabyte?",
    Answer: "1 trillion bytes",
    Distractors: [ "1 billion bytes",
     "1 thousand bytes",
     "1 million bytes"],
    Explanation: "A Terabyte is composed of 1 trillion bytes",
    Link: "https://www.freecodecamp.org/news/terabyte-definition/"
  },
  {
    Question: "What is a server?",
    Answer: "A software or hardware device that sends data over a network",
    Distractors: [ "A Python library",
     "A type of compiler",
     "An IDE"],
    Explanation:
      "A server is a software or hardware device that sends data over a network",
    Link: "https://www.freecodecamp.org/news/server-definition/"
  },
  {
    Question: "The values that an operator operates on are known as...",
    Answer: "Operands",
    Distractors: [ "Operators",
     "Operative",
     "Operation"],
    Explanation:
      "The values that an operator operates on are known as operands.",
    Link: "https://en.wikipedia.org/wiki/Operand"
  },
  {
    Question: "What is an algorithm?",
    Answer:
      "A sequence of detailed step-by-step instructions to complete a task.",
    Distractors: [ "A programming paradigm.",
     "A Python module.",
     "A web development framework."],
    Explanation:
      "An algorithm is a sequence of detailed step-by-step instructions to complete a task.",
    Link: "https://www.freecodecamp.org/news/algorithms-explained-what-they-are-and-common-sorting-algorithms/"
  },
  {
    Question: "How many bits make up a byte?",
    Answer: "8 bits",
    Distractors: [ "16 bits",
     "32 bits",
     "12 bits"],
    Explanation: "There are 8 bits in a byte",
    Link: "https://www.freecodecamp.org/news/byte-definition/"
  },
  {
    Question: "What is an operating system?",
    Answer: "Manages the hardware and software components of a computer",
    Distractors: [ "A program that translates code from one languages to another",
     "A system that converts data into machine code",
     "A base 2 numerical system made up of 0's and 1's"],
    Explanation:
      "An operating system manages the hardware and software components of a computer.",
    Link: "https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/"
  },
  {
    Question: "How many bytes make up a Exabyte?",
    Answer: "1 quintillion bytes",
    Distractors: [ "1 billion bytes",
     "1 trillion bytes",
     "1 thousand bytes"],
    Explanation: "A Exabyte is composed of 1 quintillion bytes",
    Link: "https://www.freecodecamp.org/news/exabyte-definition/"
  },
  {
    Question: "What does API stand for?",
    Answer: "Application Programming Interface",
    Distractors: [ "Apple Pie Inside",
     "Application Program Interface",
     "Another Program Interface"],
    Explanation: "API stands for Application Programming Interface.",
    Link: "https://www.freecodecamp.org/news/what-does-api-stand-for-a-definition-of-the-coding-acronym-in-plain-english/"
  },
  {
    Question: "How many bytes make up a Gigabyte?",
    Answer: "1 billion bytes",
    Distractors: [ "1 quintillion bytes",
     "1 trillion bytes",
     "1 hundred bytes"],
    Explanation: "A Gigabyte is composed of 1 billion bytes",
    Link: "https://www.freecodecamp.org/news/gigabyte-definition/"
  },
  {
    Question:
      "Select the type of loop that repeats a sequence of instructions an unknown number of times while a condition is True. ",
    Answer: "While loop",
    Distractors: [ "For loop",
     "Infinite loop",
     "Circular loop"],
    Explanation:
      "While loops repeat a block of code an unknown number of times while a condition is True and they stop when the condition is False. ",
    Link: "https://www.freecodecamp.org/news/python-while-loop-tutorial/"
  },
  {
    Question: "How many bytes make up a Yottabyte?",
    Answer: "1 septillion bytes",
    Distractors: [ "1 thousand bytes",
     "1 million bytes",
     "1 billion bytes"],
    Explanation: "A Yottabyte is made up of 1 septillion bytes",
    Link: "https://www.freecodecamp.org/news/yottabyte-definition/"
  },
  {
    Question: "How many bytes make up a Kilobyte?",
    Answer: "1,000 bytes",
    Distractors: [ "100 bytes",
     "10 bytes",
     "1 byte"],
    Explanation: "A Kilobyte is composed of 1,000 bytes",
    Link: "https://www.freecodecamp.org/news/kilobyte-definition/"
  },
  {
    Question: "What is a bit?",
    Answer: "Smallest form of data on a computer",
    Distractors: [ "Structured assembly language ",
     "A special type of file system",
     "A special type of object"],
    Explanation:
      'A binary digit or "bit" is the smallest form of data on a computer',
    Link: "https://www.freecodecamp.org/news/bit-definition/"
  },
  {
    Question: "What is RAM?",
    Answer:
      "A type of short term memory that stores data that computer processors need access to",
    Distractors: [ "A type of memory that computers use to call servers",
     "A type of memory that computers use to delete data",

      "A type of memory that computers use to connect with other devices"],
    Explanation:
      "Random Access Memory is a type of short term memory that stores data that computer processors can access frequently.",
    Link: "https://www.freecodecamp.org/news/ram-definition/"
  },
  {
    Question: "What unit is used to measure the speed of a CPU?",
    Answer: "GHz (gigahertz)",
    Distractors: [ "MHz (megahertz)",
     "kHz (kilohertz)",
     "THz (terahertz)"],
    Explanation:
      "The speed of a computer is determined by its clock cycle. The clock speed measures the number of cycles the CPU executes per second. Hertz is a unit of frequency. The CPU clock cycle is measured in GHz (gigahertz). 1GHz is equal to 10 ⁹ Hz (hertz).So 1Gigahertz means 10 ⁹ cycles per second.",
    Link: "https://www.freecodecamp.org/news/how-does-a-cpu-work/"
  },
  {
    Question:
      "Each one of the alternative sequence of statements in a conditional statement is known as...",
    Answer: "Branch",
    Distractors: [ "Decision",
     "Path",
     "Loop"],
    Explanation:
      "Each one of the alternative sequence of statements in a conditional statement is known as a branch.",
    Link: "https://www.freecodecamp.org/news/python-if-else-statement-conditional-statements-explained/"
  },
  {
    Question: "What is an infinite loop?",
    Answer:
      "A loop that will continue endlessly unless an external intervention stops its execution. ",
    Distractors: [ "A loop that only completes two iterations.",

      "A loop that cannot be stopped, even with external intervention. ",
     "A loop that never runs."],
    Explanation:
      "An infinite loop is a loop whose condition is always true, so it will continue running endlessly unless there is some external intervention to stop it.",
    Link: "https://www.freecodecamp.org/news/python-while-loop-tutorial/"
  },
  {
    Question: "What is pair programming?",
    Answer: "Two people coding together on one computer",
    Distractors: [ "One person coding on two computers at the same time",

      "Programming on a non-Apple computer (also known as pear programming)",
     "Programming where you use each data structure twice"],
    Explanation:
      'When Pair Programming, one developer is the "driver" with their hands on the keyboard. The other is the "navigator" helping talk through the problem and decide what to do. They periodically switch roles. This is an efficient and commonly used Agile Software Development methodology.',
    Link: "https://www.freecodecamp.org/news/want-to-be-a-developer-you-should-probably-be-pair-programming-2c6ec12c4866/"
  },
  {
    Question: "What does CPU stand for?",
    Answer: "Central Processing Unit",
    Distractors: [ "Central Protocol Unit",
     "Central Programming Unit",
     "Control Processing Unit"],
    Explanation:
      "CPU stands for Central Processing Unit which performs logic computations for the program.",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/"
  },
  {
    Question: "How many bytes make up a Petabyte?",
    Answer: "1 quadrillion bytes",
    Distractors: [ "1 quintillion bytes",
     "1 hundred bytes",
     "1 million bytes"],
    Explanation: "A Petabyte is composed of 1 quadrillion bytes",
    Link: "https://www.freecodecamp.org/news/petabyte-definition/"
  },
  {
    Question: "What is a Boolean?",
    Answer: "A data type representing a true or false value.",
    Distractors: [ "A data type representing a number.",
     "A programming language.",
     "A Python library."],
    Explanation:
      "In computer science, a Boolean is a data type which only has two possible values of true or false.",
    Link: "https://www.freecodecamp.org/news/boolean-definition/"
  },
  {
    Question: "What is a virtual machine?",
    Answer: "A computer inside another computer",
    Distractors: [ "a popular JavaScript library",
     "a Linux distribution",
     "another name for a compiler"],
    Explanation:
      "A virtual machine is a program you run on a computer that acts like it is a separate computer. It is basically a way to create a computer within a computer.",
    Link: "https://www.freecodecamp.org/news/what-is-a-virtual-machine-and-how-to-setup-a-vm-on-windows-linux-and-mac/"
  },
  {
    Question: "What is a password?",
    Answer: "A secret set of characters",
    Distractors: [ "A way to request data from a server",
     "A special type of computer memory",
     "A type of array"],
    Explanation:
      "A password is a secret set of characters used to login in to applications",
    Link: "https://www.freecodecamp.org/news/password-definition/"
  },
  {
    Question:
      "A special symbol used to perform arithmetic or logical computations is known as...",
    Answer: "Operator",
    Distractors: [ "Operand",
     "Operation",
     "Operative"],
    Explanation:
      "A special symbol used to perform arithmetic or logical computations is known as operator.",
    Link: "https://en.wikipedia.org/wiki/Operator_(computer_programming)"
  },
  {
    Question: "Which one is NOT a popular operating system for computers?",
    Answer: "PASSIM",
    Distractors: [ "Microsoft Windows",
     "macOS",
     "Linux"],
    Explanation:
      "Linux, Microsoft Windows and macOS are three popular operating systems used by developers.",
    Link: "https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/"
  },
  {
    Question: "What is RGB?",
    Answer: "A color model",
    Distractors: [ "An Internet Protocol",
     "HTML syntax",
     "A secret password"],
    Explanation:
      "RGB is an acronym that stands for Red Green Blue. It expresses colors in terms of the amount of red, green, and blue they are made up of and uses a human counting system with integers ranging from 0-255 or a percentage ranging from (0% - 100%).",
    Link: "https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/"
  },
  {
    Question:
      "Fonts that are generally available across most browsers and operating systems are known as...",
    Answer: "Web safe fonts",
    Distractors: [ "General fonts",
     "Universal fonts",
     "Web Fonts"],
    Explanation:
      "Web safe fonts are the fonts that are generally available across most browsers and operating systems.",
    Link: "https://www.freecodecamp.org/news/web-safe-fonts/"
  },
  {
    Question: "What does GIF stand for?",
    Answer: "Graphics Interchange Format",
    Distractors: [ "Graphical International Format",
     "Graphical Interconnected Functions",
     "General Interchange Format"],
    Explanation: "GIF stands for Graphics Interchange Format.",
    Link: "https://www.freecodecamp.org/news/how-to-make-a-gif-create-animated-gifs-without-downloading-software/#:~:text=A%20GIF%20(Graphics%20Interchange%20Format,with%20your%20friends%20and%20family."
  },
  {
    Question: "When was the World Wide Web invented?",
    Answer: "1989",
    Distractors: [ "1990",
     "1995",
     "2005"],
    Explanation: "Tim Berners-Lee invented the World Wide Web in 1989.",
    Link: "https://en.wikipedia.org/wiki/World_Wide_Web"
  },
  {
    Question: "What does DOM stand for?",
    Answer: "Document Object Model",
    Distractors: [ "Direct Object Model",
     "Document Objective Model",
     "Documentary Object Mobile"],
    Explanation: "DOM stands for Document Object Model.",
    Link: "https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/#:~:text=DOM%20stands%20for%20Document%20Object,remove%20elements%20from%20the%20document."
  },
  {
    Question: "What does PNG stand for?",
    Answer: "Portable Network Graphics",
    Distractors: [ "Portable New Graphics",
     "Premium Network Graphics",
     "Portable Network Green"],
    Explanation: "PNG stands for Portable Network Graphics.",
    Link: "https://en.wikipedia.org/wiki/Portable_Network_Graphics"
  },
  {
    Question: "What color would rgb(255,255,255) give?",
    Answer: "White",
    Distractors: [ "Red",
     "Black",
     "Blue"],
    Explanation:
      "The maximum value of 255 represents that the full amount of all colors and their full intensity is on display.",
    Link: "https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/"
  },
  {
    Question:
      "The rules that determine the correct structure of the code in a computer program are known as...",
    Answer: "Syntax",
    Distractors: [ "Semantics",
     "Interpreter",
     "Compiler"],
    Explanation:
      "The rules that determine the correct structure of the code in a computer program are known as syntax.",
    Link: "https://en.wikipedia.org/wiki/Syntax_(programming_languages)"
  },
  {
    Question: "What do R, G, and B in RGB stand for?",
    Answer: "Red, green, and blue",
    Distractors: [ "Red, gray, and black ",
     "Red, green, and black",
     "Red, gray, and blue"],
    Explanation: "RGB is an acronym that stands for Red Green Blue",
    Link: "https://www.freecodecamp.org/news/rgb-color-html-and-css-guide/"
  },
  {
    Question: "What does a CPU do?",
    Answer: "A CPU executes commands from a computer program",
    Distractors: [ "Writes code for developers",
     "Displays images and text on screen",
     "Points to objects on the screen"],
    Explanation:
      "The CPU is the brains of a computer that processes operations and executes instructions for computer programs. ",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/"
  },
  {
    Question: "What is Binary?",
    Answer: "A numeral system where the values are 0's and 1's.",
    Distractors: [ "A numeral system where the values are 1's and 2's.",
     "A numeral system where the values are 0-7.",
     "A numeral system where the values are 0-9."],
    Explanation: "Binary is a base 2 numeral system whose values are 0 and 1.",
    Link: "https://www.freecodecamp.org/news/binary-definition/"
  },
  {
    Question:
      "The process by which a function calls itself directly or indirectly is known as...",
    Answer: "Recursion",
    Distractors: [ "Looping",
     "Encapsulation",
     "Decomposition"],
    Explanation:
      "Recursion is the process by which a function calls itself directly or indirectly during its execution. This works for problems that can be solved by solving smaller instances of the same problem. ",
    Link: "https://www.freecodecamp.org/news/understanding-recursion-in-programming/"
  },
  {
    Question:
      "Which of the following is considered an example of an input device?",
    Answer: "A computer mouse",
    Distractors: [ "Speakers",
     "Monitor",
     "Projector"],
    Explanation:
      "Examples of Input devices are a keyboard (used for typing text and characters – essentially for entering any written information), a mouse (for clicking, pointing, and selecting appropriate data) and a microphone.",
    Link: "https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/"
  },
  {
    Question: "What does IDE stand for?",
    Answer: "Integrated Development Environment",
    Distractors: [ "Internal Development Environment",
     "Integrated Design Environment",
     "International Development Experimentation"],
    Explanation: "IDE stands for Integrated Development Environment.",
    Link: "https://www.freecodecamp.org/news/what-is-an-ide-in-programming-an-ide-definition-for-developers/"
  },
  {
    Question:
      "The set of instructions that specifies a computation in known as...",
    Answer: "Program",
    Distractors: [ "Syntax",
     "Recursion",
     "API"],
    Explanation:
      "The set of instructions that specifies a computation is known as a program.",
    Link: "https://www.freecodecamp.org/news/what-is-programming/"
  },
  {
    Question: "What do HDD and SSD stand for in computer hardware?",
    Answer: "Hard Disk Drive & Solid State Drive",
    Distractors: [ "Harvest Disk Drive & Solid State Drive",
     "Hard Disk Drive & Segment State Drive",
     "Hard Disk Drive & Scratch State Drive"],
    Explanation:
      "HDD stands for Hard Disk Drive while SSD stands for Solid State Drive.",
    Link: "https://www.freecodecamp.org/news/what-is-a-pc-computer-definition-and-computer-basics-for-beginners/"
  },
  {
    Question: "Who invented the World Wide Web?",
    Answer: "Tim Berners-Lee",
    Distractors: [ "Ada Lovelace",
     "Alan Turing",
     "Quincy Larson"],
    Explanation: "Tim Berners-Lee invented the World Wide Web in 1989.",
    Link: "https://en.wikipedia.org/wiki/Tim_Berners-Lee"
  },
  {
    Question: "What is another term used when referring to the CPU?",
    Answer: "Processor",
    Distractors: [ "Operating System",
     "System Unit",
     "Computer Software"],
    Explanation:
      "CPU is short for Central Processing Unit. It is also known as a processor or microprocessor.",
    Link: "https://www.freecodecamp.org/news/what-is-cpu-meaning-definition-and-what-cpu-stands-for/"
  },
  {
    Question: "What does ISP stand for?",
    Answer: "Internet Service Provider",
    Distractors: [ "Internet System Provider",
     "International Service Provider",
     "Intermediate Systems Provider"],
    Explanation: "ISP stands for Internet Service Provider.",
    Link: "https://www.freecodecamp.org/news/how-does-the-internet-work/"
  },
  {
    Question: "What does JPEG stand for?",
    Answer: "Joint Photographic Experts Group",
    Distractors: [ "Join Photogenic Experimental Group",
     "Join Photographic External Graphics",
     "Join Photos Enchanted Graphics"],
    Explanation: "JPEG stands for Joint Photographic Experts Group.",
    Link: "https://en.wikipedia.org/wiki/JPEG"
  },
  {
    Question: "What does HTTP stand for?",
    Answer: "HyperText Transfer Protocol",
    Distractors: [ "HyperText Transmission Protocol",
     "HyperTest Transfer Product",
     "HyperText Transfer Password"],
    Explanation: "HTTP stands for HyperText Transfer Protocol.",
    Link: "https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/"
  },
  {
    Question: "How many bytes make up a Megabyte?",
    Answer: "1 million bytes",
    Distractors: [ "1 thousand bytes",
     "1 billion bytes",
     "1 trillion bytes"],
    Explanation: "A Megabyte is composed of 1 million bytes",
    Link: "https://www.freecodecamp.org/news/megabyte-definition/"
  },
  {
    Question: "What is the Internet?",
    Answer:
      "A bunch of wires and undersea cables connected and buried deep in the ground and oceans, all around the world.",
    Distractors: [ "A cloud",
     "Another term for the World Wide Web",
     "An executable program file"],
    Explanation:
      "The Internet is actually a wire. Well, it's many wires that connect computers all around the world. The Internet is also infrastructure. It's a global network of interconnected computers that communicate in a standardized way with set protocols.",
    Link: "https://www.freecodecamp.org/news/brief-history-of-the-internet/"
  },
  {
    Question: "Which phase is NOT part of the Design Thinking Process?",
    Answer: "Rationalize",
    Distractors: [ "Ideate",
     "Prototype",
     "Empathize"],
    Explanation:
      "The five phases of the Design Thinking Process are Empathize, Define, Ideate, Prototype, and Test.",
    Link: "https://www.freecodecamp.org/news/the-design-thinking-process-explained/"
  },
  {
    Question:
      "What type of loop is used to repeat a block of code a known number of times?",
    Answer: "For loop",
    Distractors: [ "While loop",
     "Infinite loop",
     "Triangular loop"],
    Explanation:
      "For loops repeat a block of code a known number of times, so we can use them when we know in advance how many iterations we need to run to complete a task. ",
    Link: "https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/"
  },
  {
    Question: "Which one is NOT a standard HTTP response status code?",
    Answer: "702",
    Distractors: [ "403",
     "504",
     "201"],
    Explanation:
      "HTTP response status codes are divided in five groups between 100-599.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
  },
  {
    Question: "What is WebP?",
    Answer: "Is an image format",
    Distractors: [ "Is a web page",
     "Is a video format",
     "Is a domain name"],
    Explanation:
      "Is an image format that provides lossless and lossy compression for images on the Internet using predictive coding to encode an image.",
    Link: "https://www.freecodecamp.org/news/make-your-website-load-lightning-fast-with-webp-images-cf55c98ac0a2/"
  },
  {
    Question: "What is Lossy compression?",
    Answer: "A compression algorithm",
    Distractors: [ "An algorithm to reduce file names",
     "A reverse algorithm",
     "A sorting algorithm"],
    Explanation:
      "Lossy compression permits reconstruction only of an approximation of the original data.",
    Link: "https://www.freecodecamp.org/news/image-file-types-picture-format-extensions-jpeg-gif-png-svg-tiff/"
  },
  {
    Question: "What is a domain name?",
    Answer: "The address of a website",
    Distractors: [ "The name of a website",
     "The name of a network",
     "The IP address of a user"],
    Explanation:
      "A domain name is the address of a website. It's the name you type into a web browser to access that specific website.",
    Link: "https://www.freecodecamp.org/news/what-is-a-domain-name-example/"
  },
  {
    Question:
      "A value passed to a function (or method) when calling the function is known as...",
    Answer: "Argument",
    Distractors: [ "Parameter",
     "Return value",
     "Class"],
    Explanation:
      "An argument is a value passed to a function (or method) when the function or method is called.",
    Link: "https://www.freecodecamp.org/news/python-function-examples-how-to-declare-and-invoke-with-parameters-2/"
  },
  {
    Question: "What does SVG stand for?",
    Answer: "Scalable Vector Graphics",
    Distractors: [ "Stretchable Vector Graphics",
     "Scalable Vectorial Graphics",
     "Screen Vector Graphics"],
    Explanation: "SVG stands for Scalable Vector Graphics.",
    Link: "https://www.freecodecamp.org/news/use-svg-images-in-css-html/"
  },
  {
    Question: "What is Lossless compression?",
    Answer:
      "a compression algorithm that allows the original data to be perfectly reconstructed from the compressed data.",
    Distractors: [ "a sorting algorithm",
     "a reverse algorithm",
     "an algorithm that converts wav files to mp3 files"],
    Explanation:
      "Lossless compression is a compression algorithm that allows the original data to be perfectly reconstructed from the compressed data.",
    Link: "https://www.freecodecamp.org/news/image-file-types-picture-format-extensions-jpeg-gif-png-svg-tiff/"
  },
  {
    Question: "What is a Nibble?",
    Answer: "Nibble is a four-bit aggregation",
    Distractors: [ "Nibble is an algorithm",
     "Nibble is a octet",
     "Nibble is a device"],
    Explanation: "A Nibble is a group of four bits (half of a byte)",
    Link: "https://en.wikipedia.org/wiki/Nibble"
  },
  {
    Question:
      "Which data structure is used for the implementation of a recursive algorithm?",
    Answer: "Stack",
    Distractors: [ "Queue",
     "Linked list",
     "Tree"],
    Explanation:
      "In recursion, the nested function that is called later returns the value first, which is in the same nature as that of a stack (Last In First Out).",
    Link: "https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/"
  },
  {
    Question: "Which one is NOT a programming paradigm?",
    Answer: "Boolean Programming",
    Distractors: [ "Object-Oriented Programming",
     "Functional Programming",
     "Procedural Programming"],
    Explanation:
      "Object-oriented programming, functional programming and procedural programming are all well known paradigms.",
    Link: "https://www.freecodecamp.org/news/an-introduction-to-programming-paradigms/"
  },
  {
    Question: "Which one is NOT a real logic gate?",
    Answer: "XAND",
    Distractors: [ "AND",
     "NAND",
     "XNOR"],
    Explanation:
      "The seven logic gates in boolean algebra are AND, OR, XOR, NOT, NAND, NOR, and XNOR.",
    Link: "https://www.freecodecamp.org/news/boolean-algebra/"
  },
  {
    Question: "Which type of computer network generally has the smallest size?",
    Answer: "PAN",
    Distractors: [ "MAN",
     "LAN",
     "WAN"],
    Explanation:
      "Some examples of a Personal Area Network (PAN) include tablets, video game consoles and smartphones. ",
    Link: "https://en.wikipedia.org/wiki/Computer_network"
  },
  {
    Question: "Which color model is used for printing?",
    Answer: "CMYK",
    Distractors: [ "RGB",
     "RYB",
     "HSV"],
    Explanation:
      "The CMYK color model uses subtractive colors, thus producing better results on a white background like a paper.",
    Link: "https://en.wikipedia.org/wiki/Color_model"
  },
  {
    Question: "What are the four pillars of Object-oriented programming?",
    Answer: "Abstraction, Encapsulation, Inheritance, and Polymorphism.",
    Distractors: [ "Objects, Methods, Properties and Fields.",
     "Immutability, Purity, Transparency and State.",
     "Declaration, Modeling, Evaluation and Implementation."],
    Explanation:
      "Abstraction, encapsulation, inheritance, and polymorphism are software design principles to help you write clean object-oriented code.",
    Link: "https://www.freecodecamp.org/news/four-pillars-of-object-oriented-programming/"
  },
  {
    Question: "What is pseudocode?",
    Answer:
      "Pseudocode is fake code that is used to write programs that are easily understood.",
    Distractors: [ "An old programming language that they used back in the day.",
     "A diagrammatic representation of a set of instructions",
     "A specific programming language that all computers use"],
    Explanation:
      "Pseudocode is fake code that is used to write programs in which you represent the sequence of actions and instructions (aka algorithms) in a form that humans can easily understand.",
    Link: "https://www.freecodecamp.org/news/what-is-pseudocode-in-programming/"
  },
  {
    Question: "What is a function?",
    Answer:
      "Is a block of code that is self-contained behavior for the computer to run.",
    Distractors: [ "an extensible program-code-template",
     "Text that does not get executed by the computer",
     "container for storing data"],
    Explanation:
      "The code inside a function runs only when it is needed, meaning only when it is called.",
    Link: "https://www.freecodecamp.org/news/introduction-to-computer-programming-and-computer-science-course/"
  },
  {
    Question: "What are loops?",
    Answer: "Code used to run certain instructions repeatedly.",
    Distractors: [ "Code that is ran only one time",
     "Code to encapsulate statements",
     "Code that ends the program"],
    Explanation:
      "A statement which can repeat a set of statements up to a fixed number of times or until a certain criterion is satisfied.",
    Link: "https://www.freecodecamp.org/news/introduction-to-computer-programming-and-computer-science-course/"
  },
  {
    Question: "What is an array?",
    Answer: "Is a list of data",
    Distractors: [ "A variable that is assigned a single value",
     "A function that loops through data",
     "A programming language used for Macintosh computer"],
    Explanation:
      "An array is a special variable, which can hold more than one value.",
    Link: "https://www.freecodecamp.org/news/introduction-to-computer-programming-and-computer-science-course/"
  },
  {
    Question:
      "What is the best case time complexity for the merge sort algorithm?",
    Answer: "O(n*log(n))",
    Distractors: [ "O(n^2)",
     "O(log(n))",
     "O(2^n)"],
    Explanation:
      "Merge sort is a divide and conquer algorithm that has a best case time complexity of O(n*log n)",
    Link: "https://www.freecodecamp.org/news/an-intro-to-advanced-sorting-algorithms-merge-quick-radix-sort-in-javascript-b65842194597/"
  },
  {
    Question: "What is the advantage of using linked lists over arrays?",
    Answer: "Linked lists helps in faster insertions and deletions than arrays",
    Distractors: [ "Memory usage in linked lists is less than arrays",
     "Reverse traversal is possible in singly linked lists",

      "Random accessing elements is easier in linked lists than arrays"],
    Explanation:
      "Linked lists have quicker insertions and deletions than arrays because there is no need to shift all other elements with lists.",
    Link: "https://www.freecodecamp.org/news/data-structures-101-linked-lists-254c82cf5883/"
  },
  {
    Question: "Which sorting algorithm is best when data is nearly sorted?",
    Answer: "Bubble Sort",
    Distractors: [ "Merge Sort",
     "Insertion Sort",
     "Selection Sort"],
    Explanation:
      "If the list is nearly sorted, then Bubble Sort is a good choice because it will sort the data with only a few passes of the array.",
    Link: "https://www.freecodecamp.org/news/bubble-sort/"
  },
  {
    Question: "In which generation of computers were compilers introduced?",
    Answer: "Third generation",
    Distractors: [ "Fourth generation",
     "First generation",
     "Second generation"],
    Explanation:
      "Translators called compilers were introduced in third generation to translate the code programmers wrote to machine executable binary code.",
    Link: "https://www.freecodecamp.org/news/computer-coding-computer-program-definition-and-code-meaning/"
  },

  {
    Question:
      "Which algorithm finds the shortest path between nodes in a graph?",
    Answer: "Dijkstra's Algorithm",
    Distractors: [ "Rabin-Karp Algorithm",
     "Binary Search Algorithm",
     "Quicksort Algorithm"],
    Explanation:
      "Dijkstra's Algorithm can find the shortest path from a node (called the 'source node') to all other nodes in the graph, producing a shortest-path tree.",
    Link: "https://www.freecodecamp.org/news/dijkstras-shortest-path-algorithm-visual-introduction/"
  },

  {
    Question:
      "In Banker's algorithm, which part of the computer represents the 'Banker'?",
    Answer: "Operating System",
    Distractors: [ "RAM",
     "CPU",
     "Register"],
    Explanation:
      "Banker's algorithm is most commonly used within banking systems to help determine if resources are available to lend to customers. The operating system represents the 'Banker' because it decides the resource allocation.",
    Link: "https://www.freecodecamp.org/news/what-is-an-os-operating-system-definition-for-beginners/"
  },

  {
    Question: "What is Big Theta notation?",
    Answer:
      "A range between the lower and upper bounds of an algorithm's performance",
    Distractors: [ "The lower bound of an algorithm's performance",
     "The upper bound of an algorithm's performance",
     "The average case for an algorithm's performance"],
    Explanation:
      "Big theta is either the exact performance value of the algorithm, or a useful range between narrow upper and lower bounds.",
    Link: "https://www.freecodecamp.org/news/big-theta-and-asymptotic-notation-explained/"
  },

  {
    Question:
      "Which of the following runtimes can be used for recursive functions that make multiple calls?",
    Answer: "branches ^ (depth) i.e. 'b' raised to the power of 'd'",
    Distractors: [ "depth ^ (branches)",
     "2 ^ (branches)",
     "2 ^ (branches * depth)"],
    Explanation:
      "An O(branches ^ depth) runtime is often reported (although not always) for recursive functions that make multiple calls.",
    Link: "https://www.freecodecamp.org/news/learn-big-o-notation/"
  },
  {
    Question:
      "What is the worst case time complexity for binary and linear search?",
    Answer: "binary search is O(logn) and linear search is O(n)",
    Distractors: [ "binary search is O(n) and linear search is O(logn)",
     "binary search is O(n) and linear search is O(n)",
     "binary search is O(logn) and linear search is O(logn)"],
    Explanation:
      "The worst case time complexity for linear search O(n) because we have to iterate through n elements. The worst case time complexity for binary search is O(logn) because it is a divide and conquer algorithm.",
    Link: "https://www.freecodecamp.org/news/search-algorithms-linear-and-binary-search-explained/"
  },
  {
    Question: "What is Proprietary Software?",
    Answer: "Software which is owned by an organization or an individual.",
    Distractors: [
      "Software where the code is publicly available for people to modify, and share.",
     "Software where the code can be used by everyone for free",
     "Software that has only been developed by Oracle"],
    Explanation:
      "The original authors of proprietary software can modify its code. Users of this type of software have to agree not to alter it in any way unless they have permission from the owners to do so.",
    Link: "https://www.freecodecamp.org/news/what-is-open-source-software-explained-in-plain-english"
  },
  {
    Question: "What is Open Source Software?",
    Answer:
      "A type of software where the code is publicly available for people to view, modify, and share.",
    Distractors: [ "Software owned by Big Tech Companies",
     "Software developed by Facebook",

      "Software where the code is only available to a select few people"],
    Explanation:
      "Open Source Software is code that is publicly available for people to view, modify, and share. One example of open source would be freeCodeCamp.",
    Link: "https://www.freecodecamp.org/news/what-is-open-source-software-explained-in-plain-english"
  },
  {
    Question: "How does the Bubble Sort algorithm work?",
    Answer:
      "This algorithm traverses a list, compares adjacent values, and swaps them if they are not in the correct order.",
    Distractors: [
      "This algorithm divides the list into different buckets and sorts these buckets individually.",

      "This algorithm selects the current smallest element, and swaps it into place.",
     "This algorithm breaks down an unsorted list into two halves."],
    Explanation:
      "The Bubble Sort algorithm traverses a list, compares adjacent values, and swaps them if they are not in the correct order.",
    Link: "https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c"
  },
  {
    Question:
      "What is the underlining process behind the Merge Sort algorithm?",
    Answer: "Recursion",
    Distractors: [ "String matching and parsing",
     "backtracking",
     "graph traversal"],
    Explanation:
      "The Merge Sort algorithm works by recursively breaking down an unsorted list into two halves until it reaches a point where it can no longer be broken down.",
    Link: "https://www.freecodecamp.org/news/how-to-sort-recursively-in-python"
  },
  {
    Question: "What is a String?",
    Answer: "A data type that comprises of a sequence of characters",
    Distractors: [ "An Array indicator for programming languages",
     "A Data Structure for data arrangement",
     "a programming language for complex tasks"],
    Explanation:
      "A string is a data type that can contain many different characters. A string is written as a series of characters between single or double quotes.",
    Link: "https://www.freecodecamp.org/news/how-to-lowercase-a-string-in-javascript-tolowercase-in-js/"
  },
  {
    Question: "What is the worst case time complexity for Bubble sort?",
    Answer: "O(n^2)",
    Distractors: [ "O(logn)",
     "O(n)",
     "O(nlogn)"],
    Explanation:
      "Bubble sort has a worst case time complexity of O(n^2), which is slow compared to other sorting algorithms.",
    Link: "https://www.freecodecamp.org/news/bubble-sort/"
  },
  {
    Question: "Which HTTP status code returns 'I'm a teapot'?",
    Answer: "418",
    Distractors: [ "000",
     "007",
     "128"],
    Explanation:
      "HTTP status code 418 returns 'I'm a teapot' and it is a reference to a 1998 April Fools' joke.",
    Link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418#"
  },
  {
    Question:
      "Which of the following time complexities is considered to be the fastest?",
    Answer: "O(1)",
    Distractors: [ "O(logn)",
     "O(n)",
     "O(nlogn)"],
    Explanation:
      "O(1) is independent of input size so it remains in constant time regardless of the size of the input.",
    Link: "https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/"
  },
  {
    Question: "What is the worst case time complexity for Selection sort?",
    Answer: "O(n*n)",
    Distractors: [ "O(n*logn)",
     "O(n^3)",
     "O(n+k)"],
    Explanation:
      "Selection sort has a worst case time complexity of O(n*n), due to the two nested loops.",
    Link: "https://forum.freecodecamp.org/t/the-selection-sort-algorithm-explained-with-examples/16106"
  },
  {
    Question: "Which of the following is a dynamically typed language?",
    Answer: "Python",
    Distractors: [ "C",
     "Java",
     "C++"],
    Explanation:
      "Statically-typed languages like C, C++, and Java, perform type checking at compile time whereas dynamically-typed languages like Python and JavaScript  perform type checking at runtime.",
    Link: "https://www.freecodecamp.org/news/why-use-static-types-in-javascript-part-1-8382da1e0adb/#:~:text=series%20is%20about.-,First%2C%20a%20definition,-The%20quickest%20way"
  },
  {
    Question:
      "If you were to solve the classic FizzBuzz challenge, what would be the output for the 15th iteration?",
    Answer: "FizzBuzz",
    Distractors: [ "Fizz",
     "Buzz",
     "BuzzFizz"],
    Explanation:
      "FizzBuzz is a common coding challenge where you will need to write a loop that iterates from 1 to N while outputting 'Fizz' at multiples of 3, 'Buzz' at multiples of 5 and 'FizzBuzz' at multiples of 3 and 5. Position 15 has the word FizzBuzz because it is a multiple of both 3 and 5.",
    Link: "https://en.wikipedia.org/wiki/Fizz_buzz"
  },
  {
    Question:
      "What's the Big O notation of an algorithm that increases the running time linearly with the input size?",
    Answer: "O(n)",
    Distractors: [ "O(n^2)",
     "O(1)",
     "O(log n)"],
    Explanation:
      "The letter n represents the input size, and the big O represents the increase of the running time.",
    Link: "https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/"
  },
  {
    Question: "Why are sorting algorithms important in programming?",
    Answer:
      "Sorting algorithms are important because they can reduce the complexity of a problem.",
    Distractors: [
      "Sorting algorithms are important because they are only used to arrange data in alphabetical order",

      "Sorting algorithms are important because they are frequently asked in interviews.",

      "Sorting algorithms are not important because there are faster ways to solve problems"],
    Explanation:
      "Sorting algorithms are important because they can reduce the complexity of a problem by arranging data in a specific order, which can make it easier to solve and streamline various tasks and processes.",
    Link: "https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/#classification-of-a-sorting-algorithm"
  },
  {
    Question:
      "Which of the following examples shows the correct syntax for kebab case?",
    Answer: "number-of-donuts",
    Distractors: [ "number_of_donuts",
     "numberOfDonuts",
     "number*of*donuts"],
    Explanation: "Kebab case separates each lowercase word by dashes.",
    Link: "https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/"
  },
  {
    Question:
      "Which of the following type of trees is also known as a 'large key' tree?",
    Answer: "B-Tree",
    Distractors: [ "Binary Search Tree",

      "Adelson-Velsky and Landis Tree (AVL Tree/Height balanced tree)",
     "Ternary Tree"],
    Explanation:
      "B-Trees are identified by their capacity to hold a significant quantity of keys within a single node, leading to their alternative name, large key trees.",
    Link: "https://www.freecodecamp.org/news/b-tree-self-balancing-search-index-data-structures-explained/"
  },
  {
    Question:
      "Which data structure is used to implement an auto-complete feature?",
    Answer: "Trie",
    Distractors: [ "Linked List",
     "Stack",
     "Tree"],
    Explanation:
      "A Trie is a tree based data structure where each node stores a character performing efficient search operations on them",
    Link: "https://en.wikipedia.org/wiki/Trie"
  },
  {
    Question:
      "Which of the following tree traversal algorithms has an O(1) space complexity?",
    Answer: "Morris algorithm",
    Distractors: [ "Bellman-Ford algorithm",
     "Floyd Warshall algorithm",
     "Dijkstra's algorithm"],
    Explanation:
      "Morris traversal is a tree traversal algorithm that does not employ the use of recursion or a stack. In this traversal, links are created as successors and nodes are printed using these links.",
    Link: "https://en.wikipedia.org/wiki/Tree_traversal#Morris_in-order_traversal_using_threading"
  },
  {
    Question:
      "Which of the following search algorithms is best for finding the minimum or maximum of an unimodal function?",
    Answer: "Ternary Search",
    Distractors: [ "Binary Search",
     "Linear Search",
     "Sentinel Linear Search"],
    Explanation:
      "Ternary Search is similar to binary search but distinguishes itself through a trisection approach giving us three possibilities for the two points m1 and m2 f(m1) < f(m2), f(m1) > f(m2), f(m1) = f(m2)",
    Link: "https://en.wikipedia.org/wiki/Ternary_search"
  },
  {
    Question:
      "In the RotateLeft or RotateRight function in an AVL tree, when do we update the root of the tree?",
    Answer: "when the Parent of the node becomes nullptr",
    Distractors: [ "when the node becomes nullptr",
     "when the node becomes a leaf of the tree",
     "when the height balance is restored "],
    Explanation:
      "When the parent of the node becomes nullptr, this means the  node is the root of the tree.  So when we make a right or left rotation, we need to update the root of the tree with the appropriate child of the node.",
    Link: "https://forum.freecodecamp.org/t/algorithms-avl-trees/297458"
  },
  {
    Question: "In a Red-Black Tree, every tree leaf node is _________",
    Answer: "Black",
    Distractors: [ "Red",
     "Red or Black",
     "White"],
    Explanation:
      "A Red-Black Tree is a self-balancing Binary Search Tree (BST) and every tree leaf node is always black.",
    Link: "https://forum.freecodecamp.org/t/red-black-trees/297473"
  },
  {
    Question:
      "What is a data structure that consists of nodes, where each node has data and a reference to the next node in the sequence?",
    Answer: "Linked List",
    Distractors: [ "Vector",
     "Stack",
     "Heap"],
    Explanation:
      "A Linked List contains nodes and each node has data and a reference to next node so that it can have access to the data of its next node and we can get the information of all nodes by iterating the node until it reaches nullptr.",
    Link: "https://www.freecodecamp.org/news/how-linked-lists-work/"
  },
  {
    Question: "What is the basis for a Red-Black tree?",
    Answer: "2-3-4 tree",
    Distractors: [ "AVL Tree",
     "Red-Black Graphs",
     "Linked List"],
    Explanation:
      "A Red-Black Tree is based upon a 2-3-4 tree where the red nodes collapse into the black node above them to form a 2-3-4 node.",
    Link: "https://en.wikipedia.org/wiki/Red%E2%80%93black_tree"
  },
  {
    Question:
      "What are the space and time complexities for Red-Black Trees where n are the number of entries?",
    Answer: "O(n), O(logn)",
    Distractors: [ "O(n), O(n^2)",
     "O(logn), O(logn)",
     "O(nlogn), O(1)"],
    Explanation:
      "As we have n Nodes we get a Space Complexity of O(n).  The (re-)balancing is not perfect, but guarantees searching in O(log n). The insert and delete operations, along with the tree rearrangement and recoloring, are also performed in O(log n) time",
    Link: "https://en.wikipedia.org/wiki/Red%E2%80%93black_tree"
  },
  {
    Question:
      "Which of the following algorithms is used in Identifying a circular linked list?",
    Answer: "Floyd's Tortoise-Hare Algorithm",
    Distractors: [ "Dijkstra's Algorithm",
     "Greedy Algorithms",
     "Linear Search Algorithm"],
    Explanation:
      "Floyd's Tortoise-Hare Algorithm is for finding a circular Linked list. The Hare is a pointer which jumps 2 nodes while the Tortoise moves one node at a time. In case they both meet, we get a circular linked list. If any of them becomes nullptr, then there is no Circular Linked list.",
    Link: "https://en.wikipedia.org/wiki/Cycle_detection"
  },
  {
    Question:
      "What is the time complexity of the Floyd-Warshall algorithm for finding all shortest paths in a weighted graph?",
    Answer: "O(V^3)",
    Distractors: [ "O(V log V)",
     "O(V^2 log V)",
     "O(E log V)"],
    Explanation:
      "The Floyd-Warshall algorithm has a time complexity of O(V^3), where V is the number of vertices in the graph.",
    Link: "https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm"
  },
  {
    Question:
      "In the context of machine learning, what is the bias-variance trade-off?",
    Answer:
      "The balance between underfitting (high bias) and overfitting (high variance) in a model.",
    Distractors: [ "A technique to reduce overfitting in neural networks.",

      "The trade-off between precision and recall in classification.",

      "The relationship between accuracy and complexity in algorithms."],
    Explanation:
      "The bias-variance trade-off refers to finding the right balance in a machine learning model to avoid underfitting (high bias) and overfitting (high variance).",
    Link: "https://en.wikipedia.org/wiki/Bias%E2%80%93variance_tradeoff"
  },
  {
    Question: "What is the purpose of a Bloom filter in computer science?",
    Answer:
      "To test whether an element is a member of a set with a small probability of false positives.",
    Distractors: [ "To compress data for efficient storage.",
     "To encrypt data for secure transmission.",
     "To hash passwords for authentication."],
    Explanation:
      "A Bloom filter is a data structure used to test membership in a set with a small probability of false positives, making it suitable for tasks like spell checking and network routing.",
    Link: "https://en.wikipedia.org/wiki/Bloom_filter"
  },
  {
    Question: "What is the purpose of dynamic programming in algorithm design?",
    Answer:
      "To solve problems by breaking them into smaller subproblems and storing their solutions to avoid redundant calculations.",
    Distractors: [ "To optimize code for parallel processing.",

      "To reduce the time complexity of algorithms through loop unrolling.",
     "To balance load in distributed systems."],
    Explanation:
      "Dynamic programming is a technique used to solve problems by breaking them into smaller subproblems and storing their solutions, reducing redundant calculations and improving efficiency.",
    Link: "https://en.wikipedia.org/wiki/Dynamic_programming"
  },
  {
    Question:
      "What is the significance of P vs. NP problem in computer science and mathematics?",
    Answer:
      "It addresses the question of whether every problem whose solution can be verified quickly can also be solved quickly.",
    Distractors: [ "It defines the class of polynomial-time algorithms.",
     "It characterizes the complexity of sorting algorithms.",

      "It studies the relationship between parallel and distributed computing."],
    Explanation:
      "The P vs. NP problem is a fundamental question in computer science and mathematics, addressing the efficiency of solving problems and the class of problems that can be solved efficiently.",
    Link: "https://en.wikipedia.org/wiki/P_versus_NP_problem"
  },
  {
    Question: "What is the use of a priority queue?",
    Answer:
      "A priority queue manages elements based on priority, ensuring higher priority items are processed first.",
    Distractors: [ "It's a queue that organizes elements by their value.",
     "It's a fixed-size queue.",
     "It only accepts elements of the same type."],
    Explanation:
      "A priority queue is essential in scenarios where certain tasks need to be handled in order of importance or urgency.",
    Link: "https://www.freecodecamp.org/news/priority-queue-implementation-in-java/"
  },
  {
    Question: "What is a binary search algorithm?",
    Answer:
      "Binary search efficiently finds values in sorted arrays by dividing the search space in half until the target is found or determined to be absent.",
    Distractors: [ "Binary search is used for searching unsorted arrays.",
     "Binary search only works with non-integer values.",
     "Binary search has a time complexity of O(n)."],
    Explanation:
      "Binary search is a fundamental and highly efficient algorithm for searching in sorted data structures like arrays and is based on the principle of divide and conquer.",
    Link: "https://www.freecodecamp.org/news/binary-search-algorithm-and-time-complexity-explained/"
  },
  {
    Question: "What is a hash table in computer science?",
    Answer:
      "A hash table stores key-value pairs, using a hash function to enable fast data retrieval.",
    Distractors: [
      "A hash table is a data structure that only stores keys, not values.",
     "A hash table is primarily used for sorting data.",

      "A hash table is limited to a fixed size and cannot grow dynamically."],
    Explanation:
      "Hash tables are widely used in computer science for implementing associative arrays, databases, and various applications that require fast data access.",
    Link: "https://www.freecodecamp.org/news/hash-tables/"
  },
  {
    Question:
      "What is the difference between a stack and a queue in data structures?",
    Answer:
      "A stack (LIFO) removes the last element added first, while a queue (FIFO) removes the first element added first.",
    Distractors: [
      "A stack and a queue have the same behavior and are interchangeable in data structures.",

      "A stack and a queue are both unordered collections of elements.",
     "A stack and a queue are not used in computer programming."],
    Explanation:
      "A stack is a linear data structure that uses the Last in First Out principle while a queue uses the First In First Out principle.  Understanding the differences between stacks and queues is essential for choosing the right data structure for specific algorithms and applications.",
    Link: "https://www.freecodecamp.org/news/linear-data-structures-linked-lists-stacks-and-queues-in-javascript-a13c7591ad87/"
  },
  {
    Question:
      "What is the time complexity of Kruskal's algorithm in terms of the number of edges (E) and vertices (V) in the graph?",
    Answer: "O(E log V)",
    Distractors: [ "O(E)",
     "O(E log V)",
     "O(V log E)"],
    Explanation:
      "E is at most O(V^2) in a complete graph, and log(V^2) is equivalent to 2 * log(V), the time complexity is often expressed as O(E log V). This is because, in most cases, E is significantly smaller than V^2, and it simplifies to O(E log V).",
    Link: "https://en.wikipedia.org/wiki/Kruskal%27s_algorithm"
  },
  {
    Question: "What is a key characteristic of a complete binary tree?",
    Answer: "It has the maximum number of nodes for a given height",
    Distractors: [ "All nodes have exactly two children.",
     "The last level may have gaps in node positions",
     "It has the maximum number of nodes for a given height"],
    Explanation:
      "The key characteristic of a complete binary tree is that it contains the maximum possible number of nodes for a tree of its height. This maximizes the number of nodes that can be accommodated while maintaining the structure's completeness.",
    Link: "https://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees"
  },
  {
    Question:
      "What is the postfix notation for the infix expression: 3 * (5 + 2)?",
    Answer: "3 5 2 * +",
    Distractors: [ "3 5 2 + *",
     "3 5 + 2 *",
     "3 5 2 * +"],
    Explanation:
      'The postfix notation for the infix expression "3 * (5 + 2)" is "3 5 2 * +". This notation represents the same mathematical expression and can be directly evaluated using a stack-based algorithm.',
    Link: "https://youtu.be/B31LgI4Y4DQ?si=R1q51bZBH-OWHot1&t=15255"
  },
  {
    Question:
      "Which data structure allows for efficient retrieval of data based on a key?",
    Answer: "Hash Table",
    Distractors: [ "Binary Tree",
     "Linked List",
     "Queue"],
    Explanation:
      "A hash table allows for efficient data retrieval based on a key through the use of a hash function.",
    Link: "https://en.wikipedia.org/wiki/Hash_table"
  },
  {
    Question: "What is the Halting problem in computability theory?",
    Answer: "The Halting Problem is an unsolvable problem in computer science",
    Distractors: [ "The Halting Problem is a type of computer virus.",
     "The Halting Problem is a cryptographic challenge.",
     "The Halting Problem is used for code debugging."],
    Explanation:
      "The Halting Problem is significant in theoretical computer science as it demonstrates the existence of problems that cannot be solved algorithmically.",
    Link: "https://en.wikipedia.org/wiki/Halting_problem"
  },
  {
    Question: "What is load balancing in LLD(Low Level Design)?",
    Answer: " Distribution of  network traffic evenly across multiple servers",
    Distractors: [ "An Internet Protocol",
     "Removing excess load from a server",
     "Allocating more resources to a single server"],
    Explanation:
      "Load balancing is a technique used in computing and networking to distribute incoming network traffic or workload across multiple servers, devices, or resources. The primary goal of load balancing is to optimize resource utilization, maximize throughput, minimize response time, and ensure high availability of services.",
    Link: "https://en.wikipedia.org/wiki/Load_balancing_(computing)"
  },
  {
    Question:
      "What does NTFS stand for in the context of Windows file systems?",
    Answer: "New Technology File System",
    Distractors: [ "Network Time File System",
     "Network Transfer File System",
     "New Transfer File System"],
    Explanation:
      "NTFS, which stands for NT file system and the New Technology File System, is the file system that the Windows NT operating system (OS) uses for storing and retrieving files on hard disk drives (HDDs) and solid-state drives (SSDs). It is the default file system for the Windows NT family and it is developed by Microsoft.",
    Link: "https://en.wikipedia.org/wiki/NTFS"
  },
  {
    Question: "Which data structure uses the LIFO (Last In, First Out) principle?",
    Answer: "Stack",
    Distractors: [ "Queue",
     "Linked List",
     "Hash Table"],
    Explanation: "A stack is a data structure that follows the Last In, First Out (LIFO) principle, meaning the last element added to the stack will be the first one to be removed.",
    Link: "https://www.freecodecamp.org/news/linear-data-structures-linked-lists-stacks-and-queues-in-javascript-a13c7591ad87/"
  },
  {
    Question: "In object-oriented programming, what is encapsulation?",
    Answer: "The concept of wrapping data and methods that operate on the data within a single unit or class",
    Distractors: [ "The ability of a function to call itself",
     "The ability to define multiple methods with the same name",
     "The concept of using symbols to represent operations and data"],
    Explanation: "Encapsulation is an object-oriented programming principle that bundles the data (attributes) and methods (functions) that operate on the data into a single unit or class, and restricts direct access to some of the object's components.",
    Link: "https://www.freecodecamp.org/news/a-guide-to-object-oriented-programming-principles/"
  },
  {
    Question: "What is polymorphism in the context of object-oriented programming?",
    Answer: "The ability of different objects to respond uniquely to the same method call",
    Distractors: [ "The process of defining a new class based on an existing class",
     "The concept of hiding the internal state of an object",
     "The ability to create multiple methods with the same name but different implementations"],
    Explanation: "Polymorphism is an object-oriented programming principle that allows objects of different classes to be treated as objects of a common super class. It enables a single method to behave differently based on the object that it is acting upon.",
    Link: "https://www.freecodecamp.org/news/a-guide-to-object-oriented-programming-principles/"
  },
  {
    Question:
      "What does a compiler do?",
    Answer: "Translates high-level code to machine code",
    Distractors: [ "Manages memory allocation",
     "Optimizes performance",
     "Debugs code"],
    Explanation:
      "A compiler is a utility program that transforms your code into executable machine code files.",
    Link: "https://www.freecodecamp.org/news/what-is-a-compiler-in-c/"
  }
];

export default generalCSQuiz;
