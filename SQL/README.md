# SQL

Commands to create a table
```sql
CREATE TABLE custemer(
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(60) NOT NULL,
  company VARCHAR(60) NOT NULL,
  street VARCHAR(50) NOT NULL,
  city VARCHAR(40) NOT NULL,
  state CHAR(2) NOT NULL,
  zip MEDIUMINT UNSIGNED NOT NULL,
  phone VARCHAR(20) NOT NULL,
  birth_date DATE NOT NULL,
  sex ENUM('M', 'F') NOT NULL,
  date_entered TIMESTAMP NOT NULL,
  id INT UNSIGNED NOT NULL
  AUTO_INCREMENT PRIMARY KEY
);
```

`NOT NULL` means that to enter a register the value of that column cannot be `null`. The attribute `UNSIGNED` allows only positive values.

All integer types can have an optional (nonstandard) attribute UNSIGNED. Unsigned type can be used to permit only nonnegative numbers in a column or when you need a larger upper numeric range for the column. For example, if an INT column is UNSIGNED, the size of the column's range is the same but its endpoints shift from -2147483648 and 2147483647 up to 0 and 4294967295. ([more info](https://stackoverflow.com/questions/3895692/what-does-unsigned-in-mysql-mean-and-when-to-use-it))

MySQL uses the `AUTO_INCREMENT` keyword to perform an auto-increment feature. By default, the starting value for `AUTO_INCREMENT` is 1, and it will increment by 1 for each new record.

`TIMESTAMP` is affected by time zone settings. While DATETIME is constant.`TIMESTAMP` is four bytes and DATETIME is eight bytes, therefore the timestamps (`TIMESTAMP`) are also lighter in the database, with faster indexing. ([more infor](https://es.stackoverflow.com/questions/35/debo-utilizar-un-campo-de-tipo-datetime-o-timestamp-en-mysql))

## Data Types

There are different supported Data Types in SQL. And you have to spcified them when creating a table and working with queries. The supported Data Types may vary between different DBMS (Data Base Management System) like MySQL, SQLite, PostgreSQL. But these are some of them.

| **TYPE**     | **DESCRIPTION**                       |
|--------------|---------------------------------------|
| TINYINT      | -127 **TO** 127                       |
| SMALLINT     | -32768 **-** 32767                    |
| MEDIUMINT    | -8388608 **TO** 8388607               |
| INT          | -2147483648 **TO** 2147483647         |
| BIGINT       | MAX 9,223,372,036,854,775,807         |
| BOOL         | 0 **OR** 1                            |
| FLOAT        | -1.175494351E-38 (HARDWARE DEPENDENT) |
| DECIMAL(6,2) | -9999.99 **TO** 9999.99               |
| DATE         | '1000-01-01' **TO** '9999-12-12'      |
| DATETIME     | MAX '9999-12-31 23:59:59.999999'      |
| TIMESTAMP    | MAX '2038-01-19 03:14:07.999999'      |
| TIME         | MAX '838:59:59.000000'                |
| YEAR         | '1901' **TO** '2155'                  |
| VARCHAR(m)   | CHARACTERS WITH MAX m BYTES           |
| BLOB         | 65,535 CHARACTERS                     |
| MEDIUMBLOB   | 16,777,215 CHARACTERS                 |
| LONGBLOB     | 4,294,967,295 CHARACTERS              |
| ENUM         | 65,535 DISTINCT ELEMENTS              |
| SET          | 65,535 DISTINCT ELEMENTS              |


## Data Constraints

SQL constraints are used to specify rules for the data in a table. If there is any violation between the constraint and the data action, the action is aborted.

The following constraints are commonly used in SQL:
- `NOT NULL` - Ensures that a column cannot have a NULL value
- `UNIQUE` - Ensures that all values in a column are different
- `PRIMARY KEY` - A combination of a `NOT NULL` and `UNIQUE`. Uniquely identifies each row in a table
- `FOREIGN KEY` - Prevents actions that would destroy links between tables
- `CHECK` - Ensures that the values in a column satisfies a specific condition
- `DEFAULT` - Sets a default value for a column if no value is specified
- `CREATE INDEX` - Used to create and retrieve data from the database very quickly

