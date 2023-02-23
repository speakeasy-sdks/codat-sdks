import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAgedCreditorOutstanding } from "./codatdatacontractsdatasetsagedcreditoroutstanding";


export class CodatDataContractsDatasetsAgedCreditorOutstandingICollectionReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: CodatDataContractsDatasetsAgedCreditorOutstanding })
  data: CodatDataContractsDatasetsAgedCreditorOutstanding[];

  @SpeakeasyMetadata({ data: "json, name=generated" })
  generated: Date;

  @SpeakeasyMetadata({ data: "json, name=reportDate" })
  reportDate: Date;
}