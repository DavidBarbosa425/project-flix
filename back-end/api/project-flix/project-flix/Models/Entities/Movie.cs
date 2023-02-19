namespace project_flix.Models.Entities
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Synopsis { get; set; }
        public string MovieCover { get; set; }
        public string Url { get; set; }
        public string MovieGenre { get; set; }
    }
}
