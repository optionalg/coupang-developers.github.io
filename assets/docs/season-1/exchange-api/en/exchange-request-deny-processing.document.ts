export const exchangeRequestDenyProcessingDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `exchange-api`,   // input category ex) exchange-service-api
    id: `exchange-request-deny-processing`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `exchange_request_deny_processing`,
    name: `교환요청 거부 처리`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: ``,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-20`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Tracy`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/wing_api/apis/internal-api/v1/exchange/{exchangeId}/rejections`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v1/exchange/{exchangeId}/rejections`,
    _description: `Seller use this API to reject the exchange request raised by customer. Reject condition : 1. Exchange product sold out; 2. Customer withdraw exchange request.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `exchangeId`,
        require: true,
        _description: `벤더가 교환에 관한 쿠팡 확인 요청을 생성하려는 교환번호`,
        _relation: `The exchangeId is from:GET /v2/providers/wing_api/apis/internal-api/v1/exchange/inquiries`,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `exchangeId`,
        type: `Number`,
        require: true,
        _description: `exchangeId`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false,
      },
      {
        name: `vendorId`,
        type: `String`,
        require: true,
        _description: `vendorId`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false,
      },
      {
        name: `exchangeRejectCode`,
        type: `String`,
        require: true,
        _description: `reject reason code`,
        _relation: ``,
        _referenceInfo: `Note:exchangeRejectCode can only input "SOLDOUT" or "WITHDRAW
                         <ul>
                          <li>SOLDOUT : Can exchange but the item sold out</li>
                          <li>WITHDRAW :Exchange request was withdraw(requested by customer)</li>
                         </ul>`,
        _warning: ``,
        children: false,
      },
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
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `resultCode`,
          type: `String`,
          _description: `SUCCESS or FAIL`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `resultMessage`,
          type: `String`,
          _description: `Result message for the exchange reject request`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        }
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v1/exchange/100000070/rejections`,
    code: [
      {
        language: `http`,
        codeblock: {
          "exchangeId":"100000070",
          "exchangeRejectCode":"SOLDOUT",
          "userId":"kimms@"
        }
      }
    ],
    response: {
      "code": "200",
      "message": "SUCCESS",
      "data": {
        "resultCode": "SUCCESS",
        "resultMessage": "요청 처리완료"
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
