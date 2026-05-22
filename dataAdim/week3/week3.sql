create user 'michael'@'localhost' identified by 'michael123$';
create role 'deputyManager';
grant all privileges on banking_system.* to 'deputyManager' with grant option;
grant 'deputyManager' to 'michael'@'localhost';

create user 'jessica'@'localhost' identified by 'jessica2023$';
create role 'databaseAdmin';
grant alter, create view, delete, select, insert, update on banking_system.* to 'databaseAdmin';
grant 'databaseAdmin' to 'jessica'@'localhost';

create user 'james'@'localhost' identified by 'james2024$';
grant 'databaseAdmin' to 'james'@'localhost';

create user 'david'@'localhost' identified by 'david123456$';
create role 'webDevelopmentManager';
grant alter, create view, insert, select, update on banking_system.* to 'webDevelopmentManager';
grant 'webDevelopmentManager' to 'david'@'localhost';

create user 'matthew'@'localhost' identified by 'matthew6789$';
create role 'seniorDeveloper';
grant create view, select, insert, update on banking_system.* to 'seniorDeveloper' with grant option;
grant 'seniorDeveloper' to 'matthew'@'localhost';

create user 'emily'@'localhost' identified by 'emily1234$';
create role 'juniorDeveloper';
grant select, insert, update on banking_system.Customers to 'juniorDeveloper';
grant select, insert, update on banking_system.Accounts to 'juniorDeveloper';
grant select, insert, update on banking_system.Transactions to 'juniorDeveloper';
grant 'juniorDeveloper' to 'emily'@'localhost';

create user 'john'@'localhost' identified by 'john1234$';
grant 'juniorDeveloper' to 'john'@'localhost';

create user 'mario'@'localhost' identified by 'mario1234$';
create role 'intern';
grant select, insert, update on banking_system.Customers to 'intern';
grant select, insert, update on banking_system.Accounts to 'intern';
grant select, insert, update on banking_system.Transactions to 'intern';
grant 'intern' to 'mario'@'localhost';
alter user 'mario'@'localhost' password expire interval 100 day;