import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsValidationValidationItem } from "./codatdatacontractsvalidationvalidationitem";



export class CodatDataContractsValidationValidationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: CodatDataContractsValidationValidationItem })
  errors?: CodatDataContractsValidationValidationItem[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: CodatDataContractsValidationValidationItem })
  warnings?: CodatDataContractsValidationValidationItem[];
}
