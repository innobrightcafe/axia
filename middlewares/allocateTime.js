export function timeGen(duration) {
  const dur = parseInt(duration) * 30;
  const currentTime = new Date();
  const setTime = new Date();

  setTime.setDate(setTime.getDate() + dur);
  const timeDiff = setTime - currentTime;
  console.log(duration, currentTime, setTime);
  console.log(timeDiff);

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
  };

  return timeObj;
}
