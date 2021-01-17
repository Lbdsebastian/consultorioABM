using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace testapi.Models
{
    public partial class Model1 : DbContext
    {
        public Model1()
            : base("name=CodeFirstModel")
        {
        }

        public virtual DbSet<Departamentos> Departamentos { get; set; }
        public virtual DbSet<Pacientes> Pacientes { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Departamentos>()
                .Property(e => e.NombreDepartamento)
                .IsUnicode(false);

            modelBuilder.Entity<Pacientes>()
                .Property(e => e.NombrePaciente)
                .IsUnicode(false);

            modelBuilder.Entity<Pacientes>()
                .Property(e => e.ApellidoPaciente)
                .IsUnicode(false);

            modelBuilder.Entity<Pacientes>()
                .Property(e => e.Departamento)
                .IsUnicode(false);
        }
    }
}
