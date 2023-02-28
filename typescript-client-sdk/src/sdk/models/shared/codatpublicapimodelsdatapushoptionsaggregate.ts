import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsPushPushOption } from "./codatdatacontractspushpushoption";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsDataPushOptionsAggregate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "post" })
  @Type(() => CodatDataContractsPushPushOption)
  post?: CodatDataContractsPushPushOption;

  @SpeakeasyMetadata()
  @Expose({ name: "put" })
  @Type(() => CodatDataContractsPushPushOption)
  put?: CodatDataContractsPushPushOption;
}