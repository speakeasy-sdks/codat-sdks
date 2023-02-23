import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCreditNoteLineItem } from "./codatdatacontractsdatasetscreditnotelineitem";
import { CodatDataContractsDatasetsCreditNoteStatusEnum } from "./codatdatacontractsdatasetscreditnotestatusenum";
import { CodatDataContractsDatasetsCustomerRef } from "./codatdatacontractsdatasetscustomerref";
import { CodatDataContractsDatasetsDataInterfacesSupplementalData } from "./codatdatacontractsdatasetsdatainterfacessupplementaldata";
import { CodatDataContractsDatasetsDetailedPaymentAllocation } from "./codatdatacontractsdatasetsdetailedpaymentallocation";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";
import { CodatDataContractsDatasetsWithholdingTax } from "./codatdatacontractsdatasetswithholdingtax";


export class CodatDataContractsDatasetsCreditNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalTaxAmount" })
  additionalTaxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=additionalTaxPercentage" })
  additionalTaxPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=allocatedOnDate" })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=creditNoteNumber" })
  creditNoteNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: CodatDataContractsDatasetsCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: CodatDataContractsDatasetsCreditNoteLineItem })
  lineItems?: CodatDataContractsDatasetsCreditNoteLineItem[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentAllocations", elemType: CodatDataContractsDatasetsDetailedPaymentAllocation })
  paymentAllocations?: CodatDataContractsDatasetsDetailedPaymentAllocation[];

  @SpeakeasyMetadata({ data: "json, name=remainingCredit" })
  remainingCredit: number;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CodatDataContractsDatasetsCreditNoteStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal: number;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: CodatDataContractsDatasetsDataInterfacesSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({ data: "json, name=totalDiscount" })
  totalDiscount: number;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmount" })
  totalTaxAmount: number;

  @SpeakeasyMetadata({ data: "json, name=withholdingTax", elemType: CodatDataContractsDatasetsWithholdingTax })
  withholdingTax?: CodatDataContractsDatasetsWithholdingTax[];
}