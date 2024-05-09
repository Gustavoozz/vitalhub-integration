using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebAPI.ViewModels
{
    public class MedicoViewModel
    {
        public string? Nome { get; set; }

        public string? Email { get; set; }

<<<<<<< HEAD:WebAPI/WebAPI/ViewModels/MedicoViewModel.cs
=======
<<<<<<< HEAD
        public DateTime DataNascimento { get; set; }

=======
>>>>>>> gustavo
>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978:API-VitalHub/WebAPI/WebAPI/ViewModels/MedicoViewModel.cs
        public string? Senha { get; set; }

        public string? Foto { get; set; }

<<<<<<< HEAD:WebAPI/WebAPI/ViewModels/MedicoViewModel.cs
        [NotMapped]
        [JsonIgnore]
        public IFormFile? Arquivo { get; set; }

=======
<<<<<<< HEAD
>>>>>>> 2015219969a40b6e3ba1e09b53e66329dfec0978:API-VitalHub/WebAPI/WebAPI/ViewModels/MedicoViewModel.cs
        public string? Cep { get; set; }

        public string? Logradouro { get; set; }

        public int? Numero { get; set; }

        public string? Cidade { get; set; }
=======
        public Guid IdTipoUsuario { get; set; }
>>>>>>> gustavo

        public Guid? EspecialidadeId { get; set; }

        public string? Crm { get; set; }
<<<<<<< HEAD

        public Guid? IdTipoUsuario { get; set; }
    }
}
=======
    }
}
>>>>>>> gustavo
