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
                <th>Parameter Name</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>RECEIPT</td>
                <td>접수</td>
             </tr>
             <tr>
                <td>PROGRESS</td>
                <td>진행</td>
             </tr>
             <tr>
                <td>SUCCESS</td>
                <td>완료</td>
            </tr>
            <tr>
                <td>REJECT</td>
                <td>불가</td>
            </tr>
            <tr>
                <td>CANCEL</td>
                <td>철회</td>
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
      children: false
    },
    {
      name: `message`,
      type: `String`,
      _description: `detail info`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false
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
          name: `vendorId`,
          type: `String`,
          _description: `벤더 아이디`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `orderDeliveryStatusCode`,
          type: `String`,
          _description: `주문 배송 상태`,
          _relation: ``,
          _referenceInfo: `
            <table class="table">
                <tr>
                    <th>Parameter Name</th>
                    <th>Status</th>
                </tr>
                <tr>
                     <td>ACCEPT</td>
                     <td>결재완료</td>
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
          name: `exchangeStatus`,
          type: `String`,
          _description: `교환 상태`,
          _relation: ``,
          _referenceInfo: `
            <table class="table">
                <tr>
                    <th>Parameter Name</th>
                    <th>Status</th>
                </tr>
                <tr>
                     <td>RECEIPT</td>
                     <td>접수</td>
                 </tr>
                 <tr>
                    <td>PROGRESS</td>
                    <td>진행</td>
                 </tr>
                 <tr>
                    <td>SUCCESS</td>
                    <td>완료</td>
                </tr>
                <tr>
                    <td>REJECT</td>
                    <td>불가</td>
                </tr>
                <tr>
                    <td>CANCEL</td>
                    <td>철회</td>
                </tr>
             </table>
        `,
          _warning: ``,
          children: false
        },
        {
          name: `referType`,
          type: `String`,
          _description: `접수경로`,
          _relation: ``,
          _referenceInfo: `
            <table class="table">
                <tr>
                    <th>Parameter Name</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>VENDOR</td>
                    <td>벤더</td>
                 </tr>
                 <tr>
                    <td>CS_CENTER</td>
                    <td>CS</td>
                 </tr>
                 <tr>
                    <td>WEB_PC</td>
                    <td>웹 PC</td>
                </tr>
                <tr>
                    <td>WEB_MOBILE</td>
                    <td>웹 모바일</td>
                </tr>
             </table>
        `,
          _warning: ``,
          children: false
        },
        {
          name: `faultType`,
          type: `String`,
          _description: `귀책`,
          _relation: ``,
          _referenceInfo: `
            <table class="table">
                    <tr>
                        <th>Parameter Name</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>COUPANG</td>
                        <td>쿠팡과실</td>
                     </tr>
                     <tr>
                        <td>VENDOR</td>
                        <td>업체과실</td>
                     </tr>
                     <tr>
                        <td>CUSTOMER</td>
                        <td>고객과실</td>
                    </tr>
                    <tr>
                        <td>WMS</td>
                        <td>물류과실</td>
                    </tr>
                    <tr>
                        <td>GENERAL</td>
                        <td>일반</td>
                    </tr>
                 </table>
        `,
          _warning: ``,
          children: false
        },
        {
          name: `exchangeAmount`,
          type: `String`,
          _description: `교환배송비`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `reason`,
          type: `String`,
          _description: `교환접수사유`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `cancelReason`,
          type: `String`,
          _description: `교환철회사유`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `createdByType`,
          type: `String`,
          _description: `최초 등록자 유형`,
          _relation: ``,
          _referenceInfo: `
            <table class="table">
                    <tr>
                        <th>Parameter Name</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>CUSTOMER</td>
                        <td>고객</td>
                     </tr>
                     <tr>
                        <td>COUNSELOR</td>
                        <td>상담사</td>
                     </tr>
                     <tr>
                        <td>COUPANG</td>
                        <td>내부직원</td>
                    </tr>
                    <tr>
                        <td>VENDOR</td>
                        <td>업체</td>
                    </tr>
                    <tr>
                        <td>ETC</td>
                        <td>기타</td>
                    </tr>
                 </table>
        `,
          _warning: ``,
          children: false
        },
        {
          name: `createdAt`,
          type: `String`,
          _description: `등록일시`,
          _relation: ``,
          _referenceInfo: `(yyyy-MM-ddTHH: mm: ss)`,
          _warning: ``,
          children: false
        },
        {
          name: `modifiedByType`,
          type: `String`,
          _description: `수정자`,
          _relation: ``,
          _referenceInfo: `
            <table class="table">
                    <tr>
                        <th>Parameter Name</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>CUSTOMER</td>
                        <td>고객</td>
                     </tr>
                     <tr>
                        <td>COUNSELOR</td>
                        <td>상담사</td>
                     </tr>
                     <tr>
                        <td>COUPANG</td>
                        <td>내부직원</td>
                    </tr>
                    <tr>
                        <td>VENDOR</td>
                        <td>업체</td>
                    </tr>
                    <tr>
                        <td>ETC</td>
                        <td>기타</td>
                    </tr>
                    <tr>
                       <td>TRACKING</td>
                       <td>배송추적</td>
                    </tr>
                 </table>`,
          _warning: ``,
          children: false
        },
        {
          name: `modifiedAt`,
          type: `String`,
          _description: `수정 일시`,
          _relation: ``,
          _referenceInfo: `(yyyy-MM-ddTHH: mm: ss)`,
          _warning: ``,
          children: false
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
              _referenceInfo: `교환 데이터 저장 시 사용하는 내부ID`,
              _warning: ``,
              children: false
            },
            {
              name: `orderItemId`,
              type: `Number`,
              _description: `원주문 아이템 ID`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `orderItemUnitPrice`,
              type: `Number`,
              _description: `원주문 아이템 단가`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `orderItemName`,
              type: `String`,
              _description: `원주문 아이템 명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `orderPackageId`,
              type: `Number`,
              _description: `원주문 패키지 ID`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `orderPackageName`,
              type: `String`,
              _description: `원주문 패키지 명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `targetItemId`,
              type: `Number`,
              _description: `교환 아이템 ID`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `targetItemUnitPrice`,
              type: `Number`,
              _description: `교환 아이템 단가`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `targetItemName`,
              type: `String`,
              _description: `교환 아이템 명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `targetPackageId`,
              type: `Number`,
              _description: `교환 패키지 ID`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `targetPackageName`,
              type: `String`,
              _description: `교환 패키지 명`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `quantity`,
              type: `Number`,
              _description: `교환수량`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `orderItemDeliveryComplete`,
              type: `Boolean`,
              _description: `True/False`,
              _relation: ``,
              _referenceInfo: `원주문 아이템 배송완료 여부`,
              _warning: ``,
              children: false
            },
            {
              name: `orderItemReturnComplete`,
              type: `Boolean`,
              _description: `True/False`,
              _relation: ``,
              _referenceInfo: `원주문 아이템 반품완료 여부`,
              _warning: ``,
              children: false
            },
            {
              name: `targetItemDeliveryComplete`,
              type: `Boolean`,
              _description: `True/False`,
              _relation: ``,
              _referenceInfo: `교환 아이템 배송완료 여부`,
              _warning: ``,
              children: false
            },
            {
              name: `createdAt`,
              type: `String`,
              _description: `생성 일시`,
              _relation: ``,
              _referenceInfo: `(yyyy-MM-ddTHH: mm: ss)`,
              _warning: ``,
              children: false
            },
            {
              name: `modifiedAt`,
              type: `String`,
              _description: `수정 일시`,
              _relation: ``,
              _referenceInfo: `(yyyy-MM-ddTHH: mm: ss)`,
              _warning: ``,
              children: false
            },
            {
              name: `originalShipmentBoxId`,
              type: `Number`,
              _description: `원배송번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }           
          ]
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
              children: false
            },
            {
              name: `returnCustomerName`,
              type: `String`,
              _description: `반품 신청인 이름`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `returnAddressZipCode`,
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
              _description: `반품 신청인 주소`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `returnAddressDetail`,
              type: `String`,
              _description: `상세한 반품주소`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `returnPhone`,
              type: `String`,
              _description: `반품 신청인 폰`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `returnMobile`,
              type: `String`,
              _description: `반품 신청인 모바일`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `returnMemo`,
              type: `String`,
              _description: `반품 메모`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `deliveryCustomerName`,
              type: `String`,
              _description: `수취인 이름`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `deliveryAddressZipCode`,
              type: `String`,
              _description: `우편번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `deliveryAddress`,
              type: `String`,
              _description: `수취인 주소`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `deliveryAddressDetail`,
              type: `String`,
              _description: `상세한 주소`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `deliveryPhone`,
              type: `String`,
              _description: `수취인 폰`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `deliveryMobile`,
              type: `String`,
              _description: `수취인 모바일`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `deliveryMemo`,
              type: `String`,
              _description: `배송 메모`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `createdAt`,
              type: `String`,
              _description: `생성 일시`,
              _relation: ``,
              _referenceInfo: `(yyyy-MM-ddTHH: mm: ss)`,
              _warning: ``,
              children: false
            },
            {
              name: `modifiedAt`,
              type: `String`,
              _description: `수정 일시`,
              _relation: ``,
              _referenceInfo: `(yyyy-MM-ddTHH: mm: ss)`,
              _warning: ``,
              children: false
            },
            {
              name: `exchangeId`,
              type: `Number`,
              _description: `교환 아이디`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
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
            children: false
          },
          {
            name: `boxPrice`,
            type: `Number`,
            _description: `Box price`,
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
            name: `orderType`,
            type: `String`,
            _description: `주문 유형`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `customerType`,
            type: `String`,
            _description: `사용자 유형`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `bundleType`,
            type: `String`,
            _description: `배송 묶음 유형`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `extraMessage`,
            type: `String`,
            _description: `메모`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },
          {
            name: `shippingDeliveryType`,
            type: `String`,
            _description: `배송 타입`,
            _relation: ``,
            _referenceInfo: `
                <table class="table">
                    <tr>
                        <th>Parameter Name</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>DELIVERY</td>
                        <td>일반배송</td>
                     </tr>
                     <tr>
                        <td>EXCHANGE_DELIVERY</td>
                        <td>교환배송</td>
                     </tr>
                     <tr>
                        <td>FORCED_DELIVERY</td>
                        <td>추가출고배송</td>
                    </tr>
                 </table>`,
            _warning: ``,
            children: false
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
                children: false
              },
              {
                name: `estimatedDeliveryDate`,
                type: `String`,
                _description: `주문에서 실제 출고까지 리드타임`,
                _relation: ``,
                _referenceInfo: `(yyyy-MM-ddTHH: mm: ss)`,
                _warning: ``,
                children: false
              },
              {
                name: `deliveredDate`,
                type: `String`,
                _description: `배송일`,
                _relation: ``,
                _referenceInfo: `(yyyy-MM-ddTHH: mm: ss)`,
                _warning: ``,
                children: false
              },
              {
                name: `statusModifiedAt`,
                type: `String`,
                _description: `상태 수정 일시`,
                _relation: ``,
                _referenceInfo: `(yyyy-MM-ddTHH: mm: ss)`,
                _warning: ``,
                children: false
              },
              {
                name: `invoiceNumberUploadDate`,
                type: `String`,
                _description: `운송장 번호 업로드 일시`,
                _relation: ``,
                _referenceInfo: `(yyyy-MM-ddTHH: mm: ss)`,
                _warning: ``,
                children: false
              },
              {
                name: `statusCode`,
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
                         <td>결재완료</td>
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
                name: `deliverCode`,
                type: `String`,
                _description: `택배사 코드`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
              },
              {
                name: `isMainShipmentInvoice`,
                type: `Boolean`,
                _description: `Retail 분리배송 시 대표 송장 여부`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
              },
              {
                name: `parcelType`,
                type: `String`,
                _description: `Retail 배송 타입`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
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
                    children: false
                  },
                  {
                    name: `quantity`,
                    type: `Number`,
                    _description: `수량`,
                    _relation: ``,
                    _referenceInfo: ``,
                    _warning: ``,
                    children: false
                  },
                  {
                    name: `hasAdditionalItem`,
                    type: `Boolean`,
                    _description: `일부 여부`,
                    _relation: ``,
                    _referenceInfo: ``,
                    _warning: ``,
                    children: false
                  },
                  {
                    name: `promiseDeliveryDate`,
                    type: `String`,
                    _description: `주문시점의 상품별 배송 예정일`,
                    _relation: ``,
                    _referenceInfo: `(yyyy-MM-ddTHH: mm: ss)`,
                    _warning: ``,
                    children: false
                  },
                  {
                    name: `estimatedShippingDate`,
                    type: `String`,
                    _description: `주문시 출고예정일`,
                    _relation: ``,
                    _referenceInfo: `(yyyy-MM-ddTHH: mm: ss)`,
                    _warning: ``,
                    children: false
                  },
                ]
              },
            ]
          },
        ]
      },
    {
        name: `deliveryStatus`,
            type: `String`,
          _description: `재배송상태`,
          _relation: ``,
          _referenceInfo: `
                <table class="table">
                    <tr>
                        <th>Parameter Name</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>BeforeDirection</td>
                        <td>배송연동 전</td>
                    </tr>
                    <tr>
                        <td>CompleteDirection</td>
                        <td>배송연동</td>
                     </tr>
                     <tr>
                        <td>Delivering</td>
                        <td>배송중</td>
                     </tr>
                     <tr>
                        <td>CompleteDelivery</td>
                        <td>배송완료</td>
                    </tr>
                     <tr>
                        <td>DirectionFail</td>
                        <td>배송연동실패</td>
                    </tr>
                     <tr>
                        <td>VendorDirect</td>
                        <td>업체직송</td>
                    </tr>
                     <tr>
                        <td>Fail</td>
                        <td>배송실패</td>
                    </tr>
                     <tr>
                        <td>Withdraw</td>
                        <td>교환배송철회</td>
                    </tr>
                     <tr>
                        <td>NoneData</td>
                        <td>정보없음</td>
                    </tr>
                 </table>`,
          _warning: ``,
          children: false
      },
      {
        name: `collectStatus`,
            type: `String`,
          _description: `회수상태`,
          _relation: ``,
          _referenceInfo: `
                <table class="table">
                    <tr>
                        <th>Parameter Name</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>BeforeDirection</td>
                        <td>회수연동 전</td>
                    </tr>
                    <tr>
                        <td>CompleteDirection</td>
                        <td>회수연동</td>
                     </tr>
                     <tr>
                        <td>Delivering</td>
                        <td>회수중</td>
                     </tr>
                     <tr>
                        <td>CompleteCollect</td>
                        <td>업체전달완료</td>
                    </tr>
                     <tr>
                        <td>DirectionFail</td>
                        <td>회수연동실패</td>
                    </tr>
                     <tr>
                        <td>Fail</td>
                        <td>회수실패</td>
                    </tr>
                     <tr>
                        <td>Withdraw</td>
                        <td>교환회수철회</td>
                    </tr>
                     <tr>
                        <td>NoCollect</td>
                        <td>회수 불필요</td>
                    </tr>
                     <tr>
                        <td>NoneData</td>
                        <td>정보없음</td>
                    </tr>
                 </table>`,
          _warning: ``,
          children: false
      },        
      {
            name: `collectCompleteDate`,
            type: `String`,
            _description: `입고완료일시`,
            _relation: ``,
             _referenceInfo: `(yyyy-MM-ddTHH: mm: ss)`,
             _warning: ``,
            children: false
      },
      {
          name: `collectInformationsDto`,
          type: `Object`,
          _description: `회수정보`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
          {
            name: `returnType`,
            type: `String`,
            _description: `반품유형: 반품 혹은 교환(RETURN or EXCHANGE_RETURN)`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
           },
          {
            name: `expectedReturnDate`,
            type: `String`,
            _description: `반품예정일시`,
            _relation: ``,
            _referenceInfo: `(yyyy-MM-ddTHH: mm: ss)`,
            _warning: ``,
            children: false
           },
             {
                  name: `returndeliveryItemDtos`,
                  type: `Array`,
                  _description: `returndeliveryItemDtos`,
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
                    children: false
                   },
                   {
                    name: `statusCode`,
                    type: `String`,
                    _description: `상태코드`,
                    _relation: ``,
                    _referenceInfo: `
                    <table class="table">
                        <tr>
                            <th>Parameter Name</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>RETURN_SEND_READY</td>
                            <td>접수</td>
                        </tr>
                        <tr>
                            <td>RETURN_SEND_COMPLETE</td>
                            <td>전송완료</td>
                         </tr>
                         <tr>
                            <td>RETURN_COLLECT_OK</td>
                            <td>정상반품완료</td>
                         </tr>
                         <tr>
                            <td>RETURN_COLLECT_NOT_OK</td>
                            <td>비정상반품완료(수량불일치 등)</td>
                        </tr>
                         <tr>
                            <td>CHANGE_SEND_READY</td>
                            <td>교환확정</td>
                        </tr>
                         <tr>
                            <td>CHANGE_SEND_HOLD</td>
                            <td>교환확정홀드(교환확정에서 철회될 경우 변경되는 코드)</td>
                        </tr>
                         <tr>
                            <td>CHANGE_SEND_COMPLETE</td>
                            <td>교환정보 전송완료</td>
                        </tr>
                         <tr>
                            <td>CHANGE_SEND_FAIL</td>
                            <td>교환재고없음(미발송)</td>
                        </tr>
                         <tr>
                            <td>COLLECT_FAIL</td>
                            <td>회수실패</td>
                        </tr>
                     </table>`,
                    _warning: ``,
                    children: false
                   },
                  {
                    name: `returnCount`,
                    type: `Number`,
                    _description: `반품수량`,
                    _relation: ``,
                    _referenceInfo: ``,
                    _warning: ``,
                    children: false
                   },
                   {
                    name: `releaseStatus`,
                    type: `String`,
                    _description: `출고상태`,
                    _relation: ``,
                    _referenceInfo: `
                   <table class="table">
                        <tr>
                            <th>Parameter Name</th>
                            <th>Status</th>
                        </tr>
                         <tr>
                            <td>RELEASED</td>
                            <td>이미출고</td>
                        </tr>
                         <tr>
                            <td>NOT_RELEASED</td>
                            <td>미출고</td>
                        </tr>
                         </tr>
                     </table>`,
                    _warning: ``,
                    children: false
                   },
                   {
                    name: `paymentReturnDeliveryMapId`,
                    type: `Number`,
                    _description: `paymentReturnDeliveryMapId`,
                    _relation: ``,
                    _referenceInfo: ``,
                    _warning: ``,
                    children: false
                   },
                   {
                    name: `paymentItemId`,
                    type: `Number`,
                    _description: `paymentItemId`,
                    _relation: ``,
                    _referenceInfo: ``,
                    _warning: ``,
                    children: false
                   },
                   {
                    name: `modifiedBy`,
                    type: `String`,
                    _description: `변경자`,
                    _relation: ``,
                    _referenceInfo: ``,
                    _warning: ``,
                    children: false
                   },
                   {
                    name: `modifiedAt`,
                    type: `String`,
                    _description: `최종상태 변경일시`,
                    _relation: ``,
                    _referenceInfo: `(yyyy-MM-ddTHH: mm: ss)`,
                    _warning: ``,
                    children: false
                   },                   
                   {
                    name: `createdBy`,
                    type: `String`,
                    _description: `접수자`,
                    _relation: ``,
                    _referenceInfo: ``,
                    _warning: ``,
                    children: false
                   },
                   {
                    name: `createdAt`,
                    type: `String`,
                    _description: `접수일시`,
                    _relation: ``,
                    _referenceInfo: `(yyyy-MM-ddTHH: mm: ss)`,
                    _warning: ``,
                    children: false
                   }, 
                   {
                    name: `count`,
                    type: `Number`,
                    _description: `수량`,
                    _relation: ``,
                    _referenceInfo: ``,
                    _warning: ``,
                    children: false
                   }, 
                   {
                    name: `confirmType`,
                    type: `String`,
                    _description: `confirmType`,
                    _relation: ``,
                    _referenceInfo: `
                       <table class="table">
                            <tr>
                                <th>Parameter Name</th>
                                <th>Status</th>
                            </tr>
                             <tr>
                                <td>RELEASED</td>
                                <td>이미 출고</td>
                            </tr>
                             <tr>
                                <td>STOPPED</td>
                                <td>출고중지 완료</td>
                            </tr>
                             </tr>
                         </table>`,
                    _warning: ``,
                    children: false
                   },                   
                   {
                    name: `collectStatus`,
                    type: `String`,
                    _description: `회수상태`,
                    _relation: ``,
                    _referenceInfo: `
                       <table class="table">
                            <tr>
                                <th>Parameter Name</th>
                                <th>Status</th>
                            </tr>
                             <tr>
                                <td>NONE</td>
                                <td>값 없음</td>
                            </tr>
                             <tr>
                                <td>RETURN</td>
                                <td>회수진행</td>
                            </tr>
                             <tr>
                                <td>NO_RETURN</td>
                                <td>회수안함</td>
                            </tr>
                             <tr>
                                <td>ALREADY_RETURN</td>
                                <td>이미회수</td>
                             </tr>
                             <tr>
                                <td>CANCEL_REQUEST_WHEN_DEPARTURE</td>
                                <td>출고시 철회요청</td>
                            </tr>
                         </table>`,
                    _warning: ``,
                    children: false
                   },
                ]                    
             }, 
            {
              name: `returndeliveryDestinationDto`,
              type: `Object`,
              _description: `대표회수지 정보`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: [
              {
                name: `vendorZipCode`,
                type: `String`,
                _description: `판매자우편번호`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
               },
              {
                name: `vendorPhone`,
                type: `String`,
                _description: `판매자전화번호`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
               },  
              {
                name: `vendorName`,
                type: `String`,
                _description: `판매자 이름`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
               },
              {
                name: `vendorMobile`,
                type: `String`,
                _description: `판매자 휴대전화번호`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
               },       
               {
                name: `vendorAddressDetail`,
                type: `String`,
                _description: `상세한 판매자주소지`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
               },
              {
                name: `vendorAddress`,
                type: `String`,
                _description: `판매자주소`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
               },
               {
                name: `safetyNumberStatus`,
                type: `String`,
                _description: `안심번호 상태`,
                _relation: ``,
                _referenceInfo: `
                 <table class="table">
                      <tr>
                          <th>Parameter Name</th>
                          <th>Status</th>
                      </tr>
                       <tr>
                          <td>WAIT</td>
                          <td>대기</td>
                       </tr>
                       <tr>
                          <td>ENABLE</td>
                          <td>사용가능</td>
                       </tr>
                       <tr>
                          <td>DEPOSE</td>
                          <td>폐기</td>
                       </tr>
                       <tr>
                          <td>DISABLE</td>
                          <td>사용불가</td>
                       </tr>
                       <tr>
                          <td>ERROR</td>
                          <td>오류</td>
                       </tr>
                       <tr>
                          <td>RESERVE</td>
                          <td>보류</td>
                       </tr>
                   </table>`,
                _warning: ``,
                children: false
               },
              {
                name: `safetyNumberId`,
                type: `Number`,
                _description: `안심번호Id`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
               },
               {
                name: `safetyNumber`,
                type: `String`,
                _description: `안심번호`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
               },
              {
                name: `returnDeliveryId`,
                type: `Number`,
                _description: `회수송장번호`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
               },
               {
                name: `returnCenterCode`,
                type: `String`,
                _description: `반품지센터코드`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
               },
              {
                name: `receiptId`,
                type: `Number`,
                _description: `접수번호`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
               },
               {
                name: `orderedByMobile`,
                type: `String`,
                _description: `주문자 전화번호`,
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
                name: `message`,
                type: `String`,
                _description: `메세지`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
               },
              {
                name: `customerZipCode`,
                type: `String`,
                _description: `고객우편번호`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
               },
               {
                name: `customerPhone`,
                type: `String`,
                _description: `고객전화번호`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
               },
              {
                name: `customerName`,
                type: `String`,
                _description: `고객명`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
               },
               {
                name: `customerMobile`,
                type: `String`,
                _description: `고객핸드폰번호`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
               },
              {
                name: `customerAddressDetail`,
                type: `String`,
                _description: `상세한 고객주소지`,
                _relation: ``,
                _referenceInfo: ``,
                _warning: ``,
                children: false
               },
              {
                name: `customerAddress`,
                type: `String`,
                _description: `고객 주소`,
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
          name: `returnDeliveryDtos`,
          type: `Object`,
          _description: `회수정보`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [
            {
              name: `deliveryCompanyCode`,
              type: `String`,
              _description: `택배사 코드`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            },
            {
              name: `deliveryInvoiceNo`,
              type: `String`,
              _description: `회수 운송장 번호`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false
            }, 
           ]
         },
        {
          name: `successable`,
          type: `Boolean`,
          _description: `True/False`,
          _relation: ``,
          _referenceInfo: `교환 완료 처리 가능여부`,
          _warning: ``,
          children: false
        },
        {
          name: `orderDeliveryStatusLabel`,
          type: `String`,
          _description: `주문 배송 상태 라벨`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },        
        {
          name: `exchangeStatusLabel`,
          type: `String`,
          _description: `교환 상태 라벨`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },              
        {
          name: `referTypeLabel`,
          type: `String`,
          _description: ``,
          _relation: ``,
          _referenceInfo: `접수 경로 라벨`,
          _warning: ``,
          children: false
        },      
        {
          name: `faultTypeLabel`,
          type: `String`,
          _description: `귀책 (배송비 부담 주체) 라벨`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },
        {
          name: `createdByTypeLabel`,
          type: `String`,
          _description: `최초 등록자 타입 라벨`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },    
        {
          name: `rejectable`,
          type: `Boolean`,
          _description: `True/False`,
          _relation: ``,
          _referenceInfo: `교환 불가처리 가능여부`,
          _warning: ``,
          children: false
        },          
        {
          name: `modifiedByTypeLabel`,
          type: `String`,
          _description: `수정자 라벨`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        },    
        {
          name: `deliveryInvoiceModifiable`,
              type: `Boolean`,
            _description: `True/False`,
            _relation: ``,
            _referenceInfo: `송장번호입력 가능여부`,
            _warning: ``,
            children: false
        },
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
    endpoint:`https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00127960/exchangeRequests?createdAtFrom=2017-09-23T00:00:00&createdAtTo=2017-09-26T23:59:59&status=PROGRESS`,
    code: [
      {
        language: `http`,
        codeblock: {
        }
      }
    ],
    response: {
      "code": 200,
      "message": "OK",
      "data": [
        {
          "exchangeId": 100702179,
          "orderId": 6000009115059,
          "vendorId": "A00127960",
          "orderDeliveryStatusCode": "FINAL_DELIVERY",
          "exchangeStatus": "PROGRESS",
          "referType": "WEB_MOBILE",
          "faultType": "VENDOR",
          "exchangeAmount": 0,
          "reason": null,
          "cancelReason": null,
          "createdByType": "CUSTOMER",
          "createdAt": "2017-09-23T11:29:44",
          "modifiedByType": "TRACKING",
          "modifiedAt": "2017-09-23T11:29:44",
          "exchangeItemDtoV1s": [
            {
              "exchangeItemId": 1142609,
              "orderItemId": 3126500806,
              "orderItemUnitPrice": 24950,
              "orderItemName": null,
              "orderPackageId": null,
              "orderPackageName": null,
              "targetItemId": 3126500806,
              "targetItemUnitPrice": 24950,
              "targetItemName": "로엠(ROEM) 케이프형 플라워 블라우스 RMBL724RQ4, (59)Navy, 85",
              "targetPackageId": -1,
              "targetPackageName": "",
              "quantity": 1,
              "orderItemDeliveryComplete": null,
              "orderItemReturnComplete": null,
              "targetItemDeliveryComplete": null,
              "createdAt": "2017-09-23T11:29:44",
              "modifiedAt": "2017-09-26T05:20:18",
              "originalShipmentBoxId": 441950582
            }
          ],
          "exchangeAddressDtoV1": {
            "exchangeAddressId": 1124947,
            "returnCustomerName": "홍*숙",
            "returnAddressZipCode": "10909",
            "returnAddress": "경기도 파주시 ** 43",
            "returnAddressDetail": "현대드림모터스 ( 야당동 )",
            "returnPhone": null,
            "returnMobile": "01**0828",
            "returnMemo": null,
            "deliveryCustomerName": "홍*숙",
            "deliveryAddressZipCode": "10909",
            "deliveryAddress": "경기도 파주시 ** 43",
            "deliveryAddressDetail": "현대드림모터스 ( 야당동 )",
            "deliveryPhone": null,
            "deliveryMobile": "01**0828",
            "deliveryMemo": null,
            "createdAt": "2017-09-23T11:29:44",
            "modifiedAt": "2017-09-23T11:29:44",
            "exchangeId": 100702179
          },
          "deliveryInvoiceGroupDtos": [
            {
              "shipmentBoxId": 444348642,
              "boxPrice": 0,
              "orderId": 6000009115059,
              "orderType": "NORMAL",
              "customerType": "regular",
              "bundleType": null,
              "extraMessage": null,
              "shippingDeliveryType": null,
              "deliveryInvoiceDtos": [
                {
                  "invoiceNumber": null,
                  "estimatedDeliveryDate": "2017-10-12T14:59:59",
                  "deliveredDate": null,
                  "statusModifiedAt": "2017-09-26T05:26:12",
                  "invoiceNumberUploadDate": null,
                  "statusCode": "INSTRUCT",
                  "deliverCode": "NONE",
                  "isMainShipmentInvoice": false,
                  "parcelType": null,
                  "invoiceVendorItemDtos": [
                    {
                      "vendorItemId": 3126500806,
                      "quantity": 1,
                      "promiseDeliveryDate": "2017-10-12T14:59:59",
                      "hasAdditionalItem": false,
                      "estimatedShippingDate": "2017-10-11T14:59:59"
                    }
                  ]
                }
              ]
            }
          ],
          "deliveryStatus": "CompleteDirection",
          "collectStatus": "CompleteCollect",
          "collectCompleteDate": "2017-09-26T05:20:18",
          "collectInformationsDto": {
            "returnType": "EXCHANGE_RETURN",
            "expectedReturnDate": "2017-09-28T11:29:44",
            "returndeliveryItemDtos": [
              {
                "vendorItemId": 3126500806,
                "statusCode": "RETURN_SEND_READY",
                "returnCount": null,
                "releaseStatus": "RELEASED",
                "paymentReturnDeliveryMapId": 25863897,
                "paymentItemId": 1,
                "modifiedBy": "108105925",
                "moodifiedAt": "2017-09-23T11:29:44",
                "createdBy": "108105925",
                "createdAt": "2017-09-23T11:29:44",
                "count": 1,
                "confirmType": null,
                "collectStatus": "RETURN"
              }
            ],
            "returndeliveryDestinationDto": {
              "vendorZipCode": "312-14",
              "vendorPhone": "1899-6500",
              "vendorName": "(주)**몰)",
              "vendorMobile": "",
              "vendorAddressDetail": "**통합 물류센터 지하1층",
              "vendorAddress": "충청남도 천안시 동남구 풍세면 풍세산단3로 111 ()",
              "safetyNumberStatus": "ENABLE",
              "safetyNumberId": 180575619,
              "safetyNumber": "05025852098",
              "returnDeliveryId": null,
              "returnCenterCode": "1000276167",
              "receiptId": null,
              "orderedByMobile": null,
              "orderId": 6000009115059,
              "message": null,
              "customerZipCode": "109-09",
              "customerPhone": "01043170828",
              "customerName": "홍*숙",
              "customerMobile": "01043170828",
              "customerAddressDetail": "현대드림모터스 ( 야당동 )",
              "customerAddress": "경기도 파주시 ** 43"
            }
          },
          "returnDeliveryDtos": [
            {
              "deliveryCompanyCode": "CJGLS",
              "deliveryInvoiceNo": "840833901655"
            }
          ],
          "successable": false,
          "orderDeliveryStatusLabel": "FINAL_DELIVERY",
          "exchangeStatusLabel": "PROGRESS",
          "referTypeLabel": "WEB_MOBILE",
          "faultTypeLabel": "VENDOR",
          "createdByTypeLabel": "CUSTOMER",
          "modifiedByTypeLabel": "CUSTOMER",
          "deliveryInvoiceModifiable": false,
          "rejectable": false
        },
        {
          "exchangeId": 100702705,
          "orderId": 32000009025336,
          "vendorId": "A00127960",
          "orderDeliveryStatusCode": "FINAL_DELIVERY",
          "exchangeStatus": "PROGRESS",
          "referType": "WEB_MOBILE",
          "faultType": "VENDOR",
          "exchangeAmount": 0,
          "reason": null,
          "cancelReason": null,
          "createdByType": "CUSTOMER",
          "createdAt": "2017-09-24T02:10:15",
          "modifiedByType": "TRACKING",
          "modifiedAt": "2017-09-24T02:10:15",
          "exchangeItemDtoV1s": [
            {
              "exchangeItemId": 1143145,
              "orderItemId": 3186090527,
              "orderItemUnitPrice": 9900,
              "orderItemName": null,
              "orderPackageId": null,
              "orderPackageName": null,
              "targetItemId": 3186090527,
              "targetItemUnitPrice": 9900,
              "targetItemName": "후아유(WHO.A.U) 공용 프린팅 오버핏 맨투맨 (printing overfit mtm), (62)Hunter, LARGE (US:M)",
              "targetPackageId": -1,
              "targetPackageName": "",
              "quantity": 1,
              "orderItemDeliveryComplete": null,
              "orderItemReturnComplete": null,
              "targetItemDeliveryComplete": null,
              "createdAt": "2017-09-24T02:10:15",
              "modifiedAt": "2017-09-24T02:10:15",
              "originalShipmentBoxId": 442465568
            }
          ],
          "exchangeAddressDtoV1": {
            "exchangeAddressId": 1125473,
            "returnCustomerName": "김*자",
            "returnAddressZipCode": "12798",
            "returnAddress": "경기도 광주시 오포읍 **맨션",
            "returnAddressDetail": "1동 402호",
            "returnPhone": null,
            "returnMobile": "010**5930",
            "returnMemo": null,
            "deliveryCustomerName": "김*자",
            "deliveryAddressZipCode": "12798",
            "deliveryAddress": "경기도 광주시 오포읍 **맨션",
            "deliveryAddressDetail": "1동 402호",
            "deliveryPhone": null,
            "deliveryMobile": "01***930",
            "deliveryMemo": null,
            "createdAt": "2017-09-24T02:10:15",
            "modifiedAt": "2017-09-24T02:10:15",
            "exchangeId": 100702705
          },
          "deliveryInvoiceGroupDtos": [
            
          ],
          "deliveryStatus": "BeforeDirection",
          "collectStatus": "Collecting",
          "collectCompleteDate": null,
          "collectInformationsDto": {
            "returnType": "EXCHANGE_RETURN",
            "expectedReturnDate": "2017-09-28T02:10:15",
            "returndeliveryItemDtos": [
              {
                "vendorItemId": 3186090527,
                "statusCode": "RETURN_SEND_READY",
                "returnCount": null,
                "releaseStatus": "RELEASED",
                "paymentReturnDeliveryMapId": 25868489,
                "paymentItemId": 1,
                "modifiedBy": "108300735",
                "moodifiedAt": "2017-09-24T02:10:15",
                "createdBy": "108300735",
                "createdAt": "2017-09-24T02:10:15",
                "count": 1,
                "confirmType": null,
                "collectStatus": "RETURN"
              }
            ],
            "returndeliveryDestinationDto": {
              "vendorZipCode": "312-14",
              "vendorPhone": "1899-6500",
              "vendorName": "(주)***몰)",
              "vendorMobile": "",
              "vendorAddressDetail": "****통합 물류센터 지하1층",
              "vendorAddress": "충청남도 천안시 동남구 풍세면 풍세산단3로 111 ()",
              "safetyNumberStatus": "ENABLE",
              "safetyNumberId": 180716150,
              "safetyNumber": "05024731339",
              "returnDeliveryId": null,
              "returnCenterCode": "1000276167",
              "receiptId": null,
              "orderedByMobile": null,
              "orderId": 32000009025336,
              "message": null,
              "customerZipCode": "127-98",
              "customerPhone": "0***930",
              "customerName": "김*자",
              "customerMobile": "01****930",
              "customerAddressDetail": "1동 402호",
              "customerAddress": "경기도 광주시 오포읍 **맨션"
            }
          },
          "returnDeliveryDtos": [
            {
              "deliveryCompanyCode": "CJGLS",
              "deliveryInvoiceNo": "611373805580"
            }
          ],
          "successable": false,
          "orderDeliveryStatusLabel": "FINAL_DELIVERY",
          "exchangeStatusLabel": "PROGRESS",
          "referTypeLabel": "WEB_MOBILE",
          "faultTypeLabel": "VENDOR",
          "createdByTypeLabel": "CUSTOMER",
          "modifiedByTypeLabel": "CUSTOMER",
          "deliveryInvoiceModifiable": false,
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
