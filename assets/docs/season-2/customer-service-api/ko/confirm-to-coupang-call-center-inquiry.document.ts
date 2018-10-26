export const customerServiceCenterInquireConfirmDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `customer-service-api`,   // input category ex) exchange-service-api
    id: `confirm-to-coupang-call-center-inquiry`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `confirm_to_coupang_call_center_inquiry`,
    name: `쿠팡 콜센터 문의확인`,       // use display name, i will change 'translation key'
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
    lastUpdateDate: `2018-01-08`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `체리`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/callCenterInquiries/{inquiryId}/confirms`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/callCenterInquiries/{inquiryId}/confirms`,
    _description: `쿠팡이 상담완료한 업체이관 건으로 판매자의 확인이 필요한 상태(미확인 상태:TRANSFER)일 때  이 API를 이용하여 확인 처리합니다.<br>`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `vendor ID`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
      },
      {
        name: `inquiryId`,
        require: true,
        _description: `Inquiry ID`,
        _relation: ``,
        _referenceInfo: `판매자가 어느 질문을 확인해야할 지를 입력합니다.<br/>먼저 쿠팡 콜센터 문의조회 API를 사용하여 미확인 상태(TRANSFER)인 inquiry 값을 확인합니다.`,
        _warning: ``,
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `confirmBy`,
        type: `String`,
        require: false,
        _description: `판매자 ID`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }
    ]
  },
  errorSpec: false,
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `서버 응답 코드`,
      _relation: ``,
      _referenceInfo: `200/400/500`,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `서버 응답 메시지`,
      _relation: ``,
      _referenceInfo: `If success,it shows OK`,
      _warning: ``,
      children: false,
    }
  ],
  sample: {
       endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00010028/callCenterInquiries/1007837444/confirms`,
    code: [
      {
        language: `http`,
        codeblock: {
        	"confirmBy":"wanger"
        }
      }
    ],
    response: {
      "code": "200",
      "message": "OK"
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
