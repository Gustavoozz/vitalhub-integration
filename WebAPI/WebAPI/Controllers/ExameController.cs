using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Domains;
using WebAPI.Interfaces;
using WebAPI.Utils.OCR;
using WebAPI.ViewModels;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExameController : ControllerBase
    {
        private readonly IExameRepository exameRepository;
        private readonly OcrService ocrService;

        public ExameController(IExameRepository exame, OcrService ocr)
        {
            exameRepository = exame;
            ocrService = ocr;
        }

        [HttpPost("Cadastrar")]
        public async Task<IActionResult> Post([FromForm] ExameViewModel exameViewModel)
        {
            try
            {
                if (exameViewModel.Imagem == null || exameViewModel == null)
                {
                    return BadRequest("Nenhuma imagem fornecida");

                }

                using (var stream = exameViewModel.Imagem.OpenReadStream())
                {
                    var result = await ocrService.RecognizeTextAsync(stream);

                    exameViewModel.Descricao = result;

                    Exame exame = new Exame()
                    {
                        Descricao = exameViewModel.Descricao,
                        ConsultaId = exameViewModel.ConsultaId
                    };

                    exameRepository.Cadastrar(exame);

                    return Ok(exame);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("BuscarPorIdConsulta")]
        public IActionResult GetByIdConsulta(Guid idConsulta)
        {
            try
            {
                List<Exame> lista = exameRepository.BuscarPorIdConsulta(idConsulta);

                return Ok(lista);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}