using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using WebAPI.Domains;
using WebAPI.Interfaces;
using WebAPI.Repositories;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EspecialidadeController : ControllerBase
    {
        private IEspecialidadeRepository _repository;
        public EspecialidadeController()
        {
            _repository = new EspecialidadeRepository();
        }

        [HttpGet]
<<<<<<< HEAD
        public IActionResult Get() 
=======
        public ActionResult Get() 
>>>>>>> gustavo
        {
            return Ok(_repository.Listar());
        }

        [HttpPost] 
<<<<<<< HEAD
        public IActionResult Post(Especialidade especialidade)
=======
        public ActionResult Post(Especialidade especialidade)
>>>>>>> gustavo
        {
            _repository.Cadastrar(especialidade);
            
            return StatusCode(201);
        }

    }
}
