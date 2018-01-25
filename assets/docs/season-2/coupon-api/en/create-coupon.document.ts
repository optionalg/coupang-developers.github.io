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
    lastUpdateDate: `2017-08-30`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Settlement`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/fms/apis/api/v1/vendors/{vendorId}/coupons`,
    HMACPath: `/v2/providers/fms/apis/api/v1/vendors/{vendorId}/coupons`,
    _description: `계약에 기반한 신규 쿠폰 생성을 요청하는 API입니다. 본 API는 비동기방식으로 프로세스에 대한 요청 만을 수행하고 있어
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
        _description: `최대할인금액(min:10 ~ max:50,000)`,
        _relation: ``,
        _referenceInfo: ``,
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
