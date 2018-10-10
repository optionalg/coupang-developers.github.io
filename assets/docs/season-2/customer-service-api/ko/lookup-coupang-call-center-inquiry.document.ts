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
      name: ``,
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
        //_warning: `In V4 API, removed the counselingId,customerEmail and customerPhoneNumber from the request parameter.<br>
        //And replaced counselingId with inquiryId, they have the same business meaning.The search period changed from 1day to 7days.`
        _warning: `v2 version의 최대 조회 기간은 1일 입니다.`
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
    _description: `쿠팡 콜센터 문의를 조회합니다. 고객이 특정 상품에 대해 쿠팡 콜센터에 접수한 문의를 조회 할 수 있습니다.<br>
    	a. 옵션아이디와 조회기간 모두 값이 있을 경우, 해당 옵션아이디와 조회 기간내의 모든 상담을 조회 할 수 있습니다.<br>
        b. 옵션아이디만 값이 있을 경우, 해당 옵션아이디의 상담만 조회 할 수 있습니다.<br>
        c. 조회기간만 값이 있을 경우, 해당 조회 기간내의 상담만 조회 할 수 있습니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `조회 기간은 최대 7일까지 설정 가능합니다.`,
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
//      {
//        name: `CounselingId`,
//        require: false,
//        _description: `Counseling id`,
//        _relation: ``,
//        _referenceInfo: ``,
//        _warning: `This parameter doesn't need in V4 API`,
//        children: false
//      },
      {
        name: `inquiryStartAt`,
        require: false,
        _description: `조회시작일, format: yyyy-MM-dd`,
        _relation: ``,
        _referenceInfo: `1. vendorItemId가 널(null)인 경우, 반드시 이 파라미터를 사용해야 합니다.<br/>
                   해당 조회시작일과 종료일 기간의 모든 상담리스트를 조회할 수 있습니다 (inquiryEndAt - inquiryStartAt = 7d).<br/>
                   2. vendorItemId 값 있을시 이 파라미터는 반드시 입력해야할 사항X <br/>
                   a. 조회시작일과 조회종료일이 null인 경우, 해당 vendorItemId의 모든 상담리스트를 조회할수있습니다.<br/>
                   b. 조회시작일과 조회종료일 값이 있을 경우 해당 기간의 모든 삼담리스트를 조회할수있습니다.`,
        _warning: ``,
        children: false
      },
      {
        name: `inquiryEndAt`,
        require: false,
        _description: `조회종료일, format: yyyy-MM-dd`,
        _relation: ``,
        _referenceInfo: ``,
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
        //_description: `allowed input values : none , requestAnswer , answered`,
          _description: `처리상태
          <table class="table">
            <tr>
                <th>Name</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>NONE</td>
                <td>전체</td>
            </tr>
            <tr>
                <td>ANSWER</td>
                <td>답변완료</td>
            </tr>
            <tr>
                <td>NO_ANSWER</td>
                <td>미답변 : 판매자의 답변이 필요한 상태 </td>
            </tr>
            <tr>
            	<td>TRANSFER</td>
            	<td>미확인 : 쿠팡이 상담완료한 업체이관 건으로 판매자의 확인이 필요한 상태 : 답변은 필요없음</td>
        </tr>
          </table>`,
        _relation: ``,
        _referenceInfo: ``,
        //_warning: `In V4 API, the allowed value changed from "NONE , ANSWER , NO_ANSWER ,TRANSFER" to "none, requestAnswer, answered"`,
        _warning: ``,
        children: false
      },
      {
        name: `vendorItemId`,
        require: false,
        _description: `옵션아이디`,
        _relation: ``,
        _referenceInfo: `1. 조회시작일과 조회종료일이 null인 경우, 이 파라미터를 사용해야만 해당 vendorItemId 아래의 모든 상담리스트를 조회할 수 있습니다.<br/>
                   2. 조회시작일과 조회종료일 값이 있을 경우 이 파라미터는 입력할 필요 없습니다. <br/>`,
        _warning: ``,
        children: false
      },
      {
        name: `pageNum`,
        require: false,
        _description: `현재 페이지`,
        _relation: ``,
        _referenceInfo: `Default 1`,
        _warning: ``,
        children: false
      },
      {
        name: `pageSize`,
        require: false,
        _description: `페이지 사이즈`,
        _relation: ``,
        _referenceInfo: `Default 10, max = 30`,
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
      _description: `서버 응답 코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false
    },
    {
      name: `message`,
      type: `String`,
      _description: `서버 응답 메시지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false
    },
    {
      name: `data`,
      type: `Object`,
      _description: `결과`,
      _relation: ``,
      _referenceInfo: ``,
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
              name: `inquiryStatus`,
              type: `String`,
              _description: `문의상태`,
              _relation: ``,
              _referenceInfo: `progress 또는 complete`,
              _warning: ``,
              children: false,
            },
            {
              name: `csPartnerCounselingStatus`,
              type: `String`,
              _description: `답변여부`,
              _relation: ``,
              _referenceInfo: `requestAnswer 또는 answered`,
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
                  name: `answerId`,
                  type: `Number`,
                  _description: `답변 ID`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false,
                },
                {
                  name: `parentAnswerId`,
                  type: `Number`,
                  _description: `부모 이관글 ID`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false,
                },
                {
                  name: `partnerTransferStatus`,
                  type: `String`,
                  _description: `판매자 이관 상태`,
                  _relation: ``,
                  _referenceInfo: `none(대상 아님) 또는 requestAnswer(답변 요청) 또는 answered(답변 완료)`,
                  _warning: ``,
                  children: false,
                },
                {
                  name: `partnerTransferCompleteReason`,
                  type: `String`,
                  _description: `판매자이관글 완료사유`,
                  _relation: ``,
                  _referenceInfo: `
                      <table class="table">
                        <tr>
                            <th>CODE</th>
                            <th>NAME</th>
                        </tr>
                        <tr>
                            <td>NONE</td>
                            <td>없음</td>
                        </tr>
                        <tr>
                            <td>DISPUTE_PROCESS</td>
                            <td>직권처리</td>
                        </tr>
                        <tr>
                            <td>DISPUTE_PROCESS_COMPLETE</td>
                            <td>판매자확인</td>
                        </tr>
                        <tr>
                            <td>CANCEL</td>
                            <td>이관취소</td>
                    </tr>
                      </table>`,
                  _warning: ``,
                  children: false,
                },
                {
                  name: `answerType`,
                  type: `String`,
                  _description: `작성자 타입`,
                  _relation: ``,
                  _referenceInfo: `csAgent (상담사) 또는 vendor (판매자)`,
                  _warning: ``,
                  children: false,
                },
                {
                  name: `needAnswer`,
                  type: `Boolean`,
                  _description: `답변 필요여부`,
                  _relation: ``,
                  _referenceInfo: `true 또는 false`,
                  _warning: ``,
                  children: false,
                },
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
                type: `Long`,
                _description: `주문 번호`,
                _relation: ``,
                _referenceInfo: `19000009511537`,
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
              _description: `현재 페이지`,
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
              _description: `총 문의수`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `countPerPage`,
              type: `Number`,
              _description: `페이지 당 문의 수`,
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
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00010028/callCenterInquiries?inquiryStartAt=2018-01-07&inquiryEndAt=2018-01-08&vendorId=A00010028&partnerCounselingStatus=NONE&pageSize=2&pageNum=1`,
   code: [
      {
        language: `http`
      }
    ],
    response: {
          "code": 200,
          "message": "OK",
          "data": {
            "content": [
              {
                "inquiryId": 1015668177,
                "csPartnerCounselingStatus": "answered",
                "inquiryStatus": "progress",
                "vendorItemId": [
                  3285906659
                ],
                "itemName": "스파오(SPAO) 인조가죽 A라인 4부 스커트 SPWH749G22, (49)Khaki, L",
                "content": "상담이력",
                "answeredAt": "2018-01-08 16:56:16",
                "replies": [
                  {
                    "receptionistName": "AA몰",
                    "receptionist": "10000058",
                    "replyAt": "2018-01-08 16:44:27",
                    "content": "[판매자이관]\n◼주문번호: 10000011255416\n◼아이템: 스파오(SPAO) 인조가죽 A라인 4부 스커트 SPWH749G22, (49)Khaki, L\n◼고객명/연락처: <<이은옥/010-4520-8801>>\n◼문의내용: 고객 상품 반송하였다고 합니다.   반송장은 경비실에 맡겨서 모른다고 합니다.\n입고 확인후 환불 처리 부탁 드립니다.\n",
                    "answerId": 1027082307,
                    "parentAnswerId": 0,
                    "partnerTransferStatus": "answered",
                    "partnerTransferCompleteReason": "NONE",
                    "answerType": "csAgent",
                    "needAnswer": false
                  },
                  {
                    "receptionistName": "AA몰",
                    "receptionist": "elandmall",
                    "replyAt": "2018-01-08 16:56:16",
                    "content": "안녕하세요, \r\nAA몰입니다.\r\n\r\n1/3일 입고 된것으로 확인됩니다.\r\n\r\n3영업일이 정상 검수기간으로 시일이 소요되기에 양해 바랍니다.\r\n\r\n감사합니다.\r\n",
                    "answerId": 1027083739,
                    "parentAnswerId": 0,
                    "partnerTransferStatus": null,
                    "partnerTransferCompleteReason": "NONE",
                    "answerType": "vendor",
                    "needAnswer": false
                  }
                ],
                "inquiryAt": "2018-01-08 16:43:42",
                "buyerEmail": "zl*****@na",
                "buyerPhone": "010-****-8801",
                "orderId": 10000011255416,
                "orderDate": "2017-12-25 22:23:44",
                "receiptCategory": "기타문의>기타>전상담사통화요청",
                "saleStartedAt": "2017-12-12",
                "saleEndedAt": "2099-12-30"
              },
              {
                "inquiryId": 1015664934,
                "csPartnerCounselingStatus": "answered",
                "inquiryStatus": "progress",
                "vendorItemId": [
                  3361159025
                ],
                "itemName": "스파오(SPAO) 몬스터주식회사 맨투맨 (디즈니)_D/GYAY SPMB74VC19, (17)Dark Gray, S",
                "content": "상담이력",
                "answeredAt": "2018-01-08 16:16:02",
                "replies": [
                  {
                    "receptionistName": "AA몰",
                    "receptionist": "D002236",
                    "replyAt": "2018-01-08 15:56:11",
                    "content": "[입고완료이관]     \nㅁ 고객명: 이용환\nㅁ 주문번호:10000011241320\nㅁ 반송장번호: 840958324544  CJ대한통운\nㅁ 입고일자: 12/30\n반송장조회 결과 입고완료로 확인됩니다.     \n★환불승인★ 부탁드립니다.     \n반품입고후 3영업일이 경과되면 환불 자동승인처리가     \n되오니, 입고 상품의 문제발생 시 쿠팡확인요청으로     \n이의제기를 등록해주셔야 합니다.",
                    "answerId": 1027076645,
                    "parentAnswerId": 0,
                    "partnerTransferStatus": "answered",
                    "partnerTransferCompleteReason": "NONE",
                    "answerType": "csAgent",
                    "needAnswer": false
                  },
                  {
                    "receptionistName": "AA몰",
                    "receptionist": "elandmall",
                    "replyAt": "2018-01-08 16:16:02",
                    "content": "안녕하세요, \r\nAA몰입니다.\r\n\r\n담당부서측으로 내용 전달 완료 하였습니다.\r\n\r\n금일 내 확인될시 환불진행 하겠으나 , 평균 2영업일 소요되기에 익일까지 양해 바랍니다.\r\n\r\n감사합니다.\r\n",
                    "answerId": 1027079048,
                    "parentAnswerId": 0,
                    "partnerTransferStatus": null,
                    "partnerTransferCompleteReason": "NONE",
                    "answerType": "vendor",
                    "needAnswer": false
                  }
                ],
                "inquiryAt": "2018-01-08 15:55:32",
                "buyerEmail": "jr*****@na",
                "buyerPhone": "010-****-2763",
                "orderId": 10000011241320,
                "orderDate": "2017-12-25 10:07:33",
                "receiptCategory": "취소/반품 후단관리>회수확인>고객반송확인",
                "saleStartedAt": "2017-12-12",
                "saleEndedAt": "2099-12-30"
              }
            ],
            "pagination": {
              "currentPage": 1,
              "totalPages": 7,
              "totalElements": 13,
              "countPerPage": 2
            }
          }
        },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
