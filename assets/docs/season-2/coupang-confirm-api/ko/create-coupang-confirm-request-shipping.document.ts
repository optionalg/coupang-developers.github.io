export const createCoupangConfirmRequestShippingDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `coupang-confirm-api`,   // input category ex) exchange-service-api
    id: `create-coupang-confirm-request-shipping`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `create_coupang_confirm_request_shipping`,
    name: `쿠팡확인요청 생성(부족배송비)`,       // use display name, i will change 'translation key'
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
    lastUpdateDate: `2017-07-18`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/wing_api/apis/internal-api/v2/vendors/{vendorId}/coupang-confirmations/shipping-fee`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v2/vendors/{vendorId}/coupang-confirmations/shipping-fee`,
    _description: `고객에게 반품하려는 제품을 받은 후 추가로 받을 배송비가 있을 때 쿠팡에게 배송비요청을 위한 API`,
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
