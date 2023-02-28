import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBalanceSheet } from "./codatdatacontractsdatasetsbalancesheet";
import { Expose, Transform, Type } from "class-transformer";


export class CodatPublicApiModelsDataBalanceSheetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  @SpeakeasyMetadata()
  @Expose({ name: "earliestAvailableMonth" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  earliestAvailableMonth?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "mostRecentAvailableMonth" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  mostRecentAvailableMonth?: Date;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsBalanceSheet })
  @Expose({ name: "reports" })
  @Type(() => CodatDataContractsDatasetsBalanceSheet)
  reports: CodatDataContractsDatasetsBalanceSheet[];
}