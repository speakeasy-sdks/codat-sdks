import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsPurchaseOrderPagedResponseHrefModel } from "./codatdatacontractsdatasetspurchaseorderpagedresponsehrefmodel";



export class CodatDataContractsDatasetsPurchaseOrderPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: CodatDataContractsDatasetsPurchaseOrderPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: CodatDataContractsDatasetsPurchaseOrderPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: CodatDataContractsDatasetsPurchaseOrderPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: CodatDataContractsDatasetsPurchaseOrderPagedResponseHrefModel;
}
