import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsValidationValidationItem } from "./codatdatacontractsvalidationvalidationitem";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsValidationValidationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataContractsValidationValidationItem })
  @Expose({ name: "errors" })
  @Type(() => CodatDataContractsValidationValidationItem)
  errors?: CodatDataContractsValidationValidationItem[];

  @SpeakeasyMetadata({ elemType: CodatDataContractsValidationValidationItem })
  @Expose({ name: "warnings" })
  @Type(() => CodatDataContractsValidationValidationItem)
  warnings?: CodatDataContractsValidationValidationItem[];
}