export const exchangeGoodsInvoiceCreationDocument = {
  note: `Create new order for delivering exchange product to customer.`,
  documentInfo: {
    category: `example-api`,
    id: `example-four`,
    name: `Exchange Goods Invoice Creation`,
    displayOrder: 999,
    documentState: `draft`,
    lastUpdateDate: `2016-12-30`,
    reflectionDate: ``
  },
  apiInfo: {
    state: `draft`,
    lastUpdateDate: `2016-12-30`,
    developer: `Tracy`,
    domain: `https://api-gateway.coupang.com/v2/providers/wing_api/apis/internal-api/`,
    httpMethod: `POST`,
    path: `/v2/providers/wing_api/apis/internal-api/v1/exchange/{exchangeId}/invoices`,
    HMACPath: `/v2/providers/wing_api/apis/internal-api/v1/exchange/{exchangeId}/invoices`,
    _description: `Create new order for delivering exchange product to customer.`,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``,
  },
  parameters: {
    pathSegmentParameters: [
      {
        name: `exchangeId`,
        require: true,
        _description: `The exchangeId which want to reject`,
        _relation: `GET /v2/providers/wing_api/apis/internal-api/v1/exchange/inquiries`,
        _referenceInfo: ``,
        _warning: ``
      }
    ],
    queryStringParameters: false,
    bodyParameters: [
      {
        name: `exchangeId`,
        require: true,
        _description: `exchangeId`,
        _relation: `GET /v2/providers/wing_api/apis/internal-api/v1/exchange/inquiries`,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }, {
        name: `vendorId`,
        require: true,
        _description: `vendorId`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }, {
        name: `goodsflowDeliveryCode`,
        require: true,
        _description: `delivery code`,
        _relation: ``,
        _referenceInfo: `<table>
    <tr>
        <th>Delivery Short Name</th>
        <th>Delivery Full Name</th>
        <th>Delivery Code</th>
    </tr>
    <tr>
        <td>NONE</td>
        <td>NONE</td>
        <td>NA</td>
    </tr>
    <tr>
        <td>HYUNDAI</td>
        <td>현대택배</td>
        <td>HYUNDAI</td>
    </tr>
    <tr>
        <td>KGB</td>
        <td>로젠택배</td>
        <td>KGB</td>
    </tr>
    <tr>
        <td>EPOST</td>
        <td>우체국</td>
        <td>EPOST</td>
    </tr>
    <tr>
        <td>HANJIN</td>
        <td>한진택배</td>
        <td>HANJIN</td>
    </tr>
    <tr>
        <td>KOREX</td>
        <td>대한통운</td>
        <td>KOREX</td>
    </tr>
    <tr>
        <td>CJGLS</td>
        <td>CJ 대한통운</td>
        <td>CJGLS</td>
    </tr>
    <tr>
        <td>KGBLS</td>
        <td>KGB택배</td>
        <td>kdexp</td>
    </tr>
    <tr>
        <td>YELLOW</td>
        <td>옐로우캡</td>
        <td>YELLOW</td>
    </tr>
    <tr>
        <td>DONGBU</td>
        <td>KG로지스</td>
        <td>DONGBU</td>
    </tr>
    <tr>
        <td>INNOGIS</td>
        <td>GTX로지스</td>
        <td>INNOGIS</td>
    </tr>
    <tr>
        <td>ILYANG</td>
        <td>일양택배</td>
        <td>ilyang</td>
    </tr>
    <tr>
        <td>CHUNIL</td>
        <td>천일택배</td>
        <td>chunil</td>
    </tr>
    <tr>
        <td>AJOU</td>
        <td>아주택배</td>
        <td>NA</td>
    </tr>
    <tr>
        <td>CSLOGIS</td>
        <td>SC로지스</td>
        <td>NA</td>
    </tr>
    <tr>
        <td>DAESIN</td>
        <td>대신택배</td>
        <td>DAESIN</td>
    </tr>
    <tr>
        <td>CVS</td>
        <td>CVS택배</td>
        <td>CVSNET</td>
    </tr>
    <tr>
        <td>HDEXP</td>
        <td>합동택배</td>
        <td>hdexp</td>
    </tr>
    <tr>
        <td>DADREAM</td>
        <td>다드림</td>
        <td>DADREAM</td>
    </tr>
    <tr>
        <td>DHL</td>
        <td>DHL</td>
        <td>DHL</td>
    </tr>
    <tr>
        <td>UPS</td>
        <td>UPS</td>
        <td>UPS</td>
    </tr>
    <tr>
        <td>FEDEX</td>
        <td>FEDEX</td>
        <td>FEDEX</td>
    </tr>
    <tr>
        <td>REGISTPOST</td>
        <td>우편등기</td>
        <td>REGISTPOST</td>
    </tr>
    <tr>
        <td>DIRECT</td>
        <td>업체직송</td>
        <td>NA</td>
    </tr>
    <tr>
        <td>COUPANG</td>
        <td>쿠팡자체배송</td>
        <td>coupangls</td>
    </tr>
    <tr>
        <td>IQS</td>
        <td>굿스포스트</td>
        <td>iqs</td>
    </tr>
    <tr>
        <td>EMS</td>
        <td>우체국 EMS</td>
        <td>ems</td>
    </tr>
    <tr>
        <td>TNT</td>
        <td>TNT</td>
        <td>tnt</td>
    </tr>
    <tr>
        <td>USPS</td>
        <td>USPS</td>
        <td>usps</td>
    </tr>
    <tr>
        <td>IPARCEL</td>
        <td>i-parcel</td>
        <td>iparcel</td>
    </tr>
    <tr>
        <td>GSMNTON</td>
        <td>GSM NtoN</td>
        <td>gsmnton</td>
    </tr>
    <tr>
        <td>SWGEXP</td>
        <td>성원글로벌</td>
        <td>swgexp</td>
    </tr>
    <tr>
        <td>PANTOS</td>
        <td>범한판토스</td>
        <td>pantos</td>
    </tr>
    <tr>
        <td>ACIEXPRESS</td>
        <td>ACI Express</td>
        <td>aciexpress</td>
    </tr>
    <tr>
        <td>DAEWOON</td>
        <td>대운글로벌</td>
        <td>daewoon</td>
    </tr>
    <tr>
        <td>AIRBOY</td>
        <td>에어보이익스프레스</td>
        <td>airboy</td>
    </tr>
    <tr>
        <td>KGLNET</td>
        <td>KGL네트웍스</td>
        <td>kglnet</td>
    </tr>
    <tr>
        <td>KUNYOUNG</td>
        <td>건영택배</td>
        <td>kunyoung</td>
    </tr>
    <tr>
        <td>SLX</td>
        <td>SLX택배</td>
        <td>slx</td>
    </tr>
    <tr>
        <td>HONAM</td>
        <td>호남택배</td>
        <td>honam</td>
    </tr>
    <tr>
        <td>LINEEXPRESS</td>
        <td>LineExpress</td>
        <td>lineexp</td>
    </tr>
    <tr>
        <td>SFEXPRESS</td>
        <td>순풍택배</td>
        <td>sfexpress</td>
    </tr>
</table>
 
 
`,
        _warning: `the allowed code value are`,
        children: false
      }, {
        name: `invoiceNumber`,
        require: true,
        _description: `invoiceNumber`,
        _relation: `GET /v2/providers/wing_api/apis/internal-api/v1/exchange/inquiries`,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }, {
        name: `shipmentBoxId`,
        require: true,
        _description: `shipmentBoxId`,
        _relation: `GET /v2/providers/wing_api/apis/internal-api/v1/exchange/inquiries`,
        _referenceInfo: ``,
        _warning: ``,
        children: false
      }
    ]
  },
  errorSpec: false,
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
      _description: `http request return result(contain result code and message)`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `resultCode`,
          type: `String`,
          _description: `SUCCESS or FAIL`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        }, {
          name: `resultMessage`,
          type: `String`,
          _description: `Result message for the saving invoices reques`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false
        }]
    }
  ],
  sample: {
    endpoint: ``,
    code: [
      {
        language: `http`,
        codeblock: [
          {
            "exchangeId": "100000170",
            "vendorId": "A00010028",
            "shipmentBoxId": "197277127",
            "goodsDeliveryCode": "coupangls",
            "invoiceNumber": "123456431"
          },
          {
            "exchangeId": "100000170",
            "vendorId": "A00010028",
            "shipmentBoxId": "197277128",
            "goodsDeliveryCode": "coupangls",
            "invoiceNumber": "123456432"
          }
        ]
      }
    ],
    response: {
      "code": "200",
      "message": "SUCCESS",
      "data": {
        "resultCode": "SUCCESS",
        "resultMessage": "Invoice number save successfully"
      }
    },
    _description: ``,
    _relation: ``,
    _referenceInfo: ``,
    _warning: ``
  }
}
