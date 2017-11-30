export const javaExample = {
  post: `
package sellerProvide_com.coupang.openapi.product.copy;

import com.coupang.openapi.sdk.Hmac;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
//import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import java.io.IOException;

public class HmacProductCreation {
	
	//replace prod url when you need
    private static final String HOST = "api-gateway-it-ext.coupang.com";
    private static final int PORT = 443;
    private static final String SCHEMA = "https";
    //replace with your own accessKey
    private static final String ACCESS_KEY = "****";
    //replace with your own secretKey
    private static final String SECRET_KEY = "****";

    public void test() {
        //params
        String method = "POST";
        String path = "/targets/wing/seller_api/apis/api/v1/marketplace/seller-products";
        
        //replace with your own product registration json data
        String strjson="{}";
        
        CloseableHttpClient client = null;
        try {
            //create client
            client = HttpClients.createDefault();
            //build uri
            URIBuilder uriBuilder = new URIBuilder()
                    .setPath(path);

            /********************************************************/
            //authorize, demonstrate how to generate hmac signature here
            String authorization = Hmac.generate(method, uriBuilder.build().toString(), SECRET_KEY, ACCESS_KEY);
            //print out the hmac key
            System.out.println(authorization);
            /********************************************************/

            uriBuilder.setScheme(SCHEMA).setHost(HOST).setPort(PORT);
            HttpPost requestPost = new HttpPost(uriBuilder.build().toString());

            StringEntity params =new StringEntity(strjson,"UTF-8");
            
            /********************************************************/
            // set header, demonstarte how to use hmac signature here
            requestPost.addHeader("Authorization", authorization);
            /********************************************************/
            requestPost.addHeader("content-type", "application/json");
            requestPost.setEntity(params);
            CloseableHttpResponse response = null;
            try {
                //execute post request
                response = client.execute(requestPost);
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
        HmacProductCreation hmacTest = new HmacProductCreation();
        hmacTest.test();
    }
}
`,
  get: `
package sellerProvide_com.coupang.openapi.product.copy;

import com.coupang.openapi.sdk.Hmac;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import java.io.IOException;

public class HmacProductCategorymeta {
	
	//replace prod url when you need
    private static final String HOST = "api-gateway-it-ext.coupang.com";
    private static final int PORT = 443;
    private static final String SCHEMA = "https";
    //replace with your own accessKey
    private static final String ACCESS_KEY = "****";
    //replace with your own secretKey
    private static final String SECRET_KEY = "****";

    public void test() {
        //params
        String method = "GET";
        String path = "/targets/wing/seller_api/apis/api/v1/marketplace/meta/category-related-metas/display-category-codes/77723";

        CloseableHttpClient client = null;
        try {
            //create client
            client = HttpClients.createDefault();
            //build uri
            URIBuilder uriBuilder = new URIBuilder()
                    .setPath(path);

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
        HmacProductCategorymeta hmacTest = new HmacProductCategorymeta();
        hmacTest.test();
    }
}
`,
  put: `
package sellerProvide_com.coupang.openapi.product.copy;

import com.coupang.openapi.sdk.Hmac;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
//import org.apache.http.client.methods.HttpGet;
//import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import java.io.IOException;

public class HmacProductUpdate {	
	
	//replace prod url when you need
    private static final String HOST = "api-gateway-it-ext.coupang.com";
    private static final int PORT = 443;
    private static final String SCHEMA = "https";
    //replace with your own accessKey
    private static final String ACCESS_KEY = "****";
    //replace with your own secretKey
    private static final String SECRET_KEY = "****";

    public void test() {
        //params
        String method = "PUT";
        String path = "/targets/wing/seller_api/apis/api/v1/marketplace/seller-products";
        
        //replace with your own product registration json data
        String strjson="{}";
        
        CloseableHttpClient client = null;
        try {
            //create client
            client = HttpClients.createDefault();
            //build uri
            URIBuilder uriBuilder = new URIBuilder()
                    .setPath(path);

            /********************************************************/
            //authorize, demonstrate how to generate hmac signature here
            String authorization = Hmac.generate(method, uriBuilder.build().toString(), SECRET_KEY, ACCESS_KEY);
            //print out the hmac key
            System.out.println(authorization);
            /********************************************************/

            uriBuilder.setScheme(SCHEMA).setHost(HOST).setPort(PORT);
            HttpPut requestPut = new HttpPut(uriBuilder.build().toString());

            StringEntity params =new StringEntity(strjson,"UTF-8");
            
            /********************************************************/
            // set header, demonstarte how to use hmac signature here
            requestPut.addHeader("Authorization", authorization);
            /********************************************************/
            requestPut.addHeader("content-type", "application/json");
            requestPut.setEntity(params);
            CloseableHttpResponse response = null;
            try {
                //execute post request
                response = client.execute(requestPut);
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
        HmacProductUpdate hmacTest = new HmacProductUpdate();
        hmacTest.test();
    }
}
`,
  patch: ``,
  delete: `
package sellerProvide_com.coupang.openapi.product.copy;

import com.coupang.openapi.sdk.Hmac;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import java.io.IOException;

public class HmacProductDelete {
	
	//replace prod url when you need
    private static final String HOST = "api-gateway-it-ext.coupang.com";
    private static final int PORT = 443;
    private static final String SCHEMA = "https";
    //replace with your own accessKey
    private static final String ACCESS_KEY = "****";
    //replace with your own secretKey
    private static final String SECRET_KEY = "****";

    public void test() {
        //params
        String method = "DELETE";
        String path = "/targets/wing/seller_api/apis/api/v1/marketplace/seller-products/2404";
        
        CloseableHttpClient client = null;
        try {
            //create client
            client = HttpClients.createDefault();
            //build uri
            URIBuilder uriBuilder = new URIBuilder()
                    .setPath(path);

            /********************************************************/
            //authorize, demonstrate how to generate hmac signature here
            String authorization = Hmac.generate(method, uriBuilder.build().toString(), SECRET_KEY, ACCESS_KEY);
            //print out the hmac key
            System.out.println(authorization);
            /********************************************************/

            uriBuilder.setScheme(SCHEMA).setHost(HOST).setPort(PORT);
            //HttpPost requestPost = new HttpPost(uriBuilder.build().toString());
            HttpDelete requestDelete = new HttpDelete(uriBuilder.build().toString());

            //StringEntity params =new StringEntity(strjson,"UTF-8");
            
            /********************************************************/
            // set header, demonstarte how to use hmac signature here
            requestDelete.addHeader("Authorization", authorization);
            /********************************************************/
            requestDelete.addHeader("content-type", "application/json");
            //requestPut.setEntity(params);
            CloseableHttpResponse response = null;
            try {
                //execute post request
                response = client.execute(requestDelete);
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
        HmacProductDelete hmacTest = new HmacProductDelete();
        hmacTest.test();
    }
}
`
};
