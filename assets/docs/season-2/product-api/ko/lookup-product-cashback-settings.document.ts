export const lookupProductCashbackSettingsDocument = {
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

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `lookup-product-cashback-settings`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_product_cashback_settings`,
    name: `상품 캐시백 검색`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: ``,
      anchorId: ``,
    },
  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: ``,
        path: ``,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
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
  apiInfo: {
    state: `release`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-04-10`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Tracy`,  // input developer name
    domain: `https://api-gateway.coupang.com`,     // `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/`
    httpMethod: `GET`, // GET, POST, PUT, DELETE
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/products/items/cashback`,       // '/v2/providers/wing_api/apis/internal-api/v1/exchange/inquiries'
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/products/items/cashback`,
    _description: `셀러는 이 API를 통해 해당 옵션아이디에 적용된 최신 캐시백 룰 정보를 얻을수 있다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    // if not use change like this
    // pathSegmentParameters: false,
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `vendor ID`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
      }
    ],
    // if not use change like this
    // queryStringParameters: false,
    queryStringParameters: [
      {
        name: `ruleId`,
        type: `String`,
        require: true,
        _description: `Rule ID`,
        _relation: ``,
        _referenceInfo: `셀러는 쿠팡이 제공한 룰 아이디를 저장한다.`,
        _warning: ``
      },
      {
        name: `vendorItemId`,
        type: `String`,
        require: true,
        _description: `옵션아이디	`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    // if not use change like this
    // bodyParameters: false,
    bodyParameters: false,
  },
  errorSpec: false,
  responseSpec: [
    {
      name: `code`,
      // input type only
      // Number, String, Boolean, Array, Value, Object, Whitespace
      type: `Number`,
      _description: `Http request status code`,
      _relation: ``,
      _referenceInfo: `Example: 200, 400, 500`,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `성공 혹은 실패시 해당 결과메시지가 나타남`,
      _relation: ``,
      _referenceInfo: `<table class="doc-table-col-2">
        <tr>
          <th>200:</th>
          <th> OK</th>
        </tr>
        <tr>
          <td>400:</td>
          <td> Bad request , will show corresponding bad request message</td>
        </tr>
        <tr>
          <td>500:</td>
          <td> Internal error</td>
        </tr>
        </table>`,
      _warning: ``,
      children: false,
    },
    //children depth 1 example
    {
      name: `data`,
      type: `Object`,
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `ruleId`,
          type: `Long`,
          _description: `Rule ID`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `valueType`,
          type: `String`,
          _description: `캐시백 유형`,
          _relation: ``,
          _referenceInfo: `RATE; FIXED;FIXED_WITH_QUANTITY.`,
          _warning: ``,
          children: false,
        },
        {
          name: `value`,
          type: `String`,
          _description: `적립값`,
          _relation: ``,
          _referenceInfo: `최소값은 1;RATE 일 경우 1~100 `,
          _warning: ``,
          children: false,
        },
        {
          name: `maxAmount`,
          type: `String`,
          _description: `최대적립금액`,
          _relation: ``,
          _referenceInfo: `최소값은 0;</br>FIXED 혹은 FIXED_WITH_QUANTITY 시 이 파라미터는 필요하지 않음;</br>RATE 일 경우만 이 파라미터가 필수임`,
          _warning: ``,
          children: false,
        },
        {
          name: `vendorItemId`,
          type: `String`,
          _description: `옵션아아디목록`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `startAt`,
          type: `String`,
          _description: `시작일 형태 yyyy-MM-ddTHH:mm:ss`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `endAt`,
          type: `String`,
          _description: `종료일 형태 yyyy-MM-ddTHH:mm:ss`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `disabled`,
          type: `boolean`,
          _description: `캐시백 룰 적용 가능 여부`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `disabledAt`,
          type: `String`,
          _description: `캐시백 룰 적용 불가능 일자 형태 yyyy-MM-ddTHH:mm:ss`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        }
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00012697/products/items/cashback?ruleId=1&vendorItemId=3000000005`,
    code: [
      {
        language: `http`
      }
    ],
    response: {
      "code": "200",
      "message": "OK",
      "data": {
        "vendorItemId": "3000000005",
        "vendorId": "A00012697",
        "valueType": "FIXED",
        "value": 1000,
        "startAt": "2016-12-29 09:43:54",
        "maxAmount": 0,
        "ruleId": 1,
        "endAt": "2017-01-01 09:43:54",
        "disabledAt": null,
        "disabled": false
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
};
