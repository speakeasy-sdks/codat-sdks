import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankingAccountPagedResponseHrefModel } from "./codatdatacontractsdatasetsbankingaccountpagedresponsehrefmodel";



export class CodatDataContractsDatasetsBankingAccountPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: CodatDataContractsDatasetsBankingAccountPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: CodatDataContractsDatasetsBankingAccountPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: CodatDataContractsDatasetsBankingAccountPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: CodatDataContractsDatasetsBankingAccountPagedResponseHrefModel;
}
