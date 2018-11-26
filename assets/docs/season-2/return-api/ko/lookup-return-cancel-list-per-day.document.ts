export const lookupReturnCancelListPerDayDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `return-api`,   // input category ex) exchange-service-api
    id: `lookup-return-cancel-list-per-day`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup-return-cancel-list-per-day`,
    name: `반품철회 이력 목록 조회`,       // use display name, i will change 'translation key'
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
    lastUpdateDate: `2017-11-22`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Tracy`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnWithdrawRequests`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnWithdrawRequests`,
    _description: `기간별로 철회된 반품의 이력을 조회합니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `최대 7일까지만 조회가 가능합니다.`,
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
        children: false
      }
    ],
    queryStringParameters: [
      {
        name: `dateFrom`,
        require: true,
        _description: `조회 시작일 (yyyy-MM-dd)`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `dateTo`,
        require: true,
        _description: `조회 종료일 (yyyy-MM-dd)`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `pageIndex`,
        type: `Number`,
        require: false,
        _description: `다음 페이지 조회를 위한 인덱스 값`,
        _relation: ``,
        _referenceInfo: `첫번째 페이지 조회시에는 필요하지 않습니다.`,
        _warning: `마지막 페이지일 경우 빈 값이 노출됨`,
        children: false
      },
      {
        name: `sizePerPage`,
        type: `Number`,
        require: false,
        _description: `페이지당 최대 조회 요청 값`,
        _relation: ``,
        _referenceInfo: `default = 100`,
        _warning: ``,
        children: false
      }
    ],
    bodyParameters: false
  },
   errorSpec: [
        {
          status: 400,
          _description: `vendorId 값을 입력해 주세요.`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `시작일자, 종료일자를 입력해 주세요. (형식:YYYYMMDD)`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `종료일자는 시작일자보다 작거나 같아야 합니다.`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `최대 조회 기간은 7 일 입니다.`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `날짜입력을 확인해 주세요. (형식:YYYYMMDD)`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `페이지별 최대 표시 갯수(sizePerPage)는 100 입니다.`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
  ],
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
          _description: `반품 접수번호`,
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
          _description: `반품철회 시각`,
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
    },
    {
      name: `nextPageIndex`,
      type: `String`,
      _description: `다음 페이지 조회를 위한 인덱스 값`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: `마지막 페이지일 경우 빈 값이 노출됨`,
      children: false,
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com:443/v2/providers/openapi/apis/api/v4/vendors/A00001234/returnWithdrawRequests?sizePerPage=50&pageIndex=1&dateFrom=2018-11-16&dateTo=2018-11-17`,
    code: [
      {
        language: `http`,
      }
    ],
    response: {
      "code": 200,
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
        },

      ],
     "nextPageIndex" : "1"
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
