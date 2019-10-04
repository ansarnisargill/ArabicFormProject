using ArabicProject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmukToolsApp.Data
{
    public class ToolContext : DbContext
    {
        public ToolContext(DbContextOptions<ToolContext> options)
            : base(options)
        {
        }

        public DbSet<Service> Services { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Service>().ToTable("Services");
        }
        
    }
}
