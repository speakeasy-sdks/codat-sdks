import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommercePhoneTypeEnum } from "./codatdatacontractsdatasetscommercephonetypeenum";



export class CodatDataContractsDatasetsCommercePhone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CodatDataContractsDatasetsCommercePhoneTypeEnum;
}
