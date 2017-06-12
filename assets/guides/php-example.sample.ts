export const phpExample = {
  post: `
<?php
date_default_timezone_set("GMT+0");

$datetime = date("ymd").'T'.date("His").'Z';
$method = "POST";
$path = "/targets/wing/seller_api/apis/api/v1/marketplace/seller-products";

$message = $datetime.$method.$path;

//replace with your own accessKey
$ACCESS_KEY = "****";
//replace with your own secretKey
$SECRET_KEY = "****";
//replace with your own vendorId
$VENDOR_ID =  "****";
$algorithm = "HmacSHA256";

$signature = hash_hmac('sha256', $message, $SECRET_KEY);

$authorization  = "CEA algorithm=HmacSHA256, access-key=".$ACCESS_KEY.", signed-date=".$datetime.", signature=".$signature;

//replace prod url when you need
$url = 'https://api-gateway-it-ext.coupang.com'.$path;

$strjson='
{
  "displayCategoryCode": 3013,
  "sellerProductName": "테스트 상품 등록",
  "vendorId": "A00100542",
  "saleStartedAt": "2016-10-12T00:00:00",
  "saleEndedAt": "2099-01-01T23:59:59",
  "brand": "Stchodo",
  "deliveryMethod": "SEQUENCIAL",
  "deliveryCompanyCode": "HYUNDAI",
  "deliveryChargeType": "FREE_DELIVERY_OVER_9800",
  "deliveryCharge": "2500",
  "freeShipOverAmount": "9800",
  "deliveryChargeOnReturn": "0",
  "remoteAreaDeliverable": "N",
  "unionDeliveryType": "UNION_DELIVERY",
  "returnCenterCode": "1000005036",
  "returnChargeName": "대표이름4",
  "companyContactNumber": "02-1234-5678",
  "returnZipCode": "135-090",
  "returnAddress": "서울특별시 강남구 삼성동",
  "returnAddressDetail": "333",
  "returnCharge": 2500,
  "returnChargeVendor": "N",
  "afterServiceInformation": "A/S안내 1544-1255",
  "afterServiceContactNumber": "1544-1255",
  "outboundShippingPlaceCode": "43502",
  "vendorUserId": "3pmtest01",
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
	"freePriceType": "NO_FREE_PRICE",
	"adultOnly": "EVERYONE",
	"taxType": "TAX",
	"parallelImported": "NOT_PARALLEL_IMPORTED",
	"overseasPurchased": "NOT_OVERSEAS_PURCHASED",
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
	  "vendorPath": "http://www.babomall.com/bbsemarket/shop/goods_bak/77900.jpg"
	}],
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
	  "attributeTypeName": "선택형_속성",
	  "attributeValueName": "GREY"
	},
	{
	  "attributeTypeName": "사이즈",
	  "attributeValueName": "44"
	}],
	"contents": [{
	  "contentsType": "TEXT",
	  "contentDetails": [{
		"content": "<html><div></div><div><img src=http://www.babomall.com/bbsemarket/gimage/7005345_2014_04_09_10_02_25_111.jpg /><div></html>",
		"detailType": "TEXT"
	  }]
	}]
  },
{
	"itemName": "[Stchodo] 스쳐도 민트코코 빅에디션 버핑 55",
	"originalPrice": 13000,
	"salePrice": 10000,
	"maximumBuyCount": "9999",
	"maximumBuyForPerson": "0",
	"outboundShippingTimeDay": "2",
	"maximumBuyForPersonPeriod": "1",
	"unitCount": 1,
	"freePriceType": "NO_FREE_PRICE",
	"adultOnly": "EVERYONE",
	"taxType": "TAX",
	"parallelImported": "NOT_PARALLEL_IMPORTED",
	"overseasPurchased": "NOT_OVERSEAS_PURCHASED",
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
	  "vendorPath": "http://www.babomall.com/bbsemarket/shop/goods_bak/77900.jpg"
	}],
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
	  "attributeTypeName": "선택형_속성",
	  "attributeValueName": "RED"
	},
	{
	  "attributeTypeName": "사이즈",
	  "attributeValueName": "55"
	}],
	"contents": [{
	  "contentsType": "TEXT",
	  "contentDetails": [{
		"content": "<html><div></div><div><img src=http://www.babomall.com/bbsemarket/gimage/7005345_2014_04_09_10_02_25_111.jpg /><div></html>",
		"detailType": "TEXT"
	  }]
	}]
  }
],
  "requiredDocuments": [],
  "manufacture": "제조사"
}
';

print nl2br($strjson);

$curl = curl_init();        
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type:  application/json;charset=UTF-8", "Authorization:".$authorization)); 		
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $strjson);
$result = curl_exec($curl);
curl_close($curl);

echo($result);
?>
`,
  get: `
<?php
date_default_timezone_set("GMT+0");

$datetime = date("ymd").'T'.date("His").'Z';
$method = "GET";
$path = "/targets/wing/seller_api/apis/api/v1/marketplace/meta/categories";
$query = "categoryName=" . urlencode(원피스);

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
$url = 'https://api-gateway-it-ext.coupang.com'.$path.'?'.$query;

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
  put: `
<?php
date_default_timezone_set("GMT+0");

$datetime = date("ymd").'T'.date("His").'Z';
$method = "PUT";
$path = "/targets/wing/seller_api/apis/api/v1/marketplace/seller-products";

$message = $datetime.$method.$path;

//replace with your own accessKey
$ACCESS_KEY = "****";
//replace with your own secretKey
$SECRET_KEY = "****";
//replace with your own vendorId
$VENDOR_ID =  "****";
$algorithm = "HmacSHA256";

$signature = hash_hmac('sha256', $message, $SECRET_KEY);

$authorization  = "CEA algorithm=HmacSHA256, access-key=".$ACCESS_KEY.", signed-date=".$datetime.", signature=".$signature;

//replace prod url when you need
$url = 'https://api-gateway-it-ext.coupang.com'.$path;

$strjson='
{
  "sellerProductId":2402,	
  "displayCategoryCode": 3013,
  "sellerProductName": "테스트 상품 등록",
  "vendorId": "A00100542",
  "saleStartedAt": "2016-10-12T00:00:00",
  "saleEndedAt": "2099-01-01T23:59:59",
  "brand": "Stchodo",
  "deliveryMethod": "SEQUENCIAL",
  "deliveryCompanyCode": "HYUNDAI",
  "deliveryChargeType": "FREE_DELIVERY_OVER_9800",
  "deliveryCharge": "2500",
  "freeShipOverAmount": "9800",
  "deliveryChargeOnReturn": "0",
  "remoteAreaDeliverable": "N",
  "unionDeliveryType": "UNION_DELIVERY",
  "returnCenterCode": "1000005036",
  "returnChargeName": "대표이름4",
  "companyContactNumber": "02-1234-5678",
  "returnZipCode": "135-090",
  "returnAddress": "서울특별시 강남구 삼성동",
  "returnAddressDetail": "333",
  "returnCharge": 2500,
  "returnChargeVendor": "N",
  "afterServiceInformation": "A/S안내 1544-1255",
  "afterServiceContactNumber": "1544-1255",
  "outboundShippingPlaceCode": "43502",
  "vendorUserId": "3pmtest01",
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
	"freePriceType": "NO_FREE_PRICE",
	"adultOnly": "EVERYONE",
	"taxType": "TAX",
	"parallelImported": "NOT_PARALLEL_IMPORTED",
	"overseasPurchased": "NOT_OVERSEAS_PURCHASED",
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
	  "vendorPath": "http://www.babomall.com/bbsemarket/shop/goods_bak/77900.jpg"
	}],
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
	  "attributeTypeName": "선택형_속성",
	  "attributeValueName": "GREY"
	},
	{
	  "attributeTypeName": "사이즈",
	  "attributeValueName": "44"
	}],
	"contents": [{
	  "contentsType": "TEXT",
	  "contentDetails": [{
		"content": "<html><div></div><div><img src=http://www.babomall.com/bbsemarket/gimage/7005345_2014_04_09_10_02_25_111.jpg /><div></html>",
		"detailType": "TEXT"
	  }]
	}]
  },
{
	"itemName": "[Stchodo] 스쳐도 민트코코 빅에디션 버핑 55",
	"originalPrice": 13000,
	"salePrice": 10000,
	"maximumBuyCount": "9999",
	"maximumBuyForPerson": "0",
	"outboundShippingTimeDay": "2",
	"maximumBuyForPersonPeriod": "1",
	"unitCount": 1,
	"freePriceType": "NO_FREE_PRICE",
	"adultOnly": "EVERYONE",
	"taxType": "TAX",
	"parallelImported": "NOT_PARALLEL_IMPORTED",
	"overseasPurchased": "NOT_OVERSEAS_PURCHASED",
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
	  "vendorPath": "http://www.babomall.com/bbsemarket/shop/goods_bak/77900.jpg"
	}],
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
	  "attributeTypeName": "선택형_속성",
	  "attributeValueName": "RED"
	},
	{
	  "attributeTypeName": "사이즈",
	  "attributeValueName": "55"
	}],
	"contents": [{
	  "contentsType": "TEXT",
	  "contentDetails": [{
		"content": "<html><div></div><div><img src=http://www.babomall.com/bbsemarket/gimage/7005345_2014_04_09_10_02_25_111.jpg /><div></html>",
		"detailType": "TEXT"
	  }]
	}]
  }
],
  "requiredDocuments": [],
  "manufacture": "제조사"
}
';

