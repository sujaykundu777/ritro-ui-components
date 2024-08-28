export interface ButtonWithLoadingSpinnerProps {
  onClick: () => void;
  loading: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}
