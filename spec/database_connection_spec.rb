require 'database_connection'
require 'pg'

describe DatabaseConnection do
  describe '.setup' do
    it 'Connects to test PG database' do
      expect(PG).to receive(:connect).with(dbname: 'thermostat_test')
      DatabaseConnection.setup('thermostat_test')
    end
  end

  describe '.query' do
    it 'Executes an SQL command via PG' do
      conn = DatabaseConnection.setup('thermostat_test')
      expect(conn).to receive(:exec).with('SELECT * FROM data;')
      DatabaseConnection.query('SELECT * FROM data;')
    end
  end
end
