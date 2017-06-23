export const lookupReturnProductCoupangConfirmDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `return-product-coupang-confirm-api`,   // input category ex) exchange-service-api
    id: `lookup-return-product-coupang-confirm`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_return_product_coupang_confirm`,
    name: `반품상품 쿠팡확인요청 단건조회`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `쿠팡확인요청 단건 조회`,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-16`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/wing_api/apis/internal-api/v1/return/{receiptId}/coupang-confirm`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v1/return/{receiptId}/coupang-confirm`,
    _description: `기존에 접수한 쿠팡확인요청의 상세 내용을 조회한다`,
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
    bodyParameters: false
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
      _description: `CoupangConfirmViewDto`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `lackDeliveryPriceAcceptable`,
          type: `Boolean`,
          _description: `부족배송비입력가능여부`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `avaliableMaxLackDeliveryPrice`,
          type: `Number`,
          _description: `최대 입력가능한 부족배송비`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `coupangConfirmDto`,
          type: `Object`,
          _description: `CoupangConfirmDto`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `vendorId`,
              type: `String`,
              _description: `업체ID`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `receiptId`,
              type: `Number`,
              _description: `반품접수번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `requestType`,
              type: `String`,
              _description: `쿠팡확인요청사유 타입`,
              _relation: ``,
              _referenceInfo: `
                  requestType
                <ul>
                  <li>QTY</li>
                  <li>DAMAGE</li>
                  <li>COMPONENT</li>
                </ul>
                `,
              _warning: ``,
              children: false
            },
            {
              name: `requestTypeDesc`,
              type: `String`,
              _description: `쿠팡확인요청사유 타입 description`,
              _relation: ``,
              _referenceInfo: `
                  requestTypeDesc
                <ul>
                  <li>수량부족</li>
                  <li>상품파손</li>
                  <li>구성품이상</li>
                </ul>
            `,
              _warning: ``,
              children: false
            },
            {
              name: `lackDeliveryPrice`,
              type: `Number`,
              _description: `부족배송비`,
              _relation: ``,
              _referenceInfo: `requestType/lackDeliveryPrice 둘중 하나 필수`,
              _warning: ``,
              children: false
            },
            {
              name: `coupangConfirmReturnItemDtoMap`,
              type: `Object(Map)`,
              _description: `it will be return all coupang confirm request info using Map Style`,
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
                      _description: `vendorItem id`,
                      _relation: ``,
                      _referenceInfo: ``,
                      _warning: ``,
                      children: false
                    },
                    {
                      name: `receiptItemQuantity`,
                      type: `Number`,
                      _description: `반품 접수된 수량`,
                      _relation: ``,
                      _referenceInfo: ``,
                      _warning: ``,
                      children: false
                    },
                    {
                      name: `confirmItemQuantity`,
                      type: `Number`,
                      _description: `업체 정상 확인 수량`,
                      _relation: ``,
                      _referenceInfo: `QTY로 접수시 필수`,
                      _warning: ``,
                      children: false
                    }
                  ]
                },
              ]
              // children: [
              //   {
              //     name: `vendorItemId`,
              //     type: `Number`,
              //     _description: `vendorItem id`,
              //     _relation: ``,
              //     _referenceInfo: `key`,
              //     _warning: ``,
              //     children: false
              //   },
              //   {
              //     name: `receiptItemQuantity`,
              //     type: `Number`,
              //     _description: `반품 접수된 수량`,
              //     _relation: ``,
              //     _referenceInfo: ``,
              //     _warning: ``,
              //     children: false
              //   },
              //   {
              //     name: `confirmItemQuantity`,
              //     type: `Number`,
              //     _description: `업체 정상 확인 수량`,
              //     _relation: ``,
              //     _referenceInfo: `QTY로 접수시 필수`,
              //     _warning: ``,
              //     children: false
              //   }
              // ]
            }
          ]
        }
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v1/return/363365/coupang-confirm`,
    code: [
      {
        language: `http`,
        codeblock: {}
      }
    ],
    response: {
      "code": "200",
      "message": "OK",
      "data": {
        "lackDeliveryPriceAcceptable": false,
        "availableMaxLackDeliveryPrice": 6000,
        "confirmRequestDto": {
          "vendorId": null,
          "receiptId": 359606,
          "requestType": "QTY",
          "lackDeliveryPrice": 1000,
          "coupangConfirmReturnItemDtoMap": {
            "28283699": {
              "vendorItemId": 28283699,
              "receiptItemQuantity": 1,
              "confirmItemQuantity": 1
            },
            "28283702": {
              "vendorItemId": 28283702,
              "receiptItemQuantity": 1,
              "confirmItemQuantity": 0
            }
          }
        }
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
