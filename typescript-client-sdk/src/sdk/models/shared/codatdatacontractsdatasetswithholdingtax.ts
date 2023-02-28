import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatDataContractsDatasetsWithholdingTax extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: number;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}