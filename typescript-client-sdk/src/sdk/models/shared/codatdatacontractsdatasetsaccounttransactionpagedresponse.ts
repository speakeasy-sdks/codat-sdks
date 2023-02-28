import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccountTransaction } from "./codatdatacontractsdatasetsaccounttransaction";
import { CodatDataContractsResponsesHalLink } from "./codatdatacontractsresponseshallink";
import { Expose, plainToInstance, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsAccountTransactionPagedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataContractsResponsesHalLink })
  @Expose({ name: "_links" })
  @Transform(({ value }) => {
    const obj: Record<string, CodatDataContractsResponsesHalLink> = {};
    for (const key in value) {
      obj[key] = plainToInstance(CodatDataContractsResponsesHalLink,
        value[key] as CodatDataContractsResponsesHalLink,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  links?: Record<string, CodatDataContractsResponsesHalLink>;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsAccountTransaction })
  @Expose({ name: "results" })
  @Type(() => CodatDataContractsDatasetsAccountTransaction)
  results?: CodatDataContractsDatasetsAccountTransaction[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults: number;
}