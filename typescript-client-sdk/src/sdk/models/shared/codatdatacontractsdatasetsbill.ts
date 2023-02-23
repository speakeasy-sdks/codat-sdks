import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBillLineItem } from "./codatdatacontractsdatasetsbilllineitem";
import { CodatDataContractsDatasetsBillStatusEnum } from "./codatdatacontractsdatasetsbillstatusenum";
import { CodatDataContractsDatasetsDataInterfacesSupplementalData } from "./codatdatacontractsdatasetsdatainterfacessupplementaldata";
import { CodatDataContractsDatasetsDetailedPaymentAllocation } from "./codatdatacontractsdatasetsdetailedpaymentallocation";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";
import { CodatDataContractsDatasetsPurchaseOrderRef } from "./codatdatacontractsdatasetspurchaseorderref";
import { CodatDataContractsDatasetsSupplierRef } from "./codatdatacontractsdatasetssupplierref";
import { CodatDataContractsDatasetsWithholdingTax } from "./codatdatacontractsdatasetswithholdingtax";


export class CodatDataContractsDatasetsBill extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountDue" })
  amountDue?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate: Date;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: CodatDataContractsDatasetsBillLineItem })
  lineItems?: CodatDataContractsDatasetsBillLineItem[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentAllocations", elemType: CodatDataContractsDatasetsDetailedPaymentAllocation })
  paymentAllocations?: CodatDataContractsDatasetsDetailedPaymentAllocation[];

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderRefs", elemType: CodatDataContractsDatasetsPurchaseOrderRef })
  purchaseOrderRefs?: CodatDataContractsDatasetsPurchaseOrderRef[];

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CodatDataContractsDatasetsBillStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal: number;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: CodatDataContractsDatasetsDataInterfacesSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=supplierRef" })
  supplierRef?: CodatDataContractsDatasetsSupplierRef;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({ data: "json, name=withholdingTax", elemType: CodatDataContractsDatasetsWithholdingTax })
  withholdingTax?: CodatDataContractsDatasetsWithholdingTax[];
}