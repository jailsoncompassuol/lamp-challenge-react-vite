import LampON from "../../assets/lamp-on.png";
import LampOFF from "../../assets/lamp-off.png";
import { useEffect, useMemo, useState } from "react";
interface LampLazyProps {
  isOn: boolean;
  onCountClickOn: (count: number) => void;
}

export const LampLazy = ({ isOn, onCountClickOn }: LampLazyProps) => {
  const [countClickOn, setCountClickOn] = useState(0);
  const lampImage = useMemo(() => (isOn ? LampON : LampOFF), [isOn]);

  useEffect(() => {
    onCountClickOn(countClickOn);
  }, [countClickOn, onCountClickOn]);

  return (
    <img
      width={150}
      height={250}
      src={lampImage}
      alt="lamp"
      onClick={() => isOn && setCountClickOn(countClickOn + 1)}
    />
  );
};
