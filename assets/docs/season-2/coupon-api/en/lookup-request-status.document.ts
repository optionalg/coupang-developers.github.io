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
    _description: `요청결과를 requestId를 통해 확인하는 API입니다.
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
        }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `receipId`,
        type: `Number`,
        require: true,
        _description: `반품 접수번호`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `receiptType`,
        type: `String`,
        require: true,
        _description: `RETURN`,
        _relation: ``,
        _referenceInfo: `반품`,
        _warning: ``,
        children: false
      },
      {
        name: `optionDtos`,
        type: `Object`,
        require: true,
        _description: `옵션 그룹`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `requestType`,
            type: `String`,
            require: true,
            _description: `SHIPPING_FEE`,
            _relation: ``,
            _referenceInfo: `부족배송비에 대한 쿠팡확인요청 구분값`,
            _warning: ``,
            children: false,
          },
          {
            name: `confirmRequestAmount`,
            type: `Number`,
            require: true,
            _description: `요청할 금액(최대) : 초도배송비 +반품배송비`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
          },        
           {
            name: `detailReason`,
            type: `String`,
            require: true,
            _description: `상세 사유(최대 500자)`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `attachments`,
            type: `Array`,
            require: true,
            _description: `첨부 파일을 함께 접수할 때 파일 정보로서 첨부파일 필수 여부는 각각의 업체별로 쿠팡 내부에서 첵크합니다.`,
            _relation: ``,
            _referenceInfo: `첨부 파일 이름&첨부 파일 경로`,
            _warning: ``,
            children: [
              {
                name: `name`,
                type: `String`,
                require: true,
                _description: `첨부 파일 이름`,
                _relation: ``,
                _referenceInfo: `유효한 확장명: png,jpg,jpeg,pjpeg,gif,avi,wmv,mp4`,
                _warning: ``,
                children: false,
              },
              {
                name: `path`,
                type: `String`,
                require: true,
                _description: `첨부 파일 경로`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false,
              },
            ]
          }
        ]
      },
    ]
  },
  errorSpec: [
    {
      status: 400,
      _description: `배송비를 입력해 주세요.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `상세사유를 입력해 주세요.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `첨부파일은 필수 입니다.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `첨부파일명을 입력해 주세요.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `첨부파일 경로를 입력해 주세요.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `사유를 입력해 주세요.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `확인요청수량을 입력해 주세요.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `최대 500 자 이하로 입력해 주세요.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `쿠팡확인요청을 이미 신청했습니다.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `쿠팡확인요청 가능일이 아닙니다.`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    }
  ],
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `http 쿠팡확인요청 상태 코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `쿠팡확인요청 상태 메시지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Number`,
      _description: `쿠팡확요청 ID`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
     {
      name: `success`,
      type: `Boolean`,
      _description: `true or false`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `responseCode`,
      type: `Number`,
      _description: `응답코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
     {
      name: `responseMessage`,
      type: `String`,
      _description: `SUCCESS or FAIL`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v2/vendors/{vendorId}/coupang-confirmations/shipping-fee`,
    code: [
      {
        language: `http`,
        codeblock: {
            "receiptId" : "370881",
            "receiptType" : "RETURN",
            "optionDtos" : [ {
                "requestType" : "SHIPPING_FEE",
                "confirmRequestAmount" : "2500",
                "detailReason" : "Detail Reason",
                "attachments" : [ {
                    "name" : "image01.png",
                    "path" : "MEDIATION/2017/06/20/9/7/A00013264/3e5c7c99-75cf-46f9-a4bd-edaf00ccc0da.png"
                } ]
            } ]
        }
      }
    ],
    response: {
        "code": "200",
        "message": "OK",
        "data": 38,
        "success": true,
        "responseCode": 0,
        "responseMessage": "SUCCESS"
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
