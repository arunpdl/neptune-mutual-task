import Button from "@/common/Button";
import NumberInput from "@/common/NumberInput";
import styles from "@/styles/converter.module.css";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { useState } from "react";

const validNumberRegex = /^[0-9]*\.?[0-9]*$/;

const ConverterForm = () => {
  const [nep, setNep] = useState<string>("");
  const [busd, setBusd] = useState<string>("");

  const handleNepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value && validNumberRegex.test(value)) {
      setNep(value);
      const busdValue = parseFloat(value) * 3;
      setBusd(busdValue.toFixed(2).toString());
    } else if (value === "") {
      resetForm();
    }
  };

  const handleBusdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value && validNumberRegex.test(value)) {
      setBusd(value);
      const nepValue = parseFloat(value) / 3;
      setNep(nepValue.toFixed(2).toString());
    } else {
      resetForm();
    }
  };

  const resetForm = () => {
    setNep("");
    setBusd("");
  };

  return (
    <div className={styles.converter}>
      <h1 className={styles.title}>Crypto Converter</h1>
      <NumberInput
        id="nep"
        placeholder="Enter NEP amount"
        label="NEP"
        value={nep}
        onChange={handleNepChange}
      />

      <NumberInput
        id="busd"
        placeholder="Enter BUSD amount"
        label="BUSD"
        value={busd}
        onChange={handleBusdChange}
      />

      <Button
        variant="error"
        onClick={resetForm}
        icon={<IconSquareRoundedX />}
        disabled={nep === "" && busd === ""}
        aria-label="Reset button"
      >
        Reset
      </Button>
    </div>
  );
};

export default ConverterForm;
