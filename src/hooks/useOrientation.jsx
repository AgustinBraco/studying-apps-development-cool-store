import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from 'react';

export default function useOrientation() {
  const [screenOrientation, setScreenOrientation] = useState(
    ScreenOrientation.Orientation.PORTRAIT_UP
  );

  useEffect(() => {
    const orientationChange = (currenteOrientation) => {
      const orientationValue = currenteOrientation.orientationInfo.orientation;
      setScreenOrientation(orientationValue);
    };

    const initScreenOrientation = async () => {
      const currenteOrientation = await ScreenOrientation.getOrientationAsync();
      setScreenOrientation(currenteOrientation);
    };

    const screnOrientationListener = ScreenOrientation.addOrientationChangeListener(orientationChange);

    initScreenOrientation();

    return () => {
      ScreenOrientation.removeOrientationChangeListener(screnOrientationListener);
    };
  }, []);

  return screenOrientation === 3 || screenOrientation === 4 ? 'LANDSCAPE' : 'PORTRAIT';
};