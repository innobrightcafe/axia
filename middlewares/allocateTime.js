export function timeGen(duration) {
  const dur = parseFloat(duration) * 30;
  const currentTime = new Date();
  const setTime = new Date();
  const durSeconds = parseInt(Math.round(dur * 24 * 60 * 60 * 1000));

  setTime.setDate(setTime.getDate() + dur);
  const timeDiff = setTime - currentTime;
  console.log(duration, currentTime, setTime);
  console.log("Duration in seconds: ", durSeconds / 1000);

  const currentDate = `${currentTime.getDate()}/${
    currentTime.getMonth() + 1
  }/${currentTime.getFullYear()}`;

  const setDate = `${setTime.getDate()}/${
    setTime.getMonth() + 1
  }/${setTime.getFullYear()}`;

  const timeObj = {
    timeDiff,
    currentTime,
    setTime,
    currentDate,
    setDate,
    durSeconds,
  };

  return timeObj;
}
