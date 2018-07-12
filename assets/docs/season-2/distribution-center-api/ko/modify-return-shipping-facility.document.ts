export const modifyReturnShippingFacilityDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `return-api`,   // input category ex) exchange-service-api
    id: `modify-return-shipping-facility`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `modify_return_shipping_facility`,
    name: `반품지 수정`,       // use display name, i will change 'translation key'
    displayOrderPriority: 1500, // use order priority. 1 is high(top),
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
        apiName: ``,
        path: `/v2/providers/wing_api/apis/internal-api/v1/return/shipping-places/{returnCenterCode}`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: `반품지 수정`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnShippingCenters/{returnCenterCode}`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  apiInfo: {
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: `GreatWall`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `PUT`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnShippingCenters/{returnCenterCode}`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/returnShippingCenters/{returnCenterCode}`,
    _description: `반품지를 수정합니다.<br/>반품지를 수정하려면 outboundShippingPlaceCode 및 remoteInfoId가 필요합니다.<br/>
    '반품지 목록 조회' API를 사용하여 outboundShippingPlaceCode 와 remoteInfoId를 얻을 수 있습니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `업체 코드(판매자코드)<br/>Wing 페이지에서도 확인 가능합니다.`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `returnCenterCode`,
        require: true,
        _description: `수정하려는 반품지 코드`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `vendorId`,
        type: `String`,
        require: true,
        _description: `업체 코드(판매자코드)`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `returnCenterCode`,
        type: `String`,
        require: true,
        _description: `반품지 센터코드`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `userId`,
        type: `String`,
        require: true,
        _description: `사용자 아이디(쿠팡 WING 아이디)`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `shippingPlaceName`,
        type: `String`,
        require: false,
        _description: `반품지 이름`,
        _relation: ``,
        _referenceInfo: `"null"인 경우, 반품지이름은 변하지 않습니다`,
        _warning: ``,
        children: false
      },
      {
        name: `usable`,
        type: `boolean`,
        require: false,
        _description: `사용 가능 여부`,
        _relation: ``,
        _referenceInfo: `
        `,
        _warning: ``,
        children: false
      },
      {
        name: `placeAddresses`,
        type: `Array`,
        require: false,
        _description: `반품지 주소`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `addressType`,
            type: `String`,
            require: true,
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
            <td>지번</td>
          </tr>
          <tr>
            <td>ROADNAME</td>
            <td>도로명</td>
          </tr>
            </table>`,
            _warning: ``,
            children: false
          },
          {
            name: `companyContactNumber`,
            type: `String`,
            require: true,
            _description: `전화번호, e.g. : xx-yyy-zzzz,`,
            _relation: ``,
            _referenceInfo: `
            <table class="table">
            <tr>
              <th>구분</th>
              <th>Min~Max</th>
            </tr>
            <tr>
              <td>x</td>
              <td>2~4자</td>
            </tr>
            <tr>
              <td>y</td>
              <td>3~4자</td>
            </tr>
            <tr>
              <td>z</td>
              <td>4자</td>
            </tr>
           </table>`,
            _warning: ``,
            children: false
          },
          {
            name: `phoneNumber2`,
            type: `String`,
            require: false,
            _description: `보조 전화번호 (형식 : 전화번호1과 같습니다)`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `returnZipCode`,
            type: `String`,
            require: true,
            _description: `우편번호 : 숫자, 최소길이 5, 최대길이 6`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `returnAddress`,
            type: `String`,
            require: true,
            _description: `주소, 최대길이는 150`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `returnAddressDetail`,
            type: `String`,
            require: false,
            _description: `상세주소, 최대길이는 200`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
        ]
      },
      {
        name: `goodsflowInfoDto`,
        type: `Object`,
        require: false,
        _description: `굿스 플로 택배 연동 정보`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
           {
            name: `vendorCreditFee05kg`,
            type: `Number`,
            require: true,
            _description: `상품이 5kg일때의 신용요금 (판매자 신용)`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다<br/>해당 항목은 따로 사용하는 곳이 없기에<br/>상품등록API에서 입력하는 반품배송비로 입력<br/>`,
            _warning: `대상:vendorCreditFee05kg~returnFee20kg`,
            children: false
          },
          {
            name: `vendorCashFee05kg`,
            type: `Number`,
            require: true,
            _description: `상품이 5kg일때의 선불요금 (판매자 현금)`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `consumerCashFee05kg`,
            type: `Number`,
            require: true,
            _description: `상품이 5kg일때의 착불요금(구매자 현금)`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `returnFee05kg`,
            type: `Number`,
            require: true,
            _description: `상품이 5kg일때의 반품비`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `vendorCreditFee10kg`,
            type: `Number`,
            require: true,
            _description: `상품이 10kg일때의 신용요금 (판매자 신용)`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `vendorCashFee10kg`,
            type: `Number`,
            require: true,
            _description: `상품이 10kg일때의 선불요금(판매자 현금)`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `consumerCashFee10kg`,
            type: `Number`,
            require: true,
            _description: `상품이 10kg일때의 착불요금(구매자 현금)`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `returnFee10kg`,
            type: `Number`,
            require: true,
            _description: `상품이 10kg일때의 반품비`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `vendorCreditFee20kg`,
            type: `Number`,
            require: true,
            _description: `상품이 20kg일때의 신용요금 (판매자 신용)`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `vendorCashFee20kg`,
            type: `Number`,
            require: true,
            _description: `상품이 20kg일때의 선불요금 (판매자 현금)`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `consumerCashFee20kg`,
            type: `Number`,
            require: true,
            _description: `상품이 20kg일때의 착불요금(구매자 현금)`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
          {
            name: `returnFee20kg`,
            type: `Number`,
            require: true,
            _description: `상품이 20kg일때의 반품비`,
            _relation: ``,
            _referenceInfo: `0보다 커야합니다`,
            _warning: ``,
            children: false
          },
        ]
      },
    ]
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
      _description: `반품지 수정 결과`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `resultCode`,
          type: `String`,
          _description: `결과 코드`,
          _relation: ``,
          _referenceInfo: `SUCCESS or FAIL`,
          _warning: ``,
          children: false,
        },
        {
          name: `resultMessage`,
          type: `String`,
          _description: `결과 메시지`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
      ]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00010028/returnShippingCenters/1100044653`,
    code: [
      {
        language: `http`,
        codeblock: {
          "vendorId": "A00010028",
          "returnCenterCode":"1100044653",
          "shippingPlaceName": "",
          "userId": "test@1",
          "placeAddresses":
            [{
              "addressType": "JIBUN",
              "companyContactNumber": "1234-2345-6666",
              "phoneNumber2": "0120-2345-6666",
              "returnZipCode": "10516",
              "returnAddress": "경기도 파주시 탄현면 월롱산로 294-58 ()",
              "returnAddressDetail": "경기도 파주시 탄현면 금승리"
            }],
          "goodsflowInfoOpenApiDto":{
            "vendorCreditFee05kg":"1",
            "vendorCreditFee10kg":"1",
            "vendorCreditFee20kg":"1",
            "vendorCashFee05kg":"1",
            "vendorCashFee10kg":"2",
            "vendorCashFee20kg":"2",
            "consumerCashFee05kg":"2",
            "consumerCashFee10kg":"2",
            "consumerCashFee20kg":"3",
            "returnFee05kg":"1",
            "returnFee10kg":"2",
            "returnFee20kg":"3"
          }

        }
      }
    ],
    response: {
      "code": "200",
      "message": "SUCCESS",
      "data": {
        "resultCode": "SUCCESS",
        "resultMessage": "Modify successfully"
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
