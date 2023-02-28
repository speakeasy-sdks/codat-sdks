import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsPushPushFieldValidation } from "./codatdatacontractspushpushfieldvalidation";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsPushPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataContractsPushPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => CodatDataContractsPushPushFieldValidation)
  information?: CodatDataContractsPushPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: CodatDataContractsPushPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => CodatDataContractsPushPushFieldValidation)
  warnings?: CodatDataContractsPushPushFieldValidation[];
}