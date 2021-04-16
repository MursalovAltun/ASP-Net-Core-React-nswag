using System;

namespace my_app_api.Models
{
    public class Todo
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool Completed { get; set; }
    }
}