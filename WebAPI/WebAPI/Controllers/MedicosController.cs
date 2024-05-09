using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using WebAPI.Domains;
using WebAPI.Interfaces;
using WebAPI.Repositories;
using WebAPI.Utils.BlobStorage;
using WebAPI.ViewModels;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicosController : ControllerBase
    {
        private IMedicoRepository _medicoRepository;
        public MedicosController()
        {
            _medicoRepository = new MedicoRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_medicoRepository.ListarTodos());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("BuscarPorId")]
        public IActionResult GetById(Guid id)
        {
            try
            {
                return Ok(_medicoRepository.BuscarPorId(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost]
        public async Task<IActionResult> Post([FromForm] MedicoViewModel medicoModel)
        {
            try
            {
                // objeto a ser cadastrado
                Usuario user = new Usuario();

                user.Nome = medicoModel.Nome;
                user.Email = medicoModel.Email;
                user.TipoUsuarioId = medicoModel.IdTipoUsuario;

                // define o nome do container do blob
                var containerName = "vitalhubgrupo8container";

                // define a string de conexão
                var connectionString = "DefaultEndpointsProtocol=https;AccountName=blobvitalhubgrupo8;AccountKey=7gWrqO0Kn2WCBMIOz3A0K3CyGUT9FXSGR/NvowiqAi3ca+UvNCxBznrd6D8f7PSm/8dNHQZZyeet+AStFce2ig==;EndpointSuffix=core.windows.net";

                // aqui vamos chamar o método para upload de imagem
                user.Foto = await AzureBlobStorageHelper.UploadImageBlobAsync(medicoModel.Arquivo, connectionString, containerName);

                user.Senha = medicoModel.Senha;

                user.Medico = new Medico();
                user.Medico.Crm = medicoModel.Crm;
                user.Medico.EspecialidadeId = medicoModel.EspecialidadeId;


                user.Medico.Endereco = new Endereco();
                user.Medico.Endereco.Logradouro = medicoModel.Logradouro;
                user.Medico.Endereco.Numero = medicoModel.Numero;
                user.Medico.Endereco.Cep = medicoModel.Cep;

                _medicoRepository.Cadastrar(user);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("BuscarPorIdClinica")]
        public IActionResult GetByIdClinica(Guid id)
        {
            try
            {
                return Ok(_medicoRepository.ListarPorClinica(id)); ;

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("BuscarPorData")]
        public IActionResult GetByDate(DateTime data, Guid id)
        {
            try
            {
                return Ok(_medicoRepository.BuscarPorData(data, id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public IActionResult UpdateProfile(Guid idUsuario, MedicoViewModel medico)
        {
            try
            {
                return Ok(_medicoRepository.AtualizarPerfil(idUsuario, medico));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}