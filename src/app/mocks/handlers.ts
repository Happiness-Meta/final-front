import { http, HttpResponse } from "msw";

// constants
import { userPortpolio } from "@/app/constants/mswConstansts/userPortpolio";

export const handlers = [
  http.get("/getAllPortPolio", () => {
    return HttpResponse.json(userPortpolio);
  }),
];
