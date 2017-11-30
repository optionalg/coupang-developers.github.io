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
      name: `교환요청 거부`,
      anchorId: ``,
    },

  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: `교환요청 거부 처리`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/exchange/{exchangeId}/rejections`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: `교환요청 거부 처리`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/exchangeRequests/{exchangeId}/rejection`,
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
    developer: `Tracy`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `PATCH`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/exchangeRequests/{exchangeId}/rejection`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/exchangeRequests/{exchangeId}/rejection`,
    _description: `셀러는 이 API를 사용하여 고객님이 제기한 교환요청을 거부 할 수 있습니다.<br>
                   거부조건:<ul>
                          <li>1. 교환상품이 매진된 상태일 경우</li>
                          <li>2. 고객이 교환요청을 철회한 경우</li>
                          </ul>`,
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
        _relation: `The exchangeId is from:GET /v2/providers/openapi/apis/api/v4/vendors/{vendorId}/exchangeRequests`,
        _referenceInfo: ``,
        _warning: ``
      },
      {
        name: `vendorId`,
        require: true,
        _description: `vendor id`,
        _relation: ``,
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
        _description: `교환Id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false,
      },
      {
        name: `vendorId`,
        type: `String`,
        require: true,
        _description: `교환Id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false,
      },
      {
        name: `exchangeRejectCode`,
        type: `String`,
        require: true,
        _description: `거절원인코드`,
        _relation: ``,
        _referenceInfo: `노트: 교환거절코드는"SOLDOUT" 또는 "WITHDRAW"만 입력할 수 있습니다
                         <ul>
                          <li>SOLDOUT : 교환할수있지만 아이템이 매진되였습니다.</li>
                          <li>WITHDRAW :교환요청이 철회되였습니다 (고객님이 요청함)</li>
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
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/exchangeRequests/{exchangeId}/rejection`,
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
