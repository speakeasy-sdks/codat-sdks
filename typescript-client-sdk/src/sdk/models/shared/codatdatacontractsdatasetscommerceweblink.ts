import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceWebLinkTypeEnum } from "./codatdatacontractsdatasetscommerceweblinktypeenum";
import { Expose } from "class-transformer";


export class CodatDataContractsDatasetsCommerceWebLink extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CodatDataContractsDatasetsCommerceWebLinkTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}