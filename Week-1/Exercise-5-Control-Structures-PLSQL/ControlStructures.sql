-- Create Tables

CREATE TABLE Customers (
    customer_id NUMBER PRIMARY KEY,
    customer_name VARCHAR2(100),
    age NUMBER,
    balance NUMBER,
    isVIP VARCHAR2(5)
);

CREATE TABLE Loans (
    loan_id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    interest_rate NUMBER,
    due_date DATE,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

-- Insert Data

INSERT INTO Customers VALUES (101, 'Ashish', 65, 15000, 'FALSE');
INSERT INTO Customers VALUES (102, 'Rahul', 45, 8000, 'FALSE');
INSERT INTO Customers VALUES (103, 'Priya', 70, 22000, 'FALSE');
INSERT INTO Customers VALUES (104, 'Anjali', 35, 5000, 'FALSE');

INSERT INTO Loans VALUES (1, 101, 10, DATE '2026-07-15');
INSERT INTO Loans VALUES (2, 102, 12, DATE '2026-09-20');
INSERT INTO Loans VALUES (3, 103, 9, DATE '2026-07-10');
INSERT INTO Loans VALUES (4, 104, 11, DATE '2026-12-01');

COMMIT;

-- Verify Data

SELECT * FROM Customers;
SELECT * FROM Loans;

-- Scenario 1

BEGIN
    FOR cust IN (
        SELECT customer_id
        FROM Customers
        WHERE age > 60
    )
    LOOP
        UPDATE Loans
        SET interest_rate = interest_rate - 1
        WHERE customer_id = cust.customer_id;
    END LOOP;

    COMMIT;
END;
/

-- Verify Scenario 1

SELECT * FROM Loans;

-- Scenario 2

BEGIN
    FOR cust IN (
        SELECT customer_id
        FROM Customers
        WHERE balance > 10000
    )
    LOOP
        UPDATE Customers
        SET isVIP = 'TRUE'
        WHERE customer_id = cust.customer_id;
    END LOOP;

    COMMIT;
END;
/

-- Verify Scenario 2

SELECT customer_id,
       customer_name,
       balance,
       isVIP
FROM Customers
ORDER BY customer_id;

-- Scenario 3

SET SERVEROUTPUT ON;

BEGIN
    FOR loan IN (
        SELECT customer_id, due_date
        FROM Loans
        WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan due for Customer ID '
            || loan.customer_id
            || ' on '
            || TO_CHAR(loan.due_date, 'DD-MON-YYYY')
        );
    END LOOP;
END;
/

