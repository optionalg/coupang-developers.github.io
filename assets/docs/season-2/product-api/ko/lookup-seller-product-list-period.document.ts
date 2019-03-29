export const lookupSellerProductListPeriodDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `lookup-seller-product-list-period`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_seller_product_list_period`,
    name: `상품 목록 구간 조회`,       // use display name, i will change 'translation key'
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
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: ``,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/seller_api/apis/api/v1/marketplace/seller-products/time-frame`,
    HMACPath: `/v2/providers/seller_api/apis/api/v1/marketplace/seller-products/time-frame`,
    _description: `업체상품 목록을 생성일시 기준으로 조회한다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    queryStringParameters: [
      {
        name: `vendorId`,
        type: `String`,
        require: true,
        _description: `업체코드`,
        _relation: ``,
        _referenceInfo: `쿠팡에서 업체를 관리하기 위해 발급한 코드.`,
        _warning: ``,
        children: false
      },
      {
        name: `createdAtFrom`,
        type: `DateTime`,
        require: true,
        _description: `생성일자 시작일시`,
        _relation: ``,
        _referenceInfo: `"yyyy-MM-dd'T'HH:mm:ss" 형식의 일시. ex. 2016-12-28T06:20:00`,
        _warning: ``,
        children: false
      },
      {
        name: `createdAtTo`,
        type: `DateTime`,
        require: true,
        _description: `생성일자 종료일시`,
        _relation: ``,
        _referenceInfo: `"yyyy-MM-dd'T'HH:mm:ss" 형식의 일시. ex. 2016-12-28T06:20:00`,
        _warning: ``,
        children: false
      }
    ],
   },
  errorSpec: [
  ],
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
      name: `data`,
      type: ``,
      _description: `업체상품목록`,
      _relation: ``,
      _referenceInfo: `조회된 업체상품 개수만큼 N번 반복`,
      _warning: ``,
      children: [
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
          name: `sellerProductName`,
          type: `String`,
          require: false,
          _description: `등록상품명`,
          _relation: ``,
          _referenceInfo: `등록상품명 검색. 20자 이하`,
          _warning: ``,
          children: false
        },
        {
          name: `displayCategoryCode`,
          type: `Number`,
          require: false,
          _description: `노출카테고리코드`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `vendorId`,
          type: `String`,
          require: false,
          _description: `업체코드`,
          _relation: ``,
          _referenceInfo: `쿠팡에서 업체를 관리하기 위해 발급한 코드.`,
          _warning: ``,
          children: false
        },
        {
          name: `saleStartedAt`,
          type: `String`,
          require: true,
          _description: `판매시작일시`,
          _relation: ``,
          _referenceInfo: `"yyyy-MM-dd'T'HH:mm:ss" 형식`,
          _warning: ``,
          children: false
        },
        {
          name: `saleEndedAt`,
          type: `String`,
          require: true,
          _description: `판매종료일시`,
          _relation: ``,
          _referenceInfo: `"yyyy-MM-dd'T'HH:mm:ss" 형식, *2099년 까지 길게 선택 가능`,
          _warning: ``,
          children: false
        },
        {
          name: `brand`,
          type: `String`,
          require: true,
          _description: `브랜드`,
          _relation: ``,
          _referenceInfo: `브랜드명은 한글/영어 표준이름 입력`,
          _warning: ``,
          children: false
        },
        {
          name: `statusName`,
          type: `String`,
          require: false,
          _description: `업체상품상태명`,
          _relation: ``,
          _referenceInfo: `
        <table class="table">
        <tr>
          <th>Parameter Name</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>SAVING</td>
          <td>임시저장중</td>
        </tr>
        <tr>
          <td>SAVED</td>
          <td>임시저장</td>
        </tr>
        <tr>
          <td>APPROVING</td>
          <td>승인대기중</td>
        </tr>
        <tr>
          <td>APPROVED</td>
          <td>승인완료</td>
        </tr>
        <tr>
          <td>PARTIAL_APPROVED</td>
          <td>부분승인완료</td>
        </tr>
        <tr>
          <td>DENIED</td>
          <td>승인반려</td>
        </tr>
         <tr>
          <td>DELETED</td>
          <td>상품삭제</td>
        </tr>
        </table>
        `,
          _warning: ``,
          children: false
        },
        {
          name: `createdAt`,
          type: `DateTIme`,
          require: true,
          _description: `판매등록일시`,
          _relation: ``,
          _referenceInfo: `"yyyy-MM-dd'T'HH:mm:ss" 형식`,
          _warning: ``,
          children: false
        },
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/seller_api/apis/api/v1/marketplace/seller-products/time-frame?vendorId={vendorId}&createdAtFrom={createdAtFrom}&createdAtTo={createdAtTo}`,
    code: [
      {
        language: `http`,
        codeblock: null
      }
    ],
    response: {
      "code": "SUCCESS",
      "message": "",
      "data": [
        {
          "sellerProductId": 123,
          "sellerProductName": "[인xx] 컴퓨터잡지",
          "displayCategoryCode": null,
          "categoryId": 5555,
          "productId": 3333,
          "vendorId": "A0xxxxx",
          "mdId": "jxxx@",
          "mdName": "박xxx",
          "saleStartedAt": "2015-12-28T06:00:00",
          "saleEndedAt": "2099-01-01T00:00:00",
          "brand": null,
          "statusName": "승인완료",
          "createdAt": "2015-12-28T18:57:34"
        }
      ]
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
