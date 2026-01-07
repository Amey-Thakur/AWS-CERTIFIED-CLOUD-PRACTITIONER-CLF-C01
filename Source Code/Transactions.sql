CREATE DATABASE Transactions_Prod;

USE Transactions_Prod;

CREATE TABLE Transactions (
    transactions_id INT PRIMARY KEY,
    amount DECIMAL (13,2) NOT NULL,
    transactions_type ENUM ('PURCHASE','REFUND') NOT NULL
)

DESC Transactions;

INSERT INTO Transactions (transactions_id, amount, transactions_type) VALUES
(111, 13.50, 'PURCHASE'),
(222, 172.19, 'REFUND')

SELECT *FROM Transactions;