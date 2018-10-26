export const  lookupRequestStatusDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `coupon-api`,   // input category ex) exchange-service-api
    id: `lookup-request-status`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_request_status`,
    name: `요청상태 확인`,       // use display name, i will change 'translation key'
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
    path: `/v2/providers/fms/apis/api/v1/vendors/{vendorId}/requested/{requestedId}`,
    HMACPath: `/v2/providers/fms/apis/api/v1/vendors/{vendorId}/requested/{requestedId}`,
    _description: `requestedId를 통해 요청 결과를 확인하는 API입니다.
<br/>쿠폰생성, 쿠폰파기, 쿠폰아이템 생성, 쿠폰아이템 파기 API 요청 시에
<br/>반환되는 requestedId 값을 가지고 성공/실패(DONE/FAIL) 결과를 확인할 때 사용합니다.`,
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
            name: `requestedId`,
            type: `Number`,
            require: true,
            _description: `결과를 조회할 ID`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
        }
    ]
  },
  errorSpec: [
        {
          status: 400,
          _description: `업체정보의 권한을 확인하세요`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `failedVendorItems":[{"vendorItemId":32261389517,"reason":"[CIE00] 유효하지 않은 옵션아이디 입니다.`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `failedVendorItems":[{"vendorItemId":32261388477,"reason":"[CIR06] 옵션 상품을 찾지 못했습니다.`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `ailedVendorItems":[{"vendorItemId":3226138847,"reason":"[CIR08] 해당 옵션은 이미 다른 쿠폰에 발행되어져 있습니다.`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `failedVendorItems":[{"vendorItemId":3226138847,"reason":"[CIR08] 해당 옵션은 이미 다른 쿠폰에 발행되어져 있습니다.`,
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
          children: [

          {
            name: `couponId`,
            type: `Number`,
            _description: `쿠폰 ID(Wing의 쿠폰 번호)`,
            _relation: ``,
            _referenceInfo: `예) 70, 85, 778`,
            _warning: ``,
            children: false
          }, 
          {
            name: `requestedId`,
            type: `String`,
            _description: `처리 상태 조회를 위한 요청아이디`,
            _relation: ``,
            _referenceInfo: `예) 1542675975663862164`,
            _warning: ``,
            children: false
          }, 
          {
            name: `status`,
            type: `String`,
            _description: `처리 상태`,
            _relation: ``,
            _referenceInfo: `
            <table class="table">
                <tr>
                    <th>구분코드</th>
                    <th>설명</th>
                </tr>
                <tr>
                    <td>REQUESTED</td>
                    <td>요청됨</td>
                </tr>
                <tr>
                    <td>FAIL</td>
                    <td>실패</td>    
                </tr>
                <tr>
                    <td>DONE</td>
                    <td>성공</td>    
                </tr>
            </table>`,
            _warning: ``,
            children: false
          }, 
          {
            name: `succeeded`,
            type: `Number`,
            _description: `성공 개수`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `total`,
            type: `Number`,
            _description: `요청 건수(*쿠폰 아이템생성의 경우 vendorItemId의 전체 갯수)`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `type`,
            type: `String`,
            _description: `요청타입`,
            _relation: ``,
            _referenceInfo: `
            <table class="table">
                <tr>
                    <th>구분코드</th>
                    <th>설명</th>
                </tr>
                <tr>
                    <td>COUPON_PUBLISH</td>
                    <td>쿠폰생성</td>
                </tr>
                <tr>
                    <td>COUPON_EXPIRE</td>
                    <td>쿠폰파기</td>    
                </tr>
                <tr>
                    <td>COUPON_ITEM_PUBLISH</td>
                    <td>쿠폰아이템생성</td>    
                </tr>
                <tr>
                    <td>COUPON_ITEM_EXPIRE</td>
                    <td>쿠폰아이템 파기</td>    
                </tr>
            </table>`,
            _warning: ``,
            children: false
          },
           {
            name: `failed`,
            type: `Number`,
            _description: `실패 개수`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          }, 
          {
            name: `failedVendorItems`,
            type: `Array`,
            _description: `실패한 정보에 대한 상세 데이터`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children:  [
                  {
                    name: `reason`,
                    type: `String`,
                    _description: `실패 이유`,
                    _relation: ``,
                    _referenceInfo: ``,
                    _warning: ``,
                    children: false
                  }, 
                  {
                    name: `vendorItemId`,
                    type: `Long`,
                    _description: `실패한 vendorItemId`,
                    _relation: ``,
                    _referenceInfo: ``,
                    _warning: ``,
                    children: false
                  }         
                ]
          } ]
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
    endpoint: `https://api-gateway.coupang.com/v2/providers/fms/apis/api/v1/vendors/A00000001/requested/649102321051192483`,
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
              "couponId":778,
              "requestedId": "4080133932843441",
              "type": "COUPON_PUBLISH",
              "status": "DONE",
              "total": 1,
              "succeeded": 1,
              "failed": 0,
              "failedVendorItems": [
                 
              ]
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
