import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceProductCategoryPagedResponseHrefModel } from "./codatdatacontractsdatasetscommerceproductcategorypagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommerceProductCategoryPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsCommerceProductCategoryPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsCommerceProductCategoryPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsCommerceProductCategoryPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsCommerceProductCategoryPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsCommerceProductCategoryPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsCommerceProductCategoryPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsCommerceProductCategoryPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsCommerceProductCategoryPagedResponseHrefModel;
}