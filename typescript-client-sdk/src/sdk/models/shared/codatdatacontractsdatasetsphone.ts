import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsDatasetsPhoneTypeEnum } from "./codatdatacontractsdatasetsphonetypeenum";



export class CodatDataContractsDatasetsPhone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CodatDataContractsDatasetsPhoneTypeEnum;
}
