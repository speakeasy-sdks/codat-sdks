import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsPushPushOption } from "./codatdatacontractspushpushoption";


export class CodatPublicApiModelsDataPushOptionsAggregate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=post" })
  post?: CodatDataContractsPushPushOption;

  @SpeakeasyMetadata({ data: "json, name=put" })
  put?: CodatDataContractsPushPushOption;
}