export const paymentCompleteRefundDocument = {
  note: ``,
  
  //don't modify documentInfo
  documentInfo: {
    category: `cancel-api`,   // input category ex) exchange-service-api
    id: `payment-complete-refund`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `payment_complete_refund`,
    name: `결제완료건 환불 처리`,       // use display name, i will change 'translation key'
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
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/orders/{orderId}/refunds`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/orders/{orderId}/refunds`,
    _description: `결제완료 상태의 주문건을 취소한다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `<br/>결제완료 상태의 주문에만 적용가능합니다.(나머지 상태에 적용 시 에러 발생)<br/>
                    결제완료건 환불 처리 API 사용은 판매자점수(주문이행)를 하락시키게 됩니다.`,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `업체 ID`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
      {
        name: `orderId`,
        require: true,
        _description: `주문 번호`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `orderId`,
        type: `Number`,
        require: true,
        _description: `주문 번호`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `vendorItemIds`,
        type: `Array`,
        require: true,
        _description: `취소할 상품의 vendorItemId 배열`,
        _relation: ``,
        _referenceInfo: `receiptCounts 와 쌍으로 입력`,
        _warning: ``,
        children: false
      },
      {
        name: `receiptCounts`,
        type: `Array`,
        require: true,
        _description: `취소할 상품 개수 배열, 값은 항상 0보다 큼`,
        _relation: ``,
        _referenceInfo: `vendorItemIds 와 쌍으로 입력`,
        _warning: ``,
        children: false
      },
      {
        name: `bigCancelCode`,
        type: `String`,
        require: true,
        _description: `결제완료 상품취소 사유 중 대분류 사유 코드`,
        _relation: ``,
        _referenceInfo: `CANERR`,
        _warning: ``,
        children: false
      },
      {
        name: `middleCancelCode`,
        type: `String`,
        require: true,
        _description: `결제완료 상품취소 사유 중 중분류 사유 코드`,
        _relation: ``,
        _referenceInfo: `
          <ul>
            <li>CCTTER // 재고 연동 오류 : 재고 문제로 취소가 발생하는 경우</li>
            <li>CCPNER // 제휴사이트 오류 : 주소 문제로 고객 배송지 생성 불가시 취소 되는 오류</li>
            <li>CCPRER // 가격등재오류 : 양사간 상품 가격오류 발생시 취소 되는 오류</li>
          </ul>`,
        _warning: ``,
        children: false
      },
      {
        name: `vendorId`,
        type: `String`,
        require: true,
        _description: `업체 ID, path variable로도 입력`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `userId`,
        type: `String`,
        require: true,
        _description: `업체의 쿠팡 Wing로그인 ID`,
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
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `success`,
          type: `Boolean`,
          _description: `성공여부`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `cancelIds`,
          type: `Array`,
          _description: `취소 ID 배열`,
          _relation: ``,
          _referenceInfo: ``,
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
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00123456/orders/28000005778875/refunds`,
    code: [
      {
        language: `http`,
        codeblock: {
          "orderId": 28000005778875,
          "vendorItemIds": [3124304579, 3124304580],
          "receiptCounts": [1, 2],
          "bigCancelCode": "CANERR",
          "middleCancelCode": "CCTTER",
          "vendorId": "A00123456",
          "userId": "et5"
        }
      }
    ],
    response: {
      "code": "200",
      "message": "",
      "data": {
        "success": true,
        "cancelIds": [
          1234
        ],
        "resultMessage": "주문 강제 취소 처리를 완료하였습니다."
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
