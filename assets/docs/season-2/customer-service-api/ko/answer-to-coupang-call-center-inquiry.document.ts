export const customerServiceCenterEnquiryResponseDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `customer-service-api`,   // input category ex) exchange-service-api
    id: `answer-to-coupang-call-center-inquiry`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `answer_to_coupang_call_center_inquiry`,
    name: `쿠팡 콜센터 문의답변`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: ``,
      anchorId: ``,
    },

  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: ``,
        path: ``,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: `<strong>쿠팡 콜센터 문의답변 v1의 사용률이 지난 3개월동안 0%를 나타내어 2017년으로 지원이 종료되었습니다.<br>
                   v1을 사용중이신 판매자분들이 있다면 v4로 변경하여 사용하시기 바랍니다.</strong>`
      },
    ],
    nextVersions: [
      {
        apiName: `쿠팡 콜센터 문의답변`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/callCenterInquiries/{inquiryId}/replies`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  apiInfo: {
    state: `release`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-22`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Lovis`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/callCenterInquiries/{inquiryId}/replies`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/callCenterInquiries/{inquiryId}/replies`,
    _description: `판매자가 쿠팡 콜센터를 통해 접수된 문의에 대해 답변합니다.<br>`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `동일한 inquiry에 대해 중복해서 답변을 보내면 에러가 발생합니다. 
                    <br/>쿠팡 콜센터 문의조회 API를 이용하여 처리상태가 미답변(NO_ANSWER)인 inquiryId, answerId를 확인 후 답변하시기 바랍니다.`,
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
        _referenceInfo: `판매자가 어느 질문을 대답해야할지를 입력합니다.<br/>먼저 쿠팡 콜센터 문의조회 API를 이용하여 inquiryId를 확인합니다.`,
        _warning: ``,
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `vendorId`,
        type: `String`,
        require: false,
        _description: `쿠팡에서 발급한 업체별 코드값`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `inquiryId`,
        type: `String`,
        require: false,
        _description: `Inquiry ID`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `content`,
        type: `String`,
        require: false,
        _description: `답변 내용`,
        _relation: ``,
        _referenceInfo: `답변 내용 중 줄넘김을 위해서는 \\n를 사용하시기 바랍니다.`,
        _warning: ``,
        children: false
      },
      {
        name: `replyBy`,
        type: `String`,
        require: false,
        _description: `응답자`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
       {
        name: `parentAnswerId`,
        type: `Number`,
        require: false,
        _description: `부모이관글 ID(answerId)`,
        _relation: ``,
        _referenceInfo: `쿠팡 콜센터 문의 조회API에서 조회한 answerId 를 입력해야 됩니다.`,
        _warning: ``,
        children: false
      }
    ]
  },
  errorSpec: [
        {
          status: 400,
          _description: `Could not read JSON: Illegal unquoted character ((CTRL-CHAR, code 13)): has to be escaped using backslash to be included in string value...
        : 답변내용(content)을 JSON 형식에 맞게 작성해야 합니다. newline, backslash, Carriage return 등의 문자는 JSON 형태로 변환이 필요합니다.`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``
        },
        {
          status: 400,
          _description: `The inquiry can't be answer. It can do only inquiryStatus:progress, partnerTransferStatus:requestAnswer
         : 동일한 inquiry에 대해 중복해서 답변을 보낼 경우 에러가 발생합니다. 미답변(NO_ANSWER)인 상태의 문의에만 답변을 보내기 바랍니다.`,
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
      _referenceInfo: `200/400/500`,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `서버 응답 메세지`,
      _relation: ``,
      _referenceInfo: `If success,it shows OK`,
      _warning: ``,
      children: false,
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00010028/callCenterInquiries/1007837444/replies`,
    code: [
      {
        language: `http`,
        codeblock: {
        	"vendorId":"A00010028",
        	"inquiryId":"1007837444",
        	"content":"안녕하세요\n주문 확인 부탁드립니다.\n수고하세요.",
        	"replyBy":"wanger",
            "parentAnswerId":"1023208324" 
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
