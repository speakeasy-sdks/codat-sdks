import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccountRef } from "./codatdatacontractsdatasetsaccountref";
import { CodatDataContractsDatasetsTracking } from "./codatdatacontractsdatasetstracking";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsJournalLine extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CodatDataContractsDatasetsAccountRef)
  accountRef?: CodatDataContractsDatasetsAccountRef;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "netAmount" })
  netAmount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => CodatDataContractsDatasetsTracking)
  tracking?: CodatDataContractsDatasetsTracking;
}