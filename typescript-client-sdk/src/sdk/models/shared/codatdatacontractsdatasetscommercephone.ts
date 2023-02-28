import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommercePhoneTypeEnum } from "./codatdatacontractsdatasetscommercephonetypeenum";
import { Expose } from "class-transformer";


export class CodatDataContractsDatasetsCommercePhone extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CodatDataContractsDatasetsCommercePhoneTypeEnum;
}