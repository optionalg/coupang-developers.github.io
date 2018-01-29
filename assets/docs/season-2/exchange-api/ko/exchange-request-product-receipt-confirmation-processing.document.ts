export const exchangeRequestProductReceiptConfirmationProcessingDocument = {
  note: ``,
  
  //don't modify documentInfo
  documentInfo: {
    category: `exchange-api`,   // input category ex) exchange-service-api
    id: `exchange-request-product-receipt-confirmation-processing`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `exchange_request_product_receipt_confirmation_processing`,
    name: `교환요청상품 입고 확인처리`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `교환상품 접수 확인`,
      anchorId: ``,
    },
    
  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: `교환요청상품 입고 확인처리`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/exchange/receive-confirmations`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: `교환요청상품 입고 확인처리`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/exchangeRequests/{exchangeId}/receiveConfirmation`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-20`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Jamin`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `PATCH`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/exchangeRequests/{exchangeId}/receiveConfirmation`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/exchangeRequests/{exchangeId}/receiveConfirmation`,
    _description: `고객님이 반송한 상품을 접수한후 셀러는 이 API를 통해서 교환상품 접수 확인 상태로 변경합니다`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: false,
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `exchangeId`,
        type: `Number`,
        require: true,
        _description: `접수번호`,
        _relation: `exchangeId is from:GET /v2/providers/openapi/apis/api/v4/vendors/{vendorId}/exchangeRequests`,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `vendorId`,
        type: `String`,
        require: true,
        _description: `벤더아이디`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
    ]
  },
  errorSpec: false,
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `결과 코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `메시지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00013264/exchangeRequests/40362/receiveConfirmation`,
    code: [
      {
        language: `http`,
        codeblock: {
          "exchangeId": 40362,
          "vendorId": "A00013264"
        }
      }
    ],
    response: {
      "code": "200",
      "message": "SUCCESS",
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
