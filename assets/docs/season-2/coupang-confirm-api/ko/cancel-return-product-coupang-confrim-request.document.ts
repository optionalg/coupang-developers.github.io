export const cancelReturnProductCoupangConfirmRequestDocument = {
  note: ``,

  // don't modify documentInfo
  documentInfo: {
    category: `return-product-coupang-confirm-api`,   // input category ex) exchange-service-api
    id: `cancel-return-product-coupang-confirm-request`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `cancel_return_product_coupang_confirm_request`,
    name: `반품상품 쿠팡확인요청 취소`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `쿠팡확인요청 철회`,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-16`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `DELETE`,
    path: `/v2/providers/wing_api/apis/internal-api/v1/return/{receiptId}/coupang-confirm`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v1/return/{receiptId}/coupang-confirm`,
    _description: `기존에 접수한 쿠팡확인요청을 취소`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `receiptId`,
        require: true,
        _description: `쿠팡에 확인요청할 반품접수번호`,
        _relation: `The receiptId is from:GET /v2/providers/wing_api/apis/internal-api/v1/return`,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `vendorId`,
        type: `String`,
        require: true,
        _description: `쿠팡에 등록된 업체 아이디`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `receiptId`,
        type: `Number`,
        require: true,
        _description: `쿠팡에 확인요청할 반품접수번호`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }
    ]
  },
  errorSpec: false,
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `server response status code`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `detail info`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Object`,
      _description: `http request return result(contain result code and message)`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `resultCode`,
          type: `String`,
          _description: `SUCCESS or FAIL`,
          _relation: ``,
          _referenceInfo: `결과코드`,
          _warning: ``,
          children: false
        },
        {
          name: `resultMessage`,
          type: `String`,
          _description: `결과메세지`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        }
      ]
    }
  ],
  sample: {
    endpoint:`https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v1/return/363365/coupang-confirm`,
    code: [
      {
        language: `http`,
        codeblock: {
          "vendorId": "A00013264",
          "receiptId": 363365
        }
      }
    ],
    response: {
      "code": "200",
      "message": "OK",
      "data": {
        "resultCode": "SUCCESS",
        "resultMessage": "쿠팡확인요청 철회가 성공하였습니다"
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
