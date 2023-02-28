import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAgedDebtorOutstanding } from "./codatdatacontractsdatasetsageddebtoroutstanding";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsAgedDebtorOutstandingICollectionReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsAgedDebtorOutstanding })
  @Expose({ name: "data" })
  @Type(() => CodatDataContractsDatasetsAgedDebtorOutstanding)
  data: CodatDataContractsDatasetsAgedDebtorOutstanding[];

  @SpeakeasyMetadata()
  @Expose({ name: "generated" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  generated: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "reportDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  reportDate: Date;
}