import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceProductPagedResponseHrefModel } from "./codatdatacontractsdatasetscommerceproductpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommerceProductPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsCommerceProductPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsCommerceProductPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsCommerceProductPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsCommerceProductPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsCommerceProductPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsCommerceProductPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsCommerceProductPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsCommerceProductPagedResponseHrefModel;
}