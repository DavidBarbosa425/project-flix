using project_flix.Models.Entities;
using project_flix.Models.Interfaces.IBanner;

namespace project_flix.Models.Services
{
    public class BannerService : IBannerService
    {
        private readonly IBannerRepository _bannerRepository;

        public BannerService(IBannerRepository bannerRepository)
        {
            _bannerRepository = bannerRepository;
        }

        public List<Banner> ListBannerService()
        {
            try
            {
                List<Banner> banners = _bannerRepository.ListBannerRepository();
                return banners;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
