using project_flix.Models.Entities;
using project_flix.Models.Interfaces;
using project_flix.Models.Interfaces.IBanner;
using System.Data;
using System.Data.SqlClient;

namespace project_flix.Models.Context
{
    public class BannerContext : IBannerContext
    {
        private readonly SqlConnection _connection;

        public BannerContext(IConnectionManager connectionManager)
        {
            _connection = connectionManager.GetConnection();
        }

        public List<Banner> ListBannerContext()
        {
            List<Banner> Banners = new List<Banner>();

            try
            {
                string proc = "get_banners";
                SqlCommand commSel = new SqlCommand(proc, _connection);
                commSel.CommandType = CommandType.StoredProcedure;

                _connection.Open();

                SqlDataReader dataReader = commSel.ExecuteReader();

                while (dataReader.Read())
                {
                    Banner Banner = new Banner();
                    Banner.Id = dataReader.GetInt32("Id");
                    Banner.Url = dataReader.GetString("url");
                    Banner.Theme = dataReader.GetString("theme");
                    Banner.Size = dataReader.GetString("size");

                    Banners.Add(Banner);
                }

                return Banners;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            finally
            {
                _connection.Close();
            }
        }
    }
}
