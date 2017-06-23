export const returnRequestProductReceiptConfirmationProcessingDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `return-api`,   // input category ex) exchange-service-api
    id: `return-request-product-receipt-confirmation-processing`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `return_request_product_receipt_confirmation_processing`,
    name: `반품상품 입고 확인처리`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `입고확인 처리`,
      anchorId: ``,
    },

  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: `입고확인 처리`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/return/{receiptId}/check`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: `반품상품 입고 확인처리`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnRequests/{receiptId}/receiveConfirmation`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-2-10`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnRequests/{receiptId}/receiveConfirmation`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnRequests/{receiptId}/receiveConfirmation`,
    _description: `입고확인 처리`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `vendor ID`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
      },
      {
        name: `receiptId`,
        require: true,
        _description: `접수번호`,
        _relation: `ReceiptId is from relational api: GET /v4/vendors/{vendorId}/returnRequests`,
        _referenceInfo: ``,
        _warning: `ReceiptId must be a number.`
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `vendorId`,
        type: `String`,
        require: true,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `receiptId`,
        type: `Number`,
        require: true,
        _description: `접수번호`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }
    ]
  },
  errorSpec:false,
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `Http request status code`,
      _relation: ``,
      _referenceInfo: `Example: 200, 400, 500`,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `성공 혹은 실패시 해당 결과메시지가 나타남`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Object`,
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false
    }
  ],
  sample: {
    endpoint:'https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00013264/returnRequests/363585/receiveConfirmation',
    code: [
      {
        language: `http`,
        codeblock: {
          "vendorId" : "A00013264",
          "receiptId" : 363585
        }
      }
    ],
    response: {
      "code": "200",
      "message": "OK"
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
