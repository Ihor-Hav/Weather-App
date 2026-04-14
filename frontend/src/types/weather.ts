export interface Weather {
  resolvedAddress: string;
  currentConditions: {
    temp: number;
    conditions: string;
  };
  days: Day[];
  icon: string;
}

export interface Day {
  icon: string;
  temp: number;
  tempmax: number;
  tempmin: number;
  conditions: string;
  precipprob: number;
  humidity: number;
  windspeed: number;
  datetime: Date;
  hours: Hour[];
}

export interface Hour {
  icon: string;
  tempmax: number;
  tempmin: number;
}
