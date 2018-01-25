export const  lookupBudgetStatusDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `coupon-api`,   // input category ex) exchange-service-api
    id: `lookup-budget-status`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_budget_status`,
    name: `예산현황 조회`,       // use display name, i will change 'translation key'
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
    lastUpdateDate: `2017-08-30`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Settlement`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/fms/apis/api/v1/vendors/{vendorId}/budgets`,
    HMACPath: `/v2/providers/fms/apis/api/v1/vendors/{vendorId}/budgets`,
    _description: `현재 설정된 모든 계약의 쿠폰 예산을 조회하기 위한 API입니다.
<br/>쿠폰의 사용을 위한 예산은 각각의 계약 조건에 따라 각 월별로 설정이 되기에 계약 및 조회를 원하는 월별로  조회가 가능합니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
        {
            name: `vendorId`,
            type: `String`,
            require: true,
            _description: `업체 ID`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
        },
        {
            name: `contractId`,
            type: `Number`,
            require: false,
            _description: `업체의 계약서 아이디`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
        },
        {
            name: `targetMonth`,
            type: `String`,
            require: false,
            _description: `조회하고자 하는 예산월 `,
            _relation: ``,
            _referenceInfo: `yyyy-MM`,
            _warning: `contractId와 targetMonth를 입력하지 않으면 조회하는 해당월에 해당하는 모든 계약이 조회됨.`,
            children: false,
        }
    ],
    queryStringParameters: false,
  },
  errorSpec: [
],
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `서버 응답 코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `서버 응답 메세지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `httpStatus`,
      type: `Number`,
      _description: `HTTP Status Code(서버 응답 코드와 동일한 값)`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },   
    {
      name: `httpStatusMessage`,
      type: `String`,
      _description: `HTTP Status Message (서버 응답 메세지와 동일한 값)`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },   
    {
      name: `errorMessage`,
      type: `String`,
      _description: `HTTP Status 200을 제외한 나머지 Status에서 서버 내 상세한 실패 이유 메세지가 담깁니다.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },   
    {
      name: `data`,
      type: `Array`,
      _description: `예산 현황 리스트 데이터`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [{
        name: `success`,
        type: `Boolean`,
        _description: `성공 여부`,
        _relation: ``,
        _referenceInfo: `true or false`,
        _warning: ``,
        children: false
      },
        {
          name: `content`,
          type: `Array`,
          _description: `예산현황 리스트`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [{
            name: `contractId`,
            type: `Number`,
            _description: `업체의 계약서 아이디`,
            _relation: ``,
            _referenceInfo: `예) 1, 2`,
            _warning: ``,
            children: false
          },
          {
            name: `targetMonth`,
            type: `String`,
            _description: `조회하고자 하는 예산월`,
            _relation: ``,
            _referenceInfo: `예) 2017-08`,
            _warning: ``,
            children: false
          },
          {
            name: `vendorShareRatio`,
            type: `Number`,
            _description: `분담율(%) : 해당 계약서에 명시된 쿠팡과의 분담율`,
            _relation: ``,
            _referenceInfo: `예) 100.0`,
            _warning: ``,
            children: false
          },
         {
            name: `totalBudgetAmount`,
            type: `Number`,
            _description: `해당월의 설정된 총 예산`,
            _relation: ``,
            _referenceInfo: `예) 1000000`,
            _warning: ``,
            children: false
          },
         {
            name: `usedBudgetAmount`,
            type: `Number`,
            _description: `해당월의 사용된 예산`,
            _relation: ``,
            _referenceInfo: `예) 50.00`,
            _warning: ``,
            children: false
          },
          ]
         },
        {
          name: `Pagination`,
          type: `Array`,
          _description: `페이징`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
                name: `countPerPage`,
                type: `Number`,
                _description: `페이지별 데이터 Count`,
                _relation: ``,
                _referenceInfo: `예) 10, 20, 30`,
                _warning: ``,
                children: false
            },
            {
                name: `currentPage`,
                type: `Number`,
                _description: `현재 페이지`,
                _relation: ``,
                _referenceInfo: `예) 1`,
                _warning: ``,
                children: false
            },
            {
                name: `totalPages`,
                type: `Number`,
                _description: `토탈 페이지 Count`,
                _relation: ``,
                _referenceInfo: `예) 1000`,
                _warning: ``,
                children: false
            },
            {
                name: `totalElements`,
                type: `Number`,
                _description: `전체 데이터 Count`,
                _relation: ``,
                _referenceInfo: `예) 1000`,
                _warning: ``,
                children: false
            },
            ]
          }
        ]
    }   
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com//v2/providers/fms/apis/api/v1/vendors/A00000001/budgets?contractId=2&targetMonth=2017-08`,
    code: [
      {
        language: `http`,
        codeblock: null
      }
    ],
    response: {
          "code": 200,
          "message": "OK",
          "httpStatus": 200,
          "httpStatusMessage": "OK",
          "errorMessage": "",
          "data": {
            "success": true,
            "content": [
              {
                "contractId": 2,
                "targetMonth": "2017-08",
                "vendorShareRatio": 100.0,
                "totalBudgetAmount": 1000000,
                "usedBudgetAmount": 50.00
              }
            ],
            "pagination": null
          }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
