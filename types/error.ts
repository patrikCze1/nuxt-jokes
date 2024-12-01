export interface ApiError {
  statusCode: number;
  statusMessage: string;
  data: unknown;
}
