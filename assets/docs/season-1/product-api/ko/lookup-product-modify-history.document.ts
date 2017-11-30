export const lookupProductModifyHistoryDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `lookup-product-modify-history`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_product_modify_history`,
    name: `상품 상태변경이력 조회`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `업체상품 상태변경이력 조회`,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: `release`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-23`, // yyyy-mm-dd  ex> 2016-12-23
    developer: ``,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/targets/wing/seller_api/apis/api/v1/marketplace/seller-products/{sellerProductId}/histories`,
    HMACPath: `/targets/wing/seller_api/apis/api/v1/marketplace/seller-products/{sellerProductId}/histories`,
    _description: `업체상품아이디로 상태변경일시 기준 정렬된 업체상품 상태변경이력을 조회한다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters:false,
    queryStringParameters: [
      {
        name: `sellerProductId`,
        type: `Number`,
        require: false,
        _description: `업체상품아이디`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `nextToken`,
        type: `Number`,
        require: false,
        _description: `페이지`,
        _relation: ``,
        _referenceInfo: `다음 페이지를 호출하기 위한 키값첫 페이지 호출시에는 넣지 않거나 '1' 입력`,
        _warning: ``,
        children: false
      },
      {
        name: `maxPerPage`,
        type: `Number`,
        require: false,
        _description: `페이지당건수`,
        _relation: ``,
        _referenceInfo: `default = 10`,
        _warning: ``,
        children: false
      }
    ],
    bodyParameters: false
  },
  errorSpec: false,
  responseSpec: [
    {
      name: `code`,
      type: `Number`,
      _description: `결과코드`,
      _relation: ``,
      _referenceInfo: `SUCCESS/ERROR`,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `결과 메세지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `nextToken`,
      type: `String`,
      _description: `다음페이지`,
      _relation: ``,
      _referenceInfo: `만약 다음 페이지가 없을 경우 빈문자열`,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Array`,
      _description: `상태변경이력`,
      _relation: ``,
      _referenceInfo: `상태변경이력 목록 개수 만큼 반복`,
      _warning: ``,
      children: [
        {
          name: `statusName`,
          type: `String`,
          _description: `업체상품상태명`,
          _relation: ``,
          _referenceInfo: `임시저장중`,
          _warning: ``,
          children: false,
        },
        {
          name: `comment`,
          type: `String`,
          require: false,
          _description: `* 상태변경내용<br> * 임시저장<br> * 승인대기중<br> * 승인완료<br> * 부분승인완료<br> * 승인반려<br> * 상품삭제`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `createdBy`,
          type: `String`,
          _description: `만약 SYSTEM일 경우 '쿠팡 셀러 시스템'이 자동으로 처리`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `createdAt`,
          type: `String`,
          _description: `상태변경일시`,
          _relation: ``,
          _referenceInfo: `"yyyy-MM-dd'T'HH:mm:ss" 형식`,
          _warning: ``,
          children: false,
        }
        ]
    }
  ],
  sample: {
    endpoint: ``,
    code: [
      {
        language: `http`,
        codeblock: {
        }
      }
    ],
    response: {
      "code": "200",
      "message": "",
      "data":
        [
          {
            "createdAt":"2015-09-02T09:41:25",
            "status": "승인대기중",
            "createdBy": "쿠팡 셀러 시스템",
            "comment": "컨텐츠 확인 대기중"
          },
          {
            "createdAt": "2015-09-02T09:37:33",
            "status": "승인대기중",
            "createdBy": "박**",
            "comment": "큐레이터 컨텐츠 확인 요청"
          },
          {
            "createdAt": "2015-09-02T09:30:11",
            "status": "승인대기중",
            "createdBy": "박**",
            "comment": "승인완료 - Items 생성 완료"
          },
          {
            "createdAt": "2015-08-31T07:42:30",
            "status": "승인대기중",
            "createdBy": "쿠팡 셀러 시스템",
            "comment": "승인 관련 정보 생성 중"
          },
          {
            "createdAt": "2015-08-31T07:40:45",
            "status": "승인요청",
            "createdBy": "(주)5천원",
            "comment": "판매자 승인요청"
          },
          {
            "createdAt": "2015-08-31T06:17:25",
            "status": "임시저장",
            "createdBy": "(주)5천원",
            "comment": "판매자 임시저장"
          }
        ]
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
