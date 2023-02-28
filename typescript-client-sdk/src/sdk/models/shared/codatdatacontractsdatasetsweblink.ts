import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsWebLinkTypeEnum } from "./codatdatacontractsdatasetsweblinktypeenum";
import { Expose } from "class-transformer";


export class CodatDataContractsDatasetsWebLink extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: CodatDataContractsDatasetsWebLinkTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}