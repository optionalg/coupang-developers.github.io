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

    private static final String HOST = "api-gateway-it-ext.coupang.com";
    private static final int PORT = 443;
    private static final String SCHEMA = "https";
    //replace with your own accessKey
    private static final String ACCESS_KEY = "****";
    //replace with your own secretKey
    private static final String SECRET_KEY = "****";
    //replace with your own vendorId
    private static final String VENDOR_ID = "****";
    

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
            get.addHeader("X-Requested-By", VENDOR_ID);
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
//replace with your own vendorId
$VENDOR_ID =  "****";
$algorithm = "HmacSHA256";

$signature = hash_hmac('sha256', $message, $secretkey);

$authorization  = "CEA algorithm=HmacSHA256, access-key=".$accesskey.", signed-date=".$datetime.", signature=".$signature;

//replace prod url when you need
$url = 'https://api-gateway-it-ext.coupang.com'.$path.'?'.$query;=

$curl = curl_init();        
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type:  application/json;charset=UTF-8", "Authorization:".$authorization)); 		
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);
curl_close($curl);

echo($result);

?>
`
};
