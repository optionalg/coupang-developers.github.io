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
      name: `상담문의(고객 -> 셀러)`,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: `release`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-22`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Jamin`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/wing_api/apis/internal-api/v1/customer-service/customer/inquiries`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v1/customer-service/customer/inquiries`,
    _description: `고객님의 문의를 조회합니다.<br>셀러는 이 API를 사용하여 판매중인 제품에 대한 상담을 조회 할 수 있습니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: false,
    queryStringParameters: [
      {
        name: `inquiryStartAt`,
        require: false,
        _description: `Inquired from, format: yyyy-MM-dd`,
        _relation: ``,
        _referenceInfo: `1. vendorItemId가 널(null)인 경우, 반드시 이 파라미터를 상용해야합니다. 조회시작일과 종료일은 동일한 하루일수 없고 최대시간 간격은 하루입니다.<br>
                   해당 조회시작일과 종료일 기간의 모든 상담리스트를 조회할수있습니다 (inquiryEndAt - inquiryStartAt = 1d).<br>
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
        name: `answeredType`,
        require: true,
        _description: `답장 타이프`,
        _relation: ``,
        _referenceInfo: `Allowed values : 'ANSWERED', 'NOANSWER', 'ALL'`,
        _warning: ``,
        children: false
      },
      {
        name: `vendorItemId`,
        require: false,
        _description: `상품등록후 생성된 VendorItemId`,
        _relation: ``,
        _referenceInfo: `1. 조회시작일과 조회종요일이 널인 경우, 이 파라미터를 사용해야만 해당 vendorItemId 아래의 모든 상담리스트 조회할수있습니다.<br>
                   2. 조회시작일과 조회종요일 값 있을시  이 파라미터는 반드시 입력해야할 사항X <br>
                   조회시작일과 종료일은 동일한 하루일수 없음; 해당 조회시작일과 종료일 기간의 모든 상담리스트를 조회할수있습니다.<br>
                   (inquiryEndAt - inquiryStartAt = 1day)`,
        _warning: ``,
        children: false
      },
      {
        name: `pageNum`,
        require: false,
        _description: `현재 페이지`,
        _relation: ``,
        _referenceInfo: `Default 1,if pageNum is null, then use the default value.`,
        _warning: ``,
        children: false
      },
      {
        name: `pageSize`,
        require: false,
        _description: `최대 페이지 당 상담수는 50입니다`,
        _relation: ``,
        _referenceInfo: `Default 10, max = 50,if pageSize is null, then use the default value.`,
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
      _description: `Http request status code`,
      _relation: ``,
      _referenceInfo: `Example: 200, 400, 500`,
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
                },
                {
                  name: `replyBy`,
                  type: `String`,
                  _description: `응답자 이메일 혹은 이름`,
                  _relation: ``,
                  _referenceInfo: ``,
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
    code: [
      {
        language: `http`,
        codeblock: {
          "vendorId":"A00012697",
          "inquiryStartAt":"2016-09-18",
          "inquiryEndAt":"2016-09-19"
        }
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
            "buyerEmail": "aka***@na",
            "commentDtoList": [
              {
                "inquiryCommentId": 351,
                "inquiryId": 844,
                "content": "just do it9.28",
                "inquiryCommentAt": "2016-09-28 16:18:09",
                "replyBy":"wanger"
              },
              {
                "inquiryCommentId": 352,
                "inquiryId": 844,
                "content": "just do it9.29",
                "inquiryCommentAt": "2016-09-29 16:18:09",
                "replyBy":"wanger"
              }
            ]
          },
          {
            "inquiryId": 848,
            "productId": 2490,
            "vendorItemId": 3100000204,
            "content": "productId딜에 달린 1달 이내 상품문의2.",
            "inquiryAt": "2015-05-24 01:38:32",
            "buyerEmail": "aka***@na",
            "commentDtoList": [
              {
                "inquiryCommentId": 312,
                "inquiryId": 848,
                "content": "미처리 답변 완료 3",
                "inquiryCommentAt": "2015-05-27 10:38:32",
                "replyBy":"wanger"
              }
            ]
          },
          {
            "inquiryId": 852,
            "productId": 2490,
            "vendorItemId": 3000006137,
            "content": "productInquiryHelpful 테스트 문의",
            "inquiryAt": "2015-05-18 17:37:39",
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
