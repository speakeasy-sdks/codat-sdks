import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsJournalPagedResponseHrefModel } from "./codatdatacontractsdatasetsjournalpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsJournalPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsJournalPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsJournalPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsJournalPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsJournalPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsJournalPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsJournalPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsJournalPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsJournalPagedResponseHrefModel;
}