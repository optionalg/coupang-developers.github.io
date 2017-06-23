export const createExchangeProductCoupangConfirmRequestDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `exchange-api`,   // input category ex) exchange-service-api
    id: `create-exchange-product-coupang-confirm-request`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `create_exchange_product_coupang_confirm_request`,
    name: `교환상품 쿠팡확인요청 생성`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `쿠팡 교환확인 요청생성`,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: `deprecated`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-20`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Nemo`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/wing_api/apis/internal-api/v1/exchange/{exchangeId}/coupang-confirm-request-creations`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v1/exchange/{exchangeId}/coupang-confirm-request-creations`,
    _description: `고객님이 교환하려는 제품을 받은후 제품에 문제가 있으실경우 쿠팡에게 쿠팡확인요청을 신청 하는것입니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `이 API는 Deprecated 되었습니다.`,
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
        _description: `교환 아이디`,
        _relation: ``,
        _referenceInfo: `유효한 교환 아이디`,
        _warning: ``,
        children: false
      },
      {
        name: `vendorId`,
        type: `String`,
        require: true,
        _description: `벤더 아이디`,
        _relation: ``,
        _referenceInfo: `유효한 벤더 아이디`,
        _warning: ``,
        children: false
      },
      {
        name: `confirmType`,
        type: `String`,
        require: true,
        _description: `원인 유형`,
        _relation: ``,
        _referenceInfo: `
    <table class="table">
        <tr>
            <th>Confirm Type</th>
        </tr>
        <tr>
            <td>quantity</td>
        </tr>
        <tr>
            <td>damage</td>
        </tr>
        <tr>
            <td>component</td>
        </tr>
    </table>`,
        _warning: ``,
        children: false
      },
      {
        name: `coupangConfirmRequestApiItemDTOs`,
        type: `Array`,
        require: true,
        _description: `수량 그룹`,
        _relation: ``,
        _referenceInfo: `if confirmType="quantity",선택했을 경우, this is mandatory`,
        _warning: ``,
        children: [
          {
            name: `vendorItemId`,
            type: `Number`,
            require: true,
            _description: `벤더아이템 아이디`,
            _relation: `VendorItemId is from:GET /v2/providers/wing_api/apis/internal-api/v1/exchange/inquiries`,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
          },
          {
            name: `quantity`,
            type: `Number`,
            require: false,
            _description: `수량`,
            _relation: ``,
            _referenceInfo: `if confirmType="quantity"을 선택했을 경우, this is mandatory.`,
            _warning: ``,
            children: false,
          }
        ]
      },
      {
        name: `reason`,
        type: `String`,
        require: true,
        _description: `사유 `,
        _relation: ``,
        _referenceInfo: `reason textue, MaxLength=500`,
        _warning: ``,
        children: false
      },
      {
        name: `attachments`,
        type: `Array`,
        require: true,
        _description: `첨부 파일`,
        _relation: ``,
        _referenceInfo: `첨부 파일 이름&첨부 파일 경로`,
        _warning: ``,
        children: [
          {
            name: `name`,
            type: `String`,
            require: true,
            _description: `첨부 파일 이름`,
            _relation: ``,
            _referenceInfo: `유효한 확장명: png,jpg,jpeg,pjpeg,gif,avi,wmv,mp4`,
            _warning: ``,
            children: false,
          },
          {
            name: `path`,
            type: `String`,
            require: true,
            _description: `첨부 파일 경로`,
            _relation: ``,
            _referenceInfo: `첨부 파일 경로는 네트워크 링크여야합니다`,
            _warning: ``,
            children: false,
          },
        ]
      }
    ]
  },
  errorSpec: [
    {
      status: 400,
      _description: `params is not allowed null...`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `The exchangeId in requestBody doesn't match the one in request URL`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `params's vendorId not equals gateway's vendorId`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `VendorId doesn't match the exchangeId, please check`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `The text area length should not be more than 500`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `Please input the correct CoupangConfirmRequestType which contains: quantity, component, damage`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `No exchange information has been found in Coupang Confirmation Request`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `Input quantity error:normal exchange quantity cannot be less than zero or greater than receiptQuantity.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `Input quantity error:At least one vendorItem normal exchange quantity requires be greater than zero.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `Input quantity error:At least one vendorItem normal exchange quantity requires be less than the receipt quantity.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `There's vendorItem has no relationship with this exchangeId,please check.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `There is already a receipt history. Please check the exchangeId.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    }
  ],
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `http 반품요청 상태 코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `http 반품요청 상태 메시지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Object`,
      _description: `http 반품요청 결과(결과 코드와 메시지가 포함됨)`,
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
          children: false
        },
        {
          name: `resultMessage`,
          type: `String`,
          _description: `결과 메시지`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        }
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v1/exchange/100000207/coupang-confirm-request-creations`,
    code: [
      {
        language: `http`,
        codeblock: {
          "vendorId": "A00013264",
          "exchangeId": "100000207",
          "confirmType": "quantity",
          "coupangConfirmRequestApiItemDTOs":[{
            "vendorItemId":"47859561",
            "quantity":"1"
          },{
            "vendorItemId":"47859562",
            "quantity":"2"
          }],
          "reason":"coupang confirm request for exchange",
          "attachments":[
            {
            "name":"Jellyfish.jpg",
            "path":"http://imgs.coupangcdn.com/image/partner/documents/2016/07/01/11/9/6ec0bdbf-d59d-4c12-ac91-8389d228a492.jpg"
            },
            {
              "name":"치약.jpg",
              "path":"http://imgs.coupangcdn.com/image/partner/documents/2016/06/23/16/5/a7a198b5-f7cb-4918-bf00-77df990c3145.jpg"
            }
          ]
        }
      }
    ],
    response: {
      "code": "200",
      "message": "SUCCESS:Create exchange coupang confirm request success!",
      "data": {
        "resultCode": "SUCCESS",
        "resultMessage": "success"
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
