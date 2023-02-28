import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBillPaymentLineLink } from "./codatdatacontractsdatasetsbillpaymentlinelink";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsBillPaymentLine extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocatedOnDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsBillPaymentLineLink })
  @Expose({ name: "links" })
  @Type(() => CodatDataContractsDatasetsBillPaymentLineLink)
  links?: CodatDataContractsDatasetsBillPaymentLineLink[];
}