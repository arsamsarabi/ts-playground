type Locations = "Oxford" | "Seville";

function getCountryForLocation(location: Locations): string {
  switch (location) {
    case "Oxford":
      return "England";
    case "Seville":
      return "Spain";
    default:
      throw new Error(`${location satisfies never} is unknown.`);
  }
}

getCountryForLocation("Tehran" as any);
