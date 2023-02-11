using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using project_flix.Models.Entities;
using project_flix.Models.Interfaces.IBanner;

namespace project_flix.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BannerController : ControllerBase
    {
        private readonly IBannerService _bannerService;

        public BannerController(IBannerService bannerService)
        {
            _bannerService = bannerService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            List<Banner> banners = new List<Banner>();
            banners = _bannerService.ListBannerService();
            return Ok(banners);
        }
    }
}
