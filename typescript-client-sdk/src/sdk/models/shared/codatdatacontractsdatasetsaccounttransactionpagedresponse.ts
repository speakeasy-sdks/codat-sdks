import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAccountTransaction } from "./codatdatacontractsdatasetsaccounttransaction";
import { CodatDataContractsResponsesHalLink } from "./codatdatacontractsresponseshallink";


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