using project_flix.Models.Entities;
using project_flix.Models.Interfaces.IBanner;

namespace project_flix.Models.Repositories
{
    public class BannerRepository : IBannerRepository
    {
        private readonly IBannerContext _context;

        public BannerRepository(IBannerContext context)
        {
            _context = context;
        }

        public List<Banner> ListBannerRepository()
        {
            List<Banner> banners = _context.ListBannerContext();
            return banners;
        }
    }
}
