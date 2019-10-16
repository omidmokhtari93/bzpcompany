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
        [HttpGet("/api/GetProducts")]
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

        [HttpGet("/api/SendMail")]
        public bool SendMail(){
            return false;
            // try
            // {
            //     var mail = new MailMessage();
            //     mail.To.Add("info@bornatek.ir");
            //     mail.From = new MailAddress("borna.assistanse@gmail.com", email, System.Text.Encoding.UTF8);
            //     mail.Subject = name;
            //     mail.SubjectEncoding = System.Text.Encoding.UTF8;
            //     var userMessage = File.ReadAllText(HttpContext.Current.Server.MapPath("~/assets/Content/contactus.html"));
            //     userMessage = userMessage.Replace("#Name#", name);
            //     userMessage = userMessage.Replace("#Email#", email);
            //     userMessage = userMessage.Replace("#Phone#", phone);
            //     userMessage = userMessage.Replace("#Message#", message);
            //     mail.Body = userMessage;
            //     mail.BodyEncoding = System.Text.Encoding.UTF8;
            //     mail.IsBodyHtml = true;
            //     mail.Priority = MailPriority.High;
            //     var client = new SmtpClient
            //     {
            //         Credentials = new System.Net.NetworkCredential("borna.assistanse@gmail.com", "Omid1993"),
            //         Port = 587,
            //         Host = "smtp.gmail.com",
            //         EnableSsl = true
            //     };
            //     client.Send(mail);
            //     return true;
            // }
            // catch
            // {
            //     return false;
            // }
        }
    }
}