import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceTransactionPagedResponseHrefModel } from "./codatdatacontractsdatasetscommercetransactionpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommerceTransactionPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsCommerceTransactionPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsCommerceTransactionPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsCommerceTransactionPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsCommerceTransactionPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsCommerceTransactionPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsCommerceTransactionPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsCommerceTransactionPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsCommerceTransactionPagedResponseHrefModel;
}