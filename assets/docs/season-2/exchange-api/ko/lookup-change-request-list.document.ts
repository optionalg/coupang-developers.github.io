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
  apiMigrationInfo: {
    previousVersions: [
      {
        apiName: `교환요청 목록 조회`,
        path: `/v2/providers/wing_api/apis/internal-api/v1/exchange/inquiries`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      },
    ],
    nextVersions: [
      {
        apiName: `교환요청 목록 조회`,
        path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/exchangeRequests`,
        _description: ``,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ]
  },
  apiInfo: {
    state: `draft`,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: `2017-02-16`, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Lovis`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `GET`,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/exchangeRequests`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/exchangeRequests`,
    _description: `교환 요청 상태를 조회한다.<br/>고객님이 반송 절차를 시작한 후에 이 API를 통해 리스트 형태로 교환 요청을 확인 할 수 있습니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `vendor Id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false,
      }
    ],
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
          _description: `교환 ID`,
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
          _description: `주문 배송 상태 라벨`,
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
          _description: `교환 상태 라벨`,
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
          _description: `접수 경로 라벨`,
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
          _description: `귀책 (배송비 부담 주체) 라벨`,
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
          _description: `최초 등록자 타입 라벨`,
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
          _description: `수정자`,
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
          _description: `수정자 라벨`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `modifiedAt`,
          type: `String`,
          _description: `수정 일시`,
          _relation: ``,
          _referenceInfo: `Timestamp`,
          _warning: ``,
          children: false,
        },
        {
          name: `exchangeItemDtoV1s`,
          type: `Array`,
          _description: `교환 항목 목록`,
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
          _description: `교환 주소`,
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
    endpoint:`https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00012697/exchangeRequests?createdAtFrom=2017-03-30T00:02:00&createdAtTo=2017-03-30T00:02:30`,
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
            "exchangeId": 100349846,
            "orderId": 19000005513991,
            "vendorId": "A00012697",
            "orderDeliveryStatusCode": "FINAL_DELIVERY",
            "exchangeStatus": "SUCCESS",
            "referType": "CS_CENTER",
            "faultType": "VENDOR",
            "exchangeAmount": 0,
            "reason": null,
            "cancelReason": null,
            "createdByType": "COUNSELOR",
            "createdAt": "2017-03-30T00:19:24",
            "modifiedByType": "TRACKING",
            "modifiedAt": "2017-03-30T00:19:24",
            "exchangeItemDtoV1s": [
              {
                "exchangeItemId": 785607,
                "orderItemId": 3031118693,
                "orderItemUnitPrice": 8150,
                "orderItemName": null,
                "orderPackageId": null,
                "orderPackageName": null,
                "targetItemId": 3031118693,
                "targetItemUnitPrice": 8150,
                "targetItemName": "핑크퐁 인기율동동요, 스마트스터디",
                "targetPackageId": -1,
                "targetPackageName": "",
                "quantity": 1,
                "orderItemDeliveryComplete": null,
                "orderItemReturnComplete": null,
                "targetItemDeliveryComplete": null,
                "createdAt": "2017-03-30T00:19:24",
                "modifiedAt": "2017-04-04T03:09:47",
                "originalShipmentBoxId": 371479903
              }
            ],
            "exchangeAddressDtoV1": {
              "exchangeAddressId": 773037,
              "returnCustomerName": "박희선",
              "returnAddressZipCode": "46754",
              "returnAddress": "부산광역시 강서구 녹산산업중로 285(송정동)",
              "returnAddressDetail": "주식회사생 - 평일 회수/배송 요청",
              "returnPhone": null,
              "returnMobile": "010-7557-6628",
              "returnMemo": null,
              "deliveryCustomerName": "박희선",
              "deliveryAddressZipCode": "46754",
              "deliveryAddress": "부산광역시 강서구 녹산산업중로 285(송정동)",
              "deliveryAddressDetail": "주식회사생 -평일 회수/배송 요청",
              "deliveryPhone": null,
              "deliveryMobile": "010-****-****",
              "deliveryMemo": null,
              "createdAt": "2017-03-30T00:19:24",
              "modifiedAt": "2017-03-30T00:19:24",
              "exchangeId": 100349846
            },
            "deliveryInvoiceGroupDtos": [
              {
                "shipmentBoxId": 372545359,
                "boxPrice": 0,
                "orderId": 19000005513991,
                "orderType": "NORMAL",
                "customerType": "regular",
                "bundleType": null,
                "extraMessage": null,
                "shippingDeliveryType": null,
                "deliveryInvoiceDtos": [
                  {
                    "invoiceNumber": "339243610644",
                    "estimatedDeliveryDate": "2017-03-30T15:00:00",
                    "deliveredDate": "2017-03-31T06:03:05",
                    "statusModifiedAt": "2017-03-31T06:03:05",
                    "invoiceNumberUploadDate": "2017-04-04T00:44:07",
                    "statusCode": "FINAL_DELIVERY",
                    "deliverCode": "CJGLS",
                    "isMainShipmentInvoice": false,
                    "parcelType": null,
                    "invoiceVendorItemDtos": [
                      {
                        "vendorItemId": 3031118693,
                        "quantity": 1,
                        "promiseDeliveryDate": "2017-01-04T14:59:59",
                        "hasAdditionalItem": false,
                        "estimatedShippingDate": "2017-04-03T14:59:59"
                      }
                    ]
                  }
                ]
              }
            ],
            "deliveryStatus": "CompleteDelivery",
            "collectStatus": "CompleteCollect",
            "collectCompleteDate": "2017-03-31T13:10:09",
            "collectInformationsDto": {
              "returnType": "EXCHANGE_RETURN",
              "expectedReturnDate": "2017-04-04T00:19:24",
              "returndeliveryItemDtos": [
                {
                  "vendorItemId": 3031118693,
                  "statusCode": "RETURN_SEND_READY",
                  "returnCount": null,
                  "releaseStatus": "RELEASED",
                  "paymentReturnDeliveryMapId": 22782725,
                  "paymentItemId": 1,
                  "modifiedBy": "yum0118@",
                  "moodifiedAt": "2017-03-30T00:19:24",
                  "createdBy": "yum0118@",
                  "createdAt": "2017-03-30T00:19:24",
                  "count": 1,
                  "confirmType": null,
                  "collectStatus": "RETURN"
                }
              ],
              "returndeliveryDestinationDto": {
                "vendorZipCode": "108-46",
                "vendorPhone": "031-944-4774",
                "vendorName": "예스이십사주식회사",
                "vendorMobile": "031-944-4774",
                "vendorAddressDetail": "-",
                "vendorAddress": "경기도 파주시 탄현면 금승리 583-5 YES24.com",
                "safetyNumberStatus": "DISABLE",
                "safetyNumberId": 123730827,
                "safetyNumber": "05025771526",
                "returnDeliveryId": null,
                "returnCenterCode": "1000243825",
                "receiptId": null,
                "orderedByMobile": null,
                "orderId": 19000005513991,
                "message": null,
                "customerZipCode": "467-54",
                "customerPhone": "010-7557-6628",
                "customerName": "박희선",
                "customerMobile": "010-7557-6628",
                "customerAddressDetail": "주식회사생 - 평일 회수/배송 요청",
                "customerAddress": "부산광역시 강서구 녹산산업중로 285(송정동)"
              }
            },
            "modifiedByTypeLabel": "COUNSELOR",
            "deliveryInvoiceModifiable": false,
            "successable": false,
            "orderDeliveryStatusLabel": "FINAL_DELIVERY",
            "exchangeStatusLabel": "SUCCESS",
            "referTypeLabel": "CS_CENTER",
            "faultTypeLabel": "VENDOR",
            "createdByTypeLabel": "COUNSELOR",
            "rejectable": false
          }
        ],
        "nextToken": ""
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  },
}
