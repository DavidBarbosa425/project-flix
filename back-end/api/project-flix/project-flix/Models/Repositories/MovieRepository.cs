using project_flix.Models.Entities;
using project_flix.Models.Interfaces.IMovie;

namespace project_flix.Models.Repositories
{
    public class MovieRepository : IMovieRepository
    {
        private readonly IMovieContext _movieContext;

        public MovieRepository(IMovieContext movieContext)
        {
            _movieContext = movieContext;
        }

        public List<Movie> GetMoviesRepository()
        {
            return _movieContext.GetMoviesContext();
        }
    }
}
