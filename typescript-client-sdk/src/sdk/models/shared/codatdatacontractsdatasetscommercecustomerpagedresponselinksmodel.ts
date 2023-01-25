import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceCustomerPagedResponseHrefModel } from "./codatdatacontractsdatasetscommercecustomerpagedresponsehrefmodel";



export class CodatDataContractsDatasetsCommerceCustomerPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: CodatDataContractsDatasetsCommerceCustomerPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: CodatDataContractsDatasetsCommerceCustomerPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: CodatDataContractsDatasetsCommerceCustomerPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: CodatDataContractsDatasetsCommerceCustomerPagedResponseHrefModel;
}
