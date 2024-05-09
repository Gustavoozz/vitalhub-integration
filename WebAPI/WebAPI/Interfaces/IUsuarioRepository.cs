using WebAPI.Domains;

namespace WebAPI.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuario usuario);

        Usuario BuscarPorId(Guid id);

        Usuario BuscarPorEmailESenha(string email, string senha);

<<<<<<< HEAD:WebAPI/WebAPI/Interfaces/IUsuarioRepository.cs
        bool AlterarSenha(string email, string senhaNova);

        public void AtualizarFoto(Guid id, string novaUrlFoto);
=======
<<<<<<< HEAD
        bool AlterarSenha(Guid Id, string senhaAntiga, string senhaNova);

   
=======
        bool AlterarSenha(Guid Id, string senhaAntiga, string senhaNova);   
>>>>>>> gustavo
>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978:API-VitalHub/WebAPI/WebAPI/Interfaces/IUsuarioRepository.cs
    }
}