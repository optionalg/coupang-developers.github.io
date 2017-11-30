export const csExample = {
  post: `
using System;
using System.Web;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace ns_sample_post
{
    class sample_post
    {

        private static string url = "https://api-gateway.coupang.com";
        private static string schema = "https";
        private static int port = 443;

        private string path="/targets/wing/seller_api/apis/api/v1/marketplace/seller-products";
        //replace with your own accessKey
        private static string accessKey = "****";
        //replace with your own secretKey
        private static string secretKey = "****";


        public void test(){

            string method="POST";

            //replace with your own product registration json data
            String strjson="{}";

            var uriBuilder = new UriBuilder(url+path);
            
            uriBuilder.Scheme = schema;
            uriBuilder.Port = port;
            Uri finalUrl = uriBuilder.Uri;

            try{
                
                HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(finalUrl.ToString());

                request.Timeout = 10000;
                request.Method = method;

                request.ContentType = "application/json;charset=UTF-8";
                request.Headers["Authorization"] = GetHmac(method,"");

                using (var streamWriter = new StreamWriter(request.GetRequestStream()))
                {
                    byte[] data = Encoding.UTF8.GetBytes(strjson);

                    streamWriter.Write(strjson);
                    streamWriter.Flush();
                    streamWriter.Close();
                }

                var response = (HttpWebResponse)request.GetResponse();

                // Display the status ...
                if (response.StatusCode == HttpStatusCode.OK){
                    Console.WriteLine("Response Status Code is OK and StatusDescription is: {0}",response.StatusDescription);

                    var responseStream = response.GetResponseStream();

                    Encoding encode = System.Text.Encoding.GetEncoding("utf-8");
                    // Pipes the stream to a higher level stream reader with the required encoding format. 
                    StreamReader reader = new StreamReader( responseStream, encode );    

                    string responseString = reader.ReadToEnd();

                    reader.Close();
                    responseStream.Close();
                    response.Close();

                    Console.WriteLine(String.Format("Response: {0}", responseString));
                }else{
                    Console.WriteLine("Response Status Code is Not OK and StatusDescription is: {0}",response.StatusDescription);
                }
            }
            catch(WebException e) 
            {
                    Console.WriteLine("WebException Raised. The following error occured : {0}",e.Status); 
                }
            catch(Exception e)
            {
                Console.WriteLine("The following Exception was raised : {0}",e.Message);
            }

        }

        private string GetHmac(string method,string query)
        {
            string algorithm = "HmacSHA256";
            string datetime = DateTime.Now.ToUniversalTime().ToString("yyMMddTHHmmssZ");
            string message = GenerateFormattedMessage(datetime, method, query);

            string signature = CreateTokenByHMACSHA256(message);

            return GenerateFormattedHeader(algorithm, datetime, signature);
        }

        private string GenerateFormattedMessage(string datetime, string method, string query)
        {
            return String.Format("{0}{1}{2}{3}", datetime, method, path, query);
        }

        private String GenerateFormattedHeader(string algorithm, string datetime, string signature)
        {
            return String.Format("CEA algorithm={0}, access-key={1}, signed-date={2}, signature={3}", algorithm, accessKey, datetime, signature);
        }

        private String CreateTokenByHMACSHA256(string message)
        {
            secretKey = secretKey ?? "";
            var encoding = new System.Text.ASCIIEncoding();
            byte[] keyByte = encoding.GetBytes(secretKey);
            var hmacsha256 = new HMACSHA256(keyByte);
            byte[] messageBytes = encoding.GetBytes(message);
            return ByteToString(hmacsha256.ComputeHash(messageBytes));
        }

        public string ByteToString(byte[] buff)
        {
            string sbinary = "";
            for (int i = 0; i < buff.Length; i++)
            {
                sbinary += buff[i].ToString("x2"); // hex format
            }
            return sbinary;
        }

        static void Main(string[] args)
        {
            sample_post myobj= new sample_post();
            myobj.test();
        }
    }
}
`,
  get: `
using System;
using System.Web;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

using System.Web.Script.Serialization;

namespace ns_sample_get
{
    class sample_get
    {

        private static string url = "https://api-gateway.coupang.com";
        private static string schema = "https";
        private static int port = 443;

        private string path="/v2/providers/wing_api/apis/internal-api/samples/v1/return/time-frame";
        //replace with your own accessKey
        private static string accessKey = "****";
        //replace with your own secretKey
        private static string secretKey = "****";
        
        public void test(){

            string method="GET";

            var uriBuilder = new UriBuilder(url+path);
            var parameters = HttpUtility.ParseQueryString(string.Empty);
                parameters["createdAtFrom"] = "2017-04-01T23:54";
                parameters["createdAtTo"] = "2017-04-22T01:59";
                parameters["status"] = "UC";
            uriBuilder.Query = parameters.ToString();

            string query=uriBuilder.Query.ToString().Remove(0,1);

            uriBuilder.Scheme = schema;
            uriBuilder.Port = port;
            Uri finalUrl = uriBuilder.Uri;

            try{
                HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(finalUrl.ToString());

                request.Timeout = 10000;
                request.Method = method;

                request.ContentType = "application/json;charset=UTF-8";
                request.Headers["Authorization"] = GetHmac(method,query);

                var response = (HttpWebResponse)request.GetResponse();
                // Display the status ...
                if (response.StatusCode == HttpStatusCode.OK){
                    Console.WriteLine("Response Status Code is OK and StatusDescription is: {0}",response.StatusDescription);

                    var responseStream = response.GetResponseStream();

                    Encoding encode = System.Text.Encoding.GetEncoding("utf-8");
                    // Pipes the stream to a higher level stream reader with the required encoding format. 
                    StreamReader reader = new StreamReader( responseStream, encode );    

                    string responseString = reader.ReadToEnd();

                    reader.Close();
                    responseStream.Close();
                    response.Close();

                    Console.WriteLine(responseString);
                    //Console.WriteLine(String.Format("Response: {0}", responseString));
                }else{
                    Console.WriteLine("Response Status Code is Not OK and StatusDescription is: {0}",response.StatusDescription);
                }
            }
            catch(WebException e) 
            {
                    Console.WriteLine("WebException Raised. The following error occured : {0}",e.Status); 
                }
            catch(Exception e)
            {
                Console.WriteLine("The following Exception was raised : {0}",e.Message);
            }

        }

        private string GetHmac(string method,string query)
        {
            string algorithm = "HmacSHA256";
            string datetime = DateTime.Now.ToUniversalTime().ToString("yyMMddTHHmmssZ");
            string message = GenerateFormattedMessage(datetime, method, query);
            string signature = CreateTokenByHMACSHA256(message);

            return GenerateFormattedHeader(algorithm, datetime, signature);
        }

        private string GenerateFormattedMessage(string datetime, string method, string query)
        {
            return String.Format("{0}{1}{2}{3}", datetime, method, path, query);
        }

        private String GenerateFormattedHeader(string algorithm, string datetime, string signature)
        {
            return String.Format("CEA algorithm={0}, access-key={1}, signed-date={2}, signature={3}", algorithm, accessKey, datetime, signature);
        }

        private String CreateTokenByHMACSHA256(string message)
        {
            secretKey = secretKey ?? "";
            var encoding = new System.Text.ASCIIEncoding();
            byte[] keyByte = encoding.GetBytes(secretKey);
            var hmacsha256 = new HMACSHA256(keyByte);
            byte[] messageBytes = encoding.GetBytes(message);
            return ByteToString(hmacsha256.ComputeHash(messageBytes));
        }

        public string ByteToString(byte[] buff)
        {
            string sbinary = "";
            for (int i = 0; i < buff.Length; i++)
            {
                sbinary += buff[i].ToString("x2"); // hex format
            }
            return sbinary;
        }

        static void Main(string[] args)
        {
            sample_get myobj= new sample_get();
            myobj.test();
        }
    }
}
`,
  put: `
using System;
using System.Web;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace ns_sample_put
{
    class sample_put
    {

        private static string url = "https://api-gateway.coupang.com";
        private static string schema = "https";
        private static int port = 443;

        private string path="/targets/wing/seller_api/apis/api/v1/marketplace/seller-products";
        //replace with your own accessKey
        private static string accessKey = "****";
        //replace with your own secretKey
        private static string secretKey = "****";

        public void test(){

            string method="PUT";

            //replace with your own product update json data
            String strjson="{}";

            var uriBuilder = new UriBuilder(url+path);
            
            uriBuilder.Scheme = schema;
            uriBuilder.Port = port;
            Uri finalUrl = uriBuilder.Uri;

            try{
                
                HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(finalUrl.ToString());

                request.Timeout = 10000;
                request.Method = method;

                request.ContentType = "application/json;charset=UTF-8";
                request.Headers["Authorization"] = GetHmac(method,"");

                using (var streamWriter = new StreamWriter(request.GetRequestStream()))
                {
                    byte[] data = Encoding.UTF8.GetBytes(strjson);

                    streamWriter.Write(strjson);
                    streamWriter.Flush();
                    streamWriter.Close();
                }

                var response = (HttpWebResponse)request.GetResponse();

                // Display the status ...
                if (response.StatusCode == HttpStatusCode.OK){
                    Console.WriteLine("Response Status Code is OK and StatusDescription is: {0}",response.StatusDescription);

                    var responseStream = response.GetResponseStream();

                    Encoding encode = System.Text.Encoding.GetEncoding("utf-8");
                    // Pipes the stream to a higher level stream reader with the required encoding format. 
                    StreamReader reader = new StreamReader( responseStream, encode );    

                    string responseString = reader.ReadToEnd();

                    reader.Close();
                    responseStream.Close();
                    response.Close();

                    Console.WriteLine(String.Format("Response: {0}", responseString));
                }else{
                    Console.WriteLine("Response Status Code is Not OK and StatusDescription is: {0}",response.StatusDescription);
                }
            }
            catch(WebException e) 
            {
                    Console.WriteLine("WebException Raised. The following error occured : {0}",e.Status); 
                }
            catch(Exception e)
            {
                Console.WriteLine("The following Exception was raised : {0}",e.Message);
            }

        }

        private string GetHmac(string method,string query)
        {
            string algorithm = "HmacSHA256";
            string datetime = DateTime.Now.ToUniversalTime().ToString("yyMMddTHHmmssZ");
            string message = GenerateFormattedMessage(datetime, method, query);

            string signature = CreateTokenByHMACSHA256(message);

            return GenerateFormattedHeader(algorithm, datetime, signature);
        }

        private string GenerateFormattedMessage(string datetime, string method, string query)
        {
            return String.Format("{0}{1}{2}{3}", datetime, method, path, query);
        }

        private String GenerateFormattedHeader(string algorithm, string datetime, string signature)
        {
            return String.Format("CEA algorithm={0}, access-key={1}, signed-date={2}, signature={3}", algorithm, accessKey, datetime, signature);
        }

        private String CreateTokenByHMACSHA256(string message)
        {
            secretKey = secretKey ?? "";
            var encoding = new System.Text.ASCIIEncoding();
            byte[] keyByte = encoding.GetBytes(secretKey);
            var hmacsha256 = new HMACSHA256(keyByte);
            byte[] messageBytes = encoding.GetBytes(message);
            return ByteToString(hmacsha256.ComputeHash(messageBytes));
        }

        public string ByteToString(byte[] buff)
        {
            string sbinary = "";
            for (int i = 0; i < buff.Length; i++)
            {
                sbinary += buff[i].ToString("x2"); // hex format
            }
            return sbinary;
        }

        static void Main(string[] args)
        {
            sample_put myobj= new sample_put();
            myobj.test();
        }
    }
}
`,
  patch: ``,
  delete: `
using System;
using System.Web;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace ns_sample_delete
{
    class sample_delete
    {

        private static string url = "https://api-gateway.coupang.com";
        private static string schema = "https";
        private static int port = 443;

        private string path="/targets/wing/seller_api/apis/api/v1/marketplace/seller-products/48773047";
        //replace with your own accessKey
        private static string accessKey = "****";
        //replace with your own secretKey
        private static string secretKey = "****";

        public void test(){

            string method="DELETE";

            var uriBuilder = new UriBuilder(url+path);
            
            uriBuilder.Scheme = schema;
            uriBuilder.Port = port;
            Uri finalUrl = uriBuilder.Uri;

            try{
                
                HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(finalUrl.ToString());

                request.Timeout = 10000;
                request.Method = method;

                request.ContentType = "application/json;charset=UTF-8";
                request.Headers["Authorization"] = GetHmac(method,"");

                var response = (HttpWebResponse)request.GetResponse();

                // Display the status ...
                if (response.StatusCode == HttpStatusCode.OK){
                    Console.WriteLine("Response Status Code is OK and StatusDescription is: {0}",response.StatusDescription);

                    var responseStream = response.GetResponseStream();

                    Encoding encode = System.Text.Encoding.GetEncoding("utf-8");
                    // Pipes the stream to a higher level stream reader with the required encoding format. 
                    StreamReader reader = new StreamReader( responseStream, encode );    

                    string responseString = reader.ReadToEnd();

                    reader.Close();
                    responseStream.Close();
                    response.Close();

                    Console.WriteLine(String.Format("Response: {0}", responseString));
                }else{
                    Console.WriteLine("Response Status Code is Not OK and StatusDescription is: {0}",response.StatusDescription);
                }
            }
            catch(WebException e) 
            {
                    Console.WriteLine("WebException Raised. The following error occured : {0}",e.Status); 
                }
            catch(Exception e)
            {
                Console.WriteLine("The following Exception was raised : {0}",e.Message);
            }

        }

        private string GetHmac(string method,string query)
        {
            string algorithm = "HmacSHA256";
            string datetime = DateTime.Now.ToUniversalTime().ToString("yyMMddTHHmmssZ");
            string message = GenerateFormattedMessage(datetime, method, query);

            string signature = CreateTokenByHMACSHA256(message);

            return GenerateFormattedHeader(algorithm, datetime, signature);
        }

        private string GenerateFormattedMessage(string datetime, string method, string query)
        {
            return String.Format("{0}{1}{2}{3}", datetime, method, path, query);
        }

        private String GenerateFormattedHeader(string algorithm, string datetime, string signature)
        {
            return String.Format("CEA algorithm={0}, access-key={1}, signed-date={2}, signature={3}", algorithm, accessKey, datetime, signature);
        }

        private String CreateTokenByHMACSHA256(string message)
        {
            secretKey = secretKey ?? "";
            var encoding = new System.Text.ASCIIEncoding();
            byte[] keyByte = encoding.GetBytes(secretKey);
            var hmacsha256 = new HMACSHA256(keyByte);
            byte[] messageBytes = encoding.GetBytes(message);
            return ByteToString(hmacsha256.ComputeHash(messageBytes));
        }

        public string ByteToString(byte[] buff)
        {
            string sbinary = "";
            for (int i = 0; i < buff.Length; i++)
            {
                sbinary += buff[i].ToString("x2"); // hex format
            }
            return sbinary;
        }

        static void Main(string[] args)
        {
            sample_delete myobj= new sample_delete();
            myobj.test();
        }
    }
}
`
};
