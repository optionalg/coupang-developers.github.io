
export const justTest = {
// const justTest = {
  // every name, _description, _relation, _refenceInfo, _warning, input *korean*
  
  // will support HTML tag in _description, _relation, _referenceInfo, _warning
  // but please doesn't use for like highlight
  // that's consistency is reduced.
  
  // _description   -> input description for explain
  // _relation      -> input the relation api ex) this parameter can get via 'xxx' API
  // _referenceInfo -> ex>
  // _warning       -> something input warning
  
  // every name, _description, _relation, _refenceInfo, _warning, input *korean*
  
  note: ``, // note for internal developer
  documentInfo: {
    documentState: `draft`, // draft, candidate, release, stable
    lastUpdateDate: `2016-12-22`, // yyyy-mm-dd  ex> 2016-12-23
  },
  apiInfo: {
    state: `stable`,      // draft, candidate, release, unstable, stable
    lastUpdateDate: `2016-12-10`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `nemo`,  // input developer name
    category: `exchange-api-service`,   // input category ex) exchange-service-api
    id: `t-6`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    name: `쿠팡 교환확인 요청생성(sample)`,       // use display name, i will change 'translation key'
    displayOrderPriority: 5, // use order priority. 1 is high(top),
    domain: `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api`,     // `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/`
    httpMethod: `POST`, // GET, POST, PUT, DELETE
    path: `/v2/providers/wing_api/apis/internal-api/v1/exchange/{exchangeId}/coupang-confirm-request-creations`,       // '/v2/providers/wing_api/apis/internal-api/v1/exchange/inquiries'
    hmacPath: '',
    _description: `고객님이 교환하려는 제품을 받은후 제품에 문제가 있으실경우 쿠팡에게 쿠팡확인요청을 신청 하는것입니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    // if not use change like this
    // pathSegmentParameters: false,
    pathSegmentParameters: [
      {
        name: `exchangeId`,      // input korean
        require: true, // true || false
        _description: `벤더가 교환에 관한 쿠팡 확인 요청을 생성하려는 교환번호`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    // if not use change like this
    // queryStringParameters: false,
    queryStringParameters: false,
    // if not use change like this
    // bodyParameters: false,
    bodyParameters: [
      {
        name: `exchangeId`,
        type: `number`,
        require: true,
        _description: `교환 아이디`,
        _relation: `test realeation`,
        _referenceInfo: `test referenceInfo`,
        _warning: `test warning`,
        children: false
      },
      {
        name: `vendorId`,
        type: `number`,
        require: true,
        _description: `벤더 아이디 
        <li>test list 1</li>
        <li>test list 2</li>

`,
        _relation: `<a href="#">testlink</a>`,
        _referenceInfo: `
<table >
<tr>
<td>arr1</td>
<td>arr2</td>
</tr>
<tr>
<td>left</td>
<td>right</td>
</tr>
</table>
`,
        _warning: ``,
        children: false
      },
      {
        name: `confirmType`,
        type: `number`,
        require: true,
        _description: ``,
        _relation: ``,
        _referenceInfo: `quantity || damage || component`,
        _warning: ``,
        children: false
      },
      {
        name: `coupangConfirmRequestApiItemDTOs`,
        type: `Object`,
        require: true,
        _description: `수량 그룹`,
        _relation: ``,
        _referenceInfo: `if confirmType="quantity", 선택했을 경우, this is mandatory`,
        _warning: ``,
        children: [
          {
            name: `vendorItemId`,
            type: `number`,
            require: true,
            _description: `벤더아이템 아이디`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `quantity`,
            type: `number`,
            require: false,
            _description: `수량`,
            _relation: ``,
            _referenceInfo: `if confirmType="quantity", 선택했을 경우, this is mandatory`,
            _warning: ``,
            children: false
          }
        ]
      },
      {
        name: `depth 1`,
        type: `number`,
        require: true,
        _description: `사유`,
        _relation: ``,
        _referenceInfo: `reason textue, MaxLength=500`,
        _warning: ``,
        children: [
          {
            name: `depth 2`,
            type: `number`,
            require: true,
            _description: `첨부 파일 이름`,
            _relation: ``,
            _referenceInfo: `유효한 확장명: png,jpg,jpeg,pjpeg,gif,avi,wmv,mp4.`,
            _warning: ``,
            children: [
              {
                name: `depth 3`,
                type: `number`,
                require: true,
                _description: `첨부 파일 이름`,
                _relation: ``,
                _referenceInfo: `유효한 확장명: png,jpg,jpeg,pjpeg,gif,avi,wmv,mp4.`,
                _warning: ``,
                children: false
              },
              {
                name: `depth 3`,
                type: `number`,
                require: true,
                _description: `첨부 파일 경로`,
                _relation: ``,
                _referenceInfo: `첨부 파일 경로는 네트워크 링크여야합니다.`,
                _warning: ``,
                children: [
                  {
                    name: `depth 4`,
                    type: `number`,
                    require: true,
                    _description: `첨부 파일 이름`,
                    _relation: ``,
                    _referenceInfo: `유효한 확장명: png,jpg,jpeg,pjpeg,gif,avi,wmv,mp4.`,
                    _warning: ``,
                    children: [
                      {
                        name: `depth 4`,
                        type: `number`,
                        require: true,
                        _description: `첨부 파일 이름`,
                        _relation: ``,
                        _referenceInfo: `유효한 확장명: png,jpg,jpeg,pjpeg,gif,avi,wmv,mp4.`,
                        _warning: ``,
                        children: false
                      }
                    ]
                  },
                  {
                    name: `path`,
                    type: `number`,
                    require: true,
                    _description: `첨부 파일 경로`,
                    _relation: ``,
                    _referenceInfo: `첨부 파일 경로는 네트워크 링크여야합니다.`,
                    _warning: ``,
                    children: false
                  }
                ]
              }
            ]
          },
          {
            name: `path`,
            require: true,
            _description: `첨부 파일 경로`,
            _relation: ``,
            _referenceInfo: `첨부 파일 경로는 네트워크 링크여야합니다.`,
            _warning: ``,
            children: false
          }
        ]
      },
      {
        name: `attachments`,
        require: true,
        _description: `첨부 파일`,
        _relation: ``,
        _referenceInfo: `첨부 파일 이름, 첨부 파일 경로`,
        _warning: ``,
        children: [
          {
            name: `name`,
            require: true,
            _description: `첨부 파일 이름`,
            _relation: ``,
            _referenceInfo: `유효한 확장명: png,jpg,jpeg,pjpeg,gif,avi,wmv,mp4.`,
            _warning: ``,
            children: false
          },
          {
            name: `path`,
            require: true,
            _description: `첨부 파일 경로`,
            _relation: ``,
            _referenceInfo: `첨부 파일 경로는 네트워크 링크여야합니다.`,
            _warning: ``,
            children: false
          }
        ]
      },
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
      _description: `VendorId doesn't match the exchangeId, please check.`,
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
    //this structure is very simillar 'body parameter'
    // just different require -> type
    {
      name: `code`,
      type: `number`,
      _description: `server response status code`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `string`,
      _description: `detail info`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    //children depth 1 example
    {
      name: `data`,
      type: `Array`,
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `resultCode`,
          type: `string`,
          _description: `test desription`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `sample children`,
              type: `string`,
              _description: `test desription`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }
          ],
        },
        {
          name: `resultMessage`,
          type: `string`,
          _description: `test description`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        }
      ]
    }
  ],
  sample: {
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

// every content will change based 'translation key';
// if name is 'exchange-inquires-docs'
// ex translation key) exchange-inquires-docs.apiInfo._description
// ex translation key) exchange-inquires-docs.parameters.pathSegmentParameters.{name}._description

