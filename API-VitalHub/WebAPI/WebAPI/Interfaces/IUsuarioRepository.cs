using WebAPI.Domains;

namespace WebAPI.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuario usuario);

        Usuario BuscarPorId(Guid id);

        Usuario BuscarPorEmailESenha(string email, string senha);

<<<<<<< HEAD
        bool AlterarSenha(Guid Id, string senhaAntiga, string senhaNova);

   
=======
        bool AlterarSenha(Guid Id, string senhaAntiga, string senhaNova);   
>>>>>>> gustavo
    }
}
