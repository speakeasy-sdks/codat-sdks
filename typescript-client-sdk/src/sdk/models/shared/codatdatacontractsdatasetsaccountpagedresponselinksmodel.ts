import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccountPagedResponseHrefModel } from "./codatdatacontractsdatasetsaccountpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsAccountPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsAccountPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsAccountPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsAccountPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsAccountPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsAccountPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsAccountPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsAccountPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsAccountPagedResponseHrefModel;
}