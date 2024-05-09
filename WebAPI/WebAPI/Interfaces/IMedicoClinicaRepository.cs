using WebAPI.Domains;

namespace WebAPI.Interfaces
{
    public interface IMedicoClinicaRepository
    {
        public MedicosClinica ListarMedicoClinica(Guid medicoId, Guid clinicaId);
    }
}
