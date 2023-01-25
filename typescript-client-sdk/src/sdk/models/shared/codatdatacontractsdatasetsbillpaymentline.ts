import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsBillPaymentLineLink } from "./codatdatacontractsdatasetsbillpaymentlinelink";



export class CodatDataContractsDatasetsBillPaymentLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocatedOnDate" })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=links", elemType: CodatDataContractsDatasetsBillPaymentLineLink })
  links?: CodatDataContractsDatasetsBillPaymentLineLink[];
}
