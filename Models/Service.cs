﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ArabicProject.Models
{
    public class Service
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }

    }
}
