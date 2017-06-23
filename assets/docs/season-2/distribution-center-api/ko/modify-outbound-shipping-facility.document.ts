export const modifyOutboundShippingFacilityDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `product-api`,   // input category ex) exchange-service-api
    id: `modify-outbound-shipping-facility`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `modify_outbound_shipping_facility`,
    name: `출고지 수정`,       // use display name, i will change 'translation key'
    displayOrderPriority: 1200, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `상품출고지 수정`,
      anchorId: ``,
    },
  },
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: `상품출고지 수정`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/product/outbound/shipping-places/{outboundShippingPlaceCode}`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: `출고지 수정`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/outboundShippingCenters/{outboundShippingPlaceCode}`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  apiInfo: {
    state: `release`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-01-12`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Tracy`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `PUT`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/outboundShippingCenters/{outboundShippingPlaceCode}`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/outboundShippingCenters/{outboundShippingPlaceCode}`,
    _description: `출고지를 수정합니다.`,
    _relation: ``,
    _referenceInfo: `Note:출고지를 수정하려면 outboundShippingPlaceCode및remoteInfoId가 필요합니다. '상품출고지 조회' API를사용하여 outboundShippingPlaceCode 및 remoteInfoId를 얻을수있습니다.`,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `벤더아이디`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `outboundShippingPlaceCode`,
        require: true,
        _description: `수정하려는 출고지 Id`,
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
        _description: `벤더Id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `userId`,
        type: `String`,
        require: true,
        _description: `유저Id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `outboundShippingPlaceCode`,
        type: `Number`,
        require: false,
        _description: `출고지Id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `shippingPlaceName`,
        type: `String`,
        require: false,
        _description: `출고지 이름`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `usable`,
        type: `Boolean`,
        require: false,
        _description: `주소지 사용 여부`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `global`,
        type: `Boolean`,
        require: false,
        _description: `국내 혹은 해외`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
      {
        name: `placeAddresses`,
        type: `Array`,
        require: false,
        _description: `상세한 주소지 정보`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: [
          {
            name: `addressType`,
            type: `String`,
            require: false,
            _description: `<ul>
                        <li>JIBUN</li>
                        <li>JIBUN&ROADNAME</li>
                        <li>OVERSEA</li>
                 </ul>`,
            _relation: ``,
            _referenceInfo: `이 필드는 글로벌과 매핑됩니다.

글로벌이 "false"이라면, 주소지타입은 지번입니다

글로벌이 "true"이라면, 주소지타입은 해외입니다`,
            _warning: ``,
            children: false
          },
          {
            name: `countryCode`,
            type: `String`,
            require: true,
            _description: `국가 코드, 주소 타입이 지번이라면, 국가 코드는 "KR"입니다 ,

혹은 왼쪽에 있는 "국가 코드"메뉴로 국가 코드를 체크하십시오.

유효한 길이는 2입니다.`,
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

z : 유효한 길이 4`,
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
            name: `remoteInfoId`,
            type: `Number`,
            require: false,
            _description: `새로운 배송정보를 생성시 이 필드는 입력할 필요없습니다.

배송정보를 수정/삭제시 반드시 이 필드를 입력해야합니다. 조회 API를 통해 이 필드 값을 얻을 수 있습니다.`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
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
            _referenceInfo: `배달요금은 1000원보다 높고 제한가격 보다 낮아야합니다.

HYUNDAI,CJGLS HANJIN의 최고 배송비는 20000원입니다

기타 택배사의 최고 배송비는 70000원입니다`,
            _warning: ``,
            children: false
          },
          {
            name: `notJeju`,
            type: `Number`,
            require: true,
            _description: `제주지역과 같습니다`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `usable`,
            type: `Boolean`,
            require: false,
            _description: `사용여부`,
            _relation: ``,
            _referenceInfo: `새로운 배송정보를 생성시 이 필드는 입력할 필요없습니다.

수정하신다면, "true"로 설정.

삭제하신다변, "false"로 설정.`,
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
      _description: `server response status code`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `message`,
      type: `String`,
      _description: `detail info`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Object`,
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `resultCode`,
          type: `String`,
          _description: `code `,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `resultMessage`,
          type: `String`,
          _description: `message`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        }
      ]
    }
  ],
  sample: {
    endpoint:`https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00012697/outboundShippingCenters/135`,
    code: [
      {
        language: `http`,
        codeblock:{
            "vendorId": "A00012697",
            "outboundShippingPlaceCode":"135",
            "shippingPlaceName": "outbound shipping place",
            "userId": "test@1"
           },


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
