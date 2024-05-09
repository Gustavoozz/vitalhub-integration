using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Interfaces;
using WebAPI.Repositories;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicoClinicaController : ControllerBase
    {
        private IMedicoClinicaRepository medicoClinicaRepository;

        public MedicoClinicaController()
        {
            medicoClinicaRepository = new MedicoClinicaRepository();
        }

        [HttpGet]
        public IActionResult GetMedicoClinica(Guid medicoId, Guid clinicaId)
        {
            try
            {
                return Ok(medicoClinicaRepository.ListarMedicoClinica(medicoId, clinicaId));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
