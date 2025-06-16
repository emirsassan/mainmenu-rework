export interface UpdateRouteEvent {
  detail: {
    route: string;
    state: {
      isMainMenu: boolean
    };
  };
}
