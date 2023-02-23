import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccountRef } from "./codatdatacontractsdatasetsaccountref";
import { CodatDataContractsDatasetsCustomerRef } from "./codatdatacontractsdatasetscustomerref";
import { CodatDataContractsDatasetsDataInterfacesSupplementalData } from "./codatdatacontractsdatasetsdatainterfacessupplementaldata";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";
import { CodatDataContractsDatasetsPaymentLine } from "./codatdatacontractsdatasetspaymentline";
import { CodatDataContractsDatasetsPaymentMethodRef } from "./codatdatacontractsdatasetspaymentmethodref";


export class CodatDataContractsDatasetsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: CodatDataContractsDatasetsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=customerRef" })
  customerRef?: CodatDataContractsDatasetsCustomerRef;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lines", elemType: CodatDataContractsDatasetsPaymentLine })
  lines?: CodatDataContractsDatasetsPaymentLine[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodRef" })
  paymentMethodRef?: CodatDataContractsDatasetsPaymentMethodRef;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: CodatDataContractsDatasetsDataInterfacesSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}