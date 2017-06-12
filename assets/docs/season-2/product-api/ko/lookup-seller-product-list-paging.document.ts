export const lookupSellerProductListPagingDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `lookup-seller-product-list-paging`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_seller_product_list_paging`,
    name: `상품 목록 페이징 조회`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `업체상품 목록 페이징 조회`,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: ``,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/targets/wing/seller_api/apis/api/v1/marketplace/seller-products?vendorId={vendorId}&nextToken={nextToken}&maxPerPage={maxPerSize}&sellerProductId={sellerProductId}&sellerProductName={sellerProductName}&status={status}&manufacture={manufacture}&&vendorItemId={vendorItemId}&createdAt={createdAt}`,
    HMACPath: `/targets/wing/seller_api/apis/api/v1/marketplace/seller-products?vendorId={vendorId}&nextToken={nextToken}&maxPerPage={maxPerSize}&sellerProductId={sellerProductId}&sellerProductName={sellerProductName}&status={status}&manufacture={manufacture}&&vendorItemId={vendorItemId}&createdAt={createdAt}`,
    _description: `업체상품 목록을 페이징 조회한다.`,
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
        name: `nextToken`,
        type: `Number`,
        require: false,
        _description: `페이지`,
        _relation: ``,
        _referenceInfo: `다음 페이지를 호출하기 위한 키값. 첫 페이지 호출시에는 넣지 않거나 1 입력`,
        _warning: ``,
        children: false
      },
      {
        name: `maxPerPage`,
        type: `Number`,
        require: false,
        _description: `페이지당건수`,
        _relation: ``,
        _referenceInfo: `API 별 상이(default = 10, max = 100)`,
        _warning: ``,
        children: false
      },
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
        name: `status`,
        type: `String`,
        require: false,
        _description: `업체상품상태`,
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
        name: `manufacture`,
        type: `String`,
        require: false,
        _description: `제조사`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `createdAt`,
        type: `DateTime`,
        require: false,
        _description: `상품등록일시`,
        _relation: ``,
        _referenceInfo: `"yyyy-MM-dd'T'HH:mm:ss" 형식의 일시 예)
> 2015-12-17T00:00:00 과 같이 입력하면, 2015-12-17T00:00:00 ~ 2015-12-17T23:59:59 와 같이 조회됨
> 2015-12-17T12:28:38 과 같이 입력하면, 2015-12-17T12:28:38 ~ 2015-12-18T12:28:37 과 같이 조회됨`,
        _warning: ``,
        children: false
      },
      {
        name: `vendorItemId`,
        type: `Number`,
        require: false,
        _description: `옵션아이디`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }
    ]
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
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `sellerProductId`,
          type: `String`,
          _description: `업체상품아이디`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `sellerProductName`,
          type: `String`,
          _description: `등록상품명`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `displayCategoryCode`,
          type: `Number`,
          _description: `노출카테고리코드`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `categoryId`,
          type: `Number`,
          _description: `카테고리아이디`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `productId`,
          type: `Number`,
          _description: `ProductID`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `vendorId`,
          type: `String`,
          _description: `업체코드`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `saleStartedAt`,
          type: `DateTime`,
          _description: `판매시작일시`,
          _relation: ``,
          _referenceInfo: `"yyyy-MM-dd'T'HH:mm:ss" 형식`,
          _warning: ``,
          children: false,
        },
        {
          name: `saleEndedAt`,
          type: `DateTime`,
          _description: `판매종료일시`,
          _relation: ``,
          _referenceInfo: `"yyyy-MM-dd'T'HH:mm:ss" 형식`,
          _warning: ``,
          children: false,
        },
        {
          name: `brand`,
          type: `String`,
          _description: `브랜드`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `statusName`,
          type: `String`,
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
          children: false,
        },
        {
          name: `createdAt`,
          type: `DateTime`,
          _description: `판매등록일시`,
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
      "code": "SUCCESS",
      "message": "",
      "nextToken": "2",
      "data": [
        {
          "sellerProductId": 239092172,
          "sellerProductName": "R07 헬로키티 미니낚시놀이",
          "displayCategoryCode": 77413,
          "categoryId": 2102,
          "productId": 14784194,
          "vendorId": "XXXXXXXX",
          "mdId": "harry867@",
          "mdName": null,
          "saleStartedAt": "2017-02-14T06:00:00",
          "saleEndedAt": "2099-12-31T00:00:00",
          "brand": "상세설명별도참조",
          "statusName": "승인완료",
          "createdAt": "2017-02-13T02:09:47"
        },
        {
          "sellerProductId": 239092161,
          "sellerProductName": "R07 러닝리소스 손가락 지시봉 (10개 세트) (LER2657) - 러닝리소스 지시봉 손가락 포인터 장난감",
          "displayCategoryCode": 77413,
          "categoryId": 2102,
          "productId": 14784126,
          "vendorId": "XXXXXXXX",
          "mdId": "harry867@",
          "mdName": null,
          "saleStartedAt": "2017-02-14T06:00:00",
          "saleEndedAt": "2099-12-31T00:00:00",
          "brand": "상세설명별도참조",
          "statusName": "승인완료",
          "createdAt": "2017-02-13T02:09:46"
        }
      ]
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
