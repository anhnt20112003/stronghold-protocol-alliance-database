export interface OperatorDto {
  name: string;
  //   attributeType: "Can stack" | "Combat" | "Prep" | "One-time";
  attributeType: string;
  attribute: string;
  tier: number;
  alliances: string[];
}
