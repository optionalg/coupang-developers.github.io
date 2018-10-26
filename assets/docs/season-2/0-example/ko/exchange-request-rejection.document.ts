export const exchangeRequestRejection = {
  note: ``,
  documentInfo: {
    category: `example-api`,
    id: `example-six`,
    name: `exchange-request-rejection`,
    displayOrder: 999,
    documentState: `stable`,
    lastUpdateDate: `2016-12-13`,
    reflectionDate: ``
  },
  apiInfo: {
    state: `stable`,
    lastUpdateDate: `2016-12-13`,
    developer: `tracy`,
    domain: `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api`,
    httpMethod: `PUT`,
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
        _description: `The exchangeId which want to reject`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `exchangeId`,
        require: true,
        _description: `exchangeId`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false,
      },
      {
        name: `vendorId`,
        require: true,
        _description: `vendorId`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false,
      },
      {
        name: `exchangeRejectCode`,
        require: true,
        _description: `reject reason code`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: `Note : exchangeRejectCode can only input "SOLDOUT" or "WITHDRAW"
SOLDOUT : Can exchange but the item sold out
WITHDRAW :Exchange request was withdraw(requested by customer)`,
        children: false,
      },
    ]
  },
  errorSpec: [
    {
      status: 400,
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    }
  ],
  responseSpec: [
    // type : Number, String, Boolean, Object, Array,
    // these type is Standard for All language. have to follow
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
    endpoint: ``,
    code: [
      {
        language: `http`,
        codeblock: {
          "exchangeId": "100000070",
          "exchangeRejectCode": "SOLDOUT",
          "userId": "kimms@"
        }
      },
      {
        language: `python`,
        codeblock: {}
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
