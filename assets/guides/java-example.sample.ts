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
    //replace with your own vendorId
    private static final String VENDOR_ID = "****";
    

    public void test() {
        //params
        String method = "POST";
        String path = "/targets/wing/seller_api/apis/api/v1/marketplace/seller-products";
        
        String strjson="";
        strjson=strjson+"{"+ "\r\n";
        strjson=strjson+"    \"displayCategoryCode\": 3013,"+ "\r\n";
        strjson=strjson+"    \"sellerProductName\": \"테스트 상품 등록_Kay_Java\","+ "\r\n";
        strjson=strjson+"    \"vendorId\": \"A00100542\","+ "\r\n";
        strjson=strjson+"    \"saleStartedAt\": \"2016-10-12T00:00:00\","+ "\r\n";
        strjson=strjson+"    \"saleEndedAt\": \"2099-01-01T23:59:59\","+ "\r\n";
        strjson=strjson+"    \"brand\": \"Stchodo\","+ "\r\n";
        strjson=strjson+"    \"deliveryMethod\": \"SEQUENCIAL\","+ "\r\n";
        strjson=strjson+"    \"deliveryCompanyCode\": \"HYUNDAI\","+ "\r\n";
        strjson=strjson+"    \"deliveryChargeType\": \"FREE_DELIVERY_OVER_9800\","+ "\r\n";
        strjson=strjson+"    \"deliveryCharge\": \"2500\","+ "\r\n";
        strjson=strjson+"    \"freeShipOverAmount\": \"9800\","+ "\r\n";
        strjson=strjson+"    \"deliveryChargeOnReturn\": \"0\","+ "\r\n";
        strjson=strjson+"    \"remoteAreaDeliverable\": \"N\","+ "\r\n";
        strjson=strjson+"    \"unionDeliveryType\": \"UNION_DELIVERY\","+ "\r\n";
        strjson=strjson+"    \"returnCenterCode\": \"1000005036\","+ "\r\n";
        strjson=strjson+"    \"returnChargeName\": \"대표이름4\","+ "\r\n";
        strjson=strjson+"    \"companyContactNumber\": \"02-1234-5678\","+ "\r\n";
        strjson=strjson+"    \"returnZipCode\": \"135-090\","+ "\r\n";
        strjson=strjson+"    \"returnAddress\": \"서울특별시 강남구 삼성동\","+ "\r\n";
        strjson=strjson+"    \"returnAddressDetail\": \"333\","+ "\r\n";
        strjson=strjson+"    \"returnCharge\": 2500,"+ "\r\n";
        strjson=strjson+"    \"returnChargeVendor\": \"N\","+ "\r\n";
        strjson=strjson+"    \"afterServiceInformation\": \"A/S안내 1544-1255\","+ "\r\n";
        strjson=strjson+"    \"afterServiceContactNumber\": \"1544-1255\","+ "\r\n";
        strjson=strjson+"    \"outboundShippingPlaceCode\": \"43502\","+ "\r\n";
        strjson=strjson+"    \"vendorUserId\": \"3pmtest01\","+ "\r\n";
        strjson=strjson+"    \"requested\": false,"+ "\r\n";
        strjson=strjson+"    \"items\": ["+ "\r\n";
        strjson=strjson+"    	{"+ "\r\n";
        strjson=strjson+"    		\"itemName\": \"[Stchodo] 스쳐도 민트코코 빅에디션 버핑 44\","+ "\r\n";
        strjson=strjson+"    		\"originalPrice\": 13000,"+ "\r\n";
        strjson=strjson+"    		\"salePrice\": 10000,"+ "\r\n";
        strjson=strjson+"    		\"maximumBuyCount\": \"9999\","+ "\r\n";
        strjson=strjson+"    		\"maximumBuyForPerson\": \"0\","+ "\r\n";
        strjson=strjson+"    		\"outboundShippingTimeDay\": \"2\","+ "\r\n";
        strjson=strjson+"    		\"maximumBuyForPersonPeriod\": \"1\","+ "\r\n";
        strjson=strjson+"    		\"unitCount\": 1,"+ "\r\n";
        strjson=strjson+"    		\"freePriceType\": \"NO_FREE_PRICE\","+ "\r\n";
        strjson=strjson+"    		\"adultOnly\": \"EVERYONE\","+ "\r\n";
        strjson=strjson+"    		\"taxType\": \"TAX\","+ "\r\n";
        strjson=strjson+"    		\"parallelImported\": \"NOT_PARALLEL_IMPORTED\","+ "\r\n";
        strjson=strjson+"    		\"overseasPurchased\": \"NOT_OVERSEAS_PURCHASED\","+ "\r\n";
        strjson=strjson+"    		\"externalVendorSku\": \"90726\","+ "\r\n";
        strjson=strjson+"    		\"barcode\": \"\","+ "\r\n";
        strjson=strjson+"    		\"emptyBarcode\": false,"+ "\r\n";
        strjson=strjson+"    		\"emptyBarcodeReason\": null,"+ "\r\n";
        strjson=strjson+"    		\"modelNo\": \"\","+ "\r\n";
        strjson=strjson+"    		\"extraProperties\": null,"+ "\r\n";
        strjson=strjson+"    		\"certifications\": [],"+ "\r\n";
        strjson=strjson+"    		\"searchTags\": null,"+ "\r\n";
        strjson=strjson+"    		\"images\": [{"+ "\r\n";
        strjson=strjson+"    			\"imageOrder\": 0,"+ "\r\n";
        strjson=strjson+"    			\"imageType\": \"REPRESENTATION\","+ "\r\n";
        strjson=strjson+"    			\"cdnPath\": \"vendor_inventory/images/2015/06/25/6649eb03-ac87-4138-90b2-a1d5aca2ea39.jpg\","+ "\r\n";
        strjson=strjson+"    			\"vendorPath\": \"http://www.babomall.com/bbsemarket/shop/goods_bak/77900.jpg\"}],"+ "\r\n";
        strjson=strjson+"    		\"notices\": [{"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"제품 소재\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"색상\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"치수\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"제조자(수입자)\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"제조국\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n"; 
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"세탁방법 및 취급시 주의사항\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";        
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"제조연월\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"품질보증기준\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n"; 
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"A/S 책임자와 전화번호\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}],"+ "\r\n";
        strjson=strjson+"    		\"attributes\": [{"+ "\r\n";
        strjson=strjson+"    			\"attributeTypeName\": \"선택형_속성\","+ "\r\n";
        strjson=strjson+"    			\"attributeValueName\": \"GREY\"},"+ "\r\n";
    	strjson=strjson+"			{"+ "\r\n";
    	strjson=strjson+"    			\"attributeTypeName\": \"사이즈\","+ "\r\n";
    	strjson=strjson+"    			\"attributeValueName\": \"44\"}],"+ "\r\n";
    	strjson=strjson+"    		\"contents\": [{"+ "\r\n";
    	strjson=strjson+"    			\"contentsType\": \"TEXT\","+ "\r\n";
    	strjson=strjson+"    			\"contentDetails\": [{"+ "\r\n";
    	strjson=strjson+"    				\"content\": \"<html><div><\\/div><div><img src='http:\\/\\/www.babomall.com\\/bbsemarket\\/gimage\\/7005345_2014_04_09_10_02_25_111.jpg' \\/><div><\\/html>\","+ "\r\n";
    	strjson=strjson+"    				\"detailType\": \"TEXT\"}]}]},"+ "\r\n";
        strjson=strjson+"    	{"+ "\r\n"; 
    	strjson=strjson+"    		\"itemName\": \"[Stchodo] 스쳐도 민트코코 빅에디션 버핑 55\","+ "\r\n";
    	strjson=strjson+"    		\"originalPrice\": 13000,"+ "\r\n";
    	strjson=strjson+"    		\"salePrice\": 10000,"+ "\r\n";
    	strjson=strjson+"    		\"maximumBuyCount\": \"9999\","+ "\r\n";
    	strjson=strjson+"    		\"maximumBuyForPerson\": \"0\","+ "\r\n";
    	strjson=strjson+"    		\"outboundShippingTimeDay\": \"2\","+ "\r\n";
    	strjson=strjson+"    		\"maximumBuyForPersonPeriod\": \"1\","+ "\r\n";
    	strjson=strjson+"    		\"unitCount\": 1,"+ "\r\n";
    	strjson=strjson+"    		\"freePriceType\": \"NO_FREE_PRICE\","+ "\r\n";
    	strjson=strjson+"    		\"adultOnly\": \"EVERYONE\","+ "\r\n";
    	strjson=strjson+"    		\"taxType\": \"TAX\","+ "\r\n";
    	strjson=strjson+"    		\"parallelImported\": \"NOT_PARALLEL_IMPORTED\","+ "\r\n";
    	strjson=strjson+"    		\"overseasPurchased\": \"NOT_OVERSEAS_PURCHASED\","+ "\r\n";
    	strjson=strjson+"    		\"externalVendorSku\": \"90726\","+ "\r\n";
    	strjson=strjson+"    		\"barcode\": \"\","+ "\r\n";
    	strjson=strjson+"    		\"emptyBarcode\": false,"+ "\r\n";
    	strjson=strjson+"    		\"emptyBarcodeReason\": null,"+ "\r\n";
    	strjson=strjson+"    		\"modelNo\": \"\","+ "\r\n";
    	strjson=strjson+"    		\"extraProperties\": null,"+ "\r\n";
    	strjson=strjson+"    		\"certifications\": [],"+ "\r\n";
    	strjson=strjson+"    		\"searchTags\": null,"+ "\r\n";
    	strjson=strjson+"    		\"images\": [{"+ "\r\n";
        strjson=strjson+"    			\"imageOrder\": 0,"+ "\r\n";
        strjson=strjson+"    			\"imageType\": \"REPRESENTATION\","+ "\r\n";
        strjson=strjson+"    			\"cdnPath\": \"vendor_inventory/images/2015/06/25/6649eb03-ac87-4138-90b2-a1d5aca2ea39.jpg\","+ "\r\n";
        strjson=strjson+"    			\"vendorPath\": \"http://www.babomall.com/bbsemarket/shop/goods_bak/77900.jpg\"}],"+ "\r\n";
        strjson=strjson+"    		\"notices\": [{"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"제품 소재\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"색상\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"치수\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"제조자(수입자)\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"제조국\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n"; 
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"세탁방법 및 취급시 주의사항\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";        
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"제조연월\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"품질보증기준\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n"; 
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"A/S 책임자와 전화번호\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}],"+ "\r\n";
        strjson=strjson+"    		\"attributes\": [{"+ "\r\n";
        strjson=strjson+"    			\"attributeTypeName\": \"선택형_속성\","+ "\r\n";
        strjson=strjson+"    			\"attributeValueName\": \"RED\"},"+ "\r\n";
    	strjson=strjson+"			{"+ "\r\n";
    	strjson=strjson+"    			\"attributeTypeName\": \"사이즈\","+ "\r\n";
    	strjson=strjson+"    			\"attributeValueName\": \"55\"}],"+ "\r\n";
    	strjson=strjson+"    		\"contents\": [{"+ "\r\n";
    	strjson=strjson+"    			\"contentsType\": \"TEXT\","+ "\r\n";
    	strjson=strjson+"    			\"contentDetails\": [{"+ "\r\n";
    	strjson=strjson+"    				\"content\": \"<html><div><\\/div><div><img src='http:\\/\\/www.babomall.com\\/bbsemarket\\/gimage\\/7005345_2014_04_09_10_02_25_111.jpg' \\/><div><\\/html>\","+ "\r\n";
    	strjson=strjson+"    				\"detailType\": \"TEXT\"}]}]}"+ "\r\n"; 
    	strjson=strjson+"],"+ "\r\n"; 
    	strjson=strjson+"    \"requiredDocuments\": [],"+ "\r\n";
    	strjson=strjson+"    \"manufacture\": \"제조사\" }" + "\r\n";  

        //System.out.println(strjson);
        
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
            requestPost.addHeader("X-Requested-By", VENDOR_ID);
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
    //replace with your own vendorId
    private static final String VENDOR_ID = "****";
    

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
    //replace with your own vendorId
    private static final String VENDOR_ID = "****";
    

    public void test() {
        //params
        String method = "PUT";
        String path = "/targets/wing/seller_api/apis/api/v1/marketplace/seller-products";
        
        String strjson="";
        strjson=strjson+"{"+ "\r\n";
        strjson=strjson+"    \"sellerProductId\":2405,"+ "\r\n";
        strjson=strjson+"    \"displayCategoryCode\": 3013,"+ "\r\n";
        strjson=strjson+"    \"sellerProductName\": \"테스트 상품 등록_Kay_Java\","+ "\r\n";
        strjson=strjson+"    \"vendorId\": \"A00100542\","+ "\r\n";
        strjson=strjson+"    \"saleStartedAt\": \"2016-10-12T00:00:00\","+ "\r\n";
        strjson=strjson+"    \"saleEndedAt\": \"2099-01-01T23:59:59\","+ "\r\n";
        strjson=strjson+"    \"brand\": \"Stchodo\","+ "\r\n";
        strjson=strjson+"    \"deliveryMethod\": \"SEQUENCIAL\","+ "\r\n";
        strjson=strjson+"    \"deliveryCompanyCode\": \"HYUNDAI\","+ "\r\n";
        strjson=strjson+"    \"deliveryChargeType\": \"FREE_DELIVERY_OVER_9800\","+ "\r\n";     //9,800이상무료배송
        //strjson=strjson+"    \"deliveryChargeType\": \"NOT_FREE\","+ "\r\n";                  //유료배
        strjson=strjson+"    \"deliveryCharge\": \"2500\","+ "\r\n";
        strjson=strjson+"    \"freeShipOverAmount\": \"9800\","+ "\r\n";                        //조건부 무료-9,800이상 무료배송 시 9800
        //strjson=strjson+"    \"freeShipOverAmount\": \"0\","+ "\r\n";                         //유료배송이면 0
        strjson=strjson+"    \"deliveryChargeOnReturn\": \"0\","+ "\r\n";
        strjson=strjson+"    \"remoteAreaDeliverable\": \"N\","+ "\r\n";
        strjson=strjson+"    \"unionDeliveryType\": \"UNION_DELIVERY\","+ "\r\n";
        strjson=strjson+"    \"returnCenterCode\": \"1000005036\","+ "\r\n";
        strjson=strjson+"    \"returnChargeName\": \"대표이름4\","+ "\r\n";
        strjson=strjson+"    \"companyContactNumber\": \"02-1234-5678\","+ "\r\n";
        strjson=strjson+"    \"returnZipCode\": \"135-090\","+ "\r\n";
        strjson=strjson+"    \"returnAddress\": \"서울특별시 강남구 삼성동\","+ "\r\n";
        strjson=strjson+"    \"returnAddressDetail\": \"333\","+ "\r\n";
        strjson=strjson+"    \"returnCharge\": 2500,"+ "\r\n";
        strjson=strjson+"    \"returnChargeVendor\": \"N\","+ "\r\n";
        strjson=strjson+"    \"afterServiceInformation\": \"A/S안내 1544-1255\","+ "\r\n";
        strjson=strjson+"    \"afterServiceContactNumber\": \"1544-1255\","+ "\r\n";
        strjson=strjson+"    \"outboundShippingPlaceCode\": \"43502\","+ "\r\n";
        strjson=strjson+"    \"vendorUserId\": \"3pmtest01\","+ "\r\n";
        strjson=strjson+"    \"requested\": false,"+ "\r\n";
        strjson=strjson+"    \"items\": ["+ "\r\n";
        strjson=strjson+"    	{"+ "\r\n";
        strjson=strjson+"    		\"itemName\": \"[Stchodo] 스쳐도 민트코코 빅에디션 버핑 44\","+ "\r\n";
        strjson=strjson+"    		\"originalPrice\": 13000,"+ "\r\n";
        strjson=strjson+"    		\"salePrice\": 10000,"+ "\r\n";
        strjson=strjson+"    		\"maximumBuyCount\": \"9999\","+ "\r\n";
        strjson=strjson+"    		\"maximumBuyForPerson\": \"0\","+ "\r\n";
        strjson=strjson+"    		\"outboundShippingTimeDay\": \"2\","+ "\r\n";
        strjson=strjson+"    		\"maximumBuyForPersonPeriod\": \"1\","+ "\r\n";
        strjson=strjson+"    		\"unitCount\": 1,"+ "\r\n";
        strjson=strjson+"    		\"freePriceType\": \"NO_FREE_PRICE\","+ "\r\n";
        strjson=strjson+"    		\"adultOnly\": \"EVERYONE\","+ "\r\n";
        strjson=strjson+"    		\"taxType\": \"TAX\","+ "\r\n";
        strjson=strjson+"    		\"parallelImported\": \"NOT_PARALLEL_IMPORTED\","+ "\r\n";
        strjson=strjson+"    		\"overseasPurchased\": \"NOT_OVERSEAS_PURCHASED\","+ "\r\n";
        strjson=strjson+"    		\"externalVendorSku\": \"90726\","+ "\r\n";
        strjson=strjson+"    		\"barcode\": \"\","+ "\r\n";
        strjson=strjson+"    		\"emptyBarcode\": false,"+ "\r\n";
        strjson=strjson+"    		\"emptyBarcodeReason\": null,"+ "\r\n";
        strjson=strjson+"    		\"modelNo\": \"\","+ "\r\n";
        strjson=strjson+"    		\"extraProperties\": null,"+ "\r\n";
        strjson=strjson+"    		\"certifications\": [],"+ "\r\n";
        strjson=strjson+"    		\"searchTags\": null,"+ "\r\n";
        strjson=strjson+"    		\"images\": [{"+ "\r\n";
        strjson=strjson+"    			\"imageOrder\": 0,"+ "\r\n";
        strjson=strjson+"    			\"imageType\": \"REPRESENTATION\","+ "\r\n";
        strjson=strjson+"    			\"cdnPath\": \"vendor_inventory/images/2015/06/25/6649eb03-ac87-4138-90b2-a1d5aca2ea39.jpg\","+ "\r\n";
        strjson=strjson+"    			\"vendorPath\": \"http://www.babomall.com/bbsemarket/shop/goods_bak/77900.jpg\"}],"+ "\r\n";
        strjson=strjson+"    		\"notices\": [{"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"제품 소재\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"색상\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"치수\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"제조자(수입자)\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"제조국\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n"; 
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"세탁방법 및 취급시 주의사항\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";        
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"제조연월\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"품질보증기준\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n"; 
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"A/S 책임자와 전화번호\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}],"+ "\r\n";
        strjson=strjson+"    		\"attributes\": [{"+ "\r\n";
        strjson=strjson+"    			\"attributeTypeName\": \"선택형_속성\","+ "\r\n";
        strjson=strjson+"    			\"attributeValueName\": \"GREY\"},"+ "\r\n";
        strjson=strjson+"			{"+ "\r\n";
        strjson=strjson+"    			\"attributeTypeName\": \"test\","+ "\r\n";
        strjson=strjson+"    			\"attributeValueName\": \"test\"},"+ "\r\n";        
    	strjson=strjson+"			{"+ "\r\n";
    	strjson=strjson+"    			\"attributeTypeName\": \"사이즈\","+ "\r\n";
    	strjson=strjson+"    			\"attributeValueName\": \"44\"}],"+ "\r\n";
    	strjson=strjson+"    		\"contents\": [{"+ "\r\n";
    	strjson=strjson+"    			\"contentsType\": \"TEXT\","+ "\r\n";
    	strjson=strjson+"    			\"contentDetails\": [{"+ "\r\n";
    	strjson=strjson+"    				\"content\": \"<html><div><\\/div><div><img src='http:\\/\\/www.babomall.com\\/bbsemarket\\/gimage\\/7005345_2014_04_09_10_02_25_111.jpg' \\/><div><\\/html>\","+ "\r\n";
    	strjson=strjson+"    				\"detailType\": \"TEXT\"}]}]},"+ "\r\n";
        strjson=strjson+"    	{"+ "\r\n"; 
    	strjson=strjson+"    		\"itemName\": \"[Stchodo] 스쳐도 민트코코 빅에디션 버핑 55\","+ "\r\n";
    	strjson=strjson+"    		\"originalPrice\": 13000,"+ "\r\n";
    	strjson=strjson+"    		\"salePrice\": 10000,"+ "\r\n";
    	strjson=strjson+"    		\"maximumBuyCount\": \"9999\","+ "\r\n";
    	strjson=strjson+"    		\"maximumBuyForPerson\": \"0\","+ "\r\n";
    	strjson=strjson+"    		\"outboundShippingTimeDay\": \"2\","+ "\r\n";
    	strjson=strjson+"    		\"maximumBuyForPersonPeriod\": \"1\","+ "\r\n";
    	strjson=strjson+"    		\"unitCount\": 1,"+ "\r\n";
    	strjson=strjson+"    		\"freePriceType\": \"NO_FREE_PRICE\","+ "\r\n";
    	strjson=strjson+"    		\"adultOnly\": \"EVERYONE\","+ "\r\n";
    	strjson=strjson+"    		\"taxType\": \"TAX\","+ "\r\n";
    	strjson=strjson+"    		\"parallelImported\": \"NOT_PARALLEL_IMPORTED\","+ "\r\n";
    	strjson=strjson+"    		\"overseasPurchased\": \"NOT_OVERSEAS_PURCHASED\","+ "\r\n";
    	strjson=strjson+"    		\"externalVendorSku\": \"90726\","+ "\r\n";
    	strjson=strjson+"    		\"barcode\": \"\","+ "\r\n";
    	strjson=strjson+"    		\"emptyBarcode\": false,"+ "\r\n";
    	strjson=strjson+"    		\"emptyBarcodeReason\": null,"+ "\r\n";
    	strjson=strjson+"    		\"modelNo\": \"\","+ "\r\n";
    	strjson=strjson+"    		\"extraProperties\": null,"+ "\r\n";
    	strjson=strjson+"    		\"certifications\": [],"+ "\r\n";
    	strjson=strjson+"    		\"searchTags\": null,"+ "\r\n";
    	strjson=strjson+"    		\"images\": [{"+ "\r\n";
        strjson=strjson+"    			\"imageOrder\": 0,"+ "\r\n";
        strjson=strjson+"    			\"imageType\": \"REPRESENTATION\","+ "\r\n";
        strjson=strjson+"    			\"cdnPath\": \"vendor_inventory/images/2015/06/25/6649eb03-ac87-4138-90b2-a1d5aca2ea39.jpg\","+ "\r\n";
        strjson=strjson+"    			\"vendorPath\": \"http://www.babomall.com/bbsemarket/shop/goods_bak/77900.jpg\"}],"+ "\r\n";
        strjson=strjson+"    		\"notices\": [{"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"제품 소재\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"색상\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"치수\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"제조자(수입자)\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"제조국\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n"; 
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"세탁방법 및 취급시 주의사항\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";        
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"제조연월\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"품질보증기준\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}, {"+ "\r\n"; 
        strjson=strjson+"    			\"noticeCategoryName\": \"의류\","+ "\r\n";
        strjson=strjson+"    			\"noticeCategoryDetailName\": \"A/S 책임자와 전화번호\","+ "\r\n";
        strjson=strjson+"    			\"content\": \"상세페이지 참조\""+ "\r\n";
        strjson=strjson+"    		}],"+ "\r\n";
        strjson=strjson+"    		\"attributes\": [{"+ "\r\n";
        strjson=strjson+"    			\"attributeTypeName\": \"선택형_속성\","+ "\r\n";
        strjson=strjson+"    			\"attributeValueName\": \"RED\"},"+ "\r\n";
        strjson=strjson+"			{"+ "\r\n";
        strjson=strjson+"    			\"attributeTypeName\": \"test\","+ "\r\n";
        strjson=strjson+"    			\"attributeValueName\": \"test\"},"+ "\r\n";
    	strjson=strjson+"			{"+ "\r\n";
    	strjson=strjson+"    			\"attributeTypeName\": \"사이즈\","+ "\r\n";
    	strjson=strjson+"    			\"attributeValueName\": \"55\"}],"+ "\r\n";
    	strjson=strjson+"    		\"contents\": [{"+ "\r\n";
    	strjson=strjson+"    			\"contentsType\": \"TEXT\","+ "\r\n";
    	strjson=strjson+"    			\"contentDetails\": [{"+ "\r\n";
    	strjson=strjson+"    				\"content\": \"<html><div><\\/div><div><img src='http:\\/\\/www.babomall.com\\/bbsemarket\\/gimage\\/7005345_2014_04_09_10_02_25_111.jpg' \\/><div><\\/html>\","+ "\r\n";
    	strjson=strjson+"    				\"detailType\": \"TEXT\"}]}]}"+ "\r\n"; 
    	strjson=strjson+"],"+ "\r\n"; 
    	strjson=strjson+"    \"requiredDocuments\": [],"+ "\r\n";
    	strjson=strjson+"    \"manufacture\": \"제조사\" }" + "\r\n";  

        //System.out.println(strjson);
        
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
            requestPut.addHeader("X-Requested-By", VENDOR_ID);
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
    //replace with your own vendorId
    private static final String VENDOR_ID = "****";
    

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
            requestDelete.addHeader("X-Requested-By", VENDOR_ID);
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
