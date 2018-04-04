export const  lookupCouponListByOrderIdDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `coupon-api`,   // input category ex) exchange-service-api
    id: `lookup-coupon-list-by-order-id`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup-coupon-list-by-order-id`,
    name: `주문번호로 프로모션 정보 조회`,       // use display name, i will change 'translation key'
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
    httpMethod: `GET`,
    path: `/v2/providers/fms/apis/api/v2/vendors/{vendorId}/{orderId}/coupons`,
    HMACPath: `/v2/providers/fms/apis/api/v2/vendors/{vendorId}/{orderId}/coupons`,
    _description: `주문번호로 쿠폰 정보를 조회하기 위한 API입니다.`,
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
            name: `orderId`,
            type: `Number`,
            require: true,
            _description: `주문 번호`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
        },
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
      type: `Object`,
      _description: `쿠폰정보 데이터`,
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
          _description: `쿠폰정보 데이터`,
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
            name: `couponId`,
            type: `Number`,
            _description: `쿠폰 ID`,
            _relation: ``,
            _referenceInfo: `예) 75, 80`,
            _warning: ``,
            children: false
          },
          {
            name: `discount`,
            type: `Number`,
            _description: `할인율`,
            _relation: ``,
            _referenceInfo: `예) 100.0, 20.0`,
            _warning: ``,
            children: false
          },
         {
            name: `endAt`,
            type: `String`,
            _description: `유효종료일`,
            _relation: ``,
            _referenceInfo: `예)2017-09-01 00:00:00`,
            _warning: ``,
            children: false
          },
          {
            name: `maxDiscountPrice`,
            type: `Number`,
            _description: `최대 할인금액`,
            _relation: ``,
            _referenceInfo: `예) 1000, 10000`,
            _warning: ``,
            children: false
          },
          {
            name: `promotionName`,
            type: `String`,
            _description: `프로모션명`,
            _relation: ``,
            _referenceInfo: `예) 원피스 1월 2째주 할인쿠폰`,
            _warning: ``,
            children: false
          },
          {
            name: `startAt`,
            type: `String`,
            _description: `유효시작일`,
            _relation: ``,
            _referenceInfo: `예) 2017-08-04 01:00:00`,
            _warning: ``,
            children: false
          },
          {
            name: `status`,
            type: `String`,
            _description: `쿠폰상태`,
            _relation: ``,
            _referenceInfo: `
            <table class="table">
                <tr>
                    <th>구분코드</th>
                    <th>설명</th>
                </tr>
                <tr>
                    <td>STANDBY</td>
                    <td>대기중</td>
                </tr>
                <tr>
                    <td>APPLIED</td>
                    <td>사용중</td>    
                </tr>
                <tr>
                    <td>PAUSED</td>
                    <td>발행중지</td>    
                </tr>
                <tr>
                    <td>EXPIRED</td>
                    <td>사용종료</td>  
                </tr>
                <tr>
                    <td>DETACHED</td>
                    <td>아이템 파기</td>    
                </tr>
            </table>`,
            _warning: ``,
            children: false
          },
          {
            name: `type`,
            type: `String`,
            _description: `할인방식`,
            _relation: ``,
            _referenceInfo: `예) RATE(정률할인), FIXED_WITH_QUANTITY(수량별 정액할인), PRICE(정액할인)`,
            _warning: ``,
            children: false
          },
          {
            name: `vendorItemId`,
            type: `Number`,
            _description: `옵션 ID`,
            _relation: ``,
            _referenceInfo: `예) 3223826213`,
            _warning: ``,
            children: false
          },
          ]
         },
	     {
	        name: `Pagination`,
	        type: `null`,
	        _description: `단건 조회로 페이징 없음`,
	        _relation: ``,
	        _referenceInfo: ``,
	        _warning: ``,
	        children: false
	     } 
	   ]
    }   
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/fms/apis/api/v2/vendors/A00013264/8000000000294/coupons`,
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
                "vendorItemId": 5500016112,
                "contractId": 10,
                "promotionName": "99%",
                "couponId": 91,
                "status": "PAUSED",
                "type": "RATE",
                "maxDiscountPrice": 1000000,
                "discount": 99.0,
                "startAt": "2017-11-22 00:00:00",
                "endAt": "2017-11-23 23:59:00"
              },
              {
                "vendorItemId": 53000439458,
                "contractId": 7,
                "promotionName": "자유계약 원피스 폭탄 세일 시즌 1",
                "couponId": 65,
                "status": "PAUSED",
                "type": "RATE",
                "maxDiscountPrice": 1000,
                "discount": 10.0,
                "startAt": "2017-09-22 00:00:00",
                "endAt": "2017-09-23 23:59:00"
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
