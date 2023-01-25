import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsResponsesHalLink } from "./codatdatacontractsresponseshallink";
import { CodatDataContractsDatasetsAccountTransaction } from "./codatdatacontractsdatasetsaccounttransaction";



export class CodatDataContractsDatasetsAccountTransactionPagedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: CodatDataContractsResponsesHalLink })
  links?: Record<string, CodatDataContractsResponsesHalLink>;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataContractsDatasetsAccountTransaction })
  results?: CodatDataContractsDatasetsAccountTransaction[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}
