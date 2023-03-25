import Button from "@/common/Button";
import styles from "@/styles/wallet.module.css";
import { formatAddress } from "@/utils/formatAddress";
import { IconWalletOff, IconX } from "@tabler/icons-react";

interface WalletDetailsProps {
  account?: string | null;
  chainId?: number;
  balance: number;
  handleDisconnectWallet: () => void;
}

interface DetailRowProps {
  label: string;
  value?: string | number | null;
}

const WalletDetails = ({
  account,
  chainId,
  balance,
  handleDisconnectWallet,
}: WalletDetailsProps) => (
  <div className={styles.connected}>
    <div className={styles.table}>
      <DetailRow label="Account" value={account && formatAddress(account)} />
      <DetailRow label="Chain Id" value={chainId} />
      <DetailRow label="Balance" value={`${balance} BNB`} />
    </div>
    <div className={styles.footer}>
      <Button
        type="button"
        onClick={handleDisconnectWallet}
        variant="error"
        icon={<IconWalletOff />}
      >
        Disconnect Wallet
      </Button>
    </div>
  </div>
);

const DetailRow = ({ label, value }: DetailRowProps) => {
  return (
    <div className={styles.row}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>
        {value ?? (
          <IconX
            color={getComputedStyle(document.body).getPropertyValue("--error")}
          />
        )}
      </div>
    </div>
  );
};

export default WalletDetails;
