using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Contexts;
using WebAPI.Domains;
using WebAPI.Utils.Mail;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecuperarSenhaController : ControllerBase
    {
        private readonly VitalContext vitalContext;
        private readonly EmailSendingService emailSendingService;

        public RecuperarSenhaController(VitalContext context, EmailSendingService sendingService)
        {
            vitalContext = context;
            emailSendingService = sendingService;
        }

        [HttpPost]
        public async Task<IActionResult> SendRecoveryCodePassword(string email)
        {
            try
            {
                Usuario? user = await vitalContext.Usuarios.FirstOrDefaultAsync(x => x.Email == email);

                if (user == null)
                {
                    return NotFound("Usuário não encontrado");
                }

                // gerar um código com 4 algarismos
                Random random = new Random();

                int recoveryCode = random.Next(1000, 9999);

                user.CodRecupSenha = recoveryCode;

                await vitalContext.SaveChangesAsync();

                await emailSendingService.SendRecoveryEmail(user.Email!, recoveryCode);

                return Ok("Código enviado com sucesso");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("ValidarCodigoRecuperacaoSenha")]
        public async Task<IActionResult> ValidatePasswordRecoveryCode(string email, int codigo)
        {
            try
            {
                var user = await vitalContext.Usuarios.FirstOrDefaultAsync(x => x.Email == email);

                if (user == null)
                {
                    return NotFound("Usuário não encontrado");
                }


                if (user.CodRecupSenha != codigo)
                {
                    return BadRequest("Código de recuperação inválido!");
                }

                user.CodRecupSenha = null;

                await vitalContext.SaveChangesAsync();

                return Ok("Código de recuperação válido!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
