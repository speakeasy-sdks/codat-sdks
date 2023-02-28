import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsPhoneTypeEnum } from "./codatdatacontractsdatasetsphonetypeenum";
import { Expose } from "class-transformer";


export class CodatDataContractsDatasetsPhone extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "number" })
  number?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: CodatDataContractsDatasetsPhoneTypeEnum;
}