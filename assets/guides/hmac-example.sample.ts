export const hmacExample = {
  java: `
package com.coupang.openapi.returns;

import com.coupang.openapi.sdk.Hmac;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import java.io.IOException;

public class HmacReturnbyday {

    private static final String HOST = "api-gateway.coupang.com";
    private static final int PORT = 443;
    private static final String SCHEMA = "https";
    //replace with your own accessKey
    private static final String ACCESS_KEY = "****";
    //replace with your own secretKey
    private static final String SECRET_KEY = "****";

    public void test() {
        //params
        String method = "GET";
        String path = "/v2/providers/wing_api/apis/internal-api/samples/v1/return/time-frame";
        
        CloseableHttpClient client = null;
        try {
            //create client
            client = HttpClients.createDefault();
            //build uri
            URIBuilder uriBuilder = new URIBuilder()
                    .setPath(path)
                    .addParameter("createdAtFrom", "2017-11-01T10:54")
                    .addParameter("createdAtTo", "2017-11-30T10:59")
                    .addParameter("status", "UC");

            /********************************************************/
            //authorize, demonstrate how to generate hmac signature here
            String authorization = Hmac.generate(method, uriBuilder.build().toString(), SECRET_KEY, ACCESS_KEY);
            //print out the hmac key
            System.out.println(authorization);
            /********************************************************/

            uriBuilder.setScheme(SCHEMA).setHost(HOST).setPort(PORT);
            HttpGet get = new HttpGet(uriBuilder.build().toString());
            /********************************************************/
            // set header, demonstarte how to use hmac signature here
            get.addHeader("Authorization", authorization);
            /********************************************************/
            get.addHeader("content-type", "application/json");
            CloseableHttpResponse response = null;
            try {
                //execute get request
                response = client.execute(get);
                //print result
                System.out.println("status code:" + response.getStatusLine().getStatusCode());
                System.out.println("status message:" + response.getStatusLine().getReasonPhrase());
                HttpEntity entity = response.getEntity();
                System.out.println("result:" + EntityUtils.toString(entity));
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                if (response != null) {
                    try {
                        response.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (client != null) {
                try {
                    client.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    public static void main(String[] args) {
        HmacReturnbyday hmacTest = new HmacReturnbyday();
        hmacTest.test();
    }
}
`,
  php: `
<?php
date_default_timezone_set("GMT+0");

$datetime = date("ymd").'T'.date("His").'Z';
$method = "GET";
$path = "/v2/providers/wing_api/apis/internal-api/samples/v1/return/time-frame";
$query = "createdAtFrom=2017-11-01T10:54&createdAtTo=2017-11-30T10:59&status=UC";

$message = $datetime.$method.$path.$query;

//replace with your own accessKey
$ACCESS_KEY = "****";
//replace with your own secretKey
$SECRET_KEY = "****";

$algorithm = "HmacSHA256";

$signature = hash_hmac('sha256', $message, $secretkey);

$authorization  = "CEA algorithm=HmacSHA256, access-key=".$accesskey.", signed-date=".$datetime.", signature=".$signature;

//replace prod url when you need
$url = 'https://api-gateway.coupang.com'.$path.'?'.$query;=

$curl = curl_init();        
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type:  application/json;charset=UTF-8", "Authorization:".$authorization)); 		
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);
curl_close($curl);

echo($result);

?>
`,
  python: `
import os
import time
import hmac, hashlib
import urllib.parse
import urllib.request
import ssl

os.environ['TZ'] = 'GMT+0'

datetime=time.strftime('%y%m%d')+'T'+time.strftime('%H%M%S')+'Z'
method = "GET"
path = "/v2/providers/wing_api/apis/internal-api/samples/v1/return/time-frame"
query = urllib.parse.urlencode({"createdAtFrom": "2017-04-01T23:54", "createdAtTo": "2017-04-22T01:59", "status": "UC"})

message = datetime+method+path+query

accesskey = "0a3a0f34-7852-4ad8-9368-766290b8b1ab"
secretkey = "7ffcdf980d908fe7ca3d642868e22f99f0306bf5"

signature=hmac.new(secretkey.encode('utf-8'),message.encode('utf-8'),hashlib.sha256).hexdigest()

authorization  = "CEA algorithm=HmacSHA256, access-key="+accesskey+", signed-date="+datetime+", signature="+signature
#print(authorization)

# ************* SEND THE REQUEST *************
url = "https://api-gateway.coupang.com"+path+"?%s" % query

print('\nBEGIN REQUEST++++++++++++++++++++++++++++++++++++')
req = urllib.request.Request(url)
#print(req)

req.add_header("Content-type","application/json;charset=UTF-8")
req.add_header("Authorization",authorization)

req.get_method = lambda: method

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

print(req.get_full_url())
print(req.get_header("Content-type"))
print(req.get_header("Authorization"))
print(req.get_method())

print('\nRESPONSE++++++++++++++++++++++++++++++++++++')
#resp = urllib.request.urlopen(req)

try:
    resp = urllib.request.urlopen(req,context=ctx)
except urllib.request.HTTPError as e:
    if e.code == 404:
        print("404")
    else:
        print("NOT 404")
except urllib.request.URLError as e:
    print(e.errno)
else:
    # 200
    body = resp.read().decode(resp.headers.get_content_charset())
    print(body)
`,
  cs: `
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
                    Console.WriteLine("\r\nResponse Status Code is OK and StatusDescription is: {0}",response.StatusDescription);

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
                    Console.WriteLine("\r\nResponse Status Code is Not OK and StatusDescription is: {0}",response.StatusDescription);
                }
            }
            catch(WebException e) 
            {
                    Console.WriteLine("\r\nWebException Raised. The following error occured : {0}",e.Status); 
                }
            catch(Exception e)
            {
                Console.WriteLine("\nThe following Exception was raised : {0}",e.Message);
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
`
};
