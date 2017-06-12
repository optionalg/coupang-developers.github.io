export const exchangeGoodsCoupangConfirmRequestCreationDocument = {
  note: `Seller create coupang confirm request to coupang for exchanging product issues after product received confirmation.`,
  documentInfo: {
    category: `example-api`,
    id: `example-three`,
    name: `Exchange Goods Coupang Confirm Request Creation`,
    displayOrder: 999,
    documentState: `draft`,
    lastUpdateDate: `2016-12-30`,
    reflectionDate: ``
  },
  apiInfo: {
    state: `draft`,
    lastUpdateDate: `2016-12-30`,
    developer: `Nemo`,
    domain: `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api`,
    httpMethod: `POST`,
    path: `/v1/exchange/{exchangeId}/coupang-confirm-request-creations`,
    HMACPath: `/v1/exchange/{exchangeId}/coupang-confirm-request-creations`,
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
        _relation: `GET /v2/providers/wing_api/apis/internal-api/v1/exchange/inquiries`,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `exchangeId`,
        require: true,
        _description: `valid exchangeId`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `vendorId`,
        require: true,
        _description: `valid vendorId`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `confirmType`,
        require: true,
        _description: `reason type for coupang confirm request`,
        _relation: ``,
        _referenceInfo: `
    <table>
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
        require: false,
        _description: `if confirmType="quantity",these are all required`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `vendorItemId`,
            require: true,
            _description: `vendorItemId must belong to vendor`,
            _relation: `GET /v2/providers/wing_api/apis/internal-api/v1/exchange/inquiries`,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
          },
          {
            name: `quantity`,
            require: false,
            _description: `goods quantity`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: `If you choose the confirmType="quantity", this is mandatory`,
            children: false,
          }
        ]
      },
      {
        name: `reason`,
        require: true,
        _description: `reason details, maxLength=500 `,
        _relation: ``,
        _referenceInfo: ``,
        _warning: `The reason characters must not greater than 500`,
        children: false
      },
      {
        name: `attachments`,
        require: true,
        _description: `attachment name and attachment path`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `name`,
            require: true,
            _description: `Attachment name`,
            _relation: ``,
            _referenceInfo: `allowed extension include:png,jpg,jpeg,pjpeg,gif,avi,wmv,mp4`,
            _warning: ``,
            children: false,
          },
          {
            name: `path`,
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
    // type : Number, String, Boolean, Object, Array,
    // these type is Standard for All language. have to follow
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
    endpoint: ``,
    code: [
      {
        language: `http`,
        codeblock: {
          "vendorId": "A00013264",
          "exchangeId": "100000207",
          "confirmType": "quantity",
          "coupangConfirmRequestApiItemDTOs": [
            {
              "vendorItemId": "47859561",
              "quantity": "1"
            }, {
              "vendorItemId": "47859562",
              "quantity": "2"
            }
          ],
          "reason": "coupang confirm request for exchange",
          "attachments": [
            {
              "name": "Jellyfish.jpg",
              "path": "http://imgs.coupangcdn.com/image/partner/documents/2016/07/01/11/9/6ec0bdbf-d59d-4c12-ac91-8389d228a492.jpg"
            },
            {
              "name": "치약.jpg",
              "path": "http://imgs.coupangcdn.com/image/partner/documents/2016/06/23/16/5/a7a198b5-f7cb-4918-bf00-77df990c3145.jpg"
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
