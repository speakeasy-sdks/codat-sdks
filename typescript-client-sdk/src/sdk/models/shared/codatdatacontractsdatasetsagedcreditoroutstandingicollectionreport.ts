import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAgedCreditorOutstanding } from "./codatdatacontractsdatasetsagedcreditoroutstanding";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsAgedCreditorOutstandingICollectionReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsAgedCreditorOutstanding })
  @Expose({ name: "data" })
  @Type(() => CodatDataContractsDatasetsAgedCreditorOutstanding)
  data: CodatDataContractsDatasetsAgedCreditorOutstanding[];

  @SpeakeasyMetadata()
  @Expose({ name: "generated" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  generated: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "reportDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  reportDate: Date;
}