print nl2br($strjson);

$curl = curl_init();        
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type:  application/json;charset=UTF-8", "Authorization:".$authorization,"X-EXTENDED-TIMEOUT:60000")); 		
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $strjson);
$result = curl_exec($curl);
curl_close($curl);

echo($result);
?>
`,
  patch: ``,
  delete: `
<?php
date_default_timezone_set("GMT+0");

$datetime = date("ymd").'T'.date("His").'Z';
$method = "DELETE";
$path = "/targets/wing/seller_api/apis/api/v1/marketplace/seller-products/2401";

$message = $datetime.$method.$path;

//replace with your own accessKey
$ACCESS_KEY = "****";
//replace with your own secretKey
$SECRET_KEY = "****";
//replace with your own vendorId
$VENDOR_ID =  "****";
$algorithm = "HmacSHA256";

$signature = hash_hmac('sha256', $message, $SECRET_KEY);

$authorization  = "CEA algorithm=HmacSHA256, access-key=".$ACCESS_KEY.", signed-date=".$datetime.", signature=".$signature;

//replace prod url when you need
$url = 'https://api-gateway-it-ext.coupang.com'.$path;

$curl = curl_init();        
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type:  application/json;charset=UTF-8", "Authorization:".$authorization)); 		
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $strjson);
$result = curl_exec($curl);
curl_close($curl);

echo($result);
?>
`
};
