export const pythonExample = {
  post: `
import os
import time
import hmac, hashlib
import urllib.parse
import urllib.request
import ssl
import json

os.environ['TZ'] = 'GMT+0'

datetime=time.strftime('%y%m%d')+'T'+time.strftime('%H%M%S')+'Z'
method = "POST"

path = "/targets/wing/seller_api/apis/api/v1/marketplace/seller-products"

message = datetime+method+path

#replace with your own accesskey
accesskey = "****"
#replace with your own secretKey
secretkey = "****"

#********************************************************#
#authorize, demonstrate how to generate hmac signature here
signature=hmac.new(secretkey.encode('utf-8'),message.encode('utf-8'),hashlib.sha256).hexdigest()
authorization  = "CEA algorithm=HmacSHA256, access-key="+accesskey+", signed-date="+datetime+", signature="+signature
#print out the hmac key
#print(authorization)
#********************************************************#

# ************* SEND THE REQUEST *************
#url = "http://api-gateway-it-ext.coupang.com"+path
url = "https://api-gateway.coupang.com"+path

true=True
false=False
null = None
strjson={
	    "displayCategoryCode": 79386,
	    "sellerProductName": "테스트 상품 등록_CJ제일제당 백설 찹쌀 호떡믹스_Python",
	    "vendorId": "A00013264",
	    "saleStartedAt": "2017-09-01T00:00:00",
	    "saleEndedAt": "2099-01-01T23:59:59",
	    "displayProductName": "[displayProductName]고객 만족 CJ제일제당 백설 찹쌀 호떡믹스",
	    "brand": "Stchodo",
	    "generalProductName": "[generalProductName]CJ제일제당 백설 찹쌀 호떡믹스",
	    "productGroup": "호떡믹스",
	    "deliveryMethod": "SEQUENCIAL",
	    "deliveryCompanyCode": "KGB",
	    "deliveryChargeType": "FREE_DELIVERY_OVER_9800",
	    "deliveryCharge": "2500",
	    "freeShipOverAmount": "9800",
	    "deliveryChargeOnReturn": "0",
	    "remoteAreaDeliverable": "N",
	    "unionDeliveryType": "UNION_DELIVERY",
	    "returnCenterCode": "1000274592",
	    "returnChargeName": "대표이름4",
	    "companyContactNumber": "02-1234-678",
	    "returnZipCode": "135-090",
	    "returnAddress": "서울특별시 강남구 삼성동",
	    "returnAddressDetail": "333",
	    "returnCharge": 5000,
	    "returnChargeVendor": "N",
	    "afterServiceInformation": "A/S안내 1544-1255",
	    "afterServiceContactNumber": "1544-1255",
	    "outboundShippingPlaceCode": "74010",
	    "vendorUserId": "et5",
	    "requested": false,
	    "items": [
	    	{
	    		"itemName": "[Stchodo] 스쳐도 민트코코 빅에디션 버핑 44",
	    		"originalPrice": 13000,
	    		"salePrice": 10000,
	    		"maximumBuyCount": "9999",
	    		"maximumBuyForPerson": "0",
	    		"outboundShippingTimeDay": "2",
	    		"maximumBuyForPersonPeriod": "1",
	    		"unitCount": 1,
	    		"adultOnly": "EVERYONE",
	    		"taxType": "TAX",
	    		"parallelImported": "NOT_PARALLEL_IMPORTED",
	    		"overseasPurchased": "NOT_OVERSEAS_PURCHASED",
	    		"pccNeeded": "true",
	    		"externalVendorSku": "90726",
	    		"barcode": "",
	    		"emptyBarcode": false,
	    		"emptyBarcodeReason": null,
	    		"modelNo": "",
	    		"extraProperties": null,
	    		"certifications": [
                          {
                            "certificationType": "NOT_REQUIRED",
                            "certificationCode": ""
                          }
                        ],
	    		"searchTags": null,
	    		"images": [{
	    			"imageOrder": 0,
	    			"imageType": "REPRESENTATION",
	    			"cdnPath": "vendor_inventory/images/2015/06/25/6649eb03-ac87-4138-90b2-a1d5aca2ea39.jpg",
	    			"vendorPath": "http://www.babomall.com/bbsemarket/shop/goods_bak/77900.jpg"}],
	    		"notices": [{
	    			"noticeCategoryName": "의류",
	    			"noticeCategoryDetailName": "제품 소재",
	    			"content": "상세페이지 참조"
	    		}, {
	    			"noticeCategoryName": "의류",
	    			"noticeCategoryDetailName": "색상",
	    			"content": "상세페이지 참조"
	    		}, {
	    			"noticeCategoryName": "의류",
	    			"noticeCategoryDetailName": "치수",
	    			"content": "상세페이지 참조"
	    		}, {
	    			"noticeCategoryName": "의류",
	    			"noticeCategoryDetailName": "제조자(수입자)",
	    			"content": "상세페이지 참조"
	    		}, {
	    			"noticeCategoryName": "의류",
	    			"noticeCategoryDetailName": "제조국",
	    			"content": "상세페이지 참조"
	    		}, {
	    			"noticeCategoryName": "의류",
	    			"noticeCategoryDetailName": "세탁방법 및 취급시 주의사항",
	    			"content": "상세페이지 참조"
	    		}, {
	    			"noticeCategoryName": "의류",
	    			"noticeCategoryDetailName": "제조연월",
	    			"content": "상세페이지 참조"
	    		}, {
	    			"noticeCategoryName": "의류",
	    			"noticeCategoryDetailName": "품질보증기준",
	    			"content": "상세페이지 참조"
	    		}, {
	    			"noticeCategoryName": "의류",
	    			"noticeCategoryDetailName": "A/S 책임자와 전화번호",
	    			"content": "상세페이지 참조"
	    		}],
	    		"attributes": [{
	    			"attributeTypeName": "색상",
	    			"attributeValueName": "GREY"},
				{
	    			"attributeTypeName": "패션의류/잡화 사이즈",
	    			"attributeValueName": "44"}],
	    		"contents": [{
	    			"contentsType": "TEXT",
	    			"contentDetails": [{
	    				"content": "<html><div><\/div><div><img src='http:\/\/www.babomall.com\/bbsemarket\/gimage\/7005345_2014_04_09_10_02_25_111.jpg' \/><div><\/html>",
	    				"detailType": "TEXT"}]}]},
	    	{
	    		"itemName": "[Stchodo] 스쳐도 민트코코 빅에디션 버핑 55",
	    		"originalPrice": 13000,
	    		"salePrice": 10000,
	    		"maximumBuyCount": "9999",
	    		"maximumBuyForPerson": "0",
	    		"outboundShippingTimeDay": "2",
	    		"maximumBuyForPersonPeriod": "1",
	    		"unitCount": 1,
	    		"adultOnly": "EVERYONE",
	    		"taxType": "TAX",
	    		"parallelImported": "PARALLEL_IMPORTED",
	    		"overseasPurchased": "NOT_OVERSEAS_PURCHASED",
	    		"pccNeeded": "true",
	    		"externalVendorSku": "90726",
	    		"barcode": "",
	    		"emptyBarcode": false,
	    		"emptyBarcodeReason": null,
	    		"modelNo": "",
	    		"extraProperties": null,
	    		"certifications": [
                          {
                            "certificationType": "NOT_REQUIRED",
                            "certificationCode": ""
                          }
                        ],
	    		"searchTags": null,
	    		"images": [{
	    			"imageOrder": 0,
	    			"imageType": "REPRESENTATION",
	    			"cdnPath": "vendor_inventory/images/2015/06/25/6649eb03-ac87-4138-90b2-a1d5aca2ea39.jpg",
	    			"vendorPath": "http://www.babomall.com/bbsemarket/shop/goods_bak/77900.jpg"}],
	    		"notices": [{
	    			"noticeCategoryName": "의류",
	    			"noticeCategoryDetailName": "제품 소재",
	    			"content": "상세페이지 참조"
	    		}, {
	    			"noticeCategoryName": "의류",
	    			"noticeCategoryDetailName": "색상",
	    			"content": "상세페이지 참조"
	    		}, {
	    			"noticeCategoryName": "의류",
	    			"noticeCategoryDetailName": "치수",
	    			"content": "상세페이지 참조"
	    		}, {
	    			"noticeCategoryName": "의류",
	    			"noticeCategoryDetailName": "제조자(수입자)",
	    			"content": "상세페이지 참조"
	    		}, {
	    			"noticeCategoryName": "의류",
	    			"noticeCategoryDetailName": "제조국",
	    			"content": "상세페이지 참조"
	    		}, {
	    			"noticeCategoryName": "의류",
	    			"noticeCategoryDetailName": "세탁방법 및 취급시 주의사항",
	    			"content": "상세페이지 참조"
	    		}, {
	    			"noticeCategoryName": "의류",
	    			"noticeCategoryDetailName": "제조연월",
	    			"content": "상세페이지 참조"
	    		}, {
	    			"noticeCategoryName": "의류",
	    			"noticeCategoryDetailName": "품질보증기준",
	    			"content": "상세페이지 참조"
	    		}, {
	    			"noticeCategoryName": "의류",
	    			"noticeCategoryDetailName": "A/S 책임자와 전화번호",
	    			"content": "상세페이지 참조"
	    		}],
	    		"extraProperties": {"GOODS_SEQ":"1","optuid":"18788597"},
	    		"attributes": [{
	    			"attributeTypeName": "색상",
	    			"attributeValueName": "GREY"},
				{
	    			"attributeTypeName": "패션의류/잡화 사이즈",
	    			"attributeValueName": "55"}],
	    		"contents": [{
	    			"contentsType": "TEXT",
	    			"contentDetails": [{
	    				"content": "<html><div><\/div><div><img src='http:\/\/www.babomall.com\/bbsemarket\/gimage\/7005345_2014_04_09_10_02_25_111.jpg' \/><div><\/html>",
	    				"detailType": "TEXT"}]}]}
	],
	    "requiredDocuments": [],
	    "manufacture": "제조사" }

data = json.dumps(strjson).encode("utf-8")

print('\nBEGIN REQUEST++++++++++++++++++++++++++++++++++++')
req = urllib.request.Request(url)

req.add_header("Content-type","application/json;charset=UTF-8")
req.add_header("Authorization",authorization)

req.get_method = lambda: method

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

print('\nRESPONSE++++++++++++++++++++++++++++++++++++')
try:
  resp = urllib.request.urlopen(req, data, context=ctx)
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
  get: `
import os
import time
import hmac, hashlib
import urllib.parse
import urllib.request
import ssl

os.environ['TZ'] = 'GMT+0'

datetime=time.strftime('%y%m%d')+'T'+time.strftime('%H%M%S')+'Z'
method = "GET"
#replace with your own vendorId
path = "/v2/providers/openapi/apis/api/v4/vendors/A00******/returnRequests"
query = urllib.parse.urlencode({"createdAtFrom": "2018-08-08", "createdAtTo": "2018-08-08", "status": "UC"})

message = datetime+method+path+query

#replace with your own accesskey
accesskey = "****"
#replace with your own secretKey
secretkey = "****"

#********************************************************#
#authorize, demonstrate how to generate hmac signature here
signature=hmac.new(secretkey.encode('utf-8'),message.encode('utf-8'),hashlib.sha256).hexdigest()
authorization  = "CEA algorithm=HmacSHA256, access-key="+accesskey+", signed-date="+datetime+", signature="+signature
#print out the hmac key
#print(authorization)
#********************************************************#

# ************* SEND THE REQUEST *************
url = "https://api-gateway.coupang.com"+path+"?%s" % query

req = urllib.request.Request(url)

req.add_header("Content-type","application/json;charset=UTF-8")
req.add_header("Authorization",authorization)

req.get_method = lambda: method

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

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
  put: `
import os
import time
import hmac, hashlib
import urllib.parse
import urllib.request
import ssl
import json

os.environ['TZ'] = 'GMT+0'

datetime=time.strftime('%y%m%d')+'T'+time.strftime('%H%M%S')+'Z'
method = "PUT"
path = "/targets/wing/seller_api/apis/api/v1/marketplace/seller-products"

message = datetime+method+path

#replace with your own accesskey
accesskey = "****"
#replace with your own secretKey
secretkey = "****"

#********************************************************#
#authorize, demonstrate how to generate hmac signature here
signature=hmac.new(secretkey.encode('utf-8'),message.encode('utf-8'),hashlib.sha256).hexdigest()
authorization  = "CEA algorithm=HmacSHA256, access-key="+accesskey+", signed-date="+datetime+", signature="+signature
#print out the hmac key
#print(authorization)
#********************************************************#

# ************* SEND THE REQUEST *************
#url = "http://api-gateway-it-ext.coupang.com"+path
url = "https://api-gateway.coupang.com"+path

true=True
false=False
null = None
strjson={
		"sellerProductId": 83358541,
		"displayCategoryCode": 79386,
		"sellerProductName": "테스트 상품 등록_CJ제일제당 백설 찹쌀 호떡믹스_Python",
		"vendorId": "A00013264",
		"saleStartedAt": "2017-09-01T00:00:00",
		"saleEndedAt": "2099-01-01T23:59:59",
		"displayProductName": "[displayProductName]고객 만족 CJ제일제당 백설 찹쌀 호떡믹스",
		"brand": "Stchodo",
		"generalProductName": "[generalProductName]CJ제일제당 백설 찹쌀 호떡믹스",
		"productGroup": "호떡믹스",
		"deliveryMethod": "SEQUENCIAL",
		"deliveryCompanyCode": "KGB",
		"deliveryChargeType": "FREE_DELIVERY_OVER_9800",
		"deliveryCharge": "2500",
		"freeShipOverAmount": "9800",
		"deliveryChargeOnReturn": "0",
		"remoteAreaDeliverable": "N",
		"unionDeliveryType": "UNION_DELIVERY",
		"returnCenterCode": "1000274592",
		"returnChargeName": "대표이름4",
		"companyContactNumber": "02-1234-678",
		"returnZipCode": "135-090",
		"returnAddress": "서울특별시 강남구 삼성동",
		"returnAddressDetail": "333",
		"returnCharge": 5000,
		"returnChargeVendor": "N",
		"afterServiceInformation": "A/S안내 1544-1255",
		"afterServiceContactNumber": "1544-1255",
		"outboundShippingPlaceCode": "74010",
		"vendorUserId": "et5",
		"requested": false,
		"items": [
			{
				"itemName": "[Stchodo] 스쳐도 민트코코 빅에디션 버핑 44",
				"originalPrice": 13000,
				"salePrice": 10000,
				"maximumBuyCount": "9999",
				"maximumBuyForPerson": "0",
				"outboundShippingTimeDay": "2",
				"maximumBuyForPersonPeriod": "1",
				"unitCount": 1,
				"adultOnly": "EVERYONE",
				"taxType": "TAX",
				"parallelImported": "NOT_PARALLEL_IMPORTED",
				"overseasPurchased": "NOT_OVERSEAS_PURCHASED",
				"pccNeeded": "true",
				"externalVendorSku": "90726",
				"barcode": "",
				"emptyBarcode": false,
				"emptyBarcodeReason": null,
				"modelNo": "",
				"extraProperties": null,
				"certifications": [],
				"searchTags": null,
				"images": [{
					"imageOrder": 0,
					"imageType": "REPRESENTATION",
					"cdnPath": "vendor_inventory/images/2015/06/25/6649eb03-ac87-4138-90b2-a1d5aca2ea39.jpg",
					"vendorPath": "http://www.babomall.com/bbsemarket/shop/goods_bak/77900.jpg"}],
				"notices": [{
					"noticeCategoryName": "의류",
					"noticeCategoryDetailName": "제품 소재",
					"content": "상세페이지 참조"
				}, {
					"noticeCategoryName": "의류",
					"noticeCategoryDetailName": "색상",
					"content": "상세페이지 참조"
				}, {
					"noticeCategoryName": "의류",
					"noticeCategoryDetailName": "치수",
					"content": "상세페이지 참조"
				}, {
					"noticeCategoryName": "의류",
					"noticeCategoryDetailName": "제조자(수입자)",
					"content": "상세페이지 참조"
				}, {
					"noticeCategoryName": "의류",
					"noticeCategoryDetailName": "제조국",
					"content": "상세페이지 참조"
				}, {
					"noticeCategoryName": "의류",
					"noticeCategoryDetailName": "세탁방법 및 취급시 주의사항",
					"content": "상세페이지 참조"
				}, {
					"noticeCategoryName": "의류",
					"noticeCategoryDetailName": "제조연월",
					"content": "상세페이지 참조"
				}, {
					"noticeCategoryName": "의류",
					"noticeCategoryDetailName": "품질보증기준",
					"content": "상세페이지 참조"
				}, {
					"noticeCategoryName": "의류",
					"noticeCategoryDetailName": "A/S 책임자와 전화번호",
					"content": "상세페이지 참조"
				}],
				"attributes": [{
					"attributeTypeName": "색상",
					"attributeValueName": "GREY"},
					{
						"attributeTypeName": "패션의류/잡화 사이즈",
						"attributeValueName": "44"}],
				"contents": [{
					"contentsType": "TEXT",
					"contentDetails": [{
						"content": "<html><div><\/div><div><img src='http:\/\/www.babomall.com\/bbsemarket\/gimage\/7005345_2014_04_09_10_02_25_111.jpg' \/><div><\/html>",
						"detailType": "TEXT"}]}]},
			{
				"itemName": "[Stchodo] 스쳐도 민트코코 빅에디션 버핑 55",
				"originalPrice": 13000,
				"salePrice": 10000,
				"maximumBuyCount": "9999",
				"maximumBuyForPerson": "0",
				"outboundShippingTimeDay": "2",
				"maximumBuyForPersonPeriod": "1",
				"unitCount": 1,
				"adultOnly": "EVERYONE",
				"taxType": "TAX",
				"parallelImported": "PARALLEL_IMPORTED",
				"overseasPurchased": "NOT_OVERSEAS_PURCHASED",
				"pccNeeded": "true",
				"externalVendorSku": "90726",
				"barcode": "",
				"emptyBarcode": false,
				"emptyBarcodeReason": null,
				"modelNo": "",
				"extraProperties": null,
				"certifications": [],
				"searchTags": null,
				"images": [{
					"imageOrder": 0,
					"imageType": "REPRESENTATION",
					"cdnPath": "vendor_inventory/images/2015/06/25/6649eb03-ac87-4138-90b2-a1d5aca2ea39.jpg",
					"vendorPath": "http://www.babomall.com/bbsemarket/shop/goods_bak/77900.jpg"}],
				"notices": [{
					"noticeCategoryName": "의류",
					"noticeCategoryDetailName": "제품 소재",
					"content": "상세페이지 참조"
				}, {
					"noticeCategoryName": "의류",
					"noticeCategoryDetailName": "색상",
					"content": "상세페이지 참조"
				}, {
					"noticeCategoryName": "의류",
					"noticeCategoryDetailName": "치수",
					"content": "상세페이지 참조"
				}, {
					"noticeCategoryName": "의류",
					"noticeCategoryDetailName": "제조자(수입자)",
					"content": "상세페이지 참조"
				}, {
					"noticeCategoryName": "의류",
					"noticeCategoryDetailName": "제조국",
					"content": "상세페이지 참조"
				}, {
					"noticeCategoryName": "의류",
					"noticeCategoryDetailName": "세탁방법 및 취급시 주의사항",
					"content": "상세페이지 참조"
				}, {
					"noticeCategoryName": "의류",
					"noticeCategoryDetailName": "제조연월",
					"content": "상세페이지 참조"
				}, {
					"noticeCategoryName": "의류",
					"noticeCategoryDetailName": "품질보증기준",
					"content": "상세페이지 참조"
				}, {
					"noticeCategoryName": "의류",
					"noticeCategoryDetailName": "A/S 책임자와 전화번호",
					"content": "상세페이지 참조"
				}],
				"extraProperties": {"GOODS_SEQ": "1", "optuid": "18788597"},
				"attributes": [{
					"attributeTypeName": "색상",
					"attributeValueName": "GREY"},
					{
						"attributeTypeName": "패션의류/잡화 사이즈",
						"attributeValueName": "55"}],
				"contents": [{
					"contentsType": "TEXT",
					"contentDetails": [{
						"content": "<html><div><\/div><div><img src='http:\/\/www.babomall.com\/bbsemarket\/gimage\/7005345_2014_04_09_10_02_25_111.jpg' \/><div><\/html>",
						"detailType": "TEXT"}]}]}
		],
		"requiredDocuments": [],
		"manufacture": "제조사"}

data = json.dumps(strjson).encode("utf-8")

req = urllib.request.Request(url)

req.add_header("Content-type","application/json;charset=UTF-8")
req.add_header("Authorization",authorization)

req.get_method = lambda: method

#skipping for ssl cert.
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

try:
  resp = urllib.request.urlopen(req, data, context=ctx)
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
  patch: ``,
  delete: `
import os
import time
import hmac, hashlib
import urllib.parse
import urllib.request
import ssl
import json

os.environ['TZ'] = 'GMT+0'

datetime=time.strftime('%y%m%d')+'T'+time.strftime('%H%M%S')+'Z'
method = "DELETE"
path = "/targets/wing/seller_api/apis/api/v1/marketplace/seller-products/83358541"

message = datetime+method+path

#replace with your own accesskey
accesskey = "****"
#replace with your own secretKey
secretkey = "****"

#********************************************************#
#authorize, demonstrate how to generate hmac signature here
signature=hmac.new(secretkey.encode('utf-8'),message.encode('utf-8'),hashlib.sha256).hexdigest()
authorization  = "CEA algorithm=HmacSHA256, access-key="+accesskey+", signed-date="+datetime+", signature="+signature
#print out the hmac key
#print(authorization)
#********************************************************#

# ************* SEND THE REQUEST *************
#url = "http://api-gateway-it-ext.coupang.com"+path
url = "https://api-gateway.coupang.com"+path

req = urllib.request.Request(url)

req.add_header("Content-type","application/json;charset=UTF-8")
req.add_header("Authorization",authorization)

req.get_method = lambda: method

#skipping for ssl cert.
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

try:
  resp = urllib.request.urlopen(req, context=ctx)
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
`
};
