using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using my_app_api.Models;

namespace my_app_api.Controllers
{
    [Route("api/[controller]/[action]")]
    public class TodosController : Controller
    {
        private const string TodosKey = "Todos";
        private readonly IMemoryCache _memoryCache;

        public TodosController(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return BadRequest();
            // return _memoryCache.GetOrCreate(TodosKey, _ => new List<Todo>());
        }

        [HttpPost]
        public Todo Create([FromBody] TodoCreateRequest request)
        {
            var store = _memoryCache.GetOrCreate(TodosKey, _ => new List<Todo>());

            var todo = new Todo
            {
                Id = Guid.NewGuid(),
                Name = request.Name
            };

            store.Add(todo);

            return todo;
        }
    }
}