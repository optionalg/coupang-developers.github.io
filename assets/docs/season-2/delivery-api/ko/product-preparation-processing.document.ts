export const productPreparationProcessingDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `delivery-api`,   // input category ex) exchange-service-api
    id: `product-preparation-processing`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `product_preparation_processing`,
    name: `상품준비중 처리`,       // use display name, i will change 'translation key'
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
    lastUpdateDate: `2017-02-09`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `PATCH`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/ordersheets/acknowledgement`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/ordersheets/acknowledgement`,
    _description: `ordersheet의 상태를 "상품준비중" 상태로 변경한다.
                   상태변경을 요청한 ordersheet 중 취소건이 있으면 Partial Error를 리턴한다.<br/>
                   ※ 전체 결제 취소 또는 부분 결제 취소를 통해 환불이 진행중인 주문이 포함되어 있다면 해당 주문에 대해서는
                   "배송상태를 변경할 수 없습니다. 주문내역을 확인해주세요." 메세지가 반환됩니다.<br>
                   환불이 완료된 시점에 취소 요청 상품 이외의 상품이 포함된 주문은 상품준비중으로 변경 가능합니다.` ,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `<br/>결제완료 단계의 shipmentBoxIds에 대해서만 적용이 가능합니다.<br/>
                    shipmentBoxIds 크기가 클 경우 처리시 타임아웃 에러가 발생할 수 있으니 50개 이하로 제한을 권장드립니다.<br/>
                   <br/>결제완료 상태에서 고객이 배송지를 변경할 수 있기 때문에 <br/>
                   상품준비중 처리 이후에 꼭! 발주서 단건 조회를 통해 배송지 정보가 
                   변경되었는지 확인 및 업데이트를 해 주셔야 합니다.`,
  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: `상품준비중 처리`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/ordersheets/check`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: ``,
        path: ``,
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
        name: `vendorId`,
        require: true,
        _description: `업체 Id`,
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
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `shipmentBoxIds`,
        type: `Array`,
        require: true,
        _description: `상품준비중 상태로 변경할 대상 목록`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }
    ]
  },
  errorSpec: [
    {
      status: 200,
      _description: `responseCode:99, resultMessage:배송상태를 변경할 수 없습니다. 주문내역을 확인해주세요.    
    	  (전체 결제 취소 또는 부분 결제 취소를 통해 환불이 진행중인 주문이 포함되어 있다면 해당 주문에 대해서는 "배송상태를 변경할 수 없습니다. 주문내역을 확인해주세요." 메세지가 반환됩니다.
    	  환불이 완료된 시점에 취소 요청 상품 이외의 상품이 포함된 주문은 상품준비중으로 변경 가능합니다.)
    	  `,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    }
],
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `서버 응답 코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `서버 응답 메세지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `OrderSheetResponse`,
      _description: `ordersheet 상태변경 api 호출 결과 객체`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [{
        name: `responseKey`,
        type: `Number`,
        _description: `request에 대한 구분값`,
        _relation: ``,
        _referenceInfo: `시스템 메타 데이터`,
        _warning: ``,
        children: false
      }, {
        name: `responseCode`,
        type: `Number`,
        _description: `request 전체결과값에 대한 상태코드`,
        _relation: ``,
        _referenceInfo: `<table class="table">
        <tr>
          <th>Code</th>
          <th>Message</th>
        </tr>
        <tr>
          <td>-1</td>
          <td>None</td>
        </tr>
        <tr>
          <td>0</td>
          <td>All succeeded.</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Partial errors.</td>
        </tr>
        <tr>
          <td>99</td>
          <td>All Failed.</td>
        </tr>
        </table>`,
        _warning: ``,
        children: false
      }, {
        name: `responseMessage`,
        type: `String`,
        _description: `request 전체결과값에 대한 상태메세지`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }, {
        name: `responseList`,
        type: `Array`,
        _description: `개별 건에 대한 결과셋`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [{
          name: `shipmentBoxId`,
          type: `Number`,
          _description: `배송번호`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        }, {
          name: `succeed`,
          type: `Boolean`,
          _description: `성공여부`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        }, {
          name: `resultCode`,
          type: `String`,
          _description: `결과코드`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        }, {
          name: `resultMessage`,
          type: `String`,
          _description: `결과메세지`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        }, {
          name: `retryRequired`,
          type: `Boolean`,
          _description: `retry 가능 여부`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        }]
      }]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00123456/ordersheets/acknowledgement`,
    code: [
      {
        language: `http`,
        codeblock: {
          "vendorId": "A00123456",
          "shipmentBoxIds": [1234719731, 1234719732]
        }
      }
    ],
    response: {
      "code": "200",
      "message": "OK",
      "data": {
        "responseKey": -7326489997410939972,
        "responseCode": 1,
        "responseMessage": "apply instructStatus result - Partial errors.",
        "responseList": [
          {
            "shipmentBoxId": 102391542,
            "succeed": true,
            "resultCode": "OK",
            "retryRequired": false,
            "resultMessage": "request succeeded."
          },
          {
            "shipmentBoxId": 102391599,
            "succeed": false,
            "resultCode": "NOT_FOUND_SHIPMENT_BOX",
            "retryRequired": true,
            "resultMessage": "shipmentBoxId (102391599) is not found."
          }
        ]
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
