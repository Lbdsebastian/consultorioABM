namespace testapi.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Pacientes
    {
        [Key]
        public int IdPaciente { get; set; }

        [StringLength(50)]
        public string NombrePaciente { get; set; }

        [StringLength(50)]
        public string ApellidoPaciente { get; set; }

        [StringLength(50)]
        public string Departamento { get; set; }

        [Column(TypeName = "date")]
        public DateTime? InicioTratamiento { get; set; }
    }
}
