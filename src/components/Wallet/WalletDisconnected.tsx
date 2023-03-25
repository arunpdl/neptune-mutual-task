import Button from "@/common/Button";
import styles from "@/styles/wallet.module.css";
import { IconArrowBigDownLines, IconWallet } from "@tabler/icons-react";

interface WalletDisconnectedProps {
  handleConnectWallet: () => void;
}

const WalletDisconnected = ({
  handleConnectWallet,
}: WalletDisconnectedProps) => {
  return (
    <div className={styles.disconnected}>
      <div className={styles.content}>
        <span>Wallet not connected.</span>
        <div className={styles.icon}>
          <IconArrowBigDownLines size={48} aria-label="Downward arrow icon" />
        </div>
      </div>
      <div className={styles.footer}>
        <Button
          variant="primary"
          onClick={handleConnectWallet}
          icon={<IconWallet />}
        >
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};

export default WalletDisconnected;
