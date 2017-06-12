export const lookupCustomerServiceCenterEnquiryDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `customer-service-api`,   // input category ex) exchange-service-api
    id: `lookup-coupang-call-center-inquiry`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_coupang_call_center_inquiry`,
    name: `쿠팡 콜센터 문의조회`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `상담문의(쿠팡 -> 셀러)`,
      anchorId: ``,
    },

  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: `상담문의(쿠팡 -> 셀러))`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/customer-service/coupang/inquiries`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: `In V4 API, removed the counselingId,customerEmail and customerPhoneNumber from the request parameter.<br>
        And replaced counselingId with inquiryId, they have the same business meaning.The search period changed from 1day to 7days.`
      },
    ],
    nextVersions: [
      {
        apiName: `쿠팡 콜센터 문의조회`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/callCenterInquiries`,
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
    httpMethod: `GET`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/callCenterInquiries`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/callCenterInquiries`,
    _description: `쿠팡 콜센터 문의를 조회합니다. 이 API를 이용하여 고객님이 특정 상품에 대해 쿠팡 고객센터 또는 셀러콜센터에 접수한 상담을 조회 할 수 있습니다.<br>
                   a. 옵션아이디와 시간간격 있을시 해당 옵션아이디와 기간내의 상담을 조회할수있습니다<br>
                   b. 옵션아이디만 있을시 해당 옵션아이디내의 상담을 조회할수있습니다<br>
                   c. 시간간격만 있을시 해당 기간내의 상담을 조회할수있습니다`,
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
      }
    ],
    queryStringParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `벤더아이디`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `CounselingId`,
        require: false,
        _description: `Counseling id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: `This parameter doesn't need in V4 API`,
        children: false
      },
      {
        name: `inquiryStartAt`,
        require: false,
        _description: `Inquired from, format: yyyy-MM-dd`,
        _relation: ``,
        _referenceInfo: `1. vendorItemId가 널(null)인 경우, 반드시 이 파라미터를 상용해야합니다. 조회시작일과 종료일은 동일한 하루일수 없고 최대시간 간격은 하루입니다.<br>
                   해당 조회시작일과 종료일 기간의 모든 상담리스트를 조회할수있습니다 (inquiryEndAt - inquiryStartAt = 7d).<br>
                   2. vendorItemId 값 있을시 이 파라미터는 반드시 입력해야할 사항X <br>
                   a. 조회시작일과 조회종요일 널인 경우, 해당 vendorItemId의 모든 상담리스트를 조회할수있습니다.<br>
                   b. 조회시작일과 조회종요일 값 있을시 해당 기간의 모든 삼담리스트를 조회할수있습니다.`,
        _warning: ``,
        children: false
      },
      {
        name: `inquiryEndAt`,
        require: false,
        _description: `Inquired to, format: yyyy-MM-dd`,
        _relation: ``,
        _referenceInfo: `inquiryEndAt의 비고는 inquiryStartAt과 같습니다.inquiryStartAt의 비고를 참조해 주십시오`,
        _warning: ``,
        children: false
      },
      {
        name: `orderId`,
        require: false,
        _description: `주문시 생성된 아이디`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `partnerCounselingStatus`,
        require: true,
        _description: `allowed input values : none , requestAnswer , answered`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: `In V4 API, the allowed value changed from "NONE , ANSWER , NO_ANSWER ,TRANSFER" to "none, requestAnswer, answered"`,
        children: false
      },
      {
        name: `vendorItemId`,
        require: false,
        _description: `옵션아이디`,
        _relation: ``,
        _referenceInfo: `1. 조회시작일과 조회종요일이 널인 경우, 이 파라미터를 사용해야만 해당 vendorItemId 아래의 모든 상담리스트 조회할수있습니다.<br>
                   2. 조회시작일과 조회종요일 값 있을시  이 파라미터는 반드시 입력해야할 사항X <br>
                   조회시작일과 종료일은 동일한 하루일수 없음; 해당 조회시작일과 종료일 기간의 모든 상담리스트를 조회할수있습니다.<br>
                   (inquiryEndAt - inquiryStartAt = 7d)`,
        _warning: ``,
        children: false
      },
      {
        name: `pageNum`,
        require: false,
        _description: `페이지 넘버`,
        _relation: ``,
        _referenceInfo: `Default 1, if pageNum is null, then will use the default value.`,
        _warning: ``,
        children: false
      },
      {
        name: `pageSize`,
        require: false,
        _description: `페이지 사이즈, 최대 페이지 사이즈는 50입니다.`,
        _relation: ``,
        _referenceInfo: `Default 10, max = 50 ,if pageSize is null, then will use the default value.`,
        _warning: ``,
        children: false
      }
    ],
    bodyParameters:false
  },
  errorSpec: false,
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `Http request status code`,
      _relation: ``,
      _referenceInfo: `eg: 400,401 and so on`,
      _warning: ``,
      children: false
    },
    {
      name: `message`,
      type: `String`,
      _description: `If inquiry success, will show success message;<br>If inquiry fail, will show the corresponding message`,
      _relation: ``,
      _referenceInfo: `200 : OK <br> 400 : Bad request , will show corresponding bad request message <br> 500 : Internal error`,
      _warning: ``,
      children: false
    },
    {
      name: `data`,
      type: `Object`,
      _description: `결과`,
      _relation: ``,
      _referenceInfo: `결과 내용`,
      _warning: ``,
      children: [
        {
          name: `content`,
          type: `Array`,
          _description: `결과`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children:[
            {
              name: `inquiryId`,
              type: `Number`,
              _description: `상담번호`,
              _relation: ``,
              _referenceInfo: `질문 id`,
              _warning: ``,
              children: false,
            },
            {
              name: `csPartnerCounselingStatus`,
              type: `String`,
              _description: `답변여부`,
              _relation: ``,
              _referenceInfo: `상품`,
              _warning: ``,
              children: false,
            },
            {
              name: `vendorItemId`,
              type: `Number`,
              _description: `옵션아이디`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `itemName`,
              type: `String`,
              _description: `아이템 이름`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `content`,
              type: `String`,
              _description: `문의 내용`,
              _relation: ``,
              _referenceInfo: `질문 내용`,
              _warning: ``,
              children: false,
            },
            {
              name: `answeredAt`,
              type: `String`,
              _description: `답장 날자`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `replies`,
              type: `Array`,
              _description: `답장 목록`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: [
                {
                  name: `receptionistName`,
                  type: `String`,
                  _description: `담당자 이름`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false,
                },
                {
                  name: `receptionist`,
                  type: `String`,
                  _description: `담당자`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false,
                },
                {
                  name: `replyAt`,
                  type: `String`,
                  _description: `답장일`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false,
                },
                {
                  name: `content`,
                  type: `String`,
                  _description: `답변내용`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false,
                }
              ]
            },
            {
              name: `inquiryAt`,
              type: `String`,
              _description: `문의 날자`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `buyerEmail`,
              type: `String`,
              _description: `고객아이디`,
              _relation: ``,
              _referenceInfo: `이메일`,
              _warning: ``,
              children: false,
            },
            {
              name: `buyerPhone`,
              type: `String`,
              _description: `고객전화번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `orderId`,
              type: `Number`,
              _description: `주문번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `orderDate`,
              type: `String`,
              _description: `주문일시`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `receiptCategory`,
              type: `String`,
              _description: `문의유형`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `saleStartedAt`,
              type: `String`,
              _description: `판매시작일시`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `saleEndedAt`,
              type: `String`,
              _description: `판매종료일시`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
          ]
        },
        {
          name: `pagination`,
          type: `Object`,
          _description: `Pagination information`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children:[
            {
              name: `currentPage`,
              type: `Number`,
              _description: `현재 페이지 번호`,
              _relation: ``,
              _referenceInfo: `default=1`,
              _warning: ``,
              children: false,
            },
            {
              name: `totalPages`,
              type: `Number`,
              _description: `총 페이지수`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `totalElements`,
              type: `Number`,
              _description: `총 결과수`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `countPerPage`,
              type: `Number`,
              _description: `페이지 당 요소 수량`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            }
          ]
        }
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00010028/callCenterInquiries?vendorId=A00010028&inquiryStartAt=2017-03-08&inquiryEndAt=2017-03-09&partnerCounselingStatus=none&pageNum=1&pageSize=10`,
    code: [
      {
        language: `http`
      }
    ],
    response: {
      "code": "200",
      "message": "OK",
      "data": {
        "content": [
          {
            "inquiryId": 1007837450,
            "csPartnerCounselingStatus": "none",
            "vendorItemId": [
              3000000151
            ],
            "itemName": "하<와>이-\"테\t스트\"- 쇼`핑-'기저귀1'",
            "content": "[통합이관]\n◼주문번호: 25000000000090\n◼아이템: 하&lt;와&gt;이-&quot;테\t스트&quot;- 쇼`핑-&#39;기저귀1&#39;\n◼문의자: 대상 아님\n◼문의내용: \n◼요청내용: ",
            "answeredAt": null,
            "replies": [],
            "inquiryAt": "2017-03-09 17:35:02",
            "buyerEmail": "cacacoo@coupang.com",
            "buyerPhone": "010-5232-4251",
            "orderId": 25000000000090,
            "orderDate": "2017-01-25 16:42:50",
            "receiptCategory": "배송문의>배송불량>상품누락(재배송 요청)",
            "saleStartedAt": "2015-10-29",
            "saleEndedAt": "2030-12-31"
          },
          {
            "inquiryId": 1007837449,
            "csPartnerCounselingStatus": "none",
            "vendorItemId": [
              3000000151
            ],
            "itemName": "하<와>이-\"테\t스트\"- 쇼`핑-'기저귀1'",
            "content": "발신번호:&lt;&lt;010-5232-4251&gt;&gt;\nㅈㅁㄹㄷㅈㅁㄹㄷ",
            "answeredAt": null,
            "replies": [],
            "inquiryAt": "2017-03-09 17:31:11",
            "buyerEmail": "cacacoo@coupang.com",
            "buyerPhone": "010-5232-4251",
            "orderId": 25000000000090,
            "orderDate": "2017-01-25 16:42:50",
            "receiptCategory": "배송지시 이후 반품문의>상품불량 반품>사용중결함 반품",
            "saleStartedAt": "2015-10-29",
            "saleEndedAt": "2030-12-31"
          },
          {
            "inquiryId": 1007837445,
            "csPartnerCounselingStatus": "none",
            "vendorItemId": [
              3000000151
            ],
            "itemName": "하<와>이-\"테\t스트\"- 쇼`핑-'기저귀1'",
            "content": "[고객IN]\n◼아이템: 하&lt;와&gt;이-&quot;테\t스트&quot;- 쇼`핑-&#39;기저귀1&#39;\n◼문의자: &lt;&lt;이태훈(회원(본인))&gt;&gt;\n◼문의내용: \n◼안내 및 처리사항: ",
            "answeredAt": null,
            "replies": [],
            "inquiryAt": "2017-03-09 16:52:30",
            "buyerEmail": "taylor@coupang.com",
            "buyerPhone": "010-3639-9486",
            "orderId": 20000000000004,
            "orderDate": "2016-07-27 09:47:50",
            "receiptCategory": "쇼핑상품문의>쇼핑상품상세문의>AS방법문의",
            "saleStartedAt": "2015-10-29",
            "saleEndedAt": "2030-12-31"
          },
          {
            "inquiryId": 1007837444,
            "csPartnerCounselingStatus": "none",
            "vendorItemId": [
              3000000151
            ],
            "itemName": "하<와>이-\"테\t스트\"- 쇼`핑-'기저귀1'",
            "content": "[고객IN]\n◼아이템: 하&lt;와&gt;이-&quot;테\t스트&quot;- 쇼`핑-&#39;기저귀1&#39;\n◼문의자: &lt;&lt;이태훈(회원(본인))&gt;&gt;\n◼문의내용: \n◼안내 및 처리사항: ",
            "answeredAt": null,
            "replies": [],
            "inquiryAt": "2017-03-09 16:28:52",
            "buyerEmail": "taylor@coupang.com",
            "buyerPhone": "010-3639-9486",
            "orderId": 20000000000004,
            "orderDate": "2016-07-27 09:47:50",
            "receiptCategory": "쇼핑상품문의>쇼핑상품상세문의>AS방법문의",
            "saleStartedAt": "2015-10-29",
            "saleEndedAt": "2030-12-31"
          }
        ],
        "pagination": {
          "currentPage": 1,
          "totalPages": 1,
          "totalElements": 4,
          "countPerPage": 10
        }
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
