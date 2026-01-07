/*
========================================================================================
Project: AWS Certified Cloud Practitioner | CLF-C01 Archive
File: Transactions.sql
Description: RDS/Aurora Relational Database Transaction Test Scripts.
             Validates SQL deployment and data integrity within AWS RDS instances.
Authors: Amey Thakur & Mega Satish
GitHub: https://github.com/Amey-Thakur | https://github.com/msatmod
Repository: https://github.com/Amey-Thakur/AWS-CERTIFIED-CLOUD-PRACTITIONER-CLF-C01
Release Date: 2022-01-21
========================================================================================
*/

-- 1. Initialize the Production Transaction Database
CREATE DATABASE Transactions_Prod;

-- 2. Select the database for subsequent operations
USE Transactions_Prod;

-- 3. Define the core Transactions schema
CREATE TABLE Transactions (
    transactions_id INT PRIMARY KEY,                         -- Unique Identifier for each transaction
    amount DECIMAL (13,2) NOT NULL,                          -- Transaction amount with 2-decimal precision
    transactions_type ENUM ('PURCHASE','REFUND') NOT NULL    -- Categorization of transaction behavior
);

-- 4. Verify the table structural metadata
DESC Transactions;

-- 5. Seed the database with pilot transaction data
INSERT INTO Transactions (transactions_id, amount, transactions_type) VALUES
(111, 13.50, 'PURCHASE'),
(222, 172.19, 'REFUND');

-- 6. Perform a comprehensive data retrieval snapshot
SELECT * FROM Transactions;