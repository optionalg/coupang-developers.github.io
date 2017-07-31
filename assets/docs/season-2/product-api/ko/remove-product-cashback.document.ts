
export const removeProductCashbackDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `remove-product-cashback`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `remove_product_cashback`,
    name: `상품 캐시백 삭제`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `업체상품 옵션 캐시백 중지`,
      anchorId: ``,
    },
  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: `업체상품 옵션 캐시백 중지`,
        path: `/v2/providers/greatwall_api/apis/api/v1/product/vendorItems-cashbacks`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: `상품 캐시백 삭제`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/products/items/cashback`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  apiInfo: {
    state: `release`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-03-22`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Tracy`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `DELETE`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/products/items/cashback`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/products/items/cashback`,
    _description: `해당 옵션아이디에 적용하는 캐시백 룰를 중지한다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
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
    queryStringParameters: [
      {
        name: `ruleId`,
        require: true,
        _description: `Rule ID`,
        _relation: ``,
        _referenceInfo: `셀러는 쿠팡이 제공한 룰 아이디를 저장한다.`,
        _warning: ``,
        children: false
      },
      {
        name: `vendorItemId`,
        require: true,
        _description: `옵션 ID`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }

    ],
    bodyParameters: false
  },
  errorSpec: false,
  responseSpec: [
    {
      name: `code`,
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
          <th>OK</th>
        </tr>
        <tr>
          <td>400:</td>
          <td>Bad request , will show corresponding bad request message</td>
        </tr>
        <tr>
          <td>500:</td>
          <td>Internal error</td>
        </tr>
        </table>`,
      _warning: ``,
      children: false,
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00010028/products/items/cashback?ruleId=3944&vendorItemId=3000001897`,
    code: [
      {
        language: `http`
      }
    ],
    response: {
      "code": "200",
      "message": "OK",
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
};
