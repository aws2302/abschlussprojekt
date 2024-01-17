#!/bin/bash

# Create Table and Insert Data
mysql -u admin -p test123 -e "USE userdata; 
                            CREATE TABLE IF NOT EXISTS User 
                            (UserID INT PRIMARY KEY NOT NULL, 
                            RealName VARCHAR(255) NOT NULL,
                            EmailAddress VARCHAR(255) NOT NULL UNIQUE,
                            BirthDate INT,
                            Course VARCHAR(255),
                            AuthProvider VARCHAR(255),
                            ProfileImg VARCHAR(255)); 
                            INSERT INTO User (UserID, RealName, EmailAddress, BirthDate, Course, AuthProvider, ProfileImg)"