using WebAPI.Domains;
using WebAPI.ViewModels;

namespace WebAPI.Interfaces
{
    public interface IMedicoRepository
    {
        public List<Medico> ListarTodos();
<<<<<<< HEAD
        public Medico BuscarPorId(Guid Id);
        public Medico AtualizarPerfil(Guid Id, MedicoViewModel medico);
        public void Cadastrar(Usuario medico);
        public List<Medico> ListarPorClinica(Guid id);
<<<<<<< HEAD:WebAPI/WebAPI/Interfaces/IMedicoRepository.cs
        public List<Consulta> BuscarPorData(DateTime dataConsulta, Guid idMedico);
=======
=======

        public Medico BuscarPorId(Guid Id);

        public Medico AtualizarPerfil(Guid Id, MedicoViewModel medico);

        public void Cadastrar(Usuario medico);
>>>>>>> gustavo
>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978:API-VitalHub/WebAPI/WebAPI/Interfaces/IMedicoRepository.cs
    }
}
