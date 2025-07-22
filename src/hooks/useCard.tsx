

const useCard = () => {
  const verveString = sessionStorage.getItem("verve-pin");
  const vervePin = verveString ? JSON.parse(verveString) : null;

  const masterPoundsString = sessionStorage.getItem("master-pounds-pin");
  const masterPoundsPin = masterPoundsString
    ? JSON.parse(masterPoundsString)
    : null;

  const platinumNairaString = sessionStorage.getItem("platinum-naira-pin");
  const platinumNairaPin = platinumNairaString
    ? JSON.parse(platinumNairaString)
    : null;

  const platinumUSDString = sessionStorage.getItem("platinum-usd-pin");
  const platinumUSDPin = platinumUSDString
    ? JSON.parse(platinumUSDString)
    : null;

  const masterUSDString = sessionStorage.getItem("master-usd-pin");
  const masterUSDPin = masterUSDString ? JSON.parse(masterUSDString) : null;
  return {
    vervePin,
    masterPoundsPin,
    platinumNairaPin,
    platinumUSDPin,
    masterUSDPin,
  };
};

export { useCard };
