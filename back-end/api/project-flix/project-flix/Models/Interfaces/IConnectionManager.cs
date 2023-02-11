using System.Data.SqlClient;

namespace project_flix.Models.Interfaces
{
    public interface IConnectionManager
    {
        SqlConnection GetConnection();
    }
}
