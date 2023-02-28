import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsPaymentLineLink } from "./codatdatacontractsdatasetspaymentlinelink";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsPaymentLine extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "allocatedOnDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsPaymentLineLink })
  @Expose({ name: "links" })
  @Type(() => CodatDataContractsDatasetsPaymentLineLink)
  links?: CodatDataContractsDatasetsPaymentLineLink[];
}