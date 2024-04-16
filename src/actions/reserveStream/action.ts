"use server";

import { emistream } from "../../api";
import { ReserveStreamProps } from "./types";

const errorMessage = "Reserving stream failed.";

export async function reserveStream({ event, record }: ReserveStreamProps) {
  try {
    const { data, error } = await emistream.POST("/reserve", {
      body: {
        event: event,
        record: record,
      },
    });

    if (error) return { data: undefined, error: errorMessage };
    return { data, error: undefined };
  } catch (error) {
    return { data: undefined, error: errorMessage };
  }
}
