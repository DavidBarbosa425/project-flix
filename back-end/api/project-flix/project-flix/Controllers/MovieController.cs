using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using project_flix.Models.Entities;
using project_flix.Models.Interfaces.IMovie;

namespace project_flix.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly IMovieService _movieService;

        public MovieController(IMovieService movieService)
        {
            _movieService = movieService;
        }

        [HttpGet]   
        public IActionResult Get()
        {
            List<Movie> movies = new List<Movie>();
            movies = _movieService.GetMoviesService();

            return Ok(movies);
        }
    }
}
