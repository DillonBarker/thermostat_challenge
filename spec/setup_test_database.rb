require_relative '../lib/database_connection'

def setup_test_database
  conn = PG.connect(dbname: ‘thermostat_test’)
  conn.exec(“TRUNCATE data RESTART IDENTITY;“)
end
