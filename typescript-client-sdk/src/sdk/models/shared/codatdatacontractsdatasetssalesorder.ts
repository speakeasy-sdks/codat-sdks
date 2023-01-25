import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCustomerRef } from "./codatdatacontractsdatasetscustomerref";
import { CodatDataContractsDatasetsInvoicingStatusEnum } from "./codatdatacontractsdatasetsinvoicingstatusenum";
import { CodatDataContractsDatasetsSalesOrderLineItem } from "./codatdatacontractsdatasetssalesorderlineitem";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";
import { CodatDataContractsDatasetsShipTo } from "./codatdatacontractsdatasetsshipto";
import { CodatDataContractsDatasetsSalesOrderStatusEnum } from "./codatdatacontractsdatasetssalesorderstatusenum";



export class CodatDataContractsDatasetsSalesOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=customerPurchaseOrderNumber" })
  customerPurchaseOrderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: CodatDataContractsDatasetsCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=expectedDeliveryDate" })
  expectedDeliveryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoicingStatus" })
  invoicingStatus?: CodatDataContractsDatasetsInvoicingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: CodatDataContractsDatasetsSalesOrderLineItem })
  lineItems?: CodatDataContractsDatasetsSalesOrderLineItem[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=salesOrderNumber" })
  salesOrderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=shipTo" })
  shipTo?: CodatDataContractsDatasetsShipTo;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CodatDataContractsDatasetsSalesOrderStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount?: number;
}
