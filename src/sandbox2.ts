type Simulation = {
  startHour: number;
  endHour: number;
};

type Campaign = {
  day: string;
  startHour: number;
  endHour: number;
};

const weekData = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

const simulation: Simulation[] = [
  {
    startHour: 1,
    endHour: 3,
  },
  {
    startHour: 7,
    endHour: 8,
  },
  {
    startHour: 10,
    endHour: 11,
  },
];

const a = weekData
  .map((week) => {
    return simulation.map((sim) => ({
      day: week,
      ...sim,
    }));
  })
  .flat();

console.log(a);
