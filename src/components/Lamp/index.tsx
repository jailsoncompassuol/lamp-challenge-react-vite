import LampON from "../../assets/lamp-on.png";
import LampOFF from "../../assets/lamp-off.png";
import { useMemo, useState } from "react";

export const Lamp = () => {
  const [isOn, setIsOn] = useState(false);
  const lampImage = useMemo(() => (isOn ? LampON : LampOFF), [isOn]);

  return (
    <img
      width={150}
      height={250}
      src={lampImage}
      alt="lamp"
      onClick={() => setIsOn(!isOn)}
    />
  );
};
