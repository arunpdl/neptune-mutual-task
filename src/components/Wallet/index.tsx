import Button from "@/common/Button";
import { IconWallet } from "@tabler/icons-react";
import { useState } from "react";
import WalletModal from "./WalletModal";

const Wallet = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalState = (value: boolean) => {
    setIsModalOpen(value);
  };

  return (
    <>
      <div>
        <Button
          onClick={() => handleModalState(true)}
          variant="primary"
          icon={<IconWallet />}
          aria-label="Open Wallet Details"
        >
          View Wallet Details
        </Button>
      </div>
      <WalletModal
        isModalOpen={isModalOpen}
        handleModalState={handleModalState}
      />
    </>
  );
};

export default Wallet;
