import { eachDayOfInterval, getDay } from 'date-fns';
import { countBy } from 'lodash';

/**
 * 開発しやすくするためTypeScriptで記述
 */
type Week =
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday';

type DayNumber = number;

type Schedule = {
  day: Week;
  startHour: number;
  endHour: number;
};
type CampaignResponse = {
  weeklyDeliverySchedule: Schedule[];
};

type TotalByDay = {
  [key in Week]: number;
};

type ScheduleByDay = {
  [key in Week]: number[][];
};

/** キャンペーン画面配信曜日設定 */
const campaignResponseExample: CampaignResponse = {
  weeklyDeliverySchedule: [
    {
      day: 'monday',
      startHour: 0,
      endHour: 0,
    },
    {
      startHour: 11,
      endHour: 15,
      day: 'monday',
    },
    {
      startHour: 18,
      endHour: 19,
      day: 'monday',
    },
    {
      day: 'tuesday',
      startHour: 1,
      endHour: 10,
    },
    {
      startHour: 14,
      endHour: 15,
      day: 'tuesday',
    },
    {
      startHour: 18,
      endHour: 20,
      day: 'tuesday',
    },
    {
      day: 'thursday',
      startHour: 0,
      endHour: 0,
    },
    {
      startHour: 17,
      endHour: 21,
      day: 'thursday',
    },
    {
      day: 'friday',
      startHour: 11,
      endHour: 18,
    },
    {
      day: 'saturday',
      startHour: 15,
      endHour: 18,
    },
    {
      day: 'sunday',
      startHour: 18,
      endHour: 19,
    },
  ],
};

/**
 * 配信期間
 * 6/1(月) - 6/11（木）
 */
// 2020/6/1
const start = new Date(2020, 6 - 1, 1);
// 2020/6/11
const end = new Date(2020, 6 - 1, 11);

/** 処理関数群*/
// 期間内のDateオブジェクトを取得
const getDays = (start: Date, end: Date): DayNumber[] => {
  const dateList = eachDayOfInterval({ start, end });
  return dateList.map((date) => getDay(date));
};

// 期間内の曜日別合計値を取得
const getTotalByDay = (days: DayNumber[]): TotalByDay => {
  const defaultTotalByDay: TotalByDay = {
    sunday: 0,
    monday: 0,
    thursday: 0,
    wednesday: 0,
    tuesday: 0,
    friday: 0,
    saturday: 0,
  };
  return days.reduce((acc, cur) => {
    switch (cur) {
      case 0:
        acc.sunday++;
        return acc;
      case 1:
        acc.monday++;
        return acc;
      case 2:
        acc.tuesday++;
        return acc;
      case 3:
        acc.wednesday++;
        return acc;
      case 4:
        acc.thursday++;
        return acc;
      case 5:
        acc.friday++;
        return acc;
      case 6:
        acc.saturday++;
        return acc;
    }
    return acc;
  }, defaultTotalByDay);
};

// 時間帯の間隔を時間帯番号で埋めるUtil関数
// ex: 1 〜 3 -> [1,2,3]
const makeScheduleHours = (schedule: Schedule): DayNumber[] => {
  const { startHour, endHour } = schedule;
  const length = endHour - startHour + 1;
  return new Array(length).fill(null).map((_, i) => startHour + i);
};

// 時間帯を曜日別に分ける
const getHourByDay = (weeklyDeliverySchedule: Schedule[]) => {
  const defaultScheduleByDay: ScheduleByDay = {
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
  };
  return weeklyDeliverySchedule.reduce((acc, schedule) => {
    const hours = makeScheduleHours(schedule);
    switch (schedule.day) {
      case 'sunday':
        acc.sunday.push(hours);
        return acc;
      case 'monday':
        acc.monday.push(hours);
        return acc;
      case 'tuesday':
        acc.tuesday.push(hours);
        return acc;
      case 'wednesday':
        acc.wednesday.push(hours);
        return acc;
      case 'thursday':
        acc.thursday.push(hours);
        return acc;
      case 'friday':
        acc.friday.push(hours);
        return acc;
      case 'saturday':
        acc.saturday.push(hours);
        return acc;
      default:
        return acc;
    }
  }, defaultScheduleByDay);
};

// 配信時間帯 * 曜日数で全配信時間帯を取得
const getAllHours = (hourByDay: ScheduleByDay, totalByDay: TotalByDay) => {
  return Object.entries(hourByDay)
    .map(([key, value]) => {
      const total = totalByDay[key as Week];
      return value
        .flat()
        .map((n) => new Array(total).fill(n))
        .flat();
    })
    .flat();
};

// シミュレーション用リクエストを取得
const getDeliveryDaysSpecificHour = (allHours: DayNumber[]) => {
  const countedHour = countBy(allHours);
  return Object.entries(countedHour).map(([hour, days]) => {
    return {
      hour: Number(hour),
      days,
    };
  });
};

const days = getDays(start, end);
const totalByDay = getTotalByDay(days);
const hourByDay = getHourByDay(campaignResponseExample.weeklyDeliverySchedule);
const allHours = getAllHours(hourByDay, totalByDay);
const deliveryDaysSpecificHour = getDeliveryDaysSpecificHour(allHours);
// 出力
console.log(deliveryDaysSpecificHour);
