using project_flix.Models.Interfaces;
using System.Data.SqlClient;

namespace project_flix.Models.Context
{
    public class ConnectionManager : IConnectionManager
    {
        private static string _connStrName = "project_flix";
        private static SqlConnection connection = null;

        public ConnectionManager(IConfiguration configuration)
        {
            var connStr = configuration.GetConnectionString(_connStrName);
            if (connection == null)
                connection = new SqlConnection(connStr);
        }

        public SqlConnection GetConnection()
        {
            return connection;
        }
    }
}
