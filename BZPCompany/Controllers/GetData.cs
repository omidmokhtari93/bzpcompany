using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BZPCompany.Controllers
{
    [Route("api/[controller]")]
    public class GetData : Controller
    {
        private readonly SqlConnection con = new SqlConnection(connectionString: "Data Source=.;Initial Catalog=BZPCompany;Integrated Security=True");
        [HttpGet("/api/GetPosts")]
        public JsonResult GetPosts()
        {
            con.Open();
            var list = new List<object>();
            var cmd = new SqlCommand("select * from Posts", con);
            var rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                list.Add(new
                {
                    Id = rd["Id"],
                    Title = rd["Title"],
                    Text = rd["Body"],
                    ImagePath = rd["ImagePath"]
                });
            }
            con.Close();
            return new JsonResult(list);
        }

        [HttpGet("/api/GetCarouselItems")]
        public JsonResult GetItems()
        {
            con.Open();
            var list = new List<object>();
            var cmd = new SqlCommand("select * from Carousel", con);
            var rd = cmd.ExecuteReader();
            while (rd.Read())
            {
                list.Add(new
                {
                    Id = rd["Id"],
                    Title = rd["Title"],
                    Text = rd["Body"],
                    ImagePath = rd["ImagePath"]
                });
            }
            con.Close();
            return new JsonResult(list);
        }

        [HttpGet("/api/GetProduct")]
        public JsonResult GetProduct(int id)
        {
            con.Open();
            var product = new object();
            var cmd = new SqlCommand("select * from Posts where Id = " + id + "", con);
            var rd = cmd.ExecuteReader();
            if (rd.Read())
            {
                product = new
                {
                    Id = rd["Id"],
                    Title = rd["Title"],
                    Text = rd["Body"],
                    ImagePath = rd["ImagePath"]
                };
            }
            con.Close();
            return new JsonResult(product);
        }
    }
}