-- Accounts Table

CREATE TABLE Accounts (
    account_id NUMBER PRIMARY KEY,
    customer_name VARCHAR2(100),
    account_type VARCHAR2(20),
    balance NUMBER
);

-- Employees Table

CREATE TABLE Employees (
    employee_id NUMBER PRIMARY KEY,
    employee_name VARCHAR2(100),
    department VARCHAR2(50),
    salary NUMBER
);


-- Sample Accounts

INSERT INTO Accounts VALUES (101, 'Ashish', 'Savings', 50000);
INSERT INTO Accounts VALUES (102, 'Rahul', 'Savings', 30000);
INSERT INTO Accounts VALUES (103, 'Priya', 'Current', 70000);
INSERT INTO Accounts VALUES (104, 'Anjali', 'Savings', 45000);

-- Sample Employees

INSERT INTO Employees VALUES (1, 'Amit', 'IT', 50000);
INSERT INTO Employees VALUES (2, 'Neha', 'HR', 45000);
INSERT INTO Employees VALUES (3, 'Rohan', 'IT', 60000);
INSERT INTO Employees VALUES (4, 'Sneha', 'Finance', 55000);

COMMIT;

SELECT * FROM Accounts;

SELECT * FROM Employees;

-- Scenario 1: Process Monthly Interest

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN
    UPDATE Accounts
    SET balance = balance + (balance * 0.01)
    WHERE account_type = 'Savings';

    COMMIT;
END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/

SELECT * FROM Accounts;

-- Scenario 2: Update Employee Bonus


CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department IN VARCHAR2,
    p_bonus IN NUMBER
)
AS
BEGIN
    UPDATE Employees
    SET salary = salary + (salary * p_bonus / 100)
    WHERE department = p_department;

    COMMIT;
END;
/


BEGIN
    UpdateEmployeeBonus('IT', 10);
END;
/


SELECT * FROM Employees;

-- Scenario 3: Transfer Funds

SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE TransferFunds (
    p_fromAccount IN NUMBER,
    p_toAccount IN NUMBER,
    p_amount IN NUMBER
)
AS
    v_balance NUMBER;
BEGIN
    -- Get balance of source account
    SELECT balance
    INTO v_balance
    FROM Accounts
    WHERE account_id = p_fromAccount;

    -- Check sufficient balance
    IF v_balance >= p_amount THEN

        -- Deduct from source account
        UPDATE Accounts
        SET balance = balance - p_amount
        WHERE account_id = p_fromAccount;

        -- Add to destination account
        UPDATE Accounts
        SET balance = balance + p_amount
        WHERE account_id = p_toAccount;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Fund Transfer Successful.');

    ELSE

        DBMS_OUTPUT.PUT_LINE('Insufficient Balance.');

    END IF;
END;
/



BEGIN
    TransferFunds(101, 102, 5000);
END;
/


SELECT * FROM Accounts;