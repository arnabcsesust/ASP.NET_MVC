using MVC_WITH_NG.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_WITH_NG.Controllers
{
    public class ApiController : Controller
    {
        //
        // GET: /Api/
        public ActionResult getEmails()
        {
            List<EmailListingViewModel> EmailList = new List<EmailListingViewModel>();
            EmailList.Add(new EmailListingViewModel { ID = 1, from = "rabbi@gmail.com", to = "arnab.sust@gmail.com", subject = "Good Job", body = "Congrats on new Job in google" });
            EmailList.Add(new EmailListingViewModel { ID = 1, from = "rabbi@gmail.com", to = "arnab.sust@gmail.com", subject = "Good Job", body = "Congrats on new Job in google" });
            return Json(EmailList, JsonRequestBehavior.AllowGet);
        }
	}
}