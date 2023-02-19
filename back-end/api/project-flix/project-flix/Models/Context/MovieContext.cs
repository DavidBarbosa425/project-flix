using project_flix.Models.Entities;
using project_flix.Models.Interfaces;
using project_flix.Models.Interfaces.IMovie;
using System.Data;
using System.Data.SqlClient;

namespace project_flix.Models.Context
{
    public class MovieContext : IMovieContext
    {
        private readonly SqlConnection _connection;

        public MovieContext(IConnectionManager connectionManager)
        {
            _connection = connectionManager.GetConnection();
        }
 
        public List<Movie> GetMoviesContext()
        {
            List<Movie> movies = new List<Movie>();

            try
            {
                string proc = "get_movie";
                SqlCommand commSel = new SqlCommand(proc, _connection);
                commSel.CommandType = CommandType.StoredProcedure;

                _connection.Open();

                SqlDataReader dataReader = commSel.ExecuteReader();

                while (dataReader.Read())
                {
                    Movie movie = new Movie();
                    movie.Id = dataReader.GetInt32("Id");
                    movie.Title = dataReader.GetString("title");
                    movie.Synopsis = dataReader.GetString("synopsis");
                    movie.MovieCover = dataReader.GetString("movie_cover");
                    movie.Url = dataReader.GetString("url");
                    movie.MovieGenre = dataReader.GetString("movie_genre");

                    movies.Add(movie);
                }

                return movies;
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
