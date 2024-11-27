document.addEventListener("DOMContentLoaded", () => {
    class Timer {
        constructor(hours = 12, minutes = 25, seconds = 45) {
            this.remainingTime = (hours * 3600) + (minutes * 60) + seconds;
            this.timer = null;
            this.currentTime = { hours: 0, minutes: 0, seconds: 0 };
            this.refs = this.getTimerElements();
        }

        getTimerElements() {
            return {
                hoursTens: document.querySelector("#hours-tens"),
                hoursUnits: document.querySelector("#hours-units"),
                minutesTens: document.querySelector("#minutes-tens"),
                minutesUnits: document.querySelector("#minutes-units"),
                secondsTens: document.querySelector("#seconds-tens"),
                secondsUnits: document.querySelector("#seconds-units"),
            };
        }

        start() {
            console.log("Timer iniciado");
            this.updateTimer();
            this.timer = setInterval(() => this.updateTimer(), 1000);

            window.addEventListener('beforeunload', () => this.stop());
        }

        stop() {
            console.log("Timer finalizado");
            clearInterval(this.timer);
        }

        animateNumberChange(element, newValue) {
            if (!element) return;

            const numberElement = element.querySelector(".number");
            if (numberElement && numberElement.textContent !== String(newValue)) {
                numberElement.style.transition = "opacity 0.4s, transform 0.4s";
                numberElement.style.opacity = "0";
                numberElement.style.transform = "translateY(20px)";
                setTimeout(() => {
                    numberElement.textContent = newValue;
                    numberElement.style.opacity = "1";
                    numberElement.style.transform = "translateY(0)";
                }, 400);
            }
        }


        updateTimer() {
            if (this.remainingTime < 0) {
                this.stop();
                return;
            }

            const time = this.calculateTimeUnits(this.remainingTime);
            this.updateDisplay(time);
            this.remainingTime--;
        }

        calculateTimeUnits(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            return {
                hours,
                minutes,
                seconds: secs,
                hoursTens: Math.floor(hours / 10),
                hoursUnits: hours % 10,
                minutesTens: Math.floor(minutes / 10),
                minutesUnits: minutes % 10,
                secondsTens: Math.floor(secs / 10),
                secondsUnits: secs % 10,
            };
        }

        updateDisplay(time) {
            const { refs } = this;

            this.animateNumberChange(refs.hoursTens, time.hoursTens);
            this.animateNumberChange(refs.hoursUnits, time.hoursUnits);
            this.animateNumberChange(refs.minutesTens, time.minutesTens);
            this.animateNumberChange(refs.minutesUnits, time.minutesUnits);
            this.animateNumberChange(refs.secondsTens, time.secondsTens);
            this.animateNumberChange(refs.secondsUnits, time.secondsUnits);
        }
    }

    const timer = new Timer(11, 59, 59);
    timer.start();
});
