export const createExchangeProductCoupangConfirmRequestDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `exchange-api`,   // input category ex) exchange-service-api
    id: `create-exchange-product-coupang-confirm-request`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `create_exchange_product_coupang_confirm_request`,
    name: `교환상품 쿠팡확인요청 테스트  생성`,       // use display name, i will change 'translation key'
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
    state: `release`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-20`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Nemo`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/wing_api/apis/internal-api/v1/exchange/{exchangeId}/coupang-confirm-request-creations`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v1/exchange/{exchangeId}/coupang-confirm-request-creations`,
    _description: `Seller create coupang confirm request to coupang for exchanging product issues after product received confirmation`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `exchangeId`,
        require: true,
        _description: `The exchangeId which seller want to create exchange coupang confirm request`,
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
        _description: `valid exchangeId`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `vendorId`,
        type: `String`,
        require: true,
        _description: `valid vendorId`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `confirmType`,
        type: `String`,
        require: true,
        _description: `reason type for coupang confirm request`,
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
        require: false,
        _description: `수량 그룹`,
        _relation: ``,
        _referenceInfo: `if confirmType="quantity",these are all required`,
        _warning: ``,
        children: [
          {
            name: `vendorItemId`,
            type: `Number`,
            require: true,
            _description: `vendorItemId must belong to vendor`,
            _relation: `VendorItemId is from:GET /v2/providers/wing_api/apis/internal-api/v1/exchange/inquiries`,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
          },
          {
            name: `quantity`,
            type: `Number`,
            require: false,
            _description: `goods quantity`,
            _relation: ``,
            _referenceInfo: `If you choose the confirmType="quantity", this is mandatory`,
            _warning: ``,
            children: false,
          }
        ]
      },
      {
        name: `reason`,
        type: `String`,
        require: true,
        _description: `reason details, maxLength=500 `,
        _relation: ``,
        _referenceInfo: `The reason characters must not greater than 500`,
        _warning: ``,
        children: false
      },
      {
        name: `attachments`,
        type: `Array`,
        require: true,
        _description: `attachment name and attachment path`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `name`,
            type: `String`,
            require: true,
            _description: `Attachment name`,
            _relation: ``,
            _referenceInfo: `allowed extension include:png,jpg,jpeg,pjpeg,gif,avi,wmv,mp4`,
            _warning: ``,
            children: false,
          },
          {
            name: `path`,
            type: `String`,
            require: true,
            _description: `Attachment path`,
            _relation: ``,
            _referenceInfo: `the attachment path must be a network link`,
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
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `resultMessage`,
          type: `String`,
          _description: `Result message for create exchange confirm request`,
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
