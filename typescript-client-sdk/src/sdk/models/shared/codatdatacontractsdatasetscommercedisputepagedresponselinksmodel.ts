import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceDisputePagedResponseHrefModel } from "./codatdatacontractsdatasetscommercedisputepagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommerceDisputePagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsCommerceDisputePagedResponseHrefModel)
  current?: CodatDataContractsDatasetsCommerceDisputePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsCommerceDisputePagedResponseHrefModel)
  next?: CodatDataContractsDatasetsCommerceDisputePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsCommerceDisputePagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsCommerceDisputePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsCommerceDisputePagedResponseHrefModel)
  self?: CodatDataContractsDatasetsCommerceDisputePagedResponseHrefModel;
}