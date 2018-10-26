export const deliveryCompleteProcessingDocument = {
  note: ``,
  
  //don't modify documentInfo
  documentInfo: {
    category: `delivery-api`,   // input category ex) exchange-service-api
    id: `delivery-complete-processing`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `delivery_complete_processing`,
    name: `장기미배송 배송완료 처리 `,       // use display name, i will change 'translation key'
    displayOrderPriority: 999, // use order priority. 1 is high(top),
    documentState: `draft`, // draft, candidate, release
    lastUpdateDate: `2017-02-17`, // yyyy-mm-dd  ex> 2016-12-23
    reflectionDate: ``,
    documentLegacyInfo: {
      name: ``,
      anchorId: ``,
    },
    
  },

  apiInfo: {
    state: ``,      // draft, candidate, release, unstable, stable, deprecated
    lastUpdateDate: ``, // yyyy-mm-dd  ex> 2016-12-23
    developer: `Wiv`,
    domain: `https://api-gateway.coupang.com`,
    httpMethod: `POST `,
    path: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/completeLongTermUndelivery`,
    HMACPath: `/v2/providers/openapi/apis/api/v4/vendors/{vendorId}/completeLongTermUndelivery`,
    _description: `송장 등록 후 1달이 경과하였으나, 배송추적 결과를 확인할 수 없는 내용에 대해 배송완료로 상태를 변경합니다.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: `정산된 주문에 대한 미배송으로 인해 고객 분쟁 발생 시 분쟁처리에 대한 비용은 판매자가 부담해야 하므로 정확한 확인이 필요합니다.`,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `vendorId`,
        require: true,
        _description: `vendor Id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `shipmentBoxId`,
        type: `Number`,
        require: true,
        _description: `묶음배송번호`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }, {
        name: `invoiceNumber`,
        type: `String`,
        require: true,
        _description: `운송장번호`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      },
    ]
  },
 
  responseSpec: [
    {
      name: `code`,
      type: `String`,
      _description: `server response status info`,
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
      type: `Boolean`,
      _description: `true/false`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children:false
    }
  ],
  errorSpec: [
	    {
		      status: 400,
		      _description: `배송완료 처리 실패. 배송상태: INSTRUCT`,
		      _relation: ``,
		      _referenceInfo: ``,
		      _warning: ``
		    },
	    {
	      status: 400,
	      _description: `배송완료 처리 실패. 배송상태: DEPARTURE`,
	      _relation: ``,
	      _referenceInfo: ``,
	      _warning: ``
	    }
	  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/openapi/apis/api/v4/vendors/A00013264/completeLongTermUndelivery`,
    code: [
      {
        language: `http`,
        codeblock: {
            "shipmentBoxId":482231895,
            "invoiceNumber":"505124853844"
        }
      }
    ],
    response: {
      "code": "200",
      "message": "SUCCESS",
      "data": true
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
  
  
}
