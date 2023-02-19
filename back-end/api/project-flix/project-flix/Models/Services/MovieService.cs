using project_flix.Models.Entities;
using project_flix.Models.Interfaces.IMovie;

namespace project_flix.Models.Services
{
    public class MovieService : IMovieService
    {
        private readonly IMovieRepository _movieRepository;

        public MovieService(IMovieRepository movieRepository)
        {
            _movieRepository = movieRepository;
        }

        public List<Movie> GetMoviesService()
        {
            return _movieRepository.GetMoviesRepository();
        }
    }
}
