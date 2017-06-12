export const createReturnProductCoupangConfirmRequestDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `return-product-coupang-confirm-api`,   // input category ex) exchange-service-api
    id: `create-return-product-coupang-confirm-request`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `create_return_product_coupang_confirm_request`,
    name: `반품상품 쿠팡확인요청 생성`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `쿠팡확인요청 요청`,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-16`, // yyyy-mm-dd  ex> 2016-12-23
    developer: ``,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/wing_api/apis/internal-api/v1/return/{receiptId}/coupang-confirm`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v1/return/{receiptId}/coupang-confirm`,
    _description: `<lu>
      <li>반품건에 이상이 있을시 쿠팡에 확인 요청</li>
      <li>이미 해당 receiptId로 접수된 쿠팡확인요청이 있을시 Error를 리턴</li>
      <li>부족배송비/쿠팡확인요청 사유 중 한가지는 반드시 입력 필수</li>
      </lu>`,
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
      },
      {
        name: `requestType`,
        type: `String`,
        require: true,
        _description: `요청 사유
                       lackDeliveryPrice와 requestType 둘중 하나는 반드시 입력해야함`,
        _relation: ``,
        _referenceInfo: `
        requestType
          <ul>
            <li>QTY</li>
            <li>DAMAGE</li>
            <li>COMPONENT</li>
          </ul>`,
        _warning: ``,
        children: false
      },
      {
        name: `lackDeliveryPrice`,
        type: `Number`,
        require: true,
        _description: `부족배송비`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `coupangConfirmReturnItemDtoMap`,
        type: `Object`,
        require: false,
        _description: `Map<Long, CoupangConfirmReturnItemDto>,상품별 반품 접수 수량, 업체 확인 정상수량`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: 'vendorItemId',
            type: 'Number',
            _description: ``,
            _relation: ``,
            _referenceInfo: `key`,
            _warning: ``,
            children: [
              {
                name: `vendorItemId`,
                type: `Number`,
                require: true,
                _description: `상품ID`,
                _relation: `VendorItemId is from:GET /v2/providers/wing_api/apis/internal-api/v1/return`,
                _referenceInfo: ``,
                _warning: ``,
                children: false,
              },
              {
                name: `receiptItemQuantity`,
                type: `Number`,
                require: true,
                _description: `반품 접수 수량`,
                _relation: ``,
                _referenceInfo: `If you choose the confirmType="quantity", this is mandatory`,
                _warning: ``,
                children: false,
              },
              {
                name: `confirmItemQuantity`,
                type: `Number`,
                require: true,
                _description: `업체 확인 정상수량`,
                _relation: ``,
                _referenceInfo: `QTY(수량이상/일부이상)로 접수할 경우에만 유효`,
                _warning: ``,
                children: false,
              }
            ]
          }
        ]
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
    endpoint:`https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v1/return/359606/coupang-confirm`,
    code: [
      {
        language: `http`,
        codeblock: {
          "vendorId": "A00052234",
          "receiptId": 359606,
          "requestType": "QTY",
          "lackDeliveryPrice": 1000,
          "coupangConfirmReturnItemDtoMap":
          {
            "28283699":
            {
              "vendorItemId": 28283699,
              "receiptItemQuantity": 1,
              "confirmItemQuantity": 1
            },
            "28283702":
            {
              "vendorItemId": 28283702,
              "receiptItemQuantity": 1,
              "confirmItemQuantity": 0
            }
          }
        }
      }
    ],
    response: {
      "code": "200",
      "message": "OK",
      "data": {
        "resultCode": "SUCCESS",
        "resultMessage": "쿠팡확인요청이 성공하였습니다"
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
