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
      name: ``,
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
    _description: ``,
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
        _description: `Search start date`,
        _relation: ``,
        _referenceInfo: `yyyy-MM-ddTHH: mm: ss`,
        _warning: ``,
        children: false,
      },
      {
        name: `createdAtTo`,
        require: true,
        _description: `Search end date`,
        _relation: ``,
        _referenceInfo: `yyyy-MM-ddTHH: mm: ss`,
        _warning: ``,
        children: false,
      },
      {
        name: `status`,
        require: false,
        _description: `exchange status, if status not passed, the query will return for all status.`,
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
        _description: `order number`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false,
      },
      {
        name: `nextToken`,
        require: false,
        _description: `next token`,
        _relation: ``,
        _referenceInfo: ``,
        _warning: ``,
        children: false,
      },
      {
        name: `maxPerPage`,
        require: false,
        _description: `The maximum number of every page`,
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
      _description: ``,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: [
        {
          name: `exchangeId`,
          type: `Number`,
          _description: `Exchange ID`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `orderId`,
          type: `Number`,
          _description: `order number`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `vendorId`,
          type: `String`,
          _description: `vendor Id`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `orderDeliveryStatusCode`,
          type: `String`,
          _description: `Order delivery status code`,
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
          _description: `Exchange Status`,
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
          _description: `Exchange Status label`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `referType`,
          type: `String`,
          _description: `Refer type`,
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
          _description: `Fault type`,
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
          _description: `The number of exchange`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `reason`,
          type: `String`,
          _description: `Reason`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `cancelReason`,
          type: `String`,
          _description: `Cancel Reason`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `createdByType`,
          type: `String`,
          _description: `Type`,
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
          _description: `Created type label`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `createdAt`,
          type: `String`,
          _description: `Create date time`,
          _relation: ``,
          _referenceInfo: `yyyy-MM-dd HH:mm:ss`,
          _warning: ``,
          children: false,
        },
        {
          name: `modifiedByType`,
          type: `String`,
          _description: `Modify type`,
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
          _description: `Modify date time`,
          _relation: ``,
          _referenceInfo: `yyyy-MM-dd HH:mm:ss`,
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
              _description: `Exchange item ID`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `orderItemId`,
              type: `Number`,
              _description: `Order Item ID`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `orderItemUnitPrice`,
              type: `Number`,
              _description: `Order Item Unit Price`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `orderItemName`,
              type: `String`,
              _description: `Order Item Name`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `orderPackageId`,
              type: `Number`,
              _description: `Order Package Id`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `orderPackageName`,
              type: `String`,
              _description: `Order Package name`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `targetItemId`,
              type: `Number`,
              _description: `Target Item Id`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `targetItemUnitPrice`,
              type: `Number`,
              _description: `Target Item Unit Price`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `targetItemName`,
              type: `String`,
              _description: `Target Item Name`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `targetPackageId`,
              type: `Number`,
              _description: `Target Package Id`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `targetPackageName`,
              type: `String`,
              _description: `Target Package Name`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `quantity`,
              type: `Number`,
              _description: `Quantity`,
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
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `orderItemReturnComplete`,
              type: `Boolean`,
              _description: `True/False`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `targetItemDeliveryComplete`,
              type: `Boolean`,
              _description: `True/False`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `createdAt`,
              type: `String`,
              _description: `Create date time`,
              _relation: ``,
              _referenceInfo: `yyyy-MM-dd HH:mm:ss`,
              _warning: ``,
              children: false,
            },
            {
              name: `modifiedAt`,
              type: `String`,
              _description: `Modify date time`,
              _relation: ``,
              _referenceInfo: `yyyy-MM-dd HH:mm:ss`,
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
              _description: `Exchange Address ID`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `returnCustomerName`,
              type: `String`,
              _description: `Return Customer Name`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `returnAddressZipCode`,
              type: `String`,
              _description: `Return Address Zip Code`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `returnAddress`,
              type: `String`,
              _description: `Return Address`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `returnAddressDetail`,
              type: `String`,
              _description: `Return Address Detail`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `returnPhone`,
              type: `String`,
              _description: `Return Phone`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `returnMobile`,
              type: `String`,
              _description: `Return Mobile`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `returnMemo`,
              type: `String`,
              _description: `Return Memo`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `deliveryCustomerName`,
              type: `String`,
              _description: `Delivery Customer Name`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `deliveryAddressZipCode`,
              type: `String`,
              _description: `Delivery Address Zip Code`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `deliveryAddress`,
              type: `String`,
              _description: `Delivery Address`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `deliveryAddressDetail`,
              type: `String`,
              _description: `Delivery Address Detail`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `deliveryPhone`,
              type: `String`,
              _description: `Delivery Phone`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `deliveryMobile`,
              type: `String`,
              _description: `Delivery Mobile`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `deliveryMemo`,
              type: `String`,
              _description: `Delivery Memo`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `createdAt`,
              type: `String`,
              _description: `Create date time`,
              _relation: ``,
              _referenceInfo: `yyyy-MM-dd HH:mm:ss`,
              _warning: ``,
              children: false,
            },
            {
              name: `modifiedAt`,
              type: `String`,
              _description: `Modify date time`,
              _relation: ``,
              _referenceInfo: `yyyy-MM-dd HH:mm:ss`,
              _warning: ``,
              children: false,
            },
            {
              name: `exchangeId`,
              type: `Number`,
              _description: `Exchange ID`,
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
              _description: `Shipment box id`,
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
              _description: `Order id`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `orderType`,
              type: `String`,
              _description: `Order type`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `customerType`,
              type: `String`,
              _description: `Customer type`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `bundleType`,
              type: `String`,
              _description: `Bundle type`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `extraMessage`,
              type: `String`,
              _description: `Message`,
              _relation: ``,
              _referenceInfo: ``,
              _warning: ``,
              children: false,
            },
            {
              name: `shippingDeliveryType`,
              type: `String`,
              _description: `Shipment delivery type`,
              _relation: ``,
              _referenceInfo: ``,
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
                  _description: `Invoice number`,
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
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false,
                },
                {
                  name: `deliveredDate`,
                  type: `String`,
                  _description: `Delivered date`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false,
                },
                {
                  name: `statusModifiedAt`,
                  type: `String`,
                  _description: `Status modified date`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false,
                },
                {
                  name: `invoiceNumberUploadDate`,
                  type: `String`,
                  _description: `Invoice number upload date`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false,
                },
                {
                  name: `statusCode`,
                  type: `String`,
                  _description: `Status code`,
                  _relation: ``,
                  _referenceInfo: ``,
                  _warning: ``,
                  children: false,
                },
                {
                  name: `deliverCode`,
                  type: `String`,
                  _description: `Deliver code`,
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
                      _description: `Vendor item id`,
                      _relation: ``,
                      _referenceInfo: ``,
                      _warning: ``,
                      children: false,
                    },
                    {
                      name: `quantity`,
                      type: `Number`,
                      _description: `quantity`,
                      _relation: ``,
                      _referenceInfo: ``,
                      _warning: ``,
                      children: false,
                    },
                    {
                      name: `hasAdditionalItem`,
                      type: `Boolean`,
                      _description: `Has additional item`,
                      _relation: ``,
                      _referenceInfo: ``,
                      _warning: ``,
                      children: false,
                    },
                    {
                      name: `promiseDeliveryDate`,
                      type: `String`,
                      _description: `Promise delivery date`,
                      _relation: ``,
                      _referenceInfo: ``,
                      _warning: ``,
                      children: false,
                    },
                    {
                      name: `estimatedShippingDate`,
                      type: `String`,
                      _description: `Estimate shipping date`,
                      _relation: ``,
                      _referenceInfo: ``,
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
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        },
        {
          name: `rejectable`,
          type: `Boolean`,
          _description: `True/False`,
          _relation: ``,
          _referenceInfo: ``,
          _warning: ``,
          children: false,
        }
      ]
    },
    {
      name: `nextToken`,
      type: `String`,
      _description: `next token`,
      _relation: ``,
      _referenceInfo: ``,
      _warning: ``,
      children: false,
    }
  ],
  sample: {
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
  },
}
