import React from 'react';
import { Text, View } from 'react-native';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../hooks/useCountdown';

const ExpiredNotice = () => {
  return (
    <View>
      <Text>Please select stations to get started.</Text>
    </View>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {/* <DateTimeDisplay value={days} type={'Days'} />
      <Text>:</Text>
      <DateTimeDisplay value={hours} type={'Hours'} />
      <Text>:</Text> */}
      <DateTimeDisplay value={minutes} type={'Mins'} />
      <DateTimeDisplay value={seconds} type={'Seconds'} />
    </View>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
