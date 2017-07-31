export const lookupProductSummaryDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `lookup-product-summary`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_product_summary`,
    name: `상품 요약 정보 조회`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `업체상품 요약 정보 조회`,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: ``,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/targets/wing/seller_api/apis/api/v1/marketplace/seller-products/external-vendor-sku-codes/{externalVendorSkuCode}`,
    HMACPath: `/targets/wing/seller_api/apis/api/v1/marketplace/seller-products/external-vendor-sku-codes/{externalVendorSkuCode}`,
    _description: `업체상품코드로 업체상품 요약 정보를 조회할 수 있다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `externalVendorSkuCode`,
        require: true,
        _description: `업체상품코드`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: false
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
    endpoint: ``,
    code: [
      {
        language: `http`,
        codeblock: {
        }
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
