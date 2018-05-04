export const lookupReturnShippingCentersCenterCodeDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `distribution-center-api`,   // input category ex) exchange-service-api
    id: `lookup-return-shipping-centers-centercode`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup-return-shipping-centers-centercode`,
    name: `반품지 단건 조회`,       // use display name, i will change 'translation key'
    displayOrderPriority: 1100, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: ``,
      anchorId: ``,
    },
  },
  apiInfo: {
    state: `release`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-01-23`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Jamin`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/greatwall_api/apis/api/v2/return/shipping-places/center-code`,
    HMACPath: `/v2/providers/greatwall_api/apis/api/v2/return/shipping-places/center-code`,
    _description: `returncenterCode로 반품지를 조회한다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: false,
    queryStringParameters: [
      {
        name: `returnCenterCodes`,
        require: true,
        _description: `returnCenterCodes의 최대 개수는 100.`,
        _relation: ``,
        _referenceInfo: `e.g: A00000001,A00000002`,
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
      _description: `서버 응답 코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `서버 응답 메시지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Array`,
      _description: `반품지 정보`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `vendorId`,
          type: `String`,
          _description: `업체 코드`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `returnCenterCode`,
          type: `String`,
          _description: `반품지 센터코드`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `shippingPlaceName`,
          type: `String`,
          _description: `반품지 이름`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `deliverCode`,
          type: `String`,
          _description: `택배사 코드`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `deliverName`,
          type: `String`,
          _description: `택배사명`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `goodsflowStatus`,
          type: `String`,
          _description: `굿스플로 상태`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `errorMessage`,
          type: `String`,
          _description: `에러 메시지`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `createAt`,
          type: `String`,
          _description: `생성일`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `vendorCreditFee05kg`,
          type: `Number`,
          _description: `상품이 5kg일때의 신용요금 (판매자 신용)`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `vendorCashFee05kg`,
          type: `Number`,
          _description: `상품이 5kg일때의 선불요금 (판매자 현금)`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `consumerCashFee05kg`,
          type: `Number`,
          _description: `상품이 5kg일때의 착불요금(구매자 현금)`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `returnFee05kg`,
          type: `Number`,
          _description: `상품이 5kg일때의 반품비`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `vendorCreditFee10kg`,
          type: `Number`,
          _description: `상품이 10kg일때의 신용요금 (판매자 신용)`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `vendorCashFee10kg`,
          type: `Number`,
          _description: `상품이 10kg일때의 선불요금(판매자 현금)`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `consumerCashFee10kg`,
          type: `Number`,
          _description: `상품이 10kg일때의 착불요금(구매자 현금)`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `returnFee10kg`,
          type: `Number`,
          _description: `상품이 10kg일때의 반품비`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `vendorCreditFee20kg`,
          type: `Number`,
          _description: ``,
          _relation: ``,
          _referenceInfo: `상품이 20kg일때의 신용요금 (판매자 신용)`,
          _warning: ``,
          children: false
        },
        {
          name: `vendorCashFee20kg`,
          type: `Number`,
          _description: `상품이 20kg일때의 선불요금 (판매자 현금)`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `consumerCashFee20kg`,
          type: `Number`,
          _description: `상품이 20kg일때의 착불요금(구매자 현금)`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `returnFee20kg`,
          type: `Number`,
          _description: `상품이 20kg일때의 반품비`,
          _relation: ``,
          _referenceInfo: `0보다 커야합니다`,
          _warning: ``,
          children: false
        },
        {
          name: `usable`,
          type: `boolean`,
          _description: `사용여부`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `placeAddresses`,
          type: `Array`,
          _description: `반품지 주소`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `addressType`,
              type: `String`,
              _description: `주소 타입 <br/> JIBUN, JIBUN&ROADNAME`,
              _relation: ``,
              _referenceInfo: `
              <table class="table">
                <tr>
                  <th>CODE</th>
                  <th>Mean</th>
                </tr>
                <tr>
                  <td>JIBUN</td>
                  <td>지번, 1개의 주소만 등록시는 JIBUN으로 등록</td>
                </tr>
                <tr>
                  <td>JIBUN&ROADNAME</td>
                  <td>지번주소/도로명주소, 복수개의 주소 등록시 두 타입 모두 사용 가능</td>
                </tr>
            </table>`,
              _warning: ``,
              children: false
            },
            {
              name: `countryCode`,
              type: `String`,
              _description: `국가코드, 국내의 경우 "KR"`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `companyContactNumber`,
              type: `String`,
              _description: `반품지 전화번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `phoneNumber2`,
              type: `String`,
              _description: `보조 전화번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `returnZipCode`,
              type: `String`,
              _description: `반품지 우편번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `returnAddress`,
              type: `String`,
              _description: `반품지 주소`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `returnAddressDetail`,
              type: `String`,
              _description: `반품지 상세주소`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
          ]
        },
      ]
    }
  ],
  sample: {
    endpoint:`https://api-gateway.coupang.com/v2/providers/greatwall_api/apis/api/v2/return/shipping-places/center-code?returnCenterCodes=1000000051,1000006047`,
    code: [
      {
        language: `http`,
      }
    ],
    response: {
      "code": "200",
      "message": "SUCCESS",
      "data": [
        {
          "vendorId": "A00011620",
          "returnCenterCode": "A00011620_1000000051",
          "shippingPlaceName": "3333123",
          "deliverCode": "DONGBU",
          "deliverName": "KG로지스",
          "goodsflowStatus": "승인",
          "errorMessage": "",
          "createdAt": 1384491474000,
          "vendorCreditFee05kg": 1000,
          "vendorCreditFee10kg": 1000,
          "vendorCreditFee20kg": 0,
          "vendorCashFee05kg": 4000,
          "vendorCashFee10kg": 1000,
          "vendorCashFee20kg": 0,
          "consumerCashFee05kg": 0,
          "consumerCashFee10kg": 0,
          "consumerCashFee20kg": 7000,
          "returnFee05kg": 0,
          "returnFee10kg": 0,
          "returnFee20kg": 0,
          "usable": true,
          "placeAddresses": [
            {
              "addressType": "JIBUN",
              "countryCode": "KR",
              "companyContactNumber": "5555",
              "phoneNumber2": "123",
              "returnZipCode": "136822",
              "returnAddress": "서울 성북구 성북동",
              "returnAddressDetail": "asdfasdfasdf11111"
            }
          ]
        }
      ]
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
