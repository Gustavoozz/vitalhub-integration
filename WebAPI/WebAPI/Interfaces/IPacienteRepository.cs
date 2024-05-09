using WebAPI.Domains;
using WebAPI.ViewModels;

namespace WebAPI.Interfaces
{
    public interface IPacienteRepository
    {
<<<<<<< HEAD
        public void Cadastrar(Usuario paciente);
        public Paciente BuscarPorId(Guid Id);
        public Paciente AtualizarPerfil(Guid id, PacienteViewModel paciente);
        public List<Consulta> BuscarPorData(DateTime dataConsulta, Guid id);
=======
        /// <summary>
        /// Cadastra um novo paciente junto ao seu usuário
        /// </summary>
        /// <param name="paciente">Usuario com os dados do paciente na propriedade Paciente</param>
        public void Cadastrar(Usuario paciente);

        public List<Consulta> BuscarAgendadas(Guid Id);
        public List<Consulta> BuscarRealizadas(Guid Id);
        public List<Consulta> BuscarCanceladas(Guid Id);

        public Paciente BuscarPorId(Guid Id);

        public Paciente AtualizarPerfil(Guid id, PacienteViewModel paciente);
>>>>>>> gustavo
    }
}