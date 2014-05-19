using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVC_WITH_NG.ViewModels
{
    public class EmailListingViewModel
    {
        public int ID { get; set; }
        public string from { get; set; }
        public string to { get; set; }
        public string subject { get; set; }
        public string body { get; set; }
    }
}