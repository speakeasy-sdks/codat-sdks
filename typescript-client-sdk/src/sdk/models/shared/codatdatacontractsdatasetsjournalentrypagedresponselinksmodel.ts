import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsJournalEntryPagedResponseHrefModel } from "./codatdatacontractsdatasetsjournalentrypagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsJournalEntryPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsJournalEntryPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsJournalEntryPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsJournalEntryPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsJournalEntryPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsJournalEntryPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsJournalEntryPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsJournalEntryPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsJournalEntryPagedResponseHrefModel;
}