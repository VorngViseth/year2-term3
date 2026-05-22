CREATE USER 'sales'@'localhost' IDENTIFIED BY 'sales123';
CREATE USER 'marketing'@'localhost' IDENTIFIED BY 'marketing123';
CREATE USER 'dev'@'localhost' IDENTIFIED BY 'dev123';

CREATE ROLE 'sales_analyst';
CREATE ROLE 'marketing_viewer';
CREATE ROLE 'developer';

grant select on sale_db.employee_info to 'sales_analyst';
grant select on sale_db.sales_data to 'sales_analyst';
grant select on sale_db.contact_info to 'marketing_viewer';
grant select, insert, update, delete on sale_db.user_accounts to 'developer';

grant 'sales_analyst' to 'sales'@'localhost';
grant 'marketing_viewer' to 'marketing'@'localhost';
grant 'developer' to 'dev'@'localhost';

set default role 'sales_analyst' to 'sales'@'localhost';
set default role 'marketing_viewer' to 'marketing'@'localhost';
set default role 'developer' to 'dev'@'localhost';