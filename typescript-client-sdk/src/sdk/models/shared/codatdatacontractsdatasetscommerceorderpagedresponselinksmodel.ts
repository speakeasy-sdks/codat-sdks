import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceOrderPagedResponseHrefModel } from "./codatdatacontractsdatasetscommerceorderpagedresponsehrefmodel";



export class CodatDataContractsDatasetsCommerceOrderPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: CodatDataContractsDatasetsCommerceOrderPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: CodatDataContractsDatasetsCommerceOrderPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: CodatDataContractsDatasetsCommerceOrderPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: CodatDataContractsDatasetsCommerceOrderPagedResponseHrefModel;
}
