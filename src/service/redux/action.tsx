
export function updateAccessToken(input:string) {
    return {
      type: "getAccessToken",
      payload: input
    };
  }

