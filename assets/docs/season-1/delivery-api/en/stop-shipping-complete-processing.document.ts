export const stopShippingCompleteProcessingDocument = {
  note: ``,

  //don't modify documentInfo
  documentInfo: {
    category: `stop-shipping-api`,   // input category ex) exchange-service-api
    id: `stop-shipping-complete-processing`,           // use **dash** and *english*  ex) coupang-confirm-request-creation
    anchorId: `stop_shipping_complete_processing`,
    name: `출고중지완료 처리`,       // use display name, i will change 'translation key'
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
    httpMethod: `DELETE `,
    path: `/v2/providers/wing_api/apis/internal-api/v1/return/{receiptId}/release-stop`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v1/return/{receiptId}/release-stop`,
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `receiptId`,
        require: true,
        _description: `접수 Id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `vendorId`,
        type: `String`,
        require: false,
        _description: `업체 Id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }, {
        name: `receiptId`,
        type: `Number`,
        require: false,
        _description: `접수 Id`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }, {
        name: `deliveryCompanyCode`,
        type: `String`,
        require: false,
        _description: ``,
        _relation: ``,
        _referenceInfo: `<table>
  <tr>
  <th>code</th>
  <th>name</th>
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
    <td><span style="text-decoration: line-through">LOGEN</span> -> KGB</td>
    <td>로젠택배</td>
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
    <td><span style="text-decoration: line-through">KYUNGDONG</span> -> KDEXP</td>
    <td>경동택배</td>
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
</table>
`,
        _warning: ``,
        children: false
      }, {
        name: `invoiceNumber`,
        type: `String`,
        require: false,
        _description: `송장번호`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }
    ]
  },
  errorSpec: false,
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
      type: `Object`,
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [{
        name: `resultCode`,
        type: `String`,
        _description: `SUCCESS/FAIL`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false,
      },
        {
          name: `resultMessage`,
          type: `String`,
          _description: ``,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        }]
    }
  ],
  sample: {
    endpoint: `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/v1/return/12346897/release-stop`,
    code: [
      {
        language: `http`,
        codeblock: {
          "vendorId": "TESTVENDORID",
          "receiptId": 12346897,
          "deliveryCompanyCode": "KDEXP",
          "invoiceNumber": "70432743577"
        }
      }
    ],
    response: {
      "data": {
        "code": "200",
        "message": "OK",
        "resultCode": "SUCCESS",
        "resultMessage": "이미출고 상태변경이 성공하였습니다."
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
