import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBillPaymentLinkTypeEnum } from "./codatdatacontractsdatasetsbillpaymentlinktypeenum";
import { Expose } from "class-transformer";


export class CodatDataContractsDatasetsBillPaymentLineLink extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: CodatDataContractsDatasetsBillPaymentLinkTypeEnum;
}