import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCustomerPagedResponseHrefModel } from "./codatdatacontractsdatasetscustomerpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsCustomerPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsCustomerPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsCustomerPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsCustomerPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsCustomerPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsCustomerPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsCustomerPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsCustomerPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsCustomerPagedResponseHrefModel;
}