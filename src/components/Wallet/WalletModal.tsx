import Modal from "@/common/Modal";
import { injected } from "@/utils/connectors";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import WalletDetails from "./WalletDetails";
import WalletDisconnected from "./WalletDisconnected";

interface WalletModalProps {
  isModalOpen: boolean;
  handleModalState: (value: boolean) => void;
}

const WalletModal = ({ isModalOpen, handleModalState }: WalletModalProps) => {
  const {
    chainId,
    account,
    activate,
    deactivate,
    setError,
    active,
    library,
    connector,
  } = useWeb3React<Web3Provider>();
  const [balance, setBalance] = useState(0);

  const handleConnectWallet = () => {
    activate(
      injected,
      (error) => {
        setError(error);
        toast.error(error.message || "Error connecting to wallet");
      },
      false
    );
  };

  const handleDisconnectWallet = () => {
    deactivate();
  };

  useEffect(() => {
    if (active && account) {
      const getBalance = async () => {
        const balance = await library?.getBalance(account);

        setBalance(Number(balance?.toString()) / Math.pow(10, 18));
      };

      getBalance();
    }
  }, [chainId, account, active, library, connector]);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => handleModalState(false)}
      title="Wallet Details"
    >
      {!active ? (
        <WalletDisconnected handleConnectWallet={handleConnectWallet} />
      ) : (
        <WalletDetails
          account={account}
          chainId={chainId}
          balance={balance}
          handleDisconnectWallet={handleDisconnectWallet}
        />
      )}
    </Modal>
  );
};

export default WalletModal;
