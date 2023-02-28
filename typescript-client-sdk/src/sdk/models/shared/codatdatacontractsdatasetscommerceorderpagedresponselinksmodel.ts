import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceOrderPagedResponseHrefModel } from "./codatdatacontractsdatasetscommerceorderpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommerceOrderPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsCommerceOrderPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsCommerceOrderPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsCommerceOrderPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsCommerceOrderPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsCommerceOrderPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsCommerceOrderPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsCommerceOrderPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsCommerceOrderPagedResponseHrefModel;
}