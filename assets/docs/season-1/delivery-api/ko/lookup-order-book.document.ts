export const lookupOrderBookDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `delivery-api`,   // input category ex) exchange-service-api
    id: `lookup-order-book`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_order_book`,
    name: `발주서 단건 조회`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: `2017-02-09`, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: ``,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-09`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/wing_api/apis/internal-api/v2/ordersheets/{shipmentBoxId}`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v2/ordersheets/{shipmentBoxId}`,
    _description: `발주서 단건 조회`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `shipmentBoxId`,
        require: true,
        _description: `shipmentBoxId`,
        _relation: `이 파라미터는 GET /v2/providers/wing_api/apis/internal-api/v2/ordersheets  API를 통해 얻을 수 있습니다.`,
        _referenceInfo: ``,
        _warning: `shipmentBoxId must be a number.`
      }
    ],
    queryStringParameters: false,
    bodyParameters: false
  },
  errorSpec: [
    {
      status: ``,
      _description: ``,
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
      _description: `서버 응답 메세지`,
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
          name: `shipmentBoxId`,
          type: `Number`,
          _description: `배송번호`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `orderId`,
          type: `Number`,
          _description: `주문번호`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `orderedAt`,
          type: `String`,
          _description: `주문일시`,
          _relation: ``,
          _referenceInfo: `yyyy-MM-dd'T'HH:mm:ss`,
          _warning: ``,
          children: false
        },
        {
          name: `orderer`,
          type: `Object`,
          _description: `주문자`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `name`,
              type: `String`,
              _description: `주문자 이름`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `email`,
              type: `String`,
              _description: `주문자 email`,
              _relation: ``,
              _referenceInfo: `마스킹 처리됨`,
              _warning: ``,
              children: false
            },
            {
              name: `safeNumber`,
              type: `String`,
              _description: `주문자 연락처(안심번호)`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }
          ]
        },
        {
          name: `paidAt`,
          type: `String`,
          _description: `결제일시`,
          _relation: ``,
          _referenceInfo: `yyyy-MM-dd'T'HH:mm:ss`,
          _warning: ``,
          children: false
        },
        {
          name: `status`,
          type: `String`,
          _description: `발주서상태`,
          _relation: ``,
          _referenceInfo: `<table class="table">
            <tr>
                <th>STATUS</th>
                <th>MEANING</th>
            </tr>
            <tr>
                <td>ACCEPT</td>
                <td>결제완료</td>
            </tr>
            <tr>
                <td>INSTRUCT</td>
                <td>상품준비중</td>
            </tr>
            <tr>
                <td>DEPARTURE</td>
                <td>배송지시</td>
            </tr>
            <tr>
                <td>DELIVERING</td>
                <td>배송중</td>
            </tr>
            <tr>
                <td>FINAL_DELIVERY</td>
                <td>배송완료</td>
            </tr>
            <tr>
                <td>NONE_TRACKING</td>
                <td>업체 직접 배송(배송 연동 미적용), 추적불가</td>
            </tr>
          </table>`,
          _warning: ``,
          children: false
        },
        {
          name: `shippingPrice`,
          type: `Number`,
          _description: `배송비`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `parcelPrintMessage`,
          type: `String`,
          _description: `배송메세지`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `splitShipping`,
          type: `Boolean`,
          _description: `분리배송여부`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `ableSplitShipping`,
          type: `Boolean`,
          _description: `분리배송가능여부`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `remoteArea`,
          type: `Boolean`,
          _description: `도서산간여여부`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `remotePrice`,
          type: `Number`,
          _description: `도서산간배송비`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `receiver`,
          type: `Object`,
          _description: `수취인 정보`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `name`,
              type: `String`,
              _description: `수취인 이름`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `safeNumber`,
              type: `String`,
              _description: `수취인 연락처(안심번호)`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `addr1`,
              type: `String`,
              _description: `수취인 배송지1`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `addr2`,
              type: `String`,
              _description: `수취인 배송지2`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `postCode`,
              type: `String`,
              _description: `수취인 우편번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }
          ]
        },
        {
          name: `ordeItems`,
          type: `Array`,
          _description: `Items to deliver`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `vendorItemPackageId`,
              type: `Number`,
              _description: `vendorItemPackageId`,
              _relation: ``,
              _referenceInfo: `없는 경우 0으로 리턴`,
              _warning: ``,
              children: false
            },
            {
              name: `vendorItemPackageName`,
              type: `String`,
              _description: `vendorItemPackageName`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `productId`,
              type: `Number`,
              _description: `productId`,
              _relation: ``,
              _referenceInfo: `없는 경우 0으로 리턴`,
              _warning: ``,
              children: false
            },
            {
              name: `vendorItemId`,
              type: `Number`,
              _description: `vendorItemId`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `vendorItemName`,
              type: `String`,
              _description: `vendorItemName`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `shippingCount`,
              type: `Number`,
              _description: `item count to deliver(It must excludes cancel count)`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `salesPrice`,
              type: `Number`,
              _description: `개당 상품 가격(price of one item)`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `orderPrice`,
              type: `Number`,
              _description: `결제 가격 salesPrice*shippingCount: 하지만 항상 같지는 않음`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `externalVendorSkuCode`,
              type: `String`,
              _description: `external code`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `etcInfoHeader`,
              type: `String`,
              _description: `상품별 개별 입력 항목`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `etcInfoValue`,
              type: `String`,
              _description: `상품별 개별 입력 항목에 대한 사용자의 입력값`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `sellerProductId`,
              type: `Number`,
              _description: `업체상품 아이디`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `sellerProductName`,
              type: `String`,
              _description: `업체상품명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `estimatedShippingDate`,
              type: `String`,
              _description: `주문시 출고예정일`,
              _relation: ``,
              _referenceInfo: `yyyy-MM-dd`,
              _warning: ``,
              children: false
            },
            {
              name: `plannedShippingDate`,
              type: `String`,
              _description: `실제 출고예정일 (분리배송 시)`,
              _relation: ``,
              _referenceInfo: `yyyy-MM-dd`,
              _warning: ``,
              children: false
            },
            {
              name: `invoiceNumberUploadDate`,
              type: `String`,
              _description: `운송장번호 업로드 일시`,
              _relation: ``,
              _referenceInfo: `yyyy-MM-dd'T'HH:mm:ss`,
              _warning: ``,
              children: false
            },
            {
              name: `extraProperties`,
              type: `Object`,
              _description: `업체상품옵션 추가 정보`,
              _relation: ``,
              _referenceInfo: `key:value 형태`,
              _warning: ``,
              children: false
            }
          ]
        },
        {
          name: `overseaShippingInfoDto`,
          type: `Object`,
          _description: `해외배송정보`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `personalCustomsClearanceCode`,
              type: `String`,
              _description: ``,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `orderersSsn`,
              type: `String`,
              _description: ``,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `ordererPhoneNumber`,
              type: `String`,
              _description: ``,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }
          ]
        },
      ]
    }
  ],
  sample: {
    endpoint:`https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v2/ordersheets/102392001`,
    code: [
      {
        language: `http`,
        codeblock: {

        }
      }
    ],
    response:{
      "code": "200",
      "message": "OK",
      "data": {
        "shipmentBoxId": 102392001,
        "orderId": 500000596,
        "orderedAt": "2015-12-11T09:23:55",
        "orderer": {
          "name": "김문근",
          "email": "mg*****@co",
          "safeNumber": "0501-111-2222"
        },
        "paidAt": "2015-12-11T09:23:55",
        "status": "DEPARTURE",
        "shippingPrice": 2500,
        "parcelPrintMessage": null,
        "splitShipping": false,
        "ableSplitShipping": false,
        "remoteArea": false,
        "remotePrice": 0,
        "receiver": {
          "name": "test",
          "safeNumber": "0501-111-2222",
          "addr1": "addr1",
          "addr2": "addr2",
          "postCode": "427-070"
        },
        "orderItems":[
          {
            "vendorItemPackageId": 0,
            "vendorItemPackageName": "하와이-테스트-쇼핑-배추김치",
            "productId": 2429,
            "vendorItemId": 3000000177,
            "vendorItemName": "하와이-테스트-쇼핑-배추김치6",
            "shippingCount": 3,
            "salesPrice": 6666,
            "orderPrice": 19998,
            "externalVendorSkuCode": null,
            "etcInfoHeader": null,
            "etcInfoValue": null,
            "sellerProductName": "",
            "estimatedShippingDate": "2015-12-15",
            "plannedShippingDate": "",
            "invoiceNumberUploadDate": "",
            "extraProperties":{}
          }
        ],
        "overseaShippingInfoDto": {
          "personalCustomsClearanceCode": null,
          "ordererSsn": "",
          "ordererPhoneNumber": ""
        }
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
