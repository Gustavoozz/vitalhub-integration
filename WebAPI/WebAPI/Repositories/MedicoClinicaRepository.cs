using Microsoft.EntityFrameworkCore;
using WebAPI.Contexts;
using WebAPI.Domains;
using WebAPI.Interfaces;

namespace WebAPI.Repositories
{
    public class MedicoClinicaRepository : IMedicoClinicaRepository
    {
        public VitalContext ctx = new VitalContext();

        public MedicosClinica ListarMedicoClinica(Guid medicoId, Guid clinicaId)
        {
            return ctx.MedicosClinicas
                .Include(mC => mC.Clinica!.Endereco)
                .Include(mC => mC.Medico!.IdNavigation)
                .Include (mC => mC.Medico!.Especialidade)
                .FirstOrDefault(mC => mC.Medico!.IdNavigation.Id == medicoId && mC.Clinica!.Id == clinicaId)!;
        }
    }
}
