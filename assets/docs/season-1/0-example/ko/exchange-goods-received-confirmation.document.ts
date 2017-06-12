export const exchangeGoodsReceivedConfirmationDocument = {
  note: ``,
  documentInfo: {
    category: `example-api`,
    id: `example-five`,
    name: `exchange goods received confirmation`,
    displayOrder: 999,
    documentState: `release`,
    lastUpdateDate: `2016-12-23`,
    reflectionDate: ``
  },
  apiInfo: {
    state: `release`,
    lastUpdateDate: `2016-12-23`,
    developer: `Jamin`,
    domain: `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/`,
    httpMethod: `POST`,
    path: `/v1/exchange/receive-confirmations`,
    HMACPath: `/v1/exchange/receive-confirmations`,
    _description: `Seller use this API to confirm that they have received the exchange product which are sent by customer.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: false,
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `receiptId`,
        require: true,
        _description: `receiptId`,
        _relation: `GET /v2/providers/wing_api/apis/internal-api/v1/exchange/inquiries (exchangeId)`,
        _referenceInfo: ``,
        _warning: `required`,
        children: false
      },
      {
        name: `vendorId`,
        require: true,
        _description: `vendorId`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
    ]
  },
  errorSpec: [
    {
      status: 400,
      _description: `fail`,
      _relation: ``,
      _referenceInfo: `
     <table>
        <tr>
          <th>400:params are not allowed null...</th>
          <th>400:params's vendorId not equals gateway's vendorId!</th>
          <th>417:Exception...</th>
       </tr>
     <table>`,
      _warning: ``
    },
    {
      status: 200,
      _description: `success`,
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
      _referenceInfo: `http request return status code`,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `detail info`,
      _relation: ``,
      _referenceInfo: `http request return status message`,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Object`,
      _description: ``,
      _relation: ``,
      _referenceInfo: `http request return result(contain result code and message)`,
      _warning: ``,
      children: [
        {
          name: `resultCode`,
          type: `String`,
          _description: `SUCCESS or FAIL`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `resultMessage`,
          type: `String`,
          _description: `Result message for the exchange reject request`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
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
          
          "receiptId": "40362",
          "vendorId": "A00010028"
          
        }
      }
    ],
    response: {
      "code": "200",
      "message": "SUCCESS",
      "data": {
        "resultCode": "SUCCESS",
        "resultMessage": "ReturnDelivery Done successfully,receiptId:40362"
      }
      
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
