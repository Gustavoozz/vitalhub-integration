using System;
using System.Collections.Generic;

namespace WebAPI.Domains;

public partial class Clinica
{
    public Guid Id { get; set; } = Guid.NewGuid();

    public string? NomeFantasia { get; set; }

    public string? Cnpj { get; set; }

    public string? RazaoSocial { get; set; }

<<<<<<< HEAD
    public string? Email { get; set; }

    public Guid? EnderecoId { get; set; }

    public virtual Endereco? Endereco { get; set; }

=======
    public decimal? Latitude { get; set; }

    public decimal? Longitude { get; set; }

    public string? Email { get; set; }

>>>>>>> gustavo
    public virtual ICollection<MedicosClinica> MedicosClinicas { get; set; } = new List<MedicosClinica>();
}
