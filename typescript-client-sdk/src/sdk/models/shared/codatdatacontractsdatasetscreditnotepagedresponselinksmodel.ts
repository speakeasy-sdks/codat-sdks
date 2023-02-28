import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCreditNotePagedResponseHrefModel } from "./codatdatacontractsdatasetscreditnotepagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsCreditNotePagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsCreditNotePagedResponseHrefModel)
  current?: CodatDataContractsDatasetsCreditNotePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsCreditNotePagedResponseHrefModel)
  next?: CodatDataContractsDatasetsCreditNotePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsCreditNotePagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsCreditNotePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsCreditNotePagedResponseHrefModel)
  self?: CodatDataContractsDatasetsCreditNotePagedResponseHrefModel;
}