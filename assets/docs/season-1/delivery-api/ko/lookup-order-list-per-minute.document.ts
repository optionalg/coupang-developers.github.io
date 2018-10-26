export const lookupOrderListPerMinuteDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `delivery-api`,   // input category ex) exchange-service-api
    id: `lookup-order-list-per-minute`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_order_list_per_minute`,
    name: `발주서 목록 조회(분단위 전체)`,       // use display name, i will change 'translation key'
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
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-09`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/wing_api/apis/internal-api/v2/ordersheets/time-frame`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v2/ordersheets/time-frame`,
    _description: `발주서 목록 조회 분단위 전체 조회`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: false,
    queryStringParameters: [
      {
        name: `createdAtFrom`,
        // type: `String`,
        require: true,
        _description: `검색 시작일시(결제일시기준)`,
        _relation: ``,
        _referenceInfo: `yyyy-MM-dd'T'HH:mm(ISO-8601)
ex)2015-12-14T14:16 ~ 2015-12-14T15:16
위 조건을 초단위까지 고려하면 아래와 같습니다.
result >= 2015-12-14T14:16:00
result < 2015-12-14T15:16:00
from과 to는 최대 하루(24시간)까지 검색 가능합니다.`,
        _warning: ``,
        children: false
      },
      {
        name: `createdAtTo`,
        // type: `String`,
        require: true,
        _description: `검색 종료일시(결제일시기준)`,
        _relation: ``,
        _referenceInfo: `yyyy-MM-dd'T'HH:mm(ISO-8601)
ex)2015-12-14T14:16 ~ 2015-12-14T15:16
위 조건을 초단위까지 고려하면 아래와 같습니다.
result >= 2015-12-14T14:16:00
result < 2015-12-14T15:16:00
from과 to는 최대 하루(24시간)까지 검색 가능합니다.`,
        _warning: ``,
        children: false
      },
      {
        name: `status`,
        // type: `String`,
        require: true,
        _description: `발주서 상태`,
        _relation: ``,
        _referenceInfo: `
        <table class="table">
        <tr>
          <th>Parameter Name</th>
          <th>Status</th>
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
        </table>
        `,
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
      _description: `서버 응답 메세지`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Array`,
      _description: `결과리스트`,
      _relation: ``,
      _referenceInfo: `결과가 없을 때는 빈 리스트가 리턴`,
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
          _referenceInfo: `
   <table class="table">
        <tr>
          <th>Parameter Name</th>
          <th>Status</th>
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
        </table>

          `,
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
          _referenceInfo: `optional`,
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
          name: `receiver`,
          type: `Object`,
          _description: ``,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `name`,
              type: `String`,
              _description: `수취인 이름	`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `safeNumber`,
              type: `String`,
              _description: `수취인 연락처(안심번호)`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `addr1`,
              type: `String`,
              _description: `수취인 배송지1`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `addr2`,
              type: `String`,
              _description: `수취인 배송지2`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `postCode`,
              type: `String`,
              _description: `수취인 우편번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
          ]
        },
        {
          name: `orderItems`,
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
              _referenceInfo: `optional / 없는 경우 0으로 리턴`,
              _warning: ``,
              children: false
            }, {
              name: `vendorItemPackageName`,
              type: `String`,
              _description: `vendorItemPackageName`,
              _relation: ``,
              _referenceInfo: `optional`,
              _warning: ``,
              children: false
            }, {
              name: `productId`,
              type: `Number`,
              _description: `productId`,
              _relation: ``,
              _referenceInfo: `optional / 없는 경우 0으로 리턴`,
              _warning: ``,
              children: false
            }, {
              name: `vendorItemId`,
              type: `Number`,
              _description: `vendorItemId`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `vendorItemName`,
              type: `String`,
              _description: `vendorItemName`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `shippingCount`,
              type: `Number`,
              _description: `item count to deliver(It must excludes cancel count)`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `salesPrice`,
              type: `Number`,
              _description: `개당 상품 가격(price of one item)`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `orderPrice`,
              type: `Number`,
              _description: `결제 가격 salesPrice*shippingCount : 하지만 항상 같지는 않음`,
              //왜 항상 안같지?
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `externalVendorSkuCode`,
              type: `String`,
              _description: `external code`,
              _relation: ``,
              _referenceInfo: `optional`,
              _warning: ``,
              children: false
            }, {
              name: `etcInfoHeader`,
              type: `String`,
              _description: `상품별 개별 입력 항목`,
              _relation: ``,
              _referenceInfo: `optional`,
              _warning: ``,
              children: false
            }, {
              name: `etcInfoValue`,
              type: `String`,
              _description: `상품별 개별 입력 항목에 대한 사용자의 입력값`,
              _relation: ``,
              _referenceInfo: `optional`,
              _warning: ``,
              children: false
            }, {
              name: `sellerProductId`,
              type: `Number`,
              _description: `업체상품 아이디`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `sellerProductName`,
              type: `String`,
              _description: `업체상품명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, {
              name: `estimatedShippingDate`,
              type: `String`,
              _description: `주문시 출고예정일`,
              _relation: ``,
              _referenceInfo: `optional / yyyy-mm-dd`,
              _warning: ``,
              children: false
            }, {
              name: `plannedShippingDate`,
              type: `String`,
              _description: `실제 출고예정일 (분리배송 시)`,
              _relation: ``,
              _referenceInfo: `optional / yyyy-mm-dd`,
              _warning: ``,
              children: false
            }, {
              name: `invoiceNumberUploadDate`,
              type: `String`,
              _description: `운송장번호 업로드 일시`,
              _relation: ``,
              _referenceInfo: `optional / yyyy-MM-dd'T'HH:mm:ss`,
              _warning: ``,
              children: false
            }, {
              name: `extraProperties`,
              type: `Array`,
              _description: `업체상품옵션 추가 정보`,
              _relation: ``,
              _referenceInfo: `optional / key:value 형태`,
              _warning: ``,
              children: false
            },
          ]
        },
        {
          name: `overseaShippingInfoDto`,
          type: `Object`,
          _description: `해외배송정보`,
          _relation: ``,
          _referenceInfo: `optional`,
          _warning: ``,
          children: [
            {
              name: `personalCustomsClearanceCode`,
              type: `String`,
              _description: ``,
              _relation: ``,
              _referenceInfo: `optional`,
              _warning: ``,
              children: false
            }, {
              name: `orderersSsn`,
              type: `String`,
              _description: ``,
              _relation: ``,
              _referenceInfo: `optional`,
              _warning: ``,
              children: false
            }, {
              name: `ordererPhoneNumber`,
              type: `String`,
              _description: ``,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
          ]
        },

      ]
    },
    {
      name: `nextToken`,
      type: `String`,
      _description: `다음 페이지 요청 전송시 필요한 token 값`,
      _relation: ``,
      _referenceInfo: `마지막 페이지인 경우 빈 값으로 리턴`,
      _warning: ``,
      children: false
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v2/ordersheets/time-frame?createdAtFrom=2015-12-14T14:16&createdAtTo=2015-12-14T14:17&status=ACCEPT`,
    code: [
      {
        language: `http`,
        codeblock: {}
      }
    ],
    response: {
      "code": "200",
      "message": "OK",
      "data": [
        {
          "shipmentBoxId": 102392027,
          "orderId": 500000693,
          "orderedAt": "2015-12-14T14:16:18",
          "orderer": {
            "name": "김문근",
            "email": "mg*****@co",
            "safeNumber": "0501-111-2222"
          },
          "paidAt": "2015-12-14T14:16:18",
          "status": "ACCEPT",
          "shippingPrice": 3500,
          "parcelPrintMessage": null,
          "splitShipping": false,
          "ableSplitShipping": true,
          "receiver": {
            "name": "test",
            "safeNumber": "0501-111-2222",
            "addr1": "addr1",
            "addr2": "addr2",
            "postCode": "427-070"
          },
          "orderItems": [
            {
              "vendorItemPackageId": 0,
              "vendorItemPackageName": "하와이-테스트-쇼핑-기저귀",
              "productId": 2428,
              "vendorItemId": 3000000168,
              "vendorItemName": "하와이-테스트-쇼핑-기저귀4",
              "shippingCount": 1,
              "salesPrice": 9999,
              "orderPrice": 9999,
              "externalVendorSkuCode": null,
              "etcInfoHeader": null,
              "etcInfoValue": null,
              "sellerProductName": "",
              "estimatedShippingDate": "2015-12-16",
              "plannedShippingDate": "",
              "invoiceNumberUploadDate": "",
              "extraProperties": {}
            },
            {
              "vendorItemPackageId": 0,
              "vendorItemPackageName": "하와이-테스트-쇼핑-기저귀",
              "productId": 2428,
              "vendorItemId": 3000000171,
              "vendorItemName": "하와이-테스트-쇼핑-기저귀7",
              "shippingCount": 1,
              "salesPrice": 20000,
              "orderPrice": 20000,
              "externalVendorSkuCode": null,
              "etcInfoHeader": null,
              "etcInfoValue": null,
              "sellerProductName": "",
              "estimatedShippingDate": "2015-12-16",
              "plannedShippingDate": "",
              "invoiceNumberUploadDate": "",
              "extraProperties": {}
            }
          ],
          "overseaShippingInfoDto": {
            "personalCustomsClearanceCode": null,
            "ordererSsn": "",
            "ordererPhoneNumber": ""
          }
        },
        {
          "shipmentBoxId": 102392028,
          "orderId": 500000694,
          "orderedAt": "2015-12-14T14:16:24",
          "orderer": {
            "name": "김문근",
            "email": "mg*****@co",
            "safeNumber": "0501-111-2222"
          },
          "paidAt": "2015-12-14T14:16:24",
          "status": "ACCEPT",
          "shippingPrice": 0,
          "parcelPrintMessage": null,
          "splitShipping": false,
          "ableSplitShipping": true,
          "receiver": {
            "name": "test",
            "safeNumber": "0501-111-2222",
            "addr1": "addr1",
            "addr2": "addr2",
            "postCode": "427-070"
          },
          "orderItems": [
            {
              "vendorItemPackageId": 0,
              "vendorItemPackageName": "하와이-테스트-쇼핑-배추김치",
              "productId": 2429,
              "vendorItemId": 3000000174,
              "vendorItemName": "하와이-테스트-쇼핑-배추김치3",
              "shippingCount": 1,
              "salesPrice": 14500,
              "orderPrice": 14500,
              "externalVendorSkuCode": null,
              "etcInfoHeader": null,
              "etcInfoValue": null,
              "sellerProductName": "",
              "estimatedShippingDate": "2015-12-16",
              "plannedShippingDate": "",
              "invoiceNumberUploadDate": "",
              "extraProperties": {}
            },
            {
              "vendorItemPackageId": 0,
              "vendorItemPackageName": "하와이-테스트-쇼핑-배추김치",
              "productId": 2429,
              "vendorItemId": 3000000175,
              "vendorItemName": "하와이-테스트-쇼핑-배추김치4",
              "shippingCount": 1,
              "salesPrice": 3500,
              "orderPrice": 3500,
              "externalVendorSkuCode": null,
              "etcInfoHeader": null,
              "etcInfoValue": null,
              "sellerProductName": "",
              "estimatedShippingDate": "2015-12-16",
              "plannedShippingDate": "",
              "invoiceNumberUploadDate": "",
              "extraProperties": {}
            }
          ],
          "overseaShippingInfoDto": {
            "personalCustomsClearanceCode": null,
            "ordererSsn": "",
            "ordererPhoneNumber": ""
          }
        },
        {
          "shipmentBoxId": 102392030,
          "orderId": 500000696,
          "orderedAt": "2015-12-14T14:16:35",
          "orderer": {
            "name": "김문근",
            "email": "mg*****@co",
            "safeNumber": "0501-111-2222"
          },
          "paidAt": "2015-12-14T14:16:35",
          "status": "ACCEPT",
          "shippingPrice": 3500,
          "parcelPrintMessage": null,
          "splitShipping": false,
          "ableSplitShipping": true,
          "receiver": {
            "name": "test",
            "safeNumber": "0501-111-2222",
            "addr1": "addr1",
            "addr2": "addr2",
            "postCode": "427-070"
          },
          "orderItems": [
            {
              "vendorItemPackageId": 0,
              "vendorItemPackageName": "하와이-테스트-쇼핑-기저귀",
              "productId": 2428,
              "vendorItemId": 3000000167,
              "vendorItemName": "하와이-테스트-쇼핑-기저귀3",
              "shippingCount": 1,
              "salesPrice": 10000,
              "orderPrice": 10000,
              "externalVendorSkuCode": null,
              "etcInfoHeader": null,
              "etcInfoValue": null,
              "sellerProductName": "",
              "estimatedShippingDate": "2015-12-16",
              "plannedShippingDate": "",
              "invoiceNumberUploadDate": "",
              "extraProperties": {}
            },
            {
              "vendorItemPackageId": 0,
              "vendorItemPackageName": "하와이-테스트-쇼핑-기저귀",
              "productId": 2428,
              "vendorItemId": 3000000168,
              "vendorItemName": "하와이-테스트-쇼핑-기저귀4",
              "shippingCount": 1,
              "salesPrice": 9999,
              "orderPrice": 9999,
              "externalVendorSkuCode": null,
              "etcInfoHeader": null,
              "etcInfoValue": null,
              "sellerProductName": "",
              "estimatedShippingDate": "2015-12-16",
              "plannedShippingDate": "",
              "invoiceNumberUploadDate": "",
              "extraProperties": {}
            }
          ],
          "overseaShippingInfoDto": {
            "personalCustomsClearanceCode": null,
            "ordererSsn": "",
            "ordererPhoneNumber": ""
          }
        },
        {
          "shipmentBoxId": 102392031,
          "orderId": 500000697,
          "orderedAt": "2015-12-14T14:16:41",
          "orderer": {
            "name": "김문근",
            "email": "mg*****@co",
            "safeNumber": "0501-111-2222"
          },
          "paidAt": "2015-12-14T14:16:41",
          "status": "ACCEPT",
          "shippingPrice": 2500,
          "parcelPrintMessage": null,
          "splitShipping": false,
          "ableSplitShipping": true,
          "receiver": {
            "name": "test",
            "safeNumber": "0501-111-2222",
            "addr1": "addr1",
            "addr2": "addr2",
            "postCode": "427-070"
          },
          "orderItems": [
            {
              "vendorItemPackageId": 0,
              "vendorItemPackageName": "하와이-테스트-쇼핑-기저귀",
              "productId": 2428,
              "vendorItemId": 3000000170,
              "vendorItemName": "하와이-테스트-쇼핑-기저귀6",
              "shippingCount": 1,
              "salesPrice": 3700,
              "orderPrice": 3700,
              "externalVendorSkuCode": null,
              "etcInfoHeader": null,
              "etcInfoValue": null,
              "sellerProductName": "",
              "estimatedShippingDate": "2015-12-16",
              "plannedShippingDate": "",
              "invoiceNumberUploadDate": "",
              "extraProperties": {}
            },
            {
              "vendorItemPackageId": 0,
              "vendorItemPackageName": "하와이-테스트-쇼핑-기저귀",
              "productId": 2428,
              "vendorItemId": 3000000171,
              "vendorItemName": "하와이-테스트-쇼핑-기저귀7",
              "shippingCount": 1,
              "salesPrice": 20000,
              "orderPrice": 20000,
              "externalVendorSkuCode": null,
              "etcInfoHeader": null,
              "etcInfoValue": null,
              "sellerProductName": "",
              "estimatedShippingDate": "2015-12-16",
              "plannedShippingDate": "",
              "invoiceNumberUploadDate": "",
              "extraProperties": {}
            }
          ],
          "overseaShippingInfoDto": {
            "personalCustomsClearanceCode": null,
            "ordererSsn": "",
            "ordererPhoneNumber": ""
          }
        },
        {
          "shipmentBoxId": 102392033,
          "orderId": 500000699,
          "orderedAt": "2015-12-14T14:16:54",
          "orderer": {
            "name": "김문근",
            "email": "mg*****@co",
            "safeNumber": "0501-111-2222"
          },
          "paidAt": "2015-12-14T14:16:54",
          "status": "ACCEPT",
          "shippingPrice": 3000,
          "parcelPrintMessage": null,
          "splitShipping": false,
          "ableSplitShipping": false,
          "receiver": {
            "name": "test",
            "safeNumber": "0501-111-2222",
            "addr1": "addr1",
            "addr2": "addr2",
            "postCode": "427-070"
          },
          "orderItems": [
            {
              "vendorItemPackageId": 0,
              "vendorItemPackageName": "하와이-테스트-쇼핑-기저귀",
              "productId": 2428,
              "vendorItemId": 3000000172,
              "vendorItemName": "하와이-테스트-쇼핑-기저귀8",
              "shippingCount": 1,
              "salesPrice": 6000,
              "orderPrice": 6000,
              "externalVendorSkuCode": null,
              "etcInfoHeader": null,
              "etcInfoValue": null,
              "sellerProductName": "",
              "estimatedShippingDate": "2015-12-16",
              "plannedShippingDate": "",
              "invoiceNumberUploadDate": "",
              "extraProperties": {}
            }
          ],
          "overseaShippingInfoDto": {
            "personalCustomsClearanceCode": null,
            "ordererSsn": "",
            "ordererPhoneNumber": ""
          }
        },
        {
          "shipmentBoxId": 102392034,
          "orderId": 500000699,
          "orderedAt": "2015-12-14T14:16:54",
          "orderer": {
            "name": "김문근",
            "email": "mg*****@co",
            "safeNumber": "0501-111-2222"
          },
          "paidAt": "2015-12-14T14:16:54",
          "status": "ACCEPT",
          "shippingPrice": 2500,
          "parcelPrintMessage": null,
          "splitShipping": false,
          "ableSplitShipping": true,
          "receiver": {
            "name": "test",
            "safeNumber": "0501-111-2222",
            "addr1": "addr1",
            "addr2": "addr2",
            "postCode": "427-070"
          },
          "orderItems": [
            {
              "vendorItemPackageId": 0,
              "vendorItemPackageName": "하와이-테스트-쇼핑-기저귀",
              "productId": 2428,
              "vendorItemId": 3000000170,
              "vendorItemName": "하와이-테스트-쇼핑-기저귀6",
              "shippingCount": 1,
              "salesPrice": 3700,
              "orderPrice": 3700,
              "externalVendorSkuCode": null,
              "etcInfoHeader": null,
              "etcInfoValue": null,
              "sellerProductName": "",
              "estimatedShippingDate": "2015-12-16",
              "plannedShippingDate": "",
              "invoiceNumberUploadDate": "",
              "extraProperties": {}
            },
            {
              "vendorItemPackageId": 0,
              "vendorItemPackageName": "하와이-테스트-쇼핑-기저귀",
              "productId": 2428,
              "vendorItemId": 3000000171,
              "vendorItemName": "하와이-테스트-쇼핑-기저귀7",
              "shippingCount": 1,
              "salesPrice": 20000,
              "orderPrice": 20000,
              "externalVendorSkuCode": null,
              "etcInfoHeader": null,
              "etcInfoValue": null,
              "sellerProductName": "",
              "estimatedShippingDate": "2015-12-16",
              "plannedShippingDate": "",
              "invoiceNumberUploadDate": "",
              "extraProperties": {}
            }
          ],
          "overseaShippingInfoDto": {
            "personalCustomsClearanceCode": null,
            "ordererSsn": "",
            "ordererPhoneNumber": ""
          }
        }
      ]
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
