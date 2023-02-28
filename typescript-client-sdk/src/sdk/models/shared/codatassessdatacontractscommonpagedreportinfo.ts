import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class CodatAssessDataContractsCommonPagedReportInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "generatedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  generatedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "reportName" })
  reportName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}