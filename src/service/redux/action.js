
export function updateAccessToken(input) {
    return {
      type: "getAccessToken",
      payload: input
    };
  }

