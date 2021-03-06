export const lookupCustomerInquiryByProductDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `customer-service-api`,   // input category ex) exchange-service-api
    id: `lookup-customer-inquiry-by-product`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_customer_inquiry_by_product`,
    name: `상품별 고객문의 조회`,       // use display name, i will change 'translation key'
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
        apiName: `상담문의(고객 -> 셀러)`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/customer-service/customer/inquiries`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        //_warning: `In both version APIs, the search period changed from 1day to 7days.`
        _warning: `v2 version의 최대 조회 기간은 1일 입니다. `
      },
    ],
    nextVersions: [
      {
        apiName: `상품별 고객문의 조회`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/onlineInquiries`,
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
    httpMethod: `GET`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/onlineInquiries`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/onlineInquiries`,
    _description: `고객과 셀러간의 Q&A를 조회합니다.셀러는 이 API를 사용하여 판매중인 제품에 대한 상담을 조회 할 수 있습니다.<br>
                   a. 옵션아이디와 조회기간 모두 값이 있을 경우, 해당 옵션아이디와 조회 기간내의 모든 상담을 조회 할 수 있습니다.<br>
                   b. 옵션아이디만 값이 있을 경우, 해당 옵션아이디의 상담만 조회 할 수 있습니다.<br>
                   c. 조회기간만 값이 있을 경우, 해당 조회 기간내의 상담만 조회 할 수 있습니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `최대 조회 기간 7일까지 설정가능합니다.`,
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
        name: `inquiryStartAt`,
        require: false,
        _description: `조회시작일, format: yyyy-MM-dd`,
        _relation: ``,
        _referenceInfo: `1. 옵션아이디가 널(null)인 경우, 반드시 이 두 파라미터를 사용해야 합니다. 최대 조회일 간격은 일주일입니다.
                         해당 조회 기간내의 모든 상담을 조회할 수 있습니다 (inquiryEndAt - inquiryStartAt < = 7days).<br>
                         2. 옵션아이디가 값이 있을 경우, 이 파라미터는 입력할 필요가 없습니다. <br>
                         a. 조회시작일과 종료일이 null인 경우, 해당 옵션아이디의 상담만 조회할 수 있습니다.<br>
                         b. 조회시작일과 종료일의 값이 있을 경우, 해당 기간의 상담만 조회할 수 있습니다.`,
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
        name: `answeredType`,
        require: true,
        _description: `
          <table class="table">
            <tr>
                <th>Name</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>ALL</td>
                <td>전체보기</td>
            </tr>
            <tr>
                <td>ANSWERED</td>
                <td>답변완료</td>
            </tr>
            <tr>
                <td>NOANSWER</td>
                <td>미답변</td>
            </tr>
          </table>`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `vendorItemId`,
        require: false,
        _description: `상품등록후 생성된 VendorItemId`,
        _relation: ``,
        _referenceInfo: `1. 조회시작일과 종료일이 null인 경우, 이 파라미터 값입력을 통해 해당 옵션아이디의 상담을 조회 할 수 있습니다.<br>
                         2. 조회시작일과 종료일 값이 있을 경우, 이 파라미터 입력은 필요없습니다.<br>
                         `,
        _warning: ``,
        children: false
      },
      {
        name: `pageNum`,
        require: false,
        _description: `현재 페이지`,
        _relation: ``,
        //_referenceInfo: `Default 1,if pageNum is null, then use the default value.`,
        _referenceInfo: `Default 1`,
        _warning: ``,
        children: false
      },
      {
        name: `pageSize`,
        require: false,
        _description: `페이지 사이즈`,
        _relation: ``,
        _referenceInfo: `Default 10, max = 50`,
        _warning: ``,
        children: false
      },
      {
        name: `vendorId`,
        require: true,
        _description: `벤더 id`,
        _relation: ``,
        _referenceInfo: ``,
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
      _description: `조회 결과`,
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
              _description: `Question Id`,
              _relation: ``,
              _referenceInfo: `질문 id`,
              _warning: ``,
              children: false,
            },
            {
              name: `productId`,
              type: `Number`,
              _description: `Product Id`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: `상품`,
              children: false,
            },
            {
              name: `vendorItemId`,
              type: `Number`,
              _description: `VendorItem Id`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `content`,
              type: `String`,
              _description: `질문 내용`,
              _relation: ``,
              _referenceInfo: `질문 내용`,
              _warning: ``,
              children: false,
            },
            {
              name: `inquiryAt`,
              type: `String`,
              _description: `조회 시간`,
              _relation: ``,
              _referenceInfo: `"2015-05-18 17:37:39"`,
              _warning: ``,
              children: false,
            },
            {
                name: `orderIds`,
                type: `List`,
                _description: `주문 번호`,
                _relation: ``,
                _referenceInfo: `[16000009476673]`,
                _warning: ``,
                children: false,
              },
            {
              name: `buyerEmail`,
              type: `String`,
              _description: `질문을 제기한 고객님 이메일`,
              _relation: ``,
              _referenceInfo: `aaa@gmail.com`,
              _warning: ``,
              children: false,
            },
            {
              name: `commentDtoList`,
              type: `Array`,
              _description: `질문에 대한 답변`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: [
                {
                  name: `inquiryCommentId`,
                  type: `Number`,
                  _description: `	Reply ID`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false,
                },
                {
                  name: `inquiryId`,
                  type: `Number`,
                  _description: `Question ID`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false,
                },
                {
                  name: `content`,
                  type: `String`,
                  _description: `질문에 대한 답변 내용`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false,
                },
                {
                  name: `inquiryCommentAt`,
                  type: `String`,
                  _description: `답변시간`,
                  _relation: ``,
                  _referenceInfo: `"2015-05-27 10:38:32"`,
                  _warning: ``,
                  children: false,
                }
              ]
            }
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
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00010028/onlineInquiries?vendorId=A00010028&inquiryStartAt=2014-12-07&inquiryEndAt=2014-12-08&answeredType=ALL&pageNum=1&pageSize=10`,
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
            "inquiryId": 844,
            "productId": 2490,
            "vendorItemId": 3100000204,
            "content": "productId딜에 달린 24시간 이내 상품문의2.",
            "inquiryAt": "2015-05-27 09:38:32",
            "orderIds": null,
            "buyerEmail": "aka***@na",
            "commentDtoList": [
              {
                "inquiryCommentId": 351,
                "inquiryId": 844,
                "content": "just do it9.28",
                "inquiryCommentAt": "2016-09-28 16:18:09"
              },
              {
                "inquiryCommentId": 352,
                "inquiryId": 844,
                "content": "just do it9.29",
                "inquiryCommentAt": "2016-09-29 16:18:09"
              }
            ]
          },
          {
            "inquiryId": 848,
            "productId": 2490,
            "vendorItemId": 3100000204,
            "content": "productId딜에 달린 1달 이내 상품문의2.",
            "inquiryAt": "2015-05-24 01:38:32",
            "orderIds": [
                16000009476673
              ],
            "buyerEmail": "aka***@na",
            "commentDtoList": [
              {
                "inquiryCommentId": 312,
                "inquiryId": 848,
                "content": "미처리 답변 완료 3",
                "inquiryCommentAt": "2015-05-27 10:38:32"
              }
            ]
          },
          {
            "inquiryId": 852,
            "productId": 2490,
            "vendorItemId": 3000006137,
            "content": "productInquiryHelpful 테스트 문의",
            "inquiryAt": "2015-05-18 17:37:39",
            "orderIds": [
                15000009153437
              ],
            "buyerEmail": "aka***@na",
            "commentDtoList": []
          }
        ],
        "pagination": {
          "currentPage": 1,
          "totalPages": 1,
          "totalElements": 3,
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
