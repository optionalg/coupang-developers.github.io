export const lookupDeliveryModifyHistoryDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `delivery-api`,   // input category ex) exchange-service-api
    id: `lookup-delivery-modify-history`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `lookup_delivery_modify_history`,
    name: `배송상태 변경 히스토리 조회`,       // use display name, i will change 'translation key'
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
    path: `/v2/providers/wing_api/apis/internal-api/v1/ordersheets/{shipmentBoxId}/histories`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v1/ordersheets/{shipmentBoxId}/histories`,
    _description: `특정 발주건에 대한 배송상태 히스토리를 조회`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `shipmentBoxId`,
        require: true,
        _description: `배송ID`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: false,
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
      require: false,
      _description: `결제완료목록`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [{
        name: `shipmentBoxId`,
        type: `Number`,
        require: true,
        _description: `배송번호`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
        {
          name: `details`,
          type: `Array`,
          require: true,
          _description: `히스토리 상세	`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: [{
            name: `deliveryStatus`,
            type: `String`,
            require: true,
            _description: `배송상태`,
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
        ` ,
            _warning: ``,
            children: false
          },{
            name: `deliveryStatusDesc`,
            type: `String`,
            require: true,
            _description: `배송상태 설명`,
            _relation: ``,
            _referenceInfo: ``,
            _warning: ``,
            children: false
          },{
            name: `updatedAt`,
            type: `String`,
            require: true,
            _description: `변경시간`,
            _relation: ``,
            _referenceInfo: `yyyy-MM-dd'T'hh:mm:ss`,
            _warning: ``,
            children: false
          }]
        }]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v1/ordersheets/123456789/histories`,
    code: [
      {
        language: `http`,
        codeblock: {
        }
      }
    ],
    response: {
      "code": "200",
      "message": "",
      "data": {
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
