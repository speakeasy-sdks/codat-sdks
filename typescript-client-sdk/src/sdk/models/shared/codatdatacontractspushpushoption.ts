import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsPushOptionTypeEnum } from "./codatdatacontractspushoptiontypeenum";
import { CodatDataContractsPushPushOptionChoice } from "./codatdatacontractspushpushoptionchoice";
import { CodatDataContractsPushPushValidationInfo } from "./codatdatacontractspushpushvalidationinfo";
import { Expose, plainToInstance, Transform, Type } from "class-transformer";


export class CodatDataContractsPushPushOption extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: CodatDataContractsPushPushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => CodatDataContractsPushPushOptionChoice)
  options?: CodatDataContractsPushPushOptionChoice[];

  @SpeakeasyMetadata({ elemType: CodatDataContractsPushPushOption })
  @Expose({ name: "properties" })
  @Transform(({ value }) => {
    const obj: Record<string, CodatDataContractsPushPushOption> = {};
    for (const key in value) {
      obj[key] = plainToInstance(CodatDataContractsPushPushOption,
        value[key] as CodatDataContractsPushPushOption,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  properties?: Record<string, CodatDataContractsPushPushOption>;

  @SpeakeasyMetadata()
  @Expose({ name: "rel" })
  rel?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: CodatDataContractsPushOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => CodatDataContractsPushPushValidationInfo)
  validation?: CodatDataContractsPushPushValidationInfo;
}