import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsPaymentLineLink } from "./codatdatacontractsdatasetspaymentlinelink";



export class CodatDataContractsDatasetsPaymentLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocatedOnDate" })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=links", elemType: CodatDataContractsDatasetsPaymentLineLink })
  links?: CodatDataContractsDatasetsPaymentLineLink[];
}
