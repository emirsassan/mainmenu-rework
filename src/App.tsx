import { useEffect, useRef, useState } from "react";
import type { UpdateRouteEvent } from "./entities/events";
import { Button } from "./components/ui/button";
import type { MinecraftScreen } from "./entities";

export const App = () => {
  const [showUi, setShowUi] = useState(true);
  const firstRun = useRef(true);

  useEffect(() => {
    console.log("Welcome to Celestial ui!");

    const handleUpdateRoute = (data: UpdateRouteEvent) => {
      // TODO handle via react router
      if (!firstRun.current) {
        // ignore first run
        setShowUi(data.detail.route !== "/");
      }
      firstRun.current = false;
      console.log(data.detail.route);
      window.lunar.setActiveRoute(data.detail.route);
    };
    window.lunar.subscribe("route", handleUpdateRoute);

    return () => {
      window.lunar.unsubscribe("route", handleUpdateRoute);
    };
  }, []);

  const navigateMinecraftScreen = (screen: MinecraftScreen) => {
    setShowUi(false);
    window.lunar.setScreen(screen);
  };

  return (
    <div
      className={
        "h-screen flex flex-col justify-center items-center gap-2" +
        (!showUi ? " hidden" : "")
      }
    >
      <h1 className="select-none text-white text-3xl">
        Welcome to LunarCN/Celestial
      </h1>

      <div className="flex flex-row gap-2">
        <Button onClick={() => navigateMinecraftScreen("SINGLEPLAYER")}>
          Singleplayer
        </Button>
        <Button onClick={() => navigateMinecraftScreen("MULTIPLAYER")}>
          Multiplayer
        </Button>
      </div>

      <p className="text-white">
        Powered by{" "}
        <label className="underline text-cyan-500">lunarclient.top</label>
      </p>
    </div>
  );
};
