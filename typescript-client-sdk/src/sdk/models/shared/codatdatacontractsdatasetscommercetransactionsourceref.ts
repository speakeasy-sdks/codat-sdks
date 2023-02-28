import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceTransactionRefTypeEnum } from "./codatdatacontractsdatasetscommercetransactionreftypeenum";
import { Expose } from "class-transformer";


export class CodatDataContractsDatasetsCommerceTransactionSourceRef extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CodatDataContractsDatasetsCommerceTransactionRefTypeEnum;
}