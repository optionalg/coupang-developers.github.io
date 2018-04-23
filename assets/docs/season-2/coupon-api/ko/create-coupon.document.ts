export const  createCouponDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `coupon-api`,   // input category ex) exchange-service-api
    id: `create-coupon`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `create_coupon`,
    name: `쿠폰생성`,       // use display name, i will change 'translation key'
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
    lastUpdateDate: `2018-04-02`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Settlement`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/fms/apis/api/v2/vendors/{vendorId}/coupon`,
    HMACPath: `/v2/providers/fms/apis/api/v2/vendors/{vendorId}/coupon`,
    _description: `계약아이디(contractId)에 기반한 신규 쿠폰 생성을 위한 API입니다. 본 API는 비동기방식으로 프로세스에 대한 요청 만을 수행하고 있어
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
        }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `contractId`,
        type: `Number`,
        require: true,
        _description: `업체의 계약서 아이디`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `name`,
        type: `String`,
        require: true,
        _description: `프로모션명(최대 50자)`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `maxDiscountPrice`,
        type: `Number`,
        require: true,
        _description: `최대할인금액`,
        _relation: ``,
        _referenceInfo: `최소 10원 이상`,
        _warning: ``,
        children: false
      },
      {
        name: `discount`,
        type: `Number`,
        require: true,
        _description: `할인률`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
     {
        name: `startAt`,
        type: `String`,
        require: true,
        _description: `유효시작일`,
        _relation: ``,
        _referenceInfo: `유효시작일은 다음날 00시부터 작동하도록 설정 가능 ex: 8월4일 15시에 쿠폰을 생성한다면 8월5일00시 부터 쿠폰이 적용되도록 생성`,
        _warning: ``,
        children: false
      },
     {
        name: `endAt`,
        type: `String`,
        require: true,
        _description: `유효종료일`,
        _relation: ``,
        _referenceInfo: `종료일은 계약 기간을 넘을수 없으며, 해당연도의 12월31일 00:00:00까지 지정 가능`,
        _warning: ``,
        children: false
      },
     {
        name: `type`,
        type: `String`,
        require: true,
        _description: `할인방식`,
        _relation: ``,
        _referenceInfo: `RATE(정률할인), FIXED_WITH_QUANTITY(수량별 정액할인), PRICE(정액할인)`,
        _warning: ``,
        children: false
      },
    ]
  },
  errorSpec: [
        {
          status: 400,
          _description: `계약의 유효기간 안에 쿠폰이 존재해야 한다(계약서의 유효기간:2017-03-01 00:00:00~2017-12-31 23:59:59)
(쿠폰의 유효기간:2016-12-05 00:00:00~2017-09-05 00:00:00)`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `Cannot parse \"2017-13-05 00:00:00\": Value 13 for monthOfYear must be in the range [1,12]`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },      
        {
          status: 400,
          _description: `Cannot parse \"2017-08-32 00:00:00\": Value 32 for dayOfMonth must be in the range [1,31]`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `startAt 패턴을 확인하세요. yyyy-MM-dd HH:mm:ss`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `endAt 패턴을 확인하세요. yyyy-MM-dd HH:mm:ss`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `discount 할인률은 0% ~ 100% 범위에 포함되어야 합니다.`,
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
	          type: `null`,
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
    endpoint: `https://api-gateway.coupang.com/v2/providers/fms/apis/api/v2/vendors/A00000001/coupon`,
    code: [
      {
        language: `http`,
        codeblock: {
            "contractId": "10",
            "name": "newCoupon 20180328",
            "maxDiscountPrice": "1000",
            "discount": "10",
            "startAt": "2017-12-08 00:00:00",
            "endAt": "2017-12-09 00:00:00",
            "type": "PRICE"
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
              "requestedId": "123543582159745830895",
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
