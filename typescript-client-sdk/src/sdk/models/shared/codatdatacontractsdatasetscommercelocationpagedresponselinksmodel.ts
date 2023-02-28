import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceLocationPagedResponseHrefModel } from "./codatdatacontractsdatasetscommercelocationpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommerceLocationPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsCommerceLocationPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsCommerceLocationPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsCommerceLocationPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsCommerceLocationPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsCommerceLocationPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsCommerceLocationPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsCommerceLocationPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsCommerceLocationPagedResponseHrefModel;
}