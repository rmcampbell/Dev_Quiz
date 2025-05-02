const sqlQuiz = {
  category: 'SQL',
  questions: [
    {
      question: 'Which of the following is the most effective way to protect against SQL injection attacks?',
      answer: 'Using a modern SQL library that sanitizes SQL inputs',
      distractors: [
        'Using strong passwords for database access',
        'Disabling certain database permissions',
        'Encrypting database tables'
      ],
      explanation: 'Using a modern SQL library that sanitizes inputs prevents SQL injection by ensuring user input is treated as data, not executable code.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#heading-chapter-11-database-performance'
    },
    {
      question: 'Which of the following is NOT a type of SQL constraint?',
      answer: 'CHECKSIZE',
      distractors: ['PRIMARY KEY', 'FOREIGN KEY', 'UNIQUE'],
      explanation: 'SQL constraints are used to specify rules for the data in a table. CHECKSIZE is not a standard SQL constraint. The standard constraints include PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, and DEFAULT.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/'
    },
    {
      question: 'What is a FOREIGN KEY constraint used for in SQL?',
      answer: 'A FOREIGN KEY constraint defines a relationship between tables by referencing the primary key of another table.',
      distractors: [
        'It ensures that a column can only contain numeric values.',
        'It enforces uniqueness within a column.',
        'It allows a column to contain NULL values.'
      ],
      explanation: 'A FOREIGN KEY constraint establishes a link between two tables by referencing the primary key of another table. It enforces referential integrity and helps maintain relationships between tables in a database.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/'
    },
    {
      question: 'What is the purpose of the SQL INSERT statement?',
      answer: 'The SQL INSERT statement is used to add new records to a table in the database.',
      distractors: [
        'It is used to modify existing records in a table.',
        'It is used to delete records from a table.',
        'It is used to retrieve data from a table.'
      ],
      explanation: 'The INSERT statement is used to insert new records with specified values into a table, effectively adding data to the table.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/'
    },
    {
      question: 'What is the purpose of the CREATE TABLE statement in SQL?',
      answer: 'The CREATE TABLE statement is used to create a new table in a database.',
      distractors: [
        'It is used to update existing table structures.',
        'It is used to delete a table from the database.',
        'It is used to add new records to an existing table.'
      ],
      explanation: 'The CREATE TABLE statement is used to define and create a new table in a database, specifying its columns, data types, and constraints.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/'
    },
    {
      question: 'What is the purpose of the SQL WHERE clause?',
      answer: 'The SQL WHERE clause is used to filter and specify the records to be retrieved, updated, or deleted based on specific conditions.',
      distractors: [
        'It is used to order records in a table.',
        `It is used to define the table's primary key.`,
        'It is used to join multiple tables together.'
      ],
      explanation: 'The WHERE clause is used to narrow down the selection of records in a table by applying specific conditions. It is commonly used with SELECT, UPDATE, and DELETE statements to filter records.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/'
    },
    {
      question: 'What is SQL Injection?',
      answer: 'SQL Injection is when malicious SQL code is placed into input fields.',
      distractors: [
        'SQL Injection is a method for improving SQL query performance.',
        'SQL Injection is a way to add constraints to SQL queries.',
        'SQL Injection is a tool used for creating SQL tables.'
      ],
      explanation: 'SQL Injection is a significant security concern as it allows attackers to bypass application security measures and manipulate database queries. They can extract, modify, or delete data, leading to unauthorized access or data breaches.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/'
    },
    {
      question: 'Which HTTP methods correlate with the CREATE, READ, UPDATE, and DELETE (CRUD) operations in SQL?',
      answer: 'HTTP POST corresponds to CREATE, HTTP GET to READ, HTTP PUT to UPDATE, and HTTP DELETE to DELETE (CRUD) operations.',
      distractors: [
        'HTTP POST corresponds to DELETE, HTTP GET to CREATE, HTTP PUT to READ, and HTTP DELETE to UPDATE.',
        'HTTP POST corresponds to UPDATE, HTTP GET to DELETE, HTTP PUT to READ, and HTTP DELETE to CREATE.',
        'HTTP POST corresponds to READ, HTTP GET to UPDATE, HTTP PUT to DELETE, and HTTP DELETE to CREATE.'
      ],
      explanation: 'HTTP methods align with CRUD operations: POST (CREATE), GET (READ), PUT (UPDATE), and DELETE (DELETE). These methods are used to perform corresponding database operations.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/'
    },
    {
      question: 'What is the purpose of a PRIMARY KEY constraint in SQL?',
      answer: 'A PRIMARY KEY constraint uniquely identifies records within a table, and each table can have one primary key.',
      distractors: [
        'It specifies that a column can have NULL values.',
        'It enforces the uniqueness of values in a column.',
        'It allows multiple primary keys within a single table.'
      ],
      explanation: 'A PRIMARY KEY constraint ensures that the values in the specified column(s) are unique and not NULL. It uniquely identifies each record in the table and enforces data integrity.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/'
    },
    {
      question: 'What does the NOT NULL constraint in SQL ensure?',
      answer: 'The NOT NULL constraint ensures that a column will not accept NULL values.',
      distractors: [
        'It enforces uniqueness of values in a column.',
        'It allows a column to contain only unique values.',
        'It enforces a default value for a column if NULL is provided.'
      ],
      explanation: 'The NOT NULL constraint is used to specify that a column must contain a value and cannot be left empty (NULL). It ensures that every row in the table has a value in that column.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/'
    },
    {
      question: 'Which SQL database is known for its powerful features, open-source nature, and is often considered production-ready?',
      answer: 'PostgreSQL',
      distractors: ['MySQL', 'Microsoft SQL Server', 'SQLite'],
      explanation: 'PostgreSQL is known for its robust features and is often used in production environments.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter3constraints'
    },
    {
      question: 'Which SQL database is often used for learning and small systems due to its lightweight and serverless nature?',
      answer: 'SQLite',
      distractors: ['MySQL', 'PostgreSQL', 'Microsoft SQL Server'],
      explanation: 'SQLite is lightweight and great for learning and small systems.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter3constraints'
    },
    {
      question: 'In SQL, how are boolean values typically stored in databases?',
      answer: 'As integers (0 for false, 1 for true)',
      distractors: [
        `As text strings ('true' or 'false')`,
        'As binary data',
        'As NULL values'
      ],
      explanation: 'Boolean values are commonly stored as integers, where 0 represents false and 1 represents true.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter3constraints'
    },
    {
      question: 'What is a common strategy for protecting against data loss when deleting records from a database?',
      answer: 'Using soft deletes',
      distractors: ['Creating manual backups', 'Not allowing deletions', 'Using SQL injections'],
      explanation: 'Soft deletes involve marking records as deleted instead of physically removing them, allowing for potential data recovery.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter3constraints'
    },
    {
      question: 'In SQL,how many primary keys can be created in a table?',
      answer: 'Only one',
      distractors: ['Infinte', 'Twelve', 'Two'],
      explanation: 'A table can have multiple unique keys that identify each row, but only one primary key.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter3constraints'
    },
    {
      question: 'In SQL, what does the HAVING clause typically follow?',
      answer: 'GROUP BY',
      distractors: ['ORDER BY', 'WHERE', 'HAVING is used alone'],
      explanation: 'The HAVING clause is used in combination with the GROUP BY clause to filter grouped records based on specified conditions.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter7howtoperformaggregationsinsql'
    },
    {
      question: 'In database normalization, what does the First Normal Form (1NF) require?',
      answer: 'All attributes must have unique names',
      distractors: [
        'All data values in a column must be of the same data type',
        'All primary keys must be integers',
        'All attributes must have a value for every record'
      ],
      explanation: 'The First Normal Form (1NF) requires that all attributes in a table must have unique names, ensuring that each column represents a single atomic value.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter9databasenormalization'
    },
    {
      question: 'Which normal form ensures that there are no transitive dependencies?',
      answer: 'Third Normal Form (3NF)',
      distractors: ['Second Normal Form (2NF)', 'Boyce-Codd Normal Form (BCNF)', 'Fourth Normal Form (4NF)'],
      explanation: 'The Third Normal Form (3NF) addresses transitive dependencies and ensures that non-key attributes are not dependent on other non-key attributes.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter9databasenormalization'
    },
    {
      question: 'Which SQL clause is used to filter rows before applying the aggregate functions?',
      answer: 'WHERE',
      distractors: ['GROUP BY', 'HAVING', 'ORDER BY'],
      explanation: 'The WHERE clause in SQL is used to filter rows before applying the aggregate functions.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter7howtoperformaggregationsinsql'
    },
    {
      question: 'Which SQL clause sets the child data to NULL when the parent data is deleted?',
      answer: 'ON DELETE SET NULL',
      distractors: ['UPDATE TO NULL ', 'ON DELETE CASCADE', 'DELETE NULL'],
      explanation: 'SQL Server sets the rows in the child table to NULL if the corresponding rows in the parent table are deleted',
      link: 'https://www.freecodecamp.org/news/sql-and-databases-full-course/'
    },
    {
      question: 'In SQL, what does CRUD stand for?',
      answer: 'CREATE, READ, UPDATE, DELETE',
      distractors: ['CREATE, ROW, UNION, DROP ', 'COPY, ROW, UPDATE, DISPLAY', 'COLUMNS, ROWS, UNION, DELETE'],
      explanation: 'CRUD is an acronym that stands for CREATE, READ, UPDATE, and DELETE. These four operations are the bread and butter of nearly every database you will create.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter4crudoperationsinsql'
    },
    {
      question: 'Which of the following best describes the role of the NEW keyword when working with triggers in SQL?',
      answer: 'It provides access to the new data being inserted or updated, allowing modification before the event if the trigger time is set to BEFORE.',
      distractors: [
        'It refers to the data after an UPDATE or DELETE operation.',
        'It encrypts data before insertion.',
        'It deletes old data when new data is inserted.'
      ],
      explanation: 'The NEW keyword provides access to the new data being created in INSERT and UPDATE events. When using BEFORE as the trigger time, the data can be modified before it is stored in the database.',
      link: 'https://www.freecodecamp.org/news/sql-triggers/'
    },
    {
      question: 'How can you retrieve unique values from a specific column in SQL to avoid duplicates?',
      answer: 'SELECT DISTINCT column_name FROM table_name;',
      distractors: [
        'DELETE DUPLICATE column_name FROM table_name;',
        'REMOVE DUPLICATE column_name FROM table_name;',
        'SELECT UNIQUE column_name FROM table_name;'
      ],
      explanation: 'The DISTINCT keyword in a SELECT statement retrieves only unique values from a particular column, effectively removing duplicates.',
      link: 'https://www.freecodecamp.org/news/how-to-remove-duplicate-data-in-sql/'
    },
    {
      question: 'What SQL command is used to delete a record from a table?',
      answer: 'DELETE FROM',
      distractors: ['REMOVE FROM', 'DROP FROM', 'CUT FROM'],
      explanation: 'The DELETE FROM command is used to remove records from a table in an SQL database. It\'s important to use a WHERE clause to specify which records to delete, otherwise all records will be removed.',
      link: 'https://www.freecodecamp.org/news/how-to-perform-crud-operations-js-and-sql/'
    },
    {
      question: 'Which of the following is not a commonly used SQL constraint?',
      answer: 'UPDATE',
      distractors: ['CHECK', 'DEFAULT', 'UNIQUE'],
      explanation: 'In SQL, the UPDATE statement is used to modify the existing records in a table and therefore not a constraint.',
      link: 'https://www.freecodecamp.org/news/best-sql-database-tutorial/'
    },
    {
      question: 'In SQL, which of the following is the correct syntax for creating a table?',
      answer: 'CREATE TABLE table_name (column1_name datatype, ...)',
      distractors: [
        'CREATE TABLE table_name (int main void column_name)',
        'UPDATE TABLE table_name (column1_name datatype, ...)',
        'CREATE NEW TABLE table_name (column1_name datatype, ...)'
      ],
      explanation: 'In SQL, tables are created by using the CREATE TABLE statement as well as specifying each columns datatype.',
      link: 'https://www.freecodecamp.org/news/sql-create-table-statement-with-example-syntax/'
    },
    {
      question: 'In SQL, which command is used to convert from one data type to another?',
      answer: 'CAST()',
      distractors: ['CHANGE()', 'TYPE()', 'CONVERT()'],
      explanation: 'The CAST() function is used to convert a column in a table from one data type to another.',
      link: 'https://www.freecodecamp.org/news/cast-a-function-in-sql-convert-char-to-int-sql-server-example/'
    },
    {
      question: 'In SQL, which of the following is the correct syntax for inserting a new record(row) into a table?',
      answer: 'INSERT INTO table_name (column1, ...) VALUES (value1, ...);',
      distractors: [
        'ADD ROW table_name (column1, ...) VALUES (value1, ...);',
        'ALTER table_name (value1, ...);',
        'INSERT INTO table_name (column1, ...);'
      ],
      explanation: 'The INSERT INTO statement is used to add new rows into a table, with the number of values equal to the number of specified columns',
      link: 'https://www.freecodecamp.org/news/insert-into-sql-how-to-insert-into-a-table-query-example-statement/'
    },
    {
      question: 'In SQL, what function is used to join two or more strings together to form a single string?',
      answer: 'CONCAT()',
      distractors: ['SUBSTR()', 'INSERT()', 'JOIN()'],
      explanation: 'The CONCAT() function joins at least two parameters(strings) and can accept a total of 254 parameters.',
      link: 'https://www.freecodecamp.org/news/learn-sql-in-10-minutes/'
    },
    {
      question: 'In relational databases, Primary keys cannot contain what type of value?',
      answer: 'NULL values',
      distractors: ['string values', 'numeric values', 'boolean'],
      explanation: 'Primary keys must contain unique values and cannot contain NULL values.',
      link: 'https://www.freecodecamp.org/news/primary-key-sql-tutorial-how-to-define-a-primary-key-in-a-database/'
    },
    {
      question: 'In SQL, what is a View?',
      answer: 'A View is a database object that presents data existing in one or more tables',
      distractors: [
        'A View removes an item from a table',
        'A View sorts items in a table',
        'A View does not exist in SQL'
      ],
      explanation: 'A View is a database object that presents data existing in one or more tables',
      link: 'https://www.freecodecamp.org/news/sql-create-view-mysql/'
    },
    {
      question: ' In relational databases, which of the following allows you to uniquely identify a tuple?',
      answer: 'Super Key',
      distractors: ['Schema', 'Attribute', 'Domain'],
      explanation: 'Super Key is used to uniquely identify a tuple in a relation.',
      link: 'https://en.wikipedia.org/wiki/Superkey'
    },
    {
      question: `In SQL, how can the user change 'codingWebsite' into 'freeCodeCamp' in the 'Name' column for the Users table?`,
      answer: 'UPDATE Users Set Name=\'freeCodeCamp\' WHERE Name=\'codingWebsite\' ',
      distractors: [
        `MODIFY Users Set Name = 'codingWebsite' WHERE Name = 'freeCodeCamp'`,
        `UPDATE Users Set Name = 'codingWebsite' WHERE Name = 'freeCodeCamp'`,
        `MODIFY Users Set Name = 'freeCodeCamp' WHERE Name = 'codingWebsite'`
      ],
      explanation: 'The UPDATE command and WHERE clause are used together to change the name in a SQL table.',
      link: 'https://www.freecodecamp.org/news/sql-update-statement-update-query-in-sql/'
    },
    {
      question: 'In MySQL, what is the maximum string length for the VARCHAR data type?',
      answer: 'Up to 65,535 bytes',
      distractors: ['255 bytes', '256 bytes', 'Up to 65,567 bytes'],
      explanation: 'The VARCHAR data type has a maximum string length range from 0 to 65535.',
      link: 'https://www.freecodecamp.org/news/learn-sql-in-10-minutes/'
    },
    {
      question: `Which command is used in a 'WHERE' or 'HAVING' clause to limit the selected rows to the items when a column has a certain pattern of characters contained in it?`,
      answer: 'LIKE',
      distractors: ['NOT', 'INSERT', 'JOIN'],
      explanation: 'You can place NOT before LIKE to exclude the rows with the string pattern instead of selecting them.',
      link: 'https://www.freecodecamp.org/news/basic-sql-commands/'
    },
    {
      question: 'How do you limit query results in ORACLE-SQL?',
      answer: 'FETCH FIRST',
      distractors: ['LIMIT', 'TOP', 'FIRST'],
      explanation: 'You can use FETCH FIRST, in newer versions of Oracle, to restrict the number of rows returned by a query.',
      link: 'https://www.freecodecamp.org/news/row_number-in-sql-select-top-example-in-sql-and-sql-server2/'
    },
    {
      question: 'In a RDBMS, what is used to create a reference between tables?',
      answer: 'Foreign Keys',
      distractors: ['Candidate Keys ', 'Alternate Keys', 'Composite Keys'],
      explanation: 'A foreign key is used to link two tables by making reference to another table\'s primary key.',
      link: 'https://www.freecodecamp.org/news/what-is-a-relational-database-rdbms-definition/'
    },
    {
      question: 'Which of the following MySQL commands shows the structure of a table?',
      answer: 'DESCRIBE table_name;',
      distractors: ['SHOW table_name;', 'EXPLAIN table_name;', 'INFO table_name;'],
      explanation: 'In MYSQL, the DESCRIBE command followed by the table name is used to show the structure of a table',
      link: 'https://www.freecodecamp.org/news/learn-sql-queries-database-query-tutorial-for-beginners/'
    },
    {
      question: `In SQL, how do you select every row in a given table named 'freeCodeCamp'?`,
      answer: 'SELECT * FROM freeCodeCamp',
      distractors: ['SELECT all FROM freeCodeCamp;', 'FROM freeCodeCamp SELECT all;', 'FROM freeCodeCamp SELECT *;'],
      explanation: 'In SQL, SELECT is used to select data from a database. The * is a wildcard character that matches any column in the table. The FROM clause specifies the table to select from.',
      link: 'https://www.freecodecamp.org/news/learn-sql-queries-database-query-tutorial-for-beginners/'
    },
    {
      question: 'In SQL, what keyword is used to count unique values that are NOT NULL and not duplicates?',
      answer: 'DISTINCT',
      distractors: ['GROUP BY', 'COUNT', 'WHERE'],
      explanation: 'In SQL, the DISTINCT keyword will only count unique values that are NOT NULL. The computer will ignore any duplicate values.',
      link: 'https://www.freecodecamp.org/news/sql-distinct-statement-how-to-query-select-and-count/'
    },
    {
      question: 'In SQL, what keyword is used if the WHERE clause fails when being used with aggregate functions?',
      answer: 'HAVING',
      distractors: ['ADD', 'DISTINCT', 'LIMIT'],
      explanation: 'In SQL, you will have to use the HAVING clause because the WHERE clause fails when used with aggregate functions.',
      link: 'https://www.freecodecamp.org/news/sql-having-how-to-group-and-count-with-a-having-statement/'
    },
    {
      question: 'Which of the following relational database management systems (RDBMS) should never be used to store data in a production app?',
      answer: 'Microsoft Access',
      distractors: ['Microsoft SQL Server', 'MongoDB', 'PostgreSQL'],
      explanation: 'Microsoft Access does not offer as much security, availability, and stability as SQL Server.',
      link: 'https://en.wikipedia.org/wiki/Microsoft_Access'
    },
    {
      question: 'In SQL, what type of join returns rows that have a match in both tables?',
      answer: 'INNER JOIN',
      distractors: ['FULL OUTER JOIN', 'RIGHT OUTER JOIN', 'LEFT OUTER JOIN'],
      explanation: 'A INNER JOIN returns all rows for which there is a match in both tables.',
      link: 'https://www.freecodecamp.org/news/the-ultimate-guide-to-sql-join-statements/'
    },
    {
      question: 'In SQL, normalized databases are optimized to reduce...',
      answer: 'Data redundancy',
      distractors: ['Read time', 'Query size', 'Storage space'],
      explanation: 'Normalized databases are optimized to reduce data redundancy.',
      link: 'https://www.freecodecamp.org/news/sql-and-databases-explained-in-plain-english/'
    },
    {
      question: 'In SQL, which of the following is a wildcard character that can be used with the LIKE statement?',
      answer: '%',
      distractors: ['$', '!', '@'],
      explanation: 'You can use the % and _ wildcards with the SQL LIKE statement to compare values from an SQL table.',
      link: 'https://www.freecodecamp.org/news/sql-like-statement-how-to-query-sql-with-wildcard/'
    },
    {
      question: 'In SQL, what aggregate function allows you to count the number of rows and returns that count as a column in the result set?',
      answer: 'COUNT()',
      distractors: ['AVG()', 'MINIMUM()', 'AVERAGE()'],
      explanation: 'The COUNT() function is used to count the number of rows and return that count as a column in the result set',
      link: 'https://www.freecodecamp.org/news/basic-sql-commands/'
    },
    {
      question: 'In SQL, what does DML stand for?',
      answer: 'Data Manipulation Language',
      distractors: [
        'Data Definition Language',
        'Data Control Language',
        'Distracting Definition Language'
      ],
      explanation: 'DML stands for Data Manipulation Language.',
      link: 'https://en.wikipedia.org/wiki/Data_manipulation_language'
    },
    {
      question: 'In SQL, the column or set of columns that uniquely identifies each row in a table is known as a...',
      answer: 'Primary Key',
      distractors: ['Secondary Key', 'First Key', 'Foreign Key'],
      explanation: 'The primary key is the column or set of columns that uniquely identifies a row. ',
      link: 'https://www.freecodecamp.org/news/the-sql-primary-key-constraint-explained/'
    },
    {
      question: 'In SQL, what statement is used to combine groups and aggregate data?',
      answer: 'GROUP BY',
      distractors: ['UPDATE', 'CLASSIFY', 'CATEGORY'],
      explanation: 'The GROUP BY statement is used to combine rows and aggregate data.',
      link: 'https://www.freecodecamp.org/news/basic-sql-commands/'
    },
    {
      question: 'Which one is NOT a type of data model used in NoSQL?',
      answer: 'Infix notation',
      distractors: ['key-value', 'document', 'wide-column or tabular'],
      explanation: 'NoSQL supports a variety of data models including  \'key-value\', \'document\', \'wide-column or tabular\' formats',
      link: 'https://www.freecodecamp.org/news/learn-nosql-in-3-hours/'
    },
    {
      question: 'What does DBMS stand for?',
      answer: 'Database Management System',
      distractors: ['Dataset Management System', 'Database Maintenance System', 'Database Management Site'],
      explanation: 'DBMS stands for Database Management System. ',
      link: 'https://www.freecodecamp.org/news/sql-and-databases-explained-in-plain-english/'
    },
    {
      question: 'In SQL, this is part of a query that determines which columns of data to show in the results.',
      answer: 'SELECT',
      distractors: ['TABLE', 'CREATE', 'QUERY'],
      explanation: 'SELECT determines which columns will be shown in the result.',
      link: 'https://www.freecodecamp.org/news/basic-sql-commands/'
    },
    {
      question: 'In SQL, an individual entry in a table of a database is known as...',
      answer: 'Record/Row',
      distractors: ['Column', 'Cell', 'Query'],
      explanation: 'An individual entry in a table of a database table is known as record or row.',
      link: 'https://www.freecodecamp.org/news/sql-and-databases-explained-in-plain-english/'
    },
    {
      question: 'In SQL, what does DDL stand for?',
      answer: 'Data Definition Language',
      distractors: [
        'Data Manipulation Language',
        'Data Control Language',
        'Deleting Definition Language'
      ],
      explanation: 'DDL stands for Data Definition Language. ',
      link: 'https://en.wikipedia.org/wiki/Data_definition_language'
    },
    {
      question: 'In SQL, what clause is used to limit the number of rows returned by a query based on specific criteria?',
      answer: 'WHERE',
      distractors: ['LIMIT', 'FILTER', 'CHECK'],
      explanation: 'The WHERE clause is used in SQL to limit the number of rows returned based on specific criteria.',
      link: 'https://www.freecodecamp.org/news/basic-sql-commands/'
    },
    {
      question: 'In SQL, the values of a table are known as...',
      answer: 'Fields',
      distractors: ['API', 'Query', 'Database'],
      explanation: 'The values of a SQL database table are known as fields.',
      link: 'https://www.freecodecamp.org/news/sql-and-databases-explained-in-plain-english/'
    },
    {
      question: 'In SQL, what type of join returns all the records from the right table and the matching records from the left table?',
      answer: 'RIGHT OUTER JOIN',
      distractors: ['LEFT OUTER JOIN', 'FULL OUTER JOIN', 'INNER JOIN'],
      explanation: 'A RIGHT OUTER JOIN returns all the records from the right table and the matching records from the left table.',
      link: 'https://www.freecodecamp.org/news/the-ultimate-guide-to-sql-join-statements/'
    },
    {
      question: 'In SQL, what does DCL stand for?',
      answer: 'Data Control Language',
      distractors: ['Data Manipulation Language', 'Data Definition Language', 'Data Concat Language'],
      explanation: 'DCL stands for Data Control Language.',
      link: 'https://en.wikipedia.org/wiki/Data_control_language'
    },
    {
      question: 'In SQL, what is the command used to order the results in ascending or descending order?',
      answer: 'ORDER BY',
      distractors: ['SORT BY', 'ASCENDING', 'DESCENDING'],
      explanation: 'The ORDER BY command is used in SQL to sort the results in ascending or descending order.',
      link: 'https://www.freecodecamp.org/news/sql-and-databases-explained-in-plain-english/'
    },
    {
      question: 'In SQL, a computer programming language used for inserting, deleting, and updating data in a database is known as a...',
      answer: 'Data Manipulation Language',
      distractors: ['Data Definition Language', 'Data Control Language', 'Data Storage Language'],
      explanation: 'A computer programming language used for inserting, deleting, and updating data in a database is known as a Data Manipulation Language.',
      link: 'https://en.wikipedia.org/wiki/Data_manipulation_language'
    },
    {
      question: 'What is SQL?',
      answer: 'A language used for relational databases',
      distractors: [
        'A language that translates code from one languages to another',
        'A language that converts data into machine code',
        'A language used for non relational databases'
      ],
      explanation: 'SQL is used to store, manipulate, and retrieve data in relational database management systems. ',
      link: 'https://www.freecodecamp.org/news/learn-sql-in-10-minutes/'
    },
    {
      question: 'In SQL, what command allows you to filter the data aggregated by the GROUP BY clause so that the user gets a limited set of records to view?',
      answer: 'HAVING',
      distractors: ['LIMIT', 'QUERY', 'SELECT'],
      explanation: 'The HAVING command allows you to filter the data aggregated by the GROUP BY clause so that the user gets a limited set of records to view.',
      link: 'https://www.freecodecamp.org/news/basic-sql-commands/'
    },
    {
      question: 'In SQL, a structured set of data stored in a computer designed for efficient storage, retrieval, and maintenance is known as...',
      answer: 'Database',
      distractors: ['Dataset', 'Query', 'Table'],
      explanation: 'A database is a structured set of data stored in a computer designed for efficient storage, retrieval, and maintenance.',
      link: 'https://www.freecodecamp.org/news/sql-and-databases-explained-in-plain-english/'
    },
    {
      question: 'In SQL, what aggregate function allows you to calculate the average of a numeric column from the set of rows returned by a query?',
      answer: 'AVG()',
      distractors: ['COUNT()', 'MINIMUM()', 'AVERAGE()'],
      explanation: 'The AVG() function is used to calculate the average of a column from the set of rows returned by a query.',
      link: 'https://www.freecodecamp.org/news/basic-sql-commands/'
    },
    {
      question: 'In SQL, what is the command used to change the structure of a table?',
      answer: 'ALTER TABLE',
      distractors: ['CHANGE TABLE', 'UPDATE TABLE', 'MODIFY TABLE'],
      explanation: 'The ALTER TABLE command is used to change the structure of a table in SQL.',
      link: 'https://www.freecodecamp.org/news/basic-sql-commands/'
    },
    {
      question: 'What does SQL stand for?',
      answer: 'Structured Query Language',
      distractors: ['Standardized question Language', 'String Query Language', 'Single Query Language'],
      explanation: 'SQL stands for Structured Query Language and it is used with relational databases.',
      link: 'https://www.freecodecamp.org/news/learn-sql-in-10-minutes/'
    },
    {
      question: 'In SQL, what is the command to create a table?',
      answer: 'CREATE TABLE <table-name>',
      distractors: ['TABLE CREATE <table-name>', 'NEW TABLE <table-name>', 'TABLE NEW <table-name>'],
      explanation: 'CREATE TABLE <table-name> is the SQL command to create a table.',
      link: 'https://www.freecodecamp.org/news/basic-sql-commands/'
    },
    {
      question: 'In SQL, what command allows you to rename a column or table using an alias?',
      answer: 'AS',
      distractors: ['ALIASES', 'SET', 'NAME'],
      explanation: 'The AS command is used to rename a column or table using an alias.',
      link: 'https://www.freecodecamp.org/news/basic-sql-commands/'
    },
    {
      question: 'In SQL, what type of join returns all rows for which there is a match in either of the tables?',
      answer: 'FULL OUTER JOIN',
      distractors: ['RIGHT OUTER JOIN', 'LEFT OUTER JOIN', 'INNER JOIN'],
      explanation: 'A FULL OUTER JOIN returns all rows for which there is a match in either of the tables.',
      link: 'https://www.freecodecamp.org/news/basic-sql-commands/'
    },
    {
      question: 'In SQL, what type of join returns all the records from the left table and the matching records from the right table?',
      answer: 'LEFT OUTER JOIN',
      distractors: ['FULL OUTER JOIN', 'INNER JOIN', 'RIGHT OUTER JOIN'],
      explanation: 'A LEFT OUTER JOIN returns all the records from the left table and the matching records from the right table.',
      link: 'https://www.freecodecamp.org/news/the-ultimate-guide-to-sql-join-statements/'
    },
    {
      question: 'In SQL, what statement is used to update a record in a table?',
      answer: 'UPDATE',
      distractors: ['CHANGE', 'SELECT', 'QUERY'],
      explanation: 'The UPDATE statement is used to update the value of a record in SQL.',
      link: 'https://www.freecodecamp.org/news/basic-sql-commands/'
    },
    {
      question: 'In SQL, what is the constraint used in SQL to limit the range of values that can be placed in a column?',
      answer: 'CHECK',
      distractors: ['RANGE', 'RESTRICT', 'VALIDATE'],
      explanation: 'The CHECK constraint is used to limit the range of values that can be placed in a column.',
      link: 'https://www.freecodecamp.org/news/basic-sql-commands/'
    },
    {
      question: 'In SQL, what is the command used to delete a table?',
      answer: 'DROP TABLE table_name',
      distractors: ['REMOVE TABLE table_name', 'DELETE TABLE table_name', 'ALTER TABLE table_name'],
      explanation: 'The DROP TABLE command is used to delete an entire table.',
      link: 'https://www.freecodecamp.org/news/learn-sql-queries-database-query-tutorial-for-beginners/'
    },
    {
      question: 'In SQL, what is the command used to give a record a date and time value from the system on execution?',
      answer: 'NOW()',
      distractors: ['TIMESTAMP()', 'Y-M-D()', 'DATETIME()'],
      explanation: 'The NOW() function gives the selected record a value of the current timestamp',
      link: 'https://www.freecodecamp.org/news/sql-date-functions-getdate/'
    },
    {
      question: 'In SQL, where can we access all column names within a database?',
      answer: 'INFORMATION_SCHEMA.COLUMNS',
      distractors: ['COLUMNS', 'SCHEMA.COLUMNS', 'SCHEMA.INFO.COLS'],
      explanation: 'You can select from INFORMATION_SCHEMA.COLUMNS and combine with a WHERE clause when needing to identify where a certain column is stored.',
      link: 'https://www.freecodecamp.org/news/learn-sql-queries-database-query-tutorial-for-beginners/'
    },
    {
      question: 'In SQL, what statement should you use to undo a GRANT statement?',
      answer: 'REVOKE',
      distractors: ['UNDO', 'DELETE', 'ROLLBACK'],
      explanation: 'The REVOKE statement can be used to undo the action of a GRANT statement.',
      link: 'https://dev.mysql.com/doc/refman/5.6/en/revoke.html'
    },
    {
      question: 'In SQL, which command erases all the updates made from the start of the transaction?',
      answer: 'ROLLBACK',
      distractors: ['COMMIT', 'DELETE', 'REVOKE'],
      explanation: 'The ROLLBACK TRANSACTION command will erase all modifications made to the data. Changes made to table and local variables will not be affected by this command.',
      link: 'https://learn.microsoft.com/en-us/sql/t-sql/language-elements/rollback-transaction-transact-sql?view=sql-server-ver16'
    },
    {
      question: 'Which of the following is not a distinct relationship in a SQL database?',
      answer: 'All-to-one',
      distractors: ['One-to-one', 'One-to-many', 'Many-to-many'],
      explanation: 'Database data can either be linked by one-to-one, one-to-many, or many-to-many relationships.',
      link: 'https://www.freecodecamp.org/news/relational-vs-nonrelational-databases-difference-between-sql-db-and-nosql-db/'
    },
    {
      question: 'In SQL, which function rounds a number to a specified number of decimal places?',
      answer: 'ROUND()',
      distractors: ['TRUNCATE()', 'CEIL()', 'FLOOR()'],
      explanation: 'The ROUND() function takes in two parameters(number and decimals) and rounds the number to the number of decimals specified in the 2nd parameter.',
      link: 'https://dev.mysql.com/doc/refman/5.7/en/precision-math-rounding.html'
    },
    {
      question: 'In SQL, which data type is used to store a string with up to 255 characters?',
      answer: 'TINYTEXT',
      distractors: ['STRING', 'BLOB', 'BINARY'],
      explanation: 'TINYTEXT can store up to 255 bytes and can be used for text like captions or summaries.',
      link: 'https://www.freecodecamp.org/news/learn-sql-in-10-minutes/'
    },
    {
      question: 'In SQL, what does TCL stand for?',
      answer: ' Transaction Control Language',
      distractors: [
        'Transaction controlling Language',
        'Transacted Control Language',
        'Transaction Console Language'
      ],
      explanation: 'Some of the Transaction Control Language commands include COMMIT, ROLLBACK, and SAVE TRANSACTION.',
      link: 'https://www.freecodecamp.org/news/dbms-and-sql-basics/'
    },
    {
      question: 'In SQL, which of the following is an approach for joining tables?',
      answer: 'All of the mentioned',
      distractors: ['Subqueries', 'Union Join', 'Natural Join'],
      explanation: 'In SQL, you can use a subquery, union join or natural join to join multiple tables together.',
      link: 'https://www.freecodecamp.org/news/dbms-and-sql-basics/'
    },
    {
      question: 'In SQL, what is the name of the join that will return matched and unmatched values from a table?',
      answer: 'Outer join',
      distractors: ['All of the Mentioned', 'Equi-join', 'Natural Join'],
      explanation: 'OUTER JOIN is used to return matched and unmatched values from a table.',
      link: 'https://www.freecodecamp.org/news/dbms-and-sql-basics/'
    },
    {
      question: 'In SQL, what is the name for an organized collection of data kept in a central location?',
      answer: 'Database',
      distractors: ['Table', 'Excel', 'csv'],
      explanation: 'A database is a curated collection of structured data that is kept in one location.',
      link: 'https://www.freecodecamp.org/news/sql-and-databases-full-course/'
    },
    {
      question: 'In MySQL, which of the following queries can be used to rename the table BaseCamp to BaseCamp_New?',
      answer: 'ALTER TABLE BaseCamp RENAME TO BaseCamp_New ;',
      distractors: [
        'ALTER TABLE BaseCamp TO BaseCamp_New ;',
        'ALTER TABLE BaseCamp UPDATE TO BaseCamp_New ;',
        'ALTER TABLE BaseCamp SET TO BaseCamp_New ;'
      ],
      explanation: 'If you want to rename a table called BaseCamp to BaseCamp_New, then you would use the following syntax in MySQL: ALTER TABLE table_name RENAME TO new_table_name;',
      link: 'https://www.freecodecamp.org/news/basic-sql-commands/'
    },
    {
      question: 'In SQL, what does BLOB stand for?',
      answer: 'Binary Large Object',
      distractors: ['Bad Listed Object', 'Bad Labelled Object', 'Big Listed Object'],
      explanation: 'BLOB stands for Binary Large Object and it is a SQL data type used to store large amounts of data.',
      link: 'https://www.freecodecamp.org/news/sql-data-types-mysql/'
    },
    {
      question: 'In SQL, what are the two types of Database Management Systems?',
      answer: 'relational databases and non-relational databases',
      distractors: ['functional and object oriented', 'procedural and relational', 'non-relational and assembly'],
      explanation: 'The two types of Database Management Systems are relational and non-relational databases.',
      link: 'https://www.freecodecamp.org/news/dbms-and-sql-basics/'
    },
    {
      question: 'In SQL, which of these is not an aggregate function?',
      answer: 'CAST',
      distractors: ['MIN/MAX', 'AVG', 'COUNT'],
      explanation: 'Aggregate functions do a particular task across database rows. CAST is not an aggregate function because it is used to convert one type of data value into another.',
      link: 'https://www.freecodecamp.org/news/sql-aggregate-functions-with-example-data-queries-for-beginners/'
    },
    {
      question: 'In SQL, which of the following is not a DDL command?',
      answer: 'DELETE',
      distractors: ['RENAME', 'TRUNCATE', 'COMMENT'],
      explanation: 'DDL stands for Data Definition Language, but DELETE is a DML(Data Manipulation Language) command.',
      link: 'https://www.freecodecamp.org/news/dbms-and-sql-basics/'
    },
    {
      question: 'In MySQL, which of the following would be used to delete a database named \'users\'?',
      answer: 'DROP DATABASE users',
      distractors: ['DELETE DATABASE users', 'TRUNCATE DATABASE users', 'UNDO DATABASE users'],
      explanation: `'DROP DATABASE <table-name>' drops all tables in the database and deletes the database.`,
      link: 'https://dev.mysql.com/doc/refman/8.0/en/drop-database.html'
    },
    {
      question: 'In SQL, which of the following is a DQL command?',
      answer: 'SELECT',
      distractors: ['UPDATE', 'COMMIT', 'INSERT'],
      explanation: 'DQL stands for Data Query Language, and \'SELECT\' is the only DQL command.',
      link: 'https://www.freecodecamp.org/news/learn-sql-in-10-minutes/'
    },
    {
      question: 'In SQL, which of the following is not a string data type?',
      answer: 'DEC',
      distractors: ['BLOB', 'BINARY', 'VARCHAR'],
      explanation: 'DEC is a numeric data type while BLOB, BINARY and VARCHAR are string data types in SQL.',
      link: 'https://www.freecodecamp.org/news/learn-sql-in-10-minutes/'
    },
    {
      question: 'In SQL, which of the following data types holds a FIXED length string?',
      answer: 'CHAR',
      distractors: ['VARCHAR', 'TEXT', 'BLOBs'],
      explanation: 'CHAR holds a fixed length string (up to 255 characters), while VARCHAR and TEXT hold variable length strings.',
      link: 'https://www.freecodecamp.org/news/sql-data-types-mysql/'
    },
    {
      question: `In SQL, which of the following wildcards combined with the LIKE operator finds any value that has 'or' at any position?`,
      answer: '%or%',
      distractors: ['__r%', 'a__%', 'or%'],
      explanation: `The SQL LIKE operator with '%or%' matches any values containing 'or' at any position within the string.`,
      link: 'https://youtu.be/-fW2X7fh7Yg?t=5881/'
    },
    {
      question: `How can you retrieve all columns from a table named 'employees' in SQL?`,
      answer: 'SELECT * FROM employees;',
      distractors: [
        'SELECT ALL columns FROM employees;',
        'SELECT COLUMN employees FROM *;',
        'GET * FROM employees;'
      ],
      explanation: `The SELECT * statement retrieves all columns from the 'employees' table.`,
      link: 'https://www.freecodecamp.org/news/sql-select-statement-and-query-examples/'
    },
    {
      question: 'What SQL function is used to count the number of rows in a table?',
      answer: 'SELECT COUNT(*) FROM table_name;',
      distractors: ['SUM(*) FROM table_name;', 'COUNT(table_name);', 'TOTAL_ROWS(table_name);'],
      explanation: 'The COUNT(*) function in SQL is used to count the number of rows in a table.',
      link: 'https://www.freecodecamp.org/news/sql-distinct-statement-how-to-query-select-and-count/'
    },
    {
      question: 'What SQL function is used to get every part of the string that occurs before the delimiter you specify?',
      answer: 'SUBSTRING_INDEX()',
      distractors: ['COUNT()', 'CHAR_LENGTH()', 'CONCAT()'],
      explanation: 'When you specify the compulsory arguments, the SUBSTRING_INDEX() function will get you every part of the string that occurs before the delimiter you specify.',
      link: 'https://www.freecodecamp.org/news/sql-where-contains-string-substring-query-example/'
    },
    {
      question: 'Which logical operator can be used to modify a WHERE clause to determine if a value is in the middle of two numbers?',
      answer: 'BETWEEN',
      distractors: ['IN', 'SOME', 'EXISTS'],
      explanation: 'The BETWEEN operator is an intuitive way to use the WHERE clause to help narrow down a result set.',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/'
    },
    {
      question: 'What SQL statement contains a valid subquery?',
      answer: 'SELECT * FROM employees WHERE wage > (SELECT AVG(wage) FROM employees)',
      distractors: [
        'SELECT MAX(*) FROM employees',
        `SELECT AVG(wage) FROM employees WHERE name IN ('name1', 'name2', 'name3')`,
        'SELECT country, AVG(wage) FROM employees GROUP BY country LIMIT 3'
      ],
      explanation: 'A SQL subquery is a query inside a query. So, in SQL, a subquery is also called a nested query or an inner query. The outer query in which the inner query is inserted is the main query.',
      link: 'https://www.freecodecamp.org/news/sql-subquery-how-to-sub-query-in-select-statement/'
    },
    {
      question: 'What is a good reason to use a temporary table?',
      answer: 'to store and reuse intermediate query results to avoid redundant computations',
      distractors: [
        'to store data for a short-lived analysis such as 1-2 weeks',
        'to improve database security',
        'to improve query performance'
      ],
      explanation: 'A temporary SQL table is a table that is created and used within the context of a specific session or transaction in a database.',
      link: 'https://www.freecodecamp.org/news/sql-temp-table-how-to-create-a-temporary-sql-table/'
    },
    {
      question: 'In SQL, which operator is used to check if a value exists in a specified set of values?',
      answer: 'IN',
      distractors: ['BETWEEN', 'EXISTS', 'LIKE'],
      explanation: 'The IN operator returns true or false if the first operand matches any of the values in the second operand. The IN operator is a shorthand for multiple OR conditions.',
      link: 'https://www.freecodecamp.org/news/sql-select-statement-and-query-examples/'
    },
    {
      question: 'Which of the following is not a type of SQL injection?',
      answer: 'Intersection SQL Injection',
      distractors: ['Error-Based SQL Injection', 'Blind SQL Injection', 'Union SQL Injection'],
      explanation: 'SQL injection is when you insert or inject a SQL query via input data from the client to the application. Error-Based SQL Injection, Blind SQL Injection, UNION SQL Injection are common types of SQL injections. ',
      link: 'https://www.freecodecamp.org/news/what-is-sql-injection-how-to-prevent-it/'
    },
    {
      question: 'What is the primary use of the EXISTS operator in SQL?',
      answer: 'To check the existence of rows in a subquery result set',
      distractors: [
        'To perform arithmetic operations on columns.',
        'To concatenate strings from different columns.',
        'To filter rows based on a specified pattern.'
      ],
      explanation: 'In SQL, the EXISTS operator is a logical operator used to determine if a subquery returns any rows.',
      link: 'https://www.freecodecamp.org/news/sql-tips-save-time-write-simpler-queries/'
    },
    {
      question: 'Which of the following SQL statements retrieves the names of employees who have completed at least one task from the given schema?',
      answer: 'SELECT employee_name FROM employees WHERE EXISTS (SELECT 1 FROM tasks WHERE tasks.employee_id = employees.employee_id);',
      distractors: [
        'SELECT employee_name FROM employees WHERE NOT EXISTS (SELECT * FROM tasks WHERE tasks.employee_id = employees.employee_id);',
        'SELECT employee_name FROM employees WHERE EXISTS (SELECT * FROM tasks WHERE tasks.employee_id = employees.employee_id);',
        'SELECT employee_name FROM employees WHERE COUNT(SELECT * FROM tasks WHERE tasks.employee_id = employees.employee_id) > 0;'
      ],
      explanation: 'The following SQL statement checks for the existence of at least one task for each employee using the EXISTS operator: SELECT employee_name FROM employees WHERE EXISTS (SELECT 1 FROM tasks WHERE tasks.employee_id = employees.employee_id);',
      link: 'https://www.freecodecamp.org/news/sql-tips-save-time-write-simpler-queries/'
    },
    {
      question: 'What is the primary purpose of the CASE statement in SQL?',
      answer: 'To perform conditional logic and return different values based on specified conditions.',
      distractors: [
        'To sort the result set in ascending order.',
        'To perform mathematical calculations on columns.',
        'To join multiple tables in a query.'
      ],
      explanation: 'The CASE statement evaluates a list of conditions and returns one of several possible result expressions.',
      link: 'https://www.freecodecamp.org/news/sql-tips-save-time-write-simpler-queries/'
    },
    {
      question: 'What is the primary purpose of the GROUP_CONCAT() function in SQL?',
      answer: 'To concatenate values from multiple rows into a single string within each group.',
      distractors: [
        'To perform mathematical calculations on grouped data.',
        'To sort the result set based on a specific column.',
        'To filter rows based on specified conditions.'
      ],
      explanation: 'The GROUP_CONCAT function is used to concatenate strings from multiple rows into a single row. This is useful when you need to combine multiple values into a single string.',
      link: 'https://www.freecodecamp.org/news/sql-tips-save-time-write-simpler-queries/'
    },
    {
      question: 'Which of the following SQL queries correctly shows the records within a 7-day period ending on 10/15/2023?',
      answer: `WHERE date >= '2023-10-09' AND date <= '2023-10-15'`,
      distractors: [
        `WHERE activity_date > '2023-10-15' AND activity_date <= '2023-10-08'`,
        `WHERE activity_date >= '10/09/2023' AND activity_date <= '10/15/2023'`,
        `WHERE activity_date BETWEEN '2023-10-09' AND '2023-10-16'`
      ],
      explanation: 'To select some particular date between one date and another, you can use the BETWEEN and AND keywords while specifying the dates. You can also use comparison operators such as greater than (>), less than (<), or equal(=).',
      link: 'https://www.freecodecamp.org/news/sql-date-function-query-timestamp-example-format/'
    },
    {
      question: 'Which of the following SQL queries correctly shows the number of unique subjects taken by a student?',
      answer: 'SELECT COUNT(DISTINCT SUBJECT_ID) FROM table_name;',
      distractors: [
        'SELECT COUNT(UNIQUE SUBJECT_ID)',
        'SELECT SUM(DISTINCT SUBJECT_ID)',
        'SELECT DISTINCT COUNT(SUBJECT_ID)'
      ],
      explanation: 'The SQL function SELECT COUNT(DISTINCT SUBJECT_ID) FROM table_name; is used to find the number of unique values in the SUBJECT_ID column, which represents the number of unique subjects taken by a student.',
      link: 'https://www.freecodecamp.org/news/sql-distinct-statement-how-to-query-select-and-count/'
    },
    {
      question: 'In SQL, which operator is used to combine multiple conditions, where all the conditions must be true for the result to be true?',
      answer: 'AND',
      distractors: ['OR', 'NOT', 'XOR'],
      explanation: `The 'AND' operator in SQL is used to combine multiple conditions, and it requires all the conditions to be true for the overall condition to be true. It's commonly used for complex filtering in SQL queries.`,
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter5basicsqlqueries'
    },
    {
      question: 'In SQL, which type of constraint enforces that values in a column are unique across all rows in a table?',
      answer: 'UNIQUE constraint',
      distractors: ['PRIMARY KEY constraint', 'CHECK constraint', 'FOREIGN KEY constraint'],
      explanation: 'The UNIQUE constraint in SQL ensures that values in a specified column or columns are unique across all rows in a table. This constraint is often used to prevent duplicate values in a column while allowing NULL values.',
      link: 'https://www.freecodecamp.org/news/basic-sql-commands/'
    },
    {
      question: 'What is the SQL JOIN clause used for?',
      answer: 'The SQL JOIN clause is used to combine rows from two or more tables based on a related column between them.',
      distractors: [
        'SQL JOIN is for creating new databases.',
        'SQL JOIN is used to delete records from a table.',
        'SQL JOIN is for sorting query results.'
      ],
      explanation: 'SQL JOIN is fundamental for retrieving data from multiple tables by establishing relationships between them.',
      link: 'https://www.freecodecamp.org/news/the-ultimate-guide-to-sql-join-statements/'
    },
    {
      question: 'What is the purpose of the SQL HAVING clause, and how does it differ from the WHERE clause?',
      answer: 'The SQL HAVING clause is used to filter rows in the result set after aggregation, while the WHERE clause filters rows before aggregation.',
      distractors: [
        'The SQL HAVING clause is used for sorting data in ascending order.',
        'The SQL HAVING clause is used for joining tables.',
        'The SQL HAVING clause is for deleting rows from a table.'
      ],
      explanation: 'The key difference between HAVING and WHERE is when the filtering occurs: HAVING works after aggregation, while WHERE works before aggregation.',
      link: 'https://www.freecodecamp.org/news/the-sql-having-clause-explained-with-example-syntax/'
    },
    {
      question: `What is the difference between the 'CHAR' and 'VARCHAR' data types in SQL?`,
      answer: `'CHAR' holds a fixed string length while 'VARCHAR' holds a variable string length`,
      distractors: [
        `'CHAR' is a numeric data type used for storing integers, while 'VARCHAR' is a text data type for storing strings.`,
        `'CHAR' is a case-insensitive data type, while 'VARCHAR' is case-sensitive.`,
        `'CHAR' is used for storing arrays, while 'VARCHAR' is used for storing variable-length data.`
      ],
      explanation: 'CHAR holds a fixed string length because it allocates a set amount of storage for the fixed size specified in parenthesis. VARCHAR holds a variable string length by the maximum size specified in parenthesis.',
      link: 'https://www.freecodecamp.org/news/sql-data-types-mysql/'
    },
    {
      question: 'What is the difference between the NUMERIC and FLOAT data types in SQL?',
      answer: 'NUMERIC stores exact numerical values, while FLOAT stores approximate numerical values',
      distractors: [
        'NUMERIC uses a single number to specify minimum precision, while FLOAT uses precision and scale to determine storage requirements.',
        'NUMERIC is used for floating-point numbers, while FLOAT is used for integers.',
        'NUMERIC allows for arbitrary precision, while FLOAT has a fixed precision of 10.'
      ],
      explanation: 'NUMERIC is like a precise calculator that stores numbers exactly as you write them, ensuring accuracy. FLOAT is like a quick estimate, storing numbers approximately, which is okay for most calculations but might have small errors.',
      link: 'https://forum.freecodecamp.org/t/a-guide-to-sql-data-types/290676'
    },
    {
      question: 'In PostgreSQL, what is the syntax for deleting a database?',
      answer: 'DROP DATABASE database_name;',
      distractors: [
        'DELETE DATABASE database_name;',
        'REMOVE DATABASE database_name;',
        'DESTROY DATABASE database_name;'
      ],
      explanation: 'In PostgreSQL, the DROP DATABASE command is used to permanently delete an entire database.',
      link: 'https://www.postgresql.org/docs/current/sql-dropdatabase.html'
    },
    {
      question: 'What is the default port number for PostgreSQL?',
      answer: '5432',
      distractors: ['8080', '3306', '3124'],
      explanation: 'By default, PostgreSQL listens on port 5432',
      link: 'https://www.freecodecamp.org/news/manage-postgresql-with-psql/'
    },
    {
      question: 'How is the result of a SQL SELECT statement displayed?',
      answer: 'In a virtual table known as a result-set',
      distractors: ['In a physical table', 'In a chart format', 'In a JSON file'],
      explanation: 'The result of a SQL SELECT statement is presented in a virtual table, enabling data display, analysis, or manipulation without altering the original table',
      link: 'https://www.freecodecamp.org/news/sql-select-statement-how-to-select-data-from-a-database/'
    },
    {
      question: 'What is the primary purpose of a temporary SQL table?',
      answer: 'To store data for a specific session or transaction',
      distractors: [
        'To store data permanently',
        'To create a backup of the database',
        'To store data for reporting purposes'
      ],
      explanation: 'Temporary SQL tables are used to hold data temporarily within a session or transaction, providing a short-term storage solution.',
      link: 'https://www.freecodecamp.org/news/sql-temp-table-how-to-create-a-temporary-sql-table/'
    },
    {
      question: 'How long does the data in a temporary SQL table persist?',
      answer: 'Data is deleted at the end of the session or transaction',
      distractors: [
        'Data persists permanently',
        'Data is deleted after a specific time period',
        'Data persists until explicitly deleted by the user'
      ],
      explanation: 'Data in temporary tables has a limited lifespan and is automatically removed from the database once the session or transaction concludes, ensuring temporary data doesn\'t persist unnecessarily.',
      link: 'https://www.freecodecamp.org/news/sql-temp-table-how-to-create-a-temporary-sql-table/'
    },
    {
      question: 'How are temporary table names typically different from permanent table names?',
      answer: ' Temporary table names are prefixed with a special character or keyword',
      distractors: [
        'Temporary table names are longer than permanent table names',
        'Temporary table names are case-sensitive, permanent table names are not',
        'Temporary table names are always in uppercase'
      ],
      explanation: 'Temporary tables are often named with special characters or keywords as prefixes to distinguish them from permanent tables, aiding in easy identification',
      link: 'https://www.freecodecamp.org/news/sql-temp-table-how-to-create-a-temporary-sql-table/'
    },
    {
      question: 'What happens to a temporary table at the end of a session?',
      answer: 'It is automatically dropped or deleted',
      distractors: [
        'It is copied to another database',
        'It is automatically converted into a permanent table',
        'It remains in the database but becomes read-only'
      ],
      explanation: 'Temporary tables are automatically removed from the database system at the end of the session, preventing any manual cleanup and ensuring efficient use of database resources',
      link: 'https://www.freecodecamp.org/news/sql-temp-table-how-to-create-a-temporary-sql-table/'
    },
    {
      question: 'In MySQL, which command is used to show all of the default databases that come as part of the installation?',
      answer: 'SHOW DATABASES',
      distractors: ['DATABASES', 'VIEW DATABASES', 'SHOW DATABASE'],
      explanation: 'The SHOW DATABASES command shows all the default databases that comes with the MySQL installation.',
      link: 'https://youtu.be/ER8oKX5myE0?si=gfwnDC7sCi6p5YIc&t=860'
    },
    {
      question: 'In MySQL, which command is used to show the current values of MySQL system variables?',
      answer: 'SHOW VARIABLES',
      distractors: ['VARS', 'VARIABLES', 'SHOW VARS'],
      explanation: 'The SHOW VARIABLES statement is used to check the current value of MySQL system variables.',
      link: 'https://youtu.be/ER8oKX5myE0?si=Glz3fWrKLnHuWpWo&t=4250'
    },
    {
      question: 'Which operator is used in the SQL query to match a single character?',
      answer: '_ wildcard operator',
      distractors: ['* wildcard operator', '+ wildcard operator', '% wildcard operator'],
      explanation: 'The _ wildcard operator matches a single character whereas % wildcard operator matches zero or more characters',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/'
    },
    {
      question: 'Which of the following normal forms have better data integrity and less duplicate data?',
      answer: 'Boyce-Codd normal form (BCNF)',
      distractors: ['First normal form (1NF)', 'Third normal form (3NF)', 'Second normal form (2NF)'],
      explanation: 'Boyce-Codd is the most normalized form and so it has better data integrity and less duplicate data compared to others',
      link: 'https://www.freecodecamp.org/news/a-beginners-guide-to-sql/#chapter9databasenormalization'
    },
    {
      question: 'In SQL, which of the following is NOT a Transaction Control Language command?',
      answer: 'Insert',
      distractors: ['Rollback', 'Commit', 'Save Transaction'],
      explanation: 'TCL stands for Transaction Control Language and common commands include COMMIT, ROLLBACK, and SAVE TRANSACTION.',
      link: 'https://www.freecodecamp.org/news/dbms-and-sql-basics/'
    },
    {
      question: 'Which shape is commonly used to represent entities in an ERD(Entity Relationship Diagram)?',
      answer: 'Rectangle',
      distractors: ['Circle', 'Diamond', 'Triangle'],
      explanation: 'Entities and tables in an ERD(Entity Relationship Diagram) are typically represented using rectangles, which contain the name of the entity.',
      link: 'https://youtu.be/-fW2X7fh7Yg?t=652'
    }
  ]
};

export default sqlQuiz;
