export const stopShippingCompleteProcessingDocument = {
  note: ``,
  
  //don't modify documentInfo
  documentInfo: {
    category: `stop-shipping-api`,   // input category ex) exchange-service-api
    id: `stop-shipping-complete-processing`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `stop_shipping_complete_processing`,
    name: `출고중지완료 처리`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: `draft`, // draft, candidate, release
    lastUpdateDate: `2017-02-17`, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: ``,
      anchorId: ``,
    },
    
  },
  
  apiInfo: {
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST `,
    path: `/v2/providers/wing_api/apis/internal-api/v1/return/{receiptId}/release-stop`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v1/return/{receiptId}/release-stop`,
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `receiptId`,
        require: true,
        _description: `접수 Id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `vendorId`,
        type: `String`,
        require: false,
        _description: `업체 Id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }, {
        name: `receiptId`,
        type: `Number`,
        require: false,
        _description: `접수 Id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }, {
        name: `cancelCount`,
        type: `Number`,
        require: false,
        _description: `출고 수량`,
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
      type: `String`,
      _description: `server response status info`,
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
      children: [{
        name: `resultCode`,
        type: `String`,
        _description: `SUCCESS/FAIL`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false,
      },
        {
          name: `resultMessage`,
          type: `String`,
          _description: ``,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        }]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v1/return/363667/release-stop`,
    code: [
      {
        language: `http`,
        codeblock: {
          "vendorId": "A00013264",
          "receiptId": 363667,
          "cancelCount": 2
        }
      }
    ],
    response: {
      "code": "200",
      "message": "OK",
      "data": {
        "resultCode": "SUCCESS",
        "resultMessage": "출고중지완료요청이 성공하였습니다"
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
  
}
