import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAgedOutstandingAmountDetail } from "./codatdatacontractsdatasetsagedoutstandingamountdetail";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsAgedOutstandingAmount extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount?: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsAgedOutstandingAmountDetail })
  @Expose({ name: "details" })
  @Type(() => CodatDataContractsDatasetsAgedOutstandingAmountDetail)
  details?: CodatDataContractsDatasetsAgedOutstandingAmountDetail[];

  @SpeakeasyMetadata()
  @Expose({ name: "fromDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  fromDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "toDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  toDate?: Date;
}