import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBillCreditNotePagedResponseHrefModel } from "./codatdatacontractsdatasetsbillcreditnotepagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsBillCreditNotePagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsBillCreditNotePagedResponseHrefModel)
  current?: CodatDataContractsDatasetsBillCreditNotePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsBillCreditNotePagedResponseHrefModel)
  next?: CodatDataContractsDatasetsBillCreditNotePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsBillCreditNotePagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsBillCreditNotePagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsBillCreditNotePagedResponseHrefModel)
  self?: CodatDataContractsDatasetsBillCreditNotePagedResponseHrefModel;
}