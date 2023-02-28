import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccountRef } from "./codatdatacontractsdatasetsaccountref";
import { CodatDataContractsDatasetsBillPaymentLine } from "./codatdatacontractsdatasetsbillpaymentline";
import { CodatDataContractsDatasetsDataInterfacesSupplementalData } from "./codatdatacontractsdatasetsdatainterfacessupplementaldata";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";
import { CodatDataContractsDatasetsPaymentMethodRef } from "./codatdatacontractsdatasetspaymentmethodref";
import { CodatDataContractsDatasetsSupplierRef } from "./codatdatacontractsdatasetssupplierref";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsBillPayment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CodatDataContractsDatasetsAccountRef)
  accountRef?: CodatDataContractsDatasetsAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsBillPaymentLine })
  @Expose({ name: "lines" })
  @Type(() => CodatDataContractsDatasetsBillPaymentLine)
  lines?: CodatDataContractsDatasetsBillPaymentLine[];

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

  @SpeakeasyMetadata()
  @Expose({ name: "paymentMethodRef" })
  @Type(() => CodatDataContractsDatasetsPaymentMethodRef)
  paymentMethodRef?: CodatDataContractsDatasetsPaymentMethodRef;

  @SpeakeasyMetadata()
  @Expose({ name: "reference" })
  reference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

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
  totalAmount?: number;
}