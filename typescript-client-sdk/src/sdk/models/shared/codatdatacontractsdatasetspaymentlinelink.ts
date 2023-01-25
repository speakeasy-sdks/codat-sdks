import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsPaymentLinkTypeEnum } from "./codatdatacontractsdatasetspaymentlinktypeenum";



export class CodatDataContractsDatasetsPaymentLineLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CodatDataContractsDatasetsPaymentLinkTypeEnum;
}
