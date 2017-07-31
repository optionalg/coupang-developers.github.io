export const lookupChangeRequestListDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `exchange-api`,   // input category ex) exchange-service-api
    id: `lookup-change-request-list`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_change_request_list`,
    name: `교환요청 목록 조회`,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: ``, // draft, candidate, release
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: `교환 목록 조회`,
      anchorId: ``,
    },

  },

  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-16`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Lovis`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/wing_api/apis/internal-api/v1/exchange/inquiries`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v1/exchange/inquiries`,
    _description: `교환 요청 상태를 조회한다.<br/>고객님이 반송 절차를 시작한 후에 이 API를 통해 리스트 형태로 교환 요청을 확인 할 수 있습니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: false,
    queryStringParameters: [
      {
        name: `createdAtFrom`,
        require: true,
        _description: `검색 시작일 (yyyy-MM-ddTHH: mm: ss)`,
        _relation: ``,
        _referenceInfo: `e.g. 2016-03-15T13:00:00`,
        _warning: ``,
        children: false,
      },
      {
        name: `createdAtTo`,
        require: true,
        _description: `검색 종료일 (yyyy-MM-ddTHH: mm: ss)`,
        _relation: ``,
        _referenceInfo: `e.g.2016-03-16T13:00:00`,
        _warning: ``,
        children: false,
      },
      {
        name: `status`,
        require: false,
        _description: `교환진행상태,구체적인 교환 상태를 선택하지 않을시 모든 상태로 리턴됨.`,
        _relation: ``,
        _referenceInfo: `
        <table class="table">
            <tr>
                 <td>RECEIPT</td>
             </tr>
             <tr>
                <td>PROGRESS</td>
             </tr>
             <tr>
                <td>SUCCESS</td>
            </tr>
            <tr>
                <td>REJECT</td>
            </tr>
            <tr>
                <td>CANCEL</td>
            </tr>
         </table>
        `,
        _warning: ``,
        children: false,
      },
      {
        name: `orderId`,
        require: false,
        _description: `주문번호`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false,
      },
      {
        name: `nextToken`,
        require: false,
        _description: `다음 페이지 조회를 위한 token값`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false,
      },
      {
        name: `maxPerPage`,
        require: false,
        _description: `최대 조회 요청 값`,
        _relation: ``,
        _referenceInfo: `default 10`,
        _warning: ``,
        children: false,
      }
    ],
    bodyParameters: false
  },
  errorSpec:false,
  responseSpec: [
    // type : Number, String, Boolean, Object, Array,
    // these type is Standard for All language. have to follow
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
      _description: `결과`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `exchangeId`,
          type: `Number`,
          _description: `교환 아이디`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
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
          name: `vendorId`,
          type: `String`,
          _description: `벤더 아이디`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `orderDeliveryStatusCode`,
          type: `String`,
          _description: `주문 배송 상태`,
          _relation: ``,
          _referenceInfo: `
            <table>
                <tr>
                     <td>ACCEPT</td>
                 </tr>
                 <tr>
                    <td>INSTRUCT</td>
                 </tr>
                 <tr>
                    <td>DEPARTURE</td>
                </tr>
                <tr>
                    <td>DELIVERING</td>
                </tr>
                <tr>
                    <td>FINAL_DELIVERY</td>
                </tr>
                <tr>
                    <td>NONE_TRACKING</td>
                </tr>
             </table>
        `,
          _warning: ``,
          children: false,
        },
        {
          name: `orderDeliveryStatusLabel`,
          type: `String`,
          _description: `Order delivery status label`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `exchangeStatus`,
          type: `String`,
          _description: `교환 상태`,
          _relation: ``,
          _referenceInfo: `
            <table>
                <tr>
                     <td>RECEIPT</td>
                 </tr>
                 <tr>
                    <td>PROGRESS</td>
                 </tr>
                 <tr>
                    <td>SUCCESS</td>
                </tr>
                <tr>
                    <td>REJECT</td>
                </tr>
                <tr>
                    <td>CANCEL</td>
                </tr>
             </table>
        `,
          _warning: ``,
          children: false,
        },
        {
          name: `exchangeStatusLabel`,
          type: `String`,
          _description: `Exchange status label`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `referType`,
          type: `String`,
          _description: `접수경로`,
          _relation: ``,
          _referenceInfo: `
            <table>
                <tr>
                     <td>VENDOR</td>
                 </tr>
                 <tr>
                    <td>CS_CENTER</td>
                 </tr>
                 <tr>
                    <td>WEB_PC</td>
                </tr>
                <tr>
                    <td>WEB_MOBILE</td>
                </tr>
             </table>
        `,
          _warning: ``,
          children: false,
        },
        {
          name: `referTypeLabel`,
          type: `String`,
          _description: `Refer type label`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `faultType`,
          type: `String`,
          _description: `귀책`,
          _relation: ``,
          _referenceInfo: `
                <table>
                    <tr>
                         <td>COUPANG</td>
                     </tr>
                     <tr>
                        <td>VENDOR</td>
                     </tr>
                     <tr>
                        <td>CUSTOMER</td>
                    </tr>
                    <tr>
                        <td>WMS</td>
                    </tr>
                    <tr>
                        <td>GENERAL</td>
                    </tr>
                 </table>
        `,
          _warning: ``,
          children: false,
        },
        {
          name: `faultTypeLabel`,
          type: `String`,
          _description: `Fault type label`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `exchangeAmount`,
          type: `String`,
          _description: `교환배송비`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `reason`,
          type: `String`,
          _description: `교환접수사유`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `cancelReason`,
          type: `String`,
          _description: `교환철회사유`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `createdByType`,
          type: `String`,
          _description: `최초 등록자 타입`,
          _relation: ``,
          _referenceInfo: `
                <table>
                    <tr>
                         <td>CUSTOMER</td>
                     </tr>
                     <tr>
                        <td>COUNSELOR</td>
                     </tr>
                     <tr>
                        <td>COUPANG</td>
                    </tr>
                    <tr>
                        <td>VENDOR</td>
                    </tr>
                    <tr>
                        <td>ETC</td>
                    </tr>
                 </table>
        `,
          _warning: ``,
          children: false,
        },
        {
          name: `createdByTypeLabel`,
          type: `String`,
          _description: `Created by type label`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `createdAt`,
          type: `String`,
          _description: `생성 날짜 시간`,
          _relation: ``,
          _referenceInfo: `Timestamp`,
          _warning: ``,
          children: false,
        },
        {
          name: `modifiedByType`,
          type: `String`,
          _description: `수정인 타이프`,
          _relation: ``,
          _referenceInfo: `
                <table>
                    <tr>
                         <td>CUSTOMER</td>
                     </tr>
                     <tr>
                        <td>COUNSELOR</td>
                     </tr>
                     <tr>
                        <td>COUPANG</td>
                    </tr>
                    <tr>
                        <td>VENDOR</td>
                    </tr>
                    <tr>
                        <td>ETC</td>
                    </tr>
                 </table>
        `,
          _warning: ``,
          children: false,
        },
        {
          name: `modifiedByTypeLabel`,
          type: `String`,
          _description: `Modify type label`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `modifiedAt`,
          type: `String`,
          _description: `수정 날짜 시간`,
          _relation: ``,
          _referenceInfo: `Timestamp`,
          _warning: ``,
          children: false,
        },
        {
          name: `exchangeItemDtoV1s`,
          type: `Array`,
          _description: `Exchange item informations`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `exchangeItemId`,
              type: `Number`,
              _description: `교환 상품 아이디`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `orderItemId`,
              type: `Number`,
              _description: `원주문 아이템 ID`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `orderItemUnitPrice`,
              type: `Number`,
              _description: `원주문 아이템 단가`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `orderItemName`,
              type: `String`,
              _description: `원주문 아이템 명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `orderPackageId`,
              type: `Number`,
              _description: `원주문 패키지 ID`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `orderPackageName`,
              type: `String`,
              _description: `원주문 패키지 명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `targetItemId`,
              type: `Number`,
              _description: `교환 아이템 ID`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `targetItemUnitPrice`,
              type: `Number`,
              _description: `교환 아이템 단가`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `targetItemName`,
              type: `String`,
              _description: `교환 아이템 명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `targetPackageId`,
              type: `Number`,
              _description: `교환 패키지 ID`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `targetPackageName`,
              type: `String`,
              _description: `교환 패키지 명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `quantity`,
              type: `Number`,
              _description: `교환수량`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `orderItemDeliveryComplete`,
              type: `Boolean`,
              _description: `True/False`,
              _relation: ``,
              _referenceInfo: `원주문 아이템 배송완료 여부`,
              _warning: ``,
              children: false,
            },
            {
              name: `orderItemReturnComplete`,
              type: `Boolean`,
              _description: `True/False`,
              _relation: ``,
              _referenceInfo: `원주문 아이템 배송완료 여부`,
              _warning: ``,
              children: false,
            },
            {
              name: `targetItemDeliveryComplete`,
              type: `Boolean`,
              _description: `True/False`,
              _relation: ``,
              _referenceInfo: `교환 아이템 배송완료 여부`,
              _warning: ``,
              children: false,
            },
            {
              name: `createdAt`,
              type: `String`,
              _description: `생성 날자 시간`,
              _relation: ``,
              _referenceInfo: `Timestamp`,
              _warning: ``,
              children: false,
            },
            {
              name: `modifiedAt`,
              type: `String`,
              _description: `수정 날자 시간`,
              _relation: ``,
              _referenceInfo: `Timestamp`,
              _warning: ``,
              children: false,
            }
          ],
        },
        {
          name: `exchangeAddressDtoV1`,
          type: `Object`,
          _description: `Exchange address informations`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `exchangeAddressId`,
              type: `Number`,
              _description: `교환 주소 아이디`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `returnCustomerName`,
              type: `String`,
              _description: `반품 신청인 이름`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `returnAddressZipCode`,
              type: `String`,
              _description: `반품지 우편번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `returnAddress`,
              type: `String`,
              _description: `반품 신청인 주소`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `returnAddressDetail`,
              type: `String`,
              _description: `상세한 반품주소`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `returnPhone`,
              type: `String`,
              _description: `반품 신청인 폰`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `returnMobile`,
              type: `String`,
              _description: `반품 신청인 모바일`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `returnMemo`,
              type: `String`,
              _description: `반품 메모`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `deliveryCustomerName`,
              type: `String`,
              _description: `수취인 이름`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `deliveryAddressZipCode`,
              type: `String`,
              _description: `우편번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `deliveryAddress`,
              type: `String`,
              _description: `수취인 주소`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `deliveryAddressDetail`,
              type: `String`,
              _description: `상세한 주소`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `deliveryPhone`,
              type: `String`,
              _description: `수취인 폰`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `deliveryMobile`,
              type: `String`,
              _description: `수취인 모바일`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `deliveryMemo`,
              type: `String`,
              _description: `배송 메모`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `createdAt`,
              type: `String`,
              _description: `생성 날자`,
              _relation: ``,
              _referenceInfo: `Timestamp`,
              _warning: ``,
              children: false,
            },
            {
              name: `modifiedAt`,
              type: `String`,
              _description: `수정 날자`,
              _relation: ``,
              _referenceInfo: `Timestamp`,
              _warning: ``,
              children: false,
            },
            {
              name: `exchangeId`,
              type: `Number`,
              _description: `교환 아이디`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            }
          ]
        },
        {
          name: `deliveryInvoiceGroupDtos`,
          type: `Array`,
          _description: `Delivery Invoice informations`,
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
            children: false,
          },
          {
            name: `boxPrice`,
            type: `Number`,
            _description: `Box price`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
          },
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
            name: `orderType`,
            type: `String`,
            _description: `주문 유형`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
          },
          {
            name: `customerType`,
            type: `String`,
            _description: `사용자 유형`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
          },
          {
            name: `bundleType`,
            type: `String`,
            _description: `배송 묶음 유형`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
          },
          {
            name: `extraMessage`,
            type: `String`,
            _description: `메모`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
          },
          {
            name: `shippingDeliveryType`,
            type: `String`,
            _description: `배송 타입`,
            _relation: ``,
            _referenceInfo: `<ul>
              <li>DELIVERY</li>
              <li>EXCHANGE_DELIVERY</li>
              <li>FORCED_DELIVERY</li>
            </ul>`,
            _warning: ``,
            children: false,
          },
          {
            name: `deliveryInvoiceDtos`,
            type: `Array`,
            _description: `Delivery Invoice informations`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: [
              {
                name: `invoiceNumber`,
                type: `String`,
                _description: `운송장 번호`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false,
              },
              {
                name: `estimatedDeliveryDate`,
                type: `String`,
                _description: `Estimated delivery date`,
                _relation: ``,
                _referenceInfo: `Timestamp`,
                _warning: ``,
                children: false,
              },
              {
                name: `deliveredDate`,
                type: `String`,
                _description: `배송일`,
                _relation: ``,
                _referenceInfo: `Timestamp`,
                _warning: ``,
                children: false,
              },
              {
                name: `statusModifiedAt`,
                type: `String`,
                _description: `상태 수정 일시`,
                _relation: ``,
                _referenceInfo: `Timestamp`,
                _warning: ``,
                children: false,
              },
              {
                name: `invoiceNumberUploadDate`,
                type: `String`,
                _description: `운송장 번호 업로드 일시`,
                _relation: ``,
                _referenceInfo: `Timestamp`,
                _warning: ``,
                children: false,
              },
              {
                name: `statusCode`,
                type: `String`,
                _description: `발주서상태`,
                _relation: ``,
                _referenceInfo: `<table>
                <tr>
                     <td>ACCEPT</td>
                 </tr>
                 <tr>
                    <td>INSTRUCT</td>
                 </tr>
                 <tr>
                    <td>DEPARTURE</td>
                </tr>
                <tr>
                    <td>DELIVERING</td>
                </tr>
                <tr>
                    <td>FINAL_DELIVERY</td>
                </tr>
                <tr>
                    <td>NONE_TRACKING</td>
                </tr>
             </table>`,
                _warning: ``,
                children: false,
              },
              {
                name: `deliverCode`,
                type: `String`,
                _description: `택배사 코드`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false,
              },
              {
                name: `isMainShipmentInvoice`,
                type: `Boolean`,
                _description: `Retail 분리배송 시 대표 송장 여부`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false,
              },
              {
                name: `parcelType`,
                type: `String`,
                _description: `Retail 배송 타입`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false,
              },
              {
                name: `invoiceVendorItemDtos`,
                type: `Array`,
                _description: `vendor item information`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: [
                  {
                    name: `vendorItemId`,
                    type: `Number`,
                    _description: `옵션아이디`,
                    _relation: ``,
                    _referenceInfo: ``,
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
                    name: `hasAdditionalItem`,
                    type: `Boolean`,
                    _description: `일부 여부`,
                    _relation: ``,
                    _referenceInfo: ``,
                    _warning: ``,
                    children: false,
                  },
                  {
                    name: `promiseDeliveryDate`,
                    type: `String`,
                    _description: `주문시점의 상품별 배송 예정일`,
                    _relation: ``,
                    _referenceInfo: `Timestamp`,
                    _warning: ``,
                    children: false,
                  },
                  {
                    name: `estimatedShippingDate`,
                    type: `String`,
                    _description: `주문시 출고예정일`,
                    _relation: ``,
                    _referenceInfo: `Timestamp`,
                    _warning: ``,
                    children: false,
                  },
                ],
              },
            ],
          }
        ]
      },
        {
          name: `deliveryInvoiceModifiable`,
              type: `Boolean`,
            _description: `True/False`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false,
        },
        {
          name: `successable`,
          type: `Boolean`,
          _description: `True/False`,
          _relation: ``,
          _referenceInfo: `교환 처리 가능여부`,
          _warning: ``,
          children: false,
        },
        {
          name: `rejectable`,
          type: `Boolean`,
          _description: `True/False`,
          _relation: ``,
          _referenceInfo: `교환 불가 처리 가능여부`,
          _warning: ``,
          children: false,
        }
      ]
    },
    {
      name: `nextToken`,
      type: `String`,
      _description: `다음 페이지 조회를 위한 token값`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    }
  ],
  sample: {
    endpoint:`https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v1/exchange/inquiries?createdAtFrom=2016-09-01T00:00:00&createdAtTo=2016-09-08T00:00:00`,
    code: [
      {
        language: `http`,
        codeblock: {
        }
      }
    ],
    response: {
        "code": "200",
        "message": "OK",
        "data": [
            {
                "exchangeId": 100000184,
                "orderId": 4000000000198,
                "vendorId": "A00010028",
                "orderDeliveryStatusCode": "INSTRUCT",
                "exchangeStatus": "CANCEL",
                "referType": "CS_CENTER",
                "faultType": "COUPANG",
                "exchangeAmount": 0,
                "reason": null,
                "cancelReason": null,
                "createdByType": "COUNSELOR",
                "createdAt": 1473049045000,
                "modifiedByType": "COUNSELOR",
                "modifiedAt": 1473049045000,
                "exchangeItemDtoV1s": [
                    {
                        "exchangeItemId": 1109,
                        "orderItemId": 3000000018,
                        "orderItemUnitPrice": 9900,
                        "orderItemName": null,
                        "orderPackageId": null,
                        "orderPackageName": null,
                        "targetItemId": 3000000018,
                        "targetItemUnitPrice": 9900,
                        "targetItemName": "컵케익 초코",
                        "targetPackageId": -1,
                        "targetPackageName": "",
                        "quantity": 1,
                        "orderItemDeliveryComplete": null,
                        "orderItemReturnComplete": null,
                        "targetItemDeliveryComplete": null,
                        "createdAt": 1473049045000,
                        "modifiedAt": 1473049045000
                    }
                ],
                "exchangeAddressDtoV1": {
                    "exchangeAddressId": 1066,
                    "returnCustomerName": "신대욱",
                    "returnAddressZipCode": "06168",
                    "returnAddress": "서울특별시 강남구 테헤란로 501",
                    "returnAddressDetail": "경암빌딩 18층",
                    "returnPhone": null,
                    "returnMobile": "010-8801-4063",
                    "returnMemo": null,
                    "deliveryCustomerName": "신대욱",
                    "deliveryAddressZipCode": "06168",
                    "deliveryAddress": "서울특별시 강남구 테헤란로 501",
                    "deliveryAddressDetail": "경암빌딩 18층",
                    "deliveryPhone": null,
                    "deliveryMobile": "010-****-****",
                    "deliveryMemo": null,
                    "createdAt": 1473049045000,
                    "modifiedAt": 1473049045000,
                    "exchangeId": 100000184
                },
                "deliveryInvoiceGroupDtos": [
                    {
                        "shipmentBoxId": 197278440,
                        "boxPrice": 0,
                        "orderId": 4000000000198,
                        "orderType": "NORMAL",
                        "customerType": "regular",
                        "bundleType": "DEAL",
                        "extraMessage": null,
                        "shippingDeliveryType": null,
                        "deliveryInvoiceDtos": [
                            {
                                "invoiceNumber": null,
                                "estimatedDeliveryDate": null,
                                "deliveredDate": null,
                                "statusModifiedAt": 1473049046000,
                                "invoiceNumberUploadDate": null,
                                "statusCode": "ACCEPT",
                                "deliverCode": "NONE",
                                "isMainShipmentInvoice": true,
                                "parcelType": null,
                                "invoiceVendorItemDtos": [
                                    {
                                        "vendorItemId": 3000000018,
                                        "quantity": 1,
                                        "hasAdditionalItem": false,
                                        "promiseDeliveryDate": null,
                                        "estimatedShippingDate": null
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "orderDeliveryStatusLabel": "상품준비중",
                "exchangeStatusLabel": "철회",
                "referTypeLabel": "CS센터",
                "faultTypeLabel": "Coupang 과실",
                "createdByTypeLabel": "CS상담사",
                "rejectable": false,
                "modifiedByTypeLabel": "CS상담사",
                "deliveryInvoiceModifiable": false,
                "successable": false
            }
        ],
        "nextToken": "1"
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
