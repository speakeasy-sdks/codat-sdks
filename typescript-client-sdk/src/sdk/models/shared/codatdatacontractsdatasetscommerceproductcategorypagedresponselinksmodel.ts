import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceProductCategoryPagedResponseHrefModel } from "./codatdatacontractsdatasetscommerceproductcategorypagedresponsehrefmodel";



export class CodatDataContractsDatasetsCommerceProductCategoryPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: CodatDataContractsDatasetsCommerceProductCategoryPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: CodatDataContractsDatasetsCommerceProductCategoryPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: CodatDataContractsDatasetsCommerceProductCategoryPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: CodatDataContractsDatasetsCommerceProductCategoryPagedResponseHrefModel;
}
