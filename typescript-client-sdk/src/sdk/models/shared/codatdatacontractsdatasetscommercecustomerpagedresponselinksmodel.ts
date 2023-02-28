import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceCustomerPagedResponseHrefModel } from "./codatdatacontractsdatasetscommercecustomerpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommerceCustomerPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsCommerceCustomerPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsCommerceCustomerPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsCommerceCustomerPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsCommerceCustomerPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsCommerceCustomerPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsCommerceCustomerPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsCommerceCustomerPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsCommerceCustomerPagedResponseHrefModel;
}