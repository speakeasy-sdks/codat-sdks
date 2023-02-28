import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBillCreditNoteLineItem } from "./codatdatacontractsdatasetsbillcreditnotelineitem";
import { CodatDataContractsDatasetsCreditNoteStatusEnum } from "./codatdatacontractsdatasetscreditnotestatusenum";
import { CodatDataContractsDatasetsDataInterfacesSupplementalData } from "./codatdatacontractsdatasetsdatainterfacessupplementaldata";
import { CodatDataContractsDatasetsDetailedPaymentAllocation } from "./codatdatacontractsdatasetsdetailedpaymentallocation";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";
import { CodatDataContractsDatasetsSupplierRef } from "./codatdatacontractsdatasetssupplierref";
import { CodatDataContractsDatasetsWithholdingTax } from "./codatdatacontractsdatasetswithholdingtax";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsBillCreditNote extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocatedOnDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "billCreditNoteNumber" })
  billCreditNoteNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "discountPercentage" })
  discountPercentage: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "issueDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  issueDate?: Date;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsBillCreditNoteLineItem })
  @Expose({ name: "lineItems" })
  @Type(() => CodatDataContractsDatasetsBillCreditNoteLineItem)
  lineItems?: CodatDataContractsDatasetsBillCreditNoteLineItem[];

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CodatDataContractsDatasetsMetadata)
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsDetailedPaymentAllocation })
  @Expose({ name: "paymentAllocations" })
  @Type(() => CodatDataContractsDatasetsDetailedPaymentAllocation)
  paymentAllocations?: CodatDataContractsDatasetsDetailedPaymentAllocation[];

  @SpeakeasyMetadata()
  @Expose({ name: "remainingCredit" })
  remainingCredit: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: CodatDataContractsDatasetsCreditNoteStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal: number;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => CodatDataContractsDatasetsDataInterfacesSupplementalData)
  supplementalData?: CodatDataContractsDatasetsDataInterfacesSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierRef" })
  @Type(() => CodatDataContractsDatasetsSupplierRef)
  supplierRef?: CodatDataContractsDatasetsSupplierRef;

  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalDiscount" })
  totalDiscount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxAmount" })
  totalTaxAmount: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsWithholdingTax })
  @Expose({ name: "withholdingTax" })
  @Type(() => CodatDataContractsDatasetsWithholdingTax)
  withholdingTax?: CodatDataContractsDatasetsWithholdingTax[];
}