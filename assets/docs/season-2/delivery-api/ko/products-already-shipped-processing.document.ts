export const productAlreadyShippedProcessingDocument = {
  note: ``,
  
  //don't modify documentInfo
  documentInfo: {
    category: `stop-shipping-api`,   // input category ex) exchange-service-api
    id: `products-already-shipped-processing`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `products_already_shipped_processing`,
    name: `이미출고 처리`,       // use display name, i will change 'translation key'
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
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-17`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `PATCH`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnRequests/{receiptId}/completedShipment`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnRequests/{receiptId}/completedShipment`,
    _description: `반품요청목록 조회 시 취소진행 상태가 출고중지요청(RELEASE_STOP_UNCHECKED) 일 경우에 사용가능합니다. <br/>
이미 상품을 발송한 상태일 때 사용합니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `<br/>출고중지요청에도 불구하고 상품을 출고했다면 왕복 반품 배송비는 판매자의 귀책입니다.`,
  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: `이미출고 처리`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/return/{receiptId}/release-stop`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: `이미출고 처리`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnRequests/{receiptId}/completedShipment`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
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
      },
      {
        name: `vendorId`,
        require: true,
        _description: `vendor Id`,
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
        name: `deliveryCompanyCode`,
        type: `String`,
        require: false,
        _description: `택배사 코드`,
        _relation: ``,
        _referenceInfo: `<a href="../../docs/season-2/distribution-center-api#lookup_delivery_code">택배사 코드 바로가기</a>`,
        _warning: ``,
        children: false
      }, {
        name: `invoiceNumber`,
        type: `String`,
        require: false,
        _description: `송장번호`,
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
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnRequests/{receiptId}/completedShipment`,
    code: [
      {
        language: `http`,
        codeblock: {
          "vendorId": "TESTVENDORID",
          "receiptId": 12346897,
          "deliveryCompanyCode": "KDEXP",
          "invoiceNumber": "70432743577"
        }
      }
    ],
    response: {
      "data": {
        "code": "200",
        "message": "OK",
        "resultCode": "SUCCESS",
        "resultMessage": "이미출고 상태변경이 성공하였습니다."
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
