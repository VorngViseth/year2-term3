import subprocess

def restore_database(host, user, password, db_name, backup_file):
    # Construct the mysql command
    restore_command = f"mysql -h {host} -u {user} -p{password} {db_name} < {backup_file}"

    try:
        # Execute the restore command
        subprocess.run(restore_command, shell=True, check=True)
        print(f"Restore successful from: {backup_file}")
    except subprocess.CalledProcessError as e:
        print(f"Restore failed: {e}")

# replace this with the actual backup file path you want to restore from
backup_dir = './backups/AirLine_backup1_20240529162418.sql'
# Usage example
restore_database('localhost', 'root', 'Root', 'AirLine_fromBackUp', backup_dir)
