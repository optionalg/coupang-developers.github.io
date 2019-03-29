export const aspExample = {
  post: `
<%@ Language="VBScript" %>

<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        
        <title>Classic ASP RESTful API Client Post Example</title>
    </head>
    <body>
        <!--#include file="json.asp"--> 
        <!--#include file="hmac.asp"-->
        <!--#include file="buildQuery.asp"--> 
        <%

            'Remote JSON Request
            dim url, path, method, params
            dim access_key, secret_key, vendorId
            dim authorization
            dim strjson
            
            access_key = "****"
            secret_key = "****"
            vendorId = "A*******"

            path = "/v2/providers/openapi/apis/api/v4/vendors/" & vendorId & "/returnShippingCenters"
            url = "https://api-gateway.coupang.com" & path
            method = "POST"
            response.write params & "<br/>"
            
            response.write method & path & "<br/>"

            authorization = generateHmac(path, method, params, access_key, secret_key)

            response.write authorization
            response.write "<br/>"

            strjson = "{  ""userId"": ""coupang20"",  ""vendorId"": ""A*******"",  "
            strjson = strjson & " ""shippingPlaceName"": ""tes789020"", "
            strjson = strjson & " ""goodsflowInfoOpenApiDto"": {    ""deliverCode"": ""DONGBU"",    "
            strjson = strjson & " ""contractNumber"": ""85500067"",    ""contractCustomerNumber"": ""1231299920"", " 
            strjson = strjson & " ""vendorCreditFee05kg"": ""2500"",    ""vendorCreditFee10kg"": ""2500"",   "
            strjson = strjson & " ""vendorCreditFee20kg"": ""2500"",    ""vendorCashFee05kg"": ""2500"",  "
            strjson = strjson & " ""vendorCashFee10kg"": ""2500"",    ""vendorCashFee20kg"": ""2500"", " 
            strjson = strjson & " ""consumerCashFee05kg"": ""2500"",    ""consumerCashFee10kg"": ""2500"",   "
            strjson = strjson & " ""consumerCashFee20kg"": ""2500"",    ""returnFee05kg"": ""2500"",   "
            strjson = strjson & " ""returnFee10kg"": ""2500"",    ""returnFee20kg"": ""2500""  },  "
            strjson = strjson & " ""placeAddresses"": [    {      ""addressType"": ""JIBUN"",    "  
            strjson = strjson & " ""companyContactNumber"": ""02-1234-5678"",      ""phoneNumber2"": """",     "
            strjson = strjson & " ""returnZipCode"": ""112207"",      ""returnAddress"": ""경기도 파주시 탄현면 월롱산로"", "
            strjson = strjson & " ""returnAddressDetail"": ""294-58""    },    {      ""addressType"": ""ROADNAME"",  "
            strjson = strjson & " ""companyContactNumber"": ""02-1234-5678"",      ""phoneNumber2"": """",    "
            strjson = strjson & " ""returnZipCode"": ""112207"",      ""returnAddress"": ""경기도 파주시 탄현면 월롱산로"", "
            strjson = strjson & " ""returnAddressDetail"": ""294-58""    }  ]}"
        

            set req = Server.CreateObject("MSXML2.ServerXMLHTTP")
            req.open method, url & "?" & params, false
            req.setRequestHeader "Authorization", authorization
            req.setRequestHeader "X-Requested-By", vendorId
            req.send strjson

' ---------------------------------------------------------------------------

            dim myJSON
            set myJSON = JSON.parse(req.responseText)

            response.write req.status
            response.write "<br/>"
            response.write myJSON.message
            response.write "<br/>"

            response.write req.responseText

        %>
    </body>
</html>
`,
  get: `
<%@ Language="VBScript" %>

<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        
        <title>Classic ASP RESTful API Client Get Example</title>
    </head>
    <body>
        <!--#include file="json.asp"--> 
        <!--#include file="hmac.asp"-->
        <!--#include file="buildQuery.asp"--> 
        <%

            'Remote JSON Request
            dim url, path, method, params
            dim access_key, secret_key, vendorId
            dim authorization
            
            access_key = "****"
            secret_key = "****"
            vendorId = "A*******"

            set hash = CreateObject ("Scripting.Dictionary")
            hash.add "categoryName", "원피스"

            path = "/v2/providers/seller_api/apis/api/v1/marketplace/meta/categories"
            url = "https://api-gateway.coupang.com" & path
            method = "GET"
            httpBuildQuery hash.Keys, hash.Items, hash.Count, params

            response.write params & "<br/>"
            
            response.write method & path & "<br/>"

            authorization = generateHmac(path, method, params, access_key, secret_key)

            response.write authorization
            response.write "<br/>"

            set req = Server.CreateObject("MSXML2.ServerXMLHTTP")
            req.open method, url & "?" & params, false
            req.setRequestHeader "Authorization", authorization
            req.setRequestHeader "X-Requested-By", vendorId
            req.send ""

' ---------------------------------------------------------------------------

            dim myJSON
            set myJSON = JSON.parse(req.responseText)

            response.write req.status
            response.write "<br/>"
            response.write myJSON.message
            response.write "<br/>"

            response.write req.responseText

        %>
    </body>
</html>
`,
  put: `
<%@ Language="VBScript" %>

<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        
        <title>Classic ASP RESTful API Client Put Example</title>
    </head>
    <body>
        <!--#include file="json.asp"--> 
        <!--#include file="hmac.asp"-->
        <!--#include file="buildQuery.asp"--> 
        <%

            'Remote JSON Request
            dim url, path, method, params
            dim access_key, secret_key, vendorId, returnCenterCode
            dim authorization
            dim strjson
            
            access_key = "****"
            secret_key = "****"
            vendorId = "A*******"
            returnCenterCode = "1**********"
            path = "/v2/providers/openapi/apis/api/v4/vendors/" & vendorId & "/returnShippingCenters/" & returnCenterCode
            url = "https://api-gateway.coupang.com" & path
            method = "PUT"
            response.write params & "<br/>"
            
            response.write method & path & "<br/>"

            authorization = generateHmac(path, method, params, access_key, secret_key)

            response.write authorization
            response.write "<br/>"

            strjson = "{  ""vendorId"": ""A*******"",  ""returnCenterCode"": ""1000461782"",  ""shippingPlaceName"": "
            strjson = strjson & " ""almong_classic_asp_test"",  ""userId"": ""test@1"",  ""placeAddresses"": [    {  "
            strjson = strjson & " ""addressType"": ""JIBUN"",      ""companyContactNumber"": ""1234-2345-6666"",    "
            strjson = strjson & " ""phoneNumber2"": ""0120-2345-6666"",      ""returnZipCode"": ""10516"",    "
            strjson = strjson & " ""returnAddress"": ""경기도 파주시 탄현면 월롱산로 294-58 ()"", ""returnAddressDetail"": " 
            strjson = strjson & " ""경기도 파주시 탄현면 금승리 "" }  ],  ""goodsflowInfoOpenApiDto"": { "
            strjson = strjson & " ""vendorCreditFee05kg"": ""1"",    ""vendorCreditFee10kg"": ""1"",  "
            strjson = strjson & " ""vendorCreditFee20kg"": ""1"",    ""vendorCashFee05kg"": ""1"",  "
            strjson = strjson & " ""vendorCashFee10kg"": ""2"",    ""vendorCashFee20kg"": ""2"",  "
            strjson = strjson & " ""consumerCashFee05kg"": ""2"",    ""consumerCashFee10kg"": ""2"",  "
            strjson = strjson & " ""consumerCashFee20kg"": ""3"",    ""returnFee05kg"": ""1"",  "
            strjson = strjson & " ""returnFee10kg"": ""2"",    ""returnFee20kg"": ""3""  }}"
        

            set req = Server.CreateObject("MSXML2.ServerXMLHTTP")
            req.open method, url & "?" & params, false
            req.setRequestHeader "Authorization", authorization
            req.setRequestHeader "X-Requested-By", vendorId
            req.send strjson

' ---------------------------------------------------------------------------

            dim myJSON
            set myJSON = JSON.parse(req.responseText)

            response.write req.status
            response.write "<br/>"
            response.write myJSON.message
            response.write "<br/>"

            response.write req.responseText

        %>
    </body>
</html>
`,
  patch: ``,
  delete: `
<%@ Language="VBScript" %>

<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=euc-kr">
        
        <title>Classic ASP RESTful API Client Delete Example</title>
    </head>
    <body>
        <!--#include file="json.asp"--> 
        <!--#include file="hmac.asp"-->
        <!--#include file="buildQuery.asp"--> 
        <%

            'Remote JSON Request
            dim url, path, method, params
            dim access_key, secret_key, vendorId, sellerProductId
            dim authorization
            
            access_key = "****"
            secret_key = "****"
            vendorId = "A*******"
            sellerProductId = "5*******4"

            path = "/v2/providers/seller_api/apis/api/v1/marketplace/seller-products/" & sellerProductId
            url = "https://api-gateway.coupang.com" & path
            method = "DELETE"

            response.write params & "<br/>"
            
            response.write method & path & "<br/>"

            authorization = generateHmac(path, method, params, access_key, secret_key)

            response.write authorization
            response.write "<br/>"

            set req = Server.CreateObject("MSXML2.ServerXMLHTTP")
            req.open method, url & "?" & params, false
            req.setRequestHeader "Authorization", authorization
            req.setRequestHeader "X-Requested-By", vendorId
            req.send ""

' ---------------------------------------------------------------------------

            dim myJSON
            set myJSON = JSON.parse(req.responseText)

            response.write req.status
            response.write "<br/>"
            response.write myJSON.message
            response.write "<br/>"

            response.write req.responseText

        %>
    </body>
</html>
`
};
