export const lookupSalesHistoryDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `settlement-api`,   // input category ex) exchange-service-api
    id: `lookup-sales-history`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_sales_history`,
    name: `매출내역 조회`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
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
        apiName: `매출내역 조회`,
        path: `/v2/providers/greatwall_api/apis/api/v1/settlement/goods/sales/inquiries/{vendorId}
        /v2/providers/openapi/apis/api/v4/vendors/{vendorId}/orders/salesDetails`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: `매출내역 조회`,
        path: `/v2/providers/openapi/apis/api/v1/revenue-history`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  apiInfo: {
    state: `release`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-01-09`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Jamin`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/openapi/apis/api/v1/revenue-history`,
    HMACPath: `/v2/providers/openapi/apis/api/v1/revenue-history`,
    //상품매출, 배송비매출등 상세한 매출내역을 조회할수 있다.
    _description: `매출인식일(구매확정일 or 배송완료 + 7일)을 기준으로 상세한 매출 내역을 조회할 수 있습니다. `,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    queryStringParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `업체 코드`,
        _relation: ``,
        _referenceInfo: `쿠팡에서 업체에게 발급한 고유 코드. Wing 로그인 후 확인 가능`,
        _warning: ``
      }
      ,
      {
        name: `recognitionDateFrom`,
        require: true,
        _description: `매출인식 시작일`,
        _relation: ``,
        _referenceInfo: `최대 31일 이내로 입력`,
        _warning: `형식 : YYYY-MM-dd`
      }
      ,
      {
        name: `recognitionDateTo`,
        require: true,
        _description: `매출인식 종료일`,
        _relation: ``,
        _referenceInfo: `최대 31일 이내로 입력`,
        _warning: `형식 : YYYY-MM-dd`
      }
      ,
      {
        name: `token`,
        require: true,
        _description: `다음 페이지 조회를 위한 token값`,
        _relation: ``,
        _referenceInfo: `다음 페이지를 호출하기
위한 토큰값<br/>(첫 페이지 조회 시에는'token='까지만 입력)`,
        _warning: ``
      },
      {
        name: `maxPerPage`,
        require: false,
        _description: `페이지당 최대 호출개수`,
        _relation: ``,
        _referenceInfo: `default=50, min=1, max=50`,
        _warning: ``
      }
    ],
    bodyParameters: false
  },
  errorSpec: [
    {
      status: 400,
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
      _description: `detail info`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    },
    {
      name: `data`,
      type: `Array`,
      _description: `결과리스트`,
      _relation: `결과가 없을 때는 빈 리스트가 리턴`,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `orderId`,
          type: `Number`,
          _description: `주문번호`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `saleType`,
          type: `String`,
          _description: `항목구분`,
          _relation: ``,
          _referenceInfo: `<table class="table">
        <tr>
          <th>Status</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>SALE</td>
          <td>주문 건</td>
        </tr>
        <tr>
          <td>REFUND</td>
          <td>반품 건</td>
        </tr>
        </table>`,
          _warning: ``,
          children: false,
        },
        {
          name: `saleDate`,
          type: `String`,
          _description: `결제완료일`,
          _relation: ``,
          _referenceInfo: `형식 : YYYY-MM-dd`,
          _warning: ``,
          children: false,
        },
        {
          name: `recognitionDate`,
          type: `String`,
          _description: `매출인식일`,
          _relation: ``,
          _referenceInfo: `형식 : YYYY-MM-dd`,
          _warning: `'배송완료 + 7day' 또는 '구매확정'`,
          children: false,
        },
        {
          name: `settlementDate`,
          type: `String`,
          _description: `지급예정일`,
          _relation: ``,
          _referenceInfo: `형식 : YYYY-MM-dd`,
          _warning: ``,
          children: false,
        },
        {
          name: `finalSettlementDate`,
          type: `String`,
          _description: `유보액지급 예정일`,
          _relation: ``,
          _referenceInfo: `형식 : YYYY-MM-dd`,
          _warning: `주 단위 정산에만 사용`,
          children: false,
        },
        {
          name: `deliveryFee`,
          type: `Array`,
          _description: `배송비 관련 상세 안내`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `amount`,
              type: `Number`,
              _description: `총 배송비`,
              _relation: ``,
              _referenceInfo: `총 배송비 : 기본배송비 + 도서산간배송비`,
              _warning: ``,
              children: false,
            },
            {
              name: `fee`,
              type: `Number`,
              _description: `총 배송비 수수료`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `feeVat`,
              type: `Number`,
              _description: `총 배송비 부가가치세`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `feeRatio`,
              type: `Number`,
              _description: `배송비 수수료율 (%)`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `settlementAmount`,
              type: `Number`,
              _description: `배송비 정산 대상액`,
              _relation: ``,
              _referenceInfo: `정산 대상액 : 총 배송비 - 배송비 수수료 - 배송비 부가가치세`,
              _warning: ``,
              children: false,
            },
            {
              name: `baseAmount`,
              type: `Number`,
              _description: `기본배송비`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `baseFee`,
              type: `Number`,
              _description: `기본배송비 수수료`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `baseFeeVat`,
              type: `Number`,
              _description: `기본배송비 부가가치세`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `remoteAmount`,
              type: `Number`,
              _description: `도서산간 배송비`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `remoteFee`,
              type: `Number`,
              _description: `도서산간 배송비 수수료`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `remoteFeeVat`,
              type: `Number`,
              _description: `도서산간 배송비 부가가치세`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            }
          ],
        },
        {
          name: `items`,
          type: `Array`,
          _description: `주문상품별 정산금액 상세`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `taxType`,
              type: `String`,
              _description: `과세여부`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `productId`,
              type: `Number`,
              _description: `노출상품 ID`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `productName`,
              type: `String`,
              _description: `노출상품명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `vendorItemId`,
              type: `Number`,
              _description: `옵선 ID`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `vendorItemName`,
              type: `String`,
              _description: `옵선명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `salePrice`,
              type: `Number`,
              _description: `총 판매가`,
              _relation: ``,
              _referenceInfo: `수량이 반영된 총 판매가`,
              _warning: ``,
              children: false,
            },
            {
              name: `quantity`,
              type: `Number`,
              _description: `수량`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `couapngDiscountCoupon`,
              type: `Number`,
              _description: `쿠팡지원할인금액`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `discountCouponPolicyAgreement`,
              type: `Boolean`,
              _description: `쿠팡지원 할인쿠폰 동의여부`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `saleAmount`,
              type: `Number`,
              _description: `매출금액`,
              _relation: ``,
              _referenceInfo: `매출금액 = 판매액 - 쿠팡지원할인`,
              _warning: ``,
              children: false,
            },
            {
              name: `sellerDiscountCoupon`,
              type: `Number`,
              _description: `판매자할인쿠폰`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `serviceFee`,
              type: `Number`,
              _description: `서비스 이용료`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `serviceFeeVat`,
              type: `Number`,
              _description: `서비스 이용 부가가치세`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `serviceFeeRatio`,
              type: `Number`,
              _description: `서비스이용율(%, VAT별도)`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `settlementAmount`,
              type: `Number`,
              _description: `정산금액`,
              _relation: `정산금액 = 매출금액 - (서비스이용료 + 서비스이용VAT)`,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `couranteeFeeRatio`,
              type: `Number`,
              _description: `쿠런티 이용료(%)`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `couranteeFee`,
              type: `Number`,
              _description: `쿠런티 이용료(금액)`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `couranteeFeeVat`,
              type: `Number`,
              _description: `쿠런티 이용 부가가치세`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `externalSellerSkuCode`,
              type: `String`,
              _description: `셀러 상품 관리코드`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            }
          ]
        }
      ]
    }
    ,
    {
      name: `hasNext`,
      type: `Boolean`,
      _description: `다음페이지에 데이터 존재 여부`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    }
    ,
    {
      name: `nextToken`,
      type: `String`,
      _description: `다음 페이지를 조회하기위한 토큰 값`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v1/revenue-history?vendorId=A00123456&recognitionDateFrom=2019-02-10&recognitionDateTo=2019-02-14&token=&maxPerPage=`,
    code: [
      {
        language: `http`,
        codeblock: null
      }
    ],
    response: {
      "code": 200,
      "message": "OK",
      "data":    [
        {
          "orderId": 20000000000000,
          "saleType": "REFUND",
          "saleDate": "2019-01-24",
          "recognitionDate": "2019-02-11",
          "settlementDate": "2019-03-22",
          "finalSettlementDate": "2019-03-22",
          "deliveryFee":          {
            "amount": 0,
            "fee": 0,
            "feeVat": 0,
            "feeRatio": 3,
            "settlementAmount": null,
            "baseAmount": 0,
            "baseFee": 0,
            "baseFeeVat": 0,
            "remoteAmount": 0,
            "remoteFee": 0,
            "remoteFeeVat": 0
          },
          "items": [         {
            "taxType": "TAX",
            "productId": 1234567,
            "productName": "테스트 상품명1(반품건 업체귀책)",
            "vendorItemId": 123123123,
            "vendorItemName": "테스트 상품명1, 1개",
            "salePrice": 31670,
            "quantity": 1,
            "coupangDiscountCoupon": 0,
            "discountCouponPolicyAgreement": true,
            "saleAmount": 31670,
            "sellerDiscountCoupon": 0,
            "serviceFee": 2534,
            "serviceFeeVat": 253,
            "serviceFeeRatio": 8,
            "settlementAmount": 28883,
            "couranteeFeeRatio": 0,
            "couranteeFee": 0,
            "couranteeFeeVat": 0,
            "externalSellerSkuCode": "000654352"
          }]
        },
        {
          "orderId": 7000000000000,
          "saleType": "REFUND",
          "saleDate": "2019-02-03",
          "recognitionDate": "2019-02-11",
          "settlementDate": "2019-03-22",
          "finalSettlementDate": "2019-03-22",
          "deliveryFee":          {
            "amount": -5000,
            "fee": -150,
            "feeVat": -15,
            "feeRatio": 3,
            "settlementAmount": null,
            "baseAmount": -5000,
            "baseFee": -150,
            "baseFeeVat": -15,
            "remoteAmount": 0,
            "remoteFee": 0,
            "remoteFeeVat": 0
          },
          "items": [         {
            "taxType": "TAX",
            "productId": 2345678,
            "productName": "테스트 상품명2(반품건 고객귀책)",
            "vendorItemId": 234234234,
            "vendorItemName": "테스트 상품명2, 1개",
            "salePrice": 0,
            "quantity": 0,
            "coupangDiscountCoupon": 0,
            "discountCouponPolicyAgreement": true,
            "saleAmount": 0,
            "sellerDiscountCoupon": 0,
            "serviceFee": 0,
            "serviceFeeVat": 0,
            "serviceFeeRatio": 0,
            "settlementAmount": 0,
            "couranteeFeeRatio": 0,
            "couranteeFee": 0,
            "couranteeFeeVat": 0,
            "externalSellerSkuCode": "000866375"
          }]
        },
        {
          "orderId": 20000000000001,
          "saleType": "SALE",
          "saleDate": "2019-02-10",
          "recognitionDate": "2019-02-12",
          "settlementDate": "2019-03-22",
          "finalSettlementDate": "2019-03-22",
          "deliveryFee":          {
            "amount": 0,
            "fee": 0,
            "feeVat": 0,
            "feeRatio": 3,
            "settlementAmount": null,
            "baseAmount": 0,
            "baseFee": 0,
            "baseFeeVat": 0,
            "remoteAmount": 0,
            "remoteFee": 0,
            "remoteFeeVat": 0
          },
          "items": [         {
            "taxType": "FREE",
            "productId": 127719726,
            "productName": "테스트 상품명3(판매건)",
            "vendorItemId": 3911982076,
            "vendorItemName": "테스트 상품명3(판매건), 1개",
            "salePrice": 16000,
            "quantity": 1,
            "coupangDiscountCoupon": 0,
            "discountCouponPolicyAgreement": true,
            "saleAmount": 16000,
            "sellerDiscountCoupon": 0,
            "serviceFee": 1280,
            "serviceFeeVat": 128,
            "serviceFeeRatio": 8,
            "settlementAmount": 14592,
            "couranteeFeeRatio": 0,
            "couranteeFee": 0,
            "couranteeFeeVat": 0,
            "externalSellerSkuCode": "000690541"
          }]
        },
        {
          "orderId": 20000000000002,
          "saleType": "SALE",
          "saleDate": "2019-01-28",
          "recognitionDate": "2019-02-14",
          "settlementDate": "2019-03-22",
          "finalSettlementDate": "2019-03-22",
          "deliveryFee":          {
            "amount": 0,
            "fee": 0,
            "feeVat": 0,
            "feeRatio": 3,
            "settlementAmount": null,
            "baseAmount": 0,
            "baseFee": 0,
            "baseFeeVat": 0,
            "remoteAmount": 0,
            "remoteFee": 0,
            "remoteFeeVat": 0
          },
          "items": [         {
            "taxType": "TAX",
            "productId": 127751683,
            "productName": "테스트 상품명4(판매건)",
            "vendorItemId": 3912089385,
            "vendorItemName": "테스트 상품명4(판매건), 1개",
            "salePrice": 14850,
            "quantity": 1,
            "coupangDiscountCoupon": 0,
            "discountCouponPolicyAgreement": true,
            "saleAmount": 14850,
            "sellerDiscountCoupon": 0,
            "serviceFee": 1188,
            "serviceFeeVat": 119,
            "serviceFeeRatio": 8,
            "settlementAmount": 13543,
            "couranteeFeeRatio": 0,
            "couranteeFee": 0,
            "couranteeFeeVat": 0,
            "externalSellerSkuCode": "000664370"
          }]
        },
        {
          "orderId": 20000000000003,
          "saleType": "REFUND",
          "saleDate": "2019-02-09",
          "recognitionDate": "2019-02-14",
          "settlementDate": "2019-03-22",
          "finalSettlementDate": "2019-03-22",
          "deliveryFee":          {
            "amount": -7500,
            "fee": -225,
            "feeVat": -23,
            "feeRatio": 3,
            "settlementAmount": null,
            "baseAmount": -7500,
            "baseFee": -225,
            "baseFeeVat": -23,
            "remoteAmount": 0,
            "remoteFee": 0,
            "remoteFeeVat": 0
          },
          "items": [         {
            "taxType": "TAX",
            "productId": 143042724,
            "productName": "테스트 상품명5(반품건 고객귀책)",
            "vendorItemId": 4020940695,
            "vendorItemName": "테스트 상품명5(반품건 고객귀책), 1개",
            "salePrice": 0,
            "quantity": 0,
            "coupangDiscountCoupon": 0,
            "discountCouponPolicyAgreement": true,
            "saleAmount": 0,
            "sellerDiscountCoupon": 0,
            "serviceFee": 0,
            "serviceFeeVat": 0,
            "serviceFeeRatio": 0,
            "settlementAmount": 0,
            "couranteeFeeRatio": 0,
            "couranteeFee": 0,
            "couranteeFeeVat": 0,
            "externalSellerSkuCode": "000825156"
          }]
        }
      ],
      "hasNext": false,
      "nextToken": ""
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
