class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!callback || !time) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    if (this.alarmCollection.find((e) => e.time === time)) {
      console.warn("Уже присутствует звонок на это же время");
    }
    this.alarmCollection.push({
      callback: callback,
      time: time,
      canCall: true,
      });
    }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter((e) => e.time !== time);
  }

  getCurrentFormattedTime() {
    const currentDate = new Date();
    return currentDate.toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  start() {
    if (this.intervalId) {
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