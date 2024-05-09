
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;

namespace WebAPI.Utils.Mail
{
    public class EmailService : IEmailService
    {
        // variável que armazena as configurações de EmailSettings
        private readonly EmailSettings emailSettings;

        // construtor que recebe a dependence injection da EmailSettings
        public EmailService(IOptions<EmailSettings> options)
        {
            emailSettings = options.Value;
        }

        // método para envio de email
        public async Task SendEmailAsync(MailRequest mailRequest)
        {
            try
            {
                // objeto que representa o email
                var email = new MimeMessage();

                // define o remetente do email
                email.Sender = MailboxAddress.Parse(emailSettings.Email);

                // define o destinatário do email
                email.To.Add(MailboxAddress.Parse(mailRequest.ToEmail));

                // define o assunto do email
                email.Subject = mailRequest.Subject;

                // cria o corpo do email
                var builder = new BodyBuilder();

                // define o corpo do email como HTML
                builder.HtmlBody = mailRequest.Body;

                // define o corpo do email no objeto MimeMessage
                email.Body = builder.ToMessageBody();

                using (var smtp = new SmtpClient())
                {
                    // conecta-se ao servidor SMTP usando os dados de emailSettings
                    smtp.Connect(emailSettings.Host, emailSettings.Port, SecureSocketOptions.StartTls);

                    // autentica-se no servidor SMTP usando os dados de emailSettings
                    smtp.Authenticate(emailSettings.Email, emailSettings.Password);

                    await smtp.SendAsync(email);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Task SendMailAsync(MailRequest mailRequest)
        {
            throw new NotImplementedException();
        }
    }
}
