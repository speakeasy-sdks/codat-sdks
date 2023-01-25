import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsPurchaseOrderLineItem } from "./codatdatacontractsdatasetspurchaseorderlineitem";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";
import { CodatDataContractsDatasetsShipTo } from "./codatdatacontractsdatasetsshipto";
import { CodatDataContractsDatasetsPurchaseOrderStatusEnum } from "./codatdatacontractsdatasetspurchaseorderstatusenum";
import { CodatDataContractsDatasetsSupplierRef } from "./codatdatacontractsdatasetssupplierref";



export class CodatDataContractsDatasetsPurchaseOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=deliveryDate" })
  deliveryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=expectedDeliveryDate" })
  expectedDeliveryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: CodatDataContractsDatasetsPurchaseOrderLineItem })
  lineItems?: CodatDataContractsDatasetsPurchaseOrderLineItem[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentDueDate" })
  paymentDueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderNumber" })
  purchaseOrderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=shipTo" })
  shipTo?: CodatDataContractsDatasetsShipTo;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CodatDataContractsDatasetsPurchaseOrderStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=supplierRef" })
  supplierRef?: CodatDataContractsDatasetsSupplierRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalDiscount" })
  totalDiscount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount?: number;
}
