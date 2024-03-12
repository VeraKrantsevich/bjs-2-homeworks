class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (callback === undefined || time === undefined || callback === 0 || time === 0) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    if (this.alarmCollection.find((e) => e.time === time && e.time !== undefined)) {
      return console.warn("Уже присутствует звонок на это же время");
    }
    this.alarmCollection.push({
      callback: callback,
      time: time,
      canCall: true,
      });
    }

  removeClock(time) {
    let alarm = this.alarmCollection.filter((e) => e.time === time);
    if (alarm.length !== 0) {
      let i = this.alarmCollection.findIndex((e) => e.time === time);
      if (i !== -1) {
      return this.alarmCollection.splice(i, 1);
      }
    }
  }

  getCurrentFormattedTime() {
    const currentDate = new Date();
    return `${currentDate.getHours()}:${currentDate.getMinutes()}`;
  }

  start() {
    if (this.intervalId !== undefined && this.intervalId !== 0) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((e) => {
      if (e.time === this.getCurrentFormattedTime() && e.canCall) {
        e.canCall = false;
        e.callback();
      }
    });
    }, 1000);
  }

  stop() {
    if (this.intervalId === 0) {
      return;
    }
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((e) => {
      e.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }   
}