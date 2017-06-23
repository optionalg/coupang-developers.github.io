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
      name: `상담에 대한 회신(셀러 -> 쿠팡)`,
      anchorId: ``,
    },

  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: `상담에대한회신(셀러 -> 쿠팡)`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/customer-service/coupang/replies/{counselingId}`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: `Replaced counselingId with inquiryId, they have the same business meaning.`
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
    _description: `셀러가 쿠팡 콜센터를 통해 접수된 질문에 대해 이 API를 이용하여 답변합니다.<br>
                   Note: API 한번 호출시, 단 하나의 질문만 대답할수 있습니다. 쿠팡의 질문에 대답하기전에 customer service inquiry api를 사용하여 inquiryId (inquiryId =question Id)를 받으십시오.`,
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
        _referenceInfo: `이 파라미터는 셀러가 어느 질문을 대답해야할지를 가르킴니다.<br>우선  /v4/vendors/{vendorId}/callCenterInquiries API 를 사용하여 이 값을 받으십시오.`,
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
        _referenceInfo: ``,
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
      }
    ]
  },
  errorSpec: false,
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `결과코드`,
      _relation: ``,
      _referenceInfo: `200/400/500`,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `실패원인`,
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
          "content":"test api gateway",
          "vendorId":"A00010028",
          "replyBy":"wanger",
          "inquiryId":"1007837444"
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
