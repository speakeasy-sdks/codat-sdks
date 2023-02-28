import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBankTransactionPagedResponseHrefModel } from "./codatdatacontractsdatasetsbanktransactionpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsBankTransactionPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsBankTransactionPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsBankTransactionPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsBankTransactionPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsBankTransactionPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsBankTransactionPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsBankTransactionPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsBankTransactionPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsBankTransactionPagedResponseHrefModel;
}