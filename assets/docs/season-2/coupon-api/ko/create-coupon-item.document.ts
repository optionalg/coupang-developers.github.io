export const  createCouponItemDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `coupon-api`,   // input category ex) exchange-service-api
    id: `create-coupon-item`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `create_coupon_item`,
    name: `쿠폰아이템 생성`,       // use display name, i will change 'translation key'
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
    httpMethod: `POST`,
    path: `/v2/providers/fms/apis/api/v1/vendors/{vendorId}/coupons/{couponId}/items`,
    HMACPath: `/v2/providers/fms/apis/api/v1/vendors/{vendorId}/coupons/{couponId}/items`,
    _description: `생성된 쿠폰을 개별 아이템에 적용하기 위한 API입니다. 본 API는 비동기방식으로 프로세스에 대한 요청 만을 수행하고 있어 
<br/>실제 API 수행 결과값은 응답으로 받은 "requestedId" 값을 가지고 요청상태 확인 API를 통해서 확인 가능합니다.`,
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
            name: `couponId`,
            type: `Number`,
            require: true,
            _description: `적용을 해제할 쿠폰 ID`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
        },
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `vendorItems`,
        type: `Array`,
        require: false,
        _description: `쿠폰을 적용할 아이템 ID`,
        _relation: ``,
        _referenceInfo: `쿠폰을 적용할 아이템 ID 수는 10,000개를 초과할 수 없음`,
        _warning: ``,
        children: false
      }
    ]
  },
  errorSpec: [
        {
          status: 400,
          _description: `vendorItems may not be empty, vendorItems size must be between 1 and 10000`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `업체정보의 권한을 확인하세요`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
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
      type: `Object`,
      _description: `수행 성공 여부 데이터`,
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
          type: `Object`,
          _description: `처리 상태를 조회할 수 있는 요청아이디 데이터`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [{
            name: `requestedId`,
            type: `String`,
            _description: `처리 상태 조회를 위한 요청아이디`,
            _relation: ``,
            _referenceInfo: `예) 1542675975663862164`,
            _warning: ``,
            children: false
          }, 
          {
            name: `success`,
            type: `Boolean`,
            _description: `성공 여부`,
            _relation: ``,
            _referenceInfo: `true or false`,
            _warning: ``,
            children: false
          }]
         },
        {
          name: `Pagination`,
          type: `Array`,
          _description: `페이징 없음`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
          }
        ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/fms/apis/api/v1/vendors/A00000001/coupons/68/items`,
    code: [
      {
        language: `http`,
        codeblock: {
                "vendorItems": [3226138951, 3226138847]
        }
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
            "content": {
              "requestedId": "17258005702255081464",
              "success": true
            },
            "pagination": null
          }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
