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
    _description: `상품 출고지를 생성합니다. 셀러는 이API를 사용하여 하나 이상의 출고지를 만들 수 있으며, 출고지는 제품 교환 및 일반 구매 제품배송등에 사용됩니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `벤더 아이디`,
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
        _description: `벤더 아이디`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `userId`,
        type: `String`,
        require: true,
        _description: `유저 아이디`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `shippingPlaceName`,
        type: `String`,
        require: true,
        _description: `배송주소, 최대렝스는 50입니다`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `global`,
        type: `boolean`,
        require: false,
        _description: `domestic or overseas, default value is false`,
        _relation: ``,
        _referenceInfo: `<table class="table">
        <tr>
          <th>Parameter</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>domestic (국내)</td>
          <td>false</td>
        </tr>
        <tr>
          <td>overseas (해외)</td>
          <td>true</td>
        </tr>
        </table>`,
        _warning: ``,
        children: false
      },
      {
        name: `placeAddresses`,
        type: `Array`,
        require: true,
        _description: `배송지`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `addressType`,
            type: `String`,
            require: true,
            _description: `JIBUN, JIBUN&ROADNAME,OVERSEA`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `countryCode`,
            type: `String`,
            require: true,
            _description: `국가 코드, 주소 타입이 지번이라면, 국가 코드는 "KR"입니다 ,혹은 왼쪽에 있는 "국가 코드"메뉴로 국가 코드를 체크하십시오.유효한 길이는 2입니다.`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `companyContactNumber`,
            type: `String`,
            require: true,
            _description: `전화번호, e.g. : xx-yyy-zzzz,
                          x : 수자 , 최소길이2, 최대길이 4
                          y : 최소길이 3, 최대길이 4
                          z : 유효한 길이 4.`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `phoneNumber2`,
            type: `String`,
            require: false,
            _description: `전화번호 (포맷 : 전화번호1과 같습니다)`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `returnZipCode`,
            type: `String`,
            require: true,
            _description: `우편번호 : 수자, 최소길이 5, 최대길이 6`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `returnAddress`,
            type: `String`,
            require: true,
            _description: `주소, 최대길이는 150입니다`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `returnAddressDetail`,
            type: `String`,
            require: false,
            _description: `주소, 최대길이는 200입니다`,
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
        _description: `도서산간 지불 정보`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `deliveryCode`,
            type: `String`,
            require: true,
            _description: `택배사 코드, 아래 테이블을 체크해 주십시오`,
            _relation: ``,
            _referenceInfo: `<table class="table">
               <tr>
                  <th>CODE</th>
                  <th>NAME</th>
                </tr>
                <tr>
                  <td>HYUNDAI</td>
                  <td>롯데택배</td>
                </tr>
                <tr>
                  <td>KGB</td>
                  <td>로젠택배</td>
                </tr>
                <tr>
                  <td>EPOST</td>
                  <td>우체국</td>
                </tr>
                <tr>
                  <td>HANJIN</td>
                  <td>한진택배</td>
                </tr>
                <tr>
                  <td>KOREX</td>
                  <td>대한통운</td>
                </tr>
                <tr>
                  <td>CJGLS</td>
                  <td>CJ대한통운</td>
                </tr>
                <tr>
                  <td>KGBLS</td>
                  <td>KGB택배</td>
                </tr>
                <tr>
                  <td>KDEXP</td>
                  <td>경동택배</td>
                </tr>
                <tr>
                  <td>DONGBU</td>
                  <td>KG로지스</td>
                </tr>
                 <tr>
                  <td>INNOGIS</td>
                  <td>GTX로지스</td>
                </tr>
                <tr>
                  <td>ILYANG</td>
                  <td>일양택배</td>
                </tr>
                <tr>
                  <td>CHUNIL</td>
                  <td>천일택배</td>
                </tr>
                 <tr>
                  <td>AJOU</td>
                  <td>아주택배</td>
                </tr>
                <tr>
                  <td>CSLOGIS</td>
                  <td>SC로지스</td>
                </tr>
                <tr>
                  <td>DAESIN</td>
                  <td>대신택배</td>
                </tr>
                 <tr>
                  <td>CVS</td>
                  <td>CVS택배</td>
                </tr>
                <tr>
                  <td>HDEXP</td>
                  <td>합동택배</td>
                </tr>
                <tr>
                  <td>DADREAM</td>
                  <td>다드림</td>
                </tr>
                 <tr>
                  <td>DHL</td>
                  <td>DHL</td>
                </tr>
                <tr>
                  <td>UPS</td>
                  <td>UPS</td>
                </tr>
                <tr>
                  <td>FEDEX</td>
                  <td>FEDEX</td>
                </tr>
                 <tr>
                  <td>REGISTPOST</td>
                  <td>우편등기</td>
                </tr>
                <tr>
                  <td>DIRECT</td>
                  <td>업체직송</td>
                </tr>
                <tr>
                  <td>COUPANG</td>
                  <td>쿠팡자체배송</td>
                </tr>
                <tr>
                  <td>IQS</td>
                  <td>굿스포스트</td>
                </tr>
                <tr>
                  <td>EMS</td>
                  <td>우체국 EMS</td>
                </tr>
                <tr>
                  <td>TNT</td>
                  <td>TNT</td>
                </tr>
                <tr>
                  <td>USPS</td>
                  <td>USPS</td>
                </tr>
                <tr>
                  <td>IPARCEL</td>
                  <td>i-parcel</td>
                </tr>
                <tr>
                  <td>GSMNTON</td>
                  <td>GSM NtoN</td>
                </tr>
                <tr>
                  <td>SWGEXP</td>
                  <td>성원글로벌</td>
                </tr>
                <tr>
                  <td>PANTOS</td>
                  <td>범한판토스</td>
                </tr>
                <tr>
                  <td>ACIEXPRESS</td>
                  <td>ACI Express</td>
                </tr>
                <tr>
                  <td>DAEWOON</td>
                  <td>대운글로벌</td>
                </tr>
                <tr>
                  <td>AIRBOY</td>
                  <td>에어보이익스프레스</td>
                </tr>
                <tr>
                  <td>KGLNET</td>
                  <td>KGL네트웍스</td>
                </tr>
                <tr>
                  <td>KUNYOUNG</td>
                  <td>건영택배</td>
                </tr>
                <tr>
                  <td>SLX</td>
                  <td>SLX택배</td>
                </tr>
                <tr>
                  <td>HONAM</td>
                  <td>호남택배</td>
                </tr>
                <tr>
                  <td>LINEEXPRESS</td>
                  <td>LineExpress</td>
                </tr>
                <tr>
                  <td>SFEXPRESS</td>
                  <td>순풍택배</td>
                </tr>
                <tr>
                  <td>TWOFASTEXP</td>
                  <td>2FastsExpress</td>
                </tr>
              </table>`,
            _warning: ``,
            children: false
          },
          {
            name: `jeju`,
            type: `Number`,
            require: true,
            _description: `제주지역 배송비`,
            _relation: ``,
            _referenceInfo: `배달요금은 1000원보다 높고 제한가격 보다 낮아야합니다.HYUNDAI,CJGLS HANJIN의 최고 배송비는 20000원입니다기타 택배사의 최고 배송비는 70000원입니다`,
            _warning: ``,
            children: false
          },
          {
            name: `notJeju`,
            type: `Number`,
            require: true,
            _description: `제주외지역 배송비`,
            _relation: ``,
            _referenceInfo: `제주지역과 같습니다`,
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
      _description: `http 반품요청 상태 코드`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `http 반품요청 상태 메시지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Object`,
      _description: `http 반품요청 결과(결과 코드 & 메세지가 포함됨)`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `resultCode`,
          type: `String`,
          _description: `SUCCESS or FAIL`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `resultMessage`,
          type: `String`,
          _description: `Result message for creating outbound shipping place : return outbound shipping place code`,
          _relation: ``,
          _referenceInfo: ``,
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
          "userId": "test@",
          "shippingPlaceName": "outbound shipping place",
          "global": "false",
          "placeAddresses": [
            {
              "addressType": "JIBUN",
              "countryCode": "KR",
              "companyContactNumber": "010-1234-5555",
              "phoneNumber2": "0120-2345-6666",
              "returnZipCode": "10516",
              "returnAddress": "경기도 파주시 탄현면 월롱산로 294-58 ()",
              "returnAddressDetail": "경기도 파주시 탄현면 금승리"
            }
          ],
          "remoteInfos": [
            {
              "deliveryCode": "COUPANG",
              "jeju": "1000",
              "notJeju": "1200"
            },
            {
              "deliveryCode": "CJGLS",
              "jeju": "10001",
              "notJeju": "12001"
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
