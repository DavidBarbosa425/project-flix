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
            List<Banner> banners = new List<Banner>();

            try
            {
                string proc = "get_banner";
                SqlCommand commSel = new SqlCommand(proc, _connection);
                commSel.CommandType = CommandType.StoredProcedure;

                _connection.Open();

                SqlDataReader dataReader = commSel.ExecuteReader();

                while (dataReader.Read())
                {
                    Banner banner = new Banner();
                    banner.Id = dataReader.GetInt32("Id");
                    banner.Url = dataReader.GetString("url");
                    banner.Theme = dataReader.GetString("theme");
                    banner.Size = dataReader.GetString("size");

                    banners.Add(banner);
                }

                return banners;
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
