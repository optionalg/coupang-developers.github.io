export const customerEnquiryResponseDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `customer-service-api`,   // input category ex) exchange-service-api
    id: `answer-to-customer-inquiry`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `answer_to_customer_inquiry`,
    name: `고객문의 답변`,       // use display name, i will change 'translation key'
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
        apiName: `상담에대한 회신(셀러 -> 고객)`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/customer-service/customer/replies/{inquiryId}`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: `v1의 counselingId에서 inquiryId로 변경되었지만 동일한 의미입니다. `
      },
    ],
    nextVersions: [
      {
        apiName: `고객문의 답변`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/onlineInquiries/{inquiryId}/replies`,
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
    developer: `Jamin`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/onlineInquiries/{inquiryId}/replies`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/onlineInquiries/{inquiryId}/replies`,
    _description: `고객문의(inquiryId)에 대해 답변할 수 있습니다<br/>하나의 고객문의(inquiryId)에 답변할 수 있습니다. 먼저 상품별 고객문의 조회 API를 사용하여 inquiryId를 확인하기 바랍니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `<br/>답변내용(content)을 JSON 형식에 맞게 작성하시기 바랍니다.`,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `inquiryId`,
        require: true,
        _description: `Inquiry ID`,
        _relation: ``,
        _referenceInfo: `판매자가 어느 질문을 답변할 지를 입력합니다.<br/>먼저 상품별 고객문의 조회 API를 사용하여 inquiryId를 확인하기 바랍니다.`,
        _warning: ``,
      },
      {
        name: `vendorId`,
        require: true,
        _description: `vendor ID`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
        {
            name: `content`,
            type: `String`,
            require: true,
            _description: `답변 내용.`,
            _relation: ``,
            _referenceInfo: `답변 내용 중 줄넘김을 위해서는 \\n를 사용하시기 바랍니다.`,
            _warning: ``,
            children: false
          },
          {
              name: `vendorId`,
              type: `String`,
              require: true,
              _description: `벤더 아이디`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
          },
          {
              name: `replyBy`,
              type: `String`,
              require: false,
              _description: `응답자 혹은 벤더 아이디`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
          }
      ]
  },
  errorSpec: [
        {
          status: 400,
          _description: `Could not read JSON: Illegal unquoted character ((CTRL-CHAR, code 10)): has to be escaped using backslash to be included in string value....
    : 답변내용(content)을 JSON 형식에 맞게 작성해야 합니다. newline, backslash, Carriage return 등의 문자는 JSON 형태로 변환이 필요합니다.`,
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
      children: false
    },
    {
      name: `message`,
      type: `String`,
      _description: `서버 응답 메세지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false
    }
  ],
  sample: {
    endpoint:`https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00010028/onlineInquiries/846/replies`,
    code: [
      {
        language: `http`,
        codeblock: {
          "content":"안녕하세요\n블랙색상이 주문량이 많아 입고 지연중입니다.\n19일 입고예정으로 확인됩니다.",
          "vendorId":"A00010028",
          "replyBy":"wanger"
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
