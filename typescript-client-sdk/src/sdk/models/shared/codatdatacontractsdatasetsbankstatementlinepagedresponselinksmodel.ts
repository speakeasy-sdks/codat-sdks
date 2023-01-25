import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankStatementLinePagedResponseHrefModel } from "./codatdatacontractsdatasetsbankstatementlinepagedresponsehrefmodel";



export class CodatDataContractsDatasetsBankStatementLinePagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: CodatDataContractsDatasetsBankStatementLinePagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: CodatDataContractsDatasetsBankStatementLinePagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: CodatDataContractsDatasetsBankStatementLinePagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: CodatDataContractsDatasetsBankStatementLinePagedResponseHrefModel;
}
