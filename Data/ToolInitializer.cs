using ArabicProject.Models;
using System;
using System.Linq;

namespace SmukToolsApp.Data
{
    public class ToolInitializer
    {
        public static void Initialize(ToolContext context)
        {
            context.Database.EnsureCreated();

            if (!context.Services.Any())
            {
                var Services = new Service[]
                {
                    new Service{Name="KBL"},
                    new Service{Name="GBL",}
                };
                foreach (var item in Services)
                {
                    context.Services.Add(item);
                }
                context.SaveChanges();
            }




        }
    }
}
