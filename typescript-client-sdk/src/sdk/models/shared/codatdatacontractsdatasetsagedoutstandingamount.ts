import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAgedOutstandingAmountDetail } from "./codatdatacontractsdatasetsagedoutstandingamountdetail";


export class CodatDataContractsDatasetsAgedOutstandingAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=details", elemType: CodatDataContractsDatasetsAgedOutstandingAmountDetail })
  details?: CodatDataContractsDatasetsAgedOutstandingAmountDetail[];

  @SpeakeasyMetadata({ data: "json, name=fromDate" })
  fromDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=toDate" })
  toDate?: Date;
}