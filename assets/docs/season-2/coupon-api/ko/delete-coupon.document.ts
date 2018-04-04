export const  deleteCouponDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `coupon-api`,   // input category ex) exchange-service-api
    id: `delete-coupon`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `delete_coupon`,
    name: `쿠폰파기`,       // use display name, i will change 'translation key'
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
    httpMethod: `PUT`,
    path: `/v2/providers/fms/apis/api/v1/vendors/{vendorId}/coupons/{couponId}?action=expire`,
    HMACPath: `/v2/providers/fms/apis/api/v1/vendors/{vendorId}/coupons/{couponId}?action=expire`,
    _description: `생성되어 있던 쿠폰의 파기를 위한 API입니다. 본 API는 비동기방식으로 프로세스에 대한 요청 만을 수행하고 있어
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
            _description: `파기할 쿠폰 ID`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
        },
    ],
    queryStringParameters: [
        {
            name: `action`,
            type: `String`,
            require: true,
            _description: `expire`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
        }
  ],
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
      type: `Object`,
      require: false,
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
          require: true,
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
    endpoint: `https://api-gateway.coupang.com/v2/providers/fms/apis/api/v1/vendors/A00000001/coupons/68?action=expire`,
    code: [
      {
       // language: `http`,
       // codeblock: {}     
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
              "requestedId": "649102321051192483",
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
