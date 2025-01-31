import LampON from "../../assets/lamp-on.png";
import LampOFF from "../../assets/lamp-off.png";
import { useMemo } from "react";

interface LampLazyProps {
  isOn: boolean;
  onCountClickOn: (count: number) => void;
}

let count = 0;

export const LampLazy = ({ isOn, onCountClickOn }: LampLazyProps) => {
  const lampImage = useMemo(() => (isOn ? LampON : LampOFF), [isOn]);

  return (
    <img
      width={150}
      height={250}
      src={lampImage}
      alt="lamp"
      onClick={() => isOn && onCountClickOn(count++)}
    />
  );
};
