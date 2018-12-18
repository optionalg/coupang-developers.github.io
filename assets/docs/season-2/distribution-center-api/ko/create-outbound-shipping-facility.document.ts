export const createOutboundShippingFacilityDocument = {
  note: ``,
  
  //don't modify documentInfo
  documentInfo: {
    category: `distribution-center-api`,   // input category ex) exchange-service-api
    id: `create-outbound-shipping-facility`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `create_outbound_shipping_facility`,
    name: `출고지 생성`,       // use display name, i will change 'translation key'
    displayOrderPriority: 1000, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: ``,
      anchorId: ``,
    }
  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: `상품출고지 생성`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/product/outbound/shipping-place-creations`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: `출고지 생성`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/outboundShippingCenters`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-2-10`, // yyyy-mm-dd  ex> 2016-12-23
    developer: ``,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/outboundShippingCenters`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/outboundShippingCenters`,
    _description: `상품 출고지를 생성합니다. 판매자는 이 API를 사용하여 하나 이상의 출고지를 만들 수 있으며, 생성된 출고지는 상품 등록 시 출고지를 지정할 때 사용됩니다.<br/>출고지 생성 갯수 제한은 없습니다.`,
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
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `vendorId`,
        type: `String`,
        require: true,
        _description: `업체 코드(판매자코드)<br/>Wing 페이지에서도 확인 가능합니다.`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `userId`,
        type: `String`,
        require: true,
        _description: `사용자 아이디(쿠팡 WING 로그인 계정)`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `shippingPlaceName`,
        type: `String`,
        require: true,
        _description: `출고지 이름, 최대 50 자`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: `동일한 명칭의 출고지 중복 등록 불가`,
        children: false
      },
      {
        name: `global`,
        type: `boolean`,
        require: false,
        _description: `기본값: false<br/>국내(domestic) or 해외(overseas)`,
        _relation: ``,
        _referenceInfo: `
        <table class="table">
        <tr>
          <th>CODE</th>
          <th>Mean</th>
        </tr>
        <tr>
          <td>false</td>
          <td>국내(domestic) </td>
        </tr>
        <tr>
          <td>true</td>
          <td>해외(overseas)</td>
        </tr>
        </table>`,
        _warning: ``,
        children: false
      },
      {
        name: `placeAddresses`,
        type: `Array`,
        require: true,
        _description: `출고지 주소`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `addressType`,
            type: `String`,
            require: true,
            _description: `주소 타입 <br/> JIBUN, ROADNAME, OVERSEA`,
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
                <tr>
                  <td>OVERSEA</td>
                  <td>해외</td>
                </tr>
            </table>`,
            _warning: `도로명 주소 등록 시, 반드시 지번 주소를 함께 등록해야합니다.`,
            children: false
          },
          {
            name: `countryCode`,
            type: `String`,
            require: true,
            _description: `국가 코드, 국내의 경우 "KR"입력. 유효길이는 2`,
            _relation: ``,
            _referenceInfo: ``,
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
          }
        ]
      },
      {
        name: `remoteInfos`,
        type: `Array`,
        require: false,
        _description: `도서산간 추가배송비`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `deliveryCode`,
            type: `String`,
            require: true,
            _description: `택배사 코드`,
            _relation: ``,
            _referenceInfo: `<a href="../../docs/season-2/distribution-center-api#lookup_delivery_code">택배사 코드 바로가기</a>`,
            _warning: `택배사는 복수 등록이 가능하지만, 중복 등록은 불가능합니다.`,
            children: false
          },
          {
            name: `jeju`,
            type: `Number`,
            require: true,
            _description: `제주 지역 배송비(원)`,
            _relation: ``,
            _referenceInfo: `
            <table class="table">
            <tr>
               <th>분류</th>
               <th>최대 배송비</th>
             </tr>
             <tr>
               <td>HYUNDAI</td>
               <td>20,000원</td>
             </tr>
             <tr>
               <td>CJGLS</td>
               <td>20,000원</td>
             </tr>
             <tr>
               <td>HANJIN</td>
               <td>20,000원</td>
             </tr>
             <tr>
               <td>그 외</td>
               <td>70,000원</td>
             </tr>
             </table> 
             `,
            _warning: ``,
            children: false
          },
          {
            name: `notJeju`,
            type: `Number`,
            require: true,
            _description: `제주 외 지역 배송비(원)`,
            _relation: ``,
            _referenceInfo: `제주 지역과 같습니다`,
            _warning: ``,
            children: false
          }
        ]
      }
    ]
  },
  errorSpec: [
    {
      status: 400,
      _description: `params are not allowed null...`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `params's vendorId not equals gateway's vendorId!`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `The max length of the shipping place name is 50, please input the correct length name`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `The address detail info can't be null(placeAddress)`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `Must input the default phone number(phoneNumber1)`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `Must input the default address(address1)`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `The length of country code is 2, please input correct length country code`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `The format of phone number is invalid, min length is 11 and max length is 14 include the character '-'`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    },
    {
      status: 400,
      _description: `The format of postal code is invalid, it can only be number, min length is 5 and max length is 6`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``
    }
  ],
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
      type: `Object`,
      _description: `출고지 생성 결과`,
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
          _description: `결과 메시지(출고지 코드)`,
          _relation: ``,
          _referenceInfo: `outbound shipping place code 출력 <br/>해당코드로 출고지 목록 조회 가능`,
          _warning: ``,
          children: false,
        }
      ]
    }
  ],
  sample: {
    endpoint: 'https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00011620/outboundShippingCenters',
    code: [
      {
        language: `http`,
        codeblock: {
          "vendorId": "A00011620",
          "userId": "testId",
          "shippingPlaceName": "상품출고지 생성",
          "global": "false",
          "placeAddresses": [
            {
              "addressType": "JIBUN",
              "countryCode": "KR",
              "companyContactNumber": "02-1234-5678",
              "phoneNumber2": "010-1234-5678",
              "returnZipCode": "10516",
              "returnAddress": "경기도 파주시 탄현면 월롱산로" ,
              "returnAddressDetail": "294-58"
            }
          ],
          "remoteInfos": [
            {
              "deliveryCode": "KGB",
              "jeju": "5000",
              "notJeju": "2500"
            },
            {
              "deliveryCode": "CJGLS",
              "jeju": "5000",
              "notJeju": "2500"
            }
          ]
        }
      }
    ],
    response: {
      "code": "200",
      "message": "SUCCESS",
      "data": {
        "resultCode": "SUCCESS",
        "resultMessage": "115"
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
