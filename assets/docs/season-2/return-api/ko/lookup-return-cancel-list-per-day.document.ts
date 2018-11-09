export const lookupReturnCancelListPerDayDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `return-api`,   // input category ex) exchange-service-api
    id: `lookup-return-cancel-list-per-day`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup-return-cancel-list-per-day`,
    name: `반품철회 이력 조회(일단위페이징)`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2018-06-11
    reflectionDate: ``,
    documentLegacyInfo: {
      name: ``,
      anchorId: ``,
    },

  },
  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2018-11-16`, // yyyy-mm-dd  ex> 2016-12-23
    developer: ``,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnWithdrawList`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnWithdrawList`,
    _description: `취소(반품)접수번호를 이용하여 철회된 반품의 이력을 조회합니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `업체 ID`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
      },
    ],
    queryStringParameters: false,
    
    bodyParameters: [
      {
        name: `cancelIds`,
        type: `Array`,
        require: true,
        _description: `철회 이력을 조회할 취소(반품)접수번호 목록`,
        _relation: ``,
        _referenceInfo: `한 번에 최대 50개까지 cancelIds 조회가 가능합니다.`,
        _warning: `cancelIds는 number 타입이어야 합니다.`,
        children: false
      }
     ]
    
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
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Array`,
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `cancelId`,
          type: `Number`,
          _description: `취소(반품)접수번호`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `orderId`,
          type: `Number`,
          _description: `주문번호`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `vendorId`,
          type: `String`,
          _description: `업체 ID`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
            name: `refundDeliveryDuty`,
            type: `String`,
            _description: `반품 귀책`,
            _relation: ``,
            _referenceInfo: `
              <table class="table">
                <tr>
                    <th>CODE</th>
                    <th>Mean</th>
                </tr>
                <tr>
                    <td>COM</td>
                    <td>업체</td>
                </tr>
                <tr>
                    <td>CUS</td>
                    <td>고객</td>
                </tr>
                <tr>
                    <td>COU</td>
                    <td>쿠팡</td>
                </tr>
           </table>`,
           _warning: ``,
            children: false
        },
        {
          name: `createdAt`,
          type: `String`,
          _description: `취소(반품) 철회 시각`,
          _relation: ``,
          _referenceInfo: `yyyy-MM-ddThh:mm:ss`,
          _warning: ``,
          children: false
        },
        {
          name: `vendorItemIds`,
          type: `Array`,
          _description: `반품 옵션아이디 목록`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        }
    
      ]
    }
  ],
  sample: {
    endpoint:'https://api-gateway.coupang.com//v2/providers/openapi/apis/api/v4/vendors/A00001234/returnWithdrawList',
    code: [
      {
        language: `http`,
        codeblock:{
           "cancelIds":[87033689]
           }
      }
    ],
    response: {
      "code": "200",
      "message": "OK",
      "data": [
        {
              "cancelId": 87033689,
              "orderId": 23000016565020,
              "vendorId": "A00001234",
              "refundDeliveryDuty": "COM",
              "createdAt": "2018-06-05T13:40:56",
              "vendorItemIds": [
                3737624764
              ]
        }
      ]
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
