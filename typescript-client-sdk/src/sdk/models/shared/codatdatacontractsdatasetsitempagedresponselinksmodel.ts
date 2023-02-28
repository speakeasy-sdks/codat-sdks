import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsItemPagedResponseHrefModel } from "./codatdatacontractsdatasetsitempagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsItemPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsItemPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsItemPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsItemPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsItemPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsItemPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsItemPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsItemPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsItemPagedResponseHrefModel;
}