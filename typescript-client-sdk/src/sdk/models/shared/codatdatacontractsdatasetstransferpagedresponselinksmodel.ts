import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsTransferPagedResponseHrefModel } from "./codatdatacontractsdatasetstransferpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsTransferPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsTransferPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsTransferPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsTransferPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsTransferPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsTransferPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsTransferPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsTransferPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsTransferPagedResponseHrefModel;
}