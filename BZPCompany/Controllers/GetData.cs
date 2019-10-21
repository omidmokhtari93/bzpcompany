using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BZPCompany.Controllers
{
    [Route("api/[controller]")]
    public class GetData : Controller
    {
        private readonly SqlConnection con = new SqlConnection(connectionString: "Server=.;Database=bornatek_bzp;User ID=bornatek_ir;Password=Omid1993");
        //private readonly SqlConnection con = new SqlConnection(connectionString: "Data Source=.;Initial Catalog=BZPCompany;Integrated Security=True");
        [HttpGet("/api/GetProductsOrServices")]
        public JsonResult GetPosts(int product)
        {
            con.Open();
            var list = new List<object>();
            var cmd = new SqlCommand("select * from Posts " + (product == -1 ? null : "where Product =" + product), con);
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

        [HttpGet("/api/GetProductOrService")]
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

        [HttpPost("/api/SendMail")]
        public bool SendMail([FromBody]Contact contact)
        {
            try
            {
                var mail = new MailMessage();
                mail.To.Add("info@bzpcompany.eu");
                mail.From = new MailAddress(contact.Email, contact.Name, System.Text.Encoding.UTF8);
                mail.Subject = contact.Name;
                mail.SubjectEncoding = System.Text.Encoding.UTF8;
                mail.Body = contact.Name + "<hr/> " + contact.Phone + "<hr/>" + contact.Message;
                mail.BodyEncoding = System.Text.Encoding.UTF8;
                mail.IsBodyHtml = true;
                mail.Priority = MailPriority.High;
                var client = new SmtpClient
                {
                    Credentials = new System.Net.NetworkCredential("bzpcompany.contactus@gmail.com", "Bzp@2019"),
                    Port = 587,
                    Host = "smtp.gmail.com",
                    EnableSsl = true
                };
                client.Send(mail);
                return true;
            }
            catch
            {
                return false;
            }
        }
    }

    public class Contact
    {
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
    }
}