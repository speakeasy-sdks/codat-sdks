import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsPushPushFieldValidation } from "./codatdatacontractspushpushfieldvalidation";


export class CodatDataContractsPushPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=information", elemType: CodatDataContractsPushPushFieldValidation })
  information?: CodatDataContractsPushPushFieldValidation[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: CodatDataContractsPushPushFieldValidation })
  warnings?: CodatDataContractsPushPushFieldValidation[];
}