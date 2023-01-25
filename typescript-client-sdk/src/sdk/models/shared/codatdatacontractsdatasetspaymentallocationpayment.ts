import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccountRef } from "./codatdatacontractsdatasetsaccountref";



export class CodatDataContractsDatasetsPaymentAllocationPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: CodatDataContractsDatasetsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paidOnDate" })
  paidOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}
