export const  lookupCouponItemByVendoritemidDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `coupon-api`,   // input category ex) exchange-service-api
    id: `lookup-coupon-item-by-vendoritemid`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_coupon_item_by_vendoritemid`,
    name: `쿠폰아이템목록 벤더아이템아이디로 조회`,       // use display name, i will change 'translation key'
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
    path: `/v2/providers/fms/apis/api/v1/vendors/{vendorId}/coupons/{couponId}/items/{vendorItemId}`,
    HMACPath: `/v2/providers/fms/apis/api/v1/vendors/{vendorId}/coupons/{couponId}/items/{vendorItemId}`,
    _description: `현재 적용된 쿠폰아이템을 벤더아이템아이디로 조회하기 위한 API입니다.`,
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
            _description: `쿠폰 ID(Wing의 쿠폰 번호)`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
        },
        {
            name: `vendorItemId`,
            type: `Number`,
            require: true,
            _description: `벤더아이템 ID`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
        },
    ],
    queryStringParameters: [
        {
            name: `type`,
            type: `String`,
            require: true,
            _description: `vendorItemId`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
        },
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
      _description: `쿠폰 아이템 정보 리스트 데이터`,
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
          _description: `쿠폰 아이템 리스트`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [{
            name: `couponItemId`,
            type: `Number`,
            _description: `쿠폰아이템 아이디`,
            _relation: ``,
            _referenceInfo: `예) 80984`,
            _warning: ``,
            children: false
          }, 
          {
            name: `couponId`,
            type: `Number`,
            _description: `쿠폰 아이디(Wing의 쿠폰 번호)`,
            _relation: ``,
            _referenceInfo: `예) 75, 80`,
            _warning: ``,
            children: false
          },
          {
            name: `vendorItemId`,
            type: `Number`,
            _description: `벤더아이템 아이디`,
            _relation: ``,
            _referenceInfo: `예) 3223826213`,
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
            name: `endAt`,
            type: `String`,
            _description: `유효종료일`,
            _relation: ``,
            _referenceInfo: `예)2017-09-01 00:00:00`,
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
            </table>`,
            _warning: ``,
            children: false
          } ]
         },
        {
          name: `Pagination`,
          type: `Array`,
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
     endpoint: `https://api-gateway.coupang.com/v2/providers/fms/apis/api/v1/vendors/A00000001/coupons/76/items/3223826213?type=vendorItemId`,
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
        "content": {
          "couponItemId": 80984,
          "couponId": 76,
          "vendorItemId": 3223826213,
          "startAt": "2017-08-04 01:00:00",
          "endAt": "2017-09-01 00:00:00",
          "status": "APPLIED"
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
