import { TimeStamp } from "./time-stamp";

/**
 * UserHeatmapData represents the data needed to create a heatmap
 * @export
 * @interface UserHeatmapData
 */

export interface UserHeatmapData {
  /**
   *
   * @type {number}
   * @memberof UserHeatmapData
   */
  contributions: number;
  /**
   *
   * @type {TimeStamp}
   * @memberof UserHeatmapData
   */
  timestamp: TimeStamp;
}
