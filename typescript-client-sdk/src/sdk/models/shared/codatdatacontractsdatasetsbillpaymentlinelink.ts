import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBillPaymentLinkTypeEnum } from "./codatdatacontractsdatasetsbillpaymentlinktypeenum";


export class CodatDataContractsDatasetsBillPaymentLineLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CodatDataContractsDatasetsBillPaymentLinkTypeEnum;
}