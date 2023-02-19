using project_flix.Models.Entities;

namespace project_flix.Models.Interfaces.IMovie
{
    public interface IMovieContext
    {
        List<Movie> GetMoviesContext();
    }
}
