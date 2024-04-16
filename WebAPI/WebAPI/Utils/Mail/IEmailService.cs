namespace WebAPI.Utils.Mail
{
    public interface IEmailService
    {
        // método assíncrono para envio de email
        Task SendMailAsync(MailRequest mailRequest);
    }
}
